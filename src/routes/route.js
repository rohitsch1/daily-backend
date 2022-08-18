const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
// const authorController= require("../controllers/authorController")
// const BookController= require("../controllers/bookController")
const all = require('../controllers/allController')
router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createauthor", all.createAuthor )

router.post("/createBook", all.createBook  )

router.get("/getBooksData", all.getBooksData)

router.get("/getTwoState", all.getTwoState)

router.get('/getbetween',all.getbetween)

// router.post("/updateBooks", BookController.updateBooks)
// router.post("/deleteBooks", BookController.deleteBooks)

// //MOMENT JS
// const moment = require('moment');
// const authorModel = require('../models/authorModel');
// router.get("/dateManipulations", function (req, res) {
    
//     // const today = moment();
//     // let x= today.add(10, "days")

//     // let validOrNot= moment("29-02-1991", "DD-MM-YYYY").isValid()
//     // console.log(validOrNot)
    
//     const dateA = moment('01-01-1900', 'DD-MM-YYYY');
//     const dateB = moment('01-01-2000', 'DD-MM-YYYY');

//     let x= dateB.diff(dateA, "days")
//     console.log(x)

//     res.send({ msg: "all good"})
// })

module.exports = router;