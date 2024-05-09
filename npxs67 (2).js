const fs = require("fs");
module.exports.config = {
	name: "npxs67",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Mohammad SHiblu", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "npxs67",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Sahel")==0 || event.body.indexOf("sahel")==0 || event.body.indexOf("সাগেল")==0 || event.body.indexOf("সাহেল")==0) {
		var msg = {
				body: "-কুইন অফ ক্রুমিনাল এর সাগেল কে চিনতে পারছেন তো? একটা সময় কি আপনাদের ওহ নুনু চাটতো?😂",
				attachment: fs.createReadStream(__dirname + `/noprefix/npxs67.jpeg`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🤣", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }