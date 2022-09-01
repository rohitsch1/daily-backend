const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController")



router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.get("/cowin/states", CowinController.getStates)
router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)
router.get("/cowin/getByPin", CowinController.getByPin)

router.post("/cowin/getOtp", CowinController.getOtp)

// WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for any given district id and for any given date
//assignment 1
router.get("/cowin/district",CowinController.sessionByDistrictId)

//assignment 2 
router.get("/weather/london", CowinController.weatherInLondon)
router.get("/temperature/london", CowinController.temperatureInLondon)
router.get("/sortWithTemp",CowinController.sortWithTemp)

//assignment 3

router.post("/image",CowinController.image)




module.exports = router;