const fs = require("fs");
module.exports.config = {
	name: "npxs40",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Mohammad SHiblu", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "npxs40",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Argentina")==0 || event.body.indexOf("Brazil")==0 || event.body.indexOf("🇧🇷")==0 || event.body.indexOf("🇦🇷")==0) {
		var msg = {
				body: "-আমার হুদাই ঝগড়া করি মেসি নেইমার নিয়া আর ওরা কত ভালো বন্ধু☺️🥰",
				attachment: fs.createReadStream(__dirname + `/noprefix/npxs40.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🥰", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }