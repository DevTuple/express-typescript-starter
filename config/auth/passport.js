const Passport = require("passport");
const PassportJWT = require("passport-jwt");
const mongoose = require("mongoose");
const User = mongoose.model("user");
const configJWTStrategy = () => {
  let options = {
    jwtFromRequest: PassportJWT.ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.SECRET,
    secretOrPrivateKey: process.env.SECRET
  };
  // console.log(options + "options in pass port");
  Passport.use(
    new PassportJWT.Strategy(options, async ({ id }, done) => {
      try {
        let user = await User.findOne({ _id: id });
        if (user) return done(null, { ...user._doc });
        else return done(null, false);
      } catch (err) {
        return done(err);
      }
    })
  );
};
module.exports = { configJWTStrategy };
