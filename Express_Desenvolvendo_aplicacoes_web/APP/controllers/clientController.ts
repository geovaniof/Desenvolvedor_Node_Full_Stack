import { Request, Response } from 'express';

function index(req: Request, res : Response, next : any){
    res.render("index");
}

function produto(req: Request, res: Response, next : any){
    var produtos = [
        {
            produto: 'Memória RAM',
            descricao: '16GB'
        },
        {
            produto: 'Placa de Vídeo',
            descricao: '8GB'
        },
        {
            produto: 'Monitor',
            descricao: 'Full HD'
        }
    ];
    
    res.send(`<h1>${produtos[parseInt(req.params.id)].produto}</h1>
             <p>${produtos[parseInt(req.params.id)].descricao} </p>`)
}

export default { index, produto };