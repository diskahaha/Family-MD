const qrku = "https://i.ibb.co/MnbqZ0N/qr-Aguz-Familia-07-06-22-1654614928.png"

let handler = async (m, { conn, usedPrefix }) => conn.sendButtonImg(m.chat, qrku, `
╭─「 𝕭𝖔𝖙 • Andii ༢࿔ྀ」
 Yang Saya Butuhkan Hati Kamu Ka , Bukan Pulsa 🤧
`.trim(), wm, 'Menu', usedPrefix + 'menu', m) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['about']
handler.command = /^dona(te|si)$/i

module.exports = handler
