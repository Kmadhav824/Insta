import { usersTable } from "./user.js";
import { postsTable } from "./post.js";
import { commentsTable } from "./comment.js";
import { followsTable } from "./follow.js";
import { likesTable } from "./like.js";

export const db = {
    users: usersTable,
    posts: postsTable,
    comments: commentsTable,
    follows: followsTable,
    likes: likesTable,
};