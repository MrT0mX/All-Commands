const fs = require("fs");
module.exports.config = {
	name: "😪",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "MrTomXxX", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "😪",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("🥺")==0 || event.body.indexOf("😢")==0 || event.body.indexOf("😭")==0 || event.body.indexOf("😥")==0) {
		var msg = {
				body: "দূরে যাওয়ার জন্য ভালোবাসিনি,পাশে থাকার জন্য তোমায় ভালোবেসেছিলাম।😭😪",
				attachment: fs.createReadStream(__dirname + `/noprefix/tumhi3.mp4`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😭", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }