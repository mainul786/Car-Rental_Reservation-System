import { isConstructorDeclaration } from 'typescript';
import { TUser } from './User.interface';
import { User } from './User.model';

const createUser = async (payload: TUser) => {
  const { role } = payload;
  console.log(payload.role);
  if (role !== 'user' && role !== 'admin') {
    throw new Error('You are not authenticate person');
  }

  const result = User.create(payload);
  return result;
};

export const UserServices = {
  createUser,
};
