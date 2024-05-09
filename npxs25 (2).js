const fs = require("fs");
module.exports.config = {
	name: "npxs25",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Mohammad SHiblu", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "npxs25",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Uffs")==0 || event.body.indexOf("hot")==0 || event.body.indexOf("uffs")==0 || event.body.indexOf("sexy")==0) {
		var msg = {
				body: "--জান আমি শিবলু বট, আমাকে হট বানাও কেন? আসো তোমার দুইপা উপরে তুলে ডুকিয়ে চাপ দিবো জোরে জোরে 😘😚..!",
				attachment: fs.createReadStream(__dirname + `/noprefix/npxs25.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🥵", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }