import React, { useEffect, useState } from 'react';
import { testConnection } from '../utils/supabaseClient';

interface ConnectionState {
  isLoading: boolean;
  isConnected: boolean;
  error: string | null;
  data: any;
}

export default function SupabaseConnectionTest() {
  const [connectionState, setConnectionState] = useState<ConnectionState>({
    isLoading: true,
    isConnected: false,
    error: null,
    data: null
  });

  useEffect(() => {
    const checkConnection = async () => {
      try {
        const result = await testConnection();
        
        setConnectionState({
          isLoading: false,
          isConnected: result.connected,
          error: result.connected ? null : (result.error || 'Koneksi gagal'),
          data: result.data
        });
      } catch (error) {
        setConnectionState({
          isLoading: false,
          isConnected: false,
          error: error instanceof Error ? error.message : 'Terjadi kesalahan saat memeriksa koneksi',
          data: null
        });
      }
    };

    checkConnection();
  }, []);

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden my-8">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Status Koneksi Supabase</h2>
      
      {connectionState.isLoading ? (
        <div className="flex items-center justify-center py-4">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          <span className="ml-2 text-gray-600">Memeriksa koneksi...</span>
        </div>
      ) : connectionState.isConnected ? (
        <div className="bg-green-50 p-4 rounded-lg">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-green-800">Koneksi Berhasil</h3>
              <div className="mt-2 text-sm text-green-700">
                <p>MCP berhasil terhubung dengan Supabase.</p>
              </div>
              {connectionState.data && (
                <div className="mt-2">
                  <pre className="text-xs bg-gray-100 p-2 rounded overflow-auto">
                    {JSON.stringify(connectionState.data, null, 2)}
                  </pre>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-red-50 p-4 rounded-lg">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-red-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-red-800">Koneksi Gagal</h3>
              <div className="mt-2 text-sm text-red-700">
                <p>{connectionState.error || 'Tidak dapat terhubung ke Supabase'}</p>
              </div>
              <div className="mt-4">
                <div className="text-sm">
                  <p className="font-medium text-red-800">Kemungkinan penyebab:</p>
                  <ul className="list-disc pl-5 space-y-1 mt-2 text-red-700">
                    <li>Kredensial Supabase tidak valid</li>
                    <li>URL Supabase tidak dapat dijangkau</li>
                    <li>Tabel 'test' tidak ada di database</li>
                    <li>Masalah jaringan</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}