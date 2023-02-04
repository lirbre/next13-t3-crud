import { z } from 'zod'

import { createTRPCRouter, protectedProcedure } from '../trpc'

export const todo = z.object({
  group: z.string().min(1, { message: 'Group is required' }),
  description: z
    .string()
    .min(1, { message: 'Name is required' })
    .max(50, { message: 'Name should be less than 50 characters' }),
  status: z.string().min(1, { message: 'Status is required' }),
  title: z.string().min(1, { message: 'Title is required' })
})

export const todosRouter = createTRPCRouter({
  getAll: protectedProcedure.query(({ ctx }) => {
    return ctx.prisma.todo.findMany()
  }),
  addTodo: protectedProcedure.input(todo).mutation(async ({ ctx, input }) => {
    console.log('trying to mutate')
    await ctx.prisma.todo.create({
      data: {
        date: new Date(),
        group: input.group,
        description: input.description,
        status: input.status,
        title: input.title
      }
    })
  }),
  updateTodo: protectedProcedure
    .input(
      z.object({
        id: z.string().min(1),
        group: z.string().optional(),
        description: z.string().min(1).max(50).optional(),
        status: z.string().min(1).optional(),
        title: z.string().min(1).optional()
      })
    )
    .mutation(async ({ ctx, input }) => {
      console.log('trying to edit')
      await ctx.prisma.todo.update({
        where: {
          id: input.id
        },
        data: {
          date: new Date(),
          group: input.group,
          description: input.description,
          status: input.status,
          title: input.title
        }
      })
    }),
  deleteTodo: protectedProcedure
    .input(
      z.object({
        id: z.string().min(1)
      })
    )
    .mutation(async ({ ctx, input }) => {
      console.log('trying to delete')
      await ctx.prisma.todo.delete({
        where: {
          id: input.id
        }
      })
    })
})
