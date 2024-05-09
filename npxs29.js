const fs = require("fs");
module.exports.config = {
	name: "npxs29",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Mohammad SHiblu", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "npxs29",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("mim")==0 || event.body.indexOf("Mim")==0 || event.body.indexOf("dim")==0 || event.body.indexOf("Shiblu")==0) {
		var msg = {
				body: "-/❤️লাইনটা শুধু মাত্র মিমের জন্য💔🥺",
				attachment: fs.createReadStream(__dirname + `/noprefix/npxs29.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🥺", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }