const { where } = require("sequelize");

class CartService{
    constructor(CartModel,CartProductModel,ProductModel){
        this.Cart = CartModel;
        this.CartProduct = CartProductModel
        this.Product = ProductModel;
    }
    async addCart(IdProduct,IdUser,quantity){
        try{
            quantity = Math.round(quantity);
            let product = await this.Product.findByPk(IdProduct);
            if(quantity<0 || product.stock < quantity){
                return {message:"Valor invalido para Quantidade"}
            };
            let currentCart = await this.Cart.findOne({where:{IdUser:IdUser}});
            currentCart = currentCart?currentCart: await this.Cart.create({totalPrice:0,IdUser:IdUser});
            let thisCard = await this.CartProduct.findOne({where:{IdCart:currentCart.id,IdProduct:IdProduct}})
            if(thisCard){
                await this.CartProduct.update({
                    quantity: thisCard.quantity+quantity,
                    price: thisCard.price+(quantity*product.price)
                },{where:{id:thisCard.id}})
                await this.Cart.update({totalPrice:currentCart.totalPrice+(quantity*product.price)},{where:{id:currentCart.id}})
                return {currentCart}
            }
            
            await this.CartProduct.create({IdProduct:IdProduct,IdCart:currentCart.id,quantity:quantity,price:product.price*quantity});


            currentCart = await this.Cart.update({
                totalPrice:currentCart.totalPrice + product.price*quantity
            },{where:{id:currentCart.id}});
            return {currentCart,product};
        }
        catch (error){
            console.log(error);
            throw error;
        }
    }
    async removeCart(IdProduct,IdUser){
        try{
            let currentCart = await this.Cart.findOne({where:{IdUser:IdUser}});
            let currentCartProduct = await this.CartProduct.findOne({where:{IdProduct:IdProduct,IdCart:currentCart.id}});
            
            await this.Cart.update({
                totalPrice:currentCart.totalPrice - currentCartProduct.price
            },{where:{id:currentCart.id}});

            await this.CartProduct.destroy({
                where:{id:currentCartProduct.id}
            });
        }catch (error){
            console.log(error);
            throw error;
        }
    }
    async getCart(IdUser){
        try{
            let currentCart = await this.Cart.findOne({where:{IdUser:IdUser}});
            let allProducts = await this.CartProduct.findAll({where:{IdCart:currentCart.id},include:{model:this.Product,require:true}});
            return {currentCart,allProducts};
        }catch(error){
            console.log(error);
            throw error;
        }
    }
}
module.exports = CartService;