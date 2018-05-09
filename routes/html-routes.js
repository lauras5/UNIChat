var db = require("../models");
var path = require("path");


module.exports = function(app) {
    // login page
    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/index.html'));

    });

    // home page messages new & trending
    app.get('/students1', function (req, res) {
        // message page
        res.sendFile(path.join(__dirname, "../public/feed1.html"));
    });

    app.get('/students2', function (req, res) {
        // message page
        res.sendFile(path.join(__dirname, "../public/feed2.html"))
    });
    
    app.get('/students3', function (req, res) {
        // message page
        res.sendFile(path.join(__dirname, "../public/feed3.html"))
    });

    // // dorm 2
    // app.get('/students2', function (req, res) {
    //     // message page
    //     res.sendFile(path.join(__dirname, "../public/feed2.html"))
    // });

    // // dorm 3
    // app.get('/students3', function (req, res) {
    //     // message page
    //     res.sendFile(path.join(__dirname, "../public/feed3.html"))
    // });

    // admin page
    app.get('/admin', function (req, res) {
        // admin page
        res.sendFile(path.join(__dirname, "../public/admin.html"));
    });

};