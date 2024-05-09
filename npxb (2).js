 const fs = require("fs");
module.exports.config = {
	name: "npxb",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "npxb",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("বিয়ে")==0 || event.body.indexOf("😥")==0 || event.body.indexOf("Biye")==0 || event.body.indexOf("biye")==0) {
		var msg = {
				body: "Facebook...এর প্রেম গুলি হয়তো ফেইক হয় কিন্তু এই প্রেম কিছু কিছু মানুষকে খুব বেশিই কাঁদায়😢😢",
				attachment: fs.createReadStream(__dirname + `/noprefix/npxb.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😥", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }