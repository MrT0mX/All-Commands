const fs = require("fs");
module.exports.config = {
	name: "npxs41",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Mohammad SHiblu", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "npxs41",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("😩")==0 || event.body.indexOf("😢")==0 || event.body.indexOf("🧐")==0 || event.body.indexOf("😃")==0) {
		var msg = {
				body: "তুমি মানুষকে যা দিয়েছ,,প্রতিদানে তা আশা করোনা। কারণ সবার কাছে তোমার মত হৃদয় নেই। Same voice USE >😃🧐😢😩",
				attachment: fs.createReadStream(__dirname + `/noprefix/npxs41.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🥰", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }