import { seedUsers } from "./user.seed.js";
import { seedPosts } from "./post.seed.js";

async function runSeed() {
  await seedUsers();
  await seedPosts();
}

runSeed();