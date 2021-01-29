const fs = require('fs-extra')
const { 
    prefix
} = JSON.parse(fs.readFileSync('./settings/setting.json'))

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textTnC = () => {
    return `
Source code / bot ini merupakan program open-source (gratis) yang ditulis menggunakan Javascript, kamu dapat menggunakan, menyalin, memodifikasi, menggabungkan, menerbitkan, mendistribusikan, mensublisensikan, dan atau menjual salinan dengan tanpa menghapus author utama dari source code / bot ini.

Dengan menggunakan source code / bot ini maka anda setuju dengan Syarat dan Kondisi sebagai berikut:
- Source code / bot tidak menyimpan data anda di server kami.
- Source code / bot tidak bertanggung jawab atas perintah anda kepada bot ini.
- Source code / bot anda bisa lihat di , blm ada

Instagram: https://instagram.com/rafnotme_/
Best regards, zx kuyy.`
}

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textMenu = (pushname) => {
    return `
Hi, ${pushname}! 👋️

ON CUMAN JAM 8 pagi - 9 malam
PERATURAN BOT.
DILARANG KERAS TELFON/VC ATAU KAKAK DIBLOKIR, KARNA BOT NYA UDAH DI PROGRAM OTOMATIS.

Berikut adalah beberapa fitur yang ada pada bot ini!✨

Creator:
-> *${prefix}sticker*
-> *${prefix}stickergif*
-> *${prefix}stickergiphy*
-> *${prefix}meme*
-> *${prefix}quotemaker*
-> *${prefix}tts id/en [indonesia/inggris]*
-> *${prefix}nulis (text)*

Islam:
-> *${prefix}infosurah*
-> *${prefix}surah*
-> *${prefix}tafsir*
-> *${prefix}ALaudio*

Fun Menu (Group):
-> *${prefix}katakasar*
		┷-> *${prefix}klasmen*

Search Any:
-> *${prefix}images*
-> *${prefix}sreddit*
-> *${prefix}wiki*
-> *${prefix}cuaca*
-> *${prefix}chord*
-> *${prefix}ss*
-> *${prefix}whatanime*

Random Teks:
-> *${prefix}fakta*
-> *${prefix}pantun*
-> *${prefix}katabijak*
-> *${prefix}quote*

Random Images:
-> *${prefix}anime*
-> *${prefix}kpop*
-> *${prefix}memes*

Tentang Bot:
-> *${prefix}tnc*
-> *${prefix}donasi*
-> *${prefix}botstat*
-> *${prefix}ownerbot*
-> *${prefix}join*

_-_-_-_-_-_-_-_-_-_-_-_-_-_

Owner Bot:
-> *${prefix}ban* - banned
-> *${prefix}bc* - promosi
-> *${prefix}leaveall* - keluar semua grup
-> *${prefix}clearall* - hapus semua chat

Hope you have a great day!✨`
}

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textAdmin = () => {
    return `
⚠ [ *Admin Group Only* ] ⚠ 
Berikut adalah fitur admin grup yang ada pada bot ini!

-> *${prefix}add*
-> *${prefix}kick* @tag
-> *${prefix}promote* @tag
-> *${prefix}demote* @tag
-> *${prefix}tagall*
-> *${prefix}del*

_-_-_-_-_-_-_-_-_-_-_-_-_-_

⚠ [ *Owner Group Only* ] ⚠
Berikut adalah fitur owner grup yang ada pada bot ini!
-> *${prefix}kickall*
*Owner Group adalah pembuat grup.*
`
}

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textDonasi = () => {
    return `donasi via DANA , GOPAY : 087763448134`
}
