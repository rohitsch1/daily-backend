const moment = require ('moment')

const mid= function ( req, res, next) {
   
    console.log(moment().format())
    console.log(req.ip)
    next()
}

module.exports.mid= mid