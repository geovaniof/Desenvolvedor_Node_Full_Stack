import { Router } from 'express';
import clientsController from '../controllers/clientController';

const router = Router();

router.get('/', clientsController.index);

router.get('/produto/:id', clientsController.produto);
router.get('/clients', clientsController.index);
router.get('/clients/:id', clientsController.show);



export default router;
