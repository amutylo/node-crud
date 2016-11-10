//load environment variables
require('dotenv').config();

//grab dependencies
const express = require('express'),
  app = express(),
  port = process.env.PORT || 8080,
  expressLayouts = require('express-ejs-layouts'),
  mongoose = require('mongoose');

//configure application
//use static assets
app.use(express.static(__dirname + '/public'));

//set ejs as templating engine
app.set('view engine', 'ejs');
//turn on layouts
app.use(expressLayouts);

//connect to a database
mongoose.connect(process.env.DB_URI);

// set the routes
app.use(require('./app/routes'));

//start server
app.listen(port, () => {
	console.log(`App listening on http://localhost:${port}`)
});
