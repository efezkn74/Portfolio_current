import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('SUPABASE_URL und/oder SUPABASE_ANON_KEY fehlen in der .env-Datei!');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
