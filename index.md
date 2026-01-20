---
title: Home
layout: home
nav_order: 1
---

![]({{ site.baseurl }}/assets/images/fx-sweet1.png)

> Device: **Redmi Note 10 Pro**  
> Codename: `sweet` 
> 
> Device   : **Redmi Note 10 Pro Max**  
> Codename : `sweetin`  
> Region   : India
>

---

{: .warning }
> _I am not responsible for anything happened to your device do at your own risk!_
>
> Saya tidak bertanggung jawab atas apapun yang terjadi pada perangkat Anda, lakukan dengan risiko Anda sendiri!


Beberapa panduan di sini mungkin terlihat sederhana, tetapi sebenarnya melibatkan perubahan besar pada sistem, seperti membuka kunci bootloader, memasang recovery kustom, flashing ROM, atau melakukan root.  

Semua proses ini aman jika dilakukan dengan benar, namun tetap memiliki risiko yang penting untuk kamu ketahui.

 **Hal-hal penting sebelum mulai:**

- **Bootloop / perangkat tidak bisa masuk sistem:**  
Jika salah memilih file atau langkahnya tidak tepat, hp bisa stuck di logo atau tidak bisa masuk sistem.

- **TEE Broken (Trusted Execution Environment):**  
Kesalahan flashing bisa merusak modul keamanan bawaan hp. Dampaknya bisa berupa:  
    - Widevine turun ke L3 (kualitas streaming jadi lebih rendah)  
    - Play Integrity gagal (beberapa aplikasi menganggap perangkat tidak aman)  
    - Sensor sidik jari atau Face Unlock jadi tidak stabil  
    - Sangat berbahaya untuk melakukan *relock* bootloader

- **Privasi & aplikasi perbankan:**  
Perubahan pada sistem seperti root, custom ROM, atau TEE yang rusak dapat membuat aplikasi seperti:  
   - Mobile banking  
   - E-wallet (Dana, OVO, Gopay, ShopeePay)  
   - Aplikasi kantor/kerja yang memakai keamanan tinggi  
   mendeteksi perangkat sebagai "tidak aman" dan menolak untuk dibuka.

 - **Keamanan data pribadi:**  
   Memodifikasi sistem bisa membuka potensi celah keamanan. Pastikan file yang digunakan berasal dari sumber terpercaya.  
   Jika salah flashing, perangkat bisa masuk kondisi yang membuat data personal tidak bisa dipulihkan.

 - **Relock Bootloader:**  
   Jangan mengunci kembali bootloader jika perangkat tidak benar-benar *stock*. Ini bisa menyebabkan kerusakan permanen.

 - **Backup itu wajib:**  
   Banyak proses akan menghapus data internal. Cadangkan semua data penting sebelum mulai.

 Panduan ini dibuat agar kamu bisa melakukan semuanya dengan aman.  
 Baca langkah-langkah dengan teliti, gunakan file yang tepat untuk *Redmi Note 10 Pro (sweet/sweetin)*, dan jangan terburu-buru.  

 ---

### Table of contents

- [Device Info]({{ site.baseurl }}/2-device-info/index.html)
- [Tools]({{ site.baseurl }}/3-tools/index.html)
- [Bootloader]({{ site.baseurl }}/docs/4-bootloader/)
- [ROM]({{ site.baseurl }}/docs/5-rom/)
  - [MIUI](docs/5-rom/MIUI/index.html)
  - [Custom ROM](docs/5-rom/CustomROM/index.html)
- [GApps]({{ site.baseurl }}/docs/6-gapps/)
- [Custom Recovery]({{ site.baseurl }}/docs/7-custom-recovery/index.html)
- [Rooting]({{ site.baseurl }}/docs/8-rooting/index.html)
- [Flashing Guides]({{ site.baseurl }}/docs/9-flashing/index.html)
- [Troubleshooting]({{ site.baseurl }}/docs/10-troubleshooting/index.html)
- [Utilities]({{ site.baseurl }}/docs/11-Utilities/index.html)
- [Wallpaper]({{ site.baseurl }}/200-wallpaper/)
- [Archive]({{ site.baseurl }}/docs/12-archive/archive.html)
- [Forum]({{ site.baseurl }}/docs/13-forum/forum.html)
- [Feedback & Contribution]({{ site.baseurl }}/docs/feedback-contribution.html)