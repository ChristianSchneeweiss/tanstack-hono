import { createClient } from "@supabase/supabase-js";

const key = process.env.SUPABASE_KEY;

export const supabase = createClient(process.env.SUPABASE_URL!, key!);
