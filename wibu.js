module.exports.config = {
	name: "wibu",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Raiden",
	description: "Xem ảnh Wibu",
	commandCategory: "Random-IMG",
	usages: "",
	cooldowns: 5
};

module.exports.run = async ({ api, event }) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
	axios.get('https://apiuwuapi.ducdz999.repl.co/images/wibu').then(res => {
	let ext = res.data.url.substring(res.data.url.lastIndexOf(".") + 1);
  let count = res.data.count;
	let callback = function () {
					api.sendMessage({
						body: `𝐖𝐢𝐛𝐮 𝐜𝐮̉𝐚 𝐢𝐞𝐦 𝐢𝐮 𝐭𝐨̛́𝐢 𝐧𝐞̀\n𝗧𝗼̂̉𝗻𝗴 𝘀𝗼̂́ 𝗮̉𝗻𝗵: ${count}`,
						attachment: fs.createReadStream(__dirname + `/cache/wibu.${ext}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/wibu.${ext}`), event.messageID);
				};
				request(res.data.url).pipe(fs.createWriteStream(__dirname + `/cache/wibu.${ext}`)).on("close", callback);
			})
}