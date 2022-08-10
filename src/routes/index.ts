import { Router } from 'express';
import vaccineServiceRoutes from './vaccineServiceRoutes'


import userRoutes from './userRoutes';

const router = Router();

router.use('/users', userRoutes);

router.use("/vaccine-services", vaccineServiceRoutes)

export default router;
