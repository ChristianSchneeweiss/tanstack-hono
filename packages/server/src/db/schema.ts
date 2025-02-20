import { pgTable, text } from "drizzle-orm/pg-core";

export const TB_user = pgTable("user", {
  id: text("id").primaryKey(),
  email: text("email").notNull(),
});
