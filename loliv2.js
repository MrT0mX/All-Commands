module.exports.config = {
	name: "loliv2",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "𝐃𝐚𝐫𝐤 𝐑𝐮𝐥𝐞𝐱 𝐊𝐢𝐧𝐠 𝐀𝐧𝐮𝐩",
	description: "Loli pictures for pedophiles",
	commandCategory: "nsfw",
	usages: "loli2",
	cooldowns: 5
};

module.exports.run = async ({ api, event }) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
	axios.get('https://saikiapi.herokuapp.com/loli').then(res => {
	//let ext = res.data.url.substring(res.data.url.lastIndexOf(".") + 1);

  var path = "/cache/loli.png";
	let callback = function () {

					api.sendMessage({
						body: ``,
						attachment: fs.createReadStream(__dirname + `${path}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `${path}`), event.messageID);
        console.log(`Downloading ${path}`);
				};
				request(res.data.url).pipe(fs.createWriteStream(__dirname + `${path}`)).on("close", callback);
			console.log(`Deleted ${path}`);
  })
      .catch(err => {
                     api.sendMessage("Failed to generate image", event.threadID, event.messageID);
    api.setMessageReaction("☹️", event.messageID, (err) => {}, true);
                  })     
}
