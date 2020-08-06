const express = require('express')
const inventoryRouter = express.Router()
const Inventory = require('../routes/inventory.js')


// Get All
inventoryRouter.get("/", (req, res, next) => {
  Inventory.find((err, inventory) => {
    if (err) {
      res.status(500)
      return next(err)
    }
    return res.status(200).send(inventory)
  })
})

// Post One
inventoryRouter.post("/", (req, res, next) => {
  const newInventory = new Inventory(req.body)
  newInventory.save((err, savedInventory) => {
    if (err) {
      res.status(500)
      return next(err)
    }
    return res.status(201).send(savedInventory)
  })
})

// Update One
inventoryRouter.put("/:inventoryId", (req, res, next) => {
  Inventory.findByIdAndUpdate(
    { _id: req.params.inventoryId }, // find this one to update
    req.body, // undate the object with this data
    { new: true }, //send back the updated version please
    (err, updatedInventory) => {
      if (err) {
        res.status(500)
        return next(err)
      }
      return res.status(201).send(updatedInventory)
    }
  )
})

// Delete One
inventoryRouter.delete("/:inventoryId", (req, res, next) => {
  Inventory.findOneAndDelete({ _id: req.params.inventoryId }, (err, deletedItem) => {
    if (err) {
      res.status(500)
      return next(err)
    }
    return res.status(200).send(`Successfully deleted item ${deletedItem.title} from the database`)
  })
})

module.exports = inventoryRouter