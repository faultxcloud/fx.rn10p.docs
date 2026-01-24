---
layout: default
title: 2. PixelOS
parent: Custom ROM
grand_parent: ROM

---

# PixelOS
---

![]({{ site.baseurl }}/assets/images/pixelos.png)

**PixelOS** adalah Custom ROM berbasis Android yang menawarkan pengalaman bersih ala Google Pixel ringan, cepat, stabil, dan bebas bloatware. ROM ini menjadi pilihan populer untuk Redmi Note 10 Pro karena performanya yang halus, desain minimalis, serta optimasi sistem yang baik.  

PixelOS cocok untuk pengguna yang menginginkan:  
- Tampilan dan pengalaman seperti Google Pixel
- Performa yang lebih ringan dibanding MIUI
- Sistem bebas iklan dan aplikasi bawaan
- ROM stabil untuk penggunaan harian  

---

> Device   : **Redmi Note 10 Pro / Pro Max**  
> Codename : `sweet / sweetin`  
> Maintainers     : [Aryan](https://github.com/basamaryan)



<span class="fs-3">
[<img src="" width="16" style="vertical-align:middle;"><i class="bi bi-telegram"></i> Group Support](https://t.me/aryanschat){: .btn }
</span>
<span class="fs-3">
[<img src="" width="16" style="vertical-align:middle;"><i class="bi bi-globe"></i> PixelOS](https://pixelos.net/download/sweet){: .btn }
</span>
<span class="fs-3">
[<img src="" width="16" style="vertical-align:middle;"><i class="bi bi-paypal"></i> Paypal](https://paypal.me/whyredfire){: .btn }
</span>

---

### <i class="bi bi-file-earmark-text"></i> Installation Guide

- [Read <i class="bi bi-arrow-right-circle"></i>]({{ site.baseurl }}/docs/5-rom/CustomROM/flash-pixelos.html)

---


## Android 16 <span class="label label-green">Latest</span>

{: .note }
> Disarankan install via PixelOS Recovery ([`sideload`](#clean-flash-coming-from-a-different-rom)). 
>

> Pastikan PixelOS Recovery (`.img`) sesuai tanggal Build ROM-nya.  
> Contoh Build: `20260102` 
> - PixelOS Recovery: `recovery-sweet_20260102_1012.img`  
> - PixelOS ROM: `PixelOS_sweet-16.1-20260102-1012.zip`

| ROM | Android | Recovery | Link |
|:----|:----|:----|:----|
| PixelOS | 16 | [PixelOS Recovery](https://sourceforge.net/projects/pixelos-releases/files/sixteen/sweet/recovery/) | [Download ROM](https://sourceforge.net/projects/pixelos-releases/files/sixteen/sweet/) |



---
### Android 15

| File Name | Build | MD5 | Link |
|:----|:----|:----|:----|
| PixelOS_sweet-15.0-20250517-1357.zip | 2025-05-17 | ``9d9fdde18e524b033c027a14e2ac7e94`` | [Download](https://sourceforge.net/projects/pixelos-releases/files/fifteen/sweet/PixelOS_sweet-15.0-20250517-1357.zip/download) |
| PixelOS_sweet-15.0-20250505-1620.zip | 2025-05-05 | ``540d6fddcac5f301eda807df8f913b99`` | [Download](https://sourceforge.net/projects/pixelos-releases/files/fifteen/sweet/PixelOS_sweet-15.0-20250505-1620.zip/download) |
| PixelOS_sweet-15.0-20250117-2309.zip | 2025-01-17 | ``65af2151fa2b0b5b38d3c8c6e0a7e2da`` | [Download](https://sourceforge.net/projects/pixelos-releases/files/fifteen/sweet/PixelOS_sweet-15.0-20250117-2309.zip/download) |

---

### Android 14

| File Name | Build | MD5 | Link |
|:----|:----|:----|:----|
| PixelOS_sweet-14.0-20241026-0519.zip | 2024-10-26| ``e0c6e5913373c4bd4f403a99d6bf539a`` | [Download](https://sourceforge.net/projects/pixelos-releases/files/fourteen/sweet/PixelOS_sweet-14.0-20241026-0519.zip/download) |
 
<span class="fs-3">
[Old version A14](https://sourceforge.net/projects/pixelos-releases/files/fourteen/sweet/){: .btn }
</span>


### Android 13

| File Name | Build | MD5 | Link |
|:----|:----|:----|:----|
| PixelOS_sweet-13.0-20230831-0536.zip| 2023-08-31 | ``d4211e74fd672c5a4c751bda67ea1ec6`` | [Download](https://sourceforge.net/projects/pixelos-releases/files/thirteen/sweet/PixelOS_sweet-13.0-20230831-0536.zip/download) |  

<span class="fs-3">
[Old version A13](https://sourceforge.net/projects/pixelos-releases/files/thirteen/sweet/){: .btn }
</span>


### Android 12

| File Name | Release | MD5 | Link |
|:----|:----|:----|:----|
| PixelOS_sweet-12.1-20220812-0031.zip | 2022-08-12 | ``ce4895f8a3cf2af7fd5b659986fea5ce`` | [Download](https://sourceforge.net/projects/pixelos-releases/files/twelve/sweet/PixelOS_sweet-12.1-20220812-0031.zip/download) |  

<span class="fs-3">
[Old version A12](https://sourceforge.net/projects/pixelos-releases/files/twelve/sweet/){: .btn }
</span>

---

## <i class="bi bi-file-earmark-text"></i> Installation Guide

### Flash with Orangefox (Clean flash)
- Download **OrangeFox Recovery R11.1_7** ``EROFSCompression`` - [Download](https://github.com/basamaryan/android_device_xiaomi_sweet-TWRP/releases/download/R11.1_7/OrangeFox-R11.1_7-Unofficial-sweet-EROFSCompression.zip)
- Reboot the device to **recovery**
- Flash **OrangeFox Recovery R11.1_7**
- Reboot to Recovery
- Flash [Firmware Only]({{ site.baseurl }}/docs/5-rom/MIUI/2-firmware.html) (Optional)
- Flash PixelOS ROM ``.zip``
- Format Data **"Yes"**
- Reboot and voila!

### Flash with Orangefox (Dirty flash / Update)
- Reboot the device to **recovery**
- Flash PixelOS ROM ``.zip``
- Reboot and voila!

### Clean flash (coming from a different ROM)
Clean flash involves formatting data which means you will be loosing data stored in the internal storage of your device, data in SD Card should not be affected. I will not be responsible for any loss of data.

- Download ROM and recovery files to your computer
- Reboot the device to bootloader **(Fastboot Mode)**
- Flash the recovery by running ``fastboot flash recovery <path/to/recovery.img>`` in terminal/CMD
- Reboot to recovery by holding **volume up + power button**
- Go to **Advanced > Enable ADB Sideload**
- Flash the latest MIUI 14 firmware for your region through ADB sideload by running ``adb sideload <path/to/firmware.zip>``
- Flash the ROM through ADB sideload by running ``adb sideload <path/to/rom.zip>`` in terminal/CMD
- Go to **Main menu > Wipe > Format Data > Type "yes" and confirm**
- Reboot and voila!

### Dirty Flash / Update
There will be no loss of data if everything goes well. Keep backups incase of any mishap. I will not be responsible for any loss of data.

- Download ROM file to your computer
- Reboot the device to **recovery**
- On your phone [which is in recovery mode], go to **Advanced > Enable ADB Sideload**
- Flash the ROM through ADB sideload by running ``adb sideload <path/to/rom.zip>`` in terminal/CMD
- Reboot and voila!
