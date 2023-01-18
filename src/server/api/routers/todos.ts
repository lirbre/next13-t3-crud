import { z } from 'zod'

import { createTRPCRouter, protectedProcedure, publicProcedure } from '../trpc'

export const todosRouter = createTRPCRouter({
  getAll: protectedProcedure.query(({ ctx }) => {
    return ctx.prisma.todo.findMany()
  }),
  addTodo: protectedProcedure
    // to impletment usage of "input"
    .mutation(async ({ ctx }) => {
      console.log('trying to mutate')
      await ctx.prisma.todo.create({
        data: {
          date: new Date(),
          group: '1',
          name: 'My todo name',
          status: 'Done',
          title: 'Todo Title'
        }
      })
    }),
  updateTodo: protectedProcedure.query(() => {
    return 'to implement'
  }),
  deleteTodo: protectedProcedure.query(() => {
    return 'to implement'
  })
})
