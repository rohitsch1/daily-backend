

const flahh = async function(req, res) {
    let x= req.path
    console.log(x)
    res.send({status: true, data: "see the console"})
}

module.exports.flahh = flahh