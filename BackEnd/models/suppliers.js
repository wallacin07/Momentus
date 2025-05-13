const Sequelize = require("sequelize");

module.exports= (sequelize) => {
    const Suppliers  = sequelize.define('Suppliers',{
        id:{
            type:Sequelize.INTEGER,
            autoIncrement:true,
            primaryKey:true,
            allowNull:false
        },
        name:{
            type:Sequelize.STRING,
            allowNull:false
        },
        email:{
            type:Sequelize.STRING,
            allowNull:false
        },
        number:{
            type:Sequelize.STRING,
            allowNull:false
        },
        adress:{
            type:Sequelize.STRING,
            allowNull:false
        },
        description:{
            type:Sequelize.STRING,
            allowNull:false
        },
        CNPJ:{
            type:Sequelize.STRING,
            allowNull:false
        },
    });

    return Suppliers;
}