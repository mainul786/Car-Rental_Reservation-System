import express from 'express';
import { CarRoute } from '../modules/Car/Car.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/cars',
    route: CarRoute,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
