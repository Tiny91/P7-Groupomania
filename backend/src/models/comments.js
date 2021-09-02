
module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Comment', {
        id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
        },        
        content: {
        type: DataTypes.STRING,
        allowNull: false
        },        
    }, {
        timestamps: true,
        createdAt: 'published',
        updatedAt: false,
        }
)}