
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://zctpkaykssixfohmzokq.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpjdHBrYXlrc3NpeGZvaG16b2txIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM4MjE5MDQsImV4cCI6MjAyOTM5NzkwNH0.EpXC8A5OqRGtAZVxLvGmj9_t1U4OZgMKVY04i5i3_U0';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    storageKey: 'finconnect-auth',
  },
  global: {
    fetch: (url: RequestInfo | URL, options?: RequestInit) => {
      return fetch(url, options).catch(err => {
        console.error('Supabase request failed:', err);
        throw err;
      });
    }
  }
});

export const signInWithGoogle = async () => {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      queryParams: {
        access_type: 'offline',
        prompt: 'consent',
      },
    },
  });
  
  if (error) throw error;
};

export default supabase;
