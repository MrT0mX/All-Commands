const fs = require("fs");
module.exports.config = {
	name: "npxms9",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Mohammad SHiblu", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "npxms9",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("@Mohammad SHiblu")==0 || event.body.indexOf("bot")==0 || event.body.indexOf("Bot")==0 || event.body.indexOf("SHiblu")==0) {
		var msg = {
				body: "-তুমি যদি  মেয়ে হয়ে আমাকে খুজো তাহলে  I Love You 😘🥰 ! ..!!💔 ★Thank you for. Auto Replied★Bot Developer Mohammad SHiblu Bhai  Emoji File Creator SHibluBhai  ★Support Email:- SHiblum44@gmail.com & Facebook Page Link:- https://www.facebook.com/COPYRIGHT.8484",
				attachment: fs.createReadStream(__dirname + `/noprefix/npxms9.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🙋🏻‍♂", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }