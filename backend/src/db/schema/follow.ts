import { integer, pgTable, timestamp, primaryKey, index } from "drizzle-orm/pg-core";
import { usersTable } from "./user.js";

export const followsTable = pgTable(
  "follows",
  {
    followerId: integer("follower_id")
      .notNull()
      .references(() => usersTable.id, { onDelete: "cascade" }),

    followingId: integer("following_id")
      .notNull()
      .references(() => usersTable.id, { onDelete: "cascade" }),

    createdAt: timestamp("created_at").defaultNow(),
  },
  (table) => ({
    pk: primaryKey({
      columns: [table.followerId, table.followingId],
    }),

    followerIdx: index("follower_idx").on(table.followerId),
    followingIdx: index("following_idx").on(table.followingId),
  })
);