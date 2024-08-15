import { TCar } from './Car.interface';
import { Car } from './Car.model';

const createCarIntoDb = async (payload: TCar) => {
  const result = await Car.create(payload);
  return result;
};

const getAllCarFromDb = async () => {
  const result = await Car.find();
  return result;
};

const getSingleCarFromDb = async (id: string) => {
  const result = await Car.findById({ _id: id });
  return result;
};

export const CarServices = {
  createCarIntoDb,
  getAllCarFromDb,
  getSingleCarFromDb,
};
