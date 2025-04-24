const { where } = require('sequelize');
const db = require('../models');


class PaymentService{
    constructor(PaymentModel,CartModel,CartProductModel,CartProduct){
        this.payment = PaymentModel;
        this.cart = CartModel;
        this.cartProduct = CartProductModel;
        this.product = CartProduct;
    }

    async create(idUser,paymentType){
        try{
            let currentCart = await this.cart.findOne({where:{IdUser:idUser}})
            let productList = await this.cartProduct.findAll({where:{IdCart:currentCart.id}})
    
            productList.map(async (item)=>{
                let currentProduct = await this.product.findOne({where:{id:item.IdProduct}})
    
                await this.product.update({
                    stock: currentProduct.stock - item.quantity
                },{where:{id:item.IdProduct}})
    
                await this.cartProduct.destroy({where:{id:item.id}})
            })
    
            let currentPayment = await this.payment.create({
                totalPrice:currentCart.totalPrice,
                status:"Pendente",
                paymentMethods: paymentType,
                IdUser:idUser
            });
    
            await this.cart.update({
              totalPrice:0  
            },
            {
                where:{id:currentCart.id}
            })
    
            return currentPayment;
        }catch(err){
            console.log(err);
            throw err
        }
    }
    async getPayment(idPayment,idUser){
        try{
            let currentPayment = await this.payment.findByPk(idPayment);

            if(currentPayment.IdUser !== parseInt(idUser)){
                return {message:"Acesso não atorizado a esse usuario"}
            }

            return currentPayment?currentPayment:null

        }catch(err){
            console.log(err)
            throw err
        }
    }
}

module.exports = PaymentService;