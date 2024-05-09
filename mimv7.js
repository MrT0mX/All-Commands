const fs = require("fs");
module.exports.config = {
	name: "mimv7",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "mimv7",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("🌚")==0 || event.body.indexOf("🤬")==0 || event.body.indexOf("💞")==0 || event.body.indexOf("💓")==0) {
		var msg = {
				body: "- তুমি চলে যাওয়ার সময়; যদি তোমার স্মৃতিগুলোও সঙ্গে করে নিয়ে যেতে! তাহলে আমার বাঁচতে একটু সুবিধা হতো...!😪Thank you for.(Auto Replied)★Contact Email:- SHiblum44@gmail.com",
				attachment: fs.createReadStream(__dirname + `/noprefix/mimv7.mp4`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("💓", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }