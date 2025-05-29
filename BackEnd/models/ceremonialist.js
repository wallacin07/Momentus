const Sequelize = require("sequelize");


module.exports= (sequelize) => {
    const Ceremonialist  = sequelize.define('Ceremonialist',{
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
        CNPJ:{
            type:Sequelize.STRING,
            allowNull:true
        },
        birthDate:{
            type:Sequelize.DATE,
            allowNull:false
        },
        adress:{
            type:Sequelize.STRING,
            allowNull:true
        },
    });

    Ceremonialist.associate = (models) => {
        Ceremonialist.hasMany(models.Events, {
            foreignKey: 'ceremonialistId',
            as: 'events'
        });
        Ceremonialist.hasMany(models.Client, {
            foreignKey: 'ceremonialistId',
            as: 'clients'
        });
    };

    return Ceremonialist;
}