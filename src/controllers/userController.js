const jwt = require("jsonwebtoken");
const { authmid } = require("../middleware/auth");
const userModel = require("../models/userModel");

const createUser = async function (abcd, xyz) {
  //You can name the req, res objects anything.
  //but the first parameter is always the request 
  //the second parameter is always the response
  let data = abcd.body;
  let savedData = await userModel.create(data);
  
  xyz.send({ msg: savedData });
};

const loginUser = async function (req, res) {
  try{
  let userName = req.body.emailId;
  let password = req.body.password;

  let user = await userModel.findOne({ emailId: userName, password: password });
  if (!user)
    return res.send({
      status: false,
      msg: "username or the password is not corerct",
    });

  // Once the login is successful, create the jwt token with sign function
  // Sign function has 2 inputs:
  // Input 1 is the payload or the object containing data to be set in token
  // The decision about what data to put in token depends on the business requirement
  // Input 2 is the secret
  // The same secret will be used to decode tokens
  let token = jwt.sign(
    {
      userId: user._id.toString(),
      batch: "plutonium",
      organisation: "FunctionUp",
    },
    "functionup"  //this is secrate key
  );
  res.setHeader("x-auth-token", token);
  
  res.send({ status: true, data: token });
}
catch(error){
  res.send({msg : error.message})
}
};

const getUserData = async function (req, res) {

  try{
  

  let userId = req.params.userId;
  let userDetails = await userModel.findById(userId);
  if (!userDetails)
    return res.send({ status: false, msg: "No such user exists" });

  res.send({ status: true, data: userDetails });
  }catch(err){
    res.send({msg : err.message})
  }
};

const updateUser = async function (req, res) {

  try{

  let userId = req.params.userId;
  let user = await userModel.findById(userId);
  //Return an error if no user with the given id exists in the db
  if (!user) {
    return res.send("No such user exists");
  }

  let userData = req.body;
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, {$set:userData}, {new: true});
  res.send({ status: true, data: updatedUser });
}catch(err){
  res.send({msg : err.message})
}
};


const postMessage = async function (req, res) {
  try{
  let message = req.body.message
  
  let user = await userModel.findById(req.params.userId)
  if(!user) return res.send({status: false, msg: 'No such user exists'})
  
  let updatedPosts = user.posts
  //add the message to user's posts
  updatedPosts.push(message)
  let updatedUser = await userModel.findOneAndUpdate({_id: user._id},{posts: updatedPosts}, {new: true})

  //return the updated user document
  return res.send({status: true, data: updatedUser})
  }catch(err){
    res.send({msg : err.message})
  }
}

//update key isDeleted to true
const deleteData = async function(req,res){
  try{
  let  userId = req.params.userId
   
  let user = await userModel.findById(userId)
  if(!user) return res.send({status: false, msg: 'No such user exists'})
  
  let updateKey = await userModel.findOneAndUpdate({_id : userId}, {$set:{isDeleted:true}},{new: true})
  res.send({status : "updatedKey" , msg : updateKey})
  }catch(err){
    res.send({msg : err.message})
  }
}

module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.deleteData = deleteData;
module.exports.postMessage=postMessage;