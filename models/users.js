module.exports = function (sequelize, DataTypes) {
    var Users = sequelize.define("Users", {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [5, 20]
            }
        },
        house: {
            type: DataTypes.STRING,
            allowNull: false
        },
        gender: {
            type: Datatypes.STRING,
            allowNull: false
        }
    });
    return Users;
};