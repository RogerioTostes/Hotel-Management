let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router();

// Reserve Model
let reserveSchema = require('../models/Reserve');

// CREATE Reserve
router.route('/create-reserve').post((req, res, next) => {
  reserveSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
});

// READ Reserves
router.route('/').get((req, res) => {
  reserveSchema.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get Single Reserve
router.route('/edit-reserve/:id').get((req, res) => {
  reserveSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update Reserve
router.route('/update-reserve/:id').put((req, res, next) => {
  reserveSchema.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Reserve updated successfully !')
    }
  })
})

// Delete Reserve
router.route('/delete-reserve/:id').delete((req, res, next) => {
  reserveSchema.findByIdAndRemove(req.params.id, (error, data) => {
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