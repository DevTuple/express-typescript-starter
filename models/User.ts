import mongoose from 'mongoose';
//const MBUV = require("mongoose-beautiful-unique-validation");

export type UserDocument = mongoose.Document & {
  email: string;
  password: string;
  //passwordResetToken: string;
  //passwordResetExpires: Date;
  role: string;
  //active: boolean;




  //comparePassword: comparePasswordFunction;
  //gravatar: (size: number) => string;
};

//type comparePasswordFunction = (candidatePassword: string, cb: (err: any, isMatch: any) => {}) => void;

const UserSchema = new mongoose.Schema({
  
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
  role: {
    type: String,
  },

});


// const comparePassword: comparePasswordFunction = function (candidatePassword, cb) {
//   bcrypt.compare(candidatePassword, this.password, (err: mongoose.Error, isMatch: boolean) => {
//       cb(err, isMatch);
//   });
// };

// UserSchema.methods.comparePassword = comparePassword;

// /**
// * Helper method for getting user's gravatar.
// */
// UserSchema.methods.gravatar = function (size: number = 200) {
//   if (!this.email) {
//       return `https://gravatar.com/avatar/?s=${size}&d=retro`;
//   }
//   const md5 = crypto.createHash("md5").update(this.email).digest("hex");
//   return `https://gravatar.com/avatar/${md5}?s=${size}&d=retro`;
// };

//UserSchema.plugin(MBUV);

const User = mongoose.model<UserDocument>("User", UserSchema);

export default User;
