module.exports.config = {
	name:"hentaigif",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Raiden Makoto",
	description: "Random ảnh gif hentai",
	commandCategory: "nsfw",
	cooldowns: 3
};
module.exports.run = async ({ api, event }) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
	axios.get('https://apiuwuapi.ducdz999.repl.co/images/hentai').then(res => {
	let ext = res.data.url.substring(res.data.url.lastIndexOf(".") + 1);
	let callback = function () {
					api.sendMessage({
            body: `𝐇𝐢𝐞̣̂𝐧 𝐫𝐨̃ 𝐜𝐚́𝐢 𝐛𝐚̉𝐧 𝐦𝐚̣̆𝐭 𝐝𝐚̂𝐦 𝐝𝐮̣𝐜 𝐜𝐮̉𝐚 𝐞𝐦 𝐢𝐮 𝐤𝐢̀𝐚`,
						attachment: fs.createReadStream(__dirname + `/cache/hentaiiii.${ext}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/hentaiiii.${ext}`), event.messageID);
				};
				request(res.data.url).pipe(fs.createWriteStream(__dirname + `/cache/hentaiiii.${ext}`)).on("close", callback);
			})
}