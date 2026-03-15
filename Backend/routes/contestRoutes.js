import express from "express";
import { getContests } from "../controllers/contestController.js";

const router = express.Router();

router.get("/", getContests);

export default router;