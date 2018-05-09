var express = require('express');
var bodyParser = require('body-parser');
var path = require('path')

var app = express();
var PORT = process.env.PORT || 3000;

// requires model for syncing
var db = require('./models');

// parses app/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true}));
// parse app/json
app.use(bodyParser.json());

// static directory
app.use(express.static(path.join(__dirname, 'public')));

// require routes
require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

// listen on port 3000
db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
        console.log("App listening on port : " + PORT);
    });
});


