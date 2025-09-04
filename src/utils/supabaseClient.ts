import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Supabase URL and Anon Key must be provided!");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Function to test connection
export const getProducts = async () => {
  const { data, error } = await supabase.from("products").select("*");
  if (error) {
    console.error("Error fetching products:", error);
    return [];
  }
  return data;
};
