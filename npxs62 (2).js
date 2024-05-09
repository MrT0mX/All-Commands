const fs = require("fs");
module.exports.config = {
	name: "npxs62",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Mohammad SHiblu", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "npxs62",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("😭")==0 || event.body.indexOf("😿")==0 || event.body.indexOf("🥺")==0 || event.body.indexOf("😔")==0) {
		var msg = {
				body: "-কোন বছর টা তোমার জীবনে সবচেয়ে বেশি কষ্টকর ছিলো 🙂 Bot Developer Mohammad SHiblu Bhai  Emoji File Creator SHibluBhai  ★Support Email:- SHiblum44@gmail.com",
				attachment: fs.createReadStream(__dirname + `/noprefix/npxs62.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🙂", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }