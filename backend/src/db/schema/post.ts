import { integer, pgTable, varchar } from "drizzle-orm/pg-core";
import { usersTable } from "./user.js";

export const postsTable = pgTable("posts", {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    title: varchar({ length: 255 }).notNull(),
    content: varchar({ length: 255 }).notNull(),
    userId: integer().notNull().references(() => usersTable.id),
});
