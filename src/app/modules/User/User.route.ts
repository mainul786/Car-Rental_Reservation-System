import express from 'express';
import { UserControllers } from './User.controller';
import validateRequest from '../../middlewares/validateRequest';
import { UserValidation } from './User.validation';
const router = express.Router();

router.post(
  '/user',
  validateRequest(UserValidation.userValidationSchema),
  UserControllers.userCreate,
);

export const UserRouter = router;
