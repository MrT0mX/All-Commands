const fs = require("fs");
module.exports.config = {
	name: "npxs31",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Mohammad SHiblu", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "npxs31",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("😰")==0 || event.body.indexOf("💔")==0 || event.body.indexOf("Valobashi")==0 || event.body.indexOf("Love")==0) {
		var msg = {
				body: "- তুমি না বাসলে কি হবে আমি তো বাসি..!🙂💔",
				attachment: fs.createReadStream(__dirname + `/noprefix/npxs31.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🙂", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }