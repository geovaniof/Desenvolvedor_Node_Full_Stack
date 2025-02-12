import { Request, Response } from 'express';
import { IClients } from '../models/clients';
import ClientRepository from '../models/clientsModel'

async function index(req: Request, res : Response, next : any){
    const clients = await ClientRepository.findAll();
    res.render('index', {clients: clients});
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

async function show(req: Request, res: Response, next: any){
    const client = await ClientRepository.findByPk(req.params.id);
    res.render('show', {client: client});
}

export default { index, produto, show };