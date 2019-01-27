require('dotenv').config()

// Require client
const Openprovider = require('./index')

const config = {
  username: process.env.OP_USERNAME,
  // password or hash. If you fill both hash is used.
  password: process.env.OP_PASSWORD,
  hash: process.env.OP_HASH,
  cli: true
}

// Create new client using hash
const OpenproviderClient = new Openprovider(config)

// Example dns request using promises
const run = async (command, params) => {
  console.log(`Running '${command}' with params ${JSON.stringify(params)}...`)
  const result = await OpenproviderClient.request(command, params)

  const {
    code: code,
    desc: desc,
    data: {
      total,
      results: {
        array:
          {item: results}
      }
    }
  } = result.openXML.reply

  console.log(`Result desc: '${desc}', code: '${code}' total: '${total}'`)

  return {code, desc, total, results}
}

const argv = require('minimist')(process.argv.slice(2))

const { _: [command], ...params } = argv

run(command, params)
  .then((result) => {
    console.log(result)
  })
  .catch((error) => {
    console.log(error)
  })
