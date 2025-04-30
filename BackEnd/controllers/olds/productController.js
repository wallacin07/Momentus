
class ProductController{
    constructor(ProductService){
        this.productService = ProductService;
    }
    async createProduct(req,res){
        const {name,description,price,stock} = req.body;
        try{
            const newProduct = await this.productService.createProduct(name,description,price,stock);
            res.status(200).json(newProduct);
        }
        catch(error){
            res
                .status(500)
                .json({error: 'Ocorreu um erro ao gravar o novo produto.'});
        }
    }
    async allProduct(req,res){
        try{
            const allProduct = await this.productService.findAll()
            res.status(200).json(allProduct);
        }catch(error){
            res
                .status(500)
                .json({error: 'Ocorreu um erro ao coletar usuarios.'});
        }
    }
    async updateProduct(req,res){
        try{
            const id = req.query.id;
            const {name,description,price,stock} = req.body;
            await this.productService.updateProduct(id,name,description,price,stock);
            res.status(200).json({message:"Atualizado com sucesso!!"});
        }catch(error){
            res
                .status(500)
                .json({error: 'Ocorreu um erro.'});
        }
    }
    async deleteProduct(req,res){
        try{
            const id = req.query.id;
            await this.productService.deleteProduct(id);
            res.status(200).json({message:'Deletado com sucesso!'});
        }catch(error){
            res
            .status(500)
            .json({error: 'Ocorreu um erro.'});
        }
    }
}

module.exports = ProductController;