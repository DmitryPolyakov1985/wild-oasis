import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://dxjqhwiiaunfecmlzgvd.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR4anFod2lpYXVuZmVjbWx6Z3ZkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY0MTUwNjQsImV4cCI6MjA2MTk5MTA2NH0.6mkwNgOnUywaNEq0i323chHMIiAO3qQKHQhN2xnin34";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
