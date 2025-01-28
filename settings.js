///BUY FULL NO ENC ( 088213993436 )
const fs = require('fs')
const chalk = require('chalk')

global.ytname = 'YouTube: @zal_x_u'
global.socialm = 'GitHub: Tidak diketahui ❌'
global.location = '11 Naitōmachi, Shinjuku City, Tokyo 160-0014, Jepang'

global.botName = 'Mora AI'
global.ownerNumber = '6288213993436'
global.ownerName = 'K.R-dev'
global.website = 'https://www.rizalzee.my.id'
global.wagc = 'https://www.rizalzee.my.id'
global.packname = 'Mora AI'
global.author = 'K.R-dev.'
global.creator = '6288213993436@s.whatsapp.net'
global.premium = ['6288213993436']
global.hituet = 0
global.prefa = ['','.','/'];

global.saluran = '120363364330631981@newsletter'
global.saluranName = 'K.R-dev'
global.sessionName = 'session'

global.panel = '';
global.cred = '';
global.apiuser = '';
global.eggs = '15',
global.nets = '5',
global.location = '1',

global.typereply = 'v4'
global.autoblocknumber = '62'
global.antiforeignnumber = '62'
global.welcome = true;
global.anticall = true;
global.autoswview = false;
global.adminevent = true;
global.groupevent = true;

global.limit = {
	free: 30,
	premium: 9999,
	vip: 'VIP'
};

global.uang = {
	free: 10000,
	premium: 1000000,
	vip: 10000000
};

global.bot = {
	limit: 0,
	uang: 0
};

global.game = {
	suit: {},
	menfes: {},
	tictactoe: {},
	kuismath: {},
	tebakbom: {},
};

global.mess = {
	admin: 'Fitur ini khusus buat admin aja ya, Kak! 🫢',
	botAdmin: 'Mora harus jadi admin dulu biar bisa jalanin ini! 😭',
	done: 'Sudah selesai! ✨',
	error: 'Eh, ada yang salah nih... coba lagi ya, Kak! 😖',
	group: 'Eits, fitur ini cuma bisa dipakai di grup~ 🫡',
	limit: 'Yah, batas penggunaan Kakak udah habis... 😢',
	noCmd: 'Hmm... perintahnya gak ada di daftar Mora nih. Coba cek lagi ya, Kak! 🤔',
	nsfw: 'Fitur NSFW dimatikan di grup ini, coba minta izin ke admin dulu ya~ 🫣',
	owner: 'Hanya pemilik yang bisa akses fitur ini, Kak! 👑',
	premium: 'Fitur ini cuma buat pengguna premium, Kak! 🌟',
	private: 'Fitur ini cuma bisa dipakai di chat pribadi, Kak! 💌',
	success: 'Yeay, berhasil! 🎉',
	wait: 'Tunggu sebentar ya, Kak... Mora lagi proses nih! ⏳🤗'
};

global.thumb = fs.readFileSync('./media/c08dc5cee5a3e63c8dc0add06bb6e6ca.jpg');
global.thumbUrl = 'https://files.catbox.moe/pyk66a.jpg';

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})