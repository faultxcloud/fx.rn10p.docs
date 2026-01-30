---
layout: default
title: Play Integrity
parent: Troubleshooting
nav_order: 1
---

# Play Integrity
---

{: .note }
> Root: Magisk (sejenisnya) / KernelSU (sejenisnya) / Apatch
>
> _Saya tidak bertanggung jawab atas apapun yang terjadi pada perangkat Anda, lakukan dengan risiko Anda sendiri!_



## Apa Itu Play Integrity?
**Play Integrity** adalah API dari Google Play Store / Google Play Services yang membantu pengembang aplikasi memverifikasi:
Apakah aplikasi yang dijalankan adalah versi resmi dari Play Store,
Apakah perangkatnya bersertifikasi & belum dimodifikasi (root/unlock bootloader),
Apakah instalasi dilakukan melalui channel resmi. 

## Fungsi Utama
Dengan Play Integrity, aplikasi dapat mendeteksi hal-hal seperti:
Aplikasi yang telah dimodifikasi atau dibajak (appIntegrity)
Perangkat yang tidak bersertifikasi atau telah di-root (deviceIntegrity)
Instalasi yang tidak sah (accountDetails). 

## Kenapa Ini Penting?
Banyak aplikasi — terutama perbankan, game, dan layanan digital — mengandalkan Play Integrity untuk memastikan pengalaman dan keamanan pengguna tetap terjaga.
Jika perangkat tidak “lolos” verifikasi, maka layanan bisa dibatasi atau tidak bisa digunakan. 

## Kesimpulan
**Play Integrity** adalah “pengawal” keamanan Android modern yang membantu memastikan aplikasi berjalan di lingkungan yang aman dan sah.
Bagi pengguna modding atau custom ROM, ini menjadi salah satu aspek yang sering terkena dampak (karena perangkat dianggap “tidak bersertifikasi”).


