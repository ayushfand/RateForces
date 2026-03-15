import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import contestRoutes from "./routes/contestRoutes.js";
import standingsRoutes from "./routes/standingsRoutes.js";



const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "RateForces Backend Running 🚀" });
});

app.use("/api/contests", contestRoutes);
app.use("/api/contest", standingsRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});