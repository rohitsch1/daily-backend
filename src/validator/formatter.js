// trim() : calls the trim function on a hardcoded string for example ‘ functionUp  ’
// - changetoLowerCase() : changes the case of the string to lower. [Call toLowerCase() on a hardcoded string]
// - changeToUpperCase() : changes the case of the string to upper case [Call toUpperCase() on a hardcoded string]
let name = "     rohit SIngh     "
const trim =function(){
    console.log(name.trim())
}

const changetoLowerCase=function(){
    console.log (name.toLowerCase())
}

const changeToUpperCase=function(){
    console.log (name.toUpperCase())
}

module.exports.trim=trim
module.exports.changeToUpperCase=changeToUpperCase
module.exports.changetoLowerCase=changetoLowerCase
