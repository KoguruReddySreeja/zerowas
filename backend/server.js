import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';  // CORS middleware for cross-origin requests
import adminRoutes from './routes/adminRoutes.js';  // Admin routes for the application

dotenv.config();  // Load environment variables

const app = express();

// Middleware
app.use(express.json());  // Parse incoming JSON data
app.use(cors());  // Enable CORS (to allow cross-origin requests)

// Routes
app.use('/api/admin', adminRoutes);  // Add admin routes under '/api/admin'

// Database connection
const dbURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/zerowaste';  // MongoDB URI (from env or default)

mongoose.connect(dbURI)
  .then(() => console.log('MongoDB connected successfully'))
  .catch((err) => console.log('MongoDB connection error:', err));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
