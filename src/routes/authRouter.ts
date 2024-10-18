import { Router } from 'express';
import { userRegister } from '../controllers/authController';

const router = Router();

router.post('/register-user', userRegister);

export default router;