*Source: - Android Developers: [Overview of Play Integrity API](https://developer.android.com/google/play/integrity/overview), Google Play Console Help: [Use the Play Integrity API](https://support.google.com/googleplay/android-developer/answer/11395166), Wikipedia: [Play Integrity API](https://en.wikipedia.org/wiki/Play_Integrity_API)*
{: .fs-2 }
---

##  Tutorial Cek Play Integrity

**Google Play Store** memiliki menu **Developer options** tersembunyi yang bisa diaktifkan secara manual. Dari menu ini, kamu bisa menjalankan fitur Play Integrity → Check integrity tanpa aplikasi tambahan.

### 1. Aktifkan Developer Options di Play Store
Jika menu “Developer options” belum muncul, lakukan langkah berikut:  

1. Buka Google Play Store.
2. Tekan foto profil → Settings (Setelan).
3. Masuk ke menu About / Tentang.
4. Cari bagian **Play Store version**.
5. Tekan Play Store version sebanyak 7 kali (atau beberapa kali) hingga muncul pesan:  
    > “You are now a developer!” atau “Developer options enabled.”  

Setelah itu, menu **Developer options** akan muncul.

### 2. Masuk ke Menu Developer Options
Sekarang **Developer options** sudah aktif, buka:  
> Settings → General → Developer options

### 3. Pilih “Play Integrity”
Di dalam Developer options, cari dan pilih:  
> Play Integrity  

### 4. Tekan “Check integrity”
Akan ada tombol:
> Check integrity  

Tekan untuk menampilkan hasil **Play Integrity**.

### Hasil yang Ditampilkan
Play Store akan menampilkan hasil resmi Play Integrity API, seperti:  

```
MEETS_BASIC_INTEGRITY  
MEETS_DEVICE_INTEGRITY  
MEETS_STRONG_INTEGRITY
```

Ini adalah hasil resmi langsung dari **Google Play Services**.

<details close markdown="1">
<summary markdown="span"> <i class="bi bi-camera"></i> Screenshoot</summary>

![]({{ site.baseurl }}/assets/images/playintegrity-ss.png)

</details>

<!-- ![]({{ site.baseurl }}/assets/images/playintegrity-ss.png) -->

---

# Fix Play Integrity & Strong Integrity

- Install module [Play Integrity Inject](https://github.com/KOWX712/PlayIntegrityFix/releases/latest) or [Play integrity Fork](https://github.com/osm0sis/PlayIntegrityFork/releases/latest)
- Install module [Tricky Store](https://github.com/5ec1cff/TrickyStore/releases/latest)
- Install module [Yurikey Manager](https://github.com/dpejoh/yurikey/releases/latest) by your root manager (Magisk / Apatch / KernelSu / Fork of KernelSU)
Press the action button

<i class="fa-solid fa-shield-halved"></i> Hasilnya akan seperti ini:  
<img src="{{ 'assets/icons/check-green.png' | relative_url }}" width="16" style="vertical-align:middle;"> `MEETS_BASIC_INTEGRITY`  

<img src="{{ '/assets/icons/check-green.png' | relative_url }}" width="16" style="vertical-align:middle;"> `MEETS_DEVICE_INTEGRITY` 

<img src="{{ '/assets/icons/check-green.png' | relative_url }}" width="16" style="vertical-align:middle;"> `MEETS_STRONG_INTEGRITY`  

---

# Run Bank App on Android Root (KSU Next)

{: .warning }
> I am not responsible for anything happened to your device do at your own risk!
>
> [`FaultX`](https://t.me/faultx003)  


| Test ROM | Android | Kernel |
|-|:-:|-|
| LineageOS 22.2 OFFICIAL | 15 | [LOSPerf + KSUNext + SUSFS](https://t.me/venturplayground) |
| PixelOS OFFICIAL | 15 | [Vantom KSU Next](https://t.me/venturplayground) |

Root: 
- [KernelSU Next](https://github.com/KernelSU-Next/KernelSU-Next/releases/latest) (`KernelSU_Next_vx.x.x_xxxxx-release.apk`)

Required Modules:

- [ReZygisk](https://github.com/PerformanC/ReZygisk/releases/latest) (`ReZygisk-vx.x.x-rc.x-release.zip`)
- [Play Integrity Fork](https://github.com/osm0sis/PlayIntegrityFork/releases/latest) (`PlayIntegrityFork-vxx.zip`)
- [Tricky Store](https://github.com/5ec1cff/TrickyStore/releases/latest) (`Tricky-Store-vx.x.x-xxx-xxxxxxx-release.zip`)
- [Tricky Addon](https://github.com/KOWX712/Tricky-Addon-Update-Target-List/releases/latest) (`TrickyAddonModule-vx.x.zip`)

### Installation

{: .note }
> If you want (MEETS STRONG INTEGRITY) find a `keybox.xml` that has not been revoked. import `keybox.xml` in TrickyStore > Set Custom Keybox > find the `keybox.xml` that you got > save.

1. Install Module
   - Install ReZygisk / Zygisk Next
   - Install Play Integrity Fix / Play Integrity Fork
   - Tricky Store
   - Reboot
   - Install Tricky Addon
   - Reboot

2. Open KSU Next, Run Play Integrity Fix  
    <details>
     <summary markdown="span"> <i class="bi bi-camera"></i> Screenshoot</summary>
     <img src="https://raw.githubusercontent.com/TriHermawan/RedmiNote10Pro/refs/heads/main/assets/bankapps/module/Screenshot_20250523-100318_KernelSU%20Next.png" alt="" width="50%" height="auto"><img src="https://raw.githubusercontent.com/TriHermawan/RedmiNote10Pro/refs/heads/main/assets/bankapps/module/Screenshot_20250523-100418_KernelSU%20Next.png" alt="" width="50%" height="auto">
   </details>  

3. Run Tricky Store ➜ Click the hamburger menu (three lines)
   <details>
     <summary markdown="span"> <i class="bi bi-camera"></i> Screenshoot</summary>
     <img src="https://raw.githubusercontent.com/TriHermawan/RedmiNote10Pro/refs/heads/main/assets/bankapps/module/Screenshot_20250523-100427_KernelSU%20Next.png" alt="" width="50%" height="auto"><img src="https://raw.githubusercontent.com/TriHermawan/RedmiNote10Pro/refs/heads/main/assets/bankapps/module/Screenshot_20250523-100433_KernelSU%20Next.png" alt="" width="50%" height="auto"><img src="https://raw.githubusercontent.com/TriHermawan/RedmiNote10Pro/refs/heads/main/assets/bankapps/module/Screenshot_20250523-100448_KernelSU%20Next.png" alt="" width="50%" height="auto">
   </details>  

4. Clear Data PlayStore
   <details>
     <summary markdown="span"> <i class="bi bi-camera"></i> Screenshoot</summary>
     <img src="https://raw.githubusercontent.com/TriHermawan/RedmiNote10Pro/refs/heads/main/assets/bankapps/module/Screenshot_20250523-085303_Settings.png" alt="" width="50%" height="auto"><img src="https://raw.githubusercontent.com/TriHermawan/RedmiNote10Pro/refs/heads/main/assets/bankapps/module/Screenshot_20250522-150607_Play%20Integrity%20API%20Checker.png" alt="" width="50%" height="auto">
   </details>


### Root Detection Apps (Optional)

- [Momo]({{ site.baseurl }}/assets/apk/Momo_4.4.1.apk) `.apk` (MD5: `2e64a137c807a6ad6ecd1435a83dcca5`)
- [Android Key Attestation Test App](https://github.com/vvb2060/KeyAttestation/releases/latest) `.apk`