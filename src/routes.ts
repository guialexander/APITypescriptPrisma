/**
 * Main application routes
 */
import { Application } from 'express';

import healthcheckRouter from './api/healthcheck';
import userRouter from './api/user';

function routes(app: Application) {
  app.use('/api/healthcheck', healthcheckRouter);
  app.use('/api/users', userRouter);
  app.use('/api/posts', userRouter);
}

export default routes;
