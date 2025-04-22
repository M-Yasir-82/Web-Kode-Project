
import { createClient } from '@supabase/supabase-js';

// Provide fallback values if environment variables are not set
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://your-project.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'your-anon-key';

// Check if we're using the fallback values
if (supabaseUrl === 'https://your-project.supabase.co' || supabaseAnonKey === 'your-anon-key') {
  console.warn('Using fallback Supabase credentials. Google authentication will not work until you set the correct Supabase URL and anonymous key.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
