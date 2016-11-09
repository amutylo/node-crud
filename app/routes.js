const express = require('express'),
  router = express.Router(),
  mainController = require('./controllers/main.controller');

// export router
module.exports = router;

//create routes

router.get('/', mainController.showHome);