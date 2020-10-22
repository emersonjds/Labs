import {Router} from 'express'
import appointmentsRouter from './appointment.routes';

const routes = Router();

routes.use('/appointment', appointmentsRouter);

export default routes;
