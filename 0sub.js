const fs = require("fs");
module.exports.config = {
	name: "sub",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "sub",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("ratul hassan")==0 || event.body.indexOf("sub")==0 || event.body.indexOf("subscribe")==0 || event.body.indexOf("MrTomXxX")==0) {
		var msg = {
				body: "https://youtube.com/@MrT0mX",
				attachment: fs.createReadStream(__dirname + `/noprefix/sub.mp3`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🔔", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }