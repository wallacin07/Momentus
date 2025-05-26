const Sequelize = require("sequelize");

module.exports= (sequelize) => {
    const Task  = sequelize.define('Task',{
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
    Task.associate = (models) => {
        Task.belongsTo(models.Events, {
            foreignKey: 'eventId',
            as: 'event'
        });
    };
    return Task;
}