import { z } from 'zod'

export const todo = z.object({
  group: z.string().min(1, { message: 'Group is required' }),
  description: z
    .string()
    .min(1, { message: 'Name is required' })
    .max(50, { message: 'Description should be less than 50 characters' }),
  status: z.string().min(1, { message: 'Status is required' }),
  title: z.string().min(1, { message: 'Title is required' })
})

export const updateTodo = z.object({
  id: z.string().min(1),
  group: z.string().optional(),
  description: z.string().min(1).max(50).optional(),
  status: z.string().min(1).optional(),
  title: z.string().min(1).optional()
})
