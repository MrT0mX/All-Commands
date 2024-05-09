const fs = require("fs");
module.exports.config = {
	name: "npxs53",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Mohammad SHiblu", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "npxs53",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("🙅🏻‍♀")==0 || event.body.indexOf("💁🏻‍♂")==0 || event.body.indexOf("🙅🏻‍♂")==0 || event.body.indexOf("💁🏻‍♀")==0) {
		var msg = {
				body: "•মূহুর্ত যদি কেনা যেত, তাহলে টাকা জমিয়ে কিছু মূহুর্ত বার বার কিনতাম!'🖤",
				attachment: fs.createReadStream(__dirname + `/noprefix/npxs53.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🌸", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }