import { Router } from 'express';
import {saveItem,getItems} from '../controllers/baseController';

const router = Router();

router.get('/items',getItems);

router.post('/items',saveItem);

export default router;
