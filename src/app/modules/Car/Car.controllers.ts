import httpStatus, { OK } from 'http-status';
import catchAsync from '../../utils/catchAsync';
import responseSend from '../../utils/responseSend';
import { CarServices } from './Car.services';

const createCar = catchAsync(async (req, res) => {
  console.log(req.body);
  const result = await CarServices.createCarIntoDb(req.body);
  responseSend(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Car created Succefully',
    data: result,
  });
});

const getAllCar = catchAsync(async (req, res) => {
  const result = await CarServices.getAllCarFromDb();
  responseSend(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'All car Retrived Successfully',
    data: result,
  });
});

const getSingleCar = catchAsync(async (req, res) => {
  const { carId } = req.params;
  const result = await CarServices.getSingleCarFromDb(carId);
  responseSend(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Single Car Retrived',
    data: result,
  });
});

export const CarControllers = {
  createCar,
  getAllCar,
  getSingleCar,
};
