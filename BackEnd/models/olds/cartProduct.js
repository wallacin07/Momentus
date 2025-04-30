const Sequelize = require("sequelize");

module.exports= (sequelize) => {
    const Cart = require('./cart')(sequelize);  
    const Product = require('./product')(sequelize);  
    const CartProduct  = sequelize.define('CartProduct',{
        id:{
            type:Sequelize.INTEGER,
            autoIncrement:true,
            primaryKey:true,
            allowNull:false
        },
        quantity:{
            type:Sequelize.INTEGER,
            allowNull:false
        },
        price:{
            type:Sequelize.FLOAT,
            allowNull:false
        }
    });

    CartProduct.belongsTo(Cart,{
        constraint: true,
        foreignKey: 'IdCart',
        onDelete: 'CASCADE'
    });

    CartProduct.belongsTo(Product,{
        constraint: true,
        foreignKey: 'IdProduct'
    });


    return CartProduct;
}