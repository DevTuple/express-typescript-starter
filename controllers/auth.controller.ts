import express, { Request, Response } from "express";
import User from '../models/User';
import { TOKEN_EXPIRY_DATE } from '../util/env'
//const mongoose = require("mongoose");
//const User = mongoose.model("User");
//const LoggedInUser = mongoose.model("LoggedInUser");

import { hashPassword, comparePassword, token } from "../services/auth.service";
import { LOGIN_SCHEMA, SIGNUP_SCHEMA }  from "../validators/auth.validators";

export const LOGIN = async (req: Request, res: Response) => {
  // @id could be name or email
  //let { socketId, loginType } = req.body;

  let { value, error } = LOGIN_SCHEMA.validate(req.body);

  if (error) res.status(422).send({ list: value.details });
  else {
    try {
      let query = [
        {
          email: req.body.id,
          active: true,
        },
        {
          name: req.body.id,
        },
      ];
      let user = await User.findOne({
        $or: query,
      });
      if (!user) res.status(400).send({});
      else {
        let compared = comparePassword(req.body.password, user.password);
        if (compared) {
          let _token = token(
            {
              id: user._id,
            },
            TOKEN_EXPIRY_DATE
          );
          try {
            let userId = user._id;
            
          } catch (error) {
            //console.log("e500", error);
            res.status(500).send({
              error,
            });
          }
          res.send({
            token: _token,
            user: {
              ...user._doc,
            },
          });
        } else res.status(400).send({});
      }
    } catch (error) {
      //console.log("e500", error);
      res.status(500).send({
        error,
      });
    }
  }
};

export const SIGNUP = async (req: Request, res: Response) => {
  let { email, password,  role } = req.body;
  let { error } = SIGNUP_SCHEMA.validate(req.body);
  if (error) res.status(400).send({ error: error.details });
  else {
    try {
      let user = await User.create({
        email,
        password: hashPassword(password),
        role,
      });
      let _token = token(
        {
          id: user._id,
        },
        TOKEN_EXPIRY_DATE
      );
      res.send({
        token: _token,
        user,
      });
    } catch (error) {
      console.error(error);
      if (error.name === "ValidationError") {
        res.status(409).send({
          code: "Duplicate",
          errors: Object.keys(error.errors),
        });
      } else {
        //console.log("Error", error);
        res.status(500).send({
          error,
        });
      }
    }
  }
};

export const LOGOUT = async (req: Request, res: Response) => {
  let { user_id, loginType } = req.body;
  let userId = JSON.parse(user_id)._id;
  try {
    let removeSocketId;
    //console.log("ashihs" + loginType);

    
    res.send({ removeSocketId });
  } catch (error) {
    //console.log("Error", error);
    res.status(500).send({
      error,
    });
  }
};

export const socketReconnect = async (req: Request, res: Response) => {
  let { user_id, socket_id, loginType } = req.body;
  //console.log("====================================");
  //console.log(user_id, socket_id);
  //console.log("====================================");
  try {
    let updateSocketId;
    
    res.send(updateSocketId);
  } catch (error) {
    //console.log("Error", error);
    res.status(500).send({
      error,
    });
  }
};



