const router = require("express").Router();
var express = require('express');
const clientController = require("../../controllers/clientController");
var passport = require('passport');
require('../../config/passport')(passport);




// Matches with "/api/books"
router.route("/")
  .all(passport.authenticate('jwt', { session: false}))
  .get(clientController.findAll)
  .post(clientController.create);

// Matches with "/api/books/:id"
router.route("/:id")
  .all(passport.authenticate('jwt', { session: false}))
  .get(clientController.findById)
  .put(clientController.update)
  .delete(clientController.remove);

module.exports = router;
