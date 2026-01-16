---
layout: default
title: Install Magisk
parent: Rooting
nav_order: 1
---

{: .caution }
> - Bootloader HARUS sudah unlock
> - Root berisiko (banking app, OTA, garansi)
> - Lakukan atas risiko sendiri
> - Backup data penting (disarankan)  

{: .note }
> Jika **android 15** kebawah biasanya cukup rename `Magisk.apk` ke `Magisk.zip` dan install menggunakan Custom Recovery (Orangefox / TWRP)  
> Lalu rename kembali `Magisk.zip` ke `Magisk.apk` dan install `Magisk.apk`, Selesai.  

---

> _Contoh install Magisk di PixelOS (Official) **android 16**_

### Bahan
- ROM yang sedang dipakai  
  Contoh: saya menggunakan ROM PixelOS build (**20260102**) / `PixelOS_sweet-16.1-20260102-1012.zip`

- Magisk App `.apk`: [Download](https://github.com/topjohnwu/Magisk/releases)

- Sudah terinstall dengan benar [ADB & Fastboot]({{ site.baseurl }}/3-tools/1-adb-fastboot.html) di PC/Laptop

- Kabel USB

---

### Rooting

1. Ambil `boot.img` yang ada di dalam ROM
2. Install & buka Magisk App di HP
3. Pilih Install
4. Pilih Select and Patch a File
5. Pilih file boot.img
6. Tunggu sampai selesai
   Akan menghasilkan file: `magisk_patched-xxxxx.img` 
   Biasanya tersimpan di folder: /Download/
7. Pindahkan `magisk_patched-xxxxx.img` ke PC
8. Matikan HP
9. Masuk Fastboot Mode: **Power + Volume Bawah**
10. Sambungkan ke PC
11. Buka Terminal / CMD di folder file tadi
12. Jalankan perintah:
    ```
    fastboot devices
    ```
13. Pastikan device terdeteksi 
14. Jika sudah terdeteksi, jalankan perintah:
    ```
    fastboot flash boot magisk_patched-xxxxx.img
    ```
15. Jika sudah dijalankan dan berhasil, reboot dengan menjalankan perintah:
    ```
    fastboot reboot
    ```
16. Done, HP akan boot normal  
17. Buka Magisk App, status: `Installed` berarti Magisk sudah terinstall


