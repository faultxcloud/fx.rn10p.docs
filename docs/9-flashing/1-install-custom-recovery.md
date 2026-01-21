---
layout: default
title: Install Custom Recovery
parent: Flashing
nav_order: 1
---

## Install Custom Recovery `[OrangeFox]` di MIUI (Permanen)

{: .warning}
> Selalu cadangkan data penting **(Backup)** karena menghindari dari hal yang tidak diinginkan.

### Persiapan Awal
Sebelum memulai, pastikan kamu sudah menyiapkan hal-hal berikut:  
- **Bootloader Terbuka (Unlocked)**: Pastikan statusnya sudah Unlocked.
- **PC / Laptop dan kabel <i class="bi bi-usb-symbol"></i> USB original yang sehat.**
- **Driver ADB & Fastboot**: Terinstal di PC / Laptop [<i class="bi bi-arrow-right-circle"></i>]({{ site.baseurl }}/3-tools/1-adb-fastboot.html)
- **File OrangeFox**: Download file OrangeFox `.zip` [<i class="bi bi-arrow-right-circle"></i>]({{ site.baseurl }}/docs/7-custom-recovery/2-ofox.html)
- **Baterai**: Minimal <i class="bi bi-battery-half"></i> 50% untuk menghindari mati mendadak.

---

### Langkah 1: Persiapan File  

1. Ekstrak file `.zip` **OrangeFox** yang sudah kamu download di PC.
2. Cari file bernama `recovery.img` di dalam folder ekstraksi tersebut.
3. Pindahkan file `recovery.img` ke dalam folder ADB & Fastboot di PC kamu.
4. Copy juga file `.zip` OrangeFox yang utuh ke dalam MicroSD atau Penyimpanan Internal HP kamu.

---

### Langkah 2: Masuk ke Mode Fastboot

1. Matikan Redmi Note 10 Pro kamu.
2. Tekan dan tahan **Tombol Power** + **Volume Bawah** secara bersamaan sampai muncul logo kelinci Mi (Fastboot).
3. Hubungkan HP ke PC / Laptop menggunakan kabel USB.

---

### Langkah 3: Flash Recovery melalui PC
1. Buka folder ADB di PC, tekan `Shift + Klik Kanan` di area kosong, lalu pilih **Open PowerShell window here** atau **Open Command Prompt here**.
2. Cek apakah perangkat terdeteksi dengan mengetik: `fastboot devices` *(Jika muncul kode angka / huruf, berarti terkoneksi).*
3. Ketik perintah berikut untuk memasang recovery: `fastboot flash recovery recovery.img`
4. Setelah selesai (muncul tulisan Finished), jangan langsung restart. Kamu harus masuk ke recovery secara manual.

---

### Langkah 4: Booting ke OrangeFox
1. Tekan dan tahan **Tombol Power** + **Volume Atas** pada HP.
2. Segera setelah logo MI muncul, lepas tombol Power tetapi **tetap tahan Volume Atas** sampai logo OrangeFox muncul.

---

### Langkah 5: Instalasi Permanen (PENTING)
Agar OrangeFox tidak hilang (tertimpa recovery bawaan) saat HP dinyalakan, kamu harus melakukan flash file zip-nya di dalam OrangeFox:

1. Di menu OrangeFox, cari file `.zip` OrangeFox yang kamu copy tadi di penyimpanan internal/MicroSD.
2. Ketuk file tersebut, lalu **Swipe to Install**.
3. OrangeFox akan menginstal dirinya sendiri dan otomatis melakukan *reboot* kembali ke recovery.
4. Setelah masuk kembali ke OrangeFox, pilih menu **Reboot > System**.
5. Done!