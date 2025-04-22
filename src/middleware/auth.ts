
import { NextFunction, Request, Response } from 'express';
import { supabase } from '@/lib/supabase';

// Extend the Request type to include user
declare global {
  namespace Express {
    interface Request {
      user?: {
        id: string;
        role: string;
        email: string;
      };
    }
  }
}

// Middleware to validate JWT token
export const authenticateJWT = async (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  
  if (!authHeader) {
    return res.status(401).json({ message: 'Missing authorization header' });
  }
  
  // Get the token from the Authorization header
  const token = authHeader.split(' ')[1];
  
  if (!token) {
    return res.status(401).json({ message: 'Missing token' });
  }
  
  try {
    // Verify the token with Supabase
    const { data, error } = await supabase.auth.getUser(token);
    
    if (error || !data.user) {
      return res.status(401).json({ message: 'Invalid or expired token' });
    }
    
    // Extract user info from the token
    req.user = {
      id: data.user.id,
      email: data.user.email || '',
      role: data.user.user_metadata?.role || 'developer', // Default to developer if no role
    };
    
    next();
  } catch (error) {
    console.error('JWT validation error:', error);
    return res.status(401).json({ message: 'Invalid token' });
  }
};

// Middleware to check if user has required role
export const authorize = (roles: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!req.user) {
      return res.status(401).json({ message: 'User not authenticated' });
    }
    
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ message: 'Forbidden: Insufficient permissions' });
    }
    
    next();
  };
};
