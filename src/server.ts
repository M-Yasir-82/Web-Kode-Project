
import express from 'express';
import cors from 'cors';
import { authenticateJWT, authorize } from './middleware/auth';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Public routes
app.get('/api/public', (req, res) => {
  res.json({ message: 'This is a public endpoint' });
});

// Protected routes with JWT authentication
app.use('/api/protected', authenticateJWT);

// Developer-only routes
app.get('/api/protected/developer', authenticateJWT, authorize(['developer', 'admin']), (req, res) => {
  res.json({ message: 'This is a developer-only endpoint', user: req.user });
});

// Admin-only routes
app.get('/api/protected/admin', authenticateJWT, authorize(['admin']), (req, res) => {
  res.json({ message: 'This is an admin-only endpoint', user: req.user });
});

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;
