const authorModel= require("../models/newAuthor")
const bookModel= require("../models/newBook")
const publisherModel =require('../models/newpublisher')

const createBook= async function (req, res) {
    let book = req.body
    if (!book.author) return res.send ({msg : "please provide AuthorID "})
    else{
        let find = await authorModel.find({_id : book.author})
        if(find.length ==0){
            return res.send ({msg: "Author ID is not valid " })
        }
    }

    if (!book.publisher) return res.send ({msg : "please provide publisher "})
    else{
        let find = await publisherModel.find({_id : book.publisher})
        if(find.length ==0){
            return res.send ({msg: "publisher ID is not valid " })
        }
    }

    let bookCreated = await bookModel.create(book)
    res.send({data: bookCreated})
}

const getBooksData= async function (req, res) {
    let books = await bookModel.find()
    res.send({data: books})
}

const getBooksWithAuthorDetails = async function (req, res) {
    let specificBook = await bookModel.find().populate('author').populate('publisher')
    res.send({data: specificBook})

}

module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
