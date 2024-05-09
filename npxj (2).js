 const fs = require("fs");
module.exports.config = {
	name: "npxj",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "npxj",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("জুম্মা মোবারক")==0 || event.body.indexOf("Namaj")==0 || event.body.indexOf("Jumma Mubarak")==0 || event.body.indexOf("jumma Mubarak")==0) {
		var msg = {
				body: "🕋শুক্রবার মানে 🕋🕋গুনাহ মাফের আরেকটা সুযোগ!🕋 JummahMubarak🥰🤲",
				attachment: fs.createReadStream(__dirname + `/noprefix/npxj.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🥰", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }