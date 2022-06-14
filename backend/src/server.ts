import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

const app = express();


mongoose.connect('mongodb://localhost:27017/FiscalizationSystem');
const connection = mongoose.connection;
connection.once('open', ()=>{
    console.log('db connection ok')
})

app.get('/', (req, res) => res.send('Hello World!'));
app.listen(4000, () => console.log(`Express server running on port 4000`));