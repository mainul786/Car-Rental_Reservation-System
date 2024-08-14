import { z } from 'zod';

const featureSchema = z.enum(['Bluetooth', 'AC', 'Sunroof']);

const createCarValidationSchema = z.object({
  name: z.string(),
  description: z.string(),
  color: z.string(),
  isElectric: z.boolean(),
  status: z.string().optional().default('available'),
  features: z.array(featureSchema),
  pricePerHour: z.number().positive(),
  isDeleted: z.boolean().default(false),
});

const updateCarValidationSchema = z.object({
  name: z.string().optional(),
  description: z.string().optional(),
  color: z.string().optional(),
  isElectric: z.boolean().optional(),
  status: z.string().optional().default('available'),
  features: z.array(featureSchema).optional(),
  pricePerHour: z.number().positive().optional(),
  isDeleted: z.boolean().default(false).optional(),
});

export const CarValidation = {
  createCarValidationSchema,
  updateCarValidationSchema,
};
