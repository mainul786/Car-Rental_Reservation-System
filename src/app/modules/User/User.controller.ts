import catchAsync from '../../utils/catchAsync';
import { UserServices } from './User.services';
import responseSend from '../../utils/responseSend';
import httpStatus from 'http-status';

const userCreate = catchAsync(async (req, res) => {
  const result = await UserServices.createUser(req.body);
  responseSend(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User created succefully',
    data: result,
  });
});

export const UserControllers = {
  userCreate,
};
