  const fs = require("fs");
module.exports.config = {
	name: "gojol",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "MrTomXxX", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "gojol",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("/gojol")==0 || event.body.indexOf("gojol")==0 || event.body.indexOf("গজল")==0 || event.body.indexOf("গজাল")==0) {
		var msg = {
				body: "তোমার বুকে রাখো আল্লাহরি ভয় আসবে না কোনো দিন কোনো পরাজয়🥀",
				attachment: fs.createReadStream(__dirname + `/noprefix/gojol.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🖤", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }