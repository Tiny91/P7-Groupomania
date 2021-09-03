
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
        type: DataTypes.STRING,
        allowNull: false
        },
        media: {
        type: DataTypes.STRING,
        allowNull: true     
        },    
    }, {
        timestamps: true,
        createdAt: 'published',
        updatedAt: false,
        }
)}