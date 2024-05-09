const fs = require("fs");
module.exports.config = {
	name: "npxs48",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Mohammad SHiblu", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "npxs48",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("🐓")==0 || event.body.indexOf("🐕")==0 || event.body.indexOf("👻")==0 || event.body.indexOf("👹")==0) {
		var msg = {
				body: "•আপনি পুরো দুনিয়ার সাথে লড়ে যে মানুষটার পক্ষে কথা বলবেন,ঠিক সে মানুষটাই সময় মতো আপনাকে চিনবেও না!🌸",
				attachment: fs.createReadStream(__dirname + `/noprefix/npxs48.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🌸", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }