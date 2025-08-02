import express from 'express';
import http from 'http';
import cors from 'cors';
import dotenv from 'dotenv';
import { auth, OpenidRequest, OpenidResponse, requiresAuth, Session } from 'express-openid-connect';

import authRoutes from '../src/routes/authRoutes';
import gameRoutes from "../src/routes/gameRoutes";

// Load environment variables
dotenv.config();

const app = express();
const server = http.createServer(app);

// === Auth0 Config ===
const config = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.AUTH0_SECRET!,
  baseURL: process.env.BACKEND_URL!,
  clientID: process.env.CLIENT_ID!,
  issuerBaseURL: process.env.ISSUER_BASE_URL!,
  afterCallback: (
    req: OpenidRequest,
    res: OpenidResponse,
    session: Session,
    decodedState: Record<string, any>
  ): Session => {
    // Optional: store some info in session
    // session.userType = 'player';

    return session;
  },
   routes: {
    postLogoutRedirect: process.env.FRONTEND_URL,
  }
};

// === Middleware ===
app.use(cors({ origin: process.env.FRONTEND_URL, credentials: true }));
app.use(express.json());
app.use(auth(config));

// === Routes ===
app.use("/api/auth", authRoutes);
app.use("/api/game", gameRoutes);

// Public route to test auth
app.get('/', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? '✅ Logged in' : '❌ Logged out');
});

// Protected route
app.get('/profile', requiresAuth(), (req, res) => {
  res.json(req.oidc.user);
});

// Basic test endpoint
app.get('/api', (_, res) => {
  res.send('Ludo backend running!');
});

// === Start Server ===
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
