import express, { Request, Response } from 'express';
import cors from 'cors';
import routeNotFound from './app/middlewares/notFound';
import router from './app/routes';
const app = express();

app.use(express.json());
app.use(cors());

// Routes
app.use('/api/', router);

// route Not found
app.use(routeNotFound);
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

export default app;
