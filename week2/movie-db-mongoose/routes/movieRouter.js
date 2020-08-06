const express = require('express')
const movieRouter = express.Router()
const Movie = require('../models/movie.js')

// const movies = [
//   { "title": "Die Hard", "genre": "Action", "ReleaseYear": "1988" },
//   { title: "star wars IV", "genre": "fantasy", "releaseYear": "1977" },
//   { "title": "lion king", "genre": "fantasy", "releaseYear": "2019" },
//   { "title": "friday the 13th", "genre": "horror", "releaseYear": "1980" },
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

// Get One
// movieRouter.get("/:movieId", (req, res, next) => {
//   const movieId = req.params.movieId
//   const foundMovie = movies.find(movie => movie._id === movieId)
//   if(!foundMovie){
//     const error = new Error(`The item with id ${movieId} was not found.`)
//     res.status(500)
//     return next(error)
//   }
//   return res.status(200).send(foundMovie)
// })


// Get by genre
// movieRouter.get("/search/genre", (req, res, next) => {
//   movie.find({ genre: req.query.genre})
//   if(err){
//     res.status(500)
//     return next(err)
//   }
//   return res.status(200).send(Movies)
// })


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