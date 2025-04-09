import express from "express";
import { redirectToGoogle, handleGoogleCallback } from "../controllers/auth";
const router = express.Router();


router.get('/google', redirectToGoogle)
router.get('/callback', handleGoogleCallback)

export default router;