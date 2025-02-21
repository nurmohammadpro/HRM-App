import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import hpp from 'hpp';
import * as path from 'path';
import router from './routes/api.js';

import {MONGODB_CONNECTION, MAX_JSON_SIZE, PORT, URL_ENCODED, WEB_CACHE, EMAIL_HOST, EMAIL_PASSWORD, EMAIL_PORT, EMAIL_USER, REQUEST_LIMIT_COUNT, REQUEST_LIMIT_TIME, JWT_SECRET, JWT_EXPIRES_IN} from './app/config/config.js';

const app = express();

app.use(express.json({limit: MAX_JSON_SIZE, urlencoded: URL_ENCODED}));
app.use(cors());
app.use(cookieParser());
app.use(helmet());
app.use(hpp());
app.use(rateLimit({
    windowMs: REQUEST_LIMIT_TIME,
    max: REQUEST_LIMIT_COUNT
}));

app.set('etag', WEB_CACHE);

// MongoDB Connection
mongoose.connect(MONGODB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

// API Routes
app.use('/api', router);

// Set application storage
app.use(express.static('storage'));

// Run the backend
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});