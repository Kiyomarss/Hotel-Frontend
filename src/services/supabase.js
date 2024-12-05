import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://wwpigvfgdpszmrkkeyhr.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind3cGlndmZnZHBzem1ya2tleWhyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzEzNDkwMzEsImV4cCI6MjA0NjkyNTAzMX0.7PbAL9gpfIUiVo2sL8Vu5kMzBthab2lA_-ZGdj4zIhk";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
