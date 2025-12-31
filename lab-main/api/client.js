import axios from 'axios';

// Expo automatically exposes env vars prefixed with EXPO_PUBLIC_ to the app.
const API_BASE_URL = process.env.EXPO_PUBLIC_API_BASE_URL;

export const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000, // 10s timeout to surface stalled connections
});

// Global response interceptor for consistent error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (!error.response) {
      throw new Error('Ağ hatası. Bağlantınızı kontrol edin.');
    }

    if (error.response.status === 404) {
      throw new Error('Kaynak bulunamadı');
    }

    if (error.response.status >= 500) {
      throw new Error('Sunucu hatası. Lütfen daha sonra tekrar deneyin.');
    }

    throw error;
  }
);

