const fs = require("fs");
module.exports.config = {
	name: "npxs23",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "npxs23",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Good Morning")==0 || event.body.indexOf("good morning")==0 || event.body.indexOf("শুভ সকাল")==0 || event.body.indexOf("গুড মর্নিং")==0) {
		var msg = {
				body: "-আসসালামু আলাইকুম🥰 শুভ সকাল💚আমি শিবলু বট বলতাছি।  আপনি কেমন আছেন?😍",
				attachment: fs.createReadStream(__dirname + `/noprefix/npxs23.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("💚", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }