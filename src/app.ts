import express from 'express';
import cors from 'cors';
import routeNotFound from './app/middlewares/notFound';
import router from './app/routes';
import { CarRoute } from './app/modules/Car/Car.route';
import { UserRouter } from './app/modules/User/User.route';
const app = express();

app.use(express.json());
app.use(cors());

// Routes
// app.use('/api/', router);
app.use('/api', CarRoute);
app.use('/api', UserRouter);

// route Not found
app.use(routeNotFound);

export default app;
