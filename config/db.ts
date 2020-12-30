import mongoose from "mongoose";
import { MONGODB_URI } from "../util/env";
import bluebird from "bluebird";
import User from '../models/User';

export const dbConfig = () => {
  // Connect to MongoDB
  const mongoUrl = MONGODB_URI;
  (<any>mongoose).Promise = bluebird;

  mongoose
    .connect(mongoUrl, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      /** ready to use. The `mongoose.connect()` promise resolves to undefined. */
    })
    .catch((err) => {
      console.log(
        `MongoDB connection error. Please make sure MongoDB is running. ${err}`
      );
      // process.exit();
    });
};

const models = { User };

export default models;
