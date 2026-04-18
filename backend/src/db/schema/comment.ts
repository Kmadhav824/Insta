import { pgTable, varchar, text } from "drizzle-orm/pg-core";
import { usersTable } from "./user.js";
import { postsTable } from "./post.js";
export const commentsTable = pgTable("comments", {
    id: varchar({ length: 255 }).primaryKey(),
    content: text().notNull(),
    userId: varchar({ length: 255 }).notNull().references(() => usersTable.id),
    postId: varchar({ length: 255 }).notNull().references(() => postsTable.id),
});