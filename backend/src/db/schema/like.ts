import { integer, pgTable } from "drizzle-orm/pg-core";
import { postsTable } from "./post.js";
import { usersTable } from "./user.js";

export const likesTable = pgTable("likes", {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    userId: integer().notNull().references(() => usersTable.id),
    postId: integer().notNull().references(() => postsTable.id),
});