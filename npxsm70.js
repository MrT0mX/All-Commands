const fs = require("fs");
module.exports.config = {
	name: "npxsm70",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Mohammad SHiblu", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "npxsm70",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("👍🏻")==0 || event.body.indexOf("😻")==0 || event.body.indexOf("✍🏻")==0 || event.body.indexOf("👊🏻")==0) {
		var msg = {
				body: "-আচ্ছা যে তোমাকে রাত জাগা শিখিয়ে ছিলো সে কি এখনও তোমারি আছে? 😅💔 ★Thank you for. Auto Replied★Bot Developer Mohammad SHiblu Bhai  Emoji File Creator SHibluBhai  ★Support Email:- SHiblum44@gmail.com",
				attachment: fs.createReadStream(__dirname + `/noprefix/npxsm70.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😅", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }