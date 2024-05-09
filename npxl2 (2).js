const fs = require("fs");
module.exports.config = {
	name: "love2",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "love2",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Hi")==0 || event.body.indexOf("jan")==0 || event.body.indexOf("hello")==0 || event.body.indexOf("oi")==0) {
		var msg = {
				body: "এ্ঁই্ঁতো্ঁ আ্ঁমি্ঁ SHiblu এ্ঁখা্ঁনে্ঁ তুমি কি করো..?🙋‍♂️",
				attachment: fs.createReadStream(__dirname + `/noprefix/npxl2.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😍", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }