const byuJwt = require('byu-jwt')
const util = require('../util')
const Promise = require('bluebird')

exports.authenticationJWTMiddleware = async (req, res, next) => {
  try {
    try {
      const verifiedJWTs = await byuJwt.authentication(req.headers, process.env.WSO2_WELLKNOWN_URL)
      req.verifiedJWTs = verifiedJWTs
      next()
    } catch (err) {
      return res.status(401).send(util.generateMetadataResponseObj(401))
    }
  } catch (err) {
    console.log(err)
    return res.status(401).send(util.generateMetadataResponseObj(401))
  }
}