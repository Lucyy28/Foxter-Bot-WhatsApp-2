// ==========================
// 📚 Game Features Handler
// 🛠️ Base by ChatGPT
// ==========================
///BUY FULL NO ENC ( 088213993436 )
require('../settings');
const { sleep, clockString } = require('./myfunc');

// Fungsi untuk memilih elemen acak dari daftar
function pickRandom(list) {
    return list[Math.floor(list.length * Math.random())];
}

// ==========================
// 🎰 SLOT GAME
// ==========================
const gameSlot = async (haruka, m, db) => {
    if (db[m.sender].limit < 1) return m.reply(global.mess.endLimit);

    const icons = ['🍇', '🍈', '🍉', '🍊', '🍋', '🍌', '🍍', '🥭', '🍎', '🍐', '🍑', '🍒', '🍓', '🫐', '🥝', '🥥', '🥑'];
    const slot1 = pickRandom(icons);
    const slot2 = pickRandom(icons);
    const slot3 = pickRandom(icons);

    const listSlot = [
        `${pickRandom(icons)} : ${pickRandom(icons)} : ${pickRandom(icons)}`,
        `${slot1} : ${slot2} : ${slot3}`,
        `${pickRandom(icons)} : ${pickRandom(icons)} : ${pickRandom(icons)}`
    ];

    const randomLimit = Math.floor(Math.random() * 8);

    try {
        db[m.sender].limit -= 1;
        global.bot.limit += 1;

        if (slot1 === slot2 && slot2 === slot3) {
            db[m.sender].limit += randomLimit;
            haruka.sendMessage(m.chat, { text: `[ 🎰 SLOT GAME 🎰 ]\n\n${listSlot.join('\n')}\n\n🎉 Kamu Menang! 🎉\n+${randomLimit} Limit` }, { quoted: m });
        } else {
            haruka.sendMessage(m.chat, { text: `[ 🎰 SLOT GAME 🎰 ]\n\n${listSlot.join('\n')}\n\n😢 Kamu Kalah! 😢\n-1 Limit` }, { quoted: m });
        }
    } catch (e) {
        console.error(e);
        m.reply('Terjadi kesalahan saat bermain slot!');
    }
};

// ==========================
// 🎲 CASINO GAME
// ==========================
const gameCasinoSolo = async (haruka, m, prefix, db) => {
    try {
        // Ambil jumlah taruhan dari argumen
        let args = m.args || [];
        let bet = parseInt(args[0]) || 1;

        // Validasi taruhan
        if (isNaN(bet) || bet < 1) {
            return m.reply(`⚠️ Masukkan jumlah taruhan yang benar!\nContoh: *${prefix}casino 10*`);
        }

        // Periksa apakah pengguna memiliki cukup uang
        if (db[m.sender]?.uang >= bet) {
            db[m.sender].uang -= bet; // Kurangi uang pengguna
            global.bot.uang = (global.bot.uang || 0) + bet; // Tambahkan ke uang bot

            // Hasil acak untuk pengguna dan bot
            let randomUser = Math.floor(Math.random() * 81); // Nilai pengguna (0-80)
            let randomBot = Math.floor(Math.random() * 101); // Nilai bot (0-100)

            if (randomUser > randomBot) {
                db[m.sender].uang += bet * 2; // Tambahkan uang kemenangan
                m.reply(`🎲 *CASINO GAME* 🎲\n\n👤 *Kamu:* ${randomUser}\n🤖 *Bot:* ${randomBot}\n\n🎉 *Kamu Menang!*\n+${bet * 2} Uang`);
            } else if (randomUser < randomBot) {
                m.reply(`🎲 *CASINO GAME* 🎲\n\n👤 *Kamu:* ${randomUser}\n🤖 *Bot:* ${randomBot}\n\n😢 *Kamu Kalah!*\n-${bet} Uang`);
            } else {
                db[m.sender].uang += bet; // Kembalikan uang jika seri
                m.reply(`🎲 *CASINO GAME* 🎲\n\n👤 *Kamu:* ${randomUser}\n🤖 *Bot:* ${randomBot}\n\n⚖️ *Seri!*\nUang dikembalikan.`);
            }
        } else {
            m.reply('❌ *Kamu tidak punya cukup uang untuk bermain Casino!*');
        }
    } catch (e) {
        console.error(e);
        m.reply('⚠️ *Terjadi kesalahan saat bermain Casino!*');
    }
};

// ==========================
// 🦹 ROBBERY GAME
// ==========================
const gameMerampok = async (m, db) => {
    let target = m.mentionedJid[0] || m.quoted?.sender;
    if (!target) return m.reply('Tag pengguna yang ingin kamu rampok!');

    let cooldown = 3600000; // 1 Jam
    let remainingTime = cooldown - (new Date() - db[m.sender].lastrampok);

    if (remainingTime > 0) {
        return m.reply(`Kamu harus menunggu ${clockString(remainingTime)} sebelum merampok lagi.`);
    }

    let amount = Math.floor(Math.random() * 10000);

    if (db[target].uang < amount) {
        return m.reply('Target tidak memiliki cukup uang untuk dirampok!');
    }

    db[target].uang -= amount;
    db[m.sender].uang += amount;
    db[m.sender].lastrampok = new Date().getTime();

    m.reply(`💰 *BERHASIL MERAMPOK!* 💰\nKamu berhasil merampok ${amount} uang dari @${target.split('@')[0]}`);
};

// ==========================
// 🎁 DAILY REWARD
// ==========================
const daily = async (haruka, m, db) => {
    let cooldown = 86400000; // 24 Jam
    let remainingTime = cooldown - (new Date() - db[m.sender].lastclaim);

    if (remainingTime > 0) {
        return haruka.sendMessage(m.chat, { text: `Kamu sudah klaim hari ini!\nTunggu ${clockString(remainingTime)} untuk klaim lagi.` }, { quoted: m });
    }

    db[m.sender].limit += 10;
    db[m.sender].uang += 10000;
    db[m.sender].lastclaim = new Date().getTime();

    haruka.sendMessage(m.chat, { text: `🎁 *KLAIM HARIAN!* 🎁\n+10 Limit\n+10.000 Uang` }, { quoted: m });
};

// ==========================
// 💸 TRANSFER LIMIT & UANG
// ==========================
const transferLimit = async (haruka, m, args, db) => {
    let count = parseInt(args[0]);
    let target = m.mentionedJid[0] || m.quoted?.sender;

    if (!count || isNaN(count) || !target) return m.reply('Format salah! Contoh: transferlimit 10 @user');

    if (db[m.sender].limit < count) return m.reply('Limit kamu tidak mencukupi!');

    db[m.sender].limit -= count;
    db[target].limit += count;

    haruka.sendMessage(m.chat, { text: `✅ Berhasil mentransfer ${count} Limit ke @${target.split('@')[0]}`, mentions: [target] }, { quoted: m });
};

const transferUang = async (haruka, m, args, db) => {
    let count = parseInt(args[0]);
    let target = m.mentionedJid[0] || m.quoted?.sender;

    if (!count || isNaN(count) || !target) return m.reply('Format salah! Contoh: transferuang 10 @user');

    if (db[m.sender].uang < count) return m.reply('Uang kamu tidak mencukupi!');

    db[m.sender].uang -= count;
    db[target].uang += count;

    haruka.sendMessage(m.chat, { text: `✅ Berhasil mentransfer ${count} Uang ke @${target.split('@')[0]}`, mentions: [target] }, { quoted: m });
};

// ==========================
// 💼 BUY LIMIT
// ==========================
const buy = async (m, args, db) => {
    let item = args[0];
    let amount = parseInt(args[1]);

    if (!item || isNaN(amount)) {
        return m.reply(`Format salah!\nContoh: .buy limit 10\nHarga: 1 Limit = 500 Uang`);
    }

    if (item.toLowerCase() === 'limit') {
        let totalCost = amount * 500;

        if (db[m.sender].uang >= totalCost) {
            db[m.sender].uang -= totalCost;
            db[m.sender].limit += amount;

            m.reply(`✅ *Pembelian Berhasil!*\nKamu berhasil membeli ${amount} Limit dengan harga ${totalCost} Uang.\n💰 Sisa Uang: ${db[m.sender].uang}\n📊 Total Limit: ${db[m.sender].limit}`);
        } else {
            m.reply(`❌ *Uang Tidak Cukup!*\nKamu butuh ${totalCost} Uang untuk membeli ${amount} Limit.\n💰 Uang Kamu: ${db[m.sender].uang}`);
        }
    } else {
        m.reply(`❌ Item yang tersedia hanya *limit*\nContoh: .buy limit 10`);
    }
};

// ==========================
// 💰 SET UANG
// ==========================
const setUang = (m, db, amount) => {
    if (isNaN(amount)) {
        return m.reply('❌ *Jumlah tidak valid!*\nContoh: .setuang 1000');
    }
    db[m.sender].uang -= parseInt(amount);
    m.reply(`✅ *Uang Berkurang!*\n💰 Uang Kamu sekarang: ${db[m.sender].uang}`);
};

// ==========================
// 📊 SET LIMIT
// ==========================
const setLimit = (m, db, amount) => {
    if (isNaN(amount)) {
        return m.reply('❌ *Jumlah tidak valid!*\nContoh: .setlimit 5');
    }
    db[m.sender].limit -= parseInt(amount);
    m.reply(`✅ *Limit Berkurang!*\n📊 Limit Kamu sekarang: ${db[m.sender].limit}`);
};

module.exports = { 
    gameSlot, 
    gameCasinoSolo, 
    gameMerampok, 
    daily, 
    transferLimit, 
    transferUang, 
    buy, 
    setUang, 
    setLimit 
};