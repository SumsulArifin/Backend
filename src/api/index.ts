 // adjust path based on your structure
import mongoose from "mongoose";
import app from "../app";
import { envVars } from "../app/config/env";
import { connectRedis } from "../app/config/redis.config";
import { seedSuperAdmin } from "../app/utils/seedSuperAdmin";


// Ensure DB and Redis only connect once (cache across invocations)
let isInitialized = false;
export default async function handler(req: any, res: any) {
  if (!isInitialized) {
    await mongoose.connect(envVars.DB_URL);
    await connectRedis();
    await seedSuperAdmin();
    isInitialized = true;
    console.log("✅ Vercel init complete");
  }
app(req, res); // 👈 Pass req/res to Express
}