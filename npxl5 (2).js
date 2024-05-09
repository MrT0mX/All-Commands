const fs = require("fs");
module.exports.config = {
	name: "love5",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "love5",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Busy")==0 || event.body.indexOf("bye")==0 || event.body.indexOf("Hello")==0 || event.body.indexOf("good morning")==0) {
		var msg = {
				body: "এইতো আমি শিবলু এখানে ইনবক্সে কল করো  🙋‍♂️",
				attachment: fs.createReadStream(__dirname + `/noprefix/npxl5.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😽", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }