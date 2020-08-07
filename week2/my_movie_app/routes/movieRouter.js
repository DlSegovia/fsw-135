const express = require('express')
const movieRouter = express.Router()
const Movie = require('../models/movie.js')

// const myMovies = [
//   { title: "Die Hard", genre: "Action", releaseDate: "1988" },
//   { title: "star wars IV", genre: "fantasy", releaseDate: "1977" },
//   { title: "lion king", genre: "fantasy", releaseDate: "2019" },
//   { title: "friday the 13th", genre: "horror", releaseDate: "1980" },
// ]

// Get All
movieRouter.get("/", (req, res, next) => {
  Movie.find((err, movies) =>{
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(200).send(movies)
  })
})


// Post One
movieRouter.post("/", (req, res, next) => {
  const newMovie = new Movie(req.body)
  newMovie.save((err, savedMovie) => {
  if(err){
    res.status(500)
    return next(err)
  }
  return res.status(201).send(savedMovie)
})
})

// Delete One
movieRouter.delete("/:movieId", (req, res, next) => {
  Movie.findOneAndDelete({_id: req.params.movieId }, (err, deletedItem) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(200).send(`Successfully deleted item ${deletedItem.title} from the database`)
  })
})


// Update One
movieRouter.put("/:movieId", (req, res, next) => {
  Movie.findByIdAndUpdate(
    {_id: req.params.movieId}, // find this one to update
    req.body, // undate the object with this data
    {new: true}, //send back the updated version please
    (err, updatedMovie) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(201).send(updatedMovie)
    }
  )
})


module.exports = movieRouter