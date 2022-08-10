import { Router } from 'express';

import * as vaccineServiceController from "../controllers/vaccineServiceController"


const router = Router();

router.get('/', vaccineServiceController.getAllVaccineService);
router.get('/:id', vaccineServiceController.getVaccineServiceById);
router.post('/', vaccineServiceController.createVaccineService);
router.put('/:id', vaccineServiceController.updateVaccineService);
router.delete('/:id', vaccineServiceController.deleteVaccineService);


export default router;