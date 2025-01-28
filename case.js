///BUY FULL NO ENC ( 088213993436 )

require('./lib/menu');
const {
	downloadContentFromMessage,
	BufferJSON,
	WA_DEFAULT_EPHEMERAL,
	generateWAMessageFromContent,
	proto,
	generateWAMessageContent,
	generateWAMessage,
	prepareWAMessageMedia,
	areJidsSameUser,
	InteractiveMessage,
	getContentType
} = require('@whiskeysockets/baileys');
const axios = require('axios');
const cheerio = require('cheerio');
const chalk = require('chalk');
const { color } = require('./lib/color');
const cron = require('node-cron');
const didyoumean = require('didyoumean');
const fetch = require('node-fetch');
const ffmpeg = require('fluent-ffmpeg');
const fs = require('fs');
const fsx = require('fs-extra');
const gis = require('g-i-s');
const moment = require('moment-timezone');
const ms = require('parse-ms');
const nou = require('node-os-utils');
const os = require('os');
const path = require('path');
const { performance } = require('perf_hooks');
const { randomBytes } = require('crypto');
const speed = require('performance-now');
const similarity = require('similarity');
const toMS = require('ms');
const util = require('util');
const yts = require('yt-search');
const readmore = String.fromCharCode(8206).repeat(4001);

const { 
	addAfkUser, 
	checkAfkUser, 
	getAfkId, 
	getAfkPosition, 
	getAfkReason, 
	getAfkTime 
} = require('./lib/afk');

const { 
	addFilter, 
	addSpam, 
	isFiltered, 
	isSpam, 
	ResetSpam 
} = require('./lib/antispam');

const { 
	addPremiumUser, 
	checkPremiumUser, 
	expiredCheck, 
	getAllPremiumUser, 
	getPremiumExpired, 
	getPremiumPosition 
} = require('./lib/premium');

const { 
	exec, 
	execSync, 
	spawn 
} = require("child_process");

const { 
	toAudio, 
	toPTT, 
	toVideo 
} = require('./lib/converter');

const { 
	smsg, 
	await, 
	clockString, 
	delay, 
	enumGetKey, 
	fetchBuffer, 
	fetchJson, 
	format, 
	formatDate, 
	formatp, 
	generateProfilePicture, 
	getBuffer, 
	getGroupAdmins, 
	getRandom, 
	isUrl, 
	json, 
	logic, 
	msToDate, 
	parseMention, 
	runtime, 
	sleep, 
	sort, 
	toNumber 
} = require('./lib/myfunc');

const { 
	CatBox, 
	fileIO, 
	pomfCDN 
} = require('./lib/uploader');

const { 
	gameSlot, 
	gameCasinoSolo, 
	gameMerampok, 
	daily, 
	transferLimit, 
	transferUang, 
	buy, 
	setUang, 
	setLimit 
} = require('./lib/game');

const { 
	createUser,
	createServer,
	getEggStartupCommand,
	manageServer,
	deleteServer,
	deleteUser
} = require('./lib/cpanel');

const threshold = 0.72

const alightScrape = require('./lib/scraper/alightmotion');
const BukaLapak = require('./lib/scraper/bukalapak');
const { ffCh, ffChSkill, ffNews, ffPet, ffPetSkill } = require('./lib/scraper/freefire');
const gempa = require('./lib/scraper/bmkg');
const GDrive = require('./lib/scraper/drive');
const Kusonime = require('./lib/scraper/kusonime');
const lyrics = require('./lib/scraper/lyrics');
const otakuDesu = require('./lib/scraper/otakudesu');
const pinterest = require('./lib/scraper/pinterest');
const PlayStore = require('./lib/scraper/playstore');
const quotesAnime = require('./lib/scraper/quotesAnime');
const remini = require('./lib/scraper/remini');
const savePin = require('./lib/scraper/savepin');
const saveTube = require('./lib/scraper/savetube');
const scrapeSoundCloud = require('./lib/scraper/soundcloud');
const { tiktokSearchVideo, tiktokDownloaderVideo } = require('./lib/scraper/tiktok');
const { wallpaper, wikimedia, happymod, ringtone, umma, githubstalk, npmstalk, mlstalk } = require('./lib/scraper/scraper');

const afk = JSON.parse(fs.readFileSync('./src/afk.json'));
const ntnsfw = JSON.parse(fs.readFileSync('./src/data/function/nsfw.json'));
const bad = JSON.parse(fs.readFileSync('./src/data/function/badword.json'));
const premium = JSON.parse(fs.readFileSync('./src/data/role/premium.json'));
const owner = JSON.parse(fs.readFileSync('./src/data/role/owner.json'));
const contacts = JSON.parse(fs.readFileSync('./src/data/role/contacts.json'));
const userNumber = JSON.parse(fs.readFileSync('./src/data/role/user.json'));

const audionye = JSON.parse(fs.readFileSync('./media/database/vn.json'));
const setiker = JSON.parse(fs.readFileSync('./media/database/sticker.json'));
const imagenye = JSON.parse(fs.readFileSync('./media/database/image.json'));
const videonye = JSON.parse(fs.readFileSync('./media/database/video.json'));

const tebakgambar = {}
const tebakgame = {}
const tebakhero = {}
const tebakff = {}
const tebakkabupaten = {}
const tebakjkt48 = {}
const tebakhewan = {}
const tebakml = {}
const tebakchara = {}
const tebaklogo = {}
const tebakaplikasi = {}
const tebakkata = {}
const asahotak = {}
const lengkapikalimat = {}
const tebakbendera = {}
const siapaaku = {}
const tebakkalimat = {}
const caklontong = {}
const susunkata = {}
const tekateki = {}
const tebakkimia = {}
const tebaklirik = {}
const tebaktebakan = {}
const mathgame = {}

try {
	let rawData = fs.readFileSync('./src/database.json');
	global.db.data = JSON.parse(rawData) || {};
} catch (err) {
	console.error('⚠️ Gagal memuat database.json, menggunakan struktur default.');
	global.db.data = {};
}

global.db.data = {
	sticker: global.db.data.sticker || {},
	database: global.db.data.database || {},
	game: global.db.data.game || {},
	others: global.db.data.others || {},
	users: global.db.data.users || {},
	chats: global.db.data.chats || {},
	settings: global.db.data.settings || {},
};

const time = moment.tz('Asia/Jakarta').format('HH:mm:ss');
const date = moment.tz('Asia/Jakarta').format('DD/MM/YYYY');
const time2 = moment.tz('Asia/Jakarta').format('HH:mm:ss');

let ucapanWaktu = "Selamat Malam 🌌";

if (time2 < "05:00:00") {
	ucapanWaktu = "Selamat Pagi 🌄";
} else if (time2 < "11:00:00") {
	ucapanWaktu = "Selamat Pagi 🌄";
} else if (time2 < "15:00:00") {
	ucapanWaktu = "Selamat Siang 🌅";
} else if (time2 < "18:00:00") {
	ucapanWaktu = "Selamat Sore 🌇";
} else if (time2 < "19:00:00") {
	ucapanWaktu = "Selamat Petang 🌆";
}

module.exports = haruka = async (haruka, m, msg, chatUpdate, store) => {
	try {
		const {
			type,
			quotedMsg,
			mentioned,
			now,
			fromMe
		} = m
		const body = (m.mtype === 'conversation' ? m.message.conversation : m.mtype === 'imageMessage' ? m.message.imageMessage.caption : m.mtype === 'videoMessage' ? m.message.videoMessage.caption : m.mtype === 'extendedTextMessage' ? m.message.extendedTextMessage.text : m.mtype === 'buttonsResponseMessage' ? m.message.buttonsResponseMessage.selectedButtonId : m.mtype === 'listResponseMessage' ? m.message.listResponseMessage.singleSelectReply.selectedRowId : m.mtype === 'InteractiveResponseMessage' ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson)?.id : m.mtype === 'templateButtonReplyMessage' ? m.message.templateButtonReplyMessage.selectedId : m.mtype === 'messageContextInfo' ? m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.message.InteractiveResponseMessage.NativeFlowResponseMessage || m.text : '')
		const budy = (typeof m.text == 'string' ? m.text : '')
		const prefix = /^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/gi) : prefa
		const isCmd = body.startsWith(prefix)
		const isCommand = isCmd ? body.slice(1).trim().split(' ').shift().toLowerCase() : ""
		const command = isCmd ? body.slice(1).trim().split(' ').shift().toLowerCase() : ''
		const args = body.trim().split(/ +/).slice(1);
		const botNumber = await haruka.decodeJid(haruka.user.id);
		const pushname = m.pushName || "No Name"
		const text = q = args.join(" ");
		const getQuoted = (m.quoted || m);
		const quoted = (getQuoted.type == 'buttonsMessage') ? getQuoted[Object.keys(getQuoted)[1]] : (getQuoted.type == 'templateMessage') ? getQuoted.hydratedTemplate[Object.keys(getQuoted.hydratedTemplate)[1]] : (getQuoted.type == 'product') ? getQuoted[Object.keys(getQuoted)[0]] : m.quoted ? m.quoted : m
		const mime = (quoted.msg || quoted).mimetype || '';
		const qmsg = (quoted.msg || quoted);

		const isMedia = /image|video|sticker|audio/.test(mime);
		const isImage = (type == 'imageMessage');
		const isVideo = (type == 'videoMessage');
		const isAudio = (type == 'audioMessage');
		const isDocument = (type == 'documentMessage');
		const isLocation = (type == 'locationMessage');
		const isContact = (type == 'contactMessage');
		const isSticker = (type == 'stickerMessage');
		const isText = (type == 'textMessage');
		const isQuotedText = type === 'extendexTextMessage' && content.includes('textMessage');
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage');
		const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage');
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage');
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage');
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage');
		const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage');
		const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage');

		const isGroup = m.key.remoteJid.endsWith('@g.us');
		const groupMetadata = m.isGroup ? await haruka.groupMetadata(m.chat).catch(e => {}) : ''
		const groupName = m.isGroup ? groupMetadata.subject : ''
		const participants = m.isGroup ? await groupMetadata.participants : ''
		const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
		const isGroupAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
		const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
		const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
		const groupOwner = m.isGroup ? groupMetadata.owner : ''
		const isGroupOwner = m.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender) : false
		const AntiNsfw = m.isGroup ? ntnsfw.includes(m.chat) : false
		if (m.isGroup) {
			m.metadata = await haruka.groupMetadata(m.chat)
			m.admins = (m.metadata.participants.reduce((a, b) => (b.admin ? a.push({ id: b.id, admin: b.admin }) : [...a]) && a, []))
			m.isAdmin = m.admins.some((b) => b.id === m.sender)
			m.participant = m.key.participant
			m.isBotAdmin = !!m.admins.find((member) => member.id === botNumber)
		}

		const clientId = haruka.user.id.split(':')[0];
		const senderbot = m.key.fromMe ? haruka.user.id.split(':')[0] + "@s.whatsapp.net" || haruka.user.id : m.key.participant || m.key.remoteJid;
		const senderId = senderbot.split('@')[0];
		const isBot = clientId.includes(senderId);

		const isAfkOn = checkAfkUser(m.sender, afk)
		const isUser = userNumber.includes(m.sender);
		const isVip = db.data && db.data.users && db.data.users[m.sender] ? db.data.users[m.sender].vip : false;
		const isCreator = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
		const isPremium = isCreator || checkPremiumUser(m.sender, premium);
		expiredCheck(haruka, m, premium);

		const fconver = {
			key: {
				fromMe: false,
				participant: `0@s.whatsapp.net`,
				...(m.chat ? {
					remoteJid: "0@s.whatsapp.net"
				} : {})
			},
			message: {
				conversation: `👤 *${m.pushName || 'Guest'}*\n🔢 *${m.sender.split('@')[0]}*`
			}
		};

		const fmen = {
			key: {
				fromMe: false,
				participant: `0@s.whatsapp.net`,
				...(m.chat ? {
					remoteJid: "0@s.whatsapp.net"
				} : {})
			},
			message: {
				conversation: `📝 *Pesan Menfess Baru!* ✨`
			}
		};

		async function emote(emo) {
			haruka.sendMessage(m.chat, {
				react: {
					text: emo,
					key: m.key
				}
			});
		}

		async function newReply(teks) {
			if (typereply === 'v1') {
				m.reply(teks);
			} else if (typereply === 'v2') {
				haruka.sendMessage(m.chat, {
					contextInfo: {
						externalAdReply: {
							showAdAttribution: true,
							title: botName,
							body: ownerName,
							previewType: "PHOTO",
							thumbnail: thumb,
							sourceUrl: wagc
						}
					},
					text: teks
				}, {
					quoted: m
				});
			} else if (typereply === 'v3') {
				haruka.sendMessage(m.chat, {
					text: teks,
					contextInfo: {
						externalAdReply: {
							showAdAttribution: true,
							title: botName,
							body: ownerName,
							thumbnail: thumb,
							sourceUrl: website,
							mediaType: 1,
							renderLargerThumbnail: true
						}
					}
				}, { 
					quoted: m 
				});
			} else if (typereply === 'v4') {
				newReply2(teks);
			}
		}

		async function newReply2(teks) {
			const newrep = {
				contextInfo: {
					forwardingScore: 100,
					isForwarded: true,
					forwardedNewsletterMessageInfo: {
						newsletterName: saluranName,
						newsletterJid: saluran,
					},
					externalAdReply: {
						showAdAttribution: true,
						title: ucapanWaktu,
						body: botName,
						thumbnailUrl: thumbUrl,
						sourceUrl: website
					}
				},
				text: teks
			};
			return haruka.sendMessage(m.chat, newrep, {
				quoted: m,
			});
		}

		async function sendButton(chat, judul, teks, button, m) {
			let msg = generateWAMessageFromContent(chat, {
				viewOnceMessage: {
					message: {
						'messageContextInfo': {
							'deviceListMetadata': {},
							'deviceListMetadataVersion': 2
						},
						interactiveMessage: proto.Message.InteractiveMessage.create({
							contextInfo: {
								mentionedJid: [m.sender],
								forwardingScore: 100, 
								isForwarded: true, 
								forwardedNewsletterMessageInfo: {
									newsletterJid: saluran,
									newsletterName: saluranName, 
									serverMessageId: -1
								},
								businessMessageForwardInfo: { 
									businessOwnerJid: haruka.decodeJid(haruka.user.id) 
								},
							},
							body: proto.Message.InteractiveMessage.Body.create({
								text: teks
							}),
							footer: proto.Message.InteractiveMessage.Footer.create({
								text: botName
							}),
							header: proto.Message.InteractiveMessage.Header.create({
								title: judul,
								subtitle: ownerName,
								hasMediaAttachment: false
							}),
							nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
								buttons: button,
							})
						})
					}
				}
			}, { 
				quoted: m 
			})

			await haruka.relayMessage(msg.key.remoteJid, msg.message, {
				messageId: msg.key.id
			})
		}

		async function sendButtonImage(chat, judul, teks, buffer, button, m) {
			const uploadFile = { upload: haruka.waUploadToServer };
			const imageMessage = await prepareWAMessageMedia(
				{
					image: buffer,
				},
				uploadFile,
			);
			let msg = generateWAMessageFromContent(m.chat, {
				viewOnceMessage: {
					message: {
						'messageContextInfo': {
							'deviceListMetadata': {},
							'deviceListMetadataVersion': 2
						},
						interactiveMessage: proto.Message.InteractiveMessage.create({
							contextInfo: {
								mentionedJid: [m.sender],
								forwardingScore: 100, 
								isForwarded: true, 
								forwardedNewsletterMessageInfo: {
									newsletterJid: saluran,
									newsletterName: saluranName, 
									serverMessageId: -1
								},
								businessMessageForwardInfo: { 
									businessOwnerJid: haruka.decodeJid(haruka.user.id) 
								},
							},
							body: proto.Message.InteractiveMessage.Body.create({
								text: teks
							}),
							footer: proto.Message.InteractiveMessage.Footer.create({
								text: botName
							}),
							header: proto.Message.InteractiveMessage.Header.create({
								title: judul,
								subtitle: ownerName,
								imageMessage: imageMessage.imageMessage,
								hasMediaAttachment: true
							}),
							nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
								buttons: button,
							})
						})
					}
				}
			}, {
				quoted: m
			})

			haruka.relayMessage(msg.key.remoteJid, msg.message, {
				messageId: msg.key.id
			})
		}

		async function sendButtonVideo(chat, judul, teks, buffer, button, m) {
			const uploadFile = { upload: haruka.waUploadToServer };
			const videoMessage = await prepareWAMessageMedia(
				{
					video: buffer,
				},
				uploadFile,
			);
			let msg = generateWAMessageFromContent(m.chat, {
				viewOnceMessage: {
					message: {
						'messageContextInfo': {
							'deviceListMetadata': {},
							'deviceListMetadataVersion': 2
						},
						interactiveMessage: proto.Message.InteractiveMessage.create({
							contextInfo: {
								mentionedJid: [m.sender],
								forwardingScore: 100, 
								isForwarded: true, 
								forwardedNewsletterMessageInfo: {
									newsletterJid: saluran,
									newsletterName: saluranName, 
									serverMessageId: -1
								},
								businessMessageForwardInfo: {
									businessOwnerJid: haruka.decodeJid(haruka.user.id)
								},
							},
							body: proto.Message.InteractiveMessage.Body.create({
								text: teks
							}),
							footer: proto.Message.InteractiveMessage.Footer.create({
								text: botName
							}),
							header: proto.Message.InteractiveMessage.Header.create({
								title: judul,
								subtitle: ownerName,
								videoMessage: videoMessage.videoMessage,
								hasMediaAttachment: true
							}),
							nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
								buttons: button,
							})
						})
					}
				}
			}, {
				quoted: m
			})

			haruka.relayMessage(msg.key.remoteJid, msg.message, {
				messageId: msg.key.id
			})
		}

		async function sendButtonDocument(chat, judul, teks, thumb, button, m) {
			let msg = generateWAMessageFromContent(chat, {
				viewOnceMessage: {
					message: {
						'messageContextInfo': {
							'deviceListMetadata': {},
							'deviceListMetadataVersion': 2
						},
						interactiveMessage: proto.Message.InteractiveMessage.create({
							contextInfo: {
								mentionedJid: [m.sender],
								isForwarded: true,
								forwardedNewsletterMessageInfo: {
									newsletterJid: saluran,
									newsletterName: saluranName, 
									serverMessageId: -1
								},
								businessMessageForwardInfo: {
									businessOwnerJid: haruka.decodeJid(haruka.user.id)
								},
								externalAdReply: {
									title: ucapanWaktu,
									body: pushname,
									thumbnailUrl: thumbUrl,
									sourceUrl: wagc,
									mediaType: 1,
									renderLargerThumbnail: true
								}
							},
							body: proto.Message.InteractiveMessage.Body.create({
								text: teks
							}),
							footer: proto.Message.InteractiveMessage.Footer.create({
								text: botName
							}),
							header: proto.Message.InteractiveMessage.Header.create({
								title: judul,
								thumbnailUrl: thumbUrl,
								subtitle: ownerName,
								hasMediaAttachment: true,
								...(await prepareWAMessageMedia({
									document: thumb, 
									mimetype: 'image/png', 
									fileLength: 10000000000, 
									jpegThumbnail: thumb, 
									fileName: saluranName 
								}, { 
									upload: haruka.waUploadToServer
								}))
							}),
							nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
								buttons: button,
							})
						})
					}
				}
			}, {
				quoted: m
			})

			await haruka.relayMessage(msg.key.remoteJid, msg.message, {
				messageId: msg.key.id
			})
		};

		function capitalizeWords(str) {
			return str
				.split(' ')
				.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Mengubah huruf pertama setiap kata menjadi kapital
				.join(' ');
		}

		const pickRandom = (arr) => {
			return arr[Math.floor(Math.random() * arr.length)]
		}

		try {
			let isNumber = x => typeof x === 'number' && !isNaN(x);

			// Perbaikan di bagian user
			let user = db.data.users[m.sender] || {}; // Akses dengan aman
			if (typeof user !== 'object') db.data.users[m.sender] = {};
	
			let isPremium = checkPremiumUser(m.sender, premium); // Validasi isPremium
			let limitUser = isPremium ? 1000 : 100;
			let uangUser = user.vip 
				? global.uang.vip 
				: isPremium 
					? global.uang.premium 
					: global.uang.free;

			if (!('vip' in user)) user.vip = false;
			if (!('badword' in user)) user.badword = 0;
			if (!('title' in user)) user.title = '';
			if (!('serialNumber' in user)) user.serialNumber = randomBytes(16).toString('hex');
			if (!('nick' in user)) user.nick = haruka.getName(m.sender);
			if (!isPremium) user.premium = false;
			if (!('totalLimit' in user)) user.totalLimit = limitUser;
			if (!isNumber(user.limit)) user.limit = limitUser;
			if (!('uang' in user)) user.uang = uangUser;
			if (!('lastclaim' in user)) user.lastclaim = new Date().getTime();
			if (!('lastrampok' in user)) user.lastrampok = new Date().getTime();

			db.data.users[m.sender] = user;

			// Perbaikan di bagian chats
			let chats = db.data.chats[m.chat] || {}; // Fallback jika chats undefined
			if (typeof chats !== 'object') db.data.chats[m.chat] = {};

			if (!('badword' in chats)) chats.badword = false;
			if (!('antiforeignnum' in chats)) chats.antiforeignnum = false;
			if (!('antiviewonce' in chats)) chats.antiviewonce = false;
			if (!('antibot' in chats)) chats.antibot = false;
			if (!('antispam' in chats)) chats.antispam = false;
			if (!('antimedia' in chats)) chats.antimedia = false;
			if (!('antiimage' in chats)) chats.antiimage = false;
			if (!('antivideo' in chats)) chats.antivideo = false;
			if (!('antiaudio' in chats)) chats.antiaudio = false;
			if (!('antisticker' in chats)) chats.antisticker = false;
			if (!('anticontact' in chats)) chats.anticontact = false;
			if (!('antilocation' in chats)) chats.antilocation = false;
			if (!('antidocument' in chats)) chats.antidocument = false;
			if (!('antilink' in chats)) chats.antilink = false;
			if (!('antilinkgc' in chats)) chats.antilinkgc = false;
			if (!('mute' in chats)) chats.mute = false;
			if (!('liststore' in chats)) chats.liststore = {};

			db.data.chats[m.chat] = chats;

			// Perbaikan di bagian settings
			let setting = db.data.settings[botNumber] || {};
			if (typeof setting !== 'object') db.data.settings[botNumber] = {};

			if (!('totalhit' in setting)) setting.totalhit = 0;
			if (!('totalError' in setting)) setting.totalError = 0;
			if (!('online' in setting)) setting.online = false;
			if (!('safesearch' in setting)) setting.safesearch = false;
			if (!('autosticker' in setting)) setting.autosticker = false;
			if (!('autodownload' in setting)) setting.autodownload = false;
			if (!('autobio' in setting)) setting.autobio = false;
			if (!('autoread' in setting)) setting.autoread = false;
			if (!('autorecordtype' in setting)) setting.autorecordtype = false;
			if (!('autorecord' in setting)) setting.autorecord = false;
			if (!('autotype' in setting)) setting.autotype = false;
			if (!('autoblocknum' in setting)) setting.autoblocknum = false;
			if (!('onlygc' in setting)) setting.onlygc = false;
			if (!('onlypc' in setting)) setting.onlypc = false;
			if (!('watermark' in setting)) setting.watermark = { packname: global.packname, author: global.author };
			if (!('about' in setting)) setting.about = {
				bot: { nick: haruka.getName(botNumber), alias: botName },
				owner: { nick: haruka.getName(ownerNumber + '@s.whatsapp.net'), alias: ownerNumber }
			};

			db.data.settings[botNumber] = setting;

		} catch (err) {
			console.error('⚠️ Terjadi kesalahan:', err);
		}

		const react = async () => {
			const emojis = ["🌷", "🤙", "😂", "🤣", "😭", "🫂", "💔", "😡"]; 
			for (const emoji of emojis) {
				await sleep(80);
				await haruka.sendMessage(m.chat, { react: { text: emoji, key: m.key } });
			}
			await sleep(50);
			const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
			await haruka.sendMessage(m.chat, { react: { text: randomEmoji, key: m.key } });
		};

		async function loading() {
			const lod = [
				"█▒▒▒▒▒▒▒▒▒▒▒ 10%",
				"████▒▒▒▒▒▒▒▒ 30%",
				"███████▒▒▒▒▒ 50%",
				"██████████▒▒ 80%",
				"████████████ 100%"
			];
			const { key } = await haruka.sendMessage(m.chat, { 
				text: mess.wait 
			}, { 
				quoted: m 
			});

			for (let i = 0; i < lod.length; i++) {
				await sleep(600);
				await haruka.sendMessage(m.chat, { 
					text: lod[i], 
					edit: key 
				});
			}
		};

		async function addExifAvatar(buffer, packname, author, categories = [''], extra = {}) {
			const { default: { Image } } = await import('node-webpmux');
			const img = new Image();

			const json = {
				'sticker-pack-id': 'Natsxe',
				'sticker-pack-name': packname,
				'sticker-pack-publisher': author,
				'emojis': categories,
				'is-avatar-sticker': 1,
				...extra
			};

			let exifAttr = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16, 0x00, 0x00, 0x00]);
			let jsonBuffer = Buffer.from(JSON.stringify(json), 'utf8');
			let exif = Buffer.concat([exifAttr, jsonBuffer]);

			exif.writeUIntLE(jsonBuffer.length, 14, 4);

			await img.load(buffer);
			img.exif = exif;

			return await img.save(null);
		}

		function generateRandomPassword(length) {
			let result = '';
			const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
			const charactersLength = characters.length;

			for (let i = 0; i < length; i++) {
				result += characters.charAt(Math.floor(Math.random() * charactersLength));
			}

			return result;
		}

		function formatBytes(bytes) {
			if (bytes === 0) return '0 Byte';

			const k = 1024;
			const sizes = ['Byte', 'KB', 'MB', 'GB', 'TB'];
			const i = Math.floor(Math.log(bytes) / Math.log(k));

			return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
		}

		function formatDuration(ms) {
			let seconds = Math.floor((ms / 1000) % 60);
			let minutes = Math.floor((ms / (1000 * 60)) % 60);
			let hours = Math.floor((ms / (1000 * 60 * 60)) % 24);
			return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
		}

		if (!m.isGroup && !isCreator && db.data.settings[botNumber].onlygc) {
			if (command) {
				return
			}
		}

		if (!isCreator && db.data.settings[botNumber].onlypc && m.isGroup) {
			if (command) {
				return
			}
		}

		if (!haruka.public) {
			if (isCreator && !m.key.fromMe) return;
		}

		if (db.data.settings[botNumber].online) {
			if (command) {
				haruka.sendPresenceUpdate('unavailable', m.chat);
			}
		}

		if (db.data.settings[botNumber].autoread) {
			haruka.readMessages([m.key]);
		}

		if (db.data.settings[botNumber].autobio) {
			haruka.updateProfileStatus(`${botName} Telah Berjalan Selama ${runtime(process.uptime())}`).catch(_ => _);
		}

		if (db.data.settings[botNumber].autorecordtype) {
			if (command) {
				let mix = ['composing', 'recording'];
				let mix2 = mix[Math.floor(mix.length * Math.random())];
				haruka.sendPresenceUpdate(mix2, m.chat);
			}
		}

		if (db.data.settings[botNumber].autorecord) {
			if (command) {
				let mix = ['recording'];
				let mix2 = mix[Math.floor(mix.length * Math.random())];
				haruka.sendPresenceUpdate(mix2, m.chat);
			}
		}

		if (db.data.settings[botNumber].autotype) {
			if (command) {
				let pos = ['composing'];
				haruka.sendPresenceUpdate(pos, m.chat);
			}
		}

		if (m.sender.startsWith(`${autoblocknumber}`) && db.data.settings[botNumber].autoblocknum === true) {
			return haruka.updateBlockStatus(m.sender, 'block');
		}

		if (!m.sender.startsWith(`${antiforeignnumber}`) && db.data.chats[m.chat].antiforeignnum === true) { 
			if (isCreator || isAdmins || !isBotAdmins) return;
			haruka.sendMessage(m.chat, { text: `Maaf, kamu akan dihapus karena admin/owner grup telah mengaktifkan anti-nomor asing, hanya kode negara +${antiforeignnumber} yang boleh bergabung` }, { quoted: m });
			await sleep(2000);
			await haruka.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
		}

		let list = []
		for (let i of owner) {
			list.push({
				displayName: await haruka.getName(i),
				vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await haruka.getName(i)}\nFN:${await haruka.getName(i)}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Click here to chat\nitem2.EMAIL;type=INTERNET:${ytname}\nitem2.X-ABLabel:YouTube\nitem3.URL:${socialm}\nitem3.X-ABLabel:GitHub\nitem4.ADR:;;${location};;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
			})
		}

		cron.schedule('00 00 * * *', () => {
			let user = Object.keys(db.data.users)
			for (let jid of user) {
				const limitUser = db.data.users[jid].vip ? global.limit.vip : checkPremiumUser(jid, premium) ? global.limit.premium : global.limit.free
				db.data.users[jid].limit = limitUser
			}
		}, {
			scheduled: true,
			timezone: 'Asia/Jakarta'
		});

		if (m.message && !m.isNewsletter) {
			console.log(chalk.black.bgWhite('[ MESSAGE ]:'),chalk.black.bgGreen(new Date), chalk.black.bgHex('#00EAD3')(budy || m.type) + '\n' + chalk.black(chalk.bgCyanBright('[ FROM ] :'),chalk.bgYellow(m.pushName),chalk.bgHex('#FF449F')(m.sender),chalk.bgBlue('(' + (m.isGroup ? m.pushName : 'Private Chat', m.chat) + ')')));
		}

		if (db.data.chats[m.chat].antiviewonce && m.isGroup && m.mtype == 'viewOnceMessageV2') {
			let val = { ...m };
			let msg = val.message?.viewOnceMessage?.message || val.message?.viewOnceMessageV2?.message;
			delete msg[Object.keys(msg)[0]].viewOnce;
			val.message = msg;
			await haruka.sendMessage(m.chat, { forward: val }, { quoted: m });
		}

		if (db.data.chats[m.chat].antibot) {
			if (m.isBaileys && m.fromMe == false) {
				if (m.isAdmin || !isBotAdmins) {			
				} else {
					return await haruka.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
				}
			}
		};

		if (db.data.chats[m.chat].antispam) {
			if (m.isGroup && m.message && isFiltered(m.chat)) {
				console.log(`[SPAM]`, color(moment(m.messageTimestamp * 100).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'dari', color(m.pushName));
				return await haruka.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
			}
		}

		if (db.data.chats[m.chat].antimedia && isMedia) {
			if (isCreator || isAdmins || !isBotAdmins){
			} else {
				return haruka.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
			}
		}

		if (db.data.chats[m.chat].image && m.mtype) {
			if (m.mtype === "imageMessage") {
				if (isCreator || isAdmins || !isBotAdmins) {
				} else {
					return haruka.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant } });
				}
			}
		}

		if (db.data.chats[m.chat].antivideo && m.mtype) {
			if (m.mtype === "videoMessage") {
				if (isCreator || isAdmins || !isBotAdmins) {
				} else {
					return haruka.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant } });
				}
			}
		}

		if (db.data.chats[m.chat].antisticker && m.mtype) {
			if (m.mtype === "stickerMessage") {
				if (isCreator || isAdmins || !isBotAdmins) {
				} else {
					return haruka.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant } });
				}
			}
		}

		if (db.data.chats[m.chat].antiaudio && m.mtype) {
			if (m.mtype === "audioMessage") {
				if (isCreator || isAdmins || !isBotAdmins) {
				} else {
					return haruka.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant } });
				}
			}
		}

		if (db.data.chats[m.chat].antilocation && m.mtype) {
			if (m.mtype === "locationMessage") {
				if (isCreator || isAdmins || !isBotAdmins) {
				} else {
					return haruka.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant } });
				}
			}
		}

		if (db.data.chats[m.chat].antidocument && m.mtype) {
			if (m.mtype === "documentMessage") {
				if (isCreator || isAdmins || !isBotAdmins) {
				} else {
					return haruka.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant } });
				}
			}
		}

		if (db.data.chats[m.chat].anticontact && m.mtype) {
			if (m.mtype === "contactMessage") {
				if (isCreator || isAdmins || !isBotAdmins) {
				} else {
					return haruka.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant } });
				}
			}
		}

		if (db.data.chats[m.chat].badword) {
			for (let bak of bad) {
				if (budy === bak) {
					let baduser = await db.data.users[m.sender].badword;
					haruka.sendMessage(m.chat, {
						delete: {
							remoteJid: m.chat,
							fromMe: false,
							id: m.key.id,
							participant: m.key.participant
						}
					});
				}
			}
		}

		if (db.data.settings[botNumber].autodownload && !m.key.fromMe && !isCmd) {
			try {
				if (budy.match(`instagram.com`)) {
					await haruka.sendMessage(m.chat, { react: { text: "⏱️", key: m.key } });
					let anu = await fetchJson(`https://api.junn4.my.id/download/instagram?url=${budy}`);
					haruka.sendMessage(m.chat, { video: { url: anu.result.media }, caption: `Auto Download ✅` }, { quoted: m });
					await haruka.sendMessage(m.chat, { react: { text: "☑️", key: m.key } });
				} else if (budy.match(`tiktok.com`)) {
					await haruka.sendMessage(m.chat, { react: { text: "⏱️", key: m.key } });
					let anu = await fetchJson(`https://api.junn4.my.id/download/tiktok?url=${budy}`);
					haruka.sendMessage(m.chat, { video: { url: anu.result.Medium.url }, caption: `Auto Download ✅` }, { quoted: m });
					await haruka.sendMessage(m.chat, { react: { text: "☑️", key: m.key } });
				} else if (budy.match(`facebook.com`)) {
					await haruka.sendMessage(m.chat, { react: { text: "⏱️", key: m.key } });
					let anu = await fetchJson(`https://api.junn4.my.id/download/facebook?url=${budy}`);
					haruka.sendMessage(m.chat, { video: { url: anu.result.video_sd }, caption: `Auto Download ✅` }, { quoted: m });
					await haruka.sendMessage(m.chat, { react: { text: "☑️", key: m.key } });
				} else if (budy.match(`youtube.com|youtu.be`)) {
					await haruka.sendMessage(m.chat, { react: { text: "⏱️", key: m.key } });
					let anu = await fetchJson(`https://api.junn4.my.id/download/ytmp4?url=${budy}`);
					haruka.sendMessage(m.chat, { video: { url: anu.result.result }, caption: `` }, { quoted: m });
					await haruka.sendMessage(m.chat, { react: { text: "☑️", key: m.key } });
				}
			} catch (err) {
				await haruka.sendMessage(m.chat, { react: { text: "✖️", key: m.key } });
			}
		}

		if (db.data.settings[botNumber].autosticker) {
			if (m.key.fromMe) return;
			if (m.isGroup) return;

			if (/image/.test(mime) && !/webp/.test(mime)) {
				let mediac = await quoted.download();
				haruka.sendImageAsSticker(m.chat, mediac, m, { packname: global.packname, author: global.author });
			} else if (/video/.test(mime)) {
				if ((quoted.msg || quoted).seconds > 11) return;
				let mediac = await quoted.download();
				haruka.sendVideoAsSticker(m.chat, mediac, m, { packname: global.packname, author: global.author });
			}
		}

		if (db.data.settings[botNumber].safesearch && command && !m.key.fromMe && !isCreator) {
			if (budy.match(/colmek|coli|desah|bokep|tobrut|seksi|sex|sexy|memek|kontol|titit|telanjang|ngentod|ngentot|ngewe|ewe|ewean/i)) {
				newReply(`🚫 Ups, kata tersebut dilarang di sini ya, kak! Mari jaga lingkungan chat ini tetap positif dan nyaman untuk semua orang. 😊`);
				return;
			}
		}

		if (!isCreator && !m.key.fromMe && m.message) {
			if (budy.match(`@${ownerNumber}`)) {
				await haruka.sendMessage(m.chat, { 
					text: `👋 Hai kak! Sepertinya kakak lagi butuh bantuan dari *${ownerName}*, ya?\n\nOwner mungkin lagi sibuk nih, tapi tenang aja, nanti bakal dibales secepatnya! ✨ Sabar yaa~ 😊`
				}, {
					quoted: m
				});
			}
		};

		if (db.data.chats[m.chat].antilinkgc) {
			if (budy.match(`chat.whatsapp.com`)) {
				if (isAdmins) return
				if (m.key.fromMe) return
				if (isCreator) return

				await haruka.sendMessage(m.chat, {
					delete: {
						remoteJid: m.chat,
						fromMe: false,
						id: m.key.id,
						participant: m.key.participant
					}
				});
			}
		}

		if (db.data.chats[m.chat].antilink) {
			if (budy.match('http') && budy.match('https')) {
				if (isAdmins) return
				if (m.key.fromMe) return
				if (isCreator) return

				await haruka.sendMessage(m.chat, {
					delete: {
						remoteJid: m.chat,
						fromMe: false,
						id: m.key.id,
						participant: m.key.participant
					}
				});
			}
		}

		if (m.isGroup) {
			if (db.data.chats[m.chat].mute && !isCreator) {
				return
			}
		}

		const feature = () => {
			var mytext = fs.readFileSync("./case.js").toString();
			var numUpper = (mytext.match(/case '/g) || []).length;
			return numUpper;
		}

		for (let zeeone of audionye) {
			if (budy === zeeone) {
				let audiobuffy = fs.readFileSync(`./media/${zeeone}.mp3`);
				haruka.sendMessage(m.chat, { audio: audiobuffy, mimetype: 'audio/mp4', ptt: true }, { quoted: m });
			}
		}

		for (let zeeone of setiker) {
			if (budy === zeeone) {
				let stickerbuffy = fs.readFileSync(`./media/${zeeone}.webp`);
				haruka.sendMessage(m.chat, { sticker: stickerbuffy }, { quoted: m });
			}
		}

		for (let zeeone of imagenye) {
			if (budy === zeeone) {
				let imagebuffy = fs.readFileSync(`./media/${zeeone}.jpg`);
				haruka.sendMessage(m.chat, { image: imagebuffy }, { quoted: m });
			}
		}

		for (let zeeone of videonye) {
			if (budy === zeeone) {
				let videobuffy = fs.readFileSync(`./media/${zeeone}.mp4`);
				haruka.sendMessage(m.chat, { video: videobuffy }, { quoted: m });
			}
		}

		if (m.isGroup && db.data.chats[m.chat].liststore[body]) {
			let teks = db.data.chats[m.chat].liststore[body].response
			if (db.data.chats[m.chat].liststore[body].img) {
				haruka.sendMessage(m.chat, {
					image: {
						url: db.data.chats[m.chat].liststore[body].img
					},
					caption: teks
				}, {
					quoted: m
				})
			} else if (db.data.chats[m.chat].liststore[body].video) {
				haruka.sendMessage(m.chat, {
					video: {
						url: db.data.chats[m.chat].liststore[body].video
					},
					caption: teks
				}, {
					quoted: m
				})
			} else {
				const contentText = {
					text: teks,
					contextInfo: {
						mentionedJid: [m.sender],
						forwardingScore: 9999999,
						isForwarded: true,
						externalAdReply: {
							showAdAttribution: true,
							containsAutoReply: true,
							title: `Store List 🛍️`,
							body: botName,
							previewType: "PHOTO",
							thumbnailUrl: `https://pomf2.lain.la/f/sdzl7dc2.jpg`,
							sourceUrl: wagc
						}
					}
				};
				haruka.sendMessage(m.chat, contentText, {
					quoted: m,
				});
			}
		}

		if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in db.data.sticker)) {
			let hash = db.data.sticker[m.msg.fileSha256.toString('base64')];
			let { text, mentionedJid } = hash;
			let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
				userJid: haruka.user.id,
				quoted: m.quoted && m.quoted.fakeObj
			});
			messages.key.fromMe = areJidsSameUser(m.sender, haruka.user.id);
			messages.key.id = m.key.id;
			messages.pushName = m.pushName;
			if (m.isGroup) messages.participant = m.sender;
			let msg = {
				...chatUpdate,
				messages: [proto.WebMessageInfo.fromObject(messages)],
				type: 'append'
			};
			haruka.ev.emit('messages.upsert', msg);
		}

		if (m.mtype === "interactiveResponseMessage") {
			let msg = m.message[m.mtype]|| m.msg
			if (msg.nativeFlowResponseMessage&& !m.isBot) { 
				let { id } = JSON.parse(msg.nativeFlowResponseMessage.paramsJson) || {}
				if (id) {
					let emit_msg = { 
						key : { ...m.key },
						message: { extendedTextMessage : { text : id } },
						pushName : m.pushName,
						messageTimestamp: m.messageTimestamp || 754785898978
					}
					return haruka.ev.emit("messages.upsert" , {messages : [ emit_msg ], type : "notify"})
				}
			}
		}

		if (m.message && !isUser) {
			userNumber.push(m.sender)
			fs.writeFileSync('./src/data/role/user.json', JSON.stringify(userNumber, null, 2))
		}

		if (m.isGroup && !m.key.fromMe) {
			let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
			for (let ment of mentionUser) {
				if (checkAfkUser(ment, afk)) {
					let getId2 = getAfkId(ment, afk)
					let getReason2 = getAfkReason(getId2, afk)
					let getTimee = Date.now() - getAfkTime(getId2, afk)
					let anu2 = ms(getTimee)
					newReply(
						`Eh, jangan di-tag dulu ya! Dia lagi AFK nih~ 🤭\n\n` +
						`*Alasan:* ${getReason2}\n` +
						`*Udah sejak:* ${anu2.hours} Jam, ${anu2.minutes} Menit, ${anu2.seconds} Detik`
					)
				}
			}

			if (checkAfkUser(m.sender, afk)) {
				let getId = getAfkId(m.sender, afk)
				let getReason = getAfkReason(getId, afk)
				let getTime = Date.now() - getAfkTime(getId, afk)
				let anu = ms(getTime)
				afk.splice(getAfkPosition(m.sender, afk), 1)
				fs.writeFileSync('./src/afk.json', JSON.stringify(afk))
				haruka.sendTextWithMentions(
					m.chat, 
					`Yeay! @${m.sender.split('@')[0]} udah balik dari AFK nih~ 🥳\n\n` +
					`*Alasan:* ${getReason}\n` +
					`*Selama:* ${anu.hours} Jam, ${anu.minutes} Menit, ${anu.seconds} Detik`, 
					m
				)
			}
		}

		haruka.autoAnime = haruka.autoAnime ? haruka.autoAnime : {}
		let id = '120363190404312751@g.us';
		if (!(id in haruka.autoAnime)) {
			let jadwalAnime = {
				pagi: "06:00",
				siang: "12:00",
				sore: "18:15",
				malam: "19:00",
				tengah_malam: "23:00",
			}
			const date = new Date((new Date).toLocaleString("en-US", {
				timeZone: "Asia/Jakarta"
			}));
			const hours = date.getHours();
			const minutes = date.getMinutes();
			const timeNow = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;

			let data = await otakuDesu.ongoing();
			let response = `「 *JADWAL ANIME* 」\n\n`
			for (let i of data) {
				response += `*💬 Judul :* ${i.title}\n`
				response += `*📺 Eps :* ${i.episode}\n`
				response += `*🔗 URL :* ${i.link}\n\n`
			}

			for (const [anime, waktu] of Object.entries(jadwalAnime)) {
				if (timeNow === waktu) {
					haruka.autoAnime[id] = [
						haruka.sendMessage(id, {
							text: response,
							contextInfo: {
								isForwarded: true,
								forwardingScore: 100,
								externalAdReply: {
									showAdAttribution: true,
									title: 'Ini pemberitahuan Anime terbaru!',
									mediaType: 1,
									previewType: 1,
									body: 'Halo Kak 👋',
									thumbnail: thumb,
									renderLargerThumbnail: false,
									mediaUrl: 'https://api.khaliddesu.my.id',
									sourceUrl: 'https://api.khaliddesu.my.id'
								}
							}
						}),
						setTimeout(() => {
							delete haruka.autoAnime[id]
						}, 60000)
					]
				}
			}
		};

		haruka.autosholat = haruka.autosholat ? haruka.autosholat : {}
		if (!(m.chat in haruka.autosholat)) {
			let jadwalSholat = {
				Fajr: "04:31",
				Dhuhr: "11:45",
				Asr: "15:06",
				Maghrib: "17:39",
				Isha: "19:09",
			}
			const date = new Date((new Date).toLocaleString("en-US", {
				timeZone: "Asia/Jakarta"
			}));
			const hours = date.getHours();
			const minutes = date.getMinutes();
			const timeNow = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;
			for (const [sholat, waktu] of Object.entries(jadwalSholat)) {
				if (timeNow === waktu) {
					if (sholat === "Fajr") {
						thumbislam = "https://telegra.ph/file/b666be3c20c68d9bd0139.jpg"
					} else if (sholat === "Dhuhr") {
						thumbislam = "https://telegra.ph/file/5295095dad53783b9cd64.jpg"
					} else if (sholat === "Asr") {
						thumbislam = "https://telegra.ph/file/c0e1948ad75a2cba22845.jpg"
					} else if (sholat === "Maghrib") {
						thumbislam = "https://telegra.ph/file/0082ad9c0e924323e08a6.jpg"
					} else if (sholat === "Isha") {
						thumbislam = "https://telegra.ph/file/fd141833a983afa0a8412.jpg"
					} else {
						thumbislam = "https://telegra.ph/file/687fd664f674e90ae1079.jpg"
					}
					haruka.autosholat[m.chat] = [
						haruka.sendMessage(m.chat, {
							audio: {
								url: "https://github.com/PhysicalAbility/Media/raw/master/audio.mp3"
							},
							mimetype: 'audio/mpeg',
							contextInfo: {
								externalAdReply: {
									title: `Waktu ${sholat} telah tiba, ambilah air wudhu dan segeralah shalat🙂`,
									body: "untuk wilayah Semarang dan sekitarnya",
									mediaType: 1,
									previewType: 0,
									renderLargerThumbnail: true,
									thumbnailUrl: thumbislam,
									sourceUrl: wagc
								}
							}
						}, {
							quoted: m
						}),
						setTimeout(() => {
							delete haruka.autosholat[m.chat]
						}, 57000)
					]
				}
			}
		};

		if (isCmd) {
			if (command) {
				if (isFiltered(m.sender) && !isCreator && !m.key.fromMe) return newReply(`Don't spam! please give pause for a few seconds.`)
				addFilter(m.sender);
			}
		}

		if (isCmd) {
			if (command) {
				const code = fs.readFileSync("./case.js", "utf8")
				var regex = /case\s+'([^']+)':/g;
				var matches = [];
				var match;
				while ((match = regex.exec(code))) {
					matches.push(match[1]);
				}
				const help = Object.values(matches).flatMap(v => v ?? []).map(entry => entry.trim().split(' ')[0].toLowerCase()).filter(Boolean);
				if (!help.includes(command) && !budy.startsWith('$ ') && !budy.startsWith('> ')) {
					let mean = didyoumean(command, help);
					let sim = similarity(command, mean);
					let similarityPercentage = parseInt(sim * 100);
					if (mean && command.toLowerCase() !== mean.toLowerCase()) {
						const pesanTemplate = `*Eits, kayaknya ada yang salah nih...* 😅\n_Mungkin yang kakak maksud itu:_\n\n➠ *${prefix + mean}* (${similarityPercentage}%)\n\n_Coba ketuk *Menu* buat lihat daftar lengkapnya ya!_ 🌟`;
						haruka.sendMessage(m.chat,{
							image: thumb,
							caption: pesanTemplate,
							footer: botName,
							buttons: [
								{
									buttonId: `${prefix + mean}`,
									buttonText: {
										displayText: `${prefix + mean}`
									}
								},
								{
									buttonId: `${prefix}menu`,
									buttonText: {
										displayText: "Menu"
									}
								}
							],
							viewOnce: true,
						}, {
							quoted: m
						});
					}
				}
			}
		};

		const JwbTrue = (tebak, exp, tambahan) => {
			let teks = `*🎮 ${tebak} 🎮*\n\nKiw Kiww Bener 🎉\n+Rp ${exp} saldo` + tambahan
			const context = {
				text: teks,
				contextInfo: {
					externalAdReply: {
						title: `Jawaban Benar🥳`,
						body: tebak,
						previewType: "PHOTO",
						thumbnailUrl: `https://telegra.ph/file/f8749fccf9b3320cd6307.png`,
						sourceUrl: wagc
					}
				}
			};
			return haruka.sendMessage(m.chat, context, {
				quoted: m,
			});
		}

		const waktuHabis = (jawaban) => {
			let teks = `Kroco, Waktu Abis🥳\n\n*Jawaban:*\n${jawaban}`
			const context = {
				text: teks,
				contextInfo: {
					externalAdReply: {
						title: `Waktu Habis ⏰`,
						body: "Dasar Kroco",
						previewType: "PHOTO",
						thumbnailUrl: `https://telegra.ph/file/030ebfc99f9cb5be7e8cb.png`,
						sourceUrl: wagc
					}
				}
			};
			return haruka.sendMessage(m.chat, context, {
				quoted: m,
			});
		}

		if (tebakgame[m.chat] && !isCmd && m.quoted) {
			if (m.quoted.id == tebakgame[m.chat][0].key.id) {
				let json = JSON.parse(JSON.stringify(tebakgame[m.chat][1]))
				jawaban = json.jawaban.toLowerCase().trim()
				if (budy.toLowerCase() == jawaban) {
					db.data.users[m.sender].uang += tebakgame[m.chat][2]
					JwbTrue("Tebak Game", tebakgame[m.chat][2], `\n\nKirim perintah .tebakgame\nuntuk bermain lagi 🎮`)
					clearTimeout(tebakgame[m.chat][3])
					delete tebakgame[m.chat]
				} else if (similarity(budy.toLowerCase(), jawaban) >= threshold)
					newReply(`_Ya, Dikit Lagi!_`)
				else emote('❌');
			}
		}

		if (tebakhero[m.chat] && !isCmd && m.quoted) {
			if (m.quoted.id == tebakhero[m.chat][0].key.id) {
				let json = JSON.parse(JSON.stringify(tebakhero[m.chat][1]))
				jawaban = json.jawaban.toLowerCase().trim()
				if (budy.toLowerCase() == jawaban) {
					db.data.users[m.sender].uang += tebakhero[m.chat][2]
					JwbTrue("Tebak Hero", tebakhero[m.chat][2], `\n\nKirim perintah .tebakhero\nuntuk bermain lagi 🎮`)
					clearTimeout(tebakhero[m.chat][3])
					delete tebakhero[m.chat]
				} else if (similarity(budy.toLowerCase(), jawaban) >= threshold)
					newReply(`_Ya, Dikit Lagi!_`)
				else emote('❌');
			}
		}

		if (tebakff[m.chat] && !isCmd && m.quoted) {
			if (m.quoted.id == tebakff[m.chat][0].key.id) {
				let json = JSON.parse(JSON.stringify(tebakff[m.chat][1]))
				jawaban = json.jawaban.toLowerCase().trim()
				if (budy.toLowerCase() == jawaban) {
					db.data.users[m.sender].uang += tebakff[m.chat][2]
					JwbTrue("Tebak Free Fire", tebakff[m.chat][2], `\n\nKirim perintah .tebakff\nuntuk bermain lagi 🎮`)
					clearTimeout(tebakff[m.chat][3])
					delete tebakff[m.chat]
				} else if (similarity(budy.toLowerCase(), jawaban) >= threshold)
					newReply(`_Ya, Dikit Lagi!_`)
				else emote('❌');
			}
		}

		if (tebakkabupaten[m.chat] && !isCmd && m.quoted) {
			if (m.quoted.id == tebakkabupaten[m.chat][0].key.id) {
				let json = JSON.parse(JSON.stringify(tebakkabupaten[m.chat][1]))
				jawaban = json.title.toLowerCase().trim()
				if (budy.toLowerCase() == jawaban) {
					db.data.users[m.sender].uang += tebakkabupaten[m.chat][2]
					JwbTrue("Tebak Kabupaten", tebakkabupaten[m.chat][2], `\n\nKirim perintah .tebakkabupaten\nuntuk bermain lagi 🎮`)
					clearTimeout(tebakkabupaten[m.chat][3])
					delete tebakkabupaten[m.chat]
				} else if (similarity(budy.toLowerCase(), jawaban) >= threshold)
					newReply(`_Ya, Dikit Lagi!_`)
				else emote('❌');
			}
		}

		if (tebakjkt48[m.chat] && !isCmd && m.quoted) {
			if (m.quoted.id == tebakjkt48[m.chat][0].key.id) {
				let json = JSON.parse(JSON.stringify(tebakjkt48[m.chat][1]))
				jawaban = json.name.toLowerCase().trim()
				if (budy.toLowerCase() == jawaban) {
					db.data.users[m.sender].uang += tebakjkt48[m.chat][2]
					JwbTrue("Tebak JKT48", tebakjkt48[m.chat][2], `\n\nKirim perintah .tebakjkt48\nuntuk bermain lagi 🎮`)
					clearTimeout(tebakjkt48[m.chat][3])
					delete tebakjkt48[m.chat]
				} else if (similarity(budy.toLowerCase(), jawaban) >= threshold)
					newReply(`_Ya, Dikit Lagi!_`)
				else emote('❌');
			}
		}

		if (tebakhewan[m.chat] && !isCmd && m.quoted) {
			if (m.quoted.id == tebakhewan[m.chat][0].key.id) {
				let json = JSON.parse(JSON.stringify(tebakhewan[m.chat][1]))
				jawaban = json.title.toLowerCase().trim()
				if (budy.toLowerCase() == jawaban) {
					db.data.users[m.sender].uang += tebakhewan[m.chat][2]
					JwbTrue("Tebak Hewan", tebakhewan[m.chat][2], `\n\nKirim perintah .tebakhewan\nuntuk bermain lagi 🎮`)
					clearTimeout(tebakhewan[m.chat][3])
					delete tebakhewan[m.chat]
				} else if (similarity(budy.toLowerCase(), jawaban) >= threshold)
					newReply(`_Ya, Dikit Lagi!_`)
				else emote('❌');
			}
		}

		if (tebakml[m.chat] && !isCmd && m.quoted) {
			if (m.quoted.id == tebakml[m.chat][0].key.id) {
				let json = JSON.parse(JSON.stringify(tebakml[m.chat][1]))
				jawaban = json.title.toLowerCase().trim()
				if (budy.toLowerCase() == jawaban) {
					db.data.users[m.sender].uang += tebakml[m.chat][2]
					JwbTrue("Tebak Sound ML", tebakml[m.chat][2], `\n\nKirim perintah .tebakml\nuntuk bermain lagi 🎮`)
					clearTimeout(tebakml[m.chat][3])
					delete tebakml[m.chat]
				} else if (similarity(budy.toLowerCase(), jawaban) >= threshold)
					newReply(`_Ya, Dikit Lagi!_`)
				else emote('❌');
			}
		}

		if (tebakchara[m.chat] && !isCmd && m.quoted) {
			if (m.quoted.id == tebakchara[m.chat][0].key.id) {
				let json = JSON.parse(JSON.stringify(tebakchara[m.chat][1]))
				jawaban = json.name.toLowerCase().trim()
				if (budy.toLowerCase() == jawaban) {
					db.data.users[m.sender].uang += tebakchara[m.chat][2]
					JwbTrue("Tebak Anime", tebakchara[m.chat][2], `\n\nKirim perintah .tebakchara\nuntuk bermain lagi 🎮`)
					clearTimeout(tebakchara[m.chat][3])
					delete tebakchara[m.chat]
				} else if (similarity(budy.toLowerCase(), jawaban) >= threshold)
					newReply(`_Ya, Dikit Lagi!_`)
				else emote('❌');
			}
		}

		if (tebaklogo[m.chat] && !isCmd && m.quoted) {
			if (m.quoted.id == tebaklogo[m.chat][0].key.id) {
				let json = JSON.parse(JSON.stringify(tebaklogo[m.chat][1]))
				jawaban = json.jawaban.toLowerCase().trim()
				if (budy.toLowerCase() == jawaban) {
					db.data.users[m.sender].uang += tebaklogo[m.chat][2]
					JwbTrue("Tebak Logo", tebaklogo[m.chat][2], `\n\nKirim perintah .tebaklogo\nuntuk bermain lagi 🎮`)
					clearTimeout(tebaklogo[m.chat][3])
					delete tebaklogo[m.chat]
				} else if (similarity(budy.toLowerCase(), jawaban) >= threshold)
					newReply(`_Ya, Dikit Lagi!_`)
				else emote('❌');
			}
		}

		if (tebakaplikasi[m.chat] && !isCmd && m.quoted) {
			if (m.quoted.id == tebakaplikasi[m.chat][0].key.id) {
				let json = JSON.parse(JSON.stringify(tebakaplikasi[m.chat][1]))
				jawaban = json.jawaban.toLowerCase().trim()
				if (budy.toLowerCase() == jawaban) {
					db.data.users[m.sender].uang += tebakaplikasi[m.chat][2]
					JwbTrue("Tebak Aplikasi", tebakaplikasi[m.chat][2], `\n\nKirim perintah .tebakaplikasi\nuntuk bermain lagi 🎮`)
					clearTimeout(tebakaplikasi[m.chat][3])
					delete tebakaplikasi[m.chat]
				} else if (similarity(budy.toLowerCase(), jawaban) >= threshold)
					newReply(`_Ya, Dikit Lagi!_`)
				else emote('❌');
			}
		}

		if (tebakgambar[m.chat] && !isCmd && m.quoted) {
			if (m.quoted.id == tebakgambar[m.chat][0].key.id) {
				let json = JSON.parse(JSON.stringify(tebakgambar[m.chat][1]))
				jawaban = json.jawaban.toLowerCase().trim()
				if (budy.toLowerCase() == jawaban) {
					db.data.users[m.sender].uang += tebakgambar[m.chat][2]
					JwbTrue("Tebak Gambar", tebakgambar[m.chat][2], `\n\nKirim perintah .tebakgambar\nuntuk bermain lagi 🎮`)
					clearTimeout(tebakgambar[m.chat][3])
					delete tebakgambar[m.chat]
				} else if (similarity(budy.toLowerCase(), jawaban) >= threshold)
					newReply(`_Ya, Dikit Lagi!_`)
				else emote('❌');
			}
		}

		if (tebakkata[m.chat] && !isCmd && m.quoted) {
			if (m.quoted.id == tebakkata[m.chat][0].key.id) {
				let json = JSON.parse(JSON.stringify(tebakkata[m.chat][1]))
				jawaban = json.jawaban.toLowerCase().trim()
				if (budy.toLowerCase() == jawaban) {
					db.data.users[m.sender].uang += tebakkata[m.chat][2]
					JwbTrue("Tebak Kata", tebakkata[m.chat][2], `\n\nKirim perintah .tebakkata\nuntuk bermain lagi 🎮`)
					clearTimeout(tebakkata[m.chat][3])
					delete tebakkata[m.chat]
				} else if (similarity(budy.toLowerCase(), jawaban) >= threshold)
					newReply(`_Ya, Dikit Lagi!_`)
				else emote('❌');
			}
		}

		if (asahotak[m.chat] && !isCmd && m.quoted) {
			if (m.quoted.id == asahotak[m.chat][0].key.id) {
				let json = JSON.parse(JSON.stringify(asahotak[m.chat][1]))
				jawaban = json.jawaban.toLowerCase().trim()
				if (budy.toLowerCase() == jawaban) {
					db.data.users[m.sender].uang += asahotak[m.chat][2]
					JwbTrue("Asah Otak", asahotak[m.chat][2], `\n\nKirim perintah .asahotak\nuntuk bermain lagi 🎮`)
					clearTimeout(asahotak[m.chat][3])
					delete asahotak[m.chat]
				} else if (similarity(budy.toLowerCase(), jawaban) >= threshold)
					newReply(`_Ya, Dikit Lagi!_`)
				else emote('❌');
			}
		}

		if (lengkapikalimat[m.chat] && !isCmd && m.quoted) {
			if (m.quoted.id == lengkapikalimat[m.chat][0].key.id) {
				let json = JSON.parse(JSON.stringify(lengkapikalimat[m.chat][1]))
				jawaban = json.jawaban.toLowerCase().trim()
				if (budy.toLowerCase() == jawaban) {
					db.data.users[m.sender].uang += lengkapikalimat[m.chat][2]
					JwbTrue("Lengkapi Kalimat", lengkapikalimat[m.chat][2], `\n\nKirim perintah .lengkapikalimat\nuntuk bermain lagi 🎮`)
					clearTimeout(lengkapikalimat[m.chat][3])
					delete lengkapikalimat[m.chat]
				} else if (similarity(budy.toLowerCase(), jawaban) >= threshold)
					newReply(`_Ya, Dikit Lagi!_`)
				else emote('❌');
			}
		}

		if (tebakbendera[m.chat] && !isCmd && m.quoted) {
			if (m.quoted.id == tebakbendera[m.chat][0].key.id) {
				let json = JSON.parse(JSON.stringify(tebakbendera[m.chat][1]))
				jawaban = json.name.toLowerCase().trim()
				if (budy.toLowerCase() == jawaban) {
					db.data.users[m.sender].uang += tebakbendera[m.chat][2]
					JwbTrue("Tebak Bendera", tebakbendera[m.chat][2], `\n\nKirim perintah .tebakbendera\nuntuk bermain lagi 🎮`)
					clearTimeout(tebakbendera[m.chat][3])
					delete tebakbendera[m.chat]
				} else if (similarity(budy.toLowerCase(), jawaban) >= threshold)
					newReply(`_Ya, Dikit Lagi!_`)
				else emote('❌');
			}
		}

		if (caklontong[m.chat] && !isCmd && m.quoted) {
			if (m.quoted.id == caklontong[m.chat][0].key.id) {
				let json = JSON.parse(JSON.stringify(caklontong[m.chat][1]))
				jawaban = json.jawaban.toLowerCase().trim()
				if (budy.toLowerCase() == jawaban) {
					db.data.users[m.sender].uang += caklontong[m.chat][2]
					JwbTrue("Cak Lontong", caklontong[m.chat][2], `\n\nKirim perintah .caklontong\nuntuk bermain lagi 🎮`)
					clearTimeout(caklontong[m.chat][3])
					delete caklontong[m.chat]
				} else if (similarity(budy.toLowerCase(), jawaban) >= threshold)
					newReply(`_Ya, Dikit Lagi!_`)
				else emote('❌');
			}
		}

		if (susunkata[m.chat] && !isCmd && m.quoted) {
			if (m.quoted.id == susunkata[m.chat][0].key.id) {
				let json = JSON.parse(JSON.stringify(susunkata[m.chat][1]))
				jawaban = json.jawaban.toLowerCase().trim()
				if (budy.toLowerCase() == jawaban) {
					db.data.users[m.sender].uang += susunkata[m.chat][2]
					JwbTrue("Susun Kata", susunkata[m.chat][2], `\n\nKirim perintah .susunkata\nuntuk bermain lagi 🎮`)
					clearTimeout(susunkata[m.chat][3])
					delete susunkata[m.chat]
				} else if (similarity(budy.toLowerCase(), jawaban) >= threshold)
					newReply(`_Ya, Dikit Lagi!_`)
				else emote('❌');
			}
		}

		if (tebakkalimat[m.chat] && !isCmd && m.quoted) {
			if (m.quoted.id == tebakkalimat[m.chat][0].key.id) {
				let json = JSON.parse(JSON.stringify(tebakkalimat[m.chat][1]))
				jawaban = json.jawaban.toLowerCase().trim()
				if (budy.toLowerCase() == jawaban) {
					db.data.users[m.sender].uang += tebakkalimat[m.chat][2]
					JwbTrue("Tebak Kalimat", tebakkalimat[m.chat][2], `\n\nKirim perintah .tebakkalimat\nuntuk bermain lagi 🎮`)
					clearTimeout(tebakkalimat[m.chat][3])
					delete tebakkalimat[m.chat]
				} else if (similarity(budy.toLowerCase(), jawaban) >= threshold)
					newReply(`_Ya, Dikit Lagi!_`)
				else emote('❌');
			}
		}

		if (siapaaku[m.chat] && !isCmd && m.quoted) {
			if (m.quoted.id == siapaaku[m.chat][0].key.id) {
				let json = JSON.parse(JSON.stringify(siapaaku[m.chat][1]))
				jawaban = json.jawaban.toLowerCase().trim()
				if (budy.toLowerCase() == jawaban) {
					db.data.users[m.sender].uang += siapaaku[m.chat][2]
					JwbTrue("Tebak Siapa", siapaaku[m.chat][2], `\n\nKirim perintah .tebaksiapa\nuntuk bermain lagi 🎮`)
					clearTimeout(siapaaku[m.chat][3])
					delete siapaaku[m.chat]
				} else if (similarity(budy.toLowerCase(), jawaban) >= threshold)
					newReply(`_Ya, Dikit Lagi!_`)
				else emote('❌');
			}
		}

		if (tekateki[m.chat] && !isCmd && m.quoted) {
			if (m.quoted.id == tekateki[m.chat][0].key.id) {
				let json = JSON.parse(JSON.stringify(tekateki[m.chat][1]))
				jawaban = json.jawaban.toLowerCase().trim()
				if (budy.toLowerCase() == jawaban) {
					db.data.users[m.sender].uang += tekateki[m.chat][2]
					JwbTrue("Teka Teki", tekateki[m.chat][2], `\n\nKirim perintah .tekateki\nuntuk bermain lagi 🎮`)
					clearTimeout(tekateki[m.chat][3])
					delete tekateki[m.chat]
				} else if (similarity(budy.toLowerCase(), jawaban) >= threshold)
					newReply(`_Ya, Dikit Lagi!_`)
				else emote('❌');
			}
		}

		if (tebakkimia[m.chat] && !isCmd && m.quoted) {
			if (m.quoted.id == tebakkimia[m.chat][0].key.id) {
				let json = JSON.parse(JSON.stringify(tebakkimia[m.chat][1]))
				jawaban = json.unsur.toLowerCase().trim()
				if (budy.toLowerCase() == jawaban) {
					db.data.users[m.sender].uang += tebakkimia[m.chat][2]
					JwbTrue("Teka Kimia", tebakkimia[m.chat][2], `\n\nKirim perintah .tebakkimia\nuntuk bermain lagi 🎮`)
					clearTimeout(tebakkimia[m.chat][3])
					delete tebakkimia[m.chat]
				} else if (similarity(budy.toLowerCase(), jawaban) >= threshold)
					newReply(`_Ya, Dikit Lagi!_`)
				else emote('❌');
			}
		}

		if (tebaklirik[m.chat] && !isCmd && m.quoted) {
			if (m.quoted.id == tebaklirik[m.chat][0].key.id) {
				let json = JSON.parse(JSON.stringify(tebaklirik[m.chat][1]))
				jawaban = json.jawaban.toLowerCase().trim()
				if (budy.toLowerCase() == jawaban) {
					db.data.users[m.sender].uang += tebaklirik[m.chat][2]
					JwbTrue("Teka Lirik", tebaklirik[m.chat][2], `\n\nKirim perintah .tebaklirik\nuntuk bermain lagi 🎮`)
					clearTimeout(tebaklirik[m.chat][3])
					delete tebaklirik[m.chat]
				} else if (similarity(budy.toLowerCase(), jawaban) >= threshold)
					newReply(`_Ya, Dikit Lagi!_`)
				else emote('❌');
			}
		}

		if (tebaktebakan[m.chat] && !isCmd && m.quoted) {
			if (m.quoted.id == tebaktebakan[m.chat][0].key.id) {
				let json = JSON.parse(JSON.stringify(tebaktebakan[m.chat][1]))
				jawaban = json.jawaban.toLowerCase().trim()
				if (budy.toLowerCase() == jawaban) {
					db.data.users[m.sender].uang += tebaktebakan[m.chat][2]
					JwbTrue("Teka Tebakan", tebaktebakan[m.chat][2], `\n\nKirim perintah .tebaktebakan\nuntuk bermain lagi 🎮`)
					clearTimeout(tebaktebakan[m.chat][3])
					delete tebaktebakan[m.chat]
				} else if (similarity(budy.toLowerCase(), jawaban) >= threshold)
					newReply(`_Ya, Dikit Lagi!_`)
				else emote('❌');
			}
		}

		async function cekgame(gamejid) {
			if (tekateki[gamejid]) {
				haruka.sendMessage(gamejid, {
					text: "Soal ini belum selesai"
				}, {
					quoted: tekateki[gamejid][0]
				})
				return true
			} else if (caklontong[gamejid]) {
				haruka.sendMessage(gamejid, {
					text: "Soal ini belum selesai"
				}, {
					quoted: caklontong[gamejid][0]
				})
				return true
			} else if (susunkata[gamejid]) {
				haruka.sendMessage(gamejid, {
					text: "Soal ini belum selesai"
				}, {
					quoted: susunkata[gamejid][0]
				})
				return true
			} else if (mathgame[gamejid]) {
				haruka.sendMessage(gamejid, {
					text: "Soal Mathgame belum selesai"
				}, {
					quoted: mathgame[gamejid][0]
				})
				return true
			} else if (tebaktebakan[gamejid]) {
				haruka.sendMessage(gamejid, {
					text: "Soal ini belum selesai"
				}, {
					quoted: tebaktebakan[gamejid][0]
				})
				return true
			} else if (tebaklirik[gamejid]) {
				haruka.sendMessage(gamejid, {
					text: "Soal ini belum selesai"
				}, {
					quoted: tebaklirik[gamejid][0]
				})
				return true
			} else if (tebakkimia[gamejid]) {
				haruka.sendMessage(gamejid, {
					text: "Soal ini belum selesai"
				}, {
					quoted: tebakkimia[gamejid][0]
				})
				return true
			} else if (siapaaku[gamejid]) {
				haruka.sendMessage(gamejid, {
					text: "Soal ini belum selesai"
				}, {
					quoted: siapaaku[gamejid][0]
				})
				return true
			} else if (tebakkalimat[gamejid]) {
				haruka.sendMessage(gamejid, {
					text: "Soal ini belum selesai"
				}, {
					quoted: tebakkalimat[gamejid][0]
				})
				return true
			} else if (tebakbendera[gamejid]) {
				haruka.sendMessage(gamejid, {
					text: "Soal ini belum selesai"
				}, {
					quoted: tebakbendera[gamejid][0]
				})
				return true
			} else if (tebakkata[gamejid]) {
				haruka.sendMessage(gamejid, {
					text: "Soal ini belum selesai"
				}, {
					quoted: tebakkata[gamejid][0]
				})
				return true
			} else if (asahotak[gamejid]) {
				haruka.sendMessage(gamejid, {
					text: "Soal ini belum selesai"
				}, {
					quoted: asahotak[gamejid][0]
				})
				return true
			} else if (lengkapikalimat[gamejid]) {
				haruka.sendMessage(gamejid, {
					text: "Soal ini belum selesai"
				}, {
					quoted: lengkapikalimat[gamejid][0]
				})
				return true
			} else if (tebakgame[gamejid]) {
				haruka.sendMessage(gamejid, {
					text: "Soal ini belum selesai"
				}, {
					quoted: tebakgame[gamejid][0]
				})
				return true
			} else if (tebakhero[gamejid]) {
				haruka.sendMessage(gamejid, {
					text: "Soal ini belum selesai"
				}, {
					quoted: tebakhero[gamejid][0]
				})
				return true
			} else if (tebakff[gamejid]) {
				haruka.sendMessage(gamejid, {
					text: "Soal ini belum selesai"
				}, {
					quoted: tebakff[gamejid][0]
				})
				return true
			} else if (tebakkabupaten[gamejid]) {
				haruka.sendMessage(gamejid, {
					text: "Soal ini belum selesai"
				}, {
					quoted: tebakkabupaten[gamejid][0]
				})
				return true
			} else if (tebakjkt48[gamejid]) {
				haruka.sendMessage(gamejid, {
					text: "Soal ini belum selesai"
				}, {
					quoted: tebakjkt48[gamejid][0]
				})
				return true
			} else if (tebakhewan[gamejid]) {
				haruka.sendMessage(gamejid, {
					text: "Soal ini belum selesai"
				}, {
					quoted: tebakhewan[gamejid][0]
				})
				return true
			} else if (tebakml[gamejid]) {
				haruka.sendMessage(gamejid, {
					text: "Soal ini belum selesai"
				}, {
					quoted: tebakml[gamejid][0]
				})
				return true
			} else if (tebakchara[gamejid]) {
				haruka.sendMessage(gamejid, {
					text: "Soal ini belum selesai"
				}, {
					quoted: tebakchara[gamejid][0]
				})
				return true
			} else if (tebaklogo[gamejid]) {
				haruka.sendMessage(gamejid, {
					text: "Soal ini belum selesai"
				}, {
					quoted: tebaklogo[gamejid][0]
				})
				return true
			} else if (tebakaplikasi[gamejid]) {
				haruka.sendMessage(gamejid, {
					text: "Soal ini belum selesai"
				}, {
					quoted: tebakaplikasi[gamejid][0]
				})
				return true
			} else if (tebakgambar[gamejid]) {
				haruka.sendMessage(gamejid, {
					text: "Soal ini belum selesai"
				}, {
					quoted: tebakgambar[gamejid][0]
				})
				return true
			} else {
				return false
			}
		}

		switch (command) {		
			case 'tebakgambar': {
				const gamecek = await cekgame(m.chat)
				if (gamecek) return
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				try {
					let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
					let result = await pickRandom(anu)
					console.log("Jawaban: " + result.jawaban)
					tebakgambar[m.chat] = [
						await haruka.sendMessage(m.chat, {
							image: {
								url: result.img
							},
							caption: `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${result.deskripsi}\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`
						}, {
							quoted: m
						}), result, 250,
						setTimeout(() => {
							if (tebakgambar[m.chat]) {
								waktuHabis(result.jawaban)
								delete tebakgambar[m.chat]
							}
						}, 120000)
					]
				} catch (error) {
					console.log(error);
				}
			}
			break

			case 'tebakgame': {
				const gamecek = await cekgame(m.chat)
				if (gamecek) return
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				try {
					let anu = await fetchJson('https://raw.githubusercontent.com/qisyana/scrape/main/tebakgame.json')
					let result = await pickRandom(anu)
					console.log("Jawaban: " + result.jawaban)
					tebakgame[m.chat] = [
						await haruka.sendMessage(m.chat, {
							image: {
								url: result.img
							},
							caption: `Gambar diatas adalah game?\n\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`
						}, {
							quoted: m
						}), result, 250,
						setTimeout(() => {
							if (tebakgame[m.chat]) {
								waktuHabis(result.jawaban)
								delete tebakgame[m.chat]
							}
						}, 120000)
					]
				} catch (error) {
					console.log(error);
				}
			}
			break

			case 'tebakhero': {
				const gamecek = await cekgame(m.chat)
				if (gamecek) return
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				try {
					let anu = await fetchJson('https://api.haruka.my.id/api/tebakhero')
					let result = anu.result
					console.log("Jawaban: " + result.jawaban)
					tebakhero[m.chat] = [
						await haruka.sendMessage(m.chat, {
							image: {
								url: result.img
							},
							caption: `Gambar diatas adalah hero?\n\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`
						}, {
							quoted: m
						}), result, 250,
						setTimeout(() => {
							if (tebakhero[m.chat]) {
								waktuHabis(result.jawaban)
								delete tebakhero[m.chat]
							}
						}, 120000)
					]
				} catch (error) {
					console.log(error);
				}
			}
			break

			case 'tebakff': {
				const gamecek = await cekgame(m.chat)
				if (gamecek) return
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				try {
					let anu = await fetchJson('https://api.haruka.my.id/api/tebakff')
					let result = anu.result
					console.log("Jawaban: " + result.jawaban)
					tebakff[m.chat] = [
						await haruka.sendMessage(m.chat, {
							image: {
								url: result.img
							},
							caption: `Karakter Apa Ini?\n\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`
						}, {
							quoted: m
						}), result, 250,
						setTimeout(() => {
							if (tebakff[m.chat]) {
								waktuHabis(result.jawaban)
								delete tebakff[m.chat]
							}
						}, 120000)
					]
				} catch (error) {
					console.log(error);
				}
			}
			break

			case 'tebakkabupaten': {
				const gamecek = await cekgame(m.chat)
				if (gamecek) return
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				try {
					let anu = await fetchJson('https://www.haruka.my.id/cdn/game/tebakkabupaten.json')
					let result = await pickRandom(anu)
					console.log("Jawaban: " + result.title)
					tebakkabupaten[m.chat] = [
						await haruka.sendMessage(m.chat, {
							image: {
								url: result.url
							},
							caption: `Logo Kabupaten Manakah ini?\n\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`
						}, {
							quoted: m
						}), result, 250,
						setTimeout(() => {
							if (tebakkabupaten[m.chat]) {
								waktuHabis(result.title)
								delete tebakkabupaten[m.chat]
							}
						}, 120000)
					]
				} catch (error) {
					console.log(error);
				}
			}
			break

			case 'tebakjkt48': {
				const gamecek = await cekgame(m.chat)
				if (gamecek) return
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				try {
					let anu = await fetchJson('https://www.haruka.my.id/cdn/game/memberjkt48.json')
					let result = await pickRandom(anu)
					console.log("Jawaban: " + result.name)
					tebakjkt48[m.chat] = [
						await haruka.sendMessage(m.chat, {
							image: {
								url: result.img
							},
							caption: `Siapakah Nama Member JKT48 Ini?\n\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`
						}, {
							quoted: m
						}), result, 250,
						setTimeout(() => {
							if (tebakjkt48[m.chat]) {
								waktuHabis(result.name)
								delete tebakjkt48[m.chat]
							}
						}, 120000)
					]
				} catch (error) {
					console.log(error);
				}
			}
			break

			case 'tebakhewan': {
				const gamecek = await cekgame(m.chat)
				if (gamecek) return
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				try {
					let anu = await fetchJson('https://www.haruka.my.id/cdn/game/tebakhewan.json')
					let result = await pickRandom(anu)
					console.log("Jawaban: " + result.title)
					tebakhewan[m.chat] = [
						await haruka.sendMessage(m.chat, {
							image: {
								url: result.url
							},
							caption: `Hewan Apakah Ini?\n\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`
						}, {
							quoted: m
						}), result, 250,
						setTimeout(() => {
							if (tebakhewan[m.chat]) {
								waktuHabis(result.title)
								delete tebakhewan[m.chat]
							}
						}, 120000)
					]
				} catch (error) {
					console.log(error);
				}
			}
			break

			case 'tebakhero2':
			case 'tebakml': {
				const gamecek = await cekgame(m.chat)
				if (gamecek) return
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				try {
					let anu = await fetchJson('https://www.haruka.my.id/cdn/game/tebakhero2.json')
					let result = await pickRandom(anu)
					let audio = await pickRandom(result.url)
					console.log("Jawaban: " + result.title)
					let key = await haruka.sendMessage(m.chat, {
						audio: {
							url: audio
						},
						mimetype: 'audio/mpeg',
						ptt: true
					}, {
						quoted: m
					})
					tebakml[m.chat] = [
						await haruka.sendMessage(m.chat, {
							text: `Siapakah Nama Karakter Ini?\n\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`
						}, {
							quoted: key
						}), result, 250,
						setTimeout(() => {
							if (tebakml[m.chat]) {
								waktuHabis(result.title)
								delete tebakml[m.chat]
							}
						}, 120000)
					]
				} catch (error) {
					console.log(error);
				}
			}
			break

			case 'tebakanime':
			case 'tebakchara': {
				const gamecek = await cekgame(m.chat)
				if (gamecek) return
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				try {
					let res = await fetchJson('https://www.haruka.my.id/cdn/game/characters.json')
					let anu = res.data
					let result = await pickRandom(anu)
					console.log("Jawaban: " + result.name)
					tebakchara[m.chat] = [
						await haruka.sendMessage(m.chat, {
							image: {
								url: result.images.jpg.image_url
							},
							caption: `Siapakah Nama Karakter Ini?\n\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`
						}, {
							quoted: m
						}), result, 250,
						setTimeout(() => {
							if (tebakchara[m.chat]) {
								waktuHabis(result.name)
								delete tebakchara[m.chat]
							}
						}, 120000)
					]
				} catch (error) {
					console.log(error);
				}
			}
			break

			case 'tebaklogo': {
				const gamecek = await cekgame(m.chat)
				if (gamecek) return
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				try {
					let anu = await fetchJson('https://www.haruka.my.id/cdn/game/tebaklogo.json')
					let result = await pickRandom(anu)
					console.log("Jawaban: " + result.jawaban)
					tebaklogo[m.chat] = [
						await haruka.sendMessage(m.chat, {
							image: {
								url: result.img
							},
							caption: `*Logo Apa Ini?*\n\n${result.deskripsi}\n\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`
						}, {
							quoted: m
						}), result, 250,
						setTimeout(() => {
							if (tebaklogo[m.chat]) {
								waktuHabis(result.jawaban)
								delete tebaklogo[m.chat]
							}
						}, 120000)
					]
				} catch (error) {
					console.log(error);
				}
			}
			break

			case 'tebakaplikasi': {
				const gamecek = await cekgame(m.chat)
				if (gamecek) return
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				try {
					let anu = await fetchJson('https://www.haruka.my.id/cdn/game/tebakaplikasi.json')
					let result = await pickRandom(anu)
					console.log("Jawaban: " + result.jawaban)
					tebakaplikasi[m.chat] = [
						await haruka.sendMessage(m.chat, {
							image: {
								url: result.image
							},
							caption: `Gambar diatas adalah aplikasi?\n\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`
						}, {
							quoted: m
						}), result, 250,
						setTimeout(() => {
							if (tebakaplikasi[m.chat]) {
								waktuHabis(result.jawaban)
								delete tebakaplikasi[m.chat]
							}
						}, 120000)
					]
				} catch (error) {
					console.log(error);
				}
			}
			break

			case 'tebakkata': {
				const gamecek = await cekgame(m.chat)
				if (gamecek) return
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				try {
					let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
					let result = await pickRandom(anu)
					console.log("Jawaban: " + result.jawaban)
					tebakkata[m.chat] = [
						await haruka.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`, m), result, 250,
						setTimeout(() => {
							if (tebakkata[m.chat]) {
								waktuHabis(result.jawaban)
								delete tebakkata[m.chat]
							}
						}, 120000)
					]
				} catch (error) {
					console.log(error);
				}
			}
			break

			case 'asahotak': {
				const gamecek = await cekgame(m.chat)
				if (gamecek) return
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				try {
					let anu = await fetchJson('https://www.haruka.my.id/cdn/game/asahotak.json')
					let result = await pickRandom(anu)
					console.log("Jawaban: " + result.jawaban)
					asahotak[m.chat] = [
						await haruka.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`, m), result, 250,
						setTimeout(() => {
							if (asahotak[m.chat]) {
								waktuHabis(result.jawaban)
								delete asahotak[m.chat]
							}
						}, 120000)
					]
				} catch (error) {
					console.log(error);
				}
			}
			break

			case 'lengkapikalimat': {
				const gamecek = await cekgame(m.chat)
				if (gamecek) return
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				try {
					let anu = await fetchJson('https://www.haruka.my.id/cdn/game/lengkapikalimat.json')
					let result = await pickRandom(anu)
					console.log("Jawaban: " + result.jawaban)
					lengkapikalimat[m.chat] = [
						await haruka.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`, m), result, 250,
						setTimeout(() => {
							if (lengkapikalimat[m.chat]) {
								waktuHabis(result.jawaban)
								delete lengkapikalimat[m.chat]
							}
						}, 120000)
					]
				} catch (error) {
					console.log(error);
				}
			}
			break

			case 'tebakbendera': {
				const gamecek = await cekgame(m.chat)
				if (gamecek) return
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				try {
					let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakbendera2.json')
					let result = await pickRandom(anu)
					console.log("Jawaban: " + result.name)
					tebakbendera[m.chat] = [
						await haruka.sendMessage(m.chat, {
							image: {
								url: result.img
							},
							caption: `Gambar diatas adalah bendera negara?\n\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`
						}, {
							quoted: m
						}), result, 250,
						setTimeout(() => {
							if (tebakbendera[m.chat]) {
								waktuHabis(result.name)
								delete tebakbendera[m.chat]
							}
						}, 120000)
					]
				} catch (error) {
					console.log(error);
				}
			}
			break

			case 'tebakkalimat': {
				const gamecek = await cekgame(m.chat)
				if (gamecek) return
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				try {
					let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
					let result = await pickRandom(anu)
					console.log("Jawaban: " + result.jawaban)
					tebakkalimat[m.chat] = [
						await haruka.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`, m), result, 250,
						setTimeout(() => {
							if (tebakkalimat[m.chat]) {
								waktuHabis(result.jawaban)
								delete tebakkalimat[m.chat]
							}
						}, 120000)
					]
				} catch (error) {
					console.log(error);
				}
			}
			break

			case 'tebaksiapa': {
				const gamecek = await cekgame(m.chat)
				if (gamecek) return
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				try {
					let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/siapakahaku.json')
					let result = await pickRandom(anu)
					console.log("Jawaban: " + result.jawaban)
					siapaaku[m.chat] = [
						await haruka.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`, m), result, 250,
						setTimeout(() => {
							if (siapaaku[m.chat]) {
								waktuHabis(result.jawaban)
								delete siapaaku[m.chat]
							}
						}, 120000)
					]
				} catch (error) {
					console.log(error);
				}
			}
			break

			case 'tebakkimia': {
				const gamecek = await cekgame(m.chat)
				if (gamecek) return
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				try {
					let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkimia.json')
					let result = await pickRandom(anu)
					console.log("Jawaban: " + result.unsur)
					tebakkimia[m.chat] = [
						await haruka.sendText(m.chat, `Apa Arti Dari Simbol : *${result.lambang}*?\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`, m), result, 250,
						setTimeout(() => {
							if (tebakkimia[m.chat]) {
								waktuHabis(result.unsur)
								delete tebakkimia[m.chat]
							}
						}, 120000)
					]
				} catch (error) {
					console.log(error);
				}
			}
			break

			case 'tebaklirik': {
				const gamecek = await cekgame(m.chat)
				if (gamecek) return
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				try {
					let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
					let result = await pickRandom(anu)
					console.log("Jawaban: " + result.jawaban)
					tebaklirik[m.chat] = [
						await haruka.sendText(m.chat, `Ini Adalah Lirik Dari Lagu? : *${result.soal}*?\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`, m), result, 250,
						setTimeout(() => {
							if (tebaklirik[m.chat]) {
								waktuHabis(result.jawaban)
								delete tebaklirik[m.chat]
							}
						}, 120000)
					]
				} catch (error) {
					console.log(error);
				}
			}
			break

			case 'tebaktebakan': {
				const gamecek = await cekgame(m.chat)
				if (gamecek) return
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				try {
					let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaktebakan.json')
					let result = await pickRandom(anu)
					console.log("Jawaban: " + result.jawaban)
					tebaktebakan[m.chat] = [
						await haruka.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`, m), result, 250,
						setTimeout(() => {
							if (tebaktebakan[m.chat]) {
								waktuHabis(result.jawaban)
								delete tebaktebakan[m.chat]
							}
						}, 120000)
					]
				} catch (error) {
					console.log(error);
				}
			}
			break

			case 'susunkata': {
				const gamecek = await cekgame(m.chat)
				if (gamecek) return
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				try {
					let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/susunkata.json')
					let result = await pickRandom(anu)
					console.log("Jawaban: " + result.jawaban)
					susunkata[m.chat] = [
						await haruka.sendText(m.chat, `*Jawablah Pertanyaan Berikut :*\nSoal : ${result.soal}\nTipe : ${result.tipe}\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`, m), result, 250,
						setTimeout(() => {
							if (susunkata[m.chat]) {
								waktuHabis(result.jawaban)
								delete susunkata[m.chat]
							}
						}, 120000)
					]
				} catch (error) {
					console.log(error);
				}
			}
			break

			case 'caklontong': {
				const gamecek = await cekgame(m.chat)
				if (gamecek) return
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				try {
					let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
					let result = await pickRandom(anu)
					console.log("Jawaban: " + result.jawaban)
					caklontong[m.chat] = [
						await haruka.sendText(m.chat, `*Jawablah Pertanyaan Berikut :*\nSoal : ${result.soal}\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`, m), result, 250,
						setTimeout(() => {
							if (caklontong[m.chat]) {
								waktuHabis(result.jawaban)
								delete caklontong[m.chat]
							}
						}, 120000)
					]
				} catch (error) {
					console.log(error);
				}
			}
			break

			case 'tekateki': {
				const gamecek = await cekgame(m.chat)
				if (gamecek) return
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				try {
					let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tekateki.json')
					let result = await pickRandom(anu)
					console.log("Jawaban: " + result.jawaban)
					tekateki[m.chat] = [
						await haruka.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`, m), result, 250,
						setTimeout(() => {
							if (tekateki[m.chat]) {
								waktuHabis(result.jawaban)
								delete tekateki[m.chat]
							}
						}, 120000)
					]
				} catch (error) {
					console.log(error);
				}
			}
			break

			case 'bantuan': {
				try {
					if (m.chat in tebakgambar) {
						let json = tebakgambar[m.chat][1]
						m.reply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
					}
					if (m.chat in tebakgame) {
						let json = tebakgame[m.chat][1]
						m.reply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
					}
					if (m.chat in tebakhero) {
						let json = tebakhero[m.chat][1]
						m.reply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
					}
					if (m.chat in tebakff) {
						let json = tebakff[m.chat][1]
						m.reply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
					}
					if (m.chat in tebakkabupaten) {
						let json = tebakkabupaten[m.chat][1]
						m.reply('```' + json.title.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
					}
					if (m.chat in tebakjkt48) {
						let json = tebakjkt48[m.chat][1]
						m.reply('```' + json.name.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
					}
					if (m.chat in tebakhewan) {
						let json = tebakhewan[m.chat][1]
						m.reply('```' + json.title.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
					}
					if (m.chat in tebakml) {
						let json = tebakml[m.chat][1]
						m.reply('```' + json.title.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
					}
					if (m.chat in tebakchara) {
						let json = tebakchara[m.chat][1]
						m.reply('```' + json.name.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
					}
					if (m.chat in tebaklogo) {
						let json = tebaklogo[m.chat][1]
						m.reply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
					}
					if (m.chat in tebakaplikasi) {
						let json = tebakaplikasi[m.chat][1]
						m.reply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
					}
					if (m.chat in tebakkata) {
						let json = tebakkata[m.chat][1]
						m.reply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
					}
					if (m.chat in asahotak) {
						let json = asahotak[m.chat][1]
						m.reply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
					}
					if (m.chat in lengkapikalimat) {
						let json = lengkapikalimat[m.chat][1]
						m.reply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
					}
					if (m.chat in tebakbendera) {
						let json = tebakbendera[m.chat][1]
						m.reply('```' + json.name.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
					}
					if (m.chat in tebakkalimat) {
						let json = tebakkalimat[m.chat][1]
						m.reply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
					}
					if (m.chat in siapaaku) {
						let json = siapaaku[m.chat][1]
						m.reply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
					}
					if (m.chat in tebakkimia) {
						let json = tebakkimia[m.chat][1]
						m.reply('```' + json.unsur.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
					}
					if (m.chat in tebaklirik) {
						let json = tebaklirik[m.chat][1]
						m.reply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
					}
					if (m.chat in tebaktebakan) {
						let json = tebaktebakan[m.chat][1]
						m.reply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
					}
					if (m.chat in susunkata) {
						let json = susunkata[m.chat][1]
						m.reply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
					}
					if (m.chat in caklontong) {
						let json = caklontong[m.chat][1]
						m.reply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
					}
					if (m.chat in tekateki) {
						let json = tekateki[m.chat][1]
						m.reply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
					}
				} catch (error) {
					console.log(error);
				}
			}
			break

			case 'nyerah': {
				try {
					if (m.chat in siapaaku) {
						clearTimeout(siapaaku[m.chat][3])
						delete siapaaku[m.chat]
						return haruka.sendMessage(m.chat, {
							text: `_Lemahhh_😏`
						}, {
							quoted: m
						})
					}
					if (m.chat in tebakkalimat) {
						clearTimeout(tebakkalimat[m.chat][3])
						delete tebakkalimat[m.chat]
						return haruka.sendMessage(m.chat, {
							text: `_Lemahhh_😏`
						}, {
							quoted: m
						})
					}
					if (m.chat in tebakbendera) {
						clearTimeout(tebakbendera[m.chat][3])
						delete tebakbendera[m.chat]
						return haruka.sendMessage(m.chat, {
							text: `_Lemahhh_😏`
						}, {
							quoted: m
						})
					}
					if (m.chat in tebakkata) {
						clearTimeout(tebakkata[m.chat][3])
						delete tebakkata[m.chat]
						return haruka.sendMessage(m.chat, {
							text: `_Lemahhh_😏`
						}, {
							quoted: m
						})
					}
					if (m.chat in asahotak) {
						clearTimeout(asahotak[m.chat][3])
						delete asahotak[m.chat]
						return haruka.sendMessage(m.chat, {
							text: `_Lemahhh_😏`
						}, {
							quoted: m
						})
					}
					if (m.chat in lengkapikalimat) {
						clearTimeout(lengkapikalimat[m.chat][3])
						delete lengkapikalimat[m.chat]
						return haruka.sendMessage(m.chat, {
							text: `_Lemahhh_😏`
						}, {
							quoted: m
						})
					}
					if (m.chat in tebakgame) {
						clearTimeout(tebakgame[m.chat][3])
						delete tebakgame[m.chat]
						return haruka.sendMessage(m.chat, {
							text: `_Lemahhh_😏`
						}, {
							quoted: m
						})
					}
					if (m.chat in tebakhero) {
						clearTimeout(tebakhero[m.chat][3])
						delete tebakhero[m.chat]
						return haruka.sendMessage(m.chat, {
							text: `_Lemahhh_😏`
						}, {
							quoted: m
						})
					}
					if (m.chat in tebakff) {
						clearTimeout(tebakff[m.chat][3])
						delete tebakff[m.chat]
						return haruka.sendMessage(m.chat, {
							text: `_Lemahhh_😏`
						}, {
							quoted: m
						})
					}
					if (m.chat in tebakkabupaten) {
						clearTimeout(tebakkabupaten[m.chat][3])
						delete tebakkabupaten[m.chat]
						return haruka.sendMessage(m.chat, {
							text: `_Lemahhh_😏`
						}, {
							quoted: m
						})
					}
					if (m.chat in tebakjkt48) {
						clearTimeout(tebakjkt48[m.chat][3])
						delete tebakjkt48[m.chat]
						return haruka.sendMessage(m.chat, {
							text: `_Lemahhh_😏`
						}, {
							quoted: m
						})
					}
					if (m.chat in tebakhewan) {
						clearTimeout(tebakhewan[m.chat][3])
						delete tebakhewan[m.chat]
						return haruka.sendMessage(m.chat, {
							text: `_Lemahhh_😏`
						}, {
							quoted: m
						})
					}
					if (m.chat in tebakml) {
						clearTimeout(tebakml[m.chat][3])
						delete tebakml[m.chat]
						return haruka.sendMessage(m.chat, {
							text: `_Lemahhh_😏`
						}, {
							quoted: m
						})
					}
					if (m.chat in tebakchara) {
						clearTimeout(tebakchara[m.chat][3])
						delete tebakchara[m.chat]
						return haruka.sendMessage(m.chat, {
							text: `_Lemahhh_😏`
						}, {
							quoted: m
						})
					}
					if (m.chat in tebaklogo) {
						clearTimeout(tebaklogo[m.chat][3])
						delete tebaklogo[m.chat]
						return haruka.sendMessage(m.chat, {
							text: `_Lemahhh_😏`
						}, {
							quoted: m
						})
					}
					if (m.chat in tebakaplikasi) {
						clearTimeout(tebakaplikasi[m.chat][3])
						delete tebakaplikasi[m.chat]
						return haruka.sendMessage(m.chat, {
							text: `_Lemahhh_😏`
						}, {
							quoted: m
						})
					}
					if (m.chat in tebakkimia) {
						clearTimeout(tebakkimia[m.chat][3])
						delete tebakkimia[m.chat]
						return haruka.sendMessage(m.chat, {
							text: `_Lemahhh_😏`
						}, {
							quoted: m
						})
					}
					if (m.chat in tebaklirik) {
						clearTimeout(tebaklirik[m.chat][3])
						delete tebaklirik[m.chat]
						return haruka.sendMessage(m.chat, {
							text: `_Lemahhh_😏`
						}, {
							quoted: m
						})
					}
					if (m.chat in tebaktebakan) {
						clearTimeout(tebaktebakan[m.chat][3])
						delete tebaktebakan[m.chat]
						return haruka.sendMessage(m.chat, {
							text: `_Lemahhh_😏`
						}, {
							quoted: m
						})
					}
					if (m.chat in susunkata) {
						clearTimeout(susunkata[m.chat][3])
						delete susunkata[m.chat]
						return haruka.sendMessage(m.chat, {
							text: `_Lemahhh_😏`
						}, {
							quoted: m
						})
					}
					if (m.chat in caklontong) {
						clearTimeout(caklontong[m.chat][3])
						delete caklontong[m.chat]
						return haruka.sendMessage(m.chat, {
							text: `_Lemahhh_😏`
						}, {
							quoted: m
						})
					}
					if (m.chat in tebakgambar) {
						clearTimeout(tebakgambar[m.chat][3])
						delete tebakgambar[m.chat]
						return haruka.sendMessage(m.chat, {
							text: `_Lemahhh_😏`
						}, {
							quoted: m
						})
					}
					if (m.chat in tekateki) {
						clearTimeout(tekateki[m.chat][3])
						delete tekateki[m.chat]
						return haruka.sendMessage(m.chat, {
							text: `_Lemahhh_😏`
						}, {
							quoted: m
						})
					}
				} catch (error) {
					console.log(error);
				}
			}
			break

			case 'backup': {
				if (!isCreator) return newReply(mess.owner);
				let sender = m.mentionedJid[0] || m.sender || slimecode.parseMention(args[0]) || (args[0].replace(/[@.+-]/g, '').replace(' ', '') + '@s.whatsapp.net') || '';
				let date = new Date();
				let filename = `backup_${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}_${date.getHours().toString().padStart(2, '0')}-${date.getMinutes().toString().padStart(2, '0')}-${date.getSeconds().toString().padStart(2, '0')}`;
				const { execSync } = require('child_process');
				const ls = (await execSync('ls')).toString().split('\n').filter((cek) => cek !== 'node_modules' && cek !== `${sessionName}` && cek !== 'package-lock.json' && cek !== 'yarn.lock' && cek !== '');
				await newReply('Hasil backup akan dikirim lewat chat pribadi ya!');
				await execSync(`zip -r ${filename}.zip ${ls.join(' ')}`);
				const sentMessage = await haruka.sendMessage(sender, {
					document: await fs.readFileSync(`./${filename}.zip`),
					mimetype: 'application/zip',
					fileName: `${filename}.zip`,
					caption: 'Berhasil! Silakan download dan simpan file backup-nya ya.'
				});
				await execSync(`rm -rf ${filename}.zip`);
				console.log(`${filename}.zip telah dihapus dari file lokal.`);
			}
			break;

			case 'speed': case 'ping': {
				try {
					const used = process.memoryUsage();
					const cpus = os.cpus().map(cpu => {
						cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0);
						return cpu;
					});
					const cpu = cpus.reduce((last, cpu, _, { length }) => {
						last.total += cpu.total;
						last.speed += cpu.speed / length;
						last.times.user += cpu.times.user;
						last.times.nice += cpu.times.nice;
						last.times.sys += cpu.times.sys;
						last.times.idle += cpu.times.idle;
						last.times.irq += cpu.times.irq;
						return last;
					}, {
						speed: 0,
						total: 0,
						times: { user: 0, nice: 0, sys: 0, idle: 0, irq: 0 }
					});
					let start = performance.now();
					let end = performance.now();
					let latensi = end - start;
					let osInfo = await nou.os.oos();
					let storage = await nou.drive.info();
					let respon = `✨ *Informasi Bot WhatsApp* ✨\n\n📡 *Jaringan Server*\n- *Ping:* ${latensi.toFixed(4)} Detik\n\n🖥️ *Informasi Server*\n- *OS:* ${osInfo}\n- *IP Address:* ${nou.os.ip()}\n- *Tipe OS:* ${nou.os.type()}\n\n💾 *RAM:*\n- *Total:* ${formatp(os.totalmem())}\n- *Digunakan:* ${formatp(os.totalmem() - os.freemem())}\n\n📂 *Penyimpanan:*\n- *Total:* ${storage.totalGb} GB\n- *Digunakan:* ${storage.usedGb} GB (${storage.usedPercentage}%)\n- *Tersedia:* ${storage.freeGb} GB (${storage.freePercentage}%)\n\n⏳ *Waktu Aktif Server:*\n${runtime(process.uptime())}\n\n⚙️ *CPU (${cpus.length} Core)*\n- *Model:* ${cpus[0].model.trim()}\n- *Kecepatan:* ${cpu.speed} MHz\n${Object.keys(cpu.times).map(type => `- *${type}*: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}\n\nTetap semangat ya kak! Foxter selalu siap membantu 🥰`;
					await haruka.sendMessage(m.chat, {
						text: respon,
						contextInfo: {
							forwardingScore: 100,
							isForwarded: true,
							externalAdReply: {
								title: ucapanWaktu,
								thumbnailUrl: thumbUrl,
								sourceUrl: wagc,
								mediaType: 1,
								renderLargerThumbnail: true
							}
						}
					}, { quoted: m });
				} catch (err) {
					console.error(err);
				}
			}
			break;

			case 'addbadword': 
			case 'addbd': {
				if (!isCreator) return newReply(mess.owner);
				if (!groupAdmins) return newReply(mess.admin);
				if (args.length < 1) return newReply(`📝 *Kirim perintah:* ${prefix}addbadword [kata kasar]\nContoh: ${prefix}addbadword asshole`);
				bad.push(q);
				fs.writeFileSync('./src/data/function/badword.json', JSON.stringify(bad));
				newReply('✅ *Kata kasar berhasil ditambahkan ke daftar!*');
			}
			break;

			case 'delbadword': 
			case 'deldb': {
				if (!isCreator) return newReply(mess.owner);
				if (!groupAdmins) return newReply(mess.admin);
				if (args.length < 1) return newReply(`📝 *Kirim perintah:* ${prefix}delbadword [kata kasar]\nContoh: ${prefix}delbadword asshole`);
				bad.splice(q);
				fs.writeFileSync('./src/data/function/badword.json', JSON.stringify(bad));
				newReply('✅ *Kata kasar berhasil dihapus dari daftar!*');
			}
			break;

			case 'resetuser':
			case 'resetdbuser': {
				if (!isCreator) return newReply(mess.owner);
				newReply(`Berhasil menghapus semua data pengguna dari database.`);
				db.data.users = [];
			}
			break;

			case 'resethit':
			case 'resettotalhit': {
				if (!isCreator) return newReply(mess.owner);
				global.db.data.settings[botNumber].totalhit = 0;
				newReply(mess.done);
			}
			break;

			case 'setmenu': {
				if (!isCreator) return newReply(mess.owner);
				newReply(`Fitur *${command}* sudah tidak dapat digunakan lagi.`);
			}
			break;

			case 'setreply': {
				if (!isCreator) return newReply(mess.owner);
	
				if (!text) {
					return newReply(
						`Ada 4 pilihan reply (v1, v2, v3, v4)\nSilakan pilih salah satu.\nContoh: ${prefix + command} v1`
					);
				}

				if (text.startsWith('v')) {
					typereply = text; // Set tipe reply
					return newReply(mess.done); // Berikan konfirmasi sukses
				}

				// Jika input tidak valid
				return newReply(
					`Ada 4 pilihan reply (v1, v2, v3, v4)\nSilakan pilih salah satu.\nContoh: ${prefix + command} v1`
				);
			}
			break;

			case 'statustext':
			case 'upswtext':
			case 'upswteks': {
				if (!isCreator) return newReply(mess.owner);
				if (!q) return newReply('Teksnya mana?');
				await haruka.sendMessage('status@broadcast', { 
					text: q 
				}, { 
					backgroundColor: '#FF000000', 
					font: 3, 
					statusJidList: Object.keys(global.db.data.users) 
				});
				newReply('Sukses kirim status teks!');
			}
			break;

			case 'statusvideo':
			case 'upswvideo': {
				if (!isCreator) return newReply(mess.owner); // Cek apakah pengguna adalah creator

				if (/video/.test(mime)) {
					// Unduh video dari pesan yang di-reply
					var videosw = await haruka.downloadAndSaveMediaMessage(quoted);

					// Dapatkan informasi default untuk caption
					let fileSize = quoted.fileLength ? `${(quoted.fileLength / 1024 / 1024).toFixed(2)} MB` : 'Tidak diketahui';
					let mediaType = mime || 'Tidak diketahui';
					let sendTime = new Date().toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' });
					let sender = `${m.pushName || ownerName}`;

					// Buat caption default
					let defaultCaption = `📁 *Ukuran File:* ${fileSize}\n` +
					`🎥 *Tipe Media:* ${mediaType}\n` +
					`⏰ *Waktu Dikirim:* ${sendTime}\n` +
					`👤 *Dikirim oleh:* ${sender}`;

					// Kirim video ke status WhatsApp
					await haruka.sendMessage('status@broadcast', {
						video: { url: videosw },
						caption: q ? q : defaultCaption
					}, {
						statusJidList: Object.keys(global.db.data.users)
					});

					await newReply('✅ Video berhasil dikirim ke status WhatsApp dengan caption bawaan!');
				} else {
					newReply('⚠️ Tolong reply ke video dulu ya, Kak! 🎥');
				}
			}
			break;

			case 'statusimg':
			case 'statusimage':
			case 'upswimg': {
				if (!isCreator) return newReply(mess.owner); // Cek apakah pengguna adalah creator

				if (/image/.test(mime)) {
					// Unduh gambar dari pesan yang di-reply
					var imagesw = await haruka.downloadAndSaveMediaMessage(quoted);

					// Dapatkan informasi default untuk caption
					let fileSize = quoted.fileLength ? `${(quoted.fileLength / 1024 / 1024).toFixed(2)} MB` : 'Tidak diketahui';
					let mediaType = mime || 'Tidak diketahui';
					let sendTime = new Date().toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' });
					let sender = `${m.pushName || ownerName}`;

					// Buat caption default
					let defaultCaption = `📁 *Ukuran File:* ${fileSize}\n` +
						`🖼️ *Tipe Media:* ${mediaType}\n` +
						`⏰ *Waktu Dikirim:* ${sendTime}\n` +
						`👤 *Dikirim oleh:* ${sender}`;

					// Kirim gambar ke status WhatsApp
					await haruka.sendMessage('status@broadcast', {
						image: { url: imagesw },
						caption: q ? q : defaultCaption
					}, {
						statusJidList: Object.keys(global.db.data.users)
					});

					await newReply('✅ Gambar berhasil dikirim ke status WhatsApp dengan caption bawaan! 🖼️✨');
				} else {
					newReply('⚠️ Tolong reply ke gambar dulu ya, Kak! 🖼️');
				}
			}
			break;

			case 'statusaudio':
			case 'upswaudio': {
				if (!isCreator) return newReply(mess.owner);
				if (/audio/.test(mime)) {
					var audiosw = await haruka.downloadAndSaveMediaMessage(quoted);
					await haruka.sendMessage('status@broadcast', {
						audio: { url: audiosw },
						mimetype: 'audio/mp4',
						ptt: true
					}, {
						backgroundColor: '#FF000000',
						statusJidList: Object.keys(global.db.data.users)
					});
					await newReply('Sukses kirim status audio!');
				} else {
					newReply('Reply audio dulu, ya!');
				}
			}
			break;

			case 'upchannel': {
				if (!isCreator) return newReply(mess.owner)
				try {
					if (!mime && !text) {
						return newReply(`Uh-oh, kak! Kakak belum kirim media atau teks apa pun. Coba lagi ya! 🤭`)
					}
					media = mime ? await quoted.download() : null
					let defaultCaption = "✨ Media ini dikirim melalui sistem otomatis Foxter! ✨"
					if (/image/.test(mime)) {
						haruka.sendMessage('120363363009408737@newsletter', {
							image: media,
							caption: text ? text : defaultCaption
						})
						newReply(`📸 Gambar berhasil diunggah ke saluran dengan caption: "${text ? text : defaultCaption}"`)
					} else if (/video/.test(mime)) {
						haruka.sendMessage('120363363009408737@newsletter', {
							video: media,
							caption: text ? text : defaultCaption
						})
						newReply(`🎥 Video berhasil diunggah ke saluran dengan caption: "${text ? text : defaultCaption}"`)
					} else if (/audio/.test(mime)) {
						haruka.sendMessage('120363363009408737@newsletter', {
							audio: media,
							mimetype: mime,
							ptt: true
						})
						newReply(`🎵 Audio berhasil diunggah ke saluran, kak!`)
					} else if (/text/.test(mime) || text) {
						haruka.sendMessage('120363363009408737@newsletter', {
							text: text ? text : defaultCaption
						})
						newReply(`💬 Pesan teks berhasil dikirim ke saluran: "${text ? text : defaultCaption}"`)
					} else {
						newReply(`Hmm... Foxter gak tau ini jenis media apa. Coba dicek lagi ya, kak! 🧐`)
					}
				} catch (error) {
					console.error(error)
					newReply(`Aduh, kak! 😣 Ada masalah waktu unggah ke saluran. Coba lagi nanti ya!`)
				}
			}
			break;

			case 'upsaluran': {
				if (!isCreator) return newReply(mess.owner)
				try {
					if (!mime && !text) {
						return newReply(`Uh-oh, kak! Kakak belum kirim media atau teks apa pun. Coba lagi ya! 🤭`)
					}
					media = mime ? await quoted.download() : null
					let defaultCaption = "✨ Media ini dikirim melalui sistem otomatis Foxter! ✨"
					if (/image/.test(mime)) {
						haruka.sendMessage(saluran, {
							image: media,
							caption: text ? text : defaultCaption
						})
						newReply(`📸 Gambar berhasil diunggah ke saluran dengan caption: "${text ? text : defaultCaption}"`)
					} else if (/video/.test(mime)) {
						haruka.sendMessage(saluran, {
							video: media,
							caption: text ? text : defaultCaption
						})
						newReply(`🎥 Video berhasil diunggah ke saluran dengan caption: "${text ? text : defaultCaption}"`)
					} else if (/audio/.test(mime)) {
						haruka.sendMessage(saluran, {
							audio: media,
							mimetype: mime,
							ptt: true
						})
						newReply(`🎵 Audio berhasil diunggah ke saluran, kak!`)
					} else if (/text/.test(mime) || text) {
						haruka.sendMessage(saluran, {
							text: text ? text : defaultCaption
						})
						newReply(`💬 Pesan teks berhasil dikirim ke saluran: "${text ? text : defaultCaption}"`)
					} else {
						newReply(`Hmm... Foxter gak tau ini jenis media apa. Coba dicek lagi ya, kak! 🧐`)
					}
				} catch (error) {
					console.error(error)
					newReply(`Aduh, kak! 😣 Ada masalah waktu unggah ke saluran. Coba lagi nanti ya!`)
				}
			}
			break;

			case 'upsaluran2': {
				if (!isCreator) return newReply(mess.owner)
				try {
					if (!mime && !text) {
						return newReply(`Uh-oh, kak! Kakak belum kirim media atau teks apa pun. Coba lagi ya! 🤭`)
					}
					media = mime ? await quoted.download() : null
					let defaultCaption = "✨ Media ini dikirim melalui sistem otomatis Foxter! ✨"
					const buttons = [
						{
							buttonId: `${prefix}donate`,
							buttonText: {
								displayText: "Donate"
							}
						},
						{
							buttonId: `${prefix}menu`,
							buttonText: {
								displayText: "Menu"
							}
						}
					]
					if (/image/.test(mime)) {
						haruka.sendMessage(saluran, {
							image: media,
							caption: text ? text : defaultCaption,
							footer: botName,
							buttons: buttons,
							viewOnce: true
						})
						newReply(`📸 Gambar berhasil diunggah ke saluran dengan caption: "${text ? text : defaultCaption}"`)
					} else if (/video/.test(mime)) {
						haruka.sendMessage(saluran, {
							video: media,
							caption: text ? text : defaultCaption,
							footer: botName,
							buttons: buttons,
							viewOnce: true
						})
						newReply(`🎥 Video berhasil diunggah ke saluran dengan caption: "${text ? text : defaultCaption}"`)
					} else if (/text/.test(mime) || text) {
						haruka.sendMessage(saluran, {
							text: text ? text : defaultCaption,
							footer: botName,
							buttons: buttons,
							viewOnce: true
						})
						newReply(`💬 Pesan teks berhasil dikirim ke saluran: "${text ? text : defaultCaption}"`)
					} else {
						newReply(`Hmm... Foxter gak tau ini jenis media apa. Coba dicek lagi ya, kak! 🧐`)
					}
				} catch (error) {
					console.error(error)
					newReply(`Aduh, kak! 😣 Ada masalah waktu unggah ke saluran. Coba lagi nanti ya!`)
				}
			}
			break;

			case 'setimgmenu':
			case 'sim': {
				if (!isCreator) return newReply(mess.owner);
				let media = await haruka.downloadAndSaveMediaMessage(quoted);
				await fsx.copy(media, './media/c08dc5cee5a3e63c8dc0add06bb6e6ca.jpg');
				fs.unlinkSync(media);
				newReply('Gambar menu berhasil diset! 🎨');
			}
			break;

			case 'setvidmenu':
			case 'svm': 
			case 'setvgifmenu':
			case 'sgm': {
				if (!isCreator) return newReply(mess.owner);
				let media = await haruka.downloadAndSaveMediaMessage(quoted);
				await fsx.copy(media, './media/vidmenu.mp4');
				fs.unlinkSync(media);
				newReply('Video menu berhasil diset! 🎬');
			}
			break;

			case 'addtitle': {
				if (!isCreator) return newReply(mess.owner);
				if (!text) return newReply(`Usage: ${prefix + command} number|title`);
				nonya = text.split('|')[0];
				titlenya = text.split('|')[1];
				let oo = `${nonya}@s.whatsapp.net`;
				db.data.users[oo].title = titlenya;
				await newReply('Title berhasil ditambahkan! 🎉');
			}
			break;

			case 'deltitle': {
				if (!isCreator) return newReply(mess.owner);
				if (!text) return newReply(`Usage: ${prefix + command} number`);
				nonya = text.split(',')[0];
				let oo = `${nonya}@s.whatsapp.net`;
				db.data.users[oo].title = '';
				await newReply('Title berhasil dihapus! ✨');
			}
			break;

			case 'addlimit':
			case 'givelimit': {
				if (!isCreator) return newReply(mess.owner);
				if (!text) return newReply(`Usage: ${prefix + command} number|limit amount`);
				usernya = text.split('|')[0];
				limitnya = text.split('|')[1];
				let oo = `${usernya}@s.whatsapp.net`;
				db.data.users[oo].limit += limitnya;
				newReply('Limit berhasil ditambahkan! 🎯');
			}
			break;

			case 'dellimit': {
				if (!isCreator) return newReply(mess.owner);
				if (!text) return newReply(`Usage: ${prefix + command} number|limit amount`);
				usernya = text.split('|')[0];
				limitnya = text.split('|')[1];
				if (db.data.users[usernya + '@s.whatsapp.net'].limit < limitnya) return newReply(`Limit dia kurang dari ${limitnya}`);
				db.data.users[usernya + '@s.whatsapp.net'].limit -= limitnya;
				newReply('Limit berhasil dikurangi! ✂️');
			}
			break;

			case 'addpr': case 'addprem': case 'addpremium': {
				if (!isCreator) return newReply(mess.owner);
				if (!text) return newReply(`Contoh:\n${prefix + command} @tag|durasi(s/m/h/d)`);
				let [teks1, teks2] = text.split`|`;
				const nmrnya = teks1.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
				const onWa = await haruka.onWhatsApp(nmrnya);
				if (!onWa.length > 0) return newReply('Nomor tersebut tidak terdaftar di WhatsApp! ❌');
				if (teks2) {
					addPremiumUser(nmrnya, teks2, premium);
					newReply(`✅ Berhasil menambahkan @${nmrnya.split('@')[0]} sebagai pengguna *Premium* selama *${teks2}*!`);
					db.data.users[nmrnya].limit = db.data.users[nmrnya].vip ? global.limit.vip : global.limit.premium;
					db.data.users[nmrnya].uang = db.data.users[nmrnya].vip ? global.uang.vip : global.uang.premium;
				} else {
					newReply(`Masukkan durasi yang valid!\nContoh: ${prefix + command} @tag|durasi(s/m/h/d)`);
				}
			}
			break;

			case 'delpr': case 'delprem': case 'delpremium': {
				if (!isCreator) return newReply(mess.owner);
				if (!text) return newReply(`Contoh:\n${prefix + command} @tag`);
				const nmrnya = text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
				if (checkPremiumUser(nmrnya, premium)) {
					premium.splice(getPremiumPosition(nmrnya, premium), 1);
					fs.writeFileSync('./src/data/role/premium.json', JSON.stringify(premium));
					newReply(`✅ Berhasil menghapus @${nmrnya.split('@')[0]} dari daftar *Premium*!`);
					db.data.users[nmrnya].limit = db.data.users[nmrnya].vip ? global.limit.vip : global.limit.free;
					db.data.users[nmrnya].uang = db.data.users[nmrnya].vip ? global.uang.vip : global.uang.free;
				} else {
					newReply(`⚠️ Pengguna @${nmrnya.split('@')[0]} bukan pengguna *Premium*!`);
				}
			}
			break;

			case 'listpremium': case 'listprem': {
				let txt = `*🌟 DAFTAR PENGGUNA PREMIUM 🌟*\n\n`;
				let men = [];
				if (premium.length === 0) {
					txt += `Tidak ada pengguna premium saat ini. 🫤`;
				} else {
					for (let i of premium) {
						men.push(i.id);
						txt += ` · *Nomor*: +${i.id.split('@')[0]}\n`;
						if (i.expired === 'PERMANENT') {
							txt += ` · *Kadaluwarsa*: PERMANEN ♾️\n\n`;
						} else {
							let anu = ms(i.expired - Date.now());
							txt += ` · *Kadaluwarsa*: ${anu.days}h, ${anu.hours}j, ${anu.minutes}m\n`;
							txt += ` · *Limit*: ${db.data.users[i.id].limit}\n`;
							txt += ` · *Uang*: Rp${db.data.users[i.id].uang.toLocaleString('id-ID')}\n\n`;
						}
					}
				}
				newReply(txt);
			}
			break;

			case 'addowner': {
				if (!isCreator) return newReply(mess.owner);
				if (!args[0]) return newReply(`Gunakan ${prefix + command} nomor\nContoh: ${prefix + command} ${ownerNumber}`);
				bnnd = q.split("|")[0].replace(/[^0-9]/g, '');
				let ceknye = await haruka.onWhatsApp(bnnd);
				if (ceknye.length == 0) return newReply(`Masukkan nomor yang valid dan terdaftar di WhatsApp!`);
				owner.push(bnnd);
				fs.writeFileSync('./src/data/role/owner.json', JSON.stringify(owner));
				newReply(`Nomor ${bnnd} sekarang menjadi Owner!!! 🎉`);
			}
			break;

			case 'delowner': {
				if (!isCreator) return newReply(mess.owner);
				if (!args[0]) return newReply(`Gunakan ${prefix + command} nomor\nContoh: ${prefix + command} 6285655548594`);
				ya = q.split("|")[0].replace(/[^0-9]/g, '');
				unp = owner.indexOf(ya);
				owner.splice(unp, 1);
				fs.writeFileSync('./src/data/role/owner.json', JSON.stringify(owner));
				newReply(`Nomor ${ya} berhasil dihapus dari daftar owner! ❌`);
			}
			break;

			case 'listowner': {
				let teks = '┌──⭓「 *List Owner* 」\n│\n';
				for (let x of owner) {
					teks += `│⭔ ${x}\n`;
				}
				teks += `│\n└────────────⭓\n\n*Total : ${owner.length}*`;
				newReply(teks);
			}
			break;

			case 'delsession':
			case 'clearsession': {
				if (!isCreator) return newReply(mess.owner);
				fs.readdir("./session", async function(err, files) {
					if (err) {
						console.log('Gak bisa scan direktori: ' + err);
						return newReply('Gak bisa scan direktori nih: ' + err);
					}
					let filteredArray = await files.filter(item => item.startsWith("pre-key") ||
						item.startsWith("m.sender-key") || item.startsWith("session-") || item.startsWith("app-state")
					);
					console.log(filteredArray.length);
					let teks = `Ditemukan ${filteredArray.length} file sampah nih\n\n`;
					if (filteredArray.length == 0) return newReply(teks);
					filteredArray.map(function(e, i) {
						teks += (i + 1) + `. ${e}\n`;
					});
					newReply(teks);
					await sleep(2000);
					newReply("Mau hapus file sampahnya... Tunggu yaa...");
					await filteredArray.forEach(function(file) {
						fs.unlinkSync(`./${userName}/${file}`);
					});
					await sleep(2000);
					newReply("Berhasil hapus semua file sampah di folder session! 🎉");
				});
			}
			break;

			case 'join': {
				try {
					if (!isCreator) return newReply(mess.owner);
					if (!text) return newReply('Masukkan Link Grup yaa!');
					if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return newReply('Link-nya invalid nih!');
					let result = args[0].split('https://chat.whatsapp.com/')[1];
					haruka.groupAcceptInvite(result);
					await newReply(`Sudah gabung ke grup! 🎉`);
				} catch {
					newReply('Gagal gabung ke grup, coba lagi nanti!');
				}
			}
			break;

            case 'getinfogc':
            case 'getinfogrup':
            case 'getgc': {
                if (!text) return newReply(`Kirim perintah ${prefix + command} _linkgrup_`);
                if (!isUrl(args[0]) && !args[0].includes('chat.whatsapp.com')) return newReply(mess.error.Iv);
                try {
                    let result = args[0].split('https://chat.whatsapp.com/')[1];
                    let inpo = await haruka.groupGetInviteInfo(result);
                    let teks = `*乂 GRUP LINK INFO*\n\n`;
                    teks += `*ID:* ${inpo.id}\n`;
                    teks += `*Name:* ${inpo.subject}\n`;
                    teks += `*Owner:* ${inpo.owner}\n`;
                    teks += `*Kirim Pesan:* ${inpo.announce ? 'Hanya Admin' : "Semua Orang"}\n`;
                    teks += `*Persetujuan Admin:* ${inpo.joinApprovalMode ? 'Yes' : "No"}\n`;
                    teks += `*Member Add Mode:* ${inpo.memberAddMode ? 'Yes' : "No"}\n`;
                    teks += `*Desk:*\n${inpo.desc}\n\n`;
                    teks += `*Anggota Teratas:*\n`;        
                    for (let x of inpo.participants) {
                        teks += `- @${x.id.split('@')[0]}\n`;
                    }
        
                    let button = [{
                        "name": "cta_copy",
                        "buttonParamsJson": `{\"display_text\":\"ID Group\",\"id\":\"${inpo.id}\",\"copy_code\":\"${inpo.id}\"}`
                    }];
        
                    haruka.sendButtonText(m.chat, button, teks, footer, m);
                } catch (error) {
                    newReply(mess.error.Iv);
                }
            }
            break;

            case 'inspect':
            case 'getch':
            case 'getinfochannel':
            case 'getchid': {
                if (!text) return newReply(`Kirim perintah ${prefix + command} _linkchannel_`);
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com/channel')) return newReply(mess.error.Iv);

                function formatDate(timestamp) {
                    const date = new Date(timestamp * 1000);
                    const months = [
                        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
                    ];
                    const day = date.getDate();
                    const month = months[date.getMonth()];
                    const year = date.getFullYear();
                    return `${day} ${month} ${year}`;
                }

                try {
                    let result = args[0].split('https://whatsapp.com/channel/')[1];
                    let data = await haruka.newsletterMetadata("invite", result);
                    let teks = `*乂 NEWSLETTER INFO*\n\n`;
                    teks += `*Name:* ${data.name}\n`;
                    teks += `*ID:* ${data.id}\n`;
                    teks += `*Status:* ${data.state}\n`;
                    teks += `*Dibuat Pada:* ${formatDate(data.creation_time)}\n`;
                    teks += `*Subscribers:* ${data.subscribers}\n`;
                    teks += `*Meta Verify:* ${data.verification}\n`;
                    teks += `*React Emoji:* ${data.reaction_codes}\n`;
                    teks += `*Description:*\n${data.description}\n`;

                    let button = [{
                        "name": "cta_copy",
                        "buttonParamsJson": `{\"display_text\":\"ID Channel\",\"id\":\"${data.id}\",\"copy_code\":\"${data.id}\"}`
                    }];

                    sendButton(m.chat, '', teks, button, m);
                } catch (error) {
                    newReply('*Data tidak ditemukan!* ☹️');
                }
            }
            break;

			case 'getsession': {
				if (!isCreator) return newReply(mess.owner);
				newReply('Tunggu sebentar yaa, aku lagi ambil file session-mu nih');
				let sesi = fs.readFileSync(`./${sessionName}/creds.json`);
				haruka.sendMessage(m.chat, {
					document: sesi,
					mimetype: 'application/json',
					fileName: 'creds.json'
				}, {
					quoted: m
				});
			}
			break;

			case 'getdatabase': {
				if (!isCreator) return newReply(mess.owner);
				newReply('Tunggu sebentar yaa, aku lagi ambil file database-mu nih');
				let sesi = fs.readFileSync('./src/database.json');
				haruka.sendMessage(m.chat, {
					document: sesi,
					mimetype: 'application/json',
					fileName: 'database.json'
				}, {
					quoted: m
				});
			}
			break;

			case 'getdbuser': {
				if (!isCreator) return newReply(mess.owner);
				newReply('Tunggu sebentar yaa, aku lagi ambil file database usermu nih');
				let sesi = fs.readFileSync('./src/data/role/user.json');
				haruka.sendMessage(m.chat, {
					document: sesi,
					mimetype: 'application/json',
					fileName: 'user.json'
				}, {
					quoted: m
				});
			}
			break;

			case 'repo': case 'repository': {
				if (!text || !text.includes('/')) {
					return newReply(`Kakak bisa pakai format ini ya: *${prefix + command} username/repository*\n\nContoh: *${prefix + command} WhiskeySockets/Baileys*`);
				}
				const [username, repoName] = text.split('/');
				try {
					const response = await axios.get(`https://api.github.com/repos/${username}/${repoName}`)
					if (response.status === 200) {
						const repoData = response.data
						const formattedInfo = `*Repository Name :* ${repoData.name}\n*Description :* ${repoData.description}\n*Owner :* ${repoData.owner.login}\n*Stars :* ${repoData.stargazers_count}\n*Forks :* ${repoData.forks_count}\n*URL :* ${repoData.html_url}\n`;
						newReply(formattedInfo);
					} else {
						await newReply(`Unable to fetch repository information`)
					}
				} catch (error) {
					console.error(error)
					await newReply(`Repository currently not available `)
				}
			}
			break;

			case 'myip':
			case 'ipbot':
				if (!isCreator) return newReply(mess.owner);
				var http = require('http');
				http.get({
					'host': 'api.ipify.org',
					'port': 80,
					'path': '/'
				}, function(resp) {
					resp.on('data', function(ip) {
						newReply("🔎 Oii, alamat IP publik aku nih: " + ip);
					})
				});
			break;

			case 'request':
			case 'reportbug': {
				if (!text) return newReply(`Contoh: ${prefix + command} hi dev, perintah ini gak jalan`);
				textt = `*| REQUEST/BUG |*`;
				teks1 = `\n\n*User* : @${m.sender.split("@")[0]}\n*Request/Bug* : ${text}`;
				teks2 = `\n\n*Hii ${pushname}, permintaan kamu sudah dikirim ke pemilik aku, tunggu sebentar ya...*`;
				for (let i of owner) {
					haruka.sendMessage(i + "@s.whatsapp.net", {
						text: textt + teks1,
						mentions: [m.sender],
					}, {
						quoted: m,
					});
				}
				haruka.sendMessage(m.chat, {
					text: textt + teks2 + teks1,
					mentions: [m.sender],
				}, {
					quoted: m,
				});
			}
			break;

			case 'shutdown':
				if (!isCreator) return newReply(mess.owner);
				newReply(`Aduh, mau restart nih, bentar ya!`);
				await sleep(3000);
				process.exit();
			break;

			case 'autoread':
				if (!isCreator) return newReply(mess.owner);
				if (args.length < 1) return newReply(`Contoh: ${prefix + command} on/off`);
				if (q === 'on') {
					db.data.settings[botNumber].autoread = true;
					newReply(`Yay! Auto-read berhasil diubah ke ${q}`);
				} else if (q === 'off') {
					db.data.settings[botNumber].autoread = false;
					newReply(`Oke deh! Auto-read berhasil dimatikan, jadi gak bakal dibaca otomatis nih!`);
				}
			break;

			case 'unavailable':
				if (!isCreator) return newReply(mess.owner);
				if (args.length < 1) return newReply(`Contoh: ${prefix + command} on/off`);
				if (q === 'on') {
					db.data.settings[botNumber].online = true;
					newReply(`Wah, sekarang bot aku lagi online, bisa nyapa-nyapa nih!`);
				} else if (q === 'off') {
					db.data.settings[botNumber].online = false;
					newReply(`Oke, bot aku jadi offline dulu ya, nanti nyapa-nyapanya kalau sudah aktif lagi 😎`);
				}
			break;

			case 'autorecordtype':
				if (!isCreator) return newReply(mess.owner);
				if (args.length < 1) return newReply(`Contoh: ${prefix + command} on/off`);
				if (q === 'on') {
					db.data.settings[botNumber].autorecordtype = true;
					newReply(`Auto-record typing berhasil diubah ke ${q}!`);
				} else if (q === 'off') {
					db.data.settings[botNumber].autorecordtype = false;
					newReply(`Auto-record typing dimatikan, gak bakal ada rekaman ketik lagi ya!`);
				}
			break;

			case 'autorecord':
				if (!isCreator) return newReply(mess.owner);
				if (args.length < 1) return newReply(`Contoh: ${prefix + command} on/off`);
				if (q === 'on') {
					db.data.settings[botNumber].autorecord = true;
					newReply(`Auto-record berhasil diubah ke ${q}, jadi semua aktivitas terrekam otomatis!`);
				} else if (q === 'off') {
					db.data.settings[botNumber].autorecord = false;
					newReply(`Auto-record dimatikan, gak bakal ada rekaman otomatis lagi!`);
				}
			break;

			case 'autotype':
				if (!isCreator) return newReply(mess.owner);
				if (args.length < 1) return newReply(`Contoh: ${prefix + command} on/off`);
				if (q === 'on') {
					db.data.settings[botNumber].autotype = true;
					newReply(`Auto-typing berhasil diubah ke ${q}, jadi bot bakal ngetik otomatis deh!`);
				} else if (q === 'off') {
					db.data.settings[botNumber].autotype = false;
					newReply(`Auto-typing dimatikan, jadi bot gak bakal ngetik otomatis lagi!`);
				}
			break;

			case 'autobio':
				if (!isCreator) return newReply(mess.owner);
				if (args.length < 1) return newReply(`Contoh: ${prefix + command} on/off`);
				if (q == 'on') {
					db.data.settings[botNumber].autobio = true;
					newReply(`Yay! AutoBio berhasil diubah ke ${q}, biografi otomatis aktif!`);
				} else if (q == 'off') {
					db.data.settings[botNumber].autobio = false;
					newReply(`Oke, AutoBio berhasil dimatikan. Gak ada lagi bio otomatis nih!`);
				}
			break;

			case 'autosticker':
			case 'autostickergc':
				if (!isCreator) return newReply(mess.owner);
				if (args.length < 1) return newReply(`Contoh: ${prefix + command} on/off`);
				if (q == 'on') {
					db.data.settings[botNumber].autosticker = true;
					newReply(`Sticker otomatis berhasil diubah ke ${q}, jadi semuanya bakal jadi sticker!`);
				} else if (q == 'off') {
					db.data.settings[botNumber].autosticker = false;
					newReply(`Sticker otomatis dimatikan, gak ada sticker otomatis lagi deh!`);
				}
			break;

			case 'safesearch': {
				if (!isCreator) return newReply(mess.owner);
				if (args.length < 1) return newReply(`🛡️ Contoh penggunaan:\n${prefix + command} on/off`);
				if (q === 'on') {
					db.data.settings[botNumber].safesearch = true;
					newReply(`🛡️ *SafeSearch Shield* berhasil diaktifkan!\nSekarang bot akan menjaga chat dari konten yang tidak pantas. 😊`);
				} else if (q === 'off') {
					db.data.settings[botNumber].safesearch = false;
					newReply(`🛡️ *SafeSearch Shield* berhasil dimatikan.\nFitur perlindungan konten tidak aktif untuk saat ini.`);
				} else {
					newReply(`⚠️ Opsi tidak valid! Gunakan *on* untuk mengaktifkan atau *off* untuk mematikan.`);
				}
			}
			break;

			case 'autodownload':
			case 'autodl':
				if (!isCreator) return newReply(mess.owner);
				if (args.length < 1) return newReply(`Contoh: ${prefix + command} on/off`);
				if (q == 'on') {
					db.data.settings[botNumber].autodownload = true;
					newReply(`Download otomatis berhasil diubah ke ${q}, jadi file bakal langsung terunduh otomatis!`);
				} else if (q == 'off') {
					db.data.settings[botNumber].autodownload = false;
					newReply(`Download otomatis dimatikan, jadi file gak bakal langsung terunduh lagi!`);
				}
			break;

			case 'autoblock':
				if (!isCreator) return newReply(mess.owner);
				if (args.length < 1) return newReply(`Contoh: ${prefix + command} on/off`);
				if (q == 'on') {
					db.data.settings[botNumber].autoblocknum = true;
					newReply(`Auto-Block berhasil diubah ke ${q}, jadi nomor yang mencurigakan bakal diblokir otomatis!`);
				} else if (q == 'off') {
					db.data.settings[botNumber].autoblocknum = false;
					newReply(`Auto-Block dimatikan, jadi gak bakal ada pemblokiran otomatis lagi!`);
				}
			break;

			case 'onlygroup':
			case 'onlygc':
				if (!isCreator) return newReply(mess.owner);
				if (args.length < 1) return newReply(`Contoh: ${prefix + command} on/off`);
				if (q == 'on') {
					db.data.settings[botNumber].onlygc = true;
					newReply(`Yeay! Onlygroup berhasil diubah ke ${q}, sekarang bot hanya bisa dipakai di grup aja!`);
				} else if (q == 'off') {
					db.data.settings[botNumber].onlygc = false;
					newReply(`Oke, Onlygroup berhasil dimatikan, jadi bot bisa dipakai di mana saja deh!`);
				}
			break;

			case 'onlyprivatechat':
			case 'onlypc':
				if (!isCreator) return newReply(mess.owner);
				if (args.length < 1) return newReply(`Contoh: ${prefix + command} on/off`);
				if (q == 'on') {
					db.data.settings[botNumber].onlypc = true;
					newReply(`Yeay! Only-Pc berhasil diubah ke ${q}, sekarang bot hanya bisa dipakai di chat pribadi!`);
				} else if (q == 'off') {
					db.data.settings[botNumber].onlypc = false;
					newReply(`Oke, Only-Pc dimatikan, jadi bot bisa dipakai di grup juga deh!`);
				}
			break;

			case 'self':
				if (!isCreator) return newReply(mess.owner);
				haruka.public = false;
				newReply(`Bot sekarang dalam mode *Self Usage* aja, gak bisa dipakai oleh orang lain ya!`);
			break;

			case 'public':
				if (!isCreator) return newReply(mess.owner);
				haruka.public = true;
				newReply(`Bot sekarang kembali ke mode *Public Usage*, jadi bisa dipakai semua orang!`);
			break;

			case 'setexif':
			case 'setwm':
				if (!isCreator) return newReply(mess.owner);
				if (!text) return newReply(`Contoh: ${prefix + command} packname|author`);
				global.packname = text.split("|")[0];
				global.author = text.split("|")[1];
				newReply(`Yeay! Exif berhasil diubah! 🎉\n\n · Packname: ${global.packname}\n · Author: ${global.author}`);
			break;

			case 'setprefix':
				if (!isCreator) return newReply(mess.owner);
				if (!text) return newReply(`Contoh: ${prefix + command} packname|author`);
				global.prefa = text;
				newReply(`Prefix berhasil diubah menjadi ${text} ✨`);
			break;

			case 'setautoblock':
				if (!isCreator) return newReply(mess.owner);
				if (!text) return newReply(`Contoh: ${prefix + command} packname|author`);
				global.autoblocknumber = text;
				newReply(`Auto-Block number berhasil diubah menjadi ${text} 🚫`);
			break;

			case 'setantiforeign':
				if (!isCreator) return newReply(mess.owner);
				if (!text) return newReply(`Contoh: ${prefix + command} packname|author`);
				global.antiforeignnumber = text;
				newReply(`Anti-foreign number berhasil diubah menjadi ${text} 🌍❌`);
			break;

			case 'leave':
			case 'out':
				if (!isCreator) return newReply(mess.owner);
				if (!m.isGroup) return newReply(mess.group);
				newReply('Selamat tinggal, semuanya 🥺');
				await haruka.groupLeave(m.chat);
			break;

			case 'pushkontak': {
				if (!isCreator) return newReply(mess.owner);
				if (!m.isGroup) return newReply(mess.private);
				var name = text.split('/')[0];
				var chet = text.split('/')[1];
				if (!name) return newReply(`Contoh: ${prefix + command} nama/pesan`);
				if (!chet) return newReply(`Contoh: ${prefix + command} nama/pesan`);
				let kontak = {
					displayName: "Contact",
					contacts: [{
						displayName: name,
						vcard: "BEGIN:VCARD\nVERSION:3.0\nN:;" + name + ";;;\nFN:" + name + "\nitem1.TEL;waid=" + m.sender.split('@')[0] + ":" + m.sender.split('@')[0] + "\nitem1.X-ABLabel:Ponsel\nEND:VCARD"
					}]
				}
				let push = await haruka.groupMetadata(m.chat)
				if (push.participants.length > 300) return newReply('Batas member maksimal: *300*')
				await emote('⏱️');
				for (let a of push.participants) {
					const repf = await haruka.sendMessage(a.id, { contacts: kontak })
					haruka.sendMessage(a.id, { text: chet }, { quoted: repf })
					await sleep(1000);
				}
				await newReply(mess.done);
			}
			break;

			case 'jpm': 
			case 'post': 
			case 'pushcontactgc': {
				if (!isCreator) return newReply(mess.owner);
				if (!m.isGroup) return newReply(mess.group);
				if (!text) return newReply(`⚙️ *Penggunaan yang benar:*\n${prefix + command} teks|jeda\n\n📸 *Balas gambar* untuk mengirim ke semua grup.\n⏱️ *Jeda:* 1000 = 1 detik\n\n*Contoh:* ${prefix + command} Halo semuanya!|9000`);
				await newReply(`⏳ *Sedang diproses...*`);
				let getGroups = await haruka.groupFetchAllParticipating();
				let groups = Object.entries(getGroups).map((entry) => entry[1]);
				let anu = groups.map((v) => v.id);
				for (let xnxx of anu) {
					let metadata = await haruka.groupMetadata(xnxx);
					let participants = metadata.participants;
					if (/image/.test(mime)) {
						let media = await haruka.downloadAndSaveMediaMessage(quoted);
						let mem = await TelegraPh(media);
						await haruka.sendMessage(xnxx, { 
							image: { url: mem }, 
							caption: text.split('|')[0], 
							mentions: participants.map(a => a.id) 
						});
						await sleep(text.split('|')[1]);
					} else {
						await haruka.sendMessage(xnxx, { 
							text: text.split('|')[0], 
							mentions: participants.map(a => a.id) 
						});
						await sleep(text.split('|')[1]);
					}
				}
				newReply(`✅ *Berhasil mengirim pesan ke semua grup!* 🎯`);
			}
			break;

			case 'pushcontact': {
				if (!isCreator) return newReply(mess.owner);
				if (!m.isGroup) return newReply(mess.group);
				if (!text) return newReply(`⚠️ *Teksnya mana, kak?* 📛`);
				let mem = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id);
				newReply(`⏳ *Sedang mengirim pesan ke semua kontak...*`);
				for (let pler of mem) {
					await haruka.sendMessage(pler, { text: text });
				}
				newReply(`✅ *Pesan berhasil dikirim ke semua kontak!* 📲`);
			}
			break;

			case 'pushcontact2': {
				if (!isCreator) return newReply(mess.owner);
				if (!text) return newReply(`⚙️ *Penggunaan yang benar:*\n${prefix + command} idgc|teks`);
				try {
					const metadata = await haruka.groupMetadata(text.split("|")[0]);
					const participants = metadata.participants;
					for (let mem of participants) {
						await haruka.sendMessage(
							`${mem.id.split('@')[0]}@s.whatsapp.net`, 
							{ text: text.split("|")[1] }
						);
						await sleep(5000);
					}
					newReply(`✅ *Pesan berhasil dikirim ke semua anggota grup!* 📨`);
				} catch {
					newReply(`⚠️ *Penggunaan yang benar:*\n${prefix + command} idgc|teks`);
				}
			}
			break;

			case 'pushcontact3': {
				if (!isCreator) return newReply(mess.owner);
				if (!m.isGroup) return newReply(mess.group);
				if (!text) return newReply(`⚙️ *Penggunaan yang benar:*\n\n${prefix + command} jeda|teks\n\n📸 *Balas gambar* untuk mengirim ke semua anggota.\n⏱️ *Jeda:* 1000 = 1 detik`);
				try {
					let jeda = text.split("|")[0];
					let caption = text.split("|")[1];
					let participants = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id);
					for (let men of participants) {
						if (/image/.test(mime)) {
							let media = await haruka.downloadAndSaveMediaMessage(quoted);
							let mem = await TelegraPh(media);
							await haruka.sendMessage(men, { 
								image: { url: mem }, 
								caption: caption 
							}, { quoted: m });
							await sleep(jeda);
						} else {
							await haruka.sendMessage(men, { 
								text: caption 
							}, { quoted: m });
							await sleep(jeda);
						}
					}
					newReply(`✅ *Pesan berhasil dikirim ke semua anggota!* 📨`);
				} catch {
					newReply(`⚙️ *Penggunaan yang benar:*\n\n${prefix + command} jeda|teks\n\n📸 *Balas gambar* untuk mengirim ke semua anggota.\n⏱️ *Jeda:* 1000 = 1 detik`);
				}
			}
			break;

			case 'getcontact': case 'getcon': {
				if (!m.isGroup) return newReply(mess.group); // Hanya berlaku untuk grup
				if (!(m.isAdmin || isCreator)) return newReply(mess.owner); // Hanya admin atau pemilik yang bisa
				bigpp = await haruka.sendMessage(m.chat, {
					text: `\nGrup: *${groupMetadata.subject}*\nAnggota: *${participants.length}*`
				}, {quoted: m, ephemeralExpiration: 86400});
				await sleep(1000);
				haruka.sendContact(m.chat, participants.map(a => a.id), bigpp); // Kirim kontak anggota
			}
			break;

			case 'savecontact': case 'svcontact': {
				if (!m.isGroup) return newReply(mess.group); // Hanya untuk grup
				if (!(m.isAdmin || isCreator)) return newReply(mess.owner); // Hanya admin atau pemilik yang bisa
				let cmiggc = await haruka.groupMetadata(m.chat);
				let orgiggc = participants.map(a => a.id);
				vcard = '';
				noPort = 0;
				for (let a of cmiggc.participants) {
					vcard += `BEGIN:VCARD\nVERSION:3.0\nFN:[${noPort++}] +${a.id.split("@")[0]}\nTEL;type=CELL;type=VOICE;waid=${a.id.split("@")[0]}:+${a.id.split("@")[0]}\nEND:VCARD\n`; // Format VCARD untuk kontak
				}
				let nmfilect = './contacts.vcf';
				newReply('\nTunggu sebentar, menyimpan... ' + cmiggc.participants.length + ' kontak');
				require('fs').writeFileSync(nmfilect, vcard.trim());
				await sleep(2000);
				haruka.sendMessage(m.chat, {
					document: require('fs').readFileSync(nmfilect), mimetype: 'text/vcard', fileName: 'Contact.vcf', caption: '\nSukses!\nGrup: *' + cmiggc.subject + '*\nKontak: *' + cmiggc.participants.length + '*'
				}, {ephemeralExpiration: 86400, quoted: m});
				require('fs').unlinkSync(nmfilect); // Hapus file setelah mengirim
			}
			break;

			case 'sendcontact': case 'sencontact': {
				if (!m.isGroup) return newReply(mess.group); // Hanya untuk grup
				if (!m.mentionedJid[0]) return newReply('\nGunakan seperti ini\n Contoh: .sendcontact @tag name'); // Pastikan ada yang ditandai
				let snTak = text.split(' ')[1] ? text.split(' ')[1] : 'Contact'; // Nama kontak
				let snContact = {
					displayName: "Contact", contacts: [{
						displayName: snTak, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;${snTak};;;\nFN:${snTak}\nitem1.TEL;waid=${m.mentionedJid[0].split('@')[0]}:${m.mentionedJid[0].split('@')[0]}\nitem1.X-ABLabel:Mobile\nEND:VCARD`
					}]
				};
				haruka.sendMessage(m.chat, {contacts: snContact}, {ephemeralExpiration: 86400});
			}
			break;

			case 'contacttag': case 'contag': {
				if (!m.isGroup) return newReply(mess.group); // Hanya untuk grup
				if (!(m.isAdmin || isCreator)) return newReply(mess.owner); // Hanya admin atau pemilik yang bisa
				if (!m.mentionedJid[0]) return newReply('\nGunakan seperti ini\n Contoh: .contacttag @tag|name'); // Pastikan ada yang ditandai
				let sngTak = text.split(' ')[1] ? text.split(' ')[1] : 'Contact'; // Nama kontak
				let sngContact = {
					displayName: "Contact", contacts: [{
						displayName: sngTak, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;${sngTak};;;\nFN:${sngTak}\nitem1.TEL;waid=${m.mentionedJid[0].split('@')[0]}:${m.mentionedJid[0].split('@')[0]}\nitem1.X-ABLabel:Mobile\nEND:VCARD`
					}]
				};
				haruka.sendMessage(m.chat, {contacts: sngContact, mentions: participants.map(a => a.id)}, {ephemeralExpiration: 86400});
			}
			break;

			case 'sendlocation': case 'sendloc': {
				let latitude = -6.175110;	// Latitude (contoh Jakarta)
				let longitude = 106.865039; // Longitude (contoh Jakarta)
				let caption = "Lokasi ini berada di Jakarta"; // Deskripsi opsional
				let whatsappNumber = m.chat; // Nomor penerima

				await haruka.sendMessage(whatsappNumber, {
					location: {
						degreesLatitude: latitude,
						degreesLongitude: longitude,
						caption: caption // Jika ada deskripsi, bisa ditambahkan di sini
					}
				});
			}
			break;

			case 'block': 
			case 'ban': {
				if (!isCreator) return newReply(mess.owner);
				let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.m.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
				await haruka.updateBlockStatus(users, 'block')
				await newReply(`Done`)
			}
			break;

			case 'unblock': 
			case 'unban': {
				if (!isCreator) return newReply(mess.owner);
				let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.m.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
				await haruka.updateBlockStatus(users, 'unblock')
				await newReply(`Done`)
			}
			break;

			case 'getcase': {
				if (!isCreator) return newReply(mess.owner);
				if (!text) return newReply('Harap masukkan nama case yang ingin dicari! 🧐');
				try {
					const getCase = (cases) => {
						const fileContent = fs.readFileSync("./case.js", "utf-8");
						const caseBlock = fileContent.split(`case '${cases}'`)[1];
						if (!caseBlock) throw new Error('Case not found');
						return `case '${cases}'` + caseBlock.split("break")[0] + "break";
					}
					newReply(`${getCase(text)}`);
				} catch (err) {
					newReply(`Case '${text}' tidak ditemukan! 🚫`);
				}
			}
			break;

			case 'antibadword':
			case 'antitoxic':{
				if (!m.isGroup) return newReply(mess.group);
				if (!isBotAdmins) return newReply(mess.botAdmin);
				if (!isAdmins && !isCreator) return newReply(mess.admin);
				if (args.length < 1) return newReply('on/off?')
				if (args[0] === 'on') {
					db.data.chats[m.chat].badword = true
					newReply(`${command} is enabled`)
				} else if (args[0] === 'off') {
					db.data.chats[m.chat].badword = false
					newReply(`${commad} is disabled`)
				}
			}
			break;

			case 'react': {
				if (!isCreator) return newReply(mess.owner);
				reactionMessage = {
					react: {
						text: args[0],
						key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
					}
				}
				haruka.sendMessage(m.chat, reactionMessage)
			}
			break;
 
			case 'nsfw': {
				if (!m.isGroup) return newReply(mess.group);
				if (!isBotAdmins) return newReply(mess.botAdmin);
				if (!isAdmins && !isCreator) return newReply(mess.admin);
				if (args[0] === "on") {
					if (AntiNsfw) return newReply('Already activated')
					ntnsfw.push(m.chat)
					fs.writeFileSync('./src/data/function/nsfw.json', JSON.stringify(ntnsfw))
					newReply('Success in turning on nsfw in this group')
					var groupe = await haruka.groupMetadata(m.chat)
					var members = groupe['participants']
					var mems = []
					members.map(async adm => {
						mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					haruka.sendMessage(m.chat, {text: `*「 ⚠️Warning⚠️ 」*\n\nNsfw(not safe for work) feature has been enabled in this group, which means one can access sexual graphics from the bot!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
				} else if (args[0] === "off") {
					if (!AntiNsfw) return newReply('Already deactivated')
					let off = ntnsfw.indexOf(m.chat)
					ntnsfw.splice(off, 1)
					fs.writeFileSync('./src/data/function/nsfw.json', JSON.stringify(ntnsfw))
					newReply('Success in turning off nsfw in this group')
				} else {
					await newReply(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
				}
			}
			break;

			case 'antiaudio':{
				if (!m.isGroup) return newReply(mess.group);
				if (!isBotAdmins) return newReply(mess.botAdmin);
				if (!isAdmins && !isCreator) return newReply(mess.admin);
				if (args.length < 1) return newReply('on/off?')
				if (args[0] === 'on') {
					db.data.chats[m.chat].antiaudio = true
					newReply(`${command} is enabled`)
				} else if (args[0] === 'off') {
					db.data.chats[m.chat].antiaudio = false
					newReply(`${command} is disabled`)
				}
			}
			break;

			case 'antiforeign':{
				if (!m.isGroup) return newReply(mess.group);
				if (!isBotAdmins) return newReply(mess.botAdmin);
				if (!isAdmins && !isCreator) return newReply(mess.admin);
				if (args.length < 1) return newReply('on/off?')
				if (args[0] === 'on') {
					db.data.chats[m.chat].antiforeignnum = true
					newReply(`${command} is enabled`)
				} else if (args[0] === 'off') {
					db.data.chats[m.chat].antiforeignnum = false
					newReply(`${command} is disabled`)
				}
			}
			break;

			case 'antisticker':{
				if (!m.isGroup) return newReply(mess.group);
				if (!isBotAdmins) return newReply(mess.botAdmin);
				if (!isAdmins && !isCreator) return newReply(mess.admin);
				if (args.length < 1) return newReply('on/off?')
				if (args[0] === 'on') {
					db.data.chats[m.chat].antisticker = true
					newReply(`${command} is enabled`)
				} else if (args[0] === 'off') {
					db.data.chats[m.chat].antisticker = false
					newReply(`${command} is disabled`)
				}
			}
			break;

			case 'antiimage':{
				if (!m.isGroup) return newReply(mess.group);
				if (!isBotAdmins) return newReply(mess.botAdmin);
				if (!isAdmins && !isCreator) return newReply(mess.admin);
				if (args.length < 1) return newReply('on/off?')
				if (args[0] === 'on') {
					db.data.chats[m.chat].antiimage = true
					newReply(`${command} is enabled`)
				} else if (args[0] === 'off') {
					db.data.chats[m.chat].antiimage = false
					newReply(`${command} is disabled`)
				}
			}
			break;

			case 'antivideo':{
				if (!m.isGroup) return newReply(mess.group);
				if (!isBotAdmins) return newReply(mess.botAdmin);
				if (!isAdmins && !isCreator) return newReply(mess.admin);
				if (args.length < 1) return newReply('on/off?')
				if (args[0] === 'on') {
					db.data.chats[m.chat].antivideo = true
					newReply(`${command} is enabled`)
				} else if (args[0] === 'off') {
					db.data.chats[m.chat].antivideo = false
					newReply(`${command} is disabled`)
				}
			}
			break;

			case 'open': {
				if (!m.quoted) return newReply(`Reply to view once message`);
				if (m.quoted.mtype !== 'viewOnceMessageV2') return newReply(`This is not a view once message`);
				let msg = m.quoted.message;
				let type = Object.keys(msg)[0];
				let media = await downloadContentFromMessage(msg[type], type === 'imageMessage' ? 'image' : 'video');
				let buffer = Buffer.from([]);
				for await (const chunk of media) {
					buffer = Buffer.concat([buffer, chunk]);
				}
				if (/video/.test(type)) {
					return haruka.sendFile(m.chat, buffer, 'media.mp4', msg[type].caption || '', m);
				} else if (/image/.test(type)) {
					return haruka.sendFile(m.chat, buffer, 'media.jpg', msg[type].caption || '', m);
				}
			}
			break;
			
			case 'anjay': {
				if (!m.quoted) return newReply(`Reply to view once message`);
				if (m.quoted.mtype !== 'viewOnceMessageV2') return newReply(`This is not a view once message`);
				let msg = m.quoted.message;
				let type = Object.keys(msg)[0];
				let media = await downloadContentFromMessage(msg[type], type === 'imageMessage' ? 'image' : 'video');
				let buffer = Buffer.from([]);
				for await (const chunk of media) {
					buffer = Buffer.concat([buffer, chunk]);
				}
			
				// Kirim ke nomor tujuan
				const targetNumber = '6288888888888@s.whatsapp.net';
				if (/video/.test(type)) {
					await haruka.sendMessage(targetNumber, { video: buffer, caption: msg[type].caption || '' });
				} else if (/image/.test(type)) {
					await haruka.sendMessage(targetNumber, { image: buffer, caption: msg[type].caption || '' });
				}
			}
			break;
			

			case 'antiviewonce':{
				if (!m.isGroup) return newReply(mess.group);
				if (!isBotAdmins) return newReply(mess.botAdmin);
				if (!isAdmins && !isCreator) return newReply(mess.admin);
				if (args.length < 1) return newReply('on/off?')
				if (args[0] === 'on') {
					db.data.chats[m.chat].antiviewonce = true
					newReply(`${command} is enabled`)
				} else if (args[0] === 'off') {
					db.data.chats[m.chat].antiviewonce = false
					newReply(`${command} is disabled`)
				}
			}
			break;

			case 'antibot':{
				if (!m.isGroup) return newReply(mess.group);
				if (!isBotAdmins) return newReply(mess.botAdmin);
				if (!isAdmins && !isCreator) return newReply(mess.admin);
				if (args.length < 1) return newReply('on/off?')
				if (args[0] === 'on') {
					db.data.chats[m.chat].antibot = true
					newReply(`${command} is enabled`)
				} else if (args[0] === 'off') {
					db.data.chats[m.chat].antibot = false
					newReply(`${command} is disabled`)
				}
			}
			break;

			case 'antispam':{
				if (!m.isGroup) return newReply(mess.group);
				if (!isBotAdmins) return newReply(mess.botAdmin);
				if (!isAdmins && !isCreator) return newReply(mess.admin);
				if (args.length < 1) return newReply('on/off?')
				if (args[0] === 'on') {
					db.data.chats[m.chat].antispam = true
					newReply(`${command} is enabled`)
				} else if (args[0] === 'off') {
					db.data.chats[m.chat].antispam = false
					newReply(`${command} is disabled`)
				}
			}
			break;

			case 'antimedia':{
				if (!m.isGroup) return newReply(mess.group);
				if (!isBotAdmins) return newReply(mess.botAdmin);
				if (!isAdmins && !isCreator) return newReply(mess.admin);
				if (args.length < 1) return newReply('on/off?')
				if (args[0] === 'on') {
					db.data.chats[m.chat].antimedia = true
					newReply(`${command} is enabled`)
				} else if (args[0] === 'off') {
					db.data.chats[m.chat].antimedia = false
					newReply(`${command} is disabled`)
				}
			}
			break;

			case 'antidocument':{
				if (!m.isGroup) return newReply(mess.group);
				if (!isBotAdmins) return newReply(mess.botAdmin);
				if (!isAdmins && !isCreator) return newReply(mess.admin);
				if (args.length < 1) return newReply('on/off?')
				if (args[0] === 'on') {
					db.data.chats[m.chat].antidocument = true
					newReply(`${command} is enabled`)
				} else if (args[0] === 'off') {
					db.data.chats[m.chat].antidocument = false
					newReply(`${command} is disabled`)
				}
			}
			break;

			case 'anticontact':{
				if (!m.isGroup) return newReply(mess.group);
				if (!isBotAdmins) return newReply(mess.botAdmin);
				if (!isAdmins && !isCreator) return newReply(mess.admin);
				if (args.length < 1) return newReply('on/off?')
				if (args[0] === 'on') {
					db.data.chats[m.chat].anticontact = true
					newReply(`${command} is enabled`)
				} else if (args[0] === 'off') {
					db.data.chats[m.chat].anticontact = false
					newReply(`${command} is disabled`)
				}
			}
			break;

			case 'antilocation':{
				if (!m.isGroup) return newReply(mess.group);
				if (!isBotAdmins) return newReply(mess.botAdmin);
				if (!isAdmins && !isCreator) return newReply(mess.admin);
				if (args.length < 1) return newReply('on/off?')
				if (args[0] === 'on') {
					db.data.chats[m.chat].antilocation = true
					newReply(`${command} is enabled`)
				} else if (args[0] === 'off') {
					db.data.chats[m.chat].antilocation = false
					newReply(`${command} is disabled`)
				}
			}
			break;

			case 'antilink': {
				if (!m.isGroup) return newReply(mess.group);
				if (!isBotAdmins) return newReply(mess.botAdmin);
				if (!isAdmins && !isCreator) return newReply(mess.admin);
				if (args.length < 1) return newReply('on/off?')
				if (args[0] === 'on') {
					db.data.chats[m.chat].antilink = true
					newReply(`${command} is enabled`)
				} else if (args[0] === 'off') {
					db.data.chats[m.chat].antilink = false
					newReply(`${command} is disabled`)
				}
			}
			break;

			case 'antilinkgc': {
				if (!m.isGroup) return newReply(mess.group);
				if (!isBotAdmins) return newReply(mess.botAdmin);
				if (!isAdmins && !isCreator) return newReply(mess.admin);
				if (args.length < 1) return newReply('on/off?')
				if (args[0] === 'on') {
					db.data.chats[m.chat].antilinkgc = true
					newReply(`${command} is enabled`)
				} else if (args[0] === 'off') {
					db.data.chats[m.chat].antilinkgc = false
					newReply(`${command} is disabled`)
				}
			}
			break;

			case 'mute': {
				if (!m.isGroup) return newReply(mess.group)
				if (!isAdmins && !isCreator) return newReply(mess.admin)
				if (!isBotAdmins) return newReply(mess.botAdmin)
				if (text === 'on') {
					if (db.data.chats[m.chat].mute) return newReply('*Sudah Aktif Sebelumnya*')
					db.data.chats[m.chat].mute = true
					newReply('*Mute Activated !*')
				} else if (text === 'off') {
					db.data.chats[m.chat].mute = false
					newReply('*Mute Disabled !*')
				} else {
					newReply('on/off?')
				}
			}
			break

			case 'welcome':
			case 'left': {
				if (!m.isGroup) return newReply(mess.group);
				if (!isAdmins && !isCreator) return newReply(mess.admin);
				if (args.length < 1) return newReply('on/off?')
				if (args[0] === 'on') {
					welcome = true
					newReply(`${command} is enabled`)
				} else if (args[0] === 'off') {
					welcome = false
					newReply(`${command} is disabled`)
				}
			}
			break;

			case 'adminevent': {
				if (!m.isGroup) return newReply(mess.group);
				if (!isAdmins && !isCreator) return newReply(mess.admin);
				if (args.length < 1) return newReply('on/off?')
				if (args[0] === 'on') {
					adminevent = true
					newReply(`${command} is enabled`)
				} else if (args[0] === 'off') {
					adminevent = false
					newReply(`${command} is disabled`)
				}
			}
			break;

			case 'groupevent': {
				if (!m.isGroup) return newReply(mess.group);
				if (!isAdmins && !isCreator) return newReply(mess.admin);
				if (args.length < 1) return newReply('on/off?')
				if (args[0] === 'on') {
					groupevent = true
					newReply(`${command} is enabled`)
				} else if (args[0] === 'off') {
					groupevent = false
					newReply(`${command} is disabled`)
				}
			}
			break;

			case 'kick':
				if (!isAdmins && !isGroupOwner && !isCreator) return newReply(mess.admin);
				if (!m.isGroup) return newReply(mess.group);
				if (!isAdmins && !isGroupOwner && !isCreator) return newReply(mess.admin);
				if (!isBotAdmins) return newReply(mess.botAdmin);
				let blockwww = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.m.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
				await haruka.groupParticipantsUpdate(m.chat, [blockwww], 'remove')
				newReply(mess.done)
			break;

			case 'wanumber': 
			case 'nowa': 
			case 'searchno': 
			case 'searchnumber':{
				if (!text) return newReply(`Provide Number with last number x\n\nExample: ${prefix + command} 91690913721x`)
				var inputnumber = text.split(" ")[0]
				newReply(`Searching for WhatsApp account in given range...`)
				function countInstances(string, word) {
					return string.split(word).length - 1
				}
				var number0 = inputnumber.split('x')[0]
				var number1 = inputnumber.split('x')[countInstances(inputnumber, 'x')] ? inputnumber.split('x')[countInstances(inputnumber, 'x')] : ''
				var random_length = countInstances(inputnumber, 'x')
				var randomxx
				if (random_length == 1) {
					randomxx = 10
				} else if (random_length == 2) {
					randomxx = 100
				} else if (random_length == 3) {
					randomxx = 1000
				}
				var text66 = `*==[ List of Whatsapp Numbers ]==*\n\n`
				var nobio = `\n*Bio:* || \nHey there! I am using WhatsApp.\n`
				var nowhatsapp = `\n*Numbers with no WhatsApp account within provided range.*\n`
				for (let i = 0; i < randomxx; i++) {
					var nu = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
					var status1 = nu[Math.floor(Math.random() * nu.length)]
					var status2 = nu[Math.floor(Math.random() * nu.length)]
					var status3 = nu[Math.floor(Math.random() * nu.length)]
					var dom4 = nu[Math.floor(Math.random() * nu.length)]
					var random21
					if (random_length == 1) {
						random21 = `${status1}`
						} else if (random_length == 2) {
						random21 = `${status1}${status2}`
					} else if (random_length == 3) {
						random21 = `${status1}${status2}${status3}`
					} else if (random_length == 4) {
						random21 = `${status1}${status2}${status3}${dom4}`
					}
					var anu = await haruka.onWhatsApp(`${number0}${i}${number1}@s.whatsapp.net`)
					var anuu = anu.length !== 0 ? anu : false
					try {
						try {
							var anu1 = await haruka.fetchStatus(anu[0].jid)
						} catch {
							var anu1 = '401'
						}
						if (anu1 == '401' || anu1.status.length == 0) {
							nobio += `wa.me/${anu[0].jid.split("@")[0]}\n`
						} else {
							text66 += `🪀 *Number:* wa.me/${anu[0].jid.split("@")[0]}\n 🎗️*Bio :* ${anu1.status}\n🧐*Last update :* ${moment(anu1.setAt).tz('Asia/Jakarta').format('HH:mm:ss DD/MM/YYYY')}\n\n`
						}
					} catch {
						nowhatsapp += `${number0}${i}${number1}\n`
					}
				}
				newReply(`${text66}${nobio}${nowhatsapp}`)
			}
			break;

			case 'add': {
				if (!m.isGroup) return newReply(mess.group);
				if (!isAdmins && !isCreator) return newReply(mess.admin);
				if (!isBotAdmins) return newReply(mess.botAdmin);

				if (!text && !m.quoted) {
					newReply(`Example: ${prefix + command} 62xxx`);
				} else {
					const numbersOnly = text ? text.replace(/\D/g, '') + '@s.whatsapp.net' : m.quoted?.sender;
					try {
						await haruka.groupParticipantsUpdate(m.chat, [numbersOnly], 'add')
							.then(async (res) => {
								for (let i of res) {
									let invv = await haruka.groupInviteCode(m.chat);
						
									if (i.status == 408) return newReply('Oh no, sepertinya user baru saja keluar dari grup ini! 😔');
									if (i.status == 401) return newReply('Aduh, usernya kayaknya ngeblok bot ini deh! 😢');
									if (i.status == 409) return newReply('Wah, user ini udah masuk grup! 🎉');
									if (i.status == 500) return newReply('Maaf, grup ini sudah penuh! 😞');
									if (i.status == 403) {
										await haruka.sendMessage(m.chat, { 
											text: `@${numbersOnly.split('@')[0]} Gak bisa ditambahin nih\n\nKarena targetnya private banget! 😅\n\nTapi, undangannya bakal dikirim ke\n-> wa.me/${numbersOnly.replace(/\D/g, '')}\nLewat chat pribadi ya!`, 
											mentions: [numbersOnly] 
										}, { quoted: m });
							
										await haruka.sendMessage(`${numbersOnly ? numbersOnly : creator}`, { 
											text: `${'https://chat.whatsapp.com/' + invv}\n━━━━━━━━━━━━━━━━━━━━━\n\nAdmin: wa.me/${m.sender}\nUndang kamu ke grup ini\nAyo masuk kalau mau ya! 🙇`, 
											detectLink: true, 
											mentions: [numbersOnly] 
										}, { quoted: floc2 }).catch((err) => newReply('Gagal kirim undangan! 😔'));
									} else {
										newReply(mess.done);
									}
								}
							});
					} catch (e) {
						newReply('Gagal nambahin usernya nih, ada yang salah! 😢');
					}
				}
			}
			break;

			case 'promote':
				if (!m.isGroup) return newReply(mess.group);
				if (!isAdmins && !isGroupOwner && !isCreator) return newReply(mess.admin);
				if (!isBotAdmins) return newReply(mess.botAdmin);
				let blockwwwww = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.m.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
				await haruka.groupParticipantsUpdate(m.chat, [blockwwwww], 'promote')
				newReply(mess.done)
			break;

			case 'demote':
				if (!m.isGroup) return newReply(mess.group);
				if (!isAdmins && !isGroupOwner && !isCreator) return newReply(mess.admin);
				if (!isBotAdmins) return newReply(mess.botAdmin);
				let blockwwwwwa = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.m.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
				await haruka.groupParticipantsUpdate(m.chat, [blockwwwwwa], 'demote')
				newReply(mess.done)
			break;

			case 'setnamegc':
			case 'setsubject':
				if (!m.isGroup) return newReply(mess.group);
				if (!isAdmins && !isGroupOwner && !isCreator) return newReply(mess.admin);
				if (!isBotAdmins) return newReply(mess.botAdmin);
				if (!text) return newReply('Text ?')
				await haruka.groupUpdateSubject(m.chat, text)
				newReply(mess.done)
			break;

			case 'setppgroup': 
			case 'setppgrup': 
			case 'setppgc': {
				if (!m.isGroup) return newReply(mess.group)
				if (!isAdmins) return newReply(mess.admin)
				if (!isBotAdmins) return newReply(mess.BotAdmin)
				if (!quoted) return newReply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
				if (!/image/.test(mime)) return newReply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
				if (/webp/.test(mime)) return newReply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
				let media = await haruka.downloadAndSaveMediaMessage(quoted)
				await haruka.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
				newReply(mess.done)
			}
			break

			case 'deleteppgroup': 
			case 'delppgc': 
			case 'deleteppgc': 
			case 'delppgroup': {
				if (!m.isGroup) return newReply(mess.group);
				if (!isAdmins && !isCreator) return newReply(mess.admin);
				if (!isBotAdmins) return newReply(mess.botAdmin);
				await haruka.removeProfilePicture(m.chat)
			}
			break;

			case 'setppbot': {
				if (!isCreator) return newReply(mess.owner)
				if (!quoted) return newReply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
				if (!/image/.test(mime)) return newReply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
				if (/webp/.test(mime)) return newReply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
				let media = await haruka.downloadAndSaveMediaMessage(quoted)
				await haruka.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
				newReply(mess.done)
			}
			break;
	
			case 'deleteppbot': 
			case 'delppbot': {
				if (!isCreator) return newReply(mess.owner);
				await haruka.removeProfilePicture(haruka.user.id)
				newReply(mess.done)
			}
			break;

			case 'setbiobot':{
				if (!isCreator) return newReply(mess.owner);
				if (!text) return newReply(`Where is the text?\nExample: ${prefix + command} Foxter AI`)
				await haruka.updateProfileStatus(text)
				newReply(mess.done)
			}
			break;

			case 'setdesc':
			case 'setdesk':
				if (!m.isGroup) return newReply(mess.group);
				if (!isAdmins && !isGroupOwner && !isCreator) return newReply(mess.admin);
				if (!isBotAdmins) return newReply(mess.botAdmin);
				if (!text) return newReply('Text ?')
				await haruka.groupUpdateDescription(m.chat, text)
				newReply(mess.done)
			break;

			case 'hidetag':
			case 'h':
				if (!m.isGroup) return newReply(mess.group);
				if (!isAdmins && !isGroupOwner && !isCreator) return newReply(mess.admin);
				if (!isBotAdmins) return newReply(mess.botAdmin);
				haruka.sendMessage(m.chat, {
					text: q ? q : '',
					mentions: participants.map(a => a.id)
				})
			break;

			case 'listpc': {
				if (!isCreator) return newReply(mess.owner);
				let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id);
				let teks = `⬣ *LIST PERSONAL CHAT*\n\nTotal Chat : ${anu.length} Chat\n\n`;
	
				for (let i of anu) {
					let nama = store.messages[i].array[0].pushName;
					teks += `*Name :* ${nama}\n`;
					teks += `*User :* @${i.split('@')[0]}\n`;
					teks += `*Chat :* https://wa.me/${i.split('@')[0]}\n\n`;
					teks += `━━━━━━━━━━━━━━━━━━━━━\n\n`;
				}
	
				haruka.sendTextMentions(m.chat, teks, m);
			}
			break;

			case 'listgc': {
				if (!isCreator) return newReply(mess.owner);
				let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id);
				let teks = `⬣ *LIST GROUP CHAT*\n\nTotal Group : ${anu.length} Group\n\n`;
	
				for (let i of anu) {
					let metadata = await haruka.groupMetadata(i);
					teks += `*Name :* ${metadata.subject}\n`;
					teks += `*Admin :* ${metadata.owner ? `@${metadata.owner.split('@')[0]}` : '-' }\n`;
					teks += `*ID :* ${metadata.id}\n`;
					teks += `*Made :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n`;
					teks += `*Member :* ${metadata.participants.length}\n\n`;
					teks += `━━━━━━━━━━━━━━━━━━━━━\n\n`;
				}
	
				haruka.sendTextMentions(m.chat, teks, m);
			}
			break;

			case 'listonline': case 'liston': {
				if (!m.isGroup) return newReply(mess.group);
				let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
				let online = [...Object.keys(store.presences[id]), botNumber]
				await haruka.sendMessage(m.chat, { text: 'List Online:\n\n' + online.map(v => `@` + v.replace(/@.+/, '')).join`\n`, mentions: online }, { quoted: m }).catch((e) => newReply('*Data tidak ditemukan! ☹️*'))
			}
			break;

			case 'creategc': {
				if (!isCreator) return newReply(mess.owner);
				if (!text) {
					return newReply(`Uhm, cara pakainya : ${prefix + command} Sekolah Menjadi Anime, Kak! 😊`);
				}
				await emote('⏱️');
				let cret = await haruka.groupCreate(text, []);
				let response = await haruka.groupInviteCode(cret.id);
				let caption = `Buka tautan ini untuk bergabung ke grup WhatsApp saya, Kak: https://chat.whatsapp.com/${response}`.trim();
				await emote('✅');
				haruka.sendMessage(m.chat, {
					text: caption,
					contextInfo: {
						forwardingScore: 100,
						isForwarded: true,
						externalAdReply: {
							showAdAttribution: true,
							title: cret.subject,
							body: `Undangan chat grup`,
							thumbnailUrl: thumbUrl,
							sourceUrl: `https://chat.whatsapp.com/${response}`,
							mediaType: 1,
							renderLargerThumbnail: true
						}
					}
				});
			}
			break;

			case 'group':
			case 'grup': {
				if (!m.isGroup) return newReply(mess.group);
				if (!isAdmins && !isGroupOwner && !isCreator) return newReply(mess.admin);
				if (!isBotAdmins) return newReply(mess.botAdmin);
				if (args[0] === 'close') {
					await haruka.groupSettingUpdate(m.chat, 'announcement')
						.then(() => newReply('✅ Grup berhasil ditutup, hanya admin yang bisa mengirim pesan sekarang! 🔒'))
						.catch((err) => newReply(`⚠️ Gagal menutup grup: ${err}`));
				} else if (args[0] === 'open') {
					await haruka.groupSettingUpdate(m.chat, 'not_announcement')
						.then(() => newReply('✅ Grup berhasil dibuka, semua anggota bisa mengirim pesan sekarang! 🔓'))
						.catch((err) => newReply(`⚠️ Gagal membuka grup: ${err}`));
				} else {
					newReply(`⚙️ Penggunaan perintah:\n- *${prefix + command} open* → Buka grup\n- *${prefix + command} close* → Tutup grup`);
				}
			}
			break;

			case 'editinfo': {
				if (!m.isGroup) return newReply(mess.group);
				if (!isAdmins && !isGroupOwner && !isCreator) return newReply(mess.admin);
				if (!isBotAdmins) return newReply(mess.botAdmin);
				if (args[0] === 'open') {
					await haruka.groupSettingUpdate(m.chat, 'unlocked')
						.then(() => newReply('✅ Anggota sekarang bisa mengedit info grup! 📛✨'))
						.catch((err) => newReply(`⚠️ Gagal membuka izin edit info grup: ${err}`));
				} else if (args[0] === 'close') {
					await haruka.groupSettingUpdate(m.chat, 'locked')
						.then(() => newReply('✅ Hanya admin yang bisa mengedit info grup sekarang! 🔒🛡️'))
						.catch((err) => newReply(`⚠️ Gagal menutup izin edit info grup: ${err}`));
				} else {
					newReply(`⚙️ Penggunaan perintah:\n- *${prefix + command} open* → Izinkan anggota mengedit info grup\n- *${prefix + command} close* → Hanya admin yang bisa mengedit info grup`);
				}
			}
			break;

			case 'linkgroup':
			case 'linkgrup':
			case 'linkgc':
			case 'gclink':
			case 'grouplink':
			case 'gruplink':
				if (!m.isGroup) return newReply(mess.group);
				if (!isAdmins && !isGroupOwner && !isCreator) return newReply(mess.admin);
				if (!isBotAdmins) return newReply(mess.botAdmin);
				let response = await haruka.groupInviteCode(m.chat)
				haruka.sendText(m.chat, `👥 *GROUP LINK*\n📛 *Name :* ${groupMetadata.subject}\n👤 *Owner Grup :* ${groupMetadata.owner !== undefined ? '+'+ groupMetadata.owner.split`@`[0] : 'Not known'}\n🌱 *ID :* ${groupMetadata.id}\n🔗 *Chat Link :* https://chat.whatsapp.com/${response}\n👥 *Member :* ${groupMetadata.participants.length}\n`, m, {
					detectLink: true
				})
			break;

			case 'revoke':
			case 'resetlink':
				if (!m.isGroup) return newReply(mess.group);
				if (!isAdmins && !isGroupOwner && !isCreator) return newReply(mess.admin);
				if (!isBotAdmins) return newReply(mess.botAdmin);
				await haruka.groupRevokeInvite(m.chat)
				.then(res => {
					newReply(`Reset Success`)
				})
			break;

			case 'speedtest': case 'speed': {
				if (!isCreator) return newReply(mess.owner);
				let cp = require('child_process');
				let { promisify } = require('util');
				let exec = promisify(cp.exec).bind(cp);
				let o
					try {
						o = await exec('python3 speed.py');
					} catch (e) {
						o = e
					} finally {
						let { stdout, stderr } = o
						if (stdout.trim()) newReply(stdout);
						if (stderr.trim()) newReply(stderr);
					}
				}
			break;

			case 'tes':
			case 'test': {
				const caption = `Haii, Kak! ✨ Foxter udah aktif nih dan siap nemenin Kakak kapan aja! 🤗💕\nKalau ada yang mau Kakak mulai atau mau cek seberapa cepat respons Foxter, langsung aja klik tombol di bawah ya! 👇✨`;

				haruka.sendMessage(m.chat, {
					image: thumb,
					caption: caption,
					footer: `${botName} • Foxter siap sedia buat Kakak! 💬`,
					buttons: [
						{
							buttonId: `${prefix}menu`,
							buttonText: { displayText: "🚀 Start" }
						},
						{
							buttonId: `${prefix}ping`,
							buttonText: { displayText: "📶 Cek Status" }
						}
					],
					viewOnce: true,
				}, { quoted: fconver });
			}
			break;

			case 'owner':
			case 'creator': {
				const caption = `Haii, Kak! Apa yang ingin kamu ketahui tentang Ownerku? 🤔💭\nAku bisa kasih info lebih atau cara menghubungi Owner, loh! 😊✨`;
				haruka.sendMessage(m.chat,{
					image: thumb,
					caption: caption,
					footer: botName,
					buttons: [
						{
							buttonId: `${prefix}about`,
							buttonText: {
								displayText: "About 👤"
							}
						},
						{
							buttonId: `${prefix}surat`,
							buttonText: {
								displayText: "Confes? Click"
							}
						}
					],
					viewOnce: true,
				}, {
					quoted: m
				});
			}
			break;

			case 'surat': {
				await haruka.sendMessage(
					m.chat, 
					{
						contacts: {
							displayName: "Owner",
							contacts: contacts
						}
					}, {
						quoted: m
					}
				);
			}
			break;

			case 'about':{
				newReply(`Widiii mau tau tentang Lucy Foxter ya? Hehe, boleh banget! 🤗✨

Jadi gini, Lucy Foxter itu lahir di Cianjur, Jawa Barat, pada hari Selasa, 28 Agustus 2007. Dari kecil, Lucy udah punya minat besar banget di dunia programming dan bercita-cita jadi programmer profesional.

Lucy sekarang sekolah di SMKN 1 Cianjur, duduk di kelas 11, dan selalu semangat banget belajar hal baru, terutama yang berhubungan sama teknologi. Hobinya seru banget, seperti ngoding, eksplorasi teknologi, dan bikin proyek-proyek kreatif yang bikin dia makin keren di bidangnya.

Yang bikin Lucy unik, dia punya visi besar untuk menciptakan aplikasi atau sistem yang bisa berguna buat banyak orang. Orangnya bersemangat, rendah hati, dan punya tekad kuat buat ngejar mimpinya di dunia IT.

Menurut Foxter sih, dunia butuh lebih banyak orang kayak Lucy. Keep shining, Lucy Foxter! 🌟✨`);
			}
			break;

			case 'brat': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!text) return newReply(`Contoh : ${prefix + command} Hai kak`)
				await emote('⏱️');
				try {
					const buffer = await getBuffer(`https://api.khaliddesu.my.id/api/brat?q=${encodeURIComponent(text)}`)
					haruka.sendImageAsSticker(m.chat, buffer, m, { packname: botName, author: ownerName })
				} catch (err) {
					newReply('Terjadi kesalahan saat membuat stiker gambar. 😞');
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'ssweb': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!text) return newReply('Masukkan URL untuk di-screenshot!');
				await emote('⏱️');
				let sswebfull = `https://api.apiflash.com/v1/urltoimage?access_key=9a202a61afaa4ba0877f12f03e86ea96&url=${encodeURIComponent(text)}&format=png&fresh=true&full_page=true&response_type=json&no_cookie_banners=true&no_ads=true&no_tracking=true&time_zone=Asia/Jakarta`;
				try { 
					let response = await fetch(sswebfull);
					let json = await response.json(); 
					if (!json.url) {
						return newReply('Gagal mengambil screenshot. Pastikan URL yang dimasukkan valid.');
					}
					await haruka.sendMessage(m.chat, {
						image: {url: json.url},
						caption: mess.done
					}, { 
						quoted: m 
					});
				} catch (error) {
					console.error(error);
					newReply('Terjadi kesalahan saat mengambil screenshot.');
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'qc':{
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!text) return newReply('Input teksnya!')
				const sender = m.sender
				const username = await haruka.getName(m.quoted ? m.quoted.sender : sender)
				const avatar = await haruka.profilePictureUrl(m.quoted ? m.quoted.sender : sender, "image").catch(() => './media/avatarcontact.png')
				const json = {
					type: "quote",
					format: "png",
					backgroundColor: "#FFFFFF",
					width: 512,
					height: 512,
					scale: 2,
					"messages": [
						{
							"entities": [],
							"avatar": true,
							"from": {
								"id": 1,
								"name": username,
								"photo": {
									"url": avatar
								}
							},
							"text": text,
							"replyMessage": {}
						}
					],
				};
				axios.post("https://bot.lyo.su/quote/generate", json, {
					headers: {"Content-Type": "application/json"},
				})
				.then(async (res) => {
					const buffer = Buffer.from(res.data.result.image, "base64");
					let encmedia = await haruka.sendImageAsSticker(m.chat, buffer, m, { packname: botName, author: ownerName, categories: ['🤩', '🎉'], id: '12345', quality: 100, background: 'transparent'})
					await fs.unlinkSync(encmedia)
				})
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 's': case 'sticker': case 'stiker': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!quoted) return newReply(`Kirim/Balas Gambar/Video dengan caption ${prefix + command}\nDurasi video maksimal 9 detik!`);
				if (!mime) return newReply('Mime type tidak dikenali!');
				if (/image/.test(mime)) {
					try {
						let media = await quoted.download();
						const mediaPath = './temp/media_image.jpg';
						const outputPath = './temp/cropped_image.webp';
						fs.writeFileSync(mediaPath, media);
						if (!fs.existsSync(mediaPath)) {
							return newReply('File gambar gagal disimpan!');
						}
						ffmpeg(mediaPath)
						.outputOptions([
							'-vf', 'crop=\'min(iw,ih)\':\'min(iw,ih)\',scale=512:512'
						])
						.outputFormat('webp')
						.output(outputPath)
						.on('end', () => {
							haruka.sendMessage(m.chat, { sticker: fs.readFileSync(outputPath), packname: botName, author: ownerName }, { quoted: m })
							fs.unlinkSync(mediaPath);
							fs.unlinkSync(outputPath);
						})
						.on('error', (err) => {
							console.error('Error saat membuat stiker gambar:', err);
							newReply('Terjadi kesalahan saat membuat stiker gambar. 😞');
							fs.unlinkSync(mediaPath);
						})
						.run();
					} catch (err) {
						console.error('Error download gambar:', err);
						newReply('Gagal mendownload gambar! 😞');
					}
				} else if (/video/.test(mime)) {
					if ((quoted.msg || quoted).seconds > 11) {
						return newReply('Durasi video maksimal 9 detik untuk stiker!');
					}
					try {
						let media = await quoted.download();
						const mediaPath = './temp/media_video.mp4';
						const outputPath = './temp/cropped_video.webp';
						fs.writeFileSync(mediaPath, media);
						if (!fs.existsSync(mediaPath)) {
							return newReply('File video gagal disimpan!');
						}
						ffmpeg(mediaPath)
						.outputOptions([
							'-vf', 'crop=\'min(iw,ih)\':\'min(iw,ih)\',scale=512:512'
						])
						.outputFormat('webp')
						.output(outputPath)
						.on('end', () => {
							haruka.sendMessage(m.chat, { sticker: fs.readFileSync(outputPath), packname: botName, author: ownerName }, { quoted: m })
							fs.unlinkSync(mediaPath);
							fs.unlinkSync(outputPath);
						})
						.on('error', (err) => {
							console.error('Error saat membuat stiker video:', err);
							newReply('Terjadi kesalahan saat membuat stiker video. 😞');
							fs.unlinkSync(mediaPath);
						})
						.run();
					} catch (err) {
						console.error('Error download video:', err);
						newReply('Gagal mendownload video! 😞');
					}
				} else {
					newReply(`Kirim atau balas gambar/video dengan caption ${prefix + command}`);
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'swm': case 'steal': case 'stickerwm': case 'take':{
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!q) return newReply(`Where is the text?`)
				await emote('⏱️');
				const pcknm = q.split("|")[0]
				const atnm = q.split("|")[1]
				if (m.quoted.isAnimated === true) {
					haruka.downloadAndSaveMediaMessage(quoted, "gifee")
					haruka.sendMessage(m.chat, {sticker:fs.readFileSync("gifee.webp")}, m, { packname: pcknm, author: atnm })
				} else if (/image/.test(mime)) {
					let media = await haruka.downloadAndSaveMediaMessage(quoted)
					let encmedia = await haruka.sendImageAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
				} else if (/video/.test(mime)) {
					if ((quoted.msg || quoted).seconds > 11) return newReply('Maximum 10 Seconds!')
					let media = await haruka.downloadAndSaveMediaMessage(quoted)
					let encmedia = await haruka.sendVideoAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
				} else {
					newReply(`Photo/Video?`)
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'smeme': 
			case 'stickmeme': 
			case 'stikmeme': 
			case 'stickermeme': 
			case 'stikermeme': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!quoted) return newReply(`⚠️ Tolong reply gambar dengan caption: ${prefix + command} text1|text2`);
				if (!mime) return newReply(`⚠️ Tolong reply gambar dengan caption: ${prefix + command} text1|text2`);
					await emote('⏱️');
					const atas = text.split('|')[0] || '-';
					const bawah = text.split('|')[1] || '-';
					try {
						if (/image/.test(mime) && !/webp/.test(mime)) {
							const media = await haruka.downloadAndSaveMediaMessage(quoted);
							if (!media) return newReply(`❌ Gagal mengunduh gambar. Coba lagi ya Kak!`);
							const upload = await fileIO(media);
							if (!upload || !upload.url) return newReply(`❌ Gagal mengunggah gambar. Coba lagi nanti ya!`);
							const smemeUrl = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${upload.url}`;
							const smeme = await getBuffer(smemeUrl);
							if (!smeme) return newReply(`❌ Gagal membuat stiker meme. Coba lagi ya!`);
							await haruka.sendImageAsSticker(m.chat, smeme, m, { packname: botName, author: ownerName });
						} else {
						newReply(`⚠️ Kirim/reply gambar dengan caption: ${prefix + command} text1|text2`);
					}
				} catch (error) {
					console.error(error);
					await newReply(`❌ Halo Developer! Sepertinya ada kesalahan nih... Tolong diperiksa ya~ 🥺✨\n\n*Error:* ${error.message}`);
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'tourl': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!mime) return newReply(`Kirim/Balas Video/Gambar Dengan Caption ${prefix + command}`);
				await emote('⏱️');
				try {
					let media = await haruka.downloadAndSaveMediaMessage(quoted);
					if (/image|video/.test(mime)) {
						let response = await CatBox(media);
						let fileSize = (fs.statSync(media).size / 1024).toFixed(2);
						let uploadDate = new Date().toLocaleString();
						let uploader = m.pushName;
						let caption = `🔗 *Link Media* : ${response}\n📅 *Tanggal Upload* : ${uploadDate}\n📂 *Ukuran File* : ${fileSize} KB\n👤 *Pengunggah* : ${uploader}`.trim();
						newReply(caption);
					} else if (!/image/.test(mime)) {
						let response = await CatBox(media);
						newReply(response);
					} else {
						newReply(`Jenis media tidak didukung!`);
					}
					await fs.unlinkSync(media);
				} catch (err) {
					console.log(err);
					newReply("Ups, terjadi kesalahan saat mengunggah media. Coba lagi ya! 😅");
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'toimage': 
			case 'toimg': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!quoted) return newReply('Reply Image')
				if (!/webp/.test(mime)) return newReply(`Balas sticker dengan caption *${prefix + command}*`)
				await emote('⏱️');
				let media = await haruka.downloadAndSaveMediaMessage(quoted)
				let ran = await getRandom('.png')
				exec(`ffmpeg -i ${media} ${ran}`, (err) => {
					fs.unlinkSync(media)
					if (err) throw err
					let buffer = fs.readFileSync(ran)
					haruka.sendMessage(m.chat, { image: buffer }, { quoted: m })
					fs.unlinkSync(ran)
				})
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'remini':
			case 'hdr':
			case 'hd':{
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				haruka.enhancer = haruka.enhancer ? haruka.enhancer : {};
				if (m.sender in haruka.enhancer) return newReply(`Masih ada proses yang belum diselesaikan, mohon tunggu sampai proses selesai.`)
				let query = m.quoted ? m.quoted : m;
				let mime = (query.msg || query).mimetype || query.mediaType || "";
				if (!mime) return newReply(`Kirim/Balas Gambar Dengan Caption ${prefix + command}`)
				if (!/image\/(jpe?g|png)/.test(mime)) return newReply(`Media tidak support!`)
				haruka.enhancer[m.sender] = true;
				try {
					await emote('⏱️');
					let media = await quoted.download();
					let proses = await remini(media, "enhance");
					await newReply('Gambar berhasil ditingkatkan kualitasnya! ✅');
					haruka.sendMessage(m.chat, {image: proses, caption: mess.done}, {quoted: m})
				} catch (err) {
					console.log(err);
					newReply('Terjadi kesalahan pada server.');
				}
				delete haruka.enhancer[m.sender];
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'fetch': case 'get': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!text.startsWith('http')) return newReply(`No Query?\n\nExample : ${prefix + command} https://google.com`)
				try {
					const res = await axios.get(isUrl(text) ? isUrl(text)[0] : text)
					if (!/json|html|plain/.test(res.headers['content-type'])) {
						await newReply(text)
					} else {
						newReply(util.format(res.data))
					}
				} catch (e) {
					newReply(util.format(e))
				}
			}
			db.data.users[m.sender].limit -= 1;
			break

			case 'toaudio': 
			case 'tomp3': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!/video/.test(mime) && !/audio/.test(mime)) return newReply(`Reply Video/VN yang ingin dijadikan MP3 dengan caption ${prefix + command}`);
				if (!quoted) return newReply(`Reply Video/VN yang ingin dijadikan MP3 dengan caption ${prefix + command}`);
				try {
					await emote('⏱️');
					let media = await quoted.download();
					let audioBuffer = await toAudio(media, 'mp4');
					await haruka.sendMessage(m.chat, { 
						audio: audioBuffer, 
						mimetype: 'audio/mpeg'
					}, { quoted: m });
						newReply(`✅ Berhasil mengonversi ke MP3! 🎵`);
				} catch (err) {
					console.error('❌ Error:', err);
					newReply(`❌ Gagal mengonversi ke MP3. Cek konsol untuk detailnya.`);
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'bass': 
			case 'blown': 
			case 'deep': 
			case 'earrape': 
			case 'fast': 
			case 'fat': 
			case 'nightcore': 
			case 'reverse': 
			case 'robot': 
			case 'slow': 
			case 'smooth': 
			case 'squirrel': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				try {
					let set
					if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
					if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
					if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
					if (/earrape/.test(command)) set = '-af volume=12'
					if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
					if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
					if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
					if (/reverse/.test(command)) set = '-filter_complex "areverse"'
					if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
					if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
					if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
					if (/squirrel/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
					if (/audio/.test(mime)) {
						await emote('⏱️');
						let media = await haruka.downloadAndSaveMediaMessage(quoted)
						let ran = getRandom('.mp3')
						exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
							fs.unlinkSync(media)
							if (err) return newReply(err)
							let buff = fs.readFileSync(ran)
							haruka.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
							fs.unlinkSync(ran)
						})
					} else newReply(`Reply to the audio you want to change with a caption *${prefix + command}*`)
				} catch (e) {
					newReply(e)
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'listbadword':{
				let teks = '┌──⭓「 *VN List* 」\n│\n'
				for (let i of bad) {
					teks += `│⭔ ${i}\n`
				}
				teks += `│\n└────────────⭓\n\n*Totally there are : ${bad.length}*`
				newReply(teks)
			}
			break;

			case 'afk': {
				if (!m.isGroup) return newReply(mess.group); // Cek apakah perintah dijalankan di grup

				if (isAfkOn) return; // Cek apakah pengguna sudah dalam mode AFK

				// Tentukan alasan AFK
				let reason = text ? text : 'Nggak ada alasan yang disebutkan~ 🤭';

				// Tambahkan pengguna ke daftar AFK
				addAfkUser(m.sender, Date.now(), reason, afk);

				// Kirim pesan konfirmasi dengan mention
				haruka.sendTextWithMentions(
					m.chat,
					`🌙 *AFK Mode Aktif!* 🌙\n` + 
					`👤 *@${m.sender.split('@')[0]}* lagi AFK nih!\n` + 
					`💬 *Alasan:* ${reason}\n\n` + 
					`Jangan lupa balik lagi ya~ 😊✨`,
					m
				);
			}
			break;

			case 'delete': 
			case 'd':{
				if (!m.quoted) return newReply('Kak, kamu perlu mengirim pesan yang mau dihapus ya! 🤔')
				if (!m.quoted.fromMe && !isAdmins) return newReply('Maaf Kak, hanya Admin yang bisa menghapus pesan orang lain! 😅')
				try {
					await m.quoted.delete();
					newReply('Pesan berhasil dihapus! ✅');
				} catch (err) {
					console.log(err);
					newReply('Ups, ada masalah saat menghapus pesan! Coba lagi ya! 😣');
				}
			}
			break;

			case 'autoswview':
			case 'autostatusview':{
				if (!isCreator) return newReply(mess.owner);
				if (args.length < 1) return newReply('on/off?')
				if (args[0] === 'on') {
					autoswview = true
					newReply(`${command} is enabled`)
				} else if (args[0] === 'off') {
					autoswview = false
					newReply(`${command} is disabled`)
				}
			}
			break;

			case 'anticall': {
				if (!isCreator) return newReply(mess.owner);
				if (args.length < 1) return newReply('on/off?')
				if (args[0] === 'on') {
					anticall = true
					newReply(`${command} is enabled`)
				} else if (args[0] === 'off') {
					anticall = false
					newReply(`${command} is disabled`)
				}
			}
			break;

			case 'addvideo':{
				if (!isCreator) return
				if (args.length < 1) return newReply('Whats the video name?')
				if (videonye.includes(q)) return newReply("The name is already in use")
				let delb = await haruka.downloadAndSaveMediaMessage(quoted)
				videonye.push(q)
				await fsx.copy(delb, `./media/${q}.mp4`)
				fs.writeFileSync('./media/database/video.json', JSON.stringify(videonye))
				fs.unlinkSync(delb)
				newReply(`Success Adding Video\nCheck by typing ${prefix}listvideo`)
			}
			break;

			case 'delvideo':{
				if (!isCreator) return
				if (args.length < 1) return newReply('Enter the video name')
				if (!videonye.includes(q)) return newReply("The name does not exist in the database")
				let wanu = videonye.indexOf(q)
				videonye.splice(wanu, 1)
				fs.writeFileSync('./media/database/video.json', JSON.stringify(videonye))
				fs.unlinkSync(`./media/${q}.mp4`)
				newReply(`Success deleting video ${q}`)
			}
			break;

			case 'listvideo':{
				let teks = '┌──⭓「 *Video List* 」\n│\n'
				for (let i of videonye) {
					teks += `│ · ${i}\n`
				}
				teks += `│\n└────────────⭓\n\n*Totally there are : ${videonye.length}*`
				newReply(teks)
			}
			break;

			case 'addmsg': {
				if (!isCreator) return newReply('Eits, cuma kakak pembuat yang bisa pake perintah ini! 😝');
				if (!m.quoted) return newReply('Reply dulu ke pesan yang mau disimpan di database ya, Kak! 📝');
				if (!text) return newReply(`Contohnya gini, Kak: ${prefix + command} nama`);	
				let msgs = db.data;
				if (text.toLowerCase() in msgs) return newReply(`Yah, '${text}' udah ada di daftar pesan nih, Kak! 😅`);	
				msgs[text.toLowerCase()] = quoted.fakeObj;
				newReply('Pesan berhasil disimpan di database! 🎉');
			}
			break;

			case 'getmsg': {
				if (!isCreator) return newReply('Eits, cuma kakak pembuat yang bisa pake perintah ini! 😝');
				if (!text) return newReply(`Contohnya gini, Kak: ${prefix + command} namafile\n\nBuat liat daftar pesan, ketik ${prefix}listmsg 📋`);	
				let msgs = db.data;
				if (!(text.toLowerCase() in msgs)) return newReply(`Hmm, '${text}' gak ada di daftar pesan, Kak... 🤔`);	
				haruka.copyNForward(m.chat, msgs[text.toLowerCase()], true);
			}
			break;

			case 'listmsg': {
				if (!isCreator) return newReply('Eits, cuma kakak pembuat yang bisa pake perintah ini! 😝');	
				let msgs = JSON.parse(fs.readFileSync('./src/database.json'));
				let seplit = Object.entries(db.data).map(([nama, isi]) => ({ nama, ...isi }));
				let teks = '📚 *DAFTAR PESAN DI DATABASE* 📚\n\n';
				if (seplit.length === 0) return newReply('Wah, database-nya kosong nih, Kak... 😅');	
				for (let i of seplit) {
					let tipePesan = i.message ? getContentType(i.message).replace(/Message/i, '') : 'Tidak Diketahui';
					teks += `- *Nama:* ${i.nama}\n- *Tipe:* ${tipePesan}\n────────────────────────\n\n`;
				}	
				newReply(teks);
			}
			break;

			case 'delmsg': case 'deletemsg': {
				if (!isCreator) return newReply('Ups, cuma kakak pembuat yang bisa hapus pesan! 🚫');	
				let msgs = db.data;
				if (!(text.toLowerCase() in msgs)) return newReply(`Hmm, '${text}' gak ada di daftar pesan, Kak... 🤔`);
				delete msgs[text.toLowerCase()];
				newReply('Pesan berhasil dihapus dari database! ✅');
			}
			break;

			case 'addimage':{
				if (!isCreator) return
				if (args.length < 1) return newReply('Whats the image name?')
				if (imagenye.includes(q)) return newReply("The name is already in use")
				let delb = await haruka.downloadAndSaveMediaMessage(quoted)
				imagenye.push(q)
				await fsx.copy(delb, `./media/${q}.jpg`)
				fs.writeFileSync('./media/database/image.json', JSON.stringify(imagenye))
				fs.unlinkSync(delb)
				newReply(`Success Adding Image\nCheck by typing ${prefix}listimage`)
			}
			break;

			case 'delimage':{
				if (!isCreator) return
				if (args.length < 1) return newReply('Enter the image name')
				if (!imagenye.includes(q)) return newReply("The name does not exist in the database")
				let wanu = imagenye.indexOf(q)
				imagenye.splice(wanu, 1)
				fs.writeFileSync('./media/database/image.json', JSON.stringify(imagenye))
				fs.unlinkSync(`./media/${q}.jpg`)
				newReply(`Success deleting image ${q}`)
			}
			break;

			case 'listimage':{
				let teks = '┌──⭓「 *Image List* 」\n│\n'
				for (let i of imagenye) {
					teks += `│ · ${i}\n`
				}
				teks += `│\n└────────────⭓\n\n*Totally there are : ${imagenye.length}*`
				newReply(teks)
			}
			break;

			case 'addsticker':{
				if (!isCreator) return
				if (args.length < 1) return newReply('Whats the sticker name?')
				if (setiker.includes(q)) return newReply("The name is already in use")
				let delb = await haruka.downloadAndSaveMediaMessage(quoted)
				setiker.push(q)
				await fsx.copy(delb, `./media/${q}.webp`)
				fs.writeFileSync('./media/database/sticker.json', JSON.stringify(setiker))
				fs.unlinkSync(delb)
				newReply(`Success Adding Sticker\nCheck by typing ${prefix}liststicker`)
			}
			break;

			case 'delsticker':{
				if (!isCreator) return
				if (args.length < 1) return newReply('Enter the sticker name')
				if (!setiker.includes(q)) return newReply("The name does not exist in the database")
				let wanu = setiker.indexOf(q)
				setiker.splice(wanu, 1)
				fs.writeFileSync('./media/database/sticker.json', JSON.stringify(setiker))
				fs.unlinkSync(`./media/${q}.webp`)
				newReply(`Success deleting sticker ${q}`)
			}
			break;

			case 'liststicker':{
				let teks = '┌──⭓「 *Sticker List* 」\n│\n'
				for (let i of setiker) {
					teks += `│ · ${i}\n`
				}
				teks += `│\n└────────────⭓\n\n*Totally there are : ${setiker.length}*`
				newReply(teks)
			}
			break;

			case 'addvn':{
				if (!isCreator) return
				if (args.length < 1) return newReply('Whats the audio name?')
				if (audionye.includes(q)) return newReply("The name is already in use")
				let delb = await haruka.downloadAndSaveMediaMessage(quoted)
				audionye.push(q)
				await fsx.copy(delb, `./media/${q}.mp3`)
				fs.writeFileSync('./media/database/vn.json', JSON.stringify(audionye))
				fs.unlinkSync(delb)
				newReply(`Success Adding Audio\nCheck by typing ${prefix}listvn`)
			}
			break;

			case 'delvn':{
				if (!isCreator) return
				if (args.length < 1) return newReply('Enter the vn name')
				if (!audionye.includes(q)) return newReply("The name does not exist in the database")
				let wanu = audionye.indexOf(q)
				audionye.splice(wanu, 1)
				fs.writeFileSync('./media/database/vn.json', JSON.stringify(audionye))
				fs.unlinkSync(`./media/${q}.mp3`)
				newReply(`Success deleting vn ${q}`)
			}
			break;

			case 'listvn':{
				let teks = '┌──⭓「 *VN List* 」\n│\n'
				for (let i of audionye) {
					teks += `│ · ${i}\n`
				}
				teks += `│\n└────────────⭓\n\n*Totally there are : ${audionye.length}*`
				newReply(teks)
			}
			break;

			case 'q': case 'quoted': {
				if (!m.quoted) return newReply('Reply the message!')
				const anu = await m.getQuotedObj()
				if (!anu) return newReply('Format Not Available!')
				if (!anu.quoted) return newReply('The Message You Reply Does Not Contain a Reply')
				await haruka.relayMessage(m.chat, { [anu.quoted.type]: anu.quoted.msg }, {})
			}
			break;

			case 'yts': 
			case 'ytsearch': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!text) return newReply(`🔍 *Judul atau kata kunci videonya mana, Kak?*\n\nContoh:\n${prefix + command} story wa anime`);

				try {
					await emote('⏳');
					let search = await yts(text);

					if (!search || !search.videos || search.videos.length === 0) {
						return newReply(`❌ *Video tidak ditemukan!* Coba kata kunci lain ya, Kak.`);
					}

					let results = search.videos.slice(0, 5); // Ambil 5 hasil pertama
					for (let i = 0; i < results.length; i++) {
						let video = results[i];
						let caption = `🔢 *No:* ${i + 1}\n`;
						caption += `🎬 *Judul:* ${video.title || 'Tidak ada judul'}\n`;
						caption += `👤 *Channel:* ${video.author?.name || 'Tidak diketahui'}\n`;
						caption += `👁️ *Views:* ${video.views || 'Tidak diketahui'}\n`;
						caption += `⏳ *Durasi:* ${video.timestamp || 'Tidak diketahui'}\n`;
						caption += `📆 *Diunggah:* ${video.ago || 'Tidak diketahui'}\n`;
						caption += `🔗 *Link:* ${video.url || 'Tidak ada link'}\n`;

						await haruka.sendMessage(m.chat, {
							image: { url: video.thumbnail || 'https://via.placeholder.com/300x200?text=No+Thumbnail' },
							caption: caption,
						}, { 
							quoted: m 
						});
					}

					newReply(`✅ *Berhasil menampilkan 5 hasil pencarian dari YouTube!*`);
				} catch (err) {
					console.error(err);
					newReply(`❌ *Terjadi kesalahan saat mencari video!* 😭\n${err.message || err}`);
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'lirik': 
			case 'lyrics': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!text) return newReply(`⚠️ Kak, jangan lupa tulis judul lagunya! 🥺\nContoh: *${prefix + command} Someone Like You*`);
				try {
					const searchResults = await lyrics.search(text);
					if (searchResults.length === 0) {
						return newReply('⚠️ Tidak ada hasil yang ditemukan untuk lagu tersebut. Coba judul lain, ya! 🎶');
					}
					const firstResult = searchResults[0];
					let response = `🎵 *Lirik Lagu Ditemukan!* 🎵\n\n`;
					response += `📌 *Judul:* ${firstResult.title}\n`;
					response += `🎤 *Artis:* ${firstResult.artist}\n`;
					response += `💿 *Album:* ${firstResult.album}\n`;
					response += `🔗 *Lirik Lengkap:* ${firstResult.link}\n`;
					response += `🖼️ *Gambar:* ${firstResult.imageUrl || 'Tidak ada gambar'}\n\n`;
					response += `_Sedang mengambil lirik lengkap, tunggu sebentar..._`;
					await newReply(response);
					const lyricsData = await lyrics.getLyrics(firstResult.link);
					let lyricsResponse = `🎼 *Lirik Lengkap: ${firstResult.title}* 🎼\n\n`;
					lyricsResponse += `${lyricsData.lyrics || 'Lirik tidak tersedia.'}\n\n`;
					lyricsResponse += `📅 *Tahun Rilis:* ${lyricsData.year || 'Tidak diketahui'}\n`;
					lyricsResponse += `🎧 *Playlist:* ${lyricsData.playlists || 'Tidak ada playlist'}\n`;
					lyricsResponse += `🖼️ *Artis:* ${lyricsData.artistImage || 'Tidak ada gambar artis'}\n`;
					newReply(lyricsResponse);
				} catch (error) {
					console.error(error);
					newReply('⚠️ Terjadi kesalahan saat mencari lirik lagu. Coba lagi nanti ya, Kak!');
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'owner':
			case 'creator': {
				const caption = `Haii, Kak! Apa yang ingin kamu ketahui tentang Ownerku? 🤔💭\nAku bisa kasih info lebih atau cara menghubungi Owner, loh! 😊✨`;
				haruka.sendMessage(m.chat,{
					image: thumb,
					caption: caption,
					footer: botName,
					buttons: [
						{
							buttonId: `${prefix}about`,
							buttonText: {
								displayText: "About 👤"
							}
						},
						{
							buttonId: `${prefix}contact`,
							buttonText: {
								displayText: "Mau Confess?? Click"
							}
						}
					],
					viewOnce: true,
				}, {
					quoted: m
				});
			}
			break;

			case 'play': 
			case 'ytplay': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!text) return newReply(`Example: ${prefix + command} Lagu sad`);
				try {
					await emote('⏱️');
		
					let search = await yts(`${text}`);
					if (!search || search.all.length === 0) return newReply(`*Lagu tidak ditemukan!* ☹️`);
		
					let { videoId, image, title, views, duration, author, ago, url, description } = search.all[0];
					let caption = `「 *YOUTUBE PLAY* 」\n\n🆔 ID : ${videoId}\n💬 Title : ${title}\n📺 Views : ${views}\n⏰ Duration : ${duration.timestamp}\n▶️ Channel : ${author.name}\n📆 Upload : ${ago}\n🔗 URL Video : ${url}\n📝 Description : ${description}`;

					haruka.sendMessage(m.chat,{
						image: { url: image },
						caption: caption,
						footer: botName,
						buttons: [
							{
								buttonId: `${prefix}ytmp3 ${url}`,
								buttonText: {
									displayText: "YouTube Music"
								}
							},
							{
								buttonId: `${prefix}ytmp4 ${url}`,
								buttonText: {
									displayText: "YouTube Video"
								}
							}
						],
						viewOnce: true,
					}, {
						quoted: m
					});
				} catch (err) {
					console.error(err);
					newReply(`*Terjadi kesalahan!* 😭\n${err.message || err}`);
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'ytaudio': 
			case 'ytmp3': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!text) return newReply(`Contoh: ${prefix + command} https://youtu.be/videoId`);
				if (!text.includes('youtu')) return newReply(`Link yang kakak masukkan bukan link YouTube! 😅`);
				try {
					await emote('⏱️');
		
					let search = await yts(text);
					if (!search || search.all.length === 0) return newReply(`*Video tidak ditemukan!* ☹️`);
		
					let { videoId, image, title, views, duration, author, ago, url, description } = search.all[0];
					let caption = `「 *YOUTUBE AUDIO* 」\n\n🆔 ID : ${videoId}\n💬 Title : ${title}\n📺 Views : ${views}\n⏰ Duration : ${duration.timestamp}\n▶️ Channel : ${author.name}\n📆 Upload : ${ago}\n🔗 URL Video : ${url}\n📝 Description : ${description}`;
		
					await haruka.sendMessage(m.chat, {
						image: { url: image }, 
						caption: caption
					}, { quoted: m });
		
					// Menggunakan scraper lokal
					let audioData = await saveTube.dl(url, 3, 'audio'); // kualitas audio 128 kbps
		
					if (!audioData || !audioData.link) {
						return newReply(`*Audio tidak ditemukan, silahkan ketik ulang command atau coba lagi nanti ya kak! 🙏*`);
					}
		
					await haruka.sendMessage(m.chat, { 
						audio: { url: audioData.link }, 
						mimetype: 'audio/mpeg',
						fileName: `${title}.mp3`,
						ptt: true
					}, { quoted: m });
		
				} catch (err) {
					console.error(err);
					newReply(`*Terjadi kesalahan!* 😭\n${err.message || err}`);
				}
				db.data.users[m.sender].limit -= 1;
				break;
			}

			case 'ytmp4': 
			case 'ytvideo': 
			case 'ytv': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!text) return newReply(`Contoh: ${prefix + command} https://youtu.be/videoId`);
				if (!text.includes('youtu')) return newReply(`Link yang kakak masukkan bukan link YouTube! 😅`);
				try {
					await emote('⏱️');
		
					const vidIdMatch = text.match(/(?:youtu\.be\/|youtube\.com\/(?:.*[?&]v=|embed\/|shorts\/|v\/))([\w-]{11})/);
					const vidId = vidIdMatch ? vidIdMatch[1] : null;
					if (!vidId) {
						return newReply(`Gagal mengekstrak ID video dari link! 😓`);
					}
		
					let search = await yts({ videoId: vidId, hl: 'id', gl: 'ID' });
					if (!search) return newReply(`*Video tidak ditemukan!* ☹️`);
		
					let { title, url, image } = search;
					let caption = `「 *YOUTUBE VIDEO* 」\n\n💬 Title : ${title}\n🔗 URL Video : ${url}`;
		
					await haruka.sendMessage(m.chat, {
						image: { url: image }, 
						caption: caption
					}, { quoted: m });
		
					// Menggunakan scraper lokal
					let videoData = await saveTube.dl(url, 5, 'video'); // kualitas video 720p
		
					if (!videoData || !videoData.link) {
						return newReply(`*Video tidak ditemukan, silahkan ketik ulang command atau coba lagi nanti ya kak! 🙏*`);
					}
		
					await haruka.sendMessage(m.chat, { 
						video: { url: videoData.link }, 
						mimetype: 'video/mp4',
						caption: '✅ *Video berhasil diunduh!*'
					}, { quoted: m });
		
				} catch (err) {
					console.error(err);
					newReply(`*Terjadi kesalahan!* 😭\n${err.message || err}`);
				}
				db.data.users[m.sender].limit -= 1;
				break;
			}

			case 'ttslide':
			case 'tiktokfoto':
			case 'tiktokmp4':
			case 'tt':
			case 'ttnowm':
			case 'tiktoknowm':
			case 'tiktok': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!text) return newReply(
					`⚠️ Hmm... kakak belum kasih link nih! 🫣 Coba ketik kayak gini ya: *${prefix + command} https://vt.tiktok.com/ZS8KdFQcQ/* biar Foxter bisa bantu! 🎥✨`
				);

				try {
					let anu = await tiktokDownloaderVideo(text); // Menggunakan scraper lokal
					let item = 0;

					for (let imgs of anu.data) {
						if (imgs.type == "nowatermark") {
							await haruka.sendMessage(
								m.chat,
								{
									video: { url: imgs.url },
									caption: `🎥 *Video Info* :\n📍 Region: ${anu.region}\n⏳ Duration: ${anu.duration}\n📅 Taken: ${anu.taken_at}\n\n📊 *Statistik Info* :\n👁️ Views: ${anu.stats.views}\n❤️ Likes: ${anu.stats.likes}\n💬 Comment: ${anu.stats.comment}\n🔄 Share: ${anu.stats.share}\n📥 Download: ${anu.stats.download}\n\n👤 *Author Info* :\n📝 Fullname: ${anu.author.fullname}\n🏷️ Nickname: ${anu.author.nickname}\n\n🎵 *Music Info* :\n🎼 Title: ${anu.music_info.title}\n🎤 Author: ${anu.music_info.author}\n💿 Album: ${anu.music_info.album}\n\n📝 *Caption* :\n${anu.title || 'No Caption'}`
								},
								{ quoted: m }
							);
						}

						if (imgs.type == "photo") {
							if (item == 0) {
								await haruka.sendMessage(
									m.chat,
									{
										image: { url: imgs.url },
										caption: `🖼️ *Photo Info* :\n📍 Region: ${anu.region}\n📅 Taken: ${anu.taken_at}\n\n📊 *Statistik Info* :\n👁️ Views: ${anu.stats.views}\n❤️ Likes: ${anu.stats.likes}\n💬 Comment: ${anu.stats.comment}\n🔄 Share: ${anu.stats.share}\n📥 Download: ${anu.stats.download}\n\n👤 *Author Info* :\n📝 Fullname: ${anu.author.fullname}\n🏷️ Nickname: ${anu.author.nickname}\n\n🎵 *Music Info* :\n🎼 Title: ${anu.music_info.title}\n🎤 Author: ${anu.music_info.author}\n💿 Album: ${anu.music_info.album}\n\n📝 *Caption* :\n${anu.title || 'No Caption'}${m.isGroup ? anu.data.length > 1 ? "\n📥 _Sisa foto dikirim ke private chat_\n" : "\n" : "\n"}`
									},
									{ quoted: m }
								);
							} else {
								await haruka.sendMessage(
									m.sender,
									{
										image: { url: imgs.url }
									},
									{ quoted: m }
								);
							}
							item += 1;
							await sleep(2000);
						}
					}
				} catch (err) {
					console.log(err);
					newReply('⚠️ Gagal mengambil data dari TikTok. Pastikan URL valid atau coba lagi nanti.');
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'ttaudio':
			case 'tiktokmp3':
			case 'ttmp3':
			case 'tiktokaudio': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!text) return newReply(
					`⚠️ Hmm... kakak belum kasih link nih! 🫣 Coba ketik kayak gini ya: *${prefix + command} https://vt.tiktok.com/ZS8KdFQcQ/* biar Foxter bisa bantu! 🎥✨`
				);

				try {
					let anu = await tiktokDownloaderVideo(text); // Menggunakan scraper lokal
					let audio = anu.music_info.url;

					// Kirim informasi audio terlebih dahulu
					await haruka.sendMessage(
						m.chat,
						{
							text: `🎵 *TikTok Audio*\n\n` +
							`🎼 *Title:* ${anu.music_info.title || '-'}\n` +
							`🎤 *Author:* ${anu.music_info.author || '-'}\n` +
							`💿 *Album:* ${anu.music_info.album || '-'}\n\n` +
							`🔗 *Source:* ${text}`
						},
						{ quoted: m }
					);

					// Kirim audio sebagai file MP3
					await haruka.sendMessage(
						m.chat,
						{
							audio: { url: audio },
							mimetype: 'audio/mpeg',
							fileName: `${anu.music_info.title || 'audio'}.mp3`
						},
						{ quoted: m }
					);

				} catch (error) {
					console.error(error);
					await newReply(`❌ Terjadi kesalahan saat mengambil audio. Coba lagi nanti, ya Kak!`);
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'tiktoksearch':
			case 'tiktoks':
			case 'ttsearch': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!text) return newReply(`⚠️ Eits, kakak lupa kasih kata kunci! 😗 Coba ketik kayak gini ya: *${prefix + command} jj epep* biar Foxter bisa bantu cari yang kakak mau! 🔍💬`);
				try {
					let search = await tiktokSearchVideo(text);
					let teks = `🎥 *${search.videos[0].title}*\n\n` +
					`🆔 *Video ID* : ${search.videos[0].video_id}\n` +
					`👤 *Username* : ${search.videos[0].author.unique_id}\n` +
					`🏷️ *Nickname* : ${search.videos[0].author.nickname}\n` +
					`⏳ *Duration* : ${search.videos[0].duration} detik\n` +
					`❤️ *VT Like* : ${search.videos[0].digg_count}\n` +
					`💬 *Comment* : ${search.videos[0].comment_count}\n` +
					`🔄 *Share* : ${search.videos[0].share_count}\n\n` +
					`🔗 *Link*: https://www.tiktok.com/@${search.videos[0].author.unique_id}/video/${search.videos[0].video_id}`;

					let list = '';
					let no = 1;
					for (let i of search.videos) {
						list += `\n${no++}. 🎵 *${i.title}*\n` +
						`⏳ Duration: ${i.duration} detik\n` +
						`❤️ Likes: ${i.digg_count}\n` +
						`💬 Comments: ${i.comment_count}\n` +
						`🔄 Shares: ${i.share_count}\n` +
						`🔗 Link: https://www.tiktok.com/@${i.author.unique_id}/video/${i.video_id}\n`;
					}

					await haruka.sendMessage(
						m.chat,
						{
							video: { url: `https://tikwm.com${search.videos[0].play}` },
							caption: teks
						},
						{ quoted: m }
					);

					if (search.videos.length > 1) {
						await haruka.sendMessage(
							m.chat,
							{
								text: `📚 *Daftar Video Lainnya:*\n${list}`
							},
							{ quoted: m }
						);
					}
				} catch (error) {
					console.log(error);
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'presetam': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!text) return newReply(`⚠️ Eits, kakak lupa kasih URL! 😗 Coba ketik kayak gini ya: *${prefix + command} [URL Alight Motion]*`);
				if (!(text.includes('http://') || text.includes('https://'))) {
					return newReply(`⚠️ URL tidak valid. Coba pakai URL yang diawali dengan http:// atau https://`);
				}
				if (!(text.includes('alight.link') || text.includes('alightcreative.com'))) {
					return newReply(`⚠️ URL yang diberikan bukan URL Alight Motion!`);
				}
				try {
					const result = await alightScrape(text);
					if (result.error) {
						return newReply(result.error);
					}
					const { title, description } = result;
					await newReply(`[ *PRESET ALIGHT MOTION* ]\n\n · *Judul:* ${title}\n · *Deskripsi:* ${description}`);
				} catch (error) {
					console.error(error);
					newReply('⚠️ Terjadi kesalahan saat mengambil data dari URL!');
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'soundcloudsearch':
			case 'scsearch': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!text) return newReply(`⚠️ Eits, kakak lupa kasih kata kunci! 😗 Coba ketik kayak gini ya: *${prefix + command} DJ mama muda* biar Foxter bisa bantu cari yang kakak mau! 🔍💬`);
				try {
					let results = await scrapeSoundCloud(text);	// Panggil fungsi scraper untuk SoundCloud
					if (results.length === 0) return newReply('😔 Maaf, kak! Tidak ada hasil yang ditemukan. Coba kata kunci yang lain ya!');
					let teks = `🎧 *Hasil Pencarian SoundCloud untuk:* ${text}\n\n`;
					let list = '';
					let no = 1;
					for (let i of results) {
						list += `\n${no++}. 🎵 *${i.title}*\n` +
							`🔗 *Link:* ${i.url}\n`;
					}
					await haruka.sendMessage(
						m.chat,
						{
							text: teks + list
						},
						{ quoted: m }
					);
				} catch (error) {
					console.log(error);
					newReply('⚠️ Terjadi kesalahan saat mencari data di SoundCloud, coba lagi nanti ya!');
				}
				db.data.users[m.sender].limit -= 1;
				break;
			}

			case 'igstory':
			case 'igs':
			case 'instagramstory':
			case 'instastory':
			case 'igslide':
			case 'igphoto':
			case 'instaphoto':
			case 'instafoto':
			case 'igfoto':
			case 'instagram':
			case 'ig':
			case 'igdl':
			case 'igvideo':
			case 'instavideo':
			case 'instavid':
			case 'igreels':
			case 'instareels':
			case 'instareel':
			case 'igtv':
			case 'instatv': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!text) return newReply(
					`⚠️ Gunakan dengan cara: ${prefix + command} *url*\n\n🤔 *Contohnya:*\n\n${prefix + command} https://www.instagram.com/reel/Cr5AXBQvBC1/?igshid=MzRlODBiNWFlZA==`
				);
				try {
					let anu = await fetchJson(`https://api.haruka.my.id/api/igdownload?url=${text}`);
					let item = 0;

					for (let item of anu.result.response.data) {
						if (item.type === 'video') {
							await haruka.sendMessage(
								m.chat,
								{
									video: { url: item.url },
									caption: `🎥 *Instagram Video*\n🔗 [Link Asli](${text})`
								},
								{ quoted: m }
							);
						}

						if (item.type === 'image') {
							if (item === 0) {
								await haruka.sendMessage(
									m.chat,
									{
										image: { url: item.url },
										caption: `🖼️ *Instagram Photo*\n🔗 [Link Asli](${text})\n\n${m.isGroup ? '_📥 Sisa foto akan dikirim di private chat_' : ''}`
									},
									{ quoted: m }
								);
							} else {
								await haruka.sendMessage(
									m.sender,
									{
										image: { url: item.url }
									},
									{ quoted: m }
								);
							}
							item += 1;
							await sleep(2000);
						}
					}

					if (anu.result.response.data.length === 0) {
						await newReply(`❌ Tidak ada konten yang ditemukan di URL tersebut. Pastikan tautannya benar, ya Kak!`);
					}

				} catch (error) {
					console.error(error);
					await newReply(`❌ Terjadi kesalahan saat memproses permintaan. Coba lagi nanti ya, Kak!`);
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'git': 
			case 'gitclone': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!args[0]) return newReply(`📦 *Linknya mana, Kak?*\n\nContoh:\n${prefix}${command} https://github.com/user/repo`);
				if (!isUrl(args[0]) || !args[0].includes('github.com')) 
					return newReply(`❌ *Link tidak valid!* Pastikan link berasal dari GitHub ya, Kak.`);
				try {
					await emote('⏳');
					let regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i;
					let [, user, repo] = args[0].match(regex) || [];
					if (!user || !repo) return newReply(`❌ *Gagal membaca link repositori!* Pastikan link benar ya, Kak.`);
					repo = repo.replace(/.git$/, '');
					let url = `https://api.github.com/repos/${user}/${repo}/zipball`;
					let response = await fetch(url, { method: 'HEAD' });
					let filename = response.headers.get('content-disposition')?.match(/attachment; filename=(.*)/)?.[1] || `${repo}.zip`;
					await haruka.sendMessage(m.chat, {
						document: { url: url },
						fileName: filename,
						mimetype: 'application/zip'
					}, { 
						quoted: m 
					});
					newReply(`✅ *Berhasil mengirim file repositori GitHub!*\nNama File: ${filename}`);
				} catch (err) {
					console.error(err);
					newReply(`❌ *Terjadi kesalahan saat mengunduh repositori!* 😭\n${err.message || err}`);
					}
				db.data.users[m.sender].limit -= 1;
			}
			break;

			case 'cuaca':
			case 'weather': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!text) return newReply(`🌍 *Lokasinya mana, Kak?*\n\nContoh:\n${prefix}${command} Jakarta`);

				try {
					await emote('⏳');
					let { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273&lang=id`);

					let weatherInfo = `🌦️ *Informasi Cuaca di ${data.name}, ${data.sys.country}*\n`;
					weatherInfo += `🌡️ *Suhu:* ${data.main.temp}°C (Terasa seperti ${data.main.feels_like}°C)\n`;
					weatherInfo += `🌬️ *Kecepatan Angin:* ${data.wind.speed} m/s\n`;
					weatherInfo += `💧 *Kelembapan:* ${data.main.humidity}%\n`;
					weatherInfo += `🔄 *Tekanan Udara:* ${data.main.pressure} hPa\n`;
					weatherInfo += `📍 *Koordinat:* ${data.coord.lat}, ${data.coord.lon}\n`;
					weatherInfo += `📝 *Deskripsi:* ${data.weather[0].description}\n`;
		
					await haruka.sendMessage(m.chat, { text: weatherInfo }, { quoted: m });
					newReply(`✅ *Informasi cuaca berhasil dikirim!*`);
				} catch (err) {
					console.error(err);
					if (err.response && err.response.status === 404) {
						newReply(`❌ *Lokasi tidak ditemukan!* Coba cek lagi nama lokasinya ya, Kak.`);
					} else {
						newReply(`❌ *Terjadi kesalahan saat mengambil data cuaca!* 😭\n${err.message || err}`);
					}
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'bukalapak': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!text) return newReply(
					`⚠️ Uh-oh, kakak lupa kasih kata kunci nih! 🫣 Coba ketik kayak gini ya: *${prefix + command} iPhone 15 Case* biar Foxter bisa bantu cari produknya! 🛒✨`
				);
				try {
					let hasil = await BukaLapak(text);
					if (!hasil || hasil.length === 0) {
						return newReply('❌ Tidak ditemukan hasil untuk pencarian tersebut, coba kata kunci lain ya kak!');
					}
					let replyText = `🛒 *Hasil Pencarian Bukalapak:*\n🔍 *Kata Kunci:* ${text}\n\n`;
					hasil.slice(0, 3).forEach((item, i) => {
						replyText += `*${i + 1}. ${item.title}*\n`;
						replyText += `💵 *Harga:* ${item.harga}\n`;
						replyText += `⭐ *Rating:* ${item.rating}\n`;
						replyText += `📦 *Terjual:* ${item.terjual}\n`;
						replyText += `📍 *Lokasi Toko:* ${item.store.lokasi}\n`;
						replyText += `🏬 *Toko:* ${item.store.nama}\n`;
						replyText += `🛒 *Link Toko:* ${item.store.link}\n`;
						replyText += `🔗 *Link Produk:* ${item.link}\n\n`;
					});

					await haruka.sendMessage(
						m.chat,
						{
							image: { url: hasil[0].image },
							caption: `🖼️ *Gambar Produk Pertama:* ${hasil[0].title}`
						},
						{ quoted: m }
					);

					await haruka.sendMessage(
						m.chat,
						{
							text: replyText
						},
						{ quoted: m }
					);

				} catch (error) {
					console.error('Error Bukalapak:', error.response?.data || error.message);
					await newReply(`❌ Terjadi kesalahan saat mengambil data dari Bukalapak. Coba lagi nanti ya kak!`);
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'playstore': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!text) return newReply(
					`⚠️ Uh-oh, kakak lupa kasih kata kunci nih! 🫣 Coba ketik kayak gini ya: *${prefix + command} WhatsApp* biar Foxter bisa bantu cari aplikasinya! 📲✨`
				);

				try {
					let hasil = await PlayStore(text);
					if (!hasil || hasil.length === 0 || hasil.message) {
						return newReply('❌ Tidak ditemukan hasil untuk pencarian tersebut, coba kata kunci lain ya kak!');
					}

					let replyText = `📲 *Hasil Pencarian Play Store:*\n🔍 *Kata Kunci:* ${text}\n\n`;
					hasil.slice(0, 3).forEach((item, i) => {
						replyText += `*${i + 1}. ${item.nama}*\n`;
						replyText += `👤 *Developer:* ${item.developer}\n`;
						replyText += `⭐ *Rating:* ${item.rate}\n`;
						replyText += `🔗 *Link:* ${item.link}\n`;
						replyText += `🏢 *Link Developer:* ${item.link_dev}\n\n`;
					});

					await haruka.sendMessage(
						m.chat,
						{
							image: { url: hasil[0].img },
							caption: `🖼️ *Gambar Aplikasi Pertama:* ${hasil[0].nama}`
						},
						{ quoted: m }
					);

					await haruka.sendMessage(
						m.chat,
						{
							text: replyText
						},
						{ quoted: m }
					);

				} catch (error) {
					console.error('Error Play Store:', error.response?.data || error.message);
					await newReply(`❌ Terjadi kesalahan saat mengambil data dari Play Store. Coba lagi nanti ya kak!`);
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'umma': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!text) return newReply(`⚠️ Gunakan dengan cara: ${prefix + command} *url artikel*`);
				try {
					const result = await umma(text);
					newReply(`📖 *Artikel:* ${result.title}\n\n👤 *Penulis:* ${result.author.name}\n💬 *Caption:* ${result.caption}\n\n🔗 *Sumber:* ${text}`);
				} catch (err) {
					console.error(err);
					newReply(`❌ Ada masalah waktu ambil artikel dari Umma, Kak! Coba lagi nanti ya 🥺`);
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'githubstalk': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!text) return newReply(`⚠️ Gunakan dengan cara: ${prefix + command} *username github*\n\n🤔 *Contohnya:*\n\n${prefix + command} FoxterAI`);
				try {
					const userInfo = await githubstalk(text);
					console.log(userInfo);
					newReply(`🧑‍💻 *Username:* ${userInfo.username || 'Anonim'}\n🌟 *Nickname:* ${userInfo.nickname || 'Anonim'}\n📝 *Bio:* ${userInfo.bio || 'Tidak tersedia'}\n🆔 *ID:* ${userInfo.id}\n🔑 *NodeID:* ${userInfo.nodeId}\n🔗 *Url:* ${userInfo.url}\n🏷️ *Type:* ${userInfo.type}\n👑 *Admin:* ${userInfo.admin ? 'Ya' : 'Tidak'}\n🏢 *Company:* ${userInfo.company || 'Tidak ada'}\n🌐 *Blog:* ${userInfo.blog || 'Tidak ada'}\n📍 *Location:* ${userInfo.location || 'Tidak diketahui'}\n📧 *Email:* ${userInfo.email || 'Tidak tersedia'}\n📚 *Public Repo:* ${userInfo.public_repo}\n🎁 *Public Gists:* ${userInfo.public_gists}\n👥 *Followers:* ${userInfo.followers}\n➕ *Following:* ${userInfo.following}\n🕰️ *Created At:* ${userInfo.created_at}\n🔄 *Updated At:* ${userInfo.updated_at}`);
				} catch (err) {
					console.error(err);
					newReply(`❌ Ada masalah waktu ambil data GitHub, Kak! Coba lagi nanti ya 🥺`);
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'npmstalk': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!text) return newReply(`⚠️ Gunakan dengan cara: ${prefix + command} *nama package npm*\n\n🤔 *Contohnya:*\n\n${prefix + command} axios`);
				try {
					const npmInfo = await npmstalk(text);
					newReply(`📦 *Package:* ${npmInfo.name}\n🔢 *Versi Terbaru:* ${npmInfo.versionLatest}\n📅 *Waktu Terbit:* ${npmInfo.publishTime}\n🔧 *Dependencies Terbaru:* ${npmInfo.latestDependencies}`);
				} catch (err) {
					console.error(err);
					newReply(`❌ Ada masalah waktu ambil data dari NPM, Kak! Coba lagi nanti ya 🥺`);
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'ffchars':
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				let characters = await ffCh();
				let charList = characters.map((char, index) => `${index + 1}. 🎮 *${char.name}*\n💬 ${char.desc}\n🔗 Link: https://ff.garena.com/id/chars/${char.id}`).join('\n\n');
				await haruka.sendMessage(m.chat, { text: `*Daftar Karakter Free Fire:*\n\n${charList}` }, { quoted: m });
			db.data.users[m.sender].limit -= 1;
			break;
				
			case 'ffcharinfo':
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				let charId = text.split(' ')[1]; // Asumsikan ID karakter setelah kata kunci
				if (!charId) return newReply('⚠️ ID karakter tidak ditemukan!');
				let charDetails = await ffChSkill(charId);
				let charInfo = charDetails.map(detail => `*Title:* ${detail.title}\n*Name:* ${detail.name}\n*Skill:* ${detail.skill}`).join('\n\n');
				await haruka.sendMessage(m.chat, { text: charInfo }, { quoted: m });
			db.data.users[m.sender].limit -= 1;
			break;
				
			case 'ffnews':
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				let news = await ffNews();
				let newsList = news.map(item => `📰 *${item.title}*\n🕒 *${item.time}*\n🔗 Link: ${item.link}`).join('\n\n');
				await haruka.sendMessage(m.chat, { text: `*Berita Free Fire Terbaru:*\n\n${newsList}` }, { quoted: m });
			db.data.users[m.sender].limit -= 1;
			break;
				
			case 'ffpets':
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				let pets = await ffPet();
				let petList = pets.map((pet, index) => `${index + 1}. 🐾 *${pet.name}*\n💬 ${pet.talk}\n🔗 Link: https://ff.garena.com/id/pets/${pet.id}`).join('\n\n');
				await haruka.sendMessage(m.chat, { text: `*Daftar Pet Free Fire:*\n\n${petList}` }, { quoted: m });
			db.data.users[m.sender].limit -= 1;
			break;
				
			case 'ffpetskill':
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				let petId = text.split(' ')[1]; // Asumsikan ID pet setelah kata kunci
				if (!petId) return newReply('⚠️ ID pet tidak ditemukan!');
				let petDetails = await ffPetSkill(petId);
				let petInfo = petDetails.map(detail => `*Name:* ${detail.name}\n*Skill:* ${detail.skill}`).join('\n\n');
				await haruka.sendMessage(m.chat, { text: petInfo }, { quoted: m });
			db.data.users[m.sender].limit -= 1;
			break;
				
			case 'mlstalk': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!text) return newReply(`⚠️ Gunakan dengan cara: ${prefix + command} *gameId zoneId*\n\n🤔 *Contohnya:*\n\n${prefix + command} 12345 1`);
				const [gameId, zoneId] = text.split(' ');
				try {
					const gameDetail = await mlstalk(gameId, zoneId);
					newReply(`🎮 *Game:* ${gameDetail.userName}\n🛒 *Harga:* ${gameDetail.price || '0'}\n🔗 ${gameDetail.topUpUrl || 'URL tidak ada.'}`);
				} catch (err) {
					console.error(err);
					newReply(`❌ Ada masalah waktu ambil data dari DuniaGames, Kak! Coba lagi nanti ya 🥺`);
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'imdb': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!text) return newReply(`🎬 *Judul film atau serialnya mana, Kak?*\n\nContoh:\n${prefix}${command} Inception`);

				try {
					await emote('⏳');
					let { data } = await axios.get(`http://www.omdbapi.com/?apikey=742b2d09&t=${encodeURIComponent(text)}&plot=full`);

					if (data.Response === 'False') {
						return newReply(`❌ *Film atau serial tidak ditemukan!* Coba cek lagi judulnya ya, Kak.`);
					}

					let imdbInfo = `🎬 *Judul:* ${data.Title}\n`;
					imdbInfo += `📅 *Tahun:* ${data.Year}\n`;
					imdbInfo += `⭐ *Rating:* ${data.Rated}\n`;
					imdbInfo += `📆 *Rilis:* ${data.Released}\n`;
					imdbInfo += `⏳ *Durasi:* ${data.Runtime}\n`;
					imdbInfo += `🌀 *Genre:* ${data.Genre}\n`;
					imdbInfo += `👨‍💼 *Sutradara:* ${data.Director}\n`;
					imdbInfo += `✍️ *Penulis:* ${data.Writer}\n`;
					imdbInfo += `👥 *Aktor:* ${data.Actors}\n`;
					imdbInfo += `📖 *Plot:* ${data.Plot}\n`;
					imdbInfo += `🌐 *Bahasa:* ${data.Language}\n`;
					imdbInfo += `🌍 *Negara:* ${data.Country}\n`;
					imdbInfo += `🏆 *Penghargaan:* ${data.Awards}\n`;
					imdbInfo += `💵 *Box Office:* ${data.BoxOffice || '-'}\n`;
					imdbInfo += `🏙️ *Produksi:* ${data.Production || '-'}\n`;
					imdbInfo += `🌟 *IMDb Rating:* ${data.imdbRating}\n`;
					imdbInfo += `✅ *IMDb Votes:* ${data.imdbVotes}\n`;

					await haruka.sendMessage(m.chat, {
						image: { url: data.Poster || 'https://via.placeholder.com/300x450?text=No+Poster' },
						caption: imdbInfo,
					}, { quoted: m });

					newReply(`✅ *Berhasil menampilkan informasi film!*`);
				} catch (err) {
					console.error(err);
					newReply(`❌ *Terjadi kesalahan saat mencari film!* 😭\n${err.message || err}`);
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'gddl':
			case 'gdrivedl':
			case 'gdrive': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!text) return newReply(`Gunakan dengan cara ${prefix + command} *url*`)
				if (!text.includes('drive')) return newReply('Link nggak valid')
				try {
					const res = await GDrive(text);
					if (res.error) return newReply('URL tidak valid, periksa ulang apakah akses ke URL sudah public?')
					haruka.sendMessage(m.chat, {
						document: {
							url: res.downloadUrl
						},
						mimetype: res.mimetype,
						fileName: res.fileName,
						caption: `*GOOGLE DRIVE*\n\n*Nama:* ${res.fileName}\n*Size:* ${res.fileSize}\n*Type:* ${res.mimetype}`
					}, {
						quoted: m
					})
				} catch (error) {
					console.log(error);
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'pinterest': 
			case 'pin': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!text) return newReply(`Enter Query`); // Cek apakah query sudah diberikan

				anutrest = await pinterest(text); // Dapatkan hasil pencarian dari Pinterest
				let selectedImages = anutrest.slice(0, 5); // Ambil 5 gambar pertama dari hasil pencarian

				// Kirim gambar satu per satu dengan caption
				let messages = selectedImages.map(url => ({
					image: { url },
					caption: '⭔ Media Url: ' + url
				}));

				// Kirim gambar-gambar ke chat
				for (let message of messages) {
					await haruka.sendMessage(m.chat, message, { quoted: m });
				}

				newReply('✅ 5 Gambar Pinterest berhasil dikirim!');
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'savepin': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!text) return newReply(`Example: ${prefix + command} https://pin.it/34Gef3SlC`)
				if (!text.includes('pin')) return newReply(`Link Invalid!!`)
				try {
					const res = await savePin(text);
					const { title, results } = res
					let media = results[0]
					let caption = `✨ *Title:* ${title}\n📥 *Type:* ${media.type}\n📁 *Format:* ${media.format}`
					if (media.format === 'MP4') {
						await haruka.sendMessage(m.chat, { caption, video: { url: media.downloadLink } }, { quoted: m })
					} else if (media.format === 'JPG') {
						await haruka.sendMessage(m.chat, { caption, image: { url: media.downloadLink } }, { quoted: m })
					} else {
						return newReply('Format media tidak didukung.')
					}
				} catch (err) {
					console.error(err)
					newReply('Terjadi kesalahan saat memproses permintaan.')
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'quoteanime':
			case 'animequote':
			case 'quotesanime': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				try {
					let quotes = await quotesAnime();
					if (!quotes || quotes.length === 0) {
						return newReply(`⚠️ Wah, Foxter gak nemu quote anime nih, Kak! Coba lagi nanti ya 🥲`);
					}

					let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

					await haruka.sendMessage(
						m.chat,
						{
							image: { url: randomQuote.gambar },
							caption: `🎌 *Quote Anime* 🎌\n\n` +
							`🗣️ *Karakter:* ${randomQuote.karakter || '-'}\n` +
							`📺 *Anime:* ${randomQuote.anime || '-'}\n` +
							`🎬 *Episode:* ${randomQuote.episode || '-'}\n` +
							`📅 *Diunggah:* ${randomQuote.up_at || '-'}\n\n` +
							`💬 *Quote:* "${randomQuote.quotes || '-'}"\n\n` +
							`🔗 *Sumber:* ${randomQuote.link}`
						},
						{ quoted: m }
					);
				} catch (error) {
					console.error(error);
					await newReply(`❌ Wah, ada kesalahan waktu ambil quote anime nih, Kak! Coba lagi nanti ya 🥺`);
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'anime': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!text) {
					return newReply('⚠️ *Judul anime-nya mana, Kak?* Coba ketik nama anime yang mau dicari ya! 🫣');
				}
				const malScraper = require('mal-scraper');
				await newReply('⏳ *Tunggu sebentar ya, Foxter lagi cari datanya...* 📚✨');
				const anime = await malScraper.getInfoFromName(text).catch(() => null);
				if (!anime) {
					return newReply('❌ *Yahh, anime yang Kakak cari gak ketemu...* 🥺 Coba ketik judul yang lebih spesifik ya!');
				}
				let animeInfo = `🎀 *《 𝗜𝗡𝗙𝗢 𝗔𝗡𝗜𝗠𝗘 》* 🎀\n\n📚 *Judul:* ${anime.title}\n🎭 *Tipe:* ${anime.type}\n📅 *Tayang Perdana:* ${anime.premiered || '-'}\n🎬 *Total Episode:* ${anime.episodes || '-'}\n📈 *Status:* ${anime.status || '-'}\n💠 *Genre:* ${anime.genres || '-'}\n🏢 *Studio:* ${anime.studios || '-'}\n⭐ *Skor:* ${anime.score || '-'}\n🔖 *Rating:* ${anime.rating || '-'}\n🏅 *Peringkat:* ${anime.ranked || '-'}\n🔥 *Popularitas:* ${anime.popularity || '-'}\n🎥 *Trailer:* ${anime.trailer || '-'}\n🌐 *Link MAL:* ${anime.url || '-'}\n📝 *Deskripsi:* ${anime.synopsis || 'Tidak ada deskripsi tersedia.'}\n\n✨ *Selamat menikmati info animenya, Kak!* 😊🎌`;
				await haruka.sendMessage(
					m.chat,
					{ 
						image: { url: anime.picture || thumbUrl }, 
						caption: animeInfo 
					},
					{ quoted: m }
				);
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'waifu':
			case 'neko': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				await emote('⏱️');
				const BASE_URL = `https://api.khaliddesu.my.id/api/${command}`;
				await haruka.sendMessage(m.chat,{
					image: { url: BASE_URL },
					caption: `Nih Kak ${pushname}, ${command}-nya 😋☕`,
					footer: botName,
					buttons: [
						{
							buttonId: `${prefix + command}`,
							buttonText: {
								displayText: "Next ➠"
							}
						},
						{
							buttonId: `${prefix}menu`,
							buttonText: {
								displayText: "Menu"
							}
						}
					],
					viewOnce: true,
				}, {
					quoted: m
				});
			};
			db.data.users[m.sender].limit -= 1;
			break;

			case 'nsfw-waifu':
			case 'nsfw-neko': 
			case 'nsfw-trap': 
			case 'nsfw-blowjob': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!isPremium) return newReply(mess.premium);
				await emote('⏱️');
				const BASE_URL = `https://api.khaliddesu.my.id/api/${command}?apikey=16`;
				await haruka.sendMessage(m.chat, {
					image: { url: BASE_URL },
					caption: `⚠️ *Konten NSFW Terdeteksi!* ⚠️\n\nHalo, Kak! Fitur ini berisi konten yang sensitif dan hanya boleh diakses oleh pengguna yang sudah cukup umur. Jangan lupa, kesenangan sesaat nggak boleh bikin lupa waktu dan tanggung jawab, ya! 🫣\n\nGunakan fitur ini dengan bijak dan jangan berlebihan. Ingat, keseimbangan itu penting! 🧠✨`,
					footer: `${botName} • Nikmati dengan penuh tanggung jawab!`,
					buttons: [
						{
							buttonId: `${prefix + command}`,
							buttonText: { displayText: "🔄 Lanjut Lagi" }
						},
						{
							buttonId: `${prefix}menu`,
							buttonText: { displayText: "📜 Kembali ke Menu" }
						}
					],
					viewOnce: true,
				}, { quoted: m });

				db.data.users[m.sender].limit -= 1;
			}
			break;

			case 'hentai': 
			case 'hentai-video': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!isPremium) return newReply(mess.premium);
				await emote('⏱️');
				const BASE_URL = `https://api.khaliddesu.my.id/api/hentai-video?apikey=16`;
				await haruka.sendMessage(m.chat, {
					video: { url: BASE_URL },
					caption: `⚠️ *Konten NSFW Terdeteksi!* ⚠️\n\nHai, Kak! Ingat ya, konten ini ditujukan untuk pengguna yang sudah cukup umur dan harus digunakan dengan penuh kesadaran. Jangan sampai lupa waktu dan tanggung jawab gara-gara konten ini! 🕒💡\n\nKalau udah mulai merasa keterusan, istirahat dulu ya. Kesehatan mental dan fisik tetap nomor satu! 🌟`,
					footer: `${botName} • Gunakan fitur ini dengan bijak dan bertanggung jawab!`,
					buttons: [
						{
							buttonId: `${prefix + command}`,
							buttonText: { displayText: "🔄 Lanjut Lagi" }
						},
						{
							buttonId: `${prefix}menu`,
							buttonText: { displayText: "📜 Kembali ke Menu" }
						}
					],
					viewOnce: true,
				}, { quoted: m });

				db.data.users[m.sender].limit -= 1;
			}
			break;

			case 'wallhp': case 'akira': case 'akiyama': case 'ana': case 'art': case 'asuna': case 'ayuzawa': case 'boruto': case 'bts': case 'chiho': case 'chitoge': case 'cosplay': case 'cosplayloli': case 'cosplaysagiri': case 'cyber': case 'deidara': case 'doraemon': case 'elaina': case 'emilia': case 'erza': case 'exo':case 'gamewallpaper': case 'gremory': case 'hacker': case 'hestia': case 'husbu': case 'inori': case 'islamic': case 'isuzu': case 'itachi': case 'itori': case 'jennie': case 'jiso': case 'justina': case 'kaga': case 'kagura': case 'kakasih': case 'kaori': case 'cartoon': case 'shortquote': case 'keneki': case 'kotori': case 'kurumi': case 'lisa': case 'loli2': case 'madara': case 'megumin': case 'mikasa': case 'mikey': case 'miku': case 'minato': case 'mountain': case 'naruto': case 'nekonime': case 'nezuko': case 'onepiece': case 'pentol': case 'pokemon': case 'programming':case 'randomnime': case 'randomnime2': case 'rize': case 'rose': case 'sagiri': case 'sakura': case 'sasuke': case 'satanic': case 'shina': case 'shinka': case 'shinomiya': case 'shizuka': case 'shota': case 'space': case 'technology': case 'tejina': case 'toukachan': case 'tsunade': case 'waifu2': case 'yotsuba': case 'yuki': case 'yulibocil': case 'yumeko':{
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				let data
				if (/akira/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/zennsofc/Media/master/akira.json')
				if (/akiyama/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/zennsofc/Media/master/akiyama.json')
				if (/ana/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/zennsofc/Media/master/ana.json')
				if (/art/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/zennsofc/Media/master/art.json')
				if (/asuna/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/zennsofc/Media/master/asuna.json')
				if (/ayuzawa/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/zennsofc/Media/master/ayuzawa.json')
				if (/boneka/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/zennsofc/Media/master/boneka.json')
				if (/boruto/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/zennsofc/Media/master/boruto.json')
				if (/bts/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/zennsofc/Media/master/bts.json')
				if (/cecan/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/zennsofc/Media/master/cecan.json')
				if (/chiho/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/zennsofc/Media/master/chiho.json')
				if (/chitoge/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/zennsofc/Media/master/chitoge.json')
				if (/cogan/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/zennsofc/Media/master/cogan.json')
				if (/cosplay/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/zennsofc/Media/master/cosplay.json')
				if (/cosplayloli/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/zennsofc/Media/master/cosplayloli.json')
				if (/cosplaysagiri/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/zennsofc/Media/master/cosplaysagiri.json')
				if (/cyber/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/zennsofc/Media/master/cyber.json')
				if (/deidara/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/zennsofc/Media/master/deidara.json')
				if (/doraemon/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/zennsofc/Media/master/doraemon.json')
				if (/eba/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/zennsofc/Media/master/eba.json')
				if (/elaina/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/zennsofc/Media/master/elaina.json')
				if (/emilia/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/zennsofc/Media/master/emilia.json')
				if (/erza/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/zennsofc/Media/master/erza.json')
				if (/exo/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/zennsofc/Media/master/exo.json')
				if (/femdom/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/zennsofc/Media/master/femdom.json')
				if (/freefire/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/zennsofc/Media/master/freefire.json')
				if (/gamewallpaper/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/zennsofc/Media/master/gamewallpaper.json')
				if (/glasses/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/zennsofc/Media/master/glasses.json')
				if (/gremory/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/zennsofc/Media/master/gremory.json')
				if (/hacker/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/zennsofc/Media/master/hekel.json')
				if (/hestia/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/zennsofc/Media/master/hestia.json')
				if (/husbu/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/zennsofc/Media/master/husbu.json')
				if (/inori/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/zennsofc/Media/master/inori.json')
				if (/islamic/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/zennsofc/Media/master/islamic.json')
				if (/isuzu/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/zennsofc/Media/master/isuzu.json')
				if (/itachi/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/zennsofc/Media/master/itachi.json')
				if (/itori/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/zennsofc/Media/master/itori.json')
				if (/jennie/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/zennsofc/Media/master/jeni.json')
				if (/jiso/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/zennsofc/Media/master/jiso.json')
				if (/justina/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/zennsofc/Media/master/justina.json')
				if (/kaga/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/zennsofc/Media/master/kaga.json')
				if (/kagura/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/zennsofc/Media/master/kagura.json')
				if (/kakasih/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/zennsofc/Media/master/kakasih.json')
				if (/kaori/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/zennsofc/Media/master/kaori.json')
				if (/cartoon/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/zennsofc/Media/master/kartun.json')
				if (/shortquote/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/zennsofc/Media/master/katakata.json')
				if (/keneki/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/zennsofc/Media/master/keneki.json')
				if (/kotori/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/zennsofc/Media/master/kotori.json')
				if (/kpop/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/zennsofc/Media/master/kpop.json')
				if (/kucing/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/zennsofc/Media/master/kucing.json')
				if (/kurumi/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/zennsofc/Media/master/kurumi.json')
				if (/lisa/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/zennsofc/Media/master/lisa.json')
				if (/loli2/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/zennsofc/Media/master/loli.json')
				if (/madara/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/zennsofc/Media/master/madara.json')
				if (/megumin/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/zennsofc/Media/master/megumin.json')
				if (/mikasa/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/zennsofc/Media/master/mikasa.json')
				if (/mikey/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/zennsofc/Media/master/mikey.json')
				if (/miku/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/zennsofc/Media/master/miku.json')
				if (/minato/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/zennsofc/Media/master/minato.json')
				if (/mobile/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/zennsofc/Media/master/mobil.json')
				if (/motor/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/zennsofc/Media/master/motor.json')
				if (/mountain/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/zennsofc/Media/master/mountain.json')
				if (/naruto/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/zennsofc/Media/master/naruto.json')
				if (/nekonime/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/zennsofc/Media/master/nekonime.json')
				if (/nezuko/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/zennsofc/Media/master/nezuko.json')
				if (/onepiece/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/zennsofc/Media/master/onepiece.json')
				if (/pentol/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/zennsofc/Media/master/pentol.json')
				if (/pokemon/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/zennsofc/Media/master/pokemon.json')
				if (/profil/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/zennsofc/Media/master/profil.json')
				if (/progamming/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/zennsofc/Media/master/programming.json')
				if (/pubg/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/zennsofc/Media/master/pubg.json')
				if (/randblackpink/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/zennsofc/Media/master/randblackpink.json')
				if (/randomnime/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/zennsofc/Media/master/randomnime.json')
				if (/randomnime2/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/zennsofc/Media/master/randomnime2.json')
				if (/rize/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/zennsofc/Media/master/rize.json')
				if (/rose/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/zennsofc/Media/master/rose.json')
				if (/ryujin/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/zennsofc/Media/master/ryujin.json')
				if (/sagiri/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/zennsofc/Media/master/sagiri.json')
				if (/sakura/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/zennsofc/Media/master/sakura.json')
				if (/sasuke/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/zennsofc/Media/master/sasuke.json')
				if (/satanic/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/zennsofc/Media/master/satanic.json')
				if (/shina/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/zennsofc/Media/master/shina.json')
				if (/shinka/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/zennsofc/Media/master/shinka.json')
				if (/shinomiya/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/zennsofc/Media/master/shinomiya.json')
				if (/shizuka/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/zennsofc/Media/master/shizuka.json')
				if (/shota/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/zennsofc/Media/master/shota.json')
				if (/space/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/zennsofc/Media/master/tatasurya.json')
				if (/technology/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/zennsofc/Media/master/technology.json')
				if (/tejina/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/zennsofc/Media/master/tejina.json')
				if (/toukachan/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/zennsofc/Media/master/toukachan.json')
				if (/tsunade/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/zennsofc/Media/master/tsunade.json')
				if (/waifu2/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/zennsofc/Media/master/waifu.json')
				if (/wallhp/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/zennsofc/Media/master/wallhp.json')
				if (/wallml/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/zennsofc/Media/master/wallml.json')
				if (/wallmlnime/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/zennsofc/Media/master/wallnime.json')
				if (/yotsuba/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/zennsofc/Media/master/yotsuba.json')
				if (/yuki/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/zennsofc/Media/master/yuki.json')
				if (/yulibocil/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/zennsofc/Media/master/yulibocil.json')
				if (/yumeko/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/zennsofc/Media/master/yumeko.json')
				const response = data[Math.floor(Math.random() * data.length)]
				const buffer = await getBuffer(response);
				await haruka.sendMessage(m.chat,{
					image: buffer,
					caption: `Nih Kak ${pushname}, ${command}-nya 😋☕`,
					footer: botName,
					buttons: [
						{
							buttonId: `${prefix + command}`,
							buttonText: {
								displayText: "Next ➠"
							}
						},
						{
							buttonId: `${prefix}menu`,
							buttonText: {
								displayText: "Menu"
							}
						}
					],
					viewOnce: true,
				}, {
					quoted: m
				});
			};
			db.data.users[m.sender].limit -= 1;
			break;

			case 'sound1':
			case 'sound2':
			case 'sound3':
			case 'sound4':
			case 'sound5':
			case 'sound6':
			case 'sound7':
			case 'sound8':
			case 'sound9':
			case 'sound10':
			case 'sound11':
			case 'sound12':
			case 'sound13':
			case 'sound14':
			case 'sound15':
			case 'sound16':
			case 'sound17':
			case 'sound18':
			case 'sound19':
			case 'sound20':
			case 'sound21':
			case 'sound22':
			case 'sound23':
			case 'sound24':
			case 'sound25':
			case 'sound26':
			case 'sound27':
			case 'sound28':
			case 'sound29':
			case 'sound30':
			case 'sound31':
			case 'sound32':
			case 'sound33':
			case 'sound34':
			case 'sound35':
			case 'sound36':
			case 'sound37':
			case 'sound38':
			case 'sound39':
			case 'sound40':
			case 'sound41':
			case 'sound42':
			case 'sound43':
			case 'sound44':
			case 'sound45':
			case 'sound46':
			case 'sound47':
			case 'sound48':
			case 'sound49':
			case 'sound50':
			case 'sound51':
			case 'sound52':
			case 'sound53':
			case 'sound54':
			case 'sound55':
			case 'sound56':
			case 'sound57':
			case 'sound58':
			case 'sound59':
			case 'sound60':
			case 'sound61':
			case 'sound62':
			case 'sound63':
			case 'sound64':
			case 'sound65':
			case 'sound66':
			case 'sound67':
			case 'sound68':
			case 'sound69':
			case 'sound70':
			case 'sound71':
			case 'sound72':
			case 'sound73':
			case 'sound74':
			case 'sound75':
			case 'sound76':
			case 'sound77':
			case 'sound78':
			case 'sound79':
			case 'sound80':
			case 'sound81':
			case 'sound82':
			case 'sound83':
			case 'sound84':
			case 'sound85':
			case 'sound86':
			case 'sound87':
			case 'sound88':
			case 'sound89':
			case 'sound90':
			case 'sound91':
			case 'sound92':
			case 'sound93':
			case 'sound94':
			case 'sound95':
			case 'sound96':
			case 'sound97':
			case 'sound98':
			case 'sound99':
			case 'sound100':{
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				const getAudio = await getBuffer(`https://github.com/zennsofc/Tiktokmusic-API/raw/master/tiktokmusic/${command}.mp3`)
				await haruka.sendMessage(m.chat, { audio: getAudio, mimetype: 'audio/mp4', ptt: true }, { quoted: m })	 
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'checkme':{
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				let namaTarget = args.join(" ");
				let idPengirim = `${m.sender}`;
				const daftarSifat = ['Baik 🥰', 'Jutek 😤', 'Santai 😎', 'Ramah 😊', 'Lucu 🤭', 'Nyebelin 😜', 'Serius 🧐', 'Keren 😌'];
				const daftarHobi = ['Memasak 🍳', 'Menari 💃', 'Bermain 🎮', 'Menggambar 🎨', 'Membaca 📚', 'Menonton Anime 📺', 'Bernyanyi 🎤', 'Berkebun 🌱'];
				const tingkatBucin = Array.from({ length: 100 }, (_, i) => (i + 1).toString());
				const tingkatKeren = Array.from({ length: 100 }, (_, i) => (i + 1).toString());
				const ketampanan = ['Iya 😍', 'Enggak 😭', 'Sangat Tampan 🤩', 'Hmm... Biasa aja 😅'];
				const daftarWatak = ['Penyayang 💖', 'Pemarah 😡', 'Murah Hati 🤗', 'Sabar 🧘', 'Lucu 🤭', 'Serius 🧐'];
				const moralBaik = Array.from({ length: 100 }, (_, i) => (i + 1).toString());
				const moralBuruk = Array.from({ length: 100 }, (_, i) => (i + 1).toString());
				const tingkatKepintaran = Array.from({ length: 100 }, (_, i) => (i + 1).toString());
				const tingkatKeberanian = Array.from({ length: 100 }, (_, i) => (i + 1).toString());
				const tingkatKetakutan = Array.from({ length: 100 }, (_, i) => (i + 1).toString());

				let sifatAcak = daftarSifat[Math.floor(Math.random() * daftarSifat.length)];
				let hobiAcak = daftarHobi[Math.floor(Math.random() * daftarHobi.length)];
				let bucinAcak = tingkatBucin[Math.floor(Math.random() * tingkatBucin.length)];
				let kerenAcak = tingkatKeren[Math.floor(Math.random() * tingkatKeren.length)];
				let tampanAcak = ketampanan[Math.floor(Math.random() * ketampanan.length)];
				let watakAcak = daftarWatak[Math.floor(Math.random() * daftarWatak.length)];
				let moralBaikAcak = moralBaik[Math.floor(Math.random() * moralBaik.length)];
				let moralBurukAcak = moralBuruk[Math.floor(Math.random() * moralBuruk.length)];
				let pintarAcak = tingkatKepintaran[Math.floor(Math.random() * tingkatKepintaran.length)];
				let beraniAcak = tingkatKeberanian[Math.floor(Math.random() * tingkatKeberanian.length)];
				let takutAcak = tingkatKetakutan[Math.floor(Math.random() * tingkatKetakutan.length)];
				let profil = `*🎀━━━〔 𝗖𝗵𝗲𝗰𝗸 @${idPengirim.split('@')[0]} 〕━━━🎀*\n\n📝 *Nama:* ${pushname}\n✨ *Karakteristik:* ${sifatAcak}\n🎯 *Hobi:* ${hobiAcak}\n❤️ *Tingkat Bucin:* ${bucinAcak}%\n🌟 *Tingkat Keren:* ${kerenAcak}%\n😎 *Ketampanan:* ${tampanAcak}\n🧠 *Watak:* ${watakAcak}\n💎 *Moral Baik:* ${moralBaikAcak}%\n🔥 *Moral Buruk:* ${moralBurukAcak}%\n📊 *Kepintaran:* ${pintarAcak}%\n🛡️ *Keberanian:* ${beraniAcak}%\n👻 *Ketakutan:* ${takutAcak}%\n\n*🍭━━━〔 𝗖𝗛𝗘𝗖𝗞 𝗣𝗥𝗢𝗣𝗘𝗥𝗧𝗜𝗘𝗦 〕━━━🍭*`;
				try {
					ppuser = await haruka.profilePictureUrl(m.sender, 'image');
				} catch (err) {
					ppuser = thumbUrl
				}	
				let fotoProfil = await getBuffer(ppuser);
				haruka.sendMessage(
					m.chat, 
					{ image: fotoProfil, caption: profil, mentions: [idPengirim] },
					{ quoted: m }
				);
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'mitos': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				const myths = [
					'🌕 *Mitos Bulan Purnama:* Banyak orang percaya bahwa bulan purnama bisa memengaruhi perilaku manusia, menyebabkan kegilaan, dan meningkatkan angka kejahatan.',
					'🪞 *Mitos Cermin Pecah:* Memecahkan cermin dipercaya membawa nasib buruk selama 7 tahun.',
					'👻 *Mitos Hantu di Pohon Beringin:* Pohon beringin sering dikaitkan dengan makhluk halus dan dipercaya sebagai tempat tinggal roh gentayangan.',
					'🐈‍⬛ *Mitos Kucing Hitam:* Melihat kucing hitam melintas di depanmu sering dianggap sebagai pertanda sial.',
					'💍 *Mitos Cincin di Jari Tengah:* Memakai cincin di jari tengah dipercaya dapat menarik energi positif dan keberuntungan.',
					'🧂 *Mitos Menumpahkan Garam:* Menumpahkan garam dipercaya membawa nasib buruk, kecuali jika dilemparkan ke bahu kiri.',
					'🔮 *Mitos Bola Kristal:* Bola kristal sering dikaitkan dengan kemampuan meramal masa depan.',
					'🎋 *Mitos Pohon Bamboo:* Pohon bamboo di halaman rumah dipercaya bisa mengundang energi positif dan membawa keberuntungan.',
					'🌠 *Mitos Bintang Jatuh:* Jika melihat bintang jatuh dan membuat permintaan, maka permintaan itu akan terkabul.',
					'🐦 *Mitos Burung Masuk Rumah:* Burung yang masuk ke dalam rumah sering dianggap sebagai pertanda akan ada tamu atau berita penting.',
					'🌧️ *Mitos Hujan di Hari Pernikahan:* Hujan di hari pernikahan sering dianggap sebagai pertanda keberuntungan dan kebahagiaan.',
					'🍃 *Mitos Daun Jatuh di Kepala:* Jika ada daun jatuh di kepala seseorang, dipercaya orang itu akan mendapat keberuntungan.',
					'🦉 *Mitos Burung Hantu:* Burung hantu sering dianggap sebagai simbol kematian atau pertanda buruk di beberapa budaya.',
					'🖤 *Mitos Warna Hitam:* Warna hitam sering dikaitkan dengan kesialan dan energi negatif.',
					'🌈 *Mitos Ujung Pelangi:* Konon, ada harta karun di ujung pelangi, tetapi tidak ada yang bisa mencapainya.',
					'🌺 *Mitos Bunga Tumbuh di Makam:* Bunga yang tumbuh subur di makam dipercaya sebagai tanda bahwa roh orang yang dimakamkan itu damai.',
					'🏰 *Mitos Kastil Berhantu:* Banyak kastil tua di Eropa dipercaya dihantui oleh roh para penghuni masa lalu.',
					'💤 *Mitos Mimpi Gigi Copot:* Mimpi gigi copot sering dianggap sebagai pertanda akan ada kematian di keluarga.',
					'🌜 *Mitos Menghitung Bintang:* Menghitung bintang di langit dipercaya bisa membuat seseorang tumbuh jerawat.',
					'🍀 *Mitos Daun Semanggi Berdaun Empat:* Menemukan daun semanggi berdaun empat dipercaya membawa keberuntungan.',
					'🔥 *Mitos Api Menyala Sendiri:* Api yang menyala tiba-tiba di malam hari sering dikaitkan dengan kehadiran roh halus.',
					'🎵 *Mitos Siulan di Malam Hari:* Bersiul di malam hari dipercaya dapat mengundang makhluk halus.',
					'🦎 *Mitos Cicak Jatuh di Kepala:* Jika cicak jatuh di kepala seseorang, dipercaya itu adalah pertanda buruk.',
					'🌺 *Mitos Bunga Sedap Malam:* Aroma bunga sedap malam sering dianggap sebagai tanda kehadiran makhluk halus.',
					'🪦 *Mitos Makam Baru:* Mengunjungi makam yang baru dibuat di malam hari dipercaya dapat membawa energi negatif.',
					'🧟 *Mitos Zombie di Haiti:* Dalam kepercayaan Voodoo Haiti, ada mitos tentang manusia yang dihidupkan kembali sebagai zombie oleh penyihir.',
					'🌟 *Mitos Cahaya Misterius di Malam Hari:* Cahaya aneh yang terlihat di malam hari sering dianggap sebagai roh yang sedang berkeliaran.',
					'🏞️ *Mitos Danau Berhantu:* Banyak danau di dunia yang dipercaya dihuni oleh roh penjaga atau makhluk mitos.',
					'🪶 *Mitos Bulu Putih:* Menemukan bulu putih dipercaya sebagai tanda bahwa malaikat sedang menjaga kita.',
					'🍃 *Mitos Angin Berhembus Kencang Tiba-Tiba:* Angin yang tiba-tiba berhembus kencang sering dianggap sebagai tanda kehadiran makhluk halus.',
					'🎭 *Mitos Topeng Berhantu:* Beberapa topeng tradisional dipercaya memiliki roh atau energi mistis yang kuat.',
					'🗿 *Mitos Patung Tua:* Patung tua sering dianggap memiliki roh atau kutukan di dalamnya.',
					'⚰️ *Mitos Peti Mati Bergerak:* Ada mitos di beberapa budaya bahwa peti mati bisa bergerak sendiri jika ada roh yang tidak tenang.',
					'🔔 *Mitos Lonceng Berbunyi Sendiri:* Jika lonceng berbunyi sendiri tanpa ada angin atau yang memukulnya, sering dianggap sebagai tanda roh yang ingin berkomunikasi.'
				];
				const randomMyth = myths[Math.floor(Math.random() * myths.length)];
				newReply(`🪄 *Mitos Menarik*\n\n${randomMyth}`);
				db.data.users[m.sender].limit -= 1;
				break;
			}

			case 'faktaunik': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				const facts = [
					'🧠 Otak manusia dapat menghasilkan listrik yang cukup untuk menyalakan lampu kecil!',
					'🐼 Panda bisa menghabiskan sekitar 12 jam sehari hanya untuk makan bambu.',
					'🌕 Di bulan, jejak kaki manusia bisa bertahan selama jutaan tahun karena tidak ada angin atau hujan.',
					'🦄 Jerapah tidur hanya sekitar 10-30 menit sehari dan sering tidur sambil berdiri!',
					'🎵 Musik dapat meningkatkan suasana hati dan membantu mengurangi stres.',
					'🐢 Penyu sudah ada sejak zaman dinosaurus, sekitar lebih dari 200 juta tahun yang lalu.',
					'🍫 Cokelat bisa memicu hormon endorfin yang membuat seseorang merasa bahagia.',
					'🚀 Di luar angkasa, air mata tidak bisa jatuh karena gravitasi yang rendah!',
					'🔮 Lebih dari 70% permukaan Bumi ditutupi oleh air.',
					'🐝 Lebah bisa mengenali wajah manusia layaknya manusia mengenali wajah satu sama lain.',
					'🐧 Penguin adalah satu-satunya burung yang bisa berenang tetapi tidak bisa terbang.',
					'🦷 Gigi adalah satu-satunya bagian tubuh manusia yang tidak bisa memperbaiki dirinya sendiri.',
					'🐌 Siput bisa tidur hingga 3 tahun lamanya!',
					'🔑 Sidik jari koala sangat mirip dengan sidik jari manusia.',
					'🌍 Bumi adalah satu-satunya planet yang tidak dinamai berdasarkan nama dewa atau dewi.',
					'🐟 Ikan mas memiliki ingatan yang lebih baik daripada yang orang pikirkan, mereka bisa mengingat sesuatu hingga beberapa bulan.',
					'🦇 Kelelawar adalah satu-satunya mamalia yang bisa terbang.',
					'🎤 Hati manusia berdetak sekitar 100.000 kali sehari.',
					'🌈 Tidak ada dua pelangi yang benar-benar sama, setiap orang melihat pelangi dengan sudut pandang berbeda.',
					'📱 Lebih banyak orang di dunia memiliki akses ke ponsel daripada toilet bersih.',
					'🌋 Di Islandia, ada lebih dari 100 gunung berapi aktif.',
					'💧 Air panas bisa membeku lebih cepat daripada air dingin dalam kondisi tertentu (Efek Mpemba).',
					'⚡ Petir lebih panas dari permukaan matahari.',
					'🦩 Flamingo mendapatkan warna pink dari makanan yang mereka makan, yaitu udang.',
					'🐇 Kelinci tidak bisa muntah.',
					'🧊 Antartika adalah gurun terbesar di dunia meskipun tertutup es.',
					'🐜 Semut tidak memiliki paru-paru, mereka bernapas melalui pori-pori kecil di tubuh mereka.',
					'🌟 Cahaya dari bintang yang kita lihat mungkin sudah tidak ada lagi karena bintang tersebut bisa saja sudah mati.',
					'🕷️ Laba-laba bisa menghasilkan sutra yang lebih kuat daripada baja dengan berat yang sama.',
					'🐨 Koala tidur hingga 20 jam sehari.',
					'🦁 Singa betina lebih sering berburu dibandingkan singa jantan.',
					'🐍 Ular bisa tidur dengan mata terbuka karena mereka tidak memiliki kelopak mata.',
					'🧠 Otak manusia terdiri dari sekitar 75% air.',
					'🐦 Burung kolibri adalah satu-satunya burung yang bisa terbang mundur.',
					'🎮 Bermain video game bisa meningkatkan koordinasi tangan dan mata.',
					'📖 Orang yang membaca buku secara rutin cenderung lebih empatik dan mudah memahami perasaan orang lain.',
					'🎭 Tertawa dapat meningkatkan sistem kekebalan tubuh.',
					'🌠 Rata-rata ada 44 petir yang menyambar permukaan bumi setiap detik.',
					'🦜 Burung beo bisa meniru suara manusia karena memiliki struktur otot vokal yang unik.',
					'🐴 Kuda bisa tidur sambil berdiri.',
					'🐶 Anjing bisa memahami lebih dari 150 kata manusia.',
					'🌬️ Angin terkuat yang pernah tercatat di Bumi memiliki kecepatan 372 km/jam.',
					'🍯 Madu adalah satu-satunya makanan yang tidak pernah basi.',
					'🦀 Kepiting bisa berjalan ke samping karena struktur tubuh dan kakinya.',
					'🌌 Ada lebih banyak bintang di alam semesta daripada butiran pasir di semua pantai di Bumi.',
					'🐉 Komodo adalah kadal terbesar di dunia.',
					'🏊‍♂️ Manusia bisa bertahan tanpa makanan selama berminggu-minggu, tetapi hanya beberapa hari tanpa air.',
					'🦎 Jika ekor cicak putus, ekornya akan tumbuh kembali.',
					'🚀 Sebagian besar debu di rumah berasal dari kulit mati manusia.'
				];
				const randomFact = facts[Math.floor(Math.random() * facts.length)];
				newReply(`🧠 *Fakta Unik*\n\n${randomFact}`);
				db.data.users[m.sender].limit -= 1;
				break;
			}

			case 'faktakucing': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				const fakta = [
					'🐾 Kucing bisa melompat hingga 6 kali panjang tubuhnya!',
					'🐾 Lidah kucing memiliki tekstur kasar untuk membersihkan bulu.',
					'🐾 Kucing menghabiskan sekitar 70% hidupnya untuk tidur.',
					'🐾 Telinga kucing bisa berputar hingga 180 derajat!'
				];
				const randomFakta = fakta[Math.floor(Math.random() * fakta.length)];
				newReply(randomFakta);
				db.data.users[m.sender].limit -= 1;
				break;
			}

			case 'joke': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				const jokes = [
					'🤣 Kenapa kucing gak suka online? Karena takut kena mouse!',
					'🤣 Apa bahasa Jepangnya diskon? Murah-murashii!',
					'🤣 Kenapa sepeda gak bisa berdiri sendiri? Karena lelah!'
				];
				const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
				newReply(randomJoke);
				db.data.users[m.sender].limit -= 1;
				break;
			}

			case 'suit': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				const userChoice = text.toLowerCase();
				const choices = ['batu', 'gunting', 'kertas'];
				const botChoice = choices[Math.floor(Math.random() * choices.length)];
				if (!choices.includes(userChoice)) {
					return newReply('🧠 Pilih antara *batu*, *gunting*, atau *kertas* ya, Kak!');
				}
				let hasil = '';
				if (userChoice === botChoice) {
					hasil = `🤝 Seri! Kita sama-sama pilih *${botChoice}*`;
				} else if (
					(userChoice === 'batu' && botChoice === 'gunting') ||
					(userChoice === 'gunting' && botChoice === 'kertas') ||
					(userChoice === 'kertas' && botChoice === 'batu')
				) {
					hasil = `🎉 Kakak menang! Aku pilih *${botChoice}*`;
				} else {
					hasil = `😢 Aku menang! Aku pilih *${botChoice}*`;
				}
				newReply(hasil);
				db.data.users[m.sender].limit -= 1;
				break;
			}

			case 'cekganteng': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				const percentage = Math.floor(Math.random() * 100) + 1;
				const komentar = percentage > 80 ? '🔥 Wah, Kakak ini benar-benar bikin meleleh!' : 
					percentage > 50 ? '😎 Lumayan ganteng sih, Kak!' :
					'😅 Hmm... yang penting percaya diri ya, Kak!';
				newReply(`👑 *Cek Ganteng*\n\nKegantengan Kakak ada di angka *${percentage}%*\n${komentar}`);
				db.data.users[m.sender].limit -= 1;
				break;
			}

			case 'cekwaifu': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!quoted) return newReply(`Kirim/Balas Gambar Waifu Kamu Dengan Caption *${prefix + command}*`);
				if (!mime) return newReply(`Kirim/Balas Gambar Waifu Kamu Dengan Caption *${prefix + command}*`);
				const percentage = Math.floor(Math.random() * 100) + 1;
				const komentar = percentage > 80 ? '😍 Waifu terbaik sepanjang masa!' : 
					percentage > 50 ? '😊 Lumayan jadi waifu idaman!' :
					'😬 Ehm, mungkin waifu-nya butuh upgrade dikit...';
				newReply(`💖 *Cek Waifu*\n\nPersentase waifu Kakak adalah *${percentage}%*\n${komentar}`);
				db.data.users[m.sender].limit -= 1;
				break;
			}

			case 'cekkpribadian': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				const kepribadian = [
					'🧠 Cerdas dan bijaksana.',
					'❤️ Penuh kasih sayang dan perhatian.',
					'🔥 Bersemangat dan penuh energi.',
					'🎭 Misterius dan sulit ditebak.',
					'😄 Ramah dan menyenangkan.',
					'😎 Cool dan tenang dalam segala situasi.',
					'😅 Sering baperan, tapi baik hati.'
				];
				const randomKepribadian = kepribadian[Math.floor(Math.random() * kepribadian.length)];
				newReply(`🪄 *Cek Kepribadian*\n\nKakak memiliki kepribadian:\n${randomKepribadian}`);
				db.data.users[m.sender].limit -= 1;
				break;
			}

			case 'cekmasadepan': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				const masaDepan = [
					'💼 Akan jadi bos besar di perusahaan ternama!',
					'🏝️ Pensiun muda dan tinggal di pulau tropis.',
					'💖 Akan menemukan cinta sejati dalam waktu dekat.',
					'📚 Akan jadi orang yang sangat berilmu dan dihormati.',
					'💸 Kaya raya dengan bisnis sukses!',
					'🎭 Masa depan Kakak penuh misteri dan kejutan!',
					'😴 Hmm... masa depan Kakak masih kabur, coba lagi nanti.'
				];
				const randomMasaDepan = masaDepan[Math.floor(Math.random() * masaDepan.length)];
				newReply(`🔮 *Cek Masa Depan*\n\nRamalan masa depan Kakak:\n${randomMasaDepan}`);
				db.data.users[m.sender].limit -= 1;
				break;
			}

			case 'quotesgalau': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				const quotes = [
					'💔 "Kadang, diam adalah cara terbaik untuk menyampaikan betapa sakitnya hati ini."',
					'🥀 "Kamu tau yang lebih sakit dari patah hati? Berjuang sendirian untuk hubungan yang berdua."',
					'😔 "Aku baik-baik saja, cuma kadang capek pura-pura kuat."',
					'💬 "Kamu adalah alasan senyumku, tapi juga alasan air mataku."',
					'🌧️ "Hujan tahu bagaimana caranya menangis tanpa suara, sama sepertiku."'
				];
				const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
				newReply(`💔 *Quotes Galau*\n\n${randomQuote}`);
				db.data.users[m.sender].limit -= 1;
				break;
			}

			case 'truth': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				const truths = [
					'😈 Apa rahasia terbesar yang belum pernah kamu ceritakan ke siapa pun?',
					'🤭 Siapa orang yang diam-diam kamu suka saat ini?',
					'🫣 Pernah bohong sama sahabat sendiri? Tentang apa?',
					'👀 Hal paling memalukan yang pernah kamu alami?',
					'💬 Kalau bisa kembali ke masa lalu, apa yang ingin kamu ubah?'
				];
				const randomTruth = truths[Math.floor(Math.random() * truths.length)];
				newReply(`🤔 *Truth*\n\n${randomTruth}`);
				db.data.users[m.sender].limit -= 1;
				break;
			}

			case 'dare': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				const dares = [
					'🔥 Kirim chat "Aku suka kamu" ke kontak terakhir yang kamu chat!',
					'😜 Kirim voice note bilang "Aku adalah manusia paling lucu sedunia."',
					'🤡 Foto selfie dengan ekspresi wajah paling aneh dan kirim ke grup!',
					'🕺 Kirim video kamu joget lagu favorit selama 10 detik.',
					'📸 Post story IG dengan caption "Aku lagi kena dare nih, tolong selamatkan!"'
				];
				const randomDare = dares[Math.floor(Math.random() * dares.length)];
				newReply(`😈 *Dare*\n\n${randomDare}`);
				db.data.users[m.sender].limit -= 1;
				break;
			}

			case 'list':
			case 'store': {
				try {
					const keys = Object.keys(db.data.chats[m.chat].liststore);
					if (keys.length === 0) return newReply(`Belum ada list message di grup`)
					let teks = `Halo @${m.sender.split("@")[0]} berikut beberapa list yang tersedia saat ini.\n\n`
					const result = [];
					const list = [];
					keys.forEach(key => {
						result.push({
							key: key
						});
						list.push({
							header: capitalizeWords(key) + " 🛒",
							title: "klik to show product",
							id: key
						})
					});
					for (let i of result) {
						teks += `- ${i.key.toUpperCase()}\n`
					}
					teks += `\n_Klik untuk melihat_\n_store produknya_`
					let button = [{
						"name": "single_select",
						"buttonParamsJson": `{\n\"title\": \"Store List🛍️\",\n\"sections\": [\n{\n\"title\": \"Eksplorasi Semua Store Official 🔥\",\n\"highlight_label\": \"Teratas\",\n\"rows\": ${JSON.stringify(list)}\n}\n]\n}`
					}]
					sendButtonImage(m.chat, '', teks, { url: thumbUrl }, button, m)
				} catch (error) {
					console.log(error);
				}
			}
			break

			case 'dellist': {
				if (!m.isGroup) return newReply(mess.group)
				if (!isAdmins && !isCreator) return newReply(mess.admin)
				try {
					const keys = Object.keys(db.data.chats[m.chat].liststore);
					if (keys.length === 0) return newReply(`Belum ada list message di database`)
					if (!text) return newReply(`Gunakan dengan cara ${prefix + command} *key*\n\n_Contoh_\n\n${prefix + command} hello`)
					if (!db.data.chats[m.chat].liststore[text]) return newReply(`Maaf, untuk key *${text}* belum terdaftar di group ini`)
					delete db.data.chats[m.chat].liststore[text]
					m.reply(`Sukses delete list message dengan key *${q}*`)
				} catch (error) {
					console.log(error);
				}
			}
			break

			case 'addlist': {
				if (!m.isGroup) return newReply(mess.group)
				if (!isAdmins && !isCreator) return newReply(mess.admin)
				var args1 = q.split("|")[0].toLowerCase()
				var args2 = q.split("|")[1]
				if (!q.includes("|")) return newReply(`Gunakan dengan cara ${prefix+command} *key|response*\n\n_Contoh_\n\n${prefix+command} tes|apa`)
				if (db.data.chats[m.chat].liststore[args1]) return newReply(`List respon dengan key : *${args1}* sudah ada di group ini.`)
				try {
					if (/image/.test(mime)) {
						let media = await haruka.downloadAndSaveMediaMessage(quoted)
						const url = await CatBox(media)
						db.data.chats[m.chat].liststore[args1] = {
							key: args1,
							response: args2,
							img: url,
							video: ""
						}
						m.reply(`Sukses set list message dengan key : *${args1}*`)
					} else if (/video/.test(mime)) {
						let media = await haruka.downloadAndSaveMediaMessage(quoted)
						const url = await CatBox(media)
						db.data.chats[m.chat].liststore[args1] = {
							key: args1,
							response: args2,
							img: "",
							video: url
						}
						m.reply(`Sukses set list message dengan key : *${args1}*`)
					} else {
						db.data.chats[m.chat].liststore[args1] = {
							key: args1,
							response: args2,
							img: "",
							video: ""
						}
						m.reply(`Sukses set list message dengan key : *${args1}*`)
					}
				} catch (error) {
					console.log(error);
				}
			}
			break

			case 'updatelist':
			case 'update': {
				if (!m.isGroup) return newReply(mess.group)
				if (!isAdmins && !isCreator) return newReply(mess.admin)
				var args1 = q.split("|")[0].toLowerCase()
				var args2 = q.split("|")[1]
				if (!q.includes("|")) return newReply(`Gunakan dengan cara ${prefix+command} *key|response*\n\n_Contoh_\n\n${prefix+command} tes|apa`)
				if (!db.data.chats[m.chat].liststore[args1]) return newReply(`Maaf, untuk key *${args1}* belum terdaftar di group ini`)
				try {
					if (/image/.test(mime)) {
						let media = await haruka.downloadAndSaveMediaMessage(quoted)
						const url = await CatBox(media)
						db.data.chats[m.chat].liststore[args1] = {
							key: args1,
							response: args2,
							img: url,
							video: ""
						}
						m.reply(`Sukses update respon list dengan key *${args1}*`)
					} else if (/video/.test(mime)) {
						let media = await haruka.downloadAndSaveMediaMessage(quoted)
						const url = await CatBox(media)
						db.data.chats[m.chat].liststore[args1] = {
							key: args1,
							response: args2,
							img: "",
							video: url
						}
						m.reply(`Sukses update respon list dengan key *${args1}*`)
					} else {
						db.data.chats[m.chat].liststore[args1] = {
							key: args1,
							response: args2,
							img: "",
							video: ""
						}
						m.reply(`Sukses update respon list dengan key *${args1}*`)
					}
				} catch (error) {
					console.log(error);
				}
			}
			break

			case 'tambah': {
				if (!text.includes('+')) return newReply(`Gunakan dengan cara ${prefix+command} *angka* + *angka*\n\n_Contoh_\n\n${prefix+command} 1+2`)
				try {
					arg = args.join(' ')
					atas = arg.split('+')[0]
					bawah = arg.split('+')[1]
					var nilai_one = Number(atas)
					var nilai_two = Number(bawah)
					m.reply(`${nilai_one + nilai_two}`)
				} catch (error) {
					console.log(error);
				}
			}
			break

			case 'kurang': {
				if (!text.includes('-')) return newReply(`Gunakan dengan cara ${prefix+command} *angka* - *angka*\n\n_Contoh_\n\n${prefix+command} 1-2`)
				try {
					arg = args.join(' ')
					atas = arg.split('-')[0]
					bawah = arg.split('-')[1]
					var nilai_one = Number(atas)
					var nilai_two = Number(bawah)
					m.reply(`${nilai_one - nilai_two}`)
				} catch (error) {
					console.log(error);
				}
			}
			break

			case 'kali': {
				if (!text.includes('*')) return newReply(`Gunakan dengan cara ${prefix+command} *angka* * *angka*\n\n_Contoh_\n\n${prefix+command} 1*2`)
				try {
					arg = args.join(' ')
					atas = arg.split('*')[0]
					bawah = arg.split('*')[1]
					var nilai_one = Number(atas)
					var nilai_two = Number(bawah)
					m.reply(`${nilai_one * nilai_two}`)
				} catch (error) {
					console.log(error);
				}
			}
			break

			case 'bagi': {
				if (!text.includes('/')) return newReply(`Gunakan dengan cara ${prefix+command} *angka* / *angka*\n\n_Contoh_\n\n${prefix+command} 1/2`)
				try {
					arg = args.join(' ')
					atas = arg.split('/')[0]
					bawah = arg.split('/')[1]
					var nilai_one = Number(atas)
					var nilai_two = Number(bawah)
					m.reply(`${nilai_one / nilai_two}`)
				} catch (error) {
					console.log(error);
				}
			}
			break

			case 'getjoinrequest':{
				if (!m.isGroup) return newReply(mess.group);
				if (!isBotAdmins) return newReply(mess.botAdmin);
				if (!isAdmins && !isCreator) return newReply(mess.admin);
				const response = await haruka.groupRequestParticipantsList(m.chat);
				if (!response || !response.length) {
					haruka.sendMessage(m.chat, {text: 'No pending join requests. ✅'}, {quoted:m});
					return;
				}
				let replyMessage = `Join Request List:\n`;
				response.forEach((request, index) => {
					const { jid, request_method, request_time } = request;
					const formattedTime = new Date(parseInt(request_time) * 1000).toLocaleString();
					replyMessage += `\n*No.: ${index + 1} Request Details. 👇*`;
					replyMessage += `\n🧟‍♂️ *JID:* ${jid}`;
					replyMessage += `\n🧪 *Method:* ${request_method}`;
					replyMessage += `\n⏰ *Time:* ${formattedTime}\n`;
				});
				haruka.sendMessage(m.chat, {text: replyMessage}, {quoted:m});
			};
			break;

			case 'mega':{
				try {
					if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
					if (!text) return newReply(`${prefix + command} https://mega.nz/file/ovJTHaQZ#yAbkrvQgykcH_NDKQ8eIc0zvsN7jonBbHZ_HTQL6lZ8`);
					const { File } = require('megajs');
					const file = File.fromURL(text);
					await file.loadAttributes();
					if (file.size >= 300000000) return newReply('Error: File size is too large (Maximum Size: 300MB)');
					const downloadingMessage = `🌩️ Downloading file... Please wait.`;
					newReply(downloadingMessage);
					const caption = `*_Successfully downloaded..._*\nFile: ${file.name}\nSize: ${formatBytes(file.size)}`;
					const data = await file.downloadBuffer();
					const fileExtension = path.extname(file.name).toLowerCase();
					const mimeTypes = {
						".mp4": "video/mp4",
						".pdf": "application/pdf",
						".zip": "application/zip",
						".rar": "application/x-rar-compressed",
						".7z": "application/x-7z-compressed",
						".jpg": "image/jpeg",
						".jpeg": "image/jpeg",
						".png": "image/png",
					};
					let mimetype = mimeTypes[fileExtension] || "application/octet-stream";
					await haruka.sendMessage(m.chat, {document: data, mimetype: mimetype, fileName: file.name, caption: caption}, {quoted:m});
				} catch (error) {
					return newReply(`Error: ${error.message}`);
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'ai':
			case 'Foxter':{
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!text) return m.reply(`Hello, how can I help you?`)
				if (!m.isGroup) {
					try {
						await emote('⏱️');
						const data = await fetchJson(`https://api.khaliddesu.my.id/api/mora?query=${text}&username=${pushname}`);
						await emote('✅');
						haruka.sendMessage(m.chat, {
							text: data.result, 
							ai: true
						}, {
							quoted: m
						})
					} catch (err) {
						console.log('Terjadi kesalahan pada API server!', err);
						newReply('Tidak dapat menerima respon dari API server, jika Anda owner silahkan periksa endpoint pada API apakah sudah benar?');
					}
				} else {
					try {
						await emote('⏱️');
						const data = await fetchJson(`https://api.khaliddesu.my.id/api/mora?query=${text}&username=${pushname}`);
						await emote('✅');
						haruka.sendMessage(m.chat, {
							text: data.result
						}, {
							quoted: m
						})
					} catch (err) {
						console.log('Terjadi kesalahan pada API server!', err);
						newReply('Tidak dapat menerima respon dari API server, jika Anda owner silahkan periksa endpoint pada API apakah sudah benar?');
					}
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'wallpaper': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!text) return newReply(`⚠️ Gunakan dengan cara: ${prefix + command} *kata kunci* [halaman]\n\n🤔 *Contohnya:*\n\n${prefix + command} nature 2`);
				const [query, page] = text.split(' ');
				try {
					const wallpapers = await wallpaper(query, page || '1');
					if (wallpapers.length === 0) return newReply(`⚠️ Foxter gak nemu wallpaper dengan kata kunci "${query}", Kak! 🥲`);
					let result = wallpapers.map(wp => `🖼️ *${wp.title}*\n🔗 ${wp.source}\n🌟 *Tipe:* ${wp.type}`).join('\n\n');
					newReply(`🎨 *Hasil Wallpaper untuk:* ${query}\n\n${result}`);
				} catch (err) {
					console.error(err);
					newReply(`❌ Ada masalah waktu ambil wallpaper, Kak! Coba lagi nanti ya 🥺`);
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'wikimedia': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!text) return newReply(`⚠️ Gunakan dengan cara: ${prefix + command} *kata kunci*\n\n🤔 *Contohnya:*\n\n${prefix + command} sunset`);
				try {
					const results = await wikimedia(text);
					if (results.length === 0) return newReply(`⚠️ Foxter gak nemu gambar di Wikimedia dengan kata kunci "${text}", Kak! 🥲`);
					let result = results.map(img => `🖼️ *${img.title || 'Tanpa Judul'}*\n🔗 ${img.source}`).join('\n\n');
					newReply(`🌐 *Hasil Pencarian Wikimedia untuk:* ${text}\n\n${result}`);
				} catch (err) {
					console.error(err);
					newReply(`❌ Ada masalah waktu ambil gambar dari Wikimedia, Kak! Coba lagi nanti ya 🥺`);
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'wikipedia':
			case 'wiki': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!text) return newReply(`Hmm... Apa ya yang kamu cari di Wikipedia? Coba ketik nama atau topik yang ingin dicari~ 😊`);
				try {
					const link = await axios.get(`https://id.wikipedia.org/wiki/${text}`);
					const $ = cheerio.load(link.data);
					let header = $('#firstHeading').text().trim();
					let output = $('#mw-content-text > div.mw-parser-output').find('p').text().trim();
					if (!header || !output) {
						return newReply('Aduh, sepertinya gak ada hasil untuk pencarian ini 😔 Coba kata kunci yang lain!');
					}
					newReply(`📛 *Judul :* ${header}\n\n✨ *Deskripsi Singkat:* ${output}\n\nSemoga membantu ya! Kalau masih penasaran, coba cari topik lain lagi~ 😄`);
				} catch (err) {
					newReply('Wah, ada yang error nih! Gak bisa menemukan apa yang kamu cari 😓. Coba lagi nanti ya!');
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'happymod': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!text) return newReply(`⚠️ Gunakan dengan cara: ${prefix + command} *nama aplikasi*\n\n🤔 *Contohnya:*\n\n${prefix + command} Minecraft`);
				try {
					const results = await happymod(text);
					if (results.length === 0) return newReply(`⚠️ Foxter gak nemu aplikasi di HappyMod dengan kata kunci "${text}", Kak! 🥲`);
					let result = results.map(app => `📱 *${app.title}*\n⭐ *Rating:* ${app.rating}\n🔗 ${app.link}`).join('\n\n');
					newReply(`📦 *Hasil Pencarian HappyMod untuk:* ${text}\n\n${result}`);
				} catch (err) {
					console.error(err);
					newReply(`❌ Ada masalah waktu ambil data dari HappyMod, Kak! Coba lagi nanti ya 🥺`);
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'ringtone': {
			if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!text) return newReply(`⚠️ Gunakan dengan cara: ${prefix + command} *judul ringtone*\n\n🤔 *Contohnya:*\n\n${prefix + command} iPhone`);
				try {
					const results = await ringtone(text);
					if (results.length === 0) return newReply(`⚠️ Foxter gak nemu ringtone dengan kata kunci "${text}", Kak! 🥲`);
					let result = results.map(rt => `🎵 *${rt.title}*\n🔗 ${rt.audio}`).join('\n\n');
					newReply(`🔊 *Hasil Pencarian Ringtone untuk:* ${text}\n\n${result}`);
				} catch (err) {
					console.error(err);
					newReply(`❌ Ada masalah waktu ambil ringtone, Kak! Coba lagi nanti ya 🥺`);
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'traceanime': {
			if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				try {
					let q = m.quoted ? m.quoted : m;
					let mime = (q.msg || q).mimetype || q.mediaType || "";
					if (!mime.startsWith('image')) {
						return newReply("*Tolong kirim gambar terlebih dahulu* 📸");
					}
					let data = await haruka.downloadAndSaveMediaMessage(q);
					let images = await fileIO(data);
					let apiUrl = `https://api.trace.moe/search?anilistInfo&url=${encodeURIComponent(images)}`;
					console.log("API URL:", apiUrl);
					let response = await fetch(apiUrl);
					let result = await response.json();
					console.log("API Response:", result);
					if (!result || result.error || result.result.length === 0) {
						return newReply("*Error: Tidak dapat melacak anime dari gambar ini.* 😞");
					}
					let { anilist, from, to, similarity, video, image, episode } = result.result[0];
					let animeTitle = anilist.title ? anilist.title.romaji || anilist.title.native : "Judul Tidak Dikenal";
					let message = `✨ *Anime yang Terdeteksi:* ${animeTitle}\n`;
					if (anilist.synonyms && anilist.synonyms.length > 0) {
						message += `✨ *Sinonim:* ${anilist.synonyms.join(", ")}\n`;
					}
					message += `✨ *Tingkat Kesesuaian:* ${similarity.toFixed(2)}%\n`;
					message += `✨ *Durasi Waktu:* ${formatDuration(from * 1000)} - ${formatDuration(to * 1000)}\n`;
					if (episode) {
						message += `✨ *Episode:* ${episode}\n`;
					}
					console.log("Informasi Anime:", {
						animeTitle,
						synonyms: anilist.synonyms ? anilist.synonyms.join(", ") : "Tidak Tersedia",
						similarity,
						timestamp: `${formatDuration(from * 1000)} - ${formatDuration(to * 1000)}`,
						video,
						episode,
					});
					await haruka.sendMessage(m.chat, { video: { url: video }, caption: message }, { quoted: m });
				} catch (error) {
					console.error("Error:", error);
					newReply("*Error: Tidak dapat melacak anime atau mengirim video.* 😞");
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'otakudesu':{
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				let data = await otakuDesu.ongoing();
				let response = `「 *JADWAL ANIME* 」\n\n`
				for (let i of data) {
					response += `*💬 Judul :* ${i.title}\n`
					response += `*📺 Eps :* ${i.episode}\n`
					response += `*🔗 URL :* ${i.link}\n\n`
				}
				haruka.sendMessage(m.chat, {
					text: response,
					contextInfo: {
						isForwarded: true,
						forwardingScore: 100,
						externalAdReply: {
							showAdAttribution: true,
							title: 'Ini pemberitahuan Anime terbaru!',
							mediaType: 1,
							previewType: 1,
							body: 'Halo Kak 👋',
							thumbnail: thumb,
							renderLargerThumbnail: false,
							mediaUrl: 'https://api.khaliddesu.my.id',
							sourceUrl: 'https://api.khaliddesu.my.id'
						}
					}
				}, {
					quoted: m
				})
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'kusonimeinfo':
			case 'animeinfo': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				try {
					const animeList = await Kusonime.info();
					if (animeList.length === 0) {
						return m.reply('⚠️ Tidak ada data anime terbaru yang ditemukan saat ini.');
					}
					let response = `🎌 *Anime Terbaru dari Kusonime* 🎌\n\n`;
					animeList.slice(0, 5).forEach((anime, index) => {
						response += `📺 *${index + 1}. ${anime.title}*\n`;
						response += `🔗 *URL:* ${anime.url}\n`;
						response += `🖼️ *Thumbnail:* ${anime.thumbnail}\n`;
						response += `🗂️ *Genre:* ${anime.genres.join(', ')}\n`;
						response += `📅 *Rilis:* ${anime.releaseTime}\n\n`;
					});
					m.reply(response);
				} catch (error) {
					console.error(error);
					m.reply('⚠️ Terjadi kesalahan saat mengambil informasi anime terbaru.');
				};
			}
			db.data.users[m.sender].limit -= 1;
			break

			case 'kusonimesearch':
			case 'animesearch': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!text) return m.reply(`⚠️ Kak, jangan lupa kasih judul anime yang mau dicari! 🥺\nContoh: *${prefix + command} Naruto*`);
				try {
					const searchResults = await Kusonime.search(text);
					if (typeof searchResults === 'string') {
						return m.reply(`⚠️ ${searchResults}`);
					}
					let response = `🔍 *Hasil Pencarian untuk:* ${text}\n\n`;
					searchResults.slice(0, 5).forEach((anime, index) => {
						response += `📺 *${index + 1}. ${anime.title}*\n`;
						response += `🔗 *URL:* ${anime.url}\n`;
						response += `🖼️ *Thumbnail:* ${anime.thumbnail}\n`;
						response += `🗂️ *Genre:* ${anime.genres.join(', ')}\n`;
						response += `📅 *Rilis:* ${anime.releaseTime}\n\n`;
					});
					m.reply(response);
				} catch (error) {
					console.error(error);
					m.reply('⚠️ Terjadi kesalahan saat mencari anime di Kusonime.');
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'gempa': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				try {
					let result = await gempa();
					let gempaData = result.data;
					let response = `「 *📢 MSG GEMPA TERBARU* 」\n\n`;
					response += `*🌍 Sumber:* ${result.source}\n`;
					response += `*📊 Magnitudo:* ${gempaData.magnitude.trim()}\n`;
					response += `*📏 Kedalaman:* ${gempaData.kedalaman.trim()}\n`;
					response += `*🗺️ Lintang & Bujur:* ${gempaData.lintang_bujur.trim()}\n`;
					response += `*🕒 Waktu:* ${gempaData.waktu.trim()}\n`;
					response += `*📍 Wilayah:* ${gempaData.wilayah.trim() || 'Tidak ada data'}\n`;
					response += `*😱 Dirasakan:* ${gempaData.dirasakan.trim() || 'Tidak ada data'}\n\n`;
					response += `Tetap waspada dan ikuti arahan dari pihak berwenang!`;
					if (gempaData.imagemap) {
						haruka.sendMessage(m.chat, {
							image: { url: gempaData.imagemap.startsWith('http') ? gempaData.imagemap : `https://www.bmkg.go.id${gempaData.imagemap}` },
							caption: response,
							contextInfo: {
								isForwarded: true,
								forwardingScore: 100,
								externalAdReply: {
									showAdAttribution: true,
									title: 'Informasi Gempa Terkini!',
									mediaType: 1,
									previewType: 1,
									body: 'Stay Safe ya, Kak! 🤗',
									thumbnail: thumb,
									renderLargerThumbnail: false,
									mediaUrl: 'https://www.bmkg.go.id',
									sourceUrl: 'https://www.bmkg.go.id'
								}
							}
						}, {
							quoted: m
						});
					} else {
						haruka.sendMessage(m.chat, {
							text: response,
							contextInfo: {
								isForwarded: true,
								forwardingScore: 100,
								externalAdReply: {
									showAdAttribution: true,
									title: 'Informasi Gempa Terkini!',
									mediaType: 1,
									previewType: 1,
									body: 'Stay Safe ya, Kak! 🤗',
									thumbnail: thumb,
									renderLargerThumbnail: false,
									mediaUrl: 'https://www.bmkg.go.id',
									sourceUrl: 'https://www.bmkg.go.id'
								}
							}
						}, {
							quoted: m
						});
					}
				} catch (error) {
					console.error(error);
					haruka.sendMessage(m.chat, {
						text: '⚠️ Maaf kak, terjadi kesalahan saat mengambil data gempa.'
					}, {
						quoted: m
					});
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'react': {
				haruka.sendMessage(m.chat, { react: { text: args[0], key: m.quoted ? m.quoted.key : m.key }})
			}
			break;
			
			case 'tagme': {
				haruka.sendMessage(m.chat, { text: `@${m.sender.split('@')[0]}`, mentions: [m.sender] }, { quoted: m })
			}
			break;

			case 'totalfeature':
			case 'totalfitur': 
			case 'totalcmd': 
			case 'totalcommand': 
				newReply(`✨ *Total Fitur yang Tersedia di ${botName}:* ${feature()} Fitur`);
			break;

			case 'cmd':
			case 'menu':{
				let timestampe = speed();
				let latensie = speed() - timestampe;
				let a = db.data.users[m.sender];
				let me = m.sender;
				let teks = `┌──❖ Halo, Kak ${pushname}! 👋✨\n│ ✧ ${ucapanWaktu} yaa! 😊\n└────────────⳹\n\n${readmore}🌟 *𝐁𝐎𝐓 𝐈𝐍𝐅𝐎*\n⨳ *Speed:* ${latensie.toFixed(4)} ms\n⨳ *Runtime:* ${runtime(process.uptime())}\n⨳ *Bot:* ${botName}\n⨳ *Owner:* +${ownerNumber}\n⨳ *Mode:* ${haruka.public ? 'Public' : 'Self'}\n⨳ *Platform:* ${os.platform()}\n⨳ *Total User:* ${Object.keys(db.data.users).length}\n⨳ *Total Chat:* ${Object.keys(global.db.data.chats).length}\n\n🧍 *𝐔𝐒𝐄𝐑 𝐈𝐍𝐅𝐎*\n⨳ *Nama:* ${pushname}\n⨳ *Number:* +${me.split('@')[0]}\n⨳ *Limit:* ${a.limit}\n⨳ *Status:* ${isVip ? 'VIP User' : isPremium ? 'Premium User' : 'Free User'}\n⨳ *Serial:* ${a.serialNumber}\n\n🕒 *𝐓𝐈𝐌𝐄 𝐈𝐍𝐅𝐎*\n⨳ *Time:* ${time}\n⨳ *Date:* ${date}\n\n✨ *Silahkan pilih menu di bawah ini, Kak!* 🥰`;
				let msg = generateWAMessageFromContent(m.chat, {
					viewOnceMessage: {
						message: {
							"messageContextInfo": {
								"deviceListMetadata": {},
								"deviceListMetadataVersion": 2
							},
							interactiveMessage: proto.Message.InteractiveMessage.create({
								body: proto.Message.InteractiveMessage.Body.create({
									text: teks
								}),
								footer: proto.Message.InteractiveMessage.Footer.create({
									text: ownerName
								}),
								header: proto.Message.InteractiveMessage.Header.create({
									...(await prepareWAMessageMedia({ image: thumb }, { upload: haruka.waUploadToServer })), 
									title: '',
									subtitle: '',
									hasMediaAttachment: false
								}),
								nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
									buttons: [
										{
											"name": "single_select",
											"buttonParamsJson": `{
												"title": "Click Here ⎙",
												"sections": [{
													"title": "Select Menu",
													"rows": [{
														"title": "📚 All Menu",
														"description": "Lihat semua menu seru di sini, kak! 🌟",
														"id": "${prefix}allmenu"
													},
													{
														"title": "🗝️ Owner's Secret Menu",
														"description": "Psst... Rahasia nih! Cuma kakak spesial yang bisa masuk~ 🤫",
														"id": "${prefix}ownermenu"
													},
													{
														"title": "👥 Group Menu",
														"description": "Ayo intip menu khusus grup, seru-seruan bareng! 👥",
														"id": "${prefix}groupmenu"
													},
													{
														"title": "🔍 Search Menu",
														"description": "Cari apa aja di sini, Foxter bantu nemuin kok~ 🔍",
														"id": "${prefix}searchmenu"
													},
													{
														"title": "📥 Download Menu",
														"description": "Unduh apa yang kakak butuhin, gampang kok! 📥",
														"id": "${prefix}downloadmenu"
													},
													{
														"title": "🛠️ Converter/Tools Menu",
														"description": "Bikin stiker, ubah audio, dan banyak alat seru lainnya di sini, Kak! 🎵✨",
														"id": "${prefix}convertmenu"
													},
													{
														"title": "🎮 Game Menu",
														"description": "Fitur Game untuk seru-seruan seperti tebak-tebakan dsb. 😋",
														"id": "${prefix}gamemenu"
													},
													{
														"title": "😋 Random Anime Menu",
														"description": "Menu yang berisi gambar Anime, cari gambar waifu kamu disini ya! 😍",
														"id": "${prefix}randomanimemenu"
													},
													{
														"title": "✨ Other Menu",
														"description": "Menu tambahan yang nggak kalah menarik, cek yuk! 💫",
														"id": "${prefix}othermenu"
													}]
												}]
											}`
										},
										{
											"name": "cta_url",
											"buttonParamsJson": `{\"display_text\":\"👑 Owner's Profile\",\"url\":\"https://api.whatsapp.com/send?phone=${ownerNumber}\",\"merchant_url\":\"https://www.google.com\"}`
										}
									],
								}),
								contextInfo: {
									mentionedJid: [m.sender], 
									forwardingScore: 100,
									isForwarded: true,
									forwardedNewsletterMessageInfo: {
										newsletterJid: saluran,
										newsletterName: saluranName,
										serverMessageId: 143
									}
								}
							})
						}
					}
				}, { quoted: m })

				await haruka.relayMessage(msg.key.remoteJid, msg.message, {messageId: msg.key.id})
			}
			break;

			case 'allmenu': {
				let timestampe = speed();
				let latensie = speed() - timestampe;
				let a = db.data.users[m.sender];
				let me = m.sender;
				let teks = `┌──❖ Halo, Kak ${pushname}! 👋✨\n│ ✧ ${ucapanWaktu} yaa! 😊\n└────────────⳹\n\n${readmore}🌟 *𝐁𝐎𝐓 𝐈𝐍𝐅𝐎*\n⨳ *Speed:* ${latensie.toFixed(4)} ms\n⨳ *Runtime:* ${runtime(process.uptime())}\n⨳ *Bot:* ${botName}\n⨳ *Owner:* +${ownerNumber}\n⨳ *Mode:* ${haruka.public ? 'Public' : 'Self'}\n⨳ *Platform:* ${os.platform()}\n⨳ *Total User:* ${Object.keys(db.data.users).length}\n⨳ *Total Chat:* ${Object.keys(global.db.data.chats).length}\n\n🧍 *𝐔𝐒𝐄𝐑 𝐈𝐍𝐅𝐎*\n⨳ *Nama:* ${pushname}\n⨳ *Number:* +${me.split('@')[0]}\n⨳ *Limit:* ${a.limit}\n⨳ *Status:* ${isVip ? 'VIP User' : isPremium ? 'Premium User' : 'Free User'}\n⨳ *Serial:* ${a.serialNumber}\n\n🕒 *𝐓𝐈𝐌𝐄 𝐈𝐍𝐅𝐎*\n⨳ *Time:* ${time}\n⨳ *Date:* ${date}\n\n${readmore}${allMenu(prefix, hituet)}\n\n⛔ Dilarang Spam Bot Nanti Admin Marah (😡)`;
				haruka.sendMessage(m.chat, {
					text: teks,
					contextInfo: {
						externalAdReply: {
							showAdAttribution: true,
							title: botName,
							body: ownerName,
							thumbnail: thumb,
							sourceUrl: website,
							mediaType: 1,
							renderLargerThumbnail: true
						}
					}
				}, { 
					quoted: m 
				});
			}
			break;

			case 'ownermenu':
			case 'ownmenu':{
				if (!isCreator) return newReply(mess.owner);
				let timestampe = speed();
				let latensie = speed() - timestampe;
				let a = db.data.users[m.sender];
				let me = m.sender;
				let teks = `┌──❖ Halo, Kak ${pushname}! 👋✨\n│ ✧ ${ucapanWaktu} yaa! 😊\n└────────────⳹\n\n${readmore}🌟 *𝐁𝐎𝐓 𝐈𝐍𝐅𝐎*\n⨳ *Speed:* ${latensie.toFixed(4)} ms\n⨳ *Runtime:* ${runtime(process.uptime())}\n⨳ *Bot:* ${botName}\n⨳ *Owner:* +${ownerNumber}\n⨳ *Mode:* ${haruka.public ? 'Public' : 'Self'}\n⨳ *Platform:* ${os.platform()}\n⨳ *Total User:* ${Object.keys(db.data.users).length}\n⨳ *Total Chat:* ${Object.keys(global.db.data.chats).length}\n\n🧍 *𝐔𝐒𝐄𝐑 𝐈𝐍𝐅𝐎*\n⨳ *Nama:* ${pushname}\n⨳ *Number:* +${me.split('@')[0]}\n⨳ *Limit:* ${a.limit}\n⨳ *Status:* ${isVip ? 'VIP User' : isPremium ? 'Premium User' : 'Free User'}\n⨳ *Serial:* ${a.serialNumber}\n\n🕒 *𝐓𝐈𝐌𝐄 𝐈𝐍𝐅𝐎*\n⨳ *Time:* ${time}\n⨳ *Date:* ${date}\n\n${readmore}${ownerMenu(prefix, hituet)}\n\n⛔ Dilarang Spam Bot Nanti Admin Marah (😡)`;
				haruka.sendMessage(m.chat, {
					text: teks,
					contextInfo: {
						forwardingScore: 100,
						isForwarded: true,
						forwardedNewsletterMessageInfo: {
							newsletterName: saluranName,
							newsletterJid: saluran,
						},
						externalAdReply: {
							showAdAttribution: true,
							title: botName,
							body: ownerName,
							thumbnail: thumb,
							sourceUrl: website,
							mediaType: 1,
							renderLargerThumbnail: true
						}
					}
				}, { 
					quoted: m 
				});
			}
			break;

			case 'groupmenu':
			case 'gcmenu':{
				if (!m.isGroup) return newReply(mess.group);
				let timestampe = speed();
				let latensie = speed() - timestampe;
				let a = db.data.users[m.sender];
				let me = m.sender;
				let teks = `┌──❖ Halo, Kak ${pushname}! 👋✨\n│ ✧ ${ucapanWaktu} yaa! 😊\n└────────────⳹\n\n${readmore}🌟 *𝐁𝐎𝐓 𝐈𝐍𝐅𝐎*\n⨳ *Speed:* ${latensie.toFixed(4)} ms\n⨳ *Runtime:* ${runtime(process.uptime())}\n⨳ *Bot:* ${botName}\n⨳ *Owner:* +${ownerNumber}\n⨳ *Mode:* ${haruka.public ? 'Public' : 'Self'}\n⨳ *Platform:* ${os.platform()}\n⨳ *Total User:* ${Object.keys(db.data.users).length}\n⨳ *Total Chat:* ${Object.keys(global.db.data.chats).length}\n\n🧍 *𝐔𝐒𝐄𝐑 𝐈𝐍𝐅𝐎*\n⨳ *Nama:* ${pushname}\n⨳ *Number:* +${me.split('@')[0]}\n⨳ *Limit:* ${a.limit}\n⨳ *Status:* ${isVip ? 'VIP User' : isPremium ? 'Premium User' : 'Free User'}\n⨳ *Serial:* ${a.serialNumber}\n\n🕒 *𝐓𝐈𝐌𝐄 𝐈𝐍𝐅𝐎*\n⨳ *Time:* ${time}\n⨳ *Date:* ${date}\n\n${readmore}${groupMenu(prefix, hituet)}\n\n⛔ Dilarang Spam Bot Nanti Admin Marah (😡)`;
				haruka.sendMessage(m.chat, {
					text: teks,
					contextInfo: {
						forwardingScore: 100,
						isForwarded: true,
						forwardedNewsletterMessageInfo: {
							newsletterName: saluranName,
							newsletterJid: saluran,
						},
						externalAdReply: {
							showAdAttribution: true,
							title: botName,
							body: ownerName,
							thumbnail: thumb,
							sourceUrl: website,
							mediaType: 1,
							renderLargerThumbnail: true
						}
					}
				}, { 
					quoted: m 
				});
			}
			break;

			case 'searchmenu':
			case 'shmenu':{
				let timestampe = speed();
				let latensie = speed() - timestampe;
				let a = db.data.users[m.sender];
				let me = m.sender;
				let teks = `┌──❖ Halo, Kak ${pushname}! 👋✨\n│ ✧ ${ucapanWaktu} yaa! 😊\n└────────────⳹\n\n${readmore}🌟 *𝐁𝐎𝐓 𝐈𝐍𝐅𝐎*\n⨳ *Speed:* ${latensie.toFixed(4)} ms\n⨳ *Runtime:* ${runtime(process.uptime())}\n⨳ *Bot:* ${botName}\n⨳ *Owner:* +${ownerNumber}\n⨳ *Mode:* ${haruka.public ? 'Public' : 'Self'}\n⨳ *Platform:* ${os.platform()}\n⨳ *Total User:* ${Object.keys(db.data.users).length}\n⨳ *Total Chat:* ${Object.keys(global.db.data.chats).length}\n\n🧍 *𝐔𝐒𝐄𝐑 𝐈𝐍𝐅𝐎*\n⨳ *Nama:* ${pushname}\n⨳ *Number:* +${me.split('@')[0]}\n⨳ *Limit:* ${a.limit}\n⨳ *Status:* ${isVip ? 'VIP User' : isPremium ? 'Premium User' : 'Free User'}\n⨳ *Serial:* ${a.serialNumber}\n\n🕒 *𝐓𝐈𝐌𝐄 𝐈𝐍𝐅𝐎*\n⨳ *Time:* ${time}\n⨳ *Date:* ${date}\n\n${readmore}${searchMenu(prefix, hituet)}\n\n⛔ Dilarang Spam Bot Nanti Admin Marah (😡)`;
				haruka.sendMessage(m.chat, {
					text: teks,
					contextInfo: {
						forwardingScore: 100,
						isForwarded: true,
						forwardedNewsletterMessageInfo: {
							newsletterName: saluranName,
							newsletterJid: saluran,
						},
						externalAdReply: {
							showAdAttribution: true,
							title: botName,
							body: ownerName,
							thumbnail: thumb,
							sourceUrl: website,
							mediaType: 1,
							renderLargerThumbnail: true
						}
					}
				}, { 
					quoted: m 
				});
			}
			break;

			case 'downloadmenu':
			case 'downmenu':{
				let timestampe = speed();
				let latensie = speed() - timestampe;
				let a = db.data.users[m.sender];
				let me = m.sender;
				let teks = `┌──❖ Halo, Kak ${pushname}! 👋✨\n│ ✧ ${ucapanWaktu} yaa! 😊\n└────────────⳹\n\n${readmore}🌟 *𝐁𝐎𝐓 𝐈𝐍𝐅𝐎*\n⨳ *Speed:* ${latensie.toFixed(4)} ms\n⨳ *Runtime:* ${runtime(process.uptime())}\n⨳ *Bot:* ${botName}\n⨳ *Owner:* +${ownerNumber}\n⨳ *Mode:* ${haruka.public ? 'Public' : 'Self'}\n⨳ *Platform:* ${os.platform()}\n⨳ *Total User:* ${Object.keys(db.data.users).length}\n⨳ *Total Chat:* ${Object.keys(global.db.data.chats).length}\n\n🧍 *𝐔𝐒𝐄𝐑 𝐈𝐍𝐅𝐎*\n⨳ *Nama:* ${pushname}\n⨳ *Number:* +${me.split('@')[0]}\n⨳ *Limit:* ${a.limit}\n⨳ *Status:* ${isVip ? 'VIP User' : isPremium ? 'Premium User' : 'Free User'}\n⨳ *Serial:* ${a.serialNumber}\n\n🕒 *𝐓𝐈𝐌𝐄 𝐈𝐍𝐅𝐎*\n⨳ *Time:* ${time}\n⨳ *Date:* ${date}\n\n${readmore}${downloadMenu(prefix, hituet)}\n\n⛔ Dilarang Spam Bot Nanti Admin Marah (😡)`;
				haruka.sendMessage(m.chat, {
					text: teks,
					contextInfo: {
						forwardingScore: 100,
						isForwarded: true,
						forwardedNewsletterMessageInfo: {
							newsletterName: saluranName,
							newsletterJid: saluran,
						},
						externalAdReply: {
							showAdAttribution: true,
							title: botName,
							body: ownerName,
							thumbnail: thumb,
							sourceUrl: website,
							mediaType: 1,
							renderLargerThumbnail: true
						}
					}
				}, { 
					quoted: m 
				});
			}
			break;

			case 'convertmenu':
			case 'toolsmenu':{
				let timestampe = speed();
				let latensie = speed() - timestampe;
				let a = db.data.users[m.sender];
				let me = m.sender;
				let teks = `┌──❖ Halo, Kak ${pushname}! 👋✨\n│ ✧ ${ucapanWaktu} yaa! 😊\n└────────────⳹\n\n${readmore}🌟 *𝐁𝐎𝐓 𝐈𝐍𝐅𝐎*\n⨳ *Speed:* ${latensie.toFixed(4)} ms\n⨳ *Runtime:* ${runtime(process.uptime())}\n⨳ *Bot:* ${botName}\n⨳ *Owner:* +${ownerNumber}\n⨳ *Mode:* ${haruka.public ? 'Public' : 'Self'}\n⨳ *Platform:* ${os.platform()}\n⨳ *Total User:* ${Object.keys(db.data.users).length}\n⨳ *Total Chat:* ${Object.keys(global.db.data.chats).length}\n\n🧍 *𝐔𝐒𝐄𝐑 𝐈𝐍𝐅𝐎*\n⨳ *Nama:* ${pushname}\n⨳ *Number:* +${me.split('@')[0]}\n⨳ *Limit:* ${a.limit}\n⨳ *Status:* ${isVip ? 'VIP User' : isPremium ? 'Premium User' : 'Free User'}\n⨳ *Serial:* ${a.serialNumber}\n\n🕒 *𝐓𝐈𝐌𝐄 𝐈𝐍𝐅𝐎*\n⨳ *Time:* ${time}\n⨳ *Date:* ${date}\n\n${readmore}${convertMenu(prefix, hituet)}\n\n⛔ Dilarang Spam Bot Nanti Admin Marah (😡)`;
				haruka.sendMessage(m.chat, {
					text: teks,
					contextInfo: {
						forwardingScore: 100,
						isForwarded: true,
						forwardedNewsletterMessageInfo: {
							newsletterName: saluranName,
							newsletterJid: saluran,
						},
						externalAdReply: {
							showAdAttribution: true,
							title: botName,
							body: ownerName,
							thumbnail: thumb,
							sourceUrl: website,
							mediaType: 1,
							renderLargerThumbnail: true
						}
					}
				}, { 
					quoted: m 
				});
			}
			break;

			case 'storemenu':
			case 'stmenu':{
				let timestampe = speed();
				let latensie = speed() - timestampe;
				let a = db.data.users[m.sender];
				let me = m.sender;
				let teks = `┌──❖ Halo, Kak ${pushname}! 👋✨\n│ ✧ ${ucapanWaktu} yaa! 😊\n└────────────⳹\n\n${readmore}🌟 *𝐁𝐎𝐓 𝐈𝐍𝐅𝐎*\n⨳ *Speed:* ${latensie.toFixed(4)} ms\n⨳ *Runtime:* ${runtime(process.uptime())}\n⨳ *Bot:* ${botName}\n⨳ *Owner:* +${ownerNumber}\n⨳ *Mode:* ${haruka.public ? 'Public' : 'Self'}\n⨳ *Platform:* ${os.platform()}\n⨳ *Total User:* ${Object.keys(db.data.users).length}\n⨳ *Total Chat:* ${Object.keys(global.db.data.chats).length}\n\n🧍 *𝐔𝐒𝐄𝐑 𝐈𝐍𝐅𝐎*\n⨳ *Nama:* ${pushname}\n⨳ *Number:* +${me.split('@')[0]}\n⨳ *Limit:* ${a.limit}\n⨳ *Status:* ${isVip ? 'VIP User' : isPremium ? 'Premium User' : 'Free User'}\n⨳ *Serial:* ${a.serialNumber}\n\n🕒 *𝐓𝐈𝐌𝐄 𝐈𝐍𝐅𝐎*\n⨳ *Time:* ${time}\n⨳ *Date:* ${date}\n\n${readmore}${storeMenu(prefix, hituet)}\n\n⛔ Dilarang Spam Bot Nanti Admin Marah (😡)`;
				haruka.sendMessage(m.chat, {
					text: teks,
					contextInfo: {
						forwardingScore: 100,
						isForwarded: true,
						forwardedNewsletterMessageInfo: {
							newsletterName: saluranName,
							newsletterJid: saluran,
						},
						externalAdReply: {
							showAdAttribution: true,
							title: botName,
							body: ownerName,
							thumbnail: thumb,
							sourceUrl: website,
							mediaType: 1,
							renderLargerThumbnail: true
						}
					}
				}, { 
					quoted: m 
				});
			}
			break;

			case 'panelmenu':
			case 'pmenu':{
				let timestampe = speed();
				let latensie = speed() - timestampe;
				let a = db.data.users[m.sender];
				let me = m.sender;
				let teks = `┌──❖ Halo, Kak ${pushname}! 👋✨\n│ ✧ ${ucapanWaktu} yaa! 😊\n└────────────⳹\n\n${readmore}🌟 *𝐁𝐎𝐓 𝐈𝐍𝐅𝐎*\n⨳ *Speed:* ${latensie.toFixed(4)} ms\n⨳ *Runtime:* ${runtime(process.uptime())}\n⨳ *Bot:* ${botName}\n⨳ *Owner:* +${ownerNumber}\n⨳ *Mode:* ${haruka.public ? 'Public' : 'Self'}\n⨳ *Platform:* ${os.platform()}\n⨳ *Total User:* ${Object.keys(db.data.users).length}\n⨳ *Total Chat:* ${Object.keys(global.db.data.chats).length}\n\n🧍 *𝐔𝐒𝐄𝐑 𝐈𝐍𝐅𝐎*\n⨳ *Nama:* ${pushname}\n⨳ *Number:* +${me.split('@')[0]}\n⨳ *Limit:* ${a.limit}\n⨳ *Status:* ${isVip ? 'VIP User' : isPremium ? 'Premium User' : 'Free User'}\n⨳ *Serial:* ${a.serialNumber}\n\n🕒 *𝐓𝐈𝐌𝐄 𝐈𝐍𝐅𝐎*\n⨳ *Time:* ${time}\n⨳ *Date:* ${date}\n\n${readmore}${panelMenu(prefix, hituet)}\n\n⛔ Dilarang Spam Bot Nanti Admin Marah (😡)`;
				haruka.sendMessage(m.chat, {
					text: teks,
					contextInfo: {
						forwardingScore: 100,
						isForwarded: true,
						forwardedNewsletterMessageInfo: {
							newsletterName: saluranName,
							newsletterJid: saluran,
						},
						externalAdReply: {
							showAdAttribution: true,
							title: botName,
							body: ownerName,
							thumbnail: thumb,
							sourceUrl: website,
							mediaType: 1,
							renderLargerThumbnail: true
						}
					}
				}, { 
					quoted: m 
				});
			}
			break;

			case 'gamemenu':
			case 'gmenu':{
				let timestampe = speed();
				let latensie = speed() - timestampe;
				let a = db.data.users[m.sender];
				let me = m.sender;
				let teks = `┌──❖ Halo, Kak ${pushname}! 👋✨\n│ ✧ ${ucapanWaktu} yaa! 😊\n└────────────⳹\n\n${readmore}🌟 *𝐁𝐎𝐓 𝐈𝐍𝐅𝐎*\n⨳ *Speed:* ${latensie.toFixed(4)} ms\n⨳ *Runtime:* ${runtime(process.uptime())}\n⨳ *Bot:* ${botName}\n⨳ *Owner:* +${ownerNumber}\n⨳ *Mode:* ${haruka.public ? 'Public' : 'Self'}\n⨳ *Platform:* ${os.platform()}\n⨳ *Total User:* ${Object.keys(db.data.users).length}\n⨳ *Total Chat:* ${Object.keys(global.db.data.chats).length}\n\n🧍 *𝐔𝐒𝐄𝐑 𝐈𝐍𝐅𝐎*\n⨳ *Nama:* ${pushname}\n⨳ *Number:* +${me.split('@')[0]}\n⨳ *Limit:* ${a.limit}\n⨳ *Status:* ${isVip ? 'VIP User' : isPremium ? 'Premium User' : 'Free User'}\n⨳ *Serial:* ${a.serialNumber}\n\n🕒 *𝐓𝐈𝐌𝐄 𝐈𝐍𝐅𝐎*\n⨳ *Time:* ${time}\n⨳ *Date:* ${date}\n\n${readmore}${gameMenu(prefix, hituet)}\n\n⛔ Dilarang Spam Bot Nanti Admin Marah (😡)`;
				haruka.sendMessage(m.chat, {
					text: teks,
					contextInfo: {
						forwardingScore: 100,
						isForwarded: true,
						forwardedNewsletterMessageInfo: {
							newsletterName: saluranName,
							newsletterJid: saluran,
						},
						externalAdReply: {
							showAdAttribution: true,
							title: botName,
							body: ownerName,
							thumbnail: thumb,
							sourceUrl: website,
							mediaType: 1,
							renderLargerThumbnail: true
						}
					}
				}, { 
					quoted: m 
				});
			}
			break;

			case 'randomanimemenu':
			case 'ramenu':{
				let timestampe = speed();
				let latensie = speed() - timestampe;
				let a = db.data.users[m.sender];
				let me = m.sender;
				let teks = `┌──❖ Halo, Kak ${pushname}! 👋✨\n│ ✧ ${ucapanWaktu} yaa! 😊\n└────────────⳹\n\n${readmore}🌟 *𝐁𝐎𝐓 𝐈𝐍𝐅𝐎*\n⨳ *Speed:* ${latensie.toFixed(4)} ms\n⨳ *Runtime:* ${runtime(process.uptime())}\n⨳ *Bot:* ${botName}\n⨳ *Owner:* +${ownerNumber}\n⨳ *Mode:* ${haruka.public ? 'Public' : 'Self'}\n⨳ *Platform:* ${os.platform()}\n⨳ *Total User:* ${Object.keys(db.data.users).length}\n⨳ *Total Chat:* ${Object.keys(global.db.data.chats).length}\n\n🧍 *𝐔𝐒𝐄𝐑 𝐈𝐍𝐅𝐎*\n⨳ *Nama:* ${pushname}\n⨳ *Number:* +${me.split('@')[0]}\n⨳ *Limit:* ${a.limit}\n⨳ *Status:* ${isVip ? 'VIP User' : isPremium ? 'Premium User' : 'Free User'}\n⨳ *Serial:* ${a.serialNumber}\n\n🕒 *𝐓𝐈𝐌𝐄 𝐈𝐍𝐅𝐎*\n⨳ *Time:* ${time}\n⨳ *Date:* ${date}\n\n${readmore}${randomAnimeMenu(prefix, hituet)}\n\n⛔ Dilarang Spam Bot Nanti Admin Marah (😡)`;
				haruka.sendMessage(m.chat, {
					text: teks,
					contextInfo: {
						forwardingScore: 100,
						isForwarded: true,
						forwardedNewsletterMessageInfo: {
							newsletterName: saluranName,
							newsletterJid: saluran,
						},
						externalAdReply: {
							showAdAttribution: true,
							title: botName,
							body: ownerName,
							thumbnail: thumb,
							sourceUrl: website,
							mediaType: 1,
							renderLargerThumbnail: true
						}
					}
				}, { 
					quoted: m 
				});
			}
			break;

			case 'othermenu':
			case 'othmenu':{
				let timestampe = speed();
				let latensie = speed() - timestampe;
				let a = db.data.users[m.sender];
				let me = m.sender;
				let teks = `┌──❖ Halo, Kak ${pushname}! 👋✨\n│ ✧ ${ucapanWaktu} yaa! 😊\n└────────────⳹\n\n${readmore}🌟 *𝐁𝐎𝐓 𝐈𝐍𝐅𝐎*\n⨳ *Speed:* ${latensie.toFixed(4)} ms\n⨳ *Runtime:* ${runtime(process.uptime())}\n⨳ *Bot:* ${botName}\n⨳ *Owner:* +${ownerNumber}\n⨳ *Mode:* ${haruka.public ? 'Public' : 'Self'}\n⨳ *Platform:* ${os.platform()}\n⨳ *Total User:* ${Object.keys(db.data.users).length}\n⨳ *Total Chat:* ${Object.keys(global.db.data.chats).length}\n\n🧍 *𝐔𝐒𝐄𝐑 𝐈𝐍𝐅𝐎*\n⨳ *Nama:* ${pushname}\n⨳ *Number:* +${me.split('@')[0]}\n⨳ *Limit:* ${a.limit}\n⨳ *Status:* ${isVip ? 'VIP User' : isPremium ? 'Premium User' : 'Free User'}\n⨳ *Serial:* ${a.serialNumber}\n\n🕒 *𝐓𝐈𝐌𝐄 𝐈𝐍𝐅𝐎*\n⨳ *Time:* ${time}\n⨳ *Date:* ${date}\n\n${readmore}${otherMenu(prefix, hituet)}\n\n⛔ Dilarang Spam Bot Nanti Admin Marah (😡)`;
				haruka.sendMessage(m.chat, {
					text: teks,
					contextInfo: {
						forwardingScore: 100,
						isForwarded: true,
						forwardedNewsletterMessageInfo: {
							newsletterName: saluranName,
							newsletterJid: saluran,
						},
						externalAdReply: {
							showAdAttribution: true,
							title: botName,
							body: ownerName,
							thumbnail: thumb,
							sourceUrl: website,
							mediaType: 1,
							renderLargerThumbnail: true
						}
					}
				}, { 
					quoted: m 
				});
			}
			break;

			case 'slot': {
				if (!db.data.users[m.sender]) return newReply('⚠️ Data pengguna tidak ditemukan di database!');	
				await gameSlot(haruka, m, db.data.users);
			}
			break;
		
			case 'casino': {
				if (!db.data.users[m.sender]) return m.reply('⚠️ Data pengguna tidak ditemukan di database!');
				await gameCasinoSolo(haruka, m, prefix, db.data.users);
			}
			break;
		
			case 'rob': 
			case 'merampok': {
				if (!db.data.users[m.sender]) return newReply('⚠️ Data pengguna tidak ditemukan di database!');	
				await gameMerampok(m, db.data.users);
			}
			break;

			case 'daily': {
				if (!db.data.users[m.sender]) return newReply('⚠️ Data pengguna tidak ditemukan di database!');
				await daily(haruka, m, db.data.users);
			}
			break;

			case 'transferlimit': {
				if (!db.data.users[m.sender]) return newReply('⚠️ Data pengguna tidak ditemukan di database!');
				await transferLimit(haruka, m, args, db.data.users);
			}
			break;

			case 'transfermoney': 
			case 'transferuang': {
				if (!db.data.users[m.sender]) return newReply('⚠️ Data pengguna tidak ditemukan di database!');
				await transferUang(haruka, m, args, db.data.users);
			}
			break;

			case 'buy': {
				if (!db.data.users[m.sender]) return newReply('⚠️ Data pengguna tidak ditemukan di database!');
				await buy(m, args, db.data.users);
			}
			break;

			case 'me': 
			case 'account': { 
				if (!db.data.users[m.sender]) return newReply('⚠️ Data pengguna tidak ditemukan di database!');
				let a = db.data.users[m.sender]; 
				let txt = `*📝 INFORMASI DATA 📝*\n\n`; 
				txt += ` · *Nama:* ${a.nick || 'Guest'}\n`; 
				txt += ` · *Gelar:* ${a.title || 'Tidak Ada'}\n`; 
				txt += ` · *Status Premium:* ${a.premium ? 'Aktif ✅' : 'Non-Aktif ❌'}\n`; 
				txt += ` · *Sisa Limit:* ${a.limit}\n`; 
				txt += ` · *Sisa Uang:* ${a.uang}\n\n`; 
				txt += `*Gunakan fitur dengan bijak ya!* 🌟`; 
				await haruka.sendMessage(m.chat, { 
					text: txt 
				}, { 
					quoted: m 
				}); 
			}; 
			break; 

			case 'limit': 
			case 'checklimit': { 
				if (!db.data.users[m.sender]) return newReply('⚠️ Data pengguna tidak ditemukan di database!');
				let a = db.data.users[m.sender]; 
				let txt = `*📊 INFORMASI LIMIT 📊*\n\n`; 
				txt += ` · *Sisa Limit:* ${a.limit}\n`; 
				txt += ` · *Total Limit:* ${a.totalLimit}\n`; 
				txt += `*Gunakan limit dengan bijak, ya!* 💼`; 
				await haruka.sendMessage(m.chat, { 
					text: txt 
				}, { 
					quoted: m 
				}); 
			}; 
			break;

			case 'menfess': 
			case 'menfes': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				this.menfes = this.menfes || {};
				let session = Object.values(this.menfes).find(menpes => [menpes.a, menpes.b].includes(m.sender));
				if (session) return newReply(`Uhh... Kakak masih ada di sesi ${command} yang sebelumnya nih, selesaikan dulu ya sebelum mulai yang baru! 🤭`);
				if (m.isGroup) return newReply(`Maaf ya Kak, fitur ini cuma bisa dipakai di chat pribadi aja! 😅`);
				if (!text || !text.includes('|')) {
					return newReply(`Kakak bisa pakai format ini ya: ${prefix + command} nama|nomor|pesan\n\nContoh:\n${prefix + command} ${pushname}|${m.sender.split('@')[0]}|Halo, apa kabar? 👋`);
				}
				let [namaNya, nomorNya, pesanNya] = text.split('|');
				if (!nomorNya || !pesanNya) {
					return newReply(`Uh-oh, formatnya salah! Pastikan pakai format nama|nomor|pesan ya, Kak! 😄`);
				}
				if (nomorNya.startsWith('0') || isNaN(nomorNya)) {
					return newReply(`Nomornya gak valid, Kak! Gunakan format internasional tanpa awalan '0' ya! 🙏`);
				}
				await emote('⏱️');
				let pesanTemplate = `\nHai Kak, ada menfess nih 😊✨\n\n👤 *Dari:* ${namaNya}\n✉️ *Pesan:* ${pesanNya}\n\nKakak bisa:\n · Ketuk *Balas* untuk *menerima menfess*.\n · Ketuk *Tolak* untuk *menolak menfess*.\n\n_Pesan ini cuma disampaikan oleh bot ya, Kak! 🤖_`;
				const imageBuffer = await getBuffer('https://files.catbox.moe/qxw4j8.jpg');
				let id = m.sender;
				this.menfes[id] = {
					id,
					a: m.sender,
					b: nomorNya + '@s.whatsapp.net',
					state: 'WAITING'
				};
				await haruka.sendMessage(nomorNya + '@s.whatsapp.net',{
					image: imageBuffer,
					caption: pesanTemplate,
					footer: botName,
					buttons: [
						{
							buttonId: `${prefix}balasmenfess`,
							buttonText: {
								displayText: "Balas"
							}
						},
						{
							buttonId: `${prefix}tolakmenfess`,
							buttonText: {
								displayText: "Tolak"
							}
						}
					],
					viewOnce: true,
				});
				newReply(`Yay! Pesan ${command} berhasil dikirim ke ${nomorNya}. Sekarang tinggal tunggu responsnya ya, Kak. Kalau gak ada balasan dalam 24 jam, jangan ditunggu lagi ya! 🤭`);
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'balasmenfess': 
			case 'balasmenfes': {
				let session = Object.values(this.menfes).find(menpes => [menpes.a, menpes.b].includes(m.sender));
				if (!session) return newReply('Hmmm, sepertinya Kakak belum ada sesi menfess yang aktif deh. 😅');
				let room = Object.values(this.menfes).find(room => [room.a, room.b].includes(m.sender) && room.state === 'WAITING');
				if (!room) return newReply('Gak ada sesi menfess yang menunggu balasan dari Kakak nih. 😢');
				let otherUser = [room.a, room.b].find(user => user !== m.sender);
				room.state = 'CHATTING';
				this.menfes[room.id] = { ...room };
					await haruka.sendMessage(otherUser, { 
					text: `_@${m.sender.split('@')[0]} sudah menerima menfess kamu, sekarang kalian bisa ngobrol lewat bot ini ya!_\n\n*Note:* Kalau mau berhenti, ketik aja .stopmenfess. 😉`, 
					mentions: [m.sender] 
				});
				haruka.sendMessage(m.chat, { 
					text: `😊🎉 _Menfess sudah diterima, sekarang Kakak bisa ngobrol lewat bot ini ya!_\n\n*Note:* Kalau mau berhenti, tinggal ketik .stopmenfess. 🤗` 
				});
			}
			break;

			case 'tolakmenfess': 
			case 'tolakmenfes': {
				let session = Object.values(this.menfes).find(menpes => [menpes.a, menpes.b].includes(m.sender));
				if (!session) return newReply('Hmm, gak ada sesi menfess yang Kakak ikuti saat ini. 😕');
				let room = Object.values(this.menfes).find(room => [room.a, room.b].includes(m.sender) && room.state === 'WAITING');
				if (!room) return newReply('Gak ada sesi menfess yang bisa ditolak saat ini, Kak! 😅');
				let otherUser = [room.a, room.b].find(user => user !== m.sender);
				await haruka.sendMessage(otherUser, { 
					text: `_Oops... @${m.sender.split('@')[0]} menolak menfess kamu nih. Gak apa-apa ya, semangat! 🤗_`, 
					mentions: [m.sender] 
				});
				newReply('Menfess berhasil ditolak. Kalau ada yang lain, jangan sungkan buat coba lagi ya, Kak! ✋');
				delete this.menfes[room.id];
			}
			break;

			case 'stopmenfess': 
			case 'stopmenfes': {
				let session = Object.values(this.menfes).find(menpes => [menpes.a, menpes.b].includes(m.sender));
				if (!session) return newReply('Kayaknya Kakak gak ada sesi menfess yang aktif saat ini deh. 😅');
				let otherUser = session.a === m.sender ? session.b : session.a;
				await haruka.sendMessage(otherUser, { 
					text: `_Teman chat menghentikan sesi menfess ini ya, Kak. Makasih udah coba fitur ini! 😊_`, 
					mentions: [m.sender] 
				});
				newReply('Sesi menfess sudah dihentikan. Kalau mau mulai lagi, tinggal gunakan perintah yang sama ya, Kak! 😄');
				delete this.menfes[session.id];
			}
			break;

			case 'addusradmin': {
				if (!isCreator) return m.reply(mess.owner);

				let inputParams = q.split(',');
				if (inputParams.length < 3) {
					return m.reply(`*Format salah!*\n\n*Penggunaan:*\n${prefix + command} email,username,name,number/tag`);
				}

				let emailAddress = inputParams[0];
				let userName = inputParams[1];
				let fullName = inputParams[2];
				let defaultPassword = 'AdminUser123';
				let userToAdd = m.quoted 
				? m.quoted.sender 
				: inputParams[3] 
				? inputParams[3].replace(/[^0-9]/g, '') + '@s.whatsapp.net' 
				: m.mentionedJid[0];

				try {
					if (!userToAdd) {
						return m.reply(`*Format salah!*\n\n*Penggunaan:*\n${prefix + command} email,username,name,number/tag`);
					}

					let userExists = (await onWhatsApp(userToAdd.split`@`[0]))[0] || {};
					let generatedPassword = userExists.exists ? randomBytes(5).toString('hex') : inputParams[3];

					let response = await fetch(global.panel + "/api/application/users", {
						"method": "POST",
						"headers": {
							"Accept": "application/json",
							"Content-Type": "application/json",
							"Authorization": "Bearer " + global.apiuser
						},
						"body": JSON.stringify({
							"email": emailAddress,
							"username": userName,
							"first_name": fullName,
							"last_name": "Admin",
							"root_admin": true,
							"language": "en",
							"password": defaultPassword
						})
					});

					let responseData = await response.json();
					if (responseData.errors) {
						return m.reply(JSON.stringify(responseData.errors[0], null, 2));
					}

					let newUser = responseData.attributes;

					let teks = `*👑 NEW ADMIN ADDED 👑*\n\n`;
					teks += ` · 🆔 *ID:* ${newUser.id}\n`;
					teks += ` · 👤 *Username:* ${newUser.username}\n`;
					teks += ` · 📧 *Email:* ${newUser.email}\n`;
					teks += ` · 📝 *Name:* ${newUser.first_name} ${newUser.last_name}\n`;
					teks += ` · 🌐 *Language:* ${newUser.language}\n`;
					teks += ` · 🛡️ *Admin:* ${newUser.root_admin ? 'Yes' : 'No'}\n`;
					teks += ` · 📅 *Created At:* ${newUser.created_at}\n`;
					teks += ` · 🔖 *Tags:* @${userToAdd.split("@")[0]}\n`;

					haruka.sendMessage(m.chat, {
						image: { url: thumbUrl },
						caption: teks
					}, { quoted: m });

					let teks2 = `*🔑 NEW ADMIN LOGIN 🔑*\n\n`;
					teks2 += ` · 📧 *Email:* ${emailAddress}\n`;
					teks2 += ` · 📝 *Username:* ${userName}\n`;
					teks2 += ` · 🔑 *Password:* ${defaultPassword}\n`;
					teks2 += ` · 🌐 *Login:* ${global.panel.replace("https://", "")}\n`;

					await haruka.sendMessage(userToAdd, {
						text: teks2
					}, { quoted: m });

				} catch (error) {
					console.log(error);
					m.reply(`❌ *Terjadi kesalahan:* ${error.message}`);
				}
			}
			break;

			case 'listusr': {
				if (!isCreator) return newReply(mess.owner);

				let page = args[0] ? args[0] : '1';
				try {
					let response = await fetchJson(global.panel + "/api/application/users?page=" + page, {
						"headers": {
							"Accept": "application/json",
							"Content-Type": "application/json",
							"Authorization": "Bearer " + global.apiuser
						}
					});

					let users = response.data;
					let teks = `*📋 LIST USERS PANEL 📋*\n\n`;
					teks += `${'-'.repeat(24)}\n`;

					for (let user of users) {
						teks += `*User Info* :\n`;
						teks += ` · 🆔 ID : ${user.attributes.id}\n`;
						teks += ` · 👤 Name : ${user.attributes.first_name} ${user.attributes.last_name}\n`;
						teks += ` · 📝 Username : ${user.attributes.username}\n`;
						teks += ` · 📧 Email : ${user.attributes.email}\n`;
						teks += ` · 🛡️ Admin : ${user.attributes.root_admin ? 'Yes' : 'No'}\n`;
						teks += ` · 🔒 2FA : ${user.attributes["2fa"] ? 'Enabled' : 'Disabled'}\n`;
						teks += `${'-'.repeat(24)}\n`;
					}

					teks += `\n📑 *Page* : ${response.meta.pagination.current_page}/${response.meta.pagination.total_pages} pages\n`;
					teks += `📊 *Total Users* : ${response.meta.pagination.total}\n`;
					teks += `📦 *Users per Page* : ${response.meta.pagination.per_page}\n`;

					haruka.sendMessage(m.chat, {
						image: { url: thumbUrl },
						caption: teks
					}, { quoted: m });

				} catch (error) {
					console.log(error);
					newReply(`❌ *Terjadi kesalahan:* ${error.message}`);
				}
			}
			break;

			case 'listsrv': {
				if (!isCreator) return newReply(mess.owner);

				let page = args[0] ? args[0] : '1';
				try {
					let response = await fetchJson(global.panel + "/api/application/servers?page=" + page, {
						"headers": {
							"Accept": "application/json",
							"Content-Type": "application/json",
							"Authorization": "Bearer " + global.apiuser
						}
					});

					let servers = response.data;
					let teks = `*📋 LIST SERVER PANEL 📋*\n\n`;
					teks += `${'-'.repeat(24)}\n`;

					for (let server of servers) {
						teks += `*🖥️ Server Info*\n`;
						teks += ` · 🆔 *ID:* ${server.attributes.id}\n`;
						teks += ` · 🔑 *Identifier:* ${server.attributes.identifier}\n`;
						teks += ` · 📛 *Name:* ${server.attributes.name}\n`;
						teks += ` · 📝 *Description:* ${server.attributes.description || 'No Description'}\n`;
						teks += ` · 🚫 *Suspended:* ${server.attributes.suspended ? 'Yes' : 'No'}\n\n`;
			
						teks += `*💾 Storage Info*\n`;
						teks += ` · 🧠 *Memory:* ${server.attributes.limits.memory == 0 ? "Unlimited" : (server.attributes.limits.memory / 1000) + " GB"}\n`;
						teks += ` · 📀 *Disk:* ${server.attributes.limits.disk == 0 ? "Unlimited" : (server.attributes.limits.disk / 1000) + " GB"}\n`;
						teks += ` · ⚙️ *CPU:* ${server.attributes.limits.cpu == 0 ? "Unlimited" : server.attributes.limits.cpu + "%"}\n`;
						teks += `${'-'.repeat(24)}\n`;
					}

					teks += `\n📑 *Page:* ${response.meta.pagination.current_page}/${response.meta.pagination.total_pages}\n`;
					teks += `📊 *Total Servers:* ${response.meta.pagination.total}\n`;
					teks += `📦 *Servers per Page:* ${response.meta.pagination.per_page}\n`;

					haruka.sendMessage(m.chat, {
						image: { url: thumbUrl },
						caption: teks
					}, { quoted: m });

				} catch (error) {
					console.log(error);
					m.reply(`❌ *Terjadi kesalahan:* ${error.message}`);
				}
			}
			break;

			case 'addusr': {
				if (!isCreator) return newReply(mess.owner);

				let input = text.split(",");
				let email = input[0];
				let username = input[1];
				let password = input[2];
				let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : input[3].replace(/[^0-9]/g, '') + '@s.whatsapp.net';

				if (!email || !username || !password || !input[3] && !users) return newReply(`*Masukan ${!email ? "email" : !username ? "username" : !password ? "password" : "penerima"} yang valid!*\n\n*Contoh* :\n${prefix + command} bot@gmail.com,bot,bot123,@0`);

				let onWA = await onWhatsApp(users);
				if (onWA.length < 1) return newReply("Penerima tidak ada di WhatsApp");

				try {
					const userData = await createUser(email, username, password);
					if (userData.errors) return m.reply(JSON.stringify(userData.errors[0], null, 2));

					let teks = `*📋 NEW USERS ADDED 📋*\n\n`;

					teks += `*User Info:*\n`;
					teks += ` · 🆔 *ID:* ${userData.attributes.id}\n`;
					teks += ` · 👤 *Username:* ${userData.attributes.username}\n`;
					teks += ` · 📧 *Email:* ${userData.attributes.email}\n`;
					teks += ` · 👑 *Admin:* ${userData.attributes.root_admin ? 'Yes' : 'No'}\n`;
					teks += ` · 🏷️ *Tags:* @${users.split("@")[0]}\n`;

					haruka.sendMessage(m.chat, {
						image: { url: thumbUrl },
						caption: teks
					}, { quoted: m });

					let teks2 = `*📋 NEW USERS LOGIN 📋*\n\n`;
					teks2 += ` · 📧 *Email:* ${email}\n`;
					teks2 += ` · 👤 *Username:* ${username}\n`;
					teks2 += ` · 🔑 *Password:* ${password}\n`;
					teks2 += ` · 🔗 *Login:* ${global.panel.replace("https://", "")}\n`;

					await haruka.sendMessage(users, {
						text: teks2
					}, { quoted: m });

				} catch (error) {
					console.log(error);
					m.reply(`❌ *Terjadi kesalahan:* ${error.message}`);
				}
			}
			break;

			case 'addsrv': {
				if (!isCreator) return newReply(mess.owner);
				let input = text.split(",");
				let name = input[0];
				let userid = input[1];
				let memo = input[2];
				let disk = input[3];
				let cpu = input[4];
				if (!name || !userid || !memo || !disk || !cpu) {
					return newReply(`*Masukkan ${!name ? "name" : !userid ? "userId" : !memo ? "memory" : !disk ? "disk" : "cpu"} panel yang valid!*\n\n*Tutorial* :\n${prefix + command} name,userid,memo,disk,cpu\n\n*Contoh* : ${prefix + command} bot,6,1200,1200,100`);
				}
				if (isNaN(userid) || isNaN(memo) || isNaN(disk) || isNaN(cpu)) {
					return newReply(`*${isNaN(userid) ? "User ID" : isNaN(memo) ? "Memory" : isNaN(disk) ? "Disk" : "CPU"} harus berupa angka!*\n\n*Tutorial* :\n${prefix + command} name,userid,memo,disk,cpu\n\n*Contoh* : ${prefix + command} bot,6,1200,1200,100`);
				}
				try {
					const eggData = await getEggStartupCommand();
					const startup_cmd = eggData.attributes.startup;
					let data = await createServer(name, userid, startup_cmd, memo, cpu, disk);
					if (data.errors) {
						return m.reply(JSON.stringify(data.errors[0], null, 2));
					}
					let teks = `*👑 SERVERS ADDED 👑*\n\n`;
					teks += `*Server Info* :\n`;
					teks += ` · ID : ${data.attributes.id}\n`;
					teks += ` · Identifier : ${data.attributes.identifier}\n`;
					teks += ` · Name : ${data.attributes.name}\n`;
					teks += ` · Memory : ${data.attributes.limits.memory}\n`;
					teks += ` · Disk : ${data.attributes.limits.disk}\n`;
					teks += ` · CPU : ${data.attributes.limits.cpu}%\n`;
					haruka.sendMessage(m.chat, { 
						image: thumb, 
						caption: teks 
					}, { 
						quoted: m 
					});
				} catch (error) {
					console.log(error);
					newReply(`❌ *Terjadi kesalahan:* ${error.message}`);
				}
			}
			break;

			case 'delsrv': {
				if (!isCreator) return newReply(mess.owner)
				let srv = args[0];
				if (!srv) return m.reply('Silakan berikan *ID Server* yang ingin dihapus.');
				try {
					let res = await deleteServer(srv);
					if (res.errors) return m.reply('⚠️ Server yang ditentukan tidak ditemukan. Silakan periksa ID dan coba lagi.');
					m.reply('✅ Server berhasil dihapus. Sampai jumpa!');
				} catch (error) {
					console.log(error);
				}
			}
			break;

			case 'delusr': {
				if (!isCreator) return newReply(mess.owner)
				let usr = args[0];
				if (!usr) return m.reply('Silakan berikan *ID Pengguna* yang ingin dihapus.');
				try {
					let res = await deleteUser(usr);
					if (res.errors) return m.reply('⚠️ Pengguna yang ditentukan tidak ditemukan. Silakan verifikasi ID dan coba lagi.');
					m.reply(`✅ Pengguna dengan ID *${usr}* berhasil dihapus dari sistem.`);
				} catch (error) {
					console.log(error);
				}
			}
			break;

			case 'startsrv':
			case 'stopsrv':
			case 'restartsrv': {
				if (!isCreator) return newReply(mess.owner)
				let action = command.replace('srv', '')
				let srv = args[0]
				if (!srv) return m.reply('input *ID* from server')
				try {
					let data = await manageServer(action, srv)
					m.reply(data)
				} catch (error) {
					console.log(error);
				}
			}
			break

			default:
			if (budy.startsWith('=>')) {
				if (!isCreator) return
				function Return(sul) {
					sat = JSON.stringify(sul, null, 2)
					bang = util.format(sat)
					if (sat == undefined) {
						bang = util.format(sul)
					}
					return newReply(bang)
				}
				try {
					newReply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
				} catch (e) {
					newReply(String(e))
				}
			}

			if (budy.startsWith('>')) {
				if (!isCreator) return
				try {
					let evaled = await eval(budy.slice(2))
					if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
					await newReply(evaled)
				} catch (err) {
					await newReply(String(err))
				}
			}

			if (budy.startsWith('$')) {
				if (!isCreator) return
				exec(budy.slice(2), (err, stdout) => {
					if (err) return newReply(err)
					if (stdout) return newReply(stdout)
				})
			}

			if (isCmd && budy.toLowerCase() != undefined) {
				if (m.chat.endsWith('broadcast')) return
				if (m.isBaileys) return
				let msgs = db.data.database
				if (!(budy.toLowerCase() in msgs)) return
				haruka.copyNForward(m.chat, msgs[budy.toLowerCase()], true, {quoted: m})
			}

			if (m.chat.endsWith('@s.whatsapp.net') && !isCmd) {
				try {
					this.menfes = this.menfes || {};
					let room = Object.values(this.menfes).find(room => 
						[room.a, room.b].includes(m.sender) && room.state === 'CHATTING'
					);
					if (room) {
						if (/^.*(next|leave|start)/.test(m.text)) return;
						if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return;
						let find = Object.values(this.menfes).find(menpes => 
							[menpes.a, menpes.b].includes(m.sender)
						);
						let other = find.a === m.sender ? find.b : find.a;
						if (m.mtype === 'conversation' || m.mtype === 'extendedTextMessage') {
							await haruka.sendMessage(other, {
								text: m.text,
								mentions: [other]
							}, { 
								quoted: fmen 
							});
						}
						if (['imageMessage', 'videoMessage', 'audioMessage', 'documentMessage', 'stickerMessage'].includes(m.mtype)) {
							let media;
							try {
								media = await m.download();
							} catch (err) {
								console.error('Gagal mengunduh media:', err);
								await haruka.sendMessage(m.sender, { text: 'Gagal mengunduh media. Pastikan media masih valid dan coba lagi.' });
								return;
							}
							let options = {
								caption: m.msg?.caption || '',
								mentions: [other]
							};
							if (m.mtype === 'imageMessage') {
								await haruka.sendMessage(other, { image: media, ...options }, { quoted: fmen });
							} 
							else if (m.mtype === 'videoMessage') {
								await haruka.sendMessage(other, { video: media, ...options }, { quoted: fmen });
							} 
							else if (m.mtype === 'audioMessage') {
								await haruka.sendMessage(other, { audio: media, mimetype: 'audio/mpeg', ...options }, { quoted: fmen });
							} 
							else if (m.mtype === 'documentMessage') {
								await haruka.sendMessage(other, { document: media, mimetype: m.msg?.mimetype, fileName: m.msg?.fileName, ...options }, { quoted: fmen });
							} 
							else if (m.mtype === 'stickerMessage') {
								await haruka.sendMessage(other, { sticker: media }, { quoted: fmen });
							} 
							else {
								console.warn('Tipe media tidak dikenali:', m.mtype);
							}
						}
					}
				} catch (err) {
					console.error('Error di fitur Menfess:', err);
					await haruka.sendMessage(m.sender, { text: 'Terjadi kesalahan saat mengirim pesan ke pasangan Menfess. Silakan coba lagi nanti.' });
				}
			}
		}
	} catch (err) {
		console.log(util.format(err))
		let e = String(err)
		haruka.sendMessage(`${ownerNumber}@s.whatsapp.net`, { 
			text: "Halo Developer! Sepertinya ada kesalahan nih... Tolong diperiksa ya~ 🥺✨\n\n" + util.format(e), 
			contextInfo: {
				forwardingScore: 100, 
				isForwarded: true
			}
		}, {
			quoted: m
		})

		if (e.includes("conflict")) return;
		if (e.includes("Cannot derive from empty media key")) return;
		if (e.includes("not-authorized")) return;
		if (e.includes("already-exists")) return;
		if (e.includes("rate-overlimit")) return;
		if (e.includes("Connection Closed")) return;
		if (e.includes("Timed Out")) return;
		if (e.includes("Value not found")) return;
		if (e.includes("Socket connection timeout")) return;
	};
};
