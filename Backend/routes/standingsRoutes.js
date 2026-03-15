import express from "express";
import { getStandings } from "../controllers/standingsController.js";

const router = express.Router();

router.get("/:contestId", getStandings);

export default router;