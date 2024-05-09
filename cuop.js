module.exports.config = {
	name: "cuoptien",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Mirai Team",
	description: "Cướp tiền của một ai đó",
	commandCategory: "Kiếm Tiền",
	usages: "",
	cooldowns: 50
};

module.exports.run = async function({ api, event, Users, Currencies }) {
	var alluser = global.data.allUserID
    let victim = alluser[Math.floor(Math.random() * alluser.length)];
    let nameVictim = (await Users.getData(victim)).name
    if (victim == api.getCurrentUserID() && event.senderID == victim) return api.sendMessage('𝗥𝗮̂́𝘁 𝘁𝗶𝗲̂́𝗰, 𝗯𝗮̣𝗻 𝗸𝗵𝗼̂𝗻𝗴 𝘁𝗵𝗲̂̉ 𝗮̆𝗻 𝗰𝗮̆́𝗽 𝘁𝘂̛̀ 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗻𝗮̀𝘆. 𝗩𝘂𝗶 𝗹𝗼̀𝗻𝗴 𝘁𝗵𝘂̛̉ 𝗹𝗮̣𝗶 ❌', event.threadID, event.messageID);
    var route = Math.floor(Math.random() * 2);
    if (route > 1 || route == 0) {
    const moneydb = (await Currencies.getData(victim)).money;
       var money = Math.floor(Math.random() * 1000) + 1;
        if (moneydb <= 0 || moneydb == undefined) return api.sendMessage(`𝗕𝗮̣𝗻 𝘃𝘂̛̀𝗮 𝗮̆𝗻 𝗰𝗮̆́𝗽 𝗰𝘂̉𝗮 ${nameVictim} 𝗹𝗮̀ 𝗺𝗼̣̂𝘁 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗻𝗴𝗵𝗲̀𝗼. 𝗩𝗶̀ 𝘃𝗮̣̂𝘆, 𝗯𝗮̣𝗻 𝗰𝗼́ 𝗰𝗮́𝗶 𝗻𝗶̣𝘁 🌸`, event.threadID, event.messageID);
        else if (moneydb >= money) return api.sendMessage(`𝗕𝗮̣𝗻 𝘃𝘂̛̀𝗮 𝗹𝗮̂́𝘆 𝘁𝗿𝗼̣̂𝗺 ${money}$ 𝘁𝘂̛̀ ${nameVictim} 𝘁𝗿𝗼𝗻𝗴 𝗻𝗵𝗼́𝗺 𝗻𝗮̀𝘆 🌸`, event.threadID, async () => {
            await Currencies.increaseMoney(victim, parseInt("-"+money))
            await Currencies.increaseMoney(event.senderID, parseInt(money))
        }, event.messageID);
        else if (moneydb < money) return api.sendMessage(`𝗕𝗮̣𝗻 𝘃𝘂̛̀𝗮 𝗮̆𝗻 𝗰𝗮̆́𝗽 𝘁𝗮̂́𝘁 𝗰𝗮̉ ${moneydb} 𝘀𝗼̂́ 𝘁𝗶𝗲̂̀𝗻 𝗰𝘂̉𝗮 ${nameVictim} 𝘁𝗿𝗼𝗻𝗴 𝗻𝗵𝗼́𝗺 𝗻𝗮̀𝘆 🌸`, event.threadID, async () => {
            await Currencies.increaseMoney(victim, parseInt("-"+money))
            await Currencies.increaseMoney(event.senderID, parseInt(money))
        }, event.messageID);
    }
    else if (route == 1) {
        var name = (await Users.getData(event.senderID)).name
        var moneyuser = (await Currencies.getData(event.senderID)).money
            if (moneyuser <= 0) return api.sendMessage("𝗕𝗮̣𝗻 𝗸𝗵𝗼̂𝗻𝗴 𝗰𝗼́ 𝘁𝗶𝗲̂̀𝗻, 𝗛𝗔̃𝗬 𝗟𝗔̀𝗠 𝗩𝗜𝗘̣̂𝗖 𝗩𝗔̀ 𝗞𝗜𝗘̂́𝗠 𝗧𝗜𝗘̂̀𝗡 𝗛𝗢̣𝗖 𝗡𝗚𝗛𝗘̂̀ 𝗡𝗛𝗘́ 🌸", event.threadID, event.messageID);
            else if (moneyuser > 0) return api.sendMessage(`𝗕𝗮̣𝗻 𝘃𝘂̛̀𝗮 𝗯𝗶̣ 𝗯𝗮̆́𝘁 𝘃𝗮̀ 𝗺𝗮̂́𝘁 ${moneyuser}$ 🌸`, event.threadID, () => api.sendMessage({ body: `𝗫𝗶𝗻 𝗰𝗵𝘂́𝗰 𝗺𝘂̛̀𝗻𝗴  ${nameVictim}! 𝗕𝗮̣𝗻 𝘃𝘂̛̀𝗮 𝘁𝗼́𝗺 𝗸𝗲̉ 𝘁𝗿𝗼̣̂𝗺 ${name} 𝘃𝗮̀ 𝗻𝗵𝗮̣̂𝗻 ${Math.floor(moneyuser / 2)}$ 𝗹𝗮̀𝗺 𝗽𝗵𝗮̂̀𝗻 𝘁𝗵𝘂̛𝗼̛̉𝗻𝗴 𝘁𝘂𝘆𝗲̂𝗻 𝗱𝘂̛𝗼̛𝗻𝗴 🌸`, mentions: [{ tag: nameVictim, id: victim }, { tag: name, id: event.senderID }] }, event.threadID, async () => {
                await Currencies.increaseMoney(event.senderID, parseInt("-"+ moneyuser))
                await Currencies.increaseMoney(victim, parseInt(Math.floor(moneyuser / 2))) 
            }), event.messageID);
        
    }
                                    }