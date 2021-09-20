
module.exports = (sequelize, DataTypes) => {
    return sequelize.define('User', {
        id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
        },
        pseudo : {
        type: DataTypes.STRING,        
        allowNull: false, 
        unique: true
        },
        email: {
        type: DataTypes.STRING,
        allowNull: false
        },
        password: {
        type: DataTypes.STRING,
        allowNull: false     
        },
        isAdmin: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
        },
    }, 
)}