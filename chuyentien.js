module.exports.config = {
    name: "chuyentien",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "Dũng UwU",
    description: "Chuyển tiền của bản thân cho ai đó",
    commandCategory: "Kiếm Tiền",
    usages: "@tag + coins",
    cooldowns: 5,
     };

module.exports.run = async ({ event, api, Currencies, args }) => {
let { threadID, messageID, senderID } = event;
const mention = Object.keys(event.mentions)[0];
let name = event.mentions[mention].split(" ").length
if(!mention) return api.sendMessage('[ 𝐏𝐀𝐘 ] - 𝗩𝘂𝗶 𝗹𝗼̀𝗻𝗴 𝘁𝗮𝗴 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗺𝘂𝗼̂́𝗻 𝗰𝗵𝘂𝘆𝗲̂̉𝗻 𝘁𝗶𝗲̂̀𝗻',threadID,messageID);
else {
	if(!isNaN(args[0+ name])) {
		const coins = parseInt(args[0+ name]);
		let balance = (await Currencies.getData(senderID)).money;
        if (coins <= 0) return api.sendMessage('[ 𝐏𝐀𝐘 ] - 𝗦𝗼̂́ 𝘁𝗶𝗲̂̀𝗻 𝗯𝗮̣𝗻 𝗺𝘂𝗼̂́𝗻 𝗰𝗵𝘂𝘆𝗲̂̉𝗻 𝗸𝗵𝗼̂𝗻𝗴 𝗵𝗼̛̣𝗽 𝗹𝗲̣̂',threadID,messageID);
		if (coins > balance) return api.sendMessage('[ 𝐏𝐀𝐘 ] - 𝗦𝗼̂́ 𝘁𝗶𝗲̂̀𝗻 𝗯𝗮̣𝗻 𝗺𝘂𝗼̂́𝗻 𝗰𝗵𝘂𝘆𝗲̂̉𝗻 𝗹𝗼̛́𝗻 𝗵𝗼̛𝗻 𝘀𝗼̂́ 𝘁𝗶𝗲̂̀𝗻 𝗯𝗮̣𝗻 𝗵𝗶𝗲̣̂𝗻 𝗰𝗼́',threadID,messageID);
		else {
        return api.sendMessage({ body: '[ 𝐏𝐀𝐘 ] - 𝗖𝗵𝘂𝘆𝗲̂̉𝗻 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴 𝗰𝗵𝗼 ' + event.mentions[mention].replace(/@/g, "") + ` ${args[0+ name]}$`}, threadID, async () => {
            await Currencies.increaseMoney(mention, coins);
                  Currencies.decreaseMoney(senderID, coins)
            }, messageID);
		}
	} else return api.sendMessage('[ 𝐏𝐀𝐘 ] - 𝗩𝘂𝗶 𝗹𝗼̀𝗻𝗴 𝗻𝗵𝗮̣̂𝗽 𝘀𝗼̂́ 𝘁𝗶𝗲̂̀𝗻 𝗺𝘂𝗼̂́𝗻 𝗰𝗵𝘂𝘆𝗲̂̉𝗻',threadID,messageID);
}
  }