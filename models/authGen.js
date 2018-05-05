module.exports = function(sequelize, DataTypes) {
    var authKey = sequelize.define("authKey", {
        key: {
            type: DataTypes.STRING,
            allowNull: false
        },
        dorm: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });
    
    return authKey;
};
