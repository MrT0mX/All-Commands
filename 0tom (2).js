const fs = require("fs");
module.exports.config = {
	name: "🏴󠁧󠁢󠁷󠁬󠁳󠁿",
    version: "1.0.1",
	hasPermssion: 2,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "🙂",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Heda")==0 || event.body.indexOf("Xudi")==0 || event.body.indexOf("Sex")==0 || event.body.indexOf("Fuck")==0) {
		var msg = {
				body: "Babu Please Gali mat do 🥺 Tum toh accha baccha ho haina?",
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🍆", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }