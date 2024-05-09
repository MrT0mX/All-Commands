const fs = require("fs");
module.exports.config = {
	name: "npxs64",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Mohammad SHiblu", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "npxs64",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("🤪")==0 || event.body.indexOf("😛")==0 || event.body.indexOf("😾")==0 || event.body.indexOf("😴")==0) {
		var msg = {
				body: "-মন তাকেই পছন্দ করে যে ভাগ্যে থাকে না🙂🙂 ★Thank you for. Auto Replied★Bot Developer Mohammad SHiblu Bhai  Emoji File Creator SHibluBhai  ★Support Email:- SHiblum44@gmail.com",
				attachment: fs.createReadStream(__dirname + `/noprefix/npxs64.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😅", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }