import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import { eq } from 'drizzle-orm';
import { usersTable } from '../schema/user.js';
import { postsTable } from '../schema/post.js';

const db = drizzle(process.env.DATABASE_URL!);

export async function seedPosts() {
    const post: typeof postsTable.$inferInsert = {
        title: 'My First Post',
        content: 'This is the content of my first post.',
        userId: 1, // Assuming a user with ID 1 exists
    };

    await db.insert(postsTable).values(post);
    console.log('New post created!')

    const posts = await db.select().from(postsTable);
    console.log('Getting all posts from the database: ', posts)
    /*
    {
        us
    };
    console.log('Getting all users from the database: ', users)
    /*
    const users: {
      id: number;
      name: string;
      age: number;
      email: string;
    }[]
    */

    await db
        .update(postsTable)
        .set({
            title: 'Updated Post Title',
            content: 'Updated post content.',
        })
        .where(eq(postsTable.id, 1));
    console.log('Post info updated!')

    await db.delete(postsTable).where(eq(postsTable.id, 1));
    console.log('Post deleted!')
}

// export default main();
