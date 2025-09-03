import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Supabase URL and Anon Key must be provided!');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Function to test connection
export const testConnection = async () => {
  try {
    // Coba koneksi ke Supabase dengan query sederhana
    const { data, error } = await supabase.rpc('version');
    
    if (error) {
      // Jika RPC tidak tersedia, coba query lain
      const { data: pingData, error: pingError } = await supabase
        .from('_dummy_query')
        .select('*')
        .limit(1)
        .catch(() => ({
          data: null,
          error: null
        }));
      
      // Jika masih error, coba cek koneksi saja
      if (pingError) {
        const { data: authData, error: authError } = await supabase.auth.getSession();
        
        if (authError) {
          return {
            connected: false,
            error: authError.message
          };
        }
        
        return {
          connected: true,
          data: { message: 'Koneksi berhasil, tetapi tidak dapat mengakses tabel' }
        };
      }
    }
    
    return {
      connected: true,
      data: data || { message: 'Koneksi berhasil' }
    };
  } catch (error) {
    return {
      connected: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    };
  }
};