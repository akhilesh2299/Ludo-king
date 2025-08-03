import express from "express";
import { rollDiceAndGetPositions } from "../controllers/game";

const router = express.Router();

router.get('/roll', rollDiceAndGetPositions)



export default router