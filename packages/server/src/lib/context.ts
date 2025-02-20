import { supabase } from "../supabase";

export async function createContext({ req }: { req: Request }) {
  const bearerToken = req.headers.get("authorization")?.split("Bearer ").pop();
  if (!bearerToken) {
    return {
      session: null,
    };
  }

  const user = await supabase.auth.getUser(bearerToken);
  return {
    session: user.data.user,
  };
}

export type Context = Awaited<ReturnType<typeof createContext>>;
