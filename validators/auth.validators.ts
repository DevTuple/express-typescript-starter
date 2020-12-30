import Joi from 'joi';

export const LOGIN_SCHEMA = Joi.object({
  id: Joi.string()
    .email()
    .required(),
  password: Joi.string().required(),
  socketId: Joi.string(),
  loginType: Joi.string()
});

export const SIGNUP_SCHEMA = Joi.object({
  email: Joi.string()
    .email()
    .required(),

  password: Joi.string().required(),
  role: Joi.string()
});
