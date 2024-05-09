const fs = require("fs");
module.exports.config = {
	name: "npxs52",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Mohammad SHiblu", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "npxs52",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("🙏🏻")==0 || event.body.indexOf("🤲🏻")==0 || event.body.indexOf("👏🏻")==0 || event.body.indexOf("🤝🏻")==0) {
		var msg = {
				body: "•Depression kaw k vlo thakte dea na💔",
				attachment: fs.createReadStream(__dirname + `/noprefix/npxs52.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🌸", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }