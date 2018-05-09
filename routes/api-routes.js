
// require model
var db = require('../models');

module.exports = function(app) {

    // post to the database in users table
    app.post("/users", function(req, res) {
        db.Users.create(req.body).then(function(res) {
            console.log(res)
        }).catch(function(err) {
            // print the error details
            console.log(err);
        });
    });
    
    // returns all student stuff from db and posts the json to page
    app.get("/users", function(req, res) {
        db.Users.findAll({}).then(function(Users) {
            res.json(Users)
        });
    });

    app.post('/students/posts', function(req, res) {
        db.Posts.create(req.body).then(function(res) {
            console.log(res)
        }).catch(function(err) {
            console.log(err);
        });
    });
    
    // gets messages
    app.get("/students/posts", function (req, res) {
        db.Posts.findAll({}).then(function(Posts) {
            res.json(Posts)
        });
    });

    // posts to db in authKeys table
    app.post("/admin/token", function (req, res) {
        db.authKeys.create(req.body).then(function(res){
            console.log(res)
        });
    });

    // gets keys and posts json to page
    app.get("/admin/token", function (req, res) {
        db.authKeys.findAll({}).then(function(authKeys) {
            res.json(authKeys)
        });
    });

};
