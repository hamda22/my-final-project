const express= require('express')
const App = express()
const mongoose= require('mongoose')
const cors = require("cors")


App.use(cors())

 App.get('/', function(req,res){
    res.send('Hello, Server Working')
})


App.post("/users/singin", (req, res) => {
//  Get information from the req.body
// check if the information matchs the user's email/username  in the DB
// get the user
// decrypt the password 
// check if the password
// if password is correct, create a token that can use to request information with
// if its incorrect, return message saying "password incorrect" with status code 403

})


App.post("/users/singup", () => {
//  Get information from the req.body
// check if the email/username exists in the database
// if fails -> return "username exists"
// encrypt the password
// store in the DB
// return "User Created" status code 200
})










App.listen(3002,function(){
    console.log('server on port 3002......')

})