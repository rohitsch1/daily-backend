const mongoose =require('mongoose')
const Id = mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema ({
    name:String,
	author:{
        type : Id,
        ref :"AuthorData1"
    },
	price:Number,
	ratings:Number,
	publisher: {
        type : Id,
        ref : "publisherData1"
    }
}, {timestamps : true})

module.exports = mongoose.model('BookData1',bookSchema)