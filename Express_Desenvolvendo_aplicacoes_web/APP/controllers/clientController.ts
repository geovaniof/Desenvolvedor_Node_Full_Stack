import { Request, Response } from 'express';
import { IClientes } from '../models/clients';
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

function create(req: Request, res: Response, next: any){
    res.render('create');
}

async function store(req: Request, res: Response, next:any){
    let clientes = req.body as IClientes;
    clientes.id = 0;
    try{
        //await ClientRepository.create(clientes);
        //await ClientRepository.create({nome: clientes.nome, email: clientes.email});
        await ClientRepository.create({...clientes});
        res.redirect('/clientes');
    }catch(error){
        console.log(error);
        res.status(500).end();
    }
}

async function edit(req: Request, res: Response, next:any){
    const clients = await ClientRepository.findByPk(req.params.id);
    try{
        if (clients === null){
            res.status(404).send('Não encontrado');
        } else {
            res.status(200).render('edit', {cliente : clients})
        }
    } catch(error){
        console.log(error);
        res.status(500).end();
    }

}

async function update(req: Request, res: Response, next:any){
    const clients = await ClientRepository.findByPk(req.params.id);
    try{
        await ClientRepository.update(
            req.body as IClientes, {
            where: {
                id: req.params.id
            }
        });
        res.redirect('/clients');
    } catch(error){
        console.log(error);
        res.status(500).end();
    }

}

async function show(req: Request, res: Response, next: any){
    const client = await ClientRepository.findByPk(req.params.id);
    res.render('show', {cliente: client});
}

export default { index, produto, show, create, store, edit, update };