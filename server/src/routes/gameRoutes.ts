import express from "express";
import { rollDice } from "../controllers/game";

const router = express.Router();

router.get('/roll', rollDice)



export default router