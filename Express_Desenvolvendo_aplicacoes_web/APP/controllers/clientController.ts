import { Request, Response } from 'express';

function index(req: Request, res : Response, next : any){
    res.render("index");
}

function produto(req: Request, res: Response, next : any){
    var produtos = [
        {
            nome: 'Memória RAM',
            descricao: '16GB'
        },
        {
            nome: 'Placa de Vídeo',
            descricao: '8GB'
        },
        {
            nome: 'Monitor',
            descricao: 'Full HD'
        }
    ];
    
    var produto = produtos[parseInt(`${req.params.id}`)];
    res.render('produto', {produto: produto});
}

export default { index, produto };