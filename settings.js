///BUY FULL NO ENC ( 088213993436 )
const fs = require('fs')
const chalk = require('chalk')

global.ytname = 'YouTube: DanzSkuyy99'
global.socialm = 'GitHub: Lucyy28'
global.location = 'Jl. Raya Cianjur, Kecamatan Cianjur, Kabupaten Cianjur, Jawa Barat 43212, Indonesia'

global.botName = 'Foxter Bot'
global.ownerNumber = '6283101799665'
global.ownerName = 'Firdan Ardiansyah'
global.website = 'Coming Soon...'
global.wagc = 'Coming Soon...'
global.packname = 'Foxter AI'
global.author = 'Lucy Foxter'
global.creator = '6283101799665@s.whatsapp.net'
global.premium = ['6283101799665']
global.hituet = 0
global.prefa = ['','.','/'];

global.saluran = 'https://whatsapp.com/channel/0029Vb1FZAQKQuJJGIctsS21'
global.saluranName = 'Lucy Dump'
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
global.welcome = false;
global.anticall = false;
global.autoswview = false;
global.adminevent = false;
global.groupevent = false;

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
	botAdmin: 'Foxter harus jadi admin dulu biar bisa jalanin ini! 😭',
	done: 'Sudah selesai! ✨',
	error: 'Eh, ada yang salah nih... coba lagi ya, Kak! 😖',
	group: 'Eits, fitur ini cuma bisa dipakai di grup~ 🫡',
	limit: 'Yah, batas penggunaan Kakak udah habis... 😢',
	noCmd: 'Hmm... perintahnya gak ada di daftar Foxter nih. Coba cek lagi ya, Kak! 🤔',
	nsfw: 'Fitur NSFW dimatikan di grup ini, coba minta izin ke admin dulu ya~ 🫣',
	owner: 'Hanya pemilik yang bisa akses fitur ini, Kak! 👑',
	premium: 'Fitur ini cuma buat pengguna premium, Kak! 🌟',
	private: 'Fitur ini cuma bisa dipakai di chat pribadi, Kak! 💌',
	success: 'Yeay, berhasil! 🎉',
	wait: 'Tunggu sebentar ya, Kak... Foxter lagi proses nih! ⏳🤗'
};

global.thumb = fs.readFileSync('./media/c08dc5cee5a3e63c8dc0add06bb6e6ca.jpg');
global.thumbUrl = 'https://files.catbox.moe/838gt6.jpg';

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})