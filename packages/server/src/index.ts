import * as trpcExpress from "@trpc/server/adapters/express";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { logger } from "hono/logger";
import { createContext } from "./lib/context";
import { appRouter } from "./routers/index";
import { trpcServer } from "@hono/trpc-server";

type Bindings = {
  FOO: string;
};

const app = new Hono<{
  Bindings: Bindings;
}>();

app.use(logger());

app.use("/*", cors());

app.use(
  "/trpc/*",
  trpcServer({
    router: appRouter,
    createContext,
  })
);

app.get("/healthCheck", (c) => {
  return c.text("OK");
});

export default app;
