const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Blueprint
const IssueSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  upvoted: {
    type: String,
    required: true
  },
  doenvoted: {
    type: String,
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  }
})

module.exports = mongoose.model("Issue", IssueSchema)