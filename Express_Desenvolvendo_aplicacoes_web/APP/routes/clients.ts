import { Router } from 'express';
import clientsController from '../controllers/clientController';

const router = Router();

router.get('/', clientsController.index);
router.get('/saudacao/:nome?', (req, res) =>{
    if (req.params.nome === undefined){
        res.send('Desconhecido')
    } else{
        res.send(`<h1>Olá ${req.params.nome}</h1>`);
    }
})
router.get('/produto/:id', (req, res) =>{
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
});



export default router;
