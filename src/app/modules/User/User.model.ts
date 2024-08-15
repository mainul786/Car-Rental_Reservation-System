import mongoose from 'mongoose';
import { Schema, model } from 'mongoose';
import { TUser } from './User.interface';
import bcrypt from 'bcrypt';
import config from '../../config';

const userSchema = new Schema<TUser>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});

userSchema.pre('save', async function (next) {
  const user = this;
  user.password = await bcrypt.hash(
    user?.password,
    Number(config.bcrypt_salt_rounds),
  );
  next();
});

userSchema.post('save', async function (doc, next) {
  doc.password = ' ';
  next();
});

export const User = model<TUser>('User', userSchema);
