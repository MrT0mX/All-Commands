const fs = require("fs");
module.exports.config = {
	name: "ki kro",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "কি করেন কি করো  Good night Good morning  ",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("কি করেন")==0 || event.body.indexOf("ki koro")==0 || event.body.indexOf("কি করো")==0 || event.body.indexOf("ki kro")==0) {
		var msg = {
				body: "আমি শিবলু গান শুনি☺️, তুমি কি করো? 🥰",
				attachment: fs.createReadStream(__dirname + `/noprefix/npxs.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😍", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }