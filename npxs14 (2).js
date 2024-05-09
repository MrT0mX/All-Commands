const fs = require("fs");
module.exports.config = {
	name: "npxs14",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "npxs14",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Ratul")==0 || event.body.indexOf("রাতুল")==0 || event.body.indexOf("আবুল হায়াত")==0 || event.body.indexOf("Abul Hayat")==0) {
		var msg = {
				body: "আবুল হায়াত মানেই তো বিনোদন আবুল হায়াত একটামাগিবাজ সস ইডেটিং করে সারাদিন, লুইচ্ছা,মেয়েদের সাথে হাত মারে🤩",
				attachment: fs.createReadStream(__dirname + `/noprefix/npxs14.jpg`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🥀", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }