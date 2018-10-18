// 'use strict'
//
// //need to create util.js
// const util = require('./util.js')
// const Promise = require('bluebird')
//
// const byuJWT = require('byu-jwt')
// const AWS = require('aws-sdk')
//
// let wso2Request = function  () {
//   console.log('[Config] Checking ENV for required parameters')
//   const wellKnownURL = process.env.WELL_KNOWN
//   let clientKey = process.env.CLIENT_KEY
//   let clientSecret = process.env.CLIENT_SECRET
//   console.log(' [Config] wellKnownURL = ' + wellKnownURL)
//
//   if (wellKnownURL !== undefined && clientKey !== undefined && clientSecret !== undefined) {
//     console.log('[Config] Retrieved WSO2 credentials from environment.')
//     process.env.WSO2_CLIENT_KEY = clientKey
//     process.env.WSO2_CLIENT_SECRET = clientSecret
//     process.env.WSO2_WELLKNOWN_URL = wellKnownURL
//     wso2Request = require('byu-wso2-request')
//     return
//   }
//   const envSelector = process.env.HANDEL_ENVIRONMENT_NAME
//   if (wellKnownURL === undefined || envSelector === undefined) {
//     console.log('[Config Error] Required ENV parameter missing (one of WELL_KNOWN or HANDEL_ENVIRONMENT_NAME)')
//     return
//   }
//   console.log(' [Config] envSelector = ' + envSelector)
// }
//
// function getJWT (headers) {
//   if (headers === undefined || util.isObjEmpty(headers))
//     return null
//   for (let key in headers) if (key.toLowerCase() === byuJwt.BYU_JWT_HEADER_ORIGINAL)
//     return headers[key]
//   for (let key in headers) if (key.toLowerCase() === byuJwt.BYU_JWT_HEADER_CURRENT)
//     return headers[key]
// }
//
// function setupRequestObject ( url, method) {
//   return {
//     url: url,
//     method: method,
//     json: true,
//     resolveWithFullResponse: true,
//     simple: false,
//     encoding: 'utf8',
//     headers: {
//       Accept: 'application/'
//     }
//   }
// }