const express = require('express');
const router = express.Router();

const Controller= require("../controllers/controller")
const Middleware = require("../middlewares/mid")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.get('/console',Middleware.mid,Controller.flahh)

module.exports = router;