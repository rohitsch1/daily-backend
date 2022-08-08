const express = require('express');
const util = require('../util/helper')
const logger =require('../logger/logger')
const validator =require('../validator/formatter')
var lodash =require('lodash');
const { size } = require('lodash');
const router = express.Router();

router.get('/test-me', function (req, res) {
    
    console.log('Problem 1 ')
    logger.welcome()


    console.log('problem 2 ')
    util.printDate()
    util.printMonth()
    util.getBatchInfo()

    
    console.log( "Problem 3 " )
    validator.trim()
    validator.changetoLowerCase()
    validator.changeToUpperCase()

    console.log (" problem 4 ")
    console.log("fisrt part")

    console.log(lodash.chunk(
        ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"],3));

    console.log("second part : \n")
    console.log(lodash.tail([1, 3, 5, 7, 9, 11, 13, 15, 17,19])) 
    
    console.log ("third part ")
    const arr1 =[1,2,3,4]
    const arr2 =[2,5,6,7]
    const arr3 =[7,8,9,10]
    const arr4 =[10,11]
    const arr5 =[7,12]

    console.log(lodash.union(arr1,arr2,arr3,arr4,arr5))

    console.log("part fourth :")
    console.log (lodash.fromPairs([["horror","The Shining"],["drama","Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]]))
    

    res.send('My second ever api!')
});


module.exports = router;
// adding this comment for no reason