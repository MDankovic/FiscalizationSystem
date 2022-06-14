import * as express from 'express';
import Product from '../models/product'

export class ProductController{
    getAll = (req: express.Request, res: express.Response)=>{        
        Product.find({}, (err, products)=>{
            if(err) console.log(err);
            else res.json(products)
        })
    }
    
}