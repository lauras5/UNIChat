var db = require("../models");

module.exports = function(app) {
    // login page
    app.get('/', function (req, res) {
        res.json('index')
    })

    // home page messages new & trending
    app.get('/messages', function (req, res) {
        // message page
        res.redirect('./feed.html')
    })

    // admin page
    app.get('/admin', function (req, res) {
        // admin page
        res.redirect('./admin.html')
    })

}