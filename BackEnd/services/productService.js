
const db = require('../models');


class ProductService{
    constructor(ProductModel){
        this.Product = ProductModel;
    }

    async createProduct(name,description,price,stock){
        try{
            if(stock<0){
                return {message:"Valor de estoque invalido"}
            };
            const newProduct = await this.Product.create({
                name:name,
                description:description,
                price:price,
                stock:stock
            });
            return newProduct? newProduct : null;
        }
        catch (error){
            throw error;
        }
    }
    async findAll(){
        try{
            const allProducts = await this.Product.findAll();
            return allProducts?allProducts:null;
        }
        catch(error){
            throw error;
        }
    }
    async updateProduct(id,name,description,price,stock){
        try{
            await this.Product.update(
                {
                    name:name,
                    description:description,
                    price:price,
                    stock:stock
                },{where:{id:id}}
            );
        }catch(error){
            throw error;
        }
    }
    async deleteProduct(id){
        try{
            await this.Product.destroy({
                where:{id:id}
            })
        }catch(error){
            throw error;
        }
    }
}
module.exports = ProductService;