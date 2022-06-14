import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import userRouter from './routers/user.routes';
import productRouter from './routers/product.routes';
import extraRouter from './routers/extra.routes';
import orderRouter from './routers/order.routes';

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/FiscalizationSystem');
const connection = mongoose.connection;
connection.once('open', ()=>{
    console.log('db connection ok')
})

const router = express.Router();
router.use('/users', userRouter)
router.use('/products', productRouter)
router.use('/extras', extraRouter)
router.use('/orders', orderRouter)

app.use('/', router);

app.get('/', (req, res) => res.send('Hello World!'));
app.listen(4000, () => console.log(`Express server running on port 4000`));