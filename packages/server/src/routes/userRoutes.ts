import { Router } from 'express';
import userController from '../controllers/userController';

const router = Router();

router.get('/', userController.findAll);
router.post('/', userController.create);
router.delete('/:id', userController.remove);
router.patch('/:id', userController.update);

export default router;
