// Environment Variables
import dotenv from 'dotenv';
dotenv.config();

// Core Modules
import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';

// Local Modules
import connectDB  from './config/db';
import baseRouter from './routers/baseRouter';
import { errorHandler } from './middlewares/errorHandler';

const app = express();
const PORT = process.env.PORT || 3000;

// Initialize Database
connectDB();

// Global Middlewares
app.use(cors());
app.use(express.json());

// Application Routes
app.use('/', baseRouter);


app.use((req: Request, res: Response, _next: NextFunction) => {
    res.status(404).json({
        success: false,
        message: "404 - Not found."
    });
});

// Global Error Handler
app.use(errorHandler);


app.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`✅ Server is listening on port: ${PORT}`);
});
