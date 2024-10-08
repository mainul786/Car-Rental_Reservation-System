import { z } from 'zod';

const createCarValidationSchema = z.object({
  body: z.object({
    name: z.string(),
    description: z.string(),
    color: z.string(),
    isElectric: z.boolean().default(false),
    status: z.enum(['available', 'unavailable']).default('available'),
    features: z.array(z.string()).optional(),
    pricePerHour: z.number(),
    isDeleted: z.boolean().default(false),
  }),
});

const updateCarValidationSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    description: z.string().optional(),
    color: z.string().optional(),
    isElectric: z.boolean().optional(),
    status: z
      .enum(['available', 'unavailable'])
      .default('available')
      .optional(),
    features: z.array(z.string()).optional(),
    pricePerHour: z.number().positive().optional(),
    isDeleted: z.boolean().default(false).optional(),
  }),
});

export const CarValidation = {
  createCarValidationSchema,
  updateCarValidationSchema,
};
