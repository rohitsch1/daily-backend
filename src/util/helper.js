const printDate =function(){
    const d = new Date();
    console.log("The date is : ",d)
}

const printMonth =function(){
    const month = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
    const d = new Date();
    let name = month[d.getMonth()];
    console.log("the Month is : ",name )
}

const getBatchInfo =function (){
    let batch= "plutonium";
    let weekAndDay = "  W3D5"
    console.log (`${batch},${weekAndDay} the topic for today is Nodejs module system`)
}

module.exports.getBatchInfo=getBatchInfo;
module.exports.printDate=printDate;
module.exports.printMonth=printMonth;