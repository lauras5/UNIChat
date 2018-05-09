var db = require("../models");
var path = require("path");


module.exports = function(app) {
    // login page
    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });

    // home page messages new & trending
    app.get('/students', function (req, res) {
        // message page
        res.sendFile(path.join(__dirname, "../public/feed.html"));
    });

    // admin page
    app.get('/admin', function (req, res) {
        // admin page
        res.sendFile(path.join(__dirname, "../public/admin.html"));
    });

};