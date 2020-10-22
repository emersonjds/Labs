import {Router} from 'express'

const appointmentRouter = Router();

appointmentRouter.get('/', (req, res) => {
  return res.json({message: 'Emerson'});
})

export default appointmentRouter;

