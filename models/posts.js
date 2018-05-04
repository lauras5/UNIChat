// var models= require('models')

module.exports = function(sequelize, DataTypes) {
    var Posts = sequelize.define("Posts", {
        body: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 150]
            }
        },
        upvotes: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        downvotes: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        dorm: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: 'post'
        }

    });

    Posts.associate =  function(models) {
        Posts.belongsTo(models.Users, {
            foreignKey: {allowNull: false}
        });

        Posts.hasMany(models.Comments, {
            foreignKey: {allowNull: false}
        });
    }

    return Posts;
};