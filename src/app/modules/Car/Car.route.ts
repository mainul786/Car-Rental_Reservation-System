import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { CarValidation } from './Car.validation';
import { CarControllers } from './Car.controllers';

const router = express.Router();

router.post(
  '/cars',
  validateRequest(CarValidation.createCarValidationSchema),
  CarControllers.createCar,
);

router.get('/:carId', CarControllers.getSingleCar);
router.get('/', CarControllers.getAllCar);

export const CarRoute = router;
