module.exports = function(sequelize, DataTypes) {
    var Messages = sequelize.define("messages", {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        body: {
            type: DataTypes.STRING,
            allowNull: false
        },
        author: {
            type: DataTypes.STRING,
            allowNull: false
        },
        upvotes: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        downvotes: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        house: {
            type: DataTypes.STRING,
            allowNull: false
        }

    })
}