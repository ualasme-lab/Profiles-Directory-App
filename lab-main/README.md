# 📱 Gelişmiş Profiller Dizini Uygulaması (Expo & Node.js)

Bu proje, istemci-sunucu (Client-Server) mimarisine dayalı, gerçek zamanlı veri iletişimi kuran ve modern mobil kullanıcı deneyimi (UX) prensiplerini uygulayan bir rehber uygulamasıdır.

---

## 👤 Proje Kimlik Bilgileri
- **Hazırlayan:** Qusai Alqwasmi
- **Öğrenci Numarası:** 220404921
- **Tarih:** 31.12.2025
- **Platform:** React Native (Expo) & Express.js

---

## 🛠️ Teknik Altyapı ve Kabiliyetler

Uygulama, hem performans hem de kullanıcı etkileşimi açısından aşağıdaki teknik özellikleri barındırmaktadır:

### 1. Veri Yönetimi ve Sayfalama (Pagination)
Uygulama, tüm veriyi bir kerede yüklemek yerine sunucu tabanlı sayfalama yapar. 
* **Sonsuz Kaydırma:** `FlatList` bileşeninin `onEndReached` özelliği kullanılarak, kullanıcı listenin sonuna yaklaştığında bir sonraki sayfa API'den otomatik olarak talep edilir.
* **Bellek Yönetimi:** Bu sayede mobil cihazın belleği (RAM) optimize edilir ve uygulama hızı korunur.

### 2. Ağ İletişimi ve Güvenlik
Veri alışverişi için **Axios** kütüphanesi özelleştirilerek kullanılmıştır:
* **Global Interceptor:** Tüm isteklere (request) ve yanıtlara (response) müdahale eden bir katman eklenmiştir.
* **Timeout (Zaman Aşımı):** Ağın yavaş olduğu durumlarda uygulamanın sonsuza kadar beklememesi için **10 saniyelik** bir limit belirlenmiştir.
* **Hata Yakalama:** 404, 500 gibi sunucu hataları veya internet kesintileri yakalanarak kullanıcıya dostane uyarılar gösterilir.

### 3. Kullanıcı Arayüzü (UI) ve Deneyimi (UX)
* **Stack Navigation:** Kullanıcılar bir profile tıkladığında, ilgili profilin detaylarına pürüzsüz bir animasyonla geçer.
* **Pull-to-Refresh:** Listenin en başındayken aşağı kaydırma hareketiyle veriler güncellenir.
* **Empty & Error States:** Veri bulunamadığında veya bağlantı koptuğunda "Tekrar Dene" butonu içeren özel arayüzler sunulur.

---

## 🚀 Kurulum ve Yapılandırma

### Bölüm 1: Arka Uç (Backend - ProfilesServer)
Sunucu, Express.js framework'ü ile oluşturulmuş bir REST API'dir.

```bash
cd ProfilesServer
npm install
node server.js
