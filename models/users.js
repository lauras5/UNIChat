// Using Sequelize to creat user model
// export the function
module.exports = function (sequelize, DataTypes) {
    var Users = sequelize.define("Users", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        dorm: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        clearance_level: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: 'student'
        }
    });

    // associate user model to posts and comments, User is the owner of those models
    Users.associate =  function(models) {
        Users.hasMany(models.Posts, {
            foreignKey: {allowNull: false}
        });

        Users.hasMany(models.Comments, {
            foreignKey: {allowNull: false}
        });
    };

    return Users;
};