module.exports.config = {
	name: "wibu",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "MrTomXxX",
	description: "View photos Wibu",
	commandCategory: "Random-IMG",
	usages: "wibu",
	cooldowns: 5
};

module.exports.run = async ({ api, event }) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
	axios.get('https://wibu.ocvat2810.repl.co').then(res => {
	let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
	let callback = function () {
					api.sendMessage({
						body: `𝐖𝐢𝐛𝐮 𝐜𝐮̉𝐚 𝐢𝐞𝐦 𝐢𝐮 𝐭𝐨̛́𝐢 𝐧𝐞̀`,
						attachment: fs.createReadStream(__dirname + `/data/wibu.${ext}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/data/wibu.${ext}`), event.messageID);
				};
				request(res.data.data).pipe(fs.createWriteStream(__dirname + `/data/wibu.${ext}`)).on("close", callback);
			})
}