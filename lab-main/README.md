# Profiller Dizini Uygulaması (Expo)

- Öğrenci: muhammed hazem kabbanı  
- Öğrenci No: 220404931  
- Tarih: 2025-12-15

## Önkoşullar
- Node.js ve npm
- Expo Go yüklü mobil cihaz
- Yerel Express API (ProfilesServer) çalışır durumda

## Kurulum
1) Sunucuyu hazırlayın  
```bash
cd ProfilesServer
npm install
node server.js
# Beklenen: Server running on http://localhost:3000
```
2) IP adresinizi bulun (telefonla aynı Wi‑Fi’da) ve API için kullanın.  
   Örnek: `192.168.1.100`
3) Mobil cihazdan test edin: `http://<IP_ADRESI>:3000/profiles?page=1&limit=5`

## Projeyi Çalıştırma
```bash
cd ProfilesApp
npm install   # ilk kurulumda gerekebilir
```
`.env` dosyasında kendi IP’nizi belirtin:
```
EXPO_PUBLIC_API_BASE_URL=http://<IP_ADRESI>:3000
```
Örnek `.env.example` sağlanmıştır.

Uygulamayı başlatın:
```bash
npx expo start
```
QR kodu Expo Go ile okutun.

## Özellikler
- Stack navigasyon ile profil listesi ve detay ekranı
- Sayfalama (FlatList onEndReached)
- Profil detayında dinamik API çağrısı
- Hata mesajları, tekrar dene butonu
- Pull-to-refresh ve boş durum gösterimi
- 10 sn zaman aşımı ve global Axios interceptor

