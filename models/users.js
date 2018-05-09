module.exports = function (sequelize, DataTypes) {
    var Users = sequelize.define("Users", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
            // validate: {
            //     len: [5, 20]
            // }
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