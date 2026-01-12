---
layout: minimal
title: Double Tap To Lock Screen (Xiaomi & Redmi) - MIUI-ONLY

---

## Double Tap To Lock Screen (Xiaomi & Redmi) • MIUI ONLY

{: .note }
> Hanya untuk perangkat dengan pemindai sidik jari di samping (tombol power) dan memiliki fitur kostumisasi gerakan ketuk 2x pada perangkat pemindai sidik jari

Tips ini untuk mengaktifkan double tap untuk mengunci layar menggunakan fingerprint scanner.
Secara default mungkin pada pengaturan ketuk 2x pada sidik jari tidak menyediakan setelan untuk mengunci layar, namun kita bisa mengaktifkannya.

- **Root Device:** bisa dengan cara mengaktifkannya melalui aplikasi [Termux](https://f-droid.org/en/packages/com.termux/) dengan memasukan perintah:  
`su -c settings put system fingerprint_double_tap go_to_sleep`

- **Non-Root Device:** Membutuhkan bantuan aplikasi [SetEdit](https://play.google.com/store/apps/details?id=by4a.setedit22&pcampaignid=web_share) (untuk memudahkan), di tab system pada key `fingerprint_double_tap` masukkan `value go_to_sleep`  untuk mengaktikannya.  
![]({{ site.baseurl }}/docs/11-Utilities/img/ss.jpg)


[source](https://t.me/miatoz/217)