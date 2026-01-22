---
layout: default
title: PixelOS
parent: Flashing
nav_order: 4
---

# PixelOS
---

{: .note }
> Untuk PixelOS android 16 di sarankan untuk menginstall menggunakan **PixelOS Recovery** dengan metode [Sideload](#install-rom-pixelos-menggunakan-sideload---clean-flash).  
> Pastikan akun google sudah di logout, dan sudah backup data!

### Install ROM PixelOS menggunakan **OrangeFox**  

- [OrangeFox R11.1_7](https://github.com/basamaryan/android_device_xiaomi_sweet-TWRP/releases/download/R11.1_7/OrangeFox-R11.1_7-Unofficial-sweet-EROFSCompression.zip) `EROFSCompression`
- Flash [Firmware Only]({{ site.baseurl }}/docs/5-rom/MIUI/2-firmware.html) (if necessary)
- Flash [PixelOS ROM]({{ site.baseurl }}/docs/5-rom/CustomROM/5-pixelos.html)
- Format Data ➜ "YES"
- Reboot System

---

### Install ROM PixelOS menggunakan **Sideload**  / Clean Flash


File yang Harus Didownload dan simpan di laptop:  
- [PixelOS ROM]({{ site.baseurl }}/docs/5-rom/CustomROM/5-pixelos.html) (khusus Redmi Note 10 Pro / Max [`sweet / sweetin`])  
- Recovery PixelOS (`recovery-sweet_xxxxxxxx_xxxx.img`)  
- [ADB & Fastboot Tools]({{ site.baseurl }}/3-tools/1-adb-fastboot.html)  
- [Firmware Only]({{ site.baseurl }}/docs/5-rom/MIUI/2-firmware.html)

---

1. **Masuk Fastboot Mode**  
  - Matikan HP
  - Tekan Power + Volume Down
  - Muncul tulisan FASTBOOT

2. **Install Recovery PixelOS**
  - Sambungkan HP ke laptop
  - Buka CMD / Terminal, Lalu ketik perintah:
    ```
    fastboot flash recovery recovery.img
    ```
    ```
    fastboot reboot recovery
    ```
    HP akan masuk Recovery PixelOS

3. **Flash MIUI 14 firmware only**
  - Di Recovery → pilih Apply update
  - Pilih **Apply from ADB**
  - Di CMD / Terminal, ketik:
    ```
    adb sideload firmware.zip
    ```
    Tunggu proses install firmware berjalan, nanti akan muncul keterangan:

    > *Signature verification failed*  
    > *Install anyway?*  

    Pilih: **Yes**

4. **Install ROM PixelOS**
  - Di Recovery → pilih Apply update
  - Pilih **Apply from ADB**
  - Di CMD / Terminal, ketik:
    ```
    adb sideload PixelOS_sweet-xx.x-xxxxxxxx-xxx.zip
    ```
    Tunggu sampai 100%

5. **Format Data**
  - Saat proses install ROM sudah selesai, otomatis kembali ke menu utama recovery
  - Pilih Factory reset ➜ Format data / factory reset ➜ Format data
  - Jika sudah selesai Format Data, kembali ke menu utama reocevery

6. **Reboot**
  - Pilih Reboot system now. 
  - Boot pertama 5–10 menit (sabar)
  - 🎉 PixelOS berhasil terinstall!

---

### Dirty Flash / Update

{: .note }
> Tidak akan ada kehilangan data jika semuanya berjalan lancar. Buatlah cadangan data sebagai langkah pencegahan jika terjadi hal yang tidak diinginkan.  
> Saya tidak akan bertanggung jawab atas kehilangan data apa pun.  

#### Sideload

- Download ROM ke komputer / Laptop
- Reboot HP ke mode Recovery
- Saat sudah masuk mode Recovery, pilih “Apply update”, lalu “Apply from ADB” untuk memulai proses sideload
- Flash ROM melalui ADB sideload dengan menjalankan perintah `adb sideload <path/to/rom.zip>` di CMD / Terminal
- Reboot dan Selesai!

#### System Update
- Buka Settings → System → System update
- Check for update, download dan install
- Otomatis akan Reboot untuk Update, Setelah selesai akan otomatis reboot.

#### Local Update
- Download ROM PixelOS
- Buka Settings → System → System update
- Pilih <i class="bi bi-three-dots-vertical"></i> lalu pilih **Local update**
- Cari dan pilih file ROM PixelOS yang sudah kamu download
- Tunggu hingga proses selesai
- Done!