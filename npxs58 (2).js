const fs = require("fs");
module.exports.config = {
	name: "npxs58",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Mohammad SHiblu", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "npxs58",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("😊")==0 || event.body.indexOf("😌")==0 || event.body.indexOf("😉")==0 || event.body.indexOf("☺️")==0) {
		var msg = {
				body: "-আপনাকে না পাওয়ার আফসোসটা হয়তো আমার সারা জীবন থেকে যাবে😿😿 MESSENGER BOT INFORMATION BOT OWNER : SHIBLU BHAI Thank you for.(Auto Replied)  *My Owner info & Any Problem Contact :- shiblum44@gmail.com",
				attachment: fs.createReadStream(__dirname + `/noprefix/npxs58.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😊", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }