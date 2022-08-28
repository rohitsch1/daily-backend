const publisherModel = require('../models/newpublisher')

const createPublisher = async function (req,res){
    let data =req.body
    let savaData = await publisherModel.create(data)
    res.send ({Data : savaData})
}

module.exports.createPublisher =createPublisher