import { model, Schema } from 'mongoose';
import { TCar } from './Car.interface';

const carSchema = new Schema<TCar>(
  {
    name: {
      type: String,
    },
    description: {
      type: String,
    },
    color: {
      type: String,
    },
    isElectric: {
      type: Boolean,
      default: false,
    },
    status: {
      type: String,
      enum: ['available', 'unavailable'],
      default: 'available',
    },
    features: [{ type: String }],
    pricePerHour: {
      type: Number,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

export const Car = model<TCar>('Car', carSchema);
