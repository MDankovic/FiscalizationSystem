import * as express from "express";
import User from "../models/user";
import Company from "../models/company";

export class UserController {
  login = (req: express.Request, res: express.Response) => {
    let username = req.body.username;
    let password = req.body.password;

    User.findOne({ username: username, password: password }, (err, user) => {
      if (err) console.log(err);
      else res.json(user);
    });
  };

  getByUsername = (req: express.Request, res: express.Response) => {
    let username = req.body.username;

    User.findOne({ username: username }, (err, user) => {
      if (err) console.log(err);
      else res.json(user);
    });
  };

  getCompanyByUsername = (req: express.Request, res: express.Response) => {
    let username = req.body.username;

    Company.findOne({ username: username }, (err, user) => {
      if (err) console.log(err);
      else res.json(user);
    });
  };
}
