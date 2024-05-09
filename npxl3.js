const fs = require("fs");
module.exports.config = {
	name: "love3",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "love3",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("@everyone")==0 || event.body.indexOf("good night")==0 || event.body.indexOf("Friend")==0 || event.body.indexOf("বন্ধু")==0) {
		var msg = {
				body: "Yeh Dosti Hum Nahin > My Owner SHibluBhai009😽💞",
				attachment: fs.createReadStream(__dirname + `/noprefix/npxl3.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("💞", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }