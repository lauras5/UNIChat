module.exports = function(sequelize, DataTypes) {
    var authKeys = sequelize.define("authKeys", {
        key: {
            type: DataTypes.STRING,
            allowNull: false
        },
        dorm: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });
    
    return authKeys;
};
