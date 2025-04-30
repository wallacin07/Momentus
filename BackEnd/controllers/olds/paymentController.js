class PaymentController{
    constructor(PaymentService){
        this.paymentService = PaymentService;
    }
    async createPaymentCredit(req,res){
        try{
            const IdUser = req.user.id;
            let payment = await this.paymentService.create(IdUser,"Credit Card");
            res.status(200).json(payment);
        }catch(err){
            console.log(err)
            res.status(500).json({message:"Erro ao adicionar pagamento por credito"})
        }
    }
    async createPaymentPix(req,res){
        try{
            const IdUser = req.user.id;
            let payment = await this.paymentService.create(IdUser,"Pix");
            res.status(200).json(payment);
        }catch(err){
            res.status(500).json({message:"Erro ao adicionar pagamento por credito"})
        }
    }
    async getPayment(req,res){
        try{
            const id = req.query.id;
            const IdUser = req.user.id;
            let payment = await this.paymentService.getPayment(IdUser,id);
            res.status(200).json(payment)
        }catch(err){
            console.log(err)
            res.status(500).json({message:"Erro em coletar pagamento"})
        }
    }
}

module.exports = PaymentController;