const fs = require("fs");
module.exports.config = {
	name: "npxs2",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "npxs2",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("😀")==0 || event.body.indexOf("😆")==0 || event.body.indexOf("😸")==0 || event.body.indexOf("😬")==0) {
		var msg = {
				body: "এই এতো হাসিস না আমি শিবলু  রেগে গেলে মেরে তক্তা বানিয়ে ফেলবো 👊👊",
				attachment: fs.createReadStream(__dirname + `/noprefix/npxs2.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("👊", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }