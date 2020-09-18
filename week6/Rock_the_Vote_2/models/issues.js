const mongoose = require('mongoose')
const Schema = mongoose.Schema

const issuesSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  typeOFIssue: {
    type: String,
    required: true
  },
  imgUrl: {
    type: String,
    required: false
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  }
})

module.exports = mongoose.model("Issues", issuesSchema)