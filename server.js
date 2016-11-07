//grab dependencies
const express = require('express'),
app = express(),
port = process.env.PORT || 8080;

//configure application

var routes = require('./app/routes');
app.use(routes);


app.listen(port, () => {
	console.log(`App listening on http://localhost:${port}`)
});

//start server 