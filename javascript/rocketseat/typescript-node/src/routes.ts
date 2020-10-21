import {Router} from 'express'

const routes = Router();

routes.post('/users', (req: Request, res: Response) => {
  const {name, email} = req.body;

  const user = {name, email}
  return res.json(user);
})

export default routes;
