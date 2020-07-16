class Controller{
    //post - Criar usuario

    soma(req, res){
        const {valor1} = req.body; 
        const {valor2} = req.body;
        soma = valor1+valor2;  
        return res.status(200).json({soma});
    }
    //deletar
   pessoa(req, res){
        const {nome} = req.body;
        const {sobrenome} = req.body;
        const {idade} = req.body;  
         
         return res.status(200).json({msg:`meu nome e ${nome}${sobrenome}tenho${idade}anos.`});
         
    }
    aleatorio(req,res){
        var  numero = Math.floor(Math.random() * 2);
        return res.status(200).json({numero:numero});
    }
 parImpar(req,res){
     const {numero} = req.params;
     if((numero/2)==0){
        return res.status(200).json({msg:"par"});
     }else{
        return res.status(200).json({msg:"impar"});
     }
 }

}

module.exports = new UserController();