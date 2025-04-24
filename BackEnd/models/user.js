///models/user.js
const Sequelize = require("sequelize");
module.exports= (sequelize) => {
    const User = sequelize.define('User',{
        id:{
            type:Sequelize.INTEGER,
            autoIncrement:true,
            primaryKey:true,
            allowNull:false
        },
        email:{
            type:Sequelize.STRING,
            unique:true,
            allowNull:false
        },
        dataNasc:{
            type:Sequelize.DATE,
            allowNull:true
        },
        password:{
            type:Sequelize.STRING,
            allowNull:false
        }
    });
    return User;
};