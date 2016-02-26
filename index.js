'use strict'
const Promise = require('bluebird')
const request = require('superagent-promise')(require('superagent'), Promise)
const xml2js = require('xml2js')
const builder = new xml2js.Builder()
const parser = new xml2js.Parser()

class openprovider {
  /**
   * Initialize request object
   * @param config
   */
  constructor (config) {
    this.requestObject = {
      openXML: {
        credentials: {
          username: config.username
        }
      }
    }

    if (typeof config.hash !== 'undefined') {
      this.requestObject.openXML.credentials.hash = config.hash
    } else if (typeof config.password !== 'undefined') {
      this.requestObject.openXML.credentials.password = config.password
    }
  }

  /**
   * Create openprovider xml command
   * @param command
   * @param params
   */
  command (command, params) {
    // Don't mutate the request object.
    let requestObject = Object.assign({}, this.requestObject)
    requestObject.openXML[command] = params

    return builder.buildObject(requestObject)
  }

  /**
   * Request a given openprovider command
   * @param command
   * @param params
   * @param callback
   */
  request (command, params, callback) {
    const xml = this.command(command, params)
    return new Promise(function (resolve, reject) {
      return request
        .post('https://api.openprovider.eu')
        .accept('xml')
        .timeout(10000)
        .send(xml)
        .then(function (response) {
          parser.parseString(response.text, function (error, result) {
            if (typeof callback === 'function') {
              callback(error, result)
            }
            if (error) {
              reject(error)
            }
            resolve(result)
          })
        })
        .catch(function (error) {
          if (typeof callback === 'function') {
            callback(error, null)
          }
          reject(error)
        })
    })
  }
}

module.exports = openprovider
