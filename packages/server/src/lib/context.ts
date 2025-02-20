export async function createContext() {
  // const session = await auth.api.getSession({
  //   headers: hono.req.raw.headers,
  // });
  // return {
  //   session,
  // };
  return {
    session: null,
  };
}

export type Context = Awaited<ReturnType<typeof createContext>>;
