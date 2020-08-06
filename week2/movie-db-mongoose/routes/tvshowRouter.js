const express = require('express')
const tvshowRouter = express.Router()


const tvShows = [
  { title: "Rick and Morty", genre: "sci-fi" },
  { title: "Watchmen", genre: "action" },
  { title: "Westworld", genre: "fantasy" },
  { title: "Friends", genre: "comedy" }
]

tvshowRouter.get("/", (req, res) => {
  res.send(tvShows)
})

tvshowRouter.get("/:tvshowId", (req, res) => {
  const tvShowId = req.params.tvshowId
  const foundShow = tvShows.find(show => show._id === tvShowId)
  res.send(foundShow)
})

tvshowRouter.post("/", (req, res) => {
  const newShow = req.body
  
  tvShows.push(newShow)
  res.send(`Successfully added ${newShow.title} to the database!`)
})


module.exports = tvshowRouter