const express = require('express');
const router = express.Router();

let players =
    [
        {
            "name": "manish",
            "dob": "1/1/1995",
            "gender": "male",
            "city": "jalandhar",
            "sports": [
                "swimming"
            ]
        },
        {
            "name": "gopal",
            "dob": "1/09/1995",
            "gender": "male",
            "city": "delhi",
            "sports": [
                "soccer"
            ],
        },
        {
            "name": "lokesh",
            "dob": "1/1/1990",
            "gender": "male",
            "city": "mumbai",
            "sports": [
                "soccer"
            ],
        },
    ]


router.post('/players', function (req, res) {

    let newPlayers = req.body

    let player = players.find(a => a.name == newPlayers.name)
    if (!player) {
        players.push(newPlayers)
        // console.log(players)
        return res.send(players)

    }
    else {

        res.send("player already exist!!!")
    }




});

let booking = [{
    "bookingNumber": 1,
    "sportId": "",
    "centerId": "",
    "type": "private",
    "slot": "16286598000000",
    "bookedOn": "31/08/2021",
    "bookedFor": "01/09/2021"
}]


router.post('/players/:playerName/bookings/:bookingId', function (req, res) {

    //    first checking the player is present or not 
    let temp = false;
    let BookID = req.params.bookingId
    let queryName = req.params.playerName
    for (let i = 0; i < players.length; i++) {
        if (players[i].name == queryName) {
            temp = true
        }
    }
    if (temp == false) {
        return res.send({ data: "player is not present " })
    }

    // if present then check for booking id is given or not ?
    for (let i = 0; i < booking.length; i++) {
        if (booking[i].bookingId == BookID) {
            return res.send({ data: "player Already have the ID " })
        }
    }


    // add the booking object in the booking arr
    let Element = req.body
    Element.bookingId = BookID
    Element.playerName = queryName

    booking.push(Element)
    return res.send({ data: booking })


});


let person = [
    {
        name: "rohit",
        age: 21,
        votingStatus: false

    },
    {
        name: "prital",
        age: 15,
        votingStatus: false

    }, {
        name: "rupali",
        age: 16,
        votingStatus: false

    }, {
        name: "rahul",
        age: 45,
        votingStatus: false

    }, {
        name: "anil",
        age: 9,
        votingStatus: false

    },
]


router.get('/person', function (req, res) {
    let Element = req.query.age
    // console.log(Element)
    for (let i = 0; i < person.length; i++) {
        if (person[i].age >= Element) {
            person[i].votingStatus = true

        }

    }
    let arr = []
    for (let i = 0; i < person.length; i++) {
        if (person[i].votingStatus == true) {
            arr.push(person[i])
        }

    }
    res.send({ data: arr })


})


module.exports = router;
// adding this comment for no reason