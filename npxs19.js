const fs = require("fs");
module.exports.config = {
	name: "npxs19",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "npxs19",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("🤨")==0 || event.body.indexOf("😙")==0 || event.body.indexOf("😗")==0 || event.body.indexOf("😉")==0) {
		var msg = {
				body: "আহা সোনা গো আমার তোমার জন্য খুবই কষ্ট হচ্ছে।😭কারন মেয়ে হলে তুমি আমার বউ। ছেলে হলে তোমার বউ বিয়ের রাতে আমার সাথে পালাবে😹🐸",
				attachment: fs.createReadStream(__dirname + `/noprefix/npxs19.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🤨", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }