
module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Post', {
        id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
        },
        title: {
        type: DataTypes.STRING,
        allowNull: false 
        },
        content: {
        type: DataTypes.TEXT,
        allowNull: false
        },
        pseudo: {
        type: DataTypes.STRING,
        allowNull: false            
        }
    }, {
        timestamps: true,
        createdAt: 'published',
        updatedAt: false,
        }
)}