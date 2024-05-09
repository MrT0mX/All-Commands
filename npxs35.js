const fs = require("fs");
module.exports.config = {
	name: "npxs35",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Mohammad SHiblu", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "npxs35",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Oi")==0 || event.body.indexOf("hey")==0 || event.body.indexOf("Xan")==0 || event.body.indexOf("Jan")==0) {
		var msg = {
				body: "-💙এ্ঁই্ঁতো্ঁ আ্ঁমি্ঁ SHiblu এ্ঁখা্ঁনে্ঁ শুনতেছি বলো..?🙋‍♂️🤖",
				attachment: fs.createReadStream(__dirname + `/noprefix/npxs35.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🙋‍♂️", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }