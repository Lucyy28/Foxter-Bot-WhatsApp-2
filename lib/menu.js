///BUY FULL NO ENC ( 088213993436 )
const chalk = require('chalk')
const fs = require('fs')
const petik = '```';

global.allMenu = (prefix, hituet) => {
return`
*GROUP MENU* ${petik}
 • ${prefix}out
 • ${prefix}pushcontact
 • ${prefix}savecontact
 • ${prefix}sendcontact
 • ${prefix}getcontact
 • ${prefix}contacttag
 • ${prefix}antibadword
 • ${prefix}nsfw
 • ${prefix}antiaudio
 • ${prefix}antiforeign
 • ${prefix}antisticker
 • ${prefix}antiimage
 • ${prefix}antivideo
 • ${prefix}antiviewonce
 • ${prefix}antispam
 • ${prefix}antimedia
 • ${prefix}antidocument
 • ${prefix}anticontact
 • ${prefix}antilocation
 • ${prefix}antilocation
 • ${prefix}antilink
 • ${prefix}antilinkgc
 • ${prefix}mute
 • ${prefix}welcome
 • ${prefix}left
 • ${prefix}adminevent
 • ${prefix}groupevent
 • ${prefix}kick
 • ${prefix}add
 • ${prefix}promote
 • ${prefix}demote
 • ${prefix}setnamegc
 • ${prefix}setppgc
 • ${prefix}deleteppgc
 • ${prefix}setdesk
 • ${prefix}hidetag
 • ${prefix}listonline
 • ${prefix}group
 • ${prefix}editinfo
 • ${prefix}linkgc
 • ${prefix}resetlink
 • ${prefix}afk
 • ${prefix}addlist
 • ${prefix}dellist
 • ${prefix}ceklist${petik}

*SEARCH MENU* ${petik}
 • ${prefix}anime
 • ${prefix}imdb
 • ${prefix}bukalapak
 • ${prefix}playstore
 • ${prefix}umma
 • ${prefix}happymod
 • ${prefix}ytsearch
 • ${prefix}tiktoksearch
 • ${prefix}pinterest
 • ${prefix}wallpaper
 • ${prefix}wikipedia
 • ${prefix}wikimedia
 • ${prefix}ringtone
 • ${prefix}traceanime
 • ${prefix}weather
 • ${prefix}presetam
 • ${prefix}soundcloud
 • ${prefix}lyrics${petik}

*DOWNLOAD MENU* ${petik}
 • ${prefix}play
 • ${prefix}ytaudio
 • ${prefix}ytvideo
 • ${prefix}tiktokmp4
 • ${prefix}tiktokmp3
 • ${prefix}tiktokslide
 • ${prefix}instagram
 • ${prefix}gitclone
 • ${prefix}gdrive
 • ${prefix}savepin
 • ${prefix}mediafire${petik}

*CONVERTER/TOOLS* ${petik}
 • ${prefix}brat
 • ${prefix}ssweb
 • ${prefix}qc
 • ${prefix}s
 • ${prefix}swm
 • ${prefix}tourl
 • ${prefix}toimage
 • ${prefix}remini
 • ${prefix}fetch
 • ${prefix}toaudio
 • ${prefix}bass
 • ${prefix}blown
 • ${prefix}deep
 • ${prefix}earrape
 • ${prefix}fast
 • ${prefix}fat
 • ${prefix}nightcore
 • ${prefix}reverse
 • ${prefix}robot
 • ${prefix}slow
 • ${prefix}smooth
 • ${prefix}squirrel${petik}

*STORE MENU* ${petik}
 • ${prefix}updatelist
 • ${prefix}jpm
 • ${prefix}jpm2
 • ${prefix}addlist
 • ${prefix}dellist
 • ${prefix}store
 • ${prefix}list
 • ${prefix}bagi
 • ${prefix}kali
 • ${prefix}kurang
 • ${prefix}tambah${petik}

*GAME MENU*${petik}
 • ${prefix}tebakkabupaten
 • ${prefix}tebakjkt48
 • ${prefix}tebakhewan
 • ${prefix}tebakml
 • ${prefix}tebakchara
 • ${prefix}tebaklogo
 • ${prefix}tebakaplikasi
 • ${prefix}tebakff
 • ${prefix}tebakhero
 • ${prefix}tebakgame
 • ${prefix}tebakgambar
 • ${prefix}tebakbendera
 • ${prefix}lengkapikalimat
 • ${prefix}asahotak
 • ${prefix}tebakkata
 • ${prefix}tebaktebakan
 • ${prefix}tebaklirik
 • ${prefix}tebakkimia
 • ${prefix}tebaksiapa
 • ${prefix}tebakkalimat${petik}

*RANDOM ANIME MENU*${petik}
 • ${prefix}neko
 • ${prefix}waifu
 • ${prefix}akira
 • ${prefix}akiyama
 • ${prefix}ana
 • ${prefix}asuna
 • ${prefix}ayuzawa
 • ${prefix}boruto
 • ${prefix}chitanda
 • ${prefix}chitoge
 • ${prefix}deidara
 • ${prefix}doraemon
 • ${prefix}elaina
 • ${prefix}emilia
 • ${prefix}erza
 • ${prefix}fanart
 • ${prefix}gremory
 • ${prefix}hestia
 • ${prefix}hinata
 • ${prefix}husbu
 • ${prefix}icon
 • ${prefix}inori
 • ${prefix}isuzu
 • ${prefix}itachi
 • ${prefix}itori
 • ${prefix}kaga
 • ${prefix}kagura
 • ${prefix}kaguya
 • ${prefix}kakasih
 • ${prefix}kaneki
 • ${prefix}kaori
 • ${prefix}keneki
 • ${prefix}kosaki
 • ${prefix}kotori
 • ${prefix}kuriyama
 • ${prefix}kuroha
 • ${prefix}kurumi
 • ${prefix}loli
 • ${prefix}madara
 • ${prefix}mikasa
 • ${prefix}miku
 • ${prefix}minato
 • ${prefix}naruto
 • ${prefix}natsukawa
 • ${prefix}nekonime
 • ${prefix}nezuko
 • ${prefix}nishimiya
 • ${prefix}onepiece
 • ${prefix}pokemon
 • ${prefix}rem
 • ${prefix}rize
 • ${prefix}sagiri
 • ${prefix}sakura
 • ${prefix}sasuke
 • ${prefix}shina
 • ${prefix}shinka
 • ${prefix}shizuka
 • ${prefix}simp
 • ${prefix}tomori
 • ${prefix}toukachan
 • ${prefix}yatogami
 • ${prefix}yuki${petik}

*OTHERS MENU* ${petik}
 • ${prefix}ping
 • ${prefix}speedtest
 • ${prefix}otakudesu
 • ${prefix}gempa
 • ${prefix}quotesanime
 • ${prefix}githubstalk
 • ${prefix}npmstalk
 • ${prefix}mlstalk
 • ${prefix}runtime
 • ${prefix}donate
 • ${prefix}script
 • ${prefix}repository
 • ${prefix}infobot
 • ${prefix}owner
 • ${prefix}getch
 • ${prefix}getgc${petik}
`}

global.ownerMenu = (prefix, hituet) => {
return`
*OWNER MENU* ${petik}
 • ${prefix}backup
 • ${prefix}addbadword
 • ${prefix}delbadword
 • ${prefix}listbadword
 • ${prefix}resetdbuser
 • ${prefix}resethit
 • ${prefix}setmenu
 • ${prefix}setreply
 • ${prefix}statustext
 • ${prefix}statusvideo
 • ${prefix}statusimage
 • ${prefix}statusaudio
 • ${prefix}upsaluran
 • ${prefix}setimgmenu
 • ${prefix}setvidmenu
 • ${prefix}addtitle
 • ${prefix}deltitle
 • ${prefix}addlimit
 • ${prefix}dellimit
 • ${prefix}addpremium
 • ${prefix}delpremium
 • ${prefix}listpremium
 • ${prefix}addowner
 • ${prefix}delowner
 • ${prefix}clearsession
 • ${prefix}join
 • ${prefix}getsession
 • ${prefix}myip
 • ${prefix}shutdown
 • ${prefix}autoread
 • ${prefix}unavailable
 • ${prefix}autorecordtype
 • ${prefix}autorecord
 • ${prefix}autotype
 • ${prefix}autobio
 • ${prefix}autosticker
 • ${prefix}safesearch
 • ${prefix}autodownload
 • ${prefix}autoblock
 • ${prefix}onlygc
 • ${prefix}onlypc
 • ${prefix}self
 • ${prefix}public
 • ${prefix}setexif
 • ${prefix}setprefix
 • ${prefix}setautoblock
 • ${prefix}setantiforeign
 • ${prefix}out
 • ${prefix}pushcontact
 • ${prefix}savecontact
 • ${prefix}sendcontact
 • ${prefix}getcontact
 • ${prefix}contacttag
 • ${prefix}ban
 • ${prefix}unban
 • ${prefix}getcase
 • ${prefix}setppbot
 • ${prefix}deleteppbot
 • ${prefix}setbiobot
 • ${prefix}listpc
 • ${prefix}listgc
 • ${prefix}creategc
 • ${prefix}autostatusview
 • ${prefix}anticall
 • ${prefix}addvideo
 • ${prefix}delvideo
 • ${prefix}listvideo
 • ${prefix}addimage
 • ${prefix}delimage
 • ${prefix}listimage
 • ${prefix}addsticker
 • ${prefix}delsticker
 • ${prefix}liststicker
 • ${prefix}addaudio
 • ${prefix}delaudio
 • ${prefix}listaudio
 • ${prefix}addlist
 • ${prefix}dellist
 • ${prefix}ceklist${petik}
`}

global.groupMenu = (prefix, hituet) => {
return`
*GROUP MENU* ${petik}
 • ${prefix}out
 • ${prefix}pushcontact
 • ${prefix}savecontact
 • ${prefix}sendcontact
 • ${prefix}getcontact
 • ${prefix}contacttag
 • ${prefix}antibadword
 • ${prefix}nsfw
 • ${prefix}antiaudio
 • ${prefix}antiforeign
 • ${prefix}antisticker
 • ${prefix}antiimage
 • ${prefix}antivideo
 • ${prefix}antiviewonce
 • ${prefix}antispam
 • ${prefix}antimedia
 • ${prefix}antidocument
 • ${prefix}anticontact
 • ${prefix}antilocation
 • ${prefix}antilocation
 • ${prefix}antilink
 • ${prefix}antilinkgc
 • ${prefix}mute
 • ${prefix}welcome
 • ${prefix}left
 • ${prefix}adminevent
 • ${prefix}groupevent
 • ${prefix}kick
 • ${prefix}add
 • ${prefix}promote
 • ${prefix}demote
 • ${prefix}setnamegc
 • ${prefix}setppgc
 • ${prefix}deleteppgc
 • ${prefix}setdesk
 • ${prefix}hidetag
 • ${prefix}listonline
 • ${prefix}group
 • ${prefix}editinfo
 • ${prefix}linkgc
 • ${prefix}resetlink
 • ${prefix}afk
 • ${prefix}addlist
 • ${prefix}dellist
 • ${prefix}ceklist${petik}
`}

global.searchMenu = (prefix, hituet) => {
return`
*SEARCH MENU* ${petik}
 • ${prefix}anime
 • ${prefix}imdb
 • ${prefix}bukalapak
 • ${prefix}playstore
 • ${prefix}umma
 • ${prefix}happymod
 • ${prefix}ytsearch
 • ${prefix}tiktoksearch
 • ${prefix}pinterest
 • ${prefix}wallpaper
 • ${prefix}wikipedia
 • ${prefix}wikimedia
 • ${prefix}ringtone
 • ${prefix}traceanime
 • ${prefix}weather
 • ${prefix}presetam
 • ${prefix}soundcloud
 • ${prefix}lyrics${petik}
`}

global.downloadMenu = (prefix, hituet) => {
return`
*DOWNLOAD MENU* ${petik}
 • ${prefix}play
 • ${prefix}ytaudio
 • ${prefix}ytvideo
 • ${prefix}tiktokmp4
 • ${prefix}tiktokmp3
 • ${prefix}tiktokslide
 • ${prefix}instagram
 • ${prefix}gitclone
 • ${prefix}gdrive
 • ${prefix}savepin
 • ${prefix}mediafire${petik}
`}

global.convertMenu = (prefix, hituet) => {
return`
*CONVERTER/TOOLS* ${petik}
 • ${prefix}brat
 • ${prefix}ssweb
 • ${prefix}qc
 • ${prefix}s
 • ${prefix}swm
 • ${prefix}tourl
 • ${prefix}toimage
 • ${prefix}remini
 • ${prefix}fetch
 • ${prefix}toaudio
 • ${prefix}bass
 • ${prefix}blown
 • ${prefix}deep
 • ${prefix}earrape
 • ${prefix}fast
 • ${prefix}fat
 • ${prefix}nightcore
 • ${prefix}reverse
 • ${prefix}robot
 • ${prefix}slow
 • ${prefix}smooth
 • ${prefix}squirrel${petik}
`}

global.storeMenu = (prefix, hituet) => {
return`
*STORE MENU* ${petik}
 • ${prefix}updatelist
 • ${prefix}jpm
 • ${prefix}jpm2
 • ${prefix}addlist
 • ${prefix}dellist
 • ${prefix}store
 • ${prefix}list
 • ${prefix}bagi
 • ${prefix}kali
 • ${prefix}kurang
 • ${prefix}tambah${petik}
`}

global.gameMenu = (prefix, hituet) => {
return`
*GAME MENU*${petik}
 • ${prefix}tebakkabupaten
 • ${prefix}tebakjkt48
 • ${prefix}tebakhewan
 • ${prefix}tebakml
 • ${prefix}tebakchara
 • ${prefix}tebaklogo
 • ${prefix}tebakaplikasi
 • ${prefix}tebakff
 • ${prefix}tebakhero
 • ${prefix}tebakgame
 • ${prefix}tebakgambar
 • ${prefix}tebakbendera
 • ${prefix}lengkapikalimat
 • ${prefix}asahotak
 • ${prefix}tebakkata
 • ${prefix}tebaktebakan
 • ${prefix}tebaklirik
 • ${prefix}tebakkimia
 • ${prefix}tebaksiapa
 • ${prefix}tebakkalimat${petik}
`}

global.randomAnimeMenu = (prefix, hituet) => {
return`
*RANDOM ANIME MENU*${petik}
 • ${prefix}neko
 • ${prefix}waifu
 • ${prefix}akira
 • ${prefix}akiyama
 • ${prefix}ana
 • ${prefix}asuna
 • ${prefix}ayuzawa
 • ${prefix}boruto
 • ${prefix}chitanda
 • ${prefix}chitoge
 • ${prefix}deidara
 • ${prefix}doraemon
 • ${prefix}elaina
 • ${prefix}emilia
 • ${prefix}erza
 • ${prefix}fanart
 • ${prefix}gremory
 • ${prefix}hestia
 • ${prefix}hinata
 • ${prefix}husbu
 • ${prefix}icon
 • ${prefix}inori
 • ${prefix}isuzu
 • ${prefix}itachi
 • ${prefix}itori
 • ${prefix}kaga
 • ${prefix}kagura
 • ${prefix}kaguya
 • ${prefix}kakasih
 • ${prefix}kaneki
 • ${prefix}kaori
 • ${prefix}keneki
 • ${prefix}kosaki
 • ${prefix}kotori
 • ${prefix}kuriyama
 • ${prefix}kuroha
 • ${prefix}kurumi
 • ${prefix}loli
 • ${prefix}madara
 • ${prefix}mikasa
 • ${prefix}miku
 • ${prefix}minato
 • ${prefix}naruto
 • ${prefix}natsukawa
 • ${prefix}nekonime
 • ${prefix}nezuko
 • ${prefix}nishimiya
 • ${prefix}onepiece
 • ${prefix}pokemon
 • ${prefix}rem
 • ${prefix}rize
 • ${prefix}sagiri
 • ${prefix}sakura
 • ${prefix}sasuke
 • ${prefix}shina
 • ${prefix}shinka
 • ${prefix}shizuka
 • ${prefix}simp
 • ${prefix}tomori
 • ${prefix}toukachan
 • ${prefix}yatogami
 • ${prefix}yuki${petik}
`}

global.otherMenu = (prefix, hituet) => {
return`
*OTHERS MENU* ${petik}
 • ${prefix}ping
 • ${prefix}speedtest
 • ${prefix}otakudesu
 • ${prefix}kusonimeinfo
 • ${prefix}kusonimesearch
 • ${prefix}quotesanime
 • ${prefix}gempa
 • ${prefix}githubstalk
 • ${prefix}npmstalk
 • ${prefix}mlstalk
 • ${prefix}runtime
 • ${prefix}donate
 • ${prefix}script
 • ${prefix}repository
 • ${prefix}infobot
 • ${prefix}owner
 • ${prefix}getch
 • ${prefix}getgc${petik}
`}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})