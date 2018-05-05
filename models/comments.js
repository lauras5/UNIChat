// var models = require('models')

module.exports = function(sequelize, DataTypes) {
    var Comments = sequelize.define("Comments", {
        body: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 150]
            }
        },
        author: {
            type: DataTypes.STRING,
            allowNull: false
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: 'comment'
        },
        // foreign key for user and message

    });

    Comments.associate =  function(models) {
        Comments.belongsTo(models.Users, {
            foreignKey: {allowNull: false}
        });
        Comments.belongsTo(models.Posts, {
            foreignKey: {allowNull: false}
        });
    }
    
    // Comments.associate =  function(models) {
    //     Comments.belongsTo(models.Posts, {
    //         foreignKey: {allowNull: false}
    //     });
    // }

    return Comments;
};