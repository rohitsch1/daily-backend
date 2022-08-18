const { create } = require('../models/bookModel')
const bookModel =require('../models/bookModel')

const createBook = async function(req,res){
    let data = req.body
    let savedData= await bookModel.create(data)
    res.send({data : savedData})
}

const getBook = async function(req,res){
    let savedData= await bookModel.find()
    res.send({data : savedData})
}


module.exports.createBook=createBook
module.exports.getBook=getBook