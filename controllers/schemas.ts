import joi from 'joi';

export const LOGIN_SCHEMA = joi.object({
  id: joi.string()
    .email()
    .required(),
  password: joi.string().required(),
  socketId: joi.string(),
  loginType: joi.string()
});

export const SIGNUP_SCHEMA = joi.object({
  email: joi.string()
    .email()
    .required(),

  password: joi.string().required(),
  role: joi.string()
});