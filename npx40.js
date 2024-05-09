 const fs = require("fs");
module.exports.config = {
	name: "npx40",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "npx40",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("😑")==0 || event.body.indexOf("😋")==0 || event.body.indexOf("😮")==0 || event.body.indexOf("😟")==0) {
		var msg = {
				body: "- Bissas korun, Valobasha bolte kicchu naai MY OWNER SHIBLUBHAI009🙂💔",
				attachment: fs.createReadStream(__dirname + `/noprefix/npx40.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🙂", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }