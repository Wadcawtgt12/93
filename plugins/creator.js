import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = await conn.getName(who)

let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:WhatsApp;NexEp\nNICKNAME:👑 Owner Botz\nORG:NexEp\nTITLE:soft\nitem1.TEL;waid=62895411143170:+62 895-4111-43170\nitem1.X-ABLabel:📞 Nomor Owner\nitem2.URL:https://bili.im/XJZKsMM\nitem2.X-ABLabel:💬 More\nitem3.EMAIL;type=INTERNET: akunbarunomorsembilan@gmail.com\nitem3.X-ABLabel:💌 Mail Owner\nitem4.ADR:;;🇮🇩 Indonesia;;;;\nitem4.X-ABADR:💬 More\nitem4.X-ABLabel:📍 Lokasi Saya\nBDAY;value=date:🔖 11 Juli 2002\nEND:VCARD`
const tag_own = await conn.sendMessage(m.chat, { contacts: { displayName: wm, contacts: [{ vcard }] }}, { quoted: fkon })
let caption = `👋 Hai *${name} @${who.split("@")[0]}*, Nih Owner *${conn.user.name}* kak`
    await conn.reply(m.chat, caption, tag_own, { mentions: conn.parseMention(caption) })

}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|pengembang|creator)$/i

export default handler