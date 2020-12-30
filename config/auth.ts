import User, { UserDocument } from "../models/User";
import passport from "passport";
import passportJWT from "passport-jwt";
import {SESSION_SECRET} from '../util/env'
//let users = require("./users.js");
//let cfg = require("./config.js");
let ExtractJwt = passportJWT.ExtractJwt;
let Strategy = passportJWT.Strategy;
let params = {
  secretOrKey: SESSION_SECRET,
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
};

//const mongoose = require("mongoose");
//const UserModel = mongoose.model("User");

export const authConfig = function () {
  let strategy = new Strategy(params, function (payload, done) {
    let userId = payload.id;
    // console.log(userId + "is user id in auth.js");
    User.findById(userId, function (err: any, user:any) {
      // console.log(user + "user in auth");
      if (user) {
        console.error(user._id);
        return done(null, user);
      } else {
        return done(new Error("User not found"), null);
      }
    });
  });
  passport.use(strategy);
  return {
    initialize: function () {
      return passport.initialize();
    },
    authenticate: function () {
      return passport.authenticate("jwt", { session: false });
    },
  };
};
