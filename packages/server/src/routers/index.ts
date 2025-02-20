import { router, publicProcedure, protectedProcedure } from "../lib/trpc";
import { z } from "zod";

export const appRouter = router({
  healthCheck: publicProcedure.query(() => {
    return "OK";
  }),
  protected: protectedProcedure.query(({ ctx }) => {
    return ctx.session;
  }),
});

export type AppRouter = typeof appRouter;
