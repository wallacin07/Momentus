const Sequelize = require("sequelize");


module.exports= (sequelize) => {
    const Client  = sequelize.define('Client',{
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
        password:{
            type:Sequelize.STRING,
            allowNull:false
        },
        CPF:{
            type:Sequelize.STRING,
            allowNull:false
        },
        birthDate:{
            type:Sequelize.DATE,
            allowNull:false
        },
        adress:{
            type:Sequelize.STRING,
            allowNull:false
        },
        number:{
            type:Sequelize.STRING,
            allowNull:false
        },
    });

    Client.associate = (models) => {
        Client.hasMany(models.Events, {
            foreignKey: 'clientId',
            as: 'events'
        });

        Client.belongsTo(models.Ceremonialist, {
            foreignKey: 'ceremonialistId',
            as: 'ceremonialist'
        });
    }

    return Client;
}