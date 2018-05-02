// require model
var db = require('../models');

module.exports = function(app) {
    // gets students and creates json 
    app.get("/api/studentList", function(req, res) {
        db.Users.findAll({}).then(function(Users) {
            res.json(Users)
        });
    });

    // gets messages
    app.get("/api/messages", function (req, res) {
        db.Messages.findAll({}).then(function(Messages) {
            res.json(Messages)
        });
    });
};

// how to build tables for chat forum