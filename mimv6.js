 const fs = require("fs");
module.exports.config = {
	name: "mimv6",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "mimv6",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("I Love You")==0 || event.body.indexOf("😾")==0 || event.body.indexOf("😚")==0 || event.body.indexOf("Umma")==0) {
		var msg = {
				body: "- Voice :-> -পৃথিবীতে অনেক ধরনের অত্যাচার আছে, ভালোবাসার অত্যাচার হচ্ছে সবচেয়ে ভয়ানক অত্যাচার;এ অত্যাচারের বিরুদ্ধে কখনো কিছু বলা যায় না, শুধু সহ্য করে নিতে হয়...! -Dear Sir or Madam, Thank you very much for your notification.! Thank you for.(Auto Replied)★Contact Email:- MrTomXxX7@gmail.com",
				attachment: fs.createReadStream(__dirname + `/noprefix/mimv6.mp4`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😅", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }