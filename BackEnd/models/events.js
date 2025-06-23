const Sequelize = require("sequelize");


module.exports= (sequelize) => {
    const Events  = sequelize.define('Events',{
        id:{
            type:Sequelize.INTEGER,
            autoIncrement:true,
            primaryKey:true,
            allowNull:false
        },
        description:{
            type:Sequelize.STRING,
            allowNull:false
        },
        name:{
            type:Sequelize.STRING,
            allowNull:false
        },
        date:{
            type:Sequelize.DATE,
            allowNull:false
        },
        status:{
            type:Sequelize.STRING,
            allowNull:false
        },
    });
    Events.associate = (models) => {
        Events.belongsTo(models.Client, {
            foreignKey: 'clientId',
            as: 'client'
        });

        Events.hasMany(models.Deliveres, {
            foreignKey: 'eventId',
            as: 'deliveres'
        });

        Events.belongsTo(models.Ceremonialist, {
            foreignKey: 'ceremonialistId',
            as: 'ceremonialist'
        });

        Events.hasMany(models.Task, {
            foreignKey: 'eventId',
            as: 'tasks'
        });
    };

    return Events;
}