import {Router} from 'express'
import uniqid from 'uniqid';

const appointmentRouter = Router();

const appointments = [];

appointmentRouter.post('/', (req, res) => {
  const {provider, date} = req.body;

  const appointment = {
    id: uniqid(),
    provider, 
    date
  }

  appointments.push(appointment);

  return res.json(appointment);

})

export default appointmentRouter;

