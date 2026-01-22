---
layout: default
title: Freeze AOSP ROM
parent: Troubleshooting
nav_order: 7
---

# Freeze AOSP ROM
---

{: .warning }
> *I am not responsible for anything happened to your device do at your own risk!*
>

Beberapa user mengalami freeze di custom ROM base AOSP, dan solusinya adalah _Erase System Dynamic Partition_.  
Lalu Flash ulang ROM AOSP.  

---

{: .caution }
> - Pastikan PC / Laptop sudah terinstall [ADB & Fastboot Driver]({{ site.baseurl }}/3-tools/1-adb-fastboot.html)
> - Jangan lupa **Backup Data** karena akan menghapus semua data.
> - Siapkan ROM AOSP yang akan di install.

- Reboot ke Custom Recovery `(TWRP / Orangefox)`
- Pilih **Reboot** 
- Pilih **Fastboot**

- Open Terminal / CMD `(Windows / macOS/ Linux)` and Run this command:
    1. `fastboot erase vendor`
    2. `fastboot erase system`

- Flash ROM AOSP
- Done