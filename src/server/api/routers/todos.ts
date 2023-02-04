import { idSchema } from '@/utils/schemas/generic'
import { todo, updateTodo } from '@/utils/schemas/todos'

import { createTRPCRouter, protectedProcedure } from '../trpc'

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
    .input(updateTodo)
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
    .input(idSchema)
    .mutation(async ({ ctx, input }) => {
      console.log('trying to delete')
      await ctx.prisma.todo.delete({
        where: {
          id: input.id
        }
      })
    })
})
