---
layout: default
title: TEE Broken
parent: Troubleshooting
nav_order: 3
---

# TEE Broken

### 🔐 Apa Itu TEE Broken?
TEE (Trusted Execution Environment) adalah bagian khusus di prosesor yang menyimpan data keamanan seperti fingerprint, Widevine, dan Play Integrity.
TEE Broken berarti ruang keamanan ini rusak atau tidak berfungsi.

### ⚠️ Dampak TEE Broken
Widevine turun ke L3 (tidak bisa streaming HD)
Fingerprint gagal atau tidak bisa digunakan
Play Integrity / Safety API gagal
Aplikasi keamanan bermasalah.

### 🔍 Penyebab Umum
- Flash ROM yang tidak sesuai
- Downgrade firmware
- Partisi rusak
- Salah mem-flash keybox atau file keamanan
- Flash file `persist.img`
- Dan lain-lain

### 🛠️ Bisa Diperbaiki?
Kadang bisa (melalui flash firmware atau pemulihan key),  
tapi jika rusak pada hardware TEE → tidak bisa diperbaiki kecuali ganti mainboard.

{: .note }
> Untuk cek TEE bisa menggunakan aplikasi Momo: [Download]({{ site.baseurl }}/assets/apk/Momo_4.4.1.apk)  
> Android Key Attestation Test App: [Download](https://github.com/vvb2060/KeyAttestation/releases/download/v1.8.4/KeyAttestation-v1.8.4.apk)

---

# <i class="fa-solid fa-code"></i> Fix TEE Broken

{: .note }
> Private `keybox.xml` *(harap cari `keybox.xml` sendiri)*  
> Rename `keybox.xml` to `sw.xml`
> 
> Test: _19 Juni 2024_


- Flash [Engineering ROM]({{ site.baseurl }}/docs/5-rom/7-engineering-rom.html) using [Miflash]({{ site.baseurl }}/docs/3-tools/3-xiaomi-tools.html) (flash all)
- Enable Developer Options
- Make sure the sw.xml file is located in the same folder.
- Open CMD/Terminal and execute the command below:
    ```
    adb root
    ```
    ```
    adb remount
    ```
    ```
    adb reboot
    ```
    ```
    adb shell mkdir -p /data/nativetest64/qti_keymaster_tests/
    ```
    ```
    adb push sw.xml /data/nativetest64/qti_keymaster_tests/
    ```
    ```
    adb shell LD_LIBRARY_PATH=/vendor/lib64/hw KmInstallKeybox /data/nativetest64/qti_keymaster_tests/sw.xml sw true
    ```
- If the message says: `TEE done Installkeybox is done!` , it means it's correct  
![]({{ site.baseurl }}/assets/images/fix-tee/6-tee.jpeg)
- Flash the Stock ROM MIUI using MiFlash (Flash all and lock)
- Done!

Thanks for [chiteroman](https://github.com/chiteroman)

<details close markdown="1">
<summary markdown="span">📸 **Dokumentasi saat saya Fix TEE Broken**</summary>
   
![]({{ site.baseurl }}/assets/images/fix-tee/1-tee.jpeg)
![]({{ site.baseurl }}/assets/images/fix-tee/2-tee.jpeg)
![]({{ site.baseurl }}/assets/images/fix-tee/3-tee.jpeg)
![]({{ site.baseurl }}/assets/images/fix-tee/4-tee.jpeg)
![]({{ site.baseurl }}/assets/images/fix-tee/5-tee.jpeg)
![]({{ site.baseurl }}/assets/images/fix-tee/6-tee.jpeg)
