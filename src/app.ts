import express, { Request, Response } from 'express';
import cors from 'cors';
import routeNotFound from './app/middlewares/notFound';
const app = express();

app.use(express.json());
app.use(cors());

// route Not found
app.use(routeNotFound);
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

export default app;
