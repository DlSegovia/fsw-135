const express = require('express');
const app = express()
require('dotenv').config()
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors')
const expressJwt = require('express-jwt')


//Middleware (for every request)//
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))
app.use("/IssuePost", require("./routes/issueRouter.js"))

//Connect to DB//
mongoose.connect('mongodb://localhost:27017/issuePostdb',
{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
},
() => console.log("Connected to the DB")
)

//Routes//
app.use('/auth', require('./routes/authRouter.js'))
app.use('/api', expressJwt({ secret: process.env.SECRET,algorithms:['RS256']}))
app.use('/api/user', require('./routes/issueRouter.js'))

//Error handler//
app.use((err, req, res, next) => {
  console.log(err)
  if(err.name === "UnauthorizedError"){
    res.status(err.status)
  }
  return res.send({errMsg: err.message})
})

// Sever Listen //
app.listen(9000, () => {
  console.log("The server is running on port 9000")
})

