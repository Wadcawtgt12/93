let handler  = async (m, { conn }) => {
	
	await m.reply('[❗] 𝙇𝙤𝙖𝙙𝙞𝙣𝙜...`')
  conn.reply(m.chat,`${pickRandom(global.bokep)}`, m)
}
handler.help = ['filebokep']
handler.tags = ['hentai']
handler.command = /^(filebokep)$/i
handler.owner = false
handler.mods = false
handler.premium = true
handler.group = false
handler.private = true

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = false

export default handler 

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

global.bokep = [
'DATA BASE ERROR ALTERNATIVE LINK : https://bili.im/XJZKsMM',
]
//KALAU MAU TAMBAHIN JUGA BISA