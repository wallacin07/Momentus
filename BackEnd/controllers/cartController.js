class CartController{
    constructor(CartService){
        this.cartService = CartService;
    }
    async addCart(req,res){
        try{
            const {IdProduct,quantity}= req.body;
            const IdUser = req.user.id;
            const newItem = await this.cartService.addCart(IdProduct,IdUser,quantity);
            res.status(200).json(newItem);
        }
        catch(error){
            res
                .status(500)
                .json({error: 'Ocorreu um erro ao gravar o novo produto no carrinho.'});
        }
    }
    async deleteCart(req,res){
        try{
            const {IdProduct}= req.body;
            const IdUser = req.user.id;
            await this.cartService.removeCart(IdProduct,IdUser);
            res.status(200).json({message:"Deletado com sucesso!!"});
        }catch(error){
            res
                .status(500)
                .json({error: 'Ocorreu um erro ao deletar o produto do carrinho.'});
        }
    }
    async GetCart(req,res){
        try{
            const IdUser = req.user.id;
            const cart = await this.cartService.getCart(IdUser);
            res.status(200).json(cart);
        }catch(error){
            res
                .status(500)
                .json({error: 'Ocorreu um erro ao coletar produtos do carrinho.'});
        }
    }
    
}

module.exports = CartController;