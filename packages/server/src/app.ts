import express, { type Application } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import userRoutes from './routes';

dotenv.config();

class App {
  app: Application;

  constructor() {
    this.app = express();
    this.middleware();
    this.routes();
  }

  middleware() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(cors({ origin: 'http://localhost:3000' }));
  }

  routes() {
    this.app.use('/users', userRoutes);
  }
}

export default new App().app;
