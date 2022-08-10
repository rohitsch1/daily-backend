const express = require('express');
const myHelper = require('../util/helper')
const underscore = require('underscore')
const router = express.Router();

router.get('/question1', function (req, res) {
    let a=[1,2,3,5,6,7,8]
    let n=a[a.length-1]
    let sum= (n*(n+1))/2
    let temp=0

    for (let i= 0 ;i< a.length ;i++){
        
        temp+=a[i]
    }
    let missingNumber = sum -temp

 

    res.send({missingNumber: missingNumber})
});

router.get('/question2', function (req, res) {

    let a=[33, 34, 35, 37, 38]
    let first =a[0]
    let last =a[a.length-1]
    let n= a.length+1
    let sum =n * (first + last) / 2 
    let temp =0
    
    for (let i= 0 ;i< a.length ;i++){
        
        temp+=a[i]
    }
    let missingNumber = sum -temp

    res.send({missingNumber: missingNumber})
});


module.exports = router;
// adding this comment for no reason