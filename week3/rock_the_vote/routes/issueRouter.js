const express = require("express")
const issueRouter = express.Router()
const Issue = require('../models/Issue.js')

// Get All Issue
issueRouter.get("/", (req, res, next) => {
  Issue.find((err, Issue) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(200).send(Issue)
  })
})

//Get issue by issue id
issueRouter.get("/Issue", (req, res, next) => {
  Issue.find({ Issue: req.Issue._id }, (err, Issue) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(200)(Issue)
  })
})

// Add new issue
issueRouter.post("/", (req, res, next) => {
  req.body.Issue = req.Issue._id
  const newIssue = new Issue(req.body)
  newIssue.save((err, savedIssue) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(201).send(savedIssue)
  })
})

// Delete issue
issueRouter.delete("/:IssueId", (req, res, next) => {
  Issue.findOneAndDelete(
    { _id: req.params.IssueId, Issue: req.Issue._id },
    (err, deletedIssue) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(200).send(`Successfully delete issue: ${deletedIssue.title}`)
    }
  )
})

// Update issue
issueRouter.put("/:IssueId", (req, res, next) => {
  Issue.findOneAndUpdate(
    { _id: req.params.IssueId, Issue: req.Issue._id },
    req.body,
    { new: true },
    (err, updatedIssue) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(201).send(updatedIssue)
    }
  )
})

module.exports = issueRouter