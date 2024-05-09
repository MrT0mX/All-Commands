module.exports.config = {
	name: "20+",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "MrTomXxX",
	description: "Random ảnh nude cực bỏng mắt 18+",
	commandCategory: "nsfw",
	usages: "anhnude",
	cooldowns: 2
};

module.exports.run = async ({ api, event }) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
	axios.get('https://tuandz.herokuapp.com/images/nude').then(res => {
	let ext = res.data.url.substring(res.data.url.lastIndexOf(".") + 1);
	let callback = function () {
					api.sendMessage({
						attachment: fs.createReadStream(__dirname + `/cache/nobra.${ext}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/nobra.${ext}`), event.messageID);
				};
				request(res.data.url).pipe(fs.createWriteStream(__dirname + `/cache/nobra.${ext}`)).on("close", callback);
			})
}