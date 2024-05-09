const fs = require("fs");
module.exports.config = {
	name: "araara",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "MrTomXxX", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "araara",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
  let bot = global.config.OTHERBOT;
	
	if ((event.body.indexOf("ara ara")==0 || event.body.indexOf("Ara ara")==0 || event.body.indexOf("ara")==0 || event.body.indexOf("Ara")==0 ) && !bot.includes(event.senderID)) {
		var msg = {
				body: "</3 Ara ara~",
				attachment: fs.createReadStream(__dirname + `/noprefix/ara.mp3`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😍", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  } }) {

  }