const express = require('express');
const util = require('../util/helper')
const logger =require('../logger/logger')
const validator =require('../validator/formatter')
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

    res.send('My second ever api!')
});


module.exports = router;
// adding this comment for no reason