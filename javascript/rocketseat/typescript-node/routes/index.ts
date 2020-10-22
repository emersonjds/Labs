import express, {Router} from 'express'
import cors from 'cors';
import appointmentsRouter from './appointment.routes';

const routes = Router();

routes.use('/appointment', appointmentsRouter);

export default routes;
