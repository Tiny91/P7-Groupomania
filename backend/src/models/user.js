
module.exports = (sequelize, DataTypes) => {
    return sequelize.define('User', {
        id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
        },
        pseudo : {
        type: DataTypes.STRING,
        unique: {msg: "ce pseudo est déjà utilisé"},
        allowNull: false 
        },
        email: {
        type: DataTypes.STRING,
        unique: {msg: "cet email est déjà utilisé"},
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