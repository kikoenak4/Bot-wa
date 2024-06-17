import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

// Owner
global.owner = [
['6285174357879', 'Rico', true],
]
global.mods = []
global.prems = []
// Info
global.nomorwa = '6285174357879'
global.packname = 'Made With'
global.author = '© vella - MD'
global.namebot = 'Vella - MD'
global.wm = '© Vella - MD'
global.stickpack = 'Made With'
global.stickauth = '© Vella - MD'
global.fotonya = 'https://telegra.ph/file/7a72c74871ac2fb87b8df.jpg'
// Link Sosmed
global.sig = 'https://www.instagram.com/a.andricoo'
global.sgh = 'https://www.instagram.com/a.andricoo'
global.sgc = 'https://chat.whatsapp.com/IONsU0p8zsS0KW2AK6SI9H'
// Payment
global.dana = '085174357879'
// Info Wait
global.wait = '_Sedang Di Proses, Mohon Tunggu_....'
global.eror = './vn/eror.mp3'
global.multiplier = 69 
// Apikey
global.APIs = {
    anu : 'anu.tv'
}

/*Apikey*/
global.APIKeys = {
    "anu.tv": "anu",
}

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})