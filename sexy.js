module.exports.config = {
	name: "sexy",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "TuấnDz",
	description: "Random ảnh gái sexy",
	commandCategory: "Random-IMG",
	usages: "",
	cooldowns: 2
};

module.exports.run = async ({ api, event }) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
	axios.get('https://apiuwuapi.ducdz999.repl.co/images/girlsexy').then(res => {
	let ext = res.data.url.substring(res.data.url.lastIndexOf(".") + 1);
  let count = res.data.count;
	let callback = function () {
					api.sendMessage({
            body: `🌸 𝗦𝗲𝘅𝘆 𝗰𝘂̛̣𝗰 𝗰𝗵𝗮́𝘆𝘆 🌸\n𝗧𝗼̂̉𝗻𝗴 𝘀𝗼̂́ 𝗮̉𝗻𝗵: ${count}`,
						attachment: fs.createReadStream(__dirname + `/cache/sexyyy.${ext}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/sexyyy.${ext}`), event.messageID);
				};
				request(res.data.url).pipe(fs.createWriteStream(__dirname + `/cache/sexyyy.${ext}`)).on("close", callback);
			})
}