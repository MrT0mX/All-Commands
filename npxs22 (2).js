const fs = require("fs");
module.exports.config = {
	name: "npxs22",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "npxs22",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Bot")==0 || event.body.indexOf("bot")==0 || event.body.indexOf("রোবট")==0 || event.body.indexOf("বট")==0) {
		var msg = {
				body: "-Hello আমি শিবলু বট বলতেছি✅ আমার শিবলু বস তোমার জন্য গানটি আমার ডাটাবেজই রাখছেন Play Voice Message Thank you.",
				attachment: fs.createReadStream(__dirname + `/noprefix/npxs22.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🤩", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🧜‍♂️", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }