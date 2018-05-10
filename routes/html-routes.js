var db = require("../models");
var path = require("path");


module.exports = function(app) {
    // login page
    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });

    // studen home page messages new & trending
    app.get('/students1', function (req, res) {
        res.sendFile(path.join(__dirname, "../public/feed1.html"));
    });

    app.get('/students2', function (req, res) {
        res.sendFile(path.join(__dirname, "../public/feed2.html"))
    });
    
    app.get('/students3', function (req, res) {
        res.sendFile(path.join(__dirname, "../public/feed3.html"))
    });

    // ra pages
    app.get('/ra1', function(req, res) {
        res.sendFile(path.join(__dirname, "../public/ra1.html"))
    })
    app.get('/ra2', function(req, res) {
        res.sendFile(path.join(__dirname, "../public/ra2.html"))
    })
    app.get('/ra3', function(req, res) {
        res.sendFile(path.join(__dirname, "../public/ra3.html"))
    })

    // admin page
    app.get('/admin', function (req, res) {
        res.sendFile(path.join(__dirname, "../public/admin.html"));
    });

};