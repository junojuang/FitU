import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import geminiRoute from "./routes/geminiRoute.js";
import recipeRoutes from "./routes/recipeRoute.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("✅ FitU Backend is running successfully!")
});

app.use("/api/gemini", geminiRoute);
app.use("/api/recipes", recipeRoutes);

const PORT = process.env.PORT || 3000;

// Export for Vercel serverless
export default app;

// Only start server if not in serverless environment
if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}