const Sequelize = require("sequelize");


module.exports= (sequelize) => {
    const User = require('./user')(sequelize);  
    const Cart  = sequelize.define('Cart',{
        id:{
            type:Sequelize.INTEGER,
            autoIncrement:true,
            primaryKey:true,
            allowNull:false
        },
        totalPrice:{
            type:Sequelize.FLOAT,
            allowNull:false
        }
    });

    Cart.belongsTo(User,{
        constraint: true,
        foreignKey: 'IdUser',
        onDelete: 'CASCADE'
    })
    return Cart;
}