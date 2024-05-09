const fs = require("fs");
module.exports.config = {
	name: "🇵🇰",
    version: "1.0.1",
	hasPermssion: 2,
	credits: "MrTomXxX", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "🙂",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Heda")==0 || event.body.indexOf("Xudi")==0 || event.body.indexOf("Sex")==0 || event.body.indexOf("Fuck")==0) {
		var msg = {
				body: "উপ্স জান অনেক জ্বালা🍆🥵",
				attachment: fs.createReadStream(__dirname + `/noprefix/love7.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🍆", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }