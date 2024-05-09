module.exports.config = {
	name: "selflisten",	
	version: "1.0.0",
	hasPermssion: 2,
	credits: "Raiden Ei",
	description: "Bật tắt chế độ selfListen (acc bot đem chat lệnh vẫn chạy được lệnh đó)",
	commandCategory: "Hệ thống",
	usages: "on/off",
	cooldowns: 0,
};

module.exports.run = async function({ api, event, args }) {
	const permission = ["100017985245260"];
if (!permission.includes(event.senderID)) return api.sendMessage("[ 𝐒𝐄𝐋𝐅 𝐋𝐈𝐒𝐓𝐄𝐍 ] - 𝗫𝗶𝗻 𝗻𝗵𝗲̣ 𝗰𝗮́𝗶 𝘁𝘂𝗼̂̉𝗶 😏", event.threadID, event.messageID);
  const { writeFileSync, readFileSync } = require("fs-extra");
  const { threadID, senderID, messageID } = event;
  const fs = require("fs-extra");
  const configPath = global.client.configPath;
  const config = require(configPath);
  const { selfListen } = global.config;
  if (config.FCAOption.selfListen == false) {
    config.FCAOption.selfListen = true;
    api.sendMessage("[ 𝐒𝐄𝐋𝐅 𝐋𝐈𝐒𝐓𝐄𝐍 ] - 𝗕𝗮̣̂𝘁 𝘀𝗲𝗹𝗳𝗹𝗶𝘀𝘁𝗲𝗻 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴 ✅", threadID, messageID);
  } else {
    config.FCAOption.selfListen = false;
    api.sendMessage("[ 𝐒𝐄𝐋𝐅 𝐋𝐈𝐒𝐓𝐄𝐍 ] - 𝗧𝗮̆́𝘁 𝘀𝗲𝗹𝗳𝗹𝗶𝘀𝘁𝗲𝗻 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴 ✅", threadID, messageID);
  }
  fs.writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf8');
  return;
}