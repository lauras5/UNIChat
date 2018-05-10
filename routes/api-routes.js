
// require model
var db = require('../models');

module.exports = function (app) {

    // post to the database in users table
    app.post("/users", function (req, res) {
        db.Users.create(req.body).then(function (res) {
            console.log(res)
        }).catch(function (err) {
            // print the error details
            console.log(err);
        });
    });

    // returns all users from db in json format
    app.get("/users", function (req, res) {
        db.Users.findAll({}).then(function (Users) {
            res.json(Users)
        });
    });

    // Dorm 1 posts
    app.post('/students1/posts', function (req, res) {
        db.Posts.create(req.body).then(function (res) {
            console.log(res)
        }).catch(function (err) {
            console.log(err);
        });
    });


    app.get("/students1/posts", function (req, res) {
        db.Posts.findAll({
            where: {
                dorm: 1
            }
        }).then(function (Posts) {
            res.json(Posts)
        });
    });

    // Dorm 2 posts
    app.post('/students2/posts', function (req, res) {
        db.Posts.create(req.body).then(function (res) {
            console.log(res)
        }).catch(function (err) {
            console.log(err);
        });
    });

    app.get("/students2/posts", function (req, res) {
        db.Posts.findAll({
            where: {
                dorm: 2
            }
        }).then(function (Posts) {
            res.json(Posts)
        });
    });

    // Dorm 3 posts
    app.post('/students3/posts', function (req, res) {
        db.Posts.create(req.body).then(function (res) {
            console.log(res)
        }).catch(function (err) {
            console.log(err);
        });
    });

    app.get("/students3/posts", function (req, res) {
        db.Posts.findAll({
            where: {
                dorm: 3
            }
        }).then(function (Posts) {
            res.json(Posts)
        });
    });

    // posts to db in authKeys table
    app.post("/admin/token", function (req, res) {
        db.authKeys.create(req.body).then(function (res) {
            console.log(res)
        });
    });

    // gets keys and posts json to page
    app.get("/admin/token", function (req, res) {
        db.authKeys.findAll({}).then(function (authKeys) {
            res.json(authKeys)
        });
    });

    // ra posts
    app.post('/ra1/posts', function (req, res) {
        db.Posts.create(req.body).then(function (res) {
            console.log(res)
        }).catch(function (err) {
            console.log(err)
        })
    });

    app.get('/ra1/posts', function (req, res) {
        db.Posts.findAll({
            where: {
                dorm: 1,
                userId: 2
            }
        }).then(function (Posts) {
            res.json(Posts)
        });
    });

    // direct admin posts to new route
    app.post("/admin/posts", function (req, res) {
        db.Posts.create(req.body).then(function (res) {
            console.log(res)
        }).catch(function (err) {
            console.log(err);
        });
    });

    app.get("/admin/posts", function (req, res) {
        db.Posts.findAll({
            where: {
                dorm: 0
            }
        }).then(function (Posts) {
            res.json(Posts)
        });
    });

};
