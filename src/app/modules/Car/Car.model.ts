import { model, Schema } from 'mongoose';
import { TCar, TCarFeatures } from './Car.interface';

const feature = ['Bluetooth', 'AC', 'Sunroof'];

const carSchema = new Schema<TCar>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  color: { type: String, required: true },
  isElectric: { type: Boolean, required: true },
  status: { type: String, required: true, default: 'available' },
  features: { type: [feature], required: true },
  pricePerHour: {
    type: Number,
    required: true,
  },
  isDeleted: {
    type: Boolean,
    required: true,
    default: false,
  },
});

export const Car = model<TCar>('Car', carSchema);
