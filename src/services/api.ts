import { toast } from 'sonner';
import { AppUser, LoginCredentials, RegisterCredentials } from '../types/auth';

const mockUsers: AppUser[] = [
  {
    id: '1',
    email: 'admin@finconnect.com',
    name: 'Admin User',
    role: 'admin',
    isSubscribed: true,
    subscriptionTier: 'Enterprise',
    subscriptionEnd: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString()
  },
  {
    id: '2',
    email: 'dev@finconnect.com',
    name: 'Developer User',
    role: 'developer',
    isSubscribed: false
  }
];

// Mock token generator
const generateToken = (user: AppUser): string => {
  return `mock-jwt-token-${user.id}-${user.role}`;
}

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const api = {
  async login(credentials: LoginCredentials): Promise<{ user: AppUser, token: string }> {
    // Simulate API delay
    await delay(1000);

    const user = mockUsers.find(u => u.email === credentials.email);
    
    if (!user) {
      throw new Error('Invalid credentials');
    }
    
    // In a real app, we would validate the password here
    // For demo purposes, any password works
    
    const token = generateToken(user);
    return { user, token };
  },
  
  async register(credentials: RegisterCredentials): Promise<{ user: AppUser, token: string }> {
    // Simulate API delay
    await delay(1000);
    
    // Check if user already exists
    if (mockUsers.some(u => u.email === credentials.email)) {
      throw new Error('User already exists');
    }
    
    // Create new user
    const newUser: AppUser = {
      id: String(mockUsers.length + 1),
      email: credentials.email,
      name: credentials.name,
      role: credentials.role,
      isSubscribed: false
    };
    
    // In a real app, we would save the user to the database
    mockUsers.push(newUser);
    
    const token = generateToken(newUser);
    return { user: newUser, token };
  },
  
  async getCurrentUser(token: string): Promise<AppUser> {
    // Simulate API delay
    await delay(500);
    
    // Extract user ID from token
    const matches = token.match(/mock-jwt-token-(\d+)/);
    if (!matches) {
      throw new Error('Invalid token');
    }
    
    const userId = matches[1];
    const user = mockUsers.find(u => u.id === userId);
    
    if (!user) {
      throw new Error('User not found');
    }
    
    return user;
  },
  
  async subscribeUser(userId: string, tier: string): Promise<AppUser> {
    // Simulate API delay
    await delay(1000);
    
    const userIndex = mockUsers.findIndex(u => u.id === userId);
    if (userIndex === -1) {
      throw new Error('User not found');
    }
    
    // Update user subscription
    const user = { ...mockUsers[userIndex] };
    user.isSubscribed = true;
    user.subscriptionTier = tier;
    user.subscriptionEnd = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString();
    
    // Update in mock DB
    mockUsers[userIndex] = user;
    
    toast.success(`Successfully subscribed to ${tier} plan!`);
    return user;
  }
};
