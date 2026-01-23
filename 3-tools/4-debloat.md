---
layout: default
title: Debloat
parent: Tools
nav_order: 4
---

# Debloat
---

### Apa Itu Debloat?
**Debloat** adalah proses menghapus atau menonaktifkan aplikasi bawaan (bloatware) yang dianggap tidak perlu oleh pengguna.  
**Bloatware** biasanya berasal dari pabrikan, operator, atau aplikasi sistem yang jarang dipakai namun memakan ruang penyimpanan, RAM, dan sumber daya.  

Debloat bertujuan membuat perangkat lebih ringan, lebih cepat, dan lebih hemat baterai.

### Keuntungan Debloat
- Mengurangi penggunaan RAM
- Memperbaiki performa perangkat
- Menghemat baterai
- Mengurangi notifikasi dan proses latar belakang

### Risiko Debloat
Menghapus aplikasi penting dapat menyebabkan error
Fitur tertentu mungkin berhenti berfungsi
Jika dilakukan tanpa pengetahuan, bisa menyebabkan sistem tidak stabil
### Kesimpulan
Debloat adalah cara untuk menghilangkan aplikasi bawaan yang tidak diperlukan, sehingga sistem menjadi lebih ringan. Namun, harus berhati-hati karena beberapa aplikasi sistem penting tidak boleh dihapus.

---


{: .warning }
> I am not responsible for anything happened to your device do at your own risk!
>
> Saya tidak bertanggung jawab atas apapun yang terjadi pada perangkat Anda, lakukan dengan risiko Anda sendiri!  


## Tools Debloat

### XiaomiADBFastbootTools  

Menggunakan software ini bisa untuk debloat  

Requirement:  
- JDK for run `.jar` : [Windows, Mac, Linux]
  ```
  https://www.oracle.com/asean/java/technologies/downloads/
  ```


 [Download XiaomiADBFastbootTools](https://cloud03.faultx.workers.dev/1:/XiaomiADBFastbootTools/XiaomiADBFastbootTools.jar?a=view){:target="_blank"}{: .btn .btn-purple }

![]({{ site.baseurl }}/assets/images/xiaomi-adb-fastboot-tools.png)

### <i class="fa-solid fa-file-code"></i> Script  
Menggunakan script `.bat` (Windows) atau `.sh` (macOS / Linux)  


{: .note }
> Pastikan komputer kamu sudah terinstall [adb-fastboot]({{ site.baseurl }}/3-tools/1-adb-fastboot.html) (drivers) dengan benar.

Windows user = run `.bat`  
macOS / Linux user = $ `chmod +x .sh`  

| Windows | macOS / Linux |
|:---:|:---:|
| [MIUI 12](https://github.com/TriHermawan/RedmiNote10Pro/blob/main/script/debloat-miui-12.bat) | [MIUI 12](https://github.com/TriHermawan/RedmiNote10Pro/blob/main/script/debloat-miui-12.sh) |
| [MIUI 13-14](https://github.com/TriHermawan/RedmiNote10Pro/blob/main/script/debloat-miui-13-14.bat) | [MIUI 13-14](https://github.com/TriHermawan/RedmiNote10Pro/blob/main/script/debloat-miui-13-14.sh) |  

![]({{ site.baseurl }}/assets/images/debloat-script.png)