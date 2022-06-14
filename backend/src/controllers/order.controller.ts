import * as express from 'express';
import Order from '../models/order';
import User from '../models/user';


export class OrderController {
    add = (req: express.Request, res: express.Response) => {
        let username = req.body.username;
        let productName = req.body.productName;
        let extras = req.body.extras;
        let today = new Date().toISOString().slice(0, 10);
        

        Order.collection.find({}).sort({ 'idN': -1 }).limit(1).next().then(x => {
            let id = x.idN + 1;
            Order.collection.insertOne({
                'idN': id,
                'proizvod': productName,
                'kupac': username,
                'dodaci': extras,
                'datum': today,
                'status': 'Neobradjeno'
            });

            res.json("added");
        })
    }

    getAll = (req: express.Request, res: express.Response) => {

        let i = 0;

        Order.find({}, (err, orders) => {
            orders.forEach((order) => {
                User.findOne({ 'kor_ime': order.kupac }, (err, u) => {
                    order.set({ user: u });
                    i++;
                    if (i == orders.length) {
                        res.json(orders)
                    }
                }).exec();
            })
        })

    }

    getAllForUsername = (req: express.Request, res: express.Response) => {
        Order.find({ 'kupac': req.body.username }, (err, orders) => {
            res.json(orders)
        })
    }

    updateStatus = (req: express.Request, res: express.Response) => {
        let id = req.body.id;
        let newStatus = req.body.newStatus;
        Order.collection.updateOne({ 'idN': id }, { $set: { 'status': newStatus } }).then(x => {
            res.json("updated");
        });
    }
}