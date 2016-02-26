// Require client
const Openprovider = require('../index')

// Create new client using hash
const OpenproviderClient = new Openprovider({
  username: 'user',
  // password or hash. If you fill both hash is used.
  password: 'password',
  hash: 'hash'
})

// Example dns request using promises
function requestDomainDnsZonePromise (domain) {
  return OpenproviderClient.request('searchZoneDnsRequest', {
    namePattern: '%' + domain + '%'
  })
}

requestDomainDnsZonePromise('example.com').then(function (response) {
  // Parsed xml response
  console.log(response)
}).catch(function (error) {
  // Request or XML parse errors
  console.log(error)
})

// Example dns request using callback
function requestDomainDnsZoneCallback (domain, callback) {
  return OpenproviderClient.request('searchZoneDnsRequest', {
    namePattern: '%' + domain + '%'
  }, callback)
}

requestDomainDnsZoneCallback('example.com', function (error, response) {
  if(error) {
    console.log(error)
  } else {
    // Parsed xml response
    console.log(response)
  }
})