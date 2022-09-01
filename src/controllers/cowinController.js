let axios = require("axios");
const { model } = require("mongoose");


let getStates = async function (req, res) {

    try {
        let options = {
            method: 'get',
            url: 'https://cdn-api.co-vin.in/api/v2/admin/location/states'
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


let getDistricts = async function (req, res) {
    try {
        let id = req.params.stateId
        let options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${id}`
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getByPin = async function (req, res) {
    try {
        let pin = req.query.pincode
        let date = req.query.date
        console.log(`query params are: ${pin} ${date}`)
        var options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${date}`
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getOtp = async function (req, res) {
    try {
        let blahhh = req.body

        console.log(`body is : ${blahhh} `)
        var options = {
            method: "post",
            url: `https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP`,
            data: blahhh
        }

        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

//assignment 1

let sessionByDistrictId = async function (req, res) {
    try {
        let Id = req.query.district_id
        let date = req.query.date
        console.log(`query params are: ${Id} ${date}`)
        var options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${Id}&date=${date}`
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

//assignment 2 

let weatherInLondon = async function (req, res) {

    try {

        let options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=London&appid=5cfcb57b7170dc6748e5637dfabd576e`
        }

        let final = await axios(options)
        console.log(final)
        result = final.data
        res.status(200).send({ msg: result })
    } catch (err) {
        res.status(500).send({ msg: err.message })
    }
}


let temperatureInLondon = async function (req, res) {

    try {

        let options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=London&appid=5cfcb57b7170dc6748e5637dfabd576e`
        }

        let final = await axios(options)
        console.log(final)
        result = final.data
        res.status(200).send({ msg: result.main.temp })
    } catch (err) {
        res.status(500).send({ msg: err.message })
    }
}

let sortWithTemp = async function (req, res) {

    try {
        
        const city = ["Bengaluru", "Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        const resultArr = []
        for (let i = 0; i < city.length ; i++) {
            let result={city: city[i]}
            let final = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city[i]}&appid=5cfcb57b7170dc6748e5637dfabd576e`)
            console.log(final.data.main.temp)
            result.temp = final.data.main.temp
            resultArr.push(result)
        }

        let sortedArr=  resultArr.sort((a, b) => a.temp - b.temp)
        res.status(200).send({ msg: sortedArr })

    } catch (err) {
        res.status(500).send({ msg: err.message })
    }
}

let image = async function (req, res) {

    try {

        let text =req.body
        let template_id=req.query.template_id
        let text0=req.query.text0
        let text1=req.query.text1

        let options={
            method:"post",
            url: `https://api.imgflip.com/caption_image?username=chewie12345&password=meme@123&template_id=${template_id}&text0=${text0}&text1=${text1}`,
            data:text
        }
        let final= await axios(options)
        let result =final.data
        res.status(200).send({msg :result})
        

    } catch (err) {
        res.status(500).send({ msg: err.message })
    }
}



module.exports.getStates = getStates
module.exports.getDistricts = getDistricts
module.exports.getByPin = getByPin
module.exports.getOtp = getOtp
module.exports.sessionByDistrictId = sessionByDistrictId
module.exports.weatherInLondon = weatherInLondon
module.exports.temperatureInLondon = temperatureInLondon
module.exports.sortWithTemp = sortWithTemp
module.exports.image=image