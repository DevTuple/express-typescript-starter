import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { StringChain } from "lodash";
import mongoose from "mongoose";


//export const LoggedInUser = mongoose.model("LoggedInUser");

export const hashPassword = (password:string) => {
  let salt = bcrypt.genSaltSync(10);
  let hash = bcrypt.hashSync(password, salt);
  return hash;
};
export const comparePassword = (password:string, hash:string) => {
  return bcrypt.compareSync(password, hash);
};
export const token = (payload:any, expiresIn:number) => {
  return jwt.sign(payload, process.env.SECRET, {
    expiresIn,
  });
};

// const socketDisconnect = async (data:any) => {
//   let socketId = data.socketId;
//   let loginType = data.loginType;
//   console.log(data);

//   try {
//     if (loginType === "WEB") {
//       await LoggedInUser.findOneAndUpdate(
//         { websocketId: socketId },
//         { websocketId: null }
//       );
//     }
//     if (loginType === "MOBILE") {
//       await LoggedInUser.findOneAndUpdate(
//         { mobilesocketId: socketId },
//         { mobilesocketId: null }
//       );
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };
/*
const getloginType = async (data) => {
  let socketId = data.socketId;
  console.log("Ashish" + socketId);

  try {
    let centeruser = await LoggedInUser.find({
      $or: [{ websocketId: socketId }, { mobilesocketId: socketId }],
    });

    console.log(centeruser);
    if (centeruser[0].websocketId === socketId) {
      console.log("1");
      return "WEB";
    }
    if (centeruser.mobilesocketId === socketId) {
      console.log("2");

      return "MOBILE";
    }
    console.log(centeruser);
  } catch (error) {
    console.log(error);
  }
};
*/

