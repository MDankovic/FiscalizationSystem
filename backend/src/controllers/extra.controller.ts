import * as express from 'express';
import Extra from '../models/Extra';


export class ExtraController{
    getAll = (req: express.Request, res: express.Response)=>{        
        Extra.find({}, (err, extras)=>{
            if(err) console.log(err);
            else res.json(extras)
        })
    }
    
}