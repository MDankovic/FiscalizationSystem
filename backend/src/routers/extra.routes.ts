import express from 'express';
import { ExtraController } from '../controllers/extra.controller';
const extraRouter = express.Router();

extraRouter.route('/getAll').post(
    (req, res)=>new ExtraController().getAll(req, res)
)

export default extraRouter;