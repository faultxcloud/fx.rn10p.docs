---
layout: default
title: Installation Guide
parent: MIUI
---

# MIUI
---

## Install Stock ROM MIUI via OrangeFox  

- [OrangeFox R11.1_6 MIUI](https://github.com/basamaryan/android_device_xiaomi_sweet-TWRP/releases/download/R11.1_6/OrangeFox-R11.1_6-Unofficial-sweet-MIUI.zip)

- Flash [ROM OFFICIAL MIUI]({{ site.baseurl }}/docs/5-rom/MIUI/1-miui.html) (type: RECOVERY - `.zip`)

- Format Data ➜ **"YES"**

- Reboot System

---

## Install Stock ROM MIUI via MiFlash

{: .warning}
> Data akan terhapus, pastikan sudah backup!

{: .caution }
> **Jika kamu saat ini atau sebelumnya menggunakan ROM/Custom ROM (AOSP) dan ingin kembali ke ROM bawaan MIUI 14/13/12, saya sarankan untuk melakukan hal** <i class="bi bi-arrow-right-circle-fill"></i> [**ini**]({{ site.baseurl }}/docs/10-troubleshooting/2-find-device-storage-corrupt.html).  
Tujuannya adalah untuk memastikan bahwa saat kamu menggunakan MIUI, kamu tidak akan menemui pesan seperti ini: _"Find Device storage corrupt. Your device is unsafe now."_  `/` _“Penyimpanan perangkat rusak. Perangkat Anda sekarang tidak aman._”  

{: .note }
> Pastikan driver [adb & fastboot]({{ site.baseurl }}/3-tools/1-adb-fastboot.html) sudah terinstall dengan benar, dan juga [MiFlash]({{ site.baseurl }}/3-tools/3-xiaomi-tools.html).

1. **Download Fastboot ROM resmi**  
    - Pastikan pilih type **Fastboot** `.tgz`  
      `sweet` `Global / EEA / Indonesia` →  [Download]({{ site.baseurl }}/docs/5-rom/MIUI/1-miui.html) 
    - Lalu Extract file `.tgz`
  
2. **Masuk mode Fastboot**
    - Matikan HP
    - Tekan Volume Down + Power
    - Akan muncul logo fastboot
    
3. **Jalankan MiFlash**  
    - Buka aplikasi **Xiaomi MiFlash Tool**  
    - Klik **Select** → arahkan ke folder Fastboot ROM (folder yang berisi images)  
    - Pastikan tipe **flash** di bawah pilih: **Clean All** = _Status Bootloader: Bootloader akan tetap dalam keadaan Terbuka (Unlocked)._
4. **Klik Flash**
Tunggu proses selesai hingga:  <span class="label label-green">Flash done</span>
5. **Device akan Reboot otomatis**
