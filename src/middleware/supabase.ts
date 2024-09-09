import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY; // Use your Supabase key
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
