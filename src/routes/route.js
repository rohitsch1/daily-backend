const express = require('express');
const router = express.Router();

// question 1 
router.get('/movies', function (req, res){
    let movies= ["Rang de basanti", "The shining", "Lord of the rings", "Batman begins"]
    res.send(movies)
})

router.get('/movies/:indexNumber', function(req, res){
    
    let requestParams = req.params.indexNumber
    let movies= ["Rang de basanti", "The shining", "Lord of the rings", "Batman begins"]
    let len = movies.length;
    let result =movies[requestParams];
    if (requestParams > len){
       return res.send("invalid index is given, please change the index .")
    }else{
       return res.send(result)

    }
})

router.get('/films', function (req, res) {
   let ArrayOfMovies=[ {
        "id": 1,
        "name": "The Shining"
       }, {
        "id": 2,
        "name": "Incendies"
       }, {
        "id": 3,
        "name": "Rang de Basanti"
       }, {
        "id": 4,
        "name": "Finding Nemo"
       }]
       
    

    res.send({key: ArrayOfMovies})
});

module.exports = router;