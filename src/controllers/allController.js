const { count } = require("console")
const authorModel = require('../models/authorModel')
const bookModel = require("../models/bookModel")


const createAuthor = async function (req, res) {
    let data = req.body
    if (!data.author_id) {
        return res.send({ msg: "author ID is not given " })
    }
    let savedData = await authorModel.create(data)
    res.send({ msg: savedData })
}

const createBook = async function (req, res) {
    let data = req.body
    if (!data.author_id) {
        return res.send({ msg: "author ID is not given " })
    }
    let savedData = await bookModel.create(data)
    return res.send({ msg: savedData })
}

const getBooksData = async function (req, res) {
    let allBooks = await authorModel.findOne({ author_name: "Chetan Bhagat" })
    let ID = allBooks.author_id
    let getbook = await bookModel.find({ author_id: ID })
    res.send({ msg: getbook })
}

const getTwoState = async function (req, res) {
    let data = await bookModel.findOne({ name: "Two states" })
    let ID = data.author_id
    let savedData = await authorModel.findOne({ author_id: ID })
    let authorname = savedData.author_name
    let data2 = await bookModel.findOneAndUpdate({ name: "Two states" }, { $set: { price: 100 } }, { new: true })
    let price = data2.price

    let element = {
        price,
        authorname
    }
    res.send({ msg: element })
}




    const getbetween= async function(req,res){
        let book= await bookModel.find({prices: {$gte:50 , $lte:100}})
        let data= book.map(x=>x.author_id)
        console.log(data)
        let arr=[]
        for (let i= 0 ; i< data.length ; i++){
            let authorname=await authorModel.find({author_id:data[i]}).select({ author_name: 1, _id: 0 });
            arr.push(authorname)
        }
        
        res.send({msg :arr})


    // let data = await bookModel.find({ price: { $gte: 50, $lte: 100 } }).select({ author_id: 1, _id: 0 })
    // let authorname = []
    // for (let i = 0; i < data.length; i++) {
    //     element = await authorModel.findOne({ author_id: data[i].author_id })
    //     let savedData = element.author_name
    //     authorname.push(savedData)
    // }
    // res.send({ msg: authorname })

}

// const ratings = [5, 4, 5];
// let sum = 0;

// const sumFunction = async (a, b) => a + b;

// ratings.forEach(async (rating) => {
//   sum = await sumFunction(sum, rating);
// });

// console.log(sum);

// find the author of “Two states” and update the book price to 100;  Send back the author_name and updated price in response.
//   ( This will also need 2  queries- 1st will be a findOneAndUpdate. 
// The second will be a find query aith author_id from previous query)





// const updateBooks= async function (req, res) {
//     let data = req.body // {sales: "1200"}
//     // let allBooks= await BookModel.updateMany( 
//     //     { author: "SK"} , //condition
//     //     { $set: data } //update in data
//     //  )
//     let allBooks= await BookModel.findOneAndUpdate( 
//         { authorName: "ABC"} , //condition
//         { $set: data }, //update in data
//         { new: true , upsert: true} ,// new: true - will give you back the updated document // Upsert: it finds and updates the document but if the doc is not found(i.e it does not exist) then it creates a new document i.e UPdate Or inSERT  
//      )

//      res.send( { msg: allBooks})
// }

// const deleteBooks= async function (req, res) {
//     // let data = req.body 
//     let allBooks= await BookModel.updateMany( 
//         { authorName: "FI"} , //condition
//         { $set: {isDeleted: true} }, //update in data
//         { new: true } ,
//      )

//      res.send( { msg: allBooks})
// }




// // CRUD OPERATIONS:
// // CREATE
// // READ
// // UPDATE
// // DELETE



module.exports.createBook = createBook
module.exports.getBooksData = getBooksData
module.exports.createAuthor = createAuthor
module.exports.getTwoState = getTwoState
module.exports.getbetween = getbetween