import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { CarValidation } from './Car.validation';

const router = express.Router();

router.post('/cars', validateRequest(CarValidation.createCarValidationSchema));

export const CarRoute = router;
