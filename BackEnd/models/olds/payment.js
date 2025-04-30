const { type } = require("express/lib/response");
const Sequelize = require("sequelize");


module.exports= (sequelize) => {
    const User = require('./user')(sequelize);  
    const Payment  = sequelize.define('Payment',{
        id:{
            type:Sequelize.INTEGER,
            autoIncrement:true,
            primaryKey:true,
            allowNull:false
        },
        totalPrice:{
            type:Sequelize.FLOAT,
            allowNull:false
        },
        status:{
            type:Sequelize.STRING,
            allowNull:false
        },
        paymentMethods:{
            type:Sequelize.STRING,
            allowNull:false
        }
    });

    Payment.belongsTo(User,{
        constraint: true,
        foreignKey: 'IdUser'
    })
    return Payment
}

