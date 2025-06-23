const Sequelize = require("sequelize");

module.exports= (sequelize) => {
    const Deliveres  = sequelize.define('Deliveres',{
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
    });

    Deliveres.associate = (models) => {
        Deliveres.belongsTo(models.Events, {
            foreignKey: 'eventId',
            as: 'events'
        });
        
        Deliveres.belongsTo(models.Suppliers, {
            foreignKey: 'supplierId',
            as: 'suppliers'
        });
    }
    return Deliveres;
}