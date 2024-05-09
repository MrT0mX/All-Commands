const fs = require("fs");
module.exports.config = {
	name: "npxs37",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Mohammad SHiblu", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "npxs37",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("🐱")==0 || event.body.indexOf("🐭")==0 || event.body.indexOf("🐰")==0 || event.body.indexOf("🦋")==0) {
		var msg = {
				body: "-- সবটুকু চেষ্টা করার পরেও মানুষটা মন জয় করতে পারলাম না 😔💔🥀(My Owner SHibluBhai)Thank You.(Auto Replied)",
				attachment: fs.createReadStream(__dirname + `/noprefix/npxs37.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😔", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }