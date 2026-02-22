import { Request, Response, NextFunction } from 'express';

interface CustomError extends Error {
    statusCode?: number;
}

// Global Error Handler Middleware
export const errorHandler = (err: CustomError, req: Request, res: Response, _next: NextFunction) => {
    
    // Default error values
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal server error.";

  
    res.status(statusCode).json({
        success: false,
        message: message,
        // Hide stack trace in production
        stack: process.env.NODE_ENV === 'production' ? undefined : err.stack
    });
};