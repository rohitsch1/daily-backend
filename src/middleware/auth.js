const jwt =require('jsonwebtoken')

const authenticate = function(req, res, next) {
  //check the token in request header
  //validate this token
  let token = req.headers["x-Auth-token"];
  if (!token) token = req.headers["x-auth-token"];

  //If no token is present in the request header return error
  if (!token) return res.send({ status: false, msg: "token must be present" });

  console.log(token);
  
  // If a token is present then decode the token with verify function
  // verify takes two inputs:
  // Input 1 is the token to be decoded
  // Input 2 is the same secret with which the token was generated
  // Check the value of the decoded token yourself
  let decodedToken = jwt.verify(token, "functionup");
  if (!decodedToken)
    return res.send({ status: false, msg: "token is invalid" });


  next()
}


const authorise = function(req, res, next) {
  
  // comapre the logged in user's id and the id in request

  let token = req.headers["x-Auth-token"];
  if (!token) token = req.headers["x-auth-token"];

  //If no token is present in the request header return error
  if (!token) return res.status(400).send({ status: false, msg: "token must be present" });

  console.log(token);

  let decodedToken = jwt.verify(token, "functionup");
  console.log(decodedToken);
  if (!decodedToken)
    return res.status(403).send({ status: false, msg: "token is invalid" });

  let userId = req.params.userId;
  
  let decoded = decodedToken.userId;
  if (userId != decoded) {
    return res.status(403).send("user is not authorize to change");
  }
  next()
}

module.exports.authenticate=authenticate
module.exports.authorise=authorise