let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router();

// BedRoom Model
let bedroomSchema = require('../models/BedRoom');

// CREATE BedRoom
router.route('/create-bedroom').post((req, res, next) => {
  bedroomSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
});

// READ BedRooms
router.route('/').get((req, res) => {
  bedroomSchema.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get Single BedRoom
router.route('/edit-bedroom/:id').get((req, res) => {
  bedroomSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update BedRoom
router.route('/update-bedroom/:id').put((req, res, next) => {
  bedroomSchema.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('BedRoom updated successfully !')
    }
  })
})

// Delete BedRoom
router.route('/delete-bedroom/:id').delete((req, res, next) => {
  bedroomSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = router;