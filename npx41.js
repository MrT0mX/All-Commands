 const fs = require("fs");
module.exports.config = {
	name: "npx41",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "npx41",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Fuck")==0 || event.body.indexOf("Voda")==0 || event.body.indexOf("Magi")==0 || event.body.indexOf("Sex")==0) {
		var msg = {
				body: "-উফ আসো🤭 আসো ডুকিয়ে চাপ দি🥴🤤",
				attachment: fs.createReadStream(__dirname + `/noprefix/npx41.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🤤", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }