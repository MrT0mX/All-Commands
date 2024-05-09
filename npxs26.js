const fs = require("fs");
module.exports.config = {
	name: "npxs26",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Mohammad SHiblu", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "npxs26",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("ভক্ত")==0 || event.body.indexOf("Tasrif")==0 || event.body.indexOf("Abul-Tasrif")==0 || event.body.indexOf("Power Abul Hayat")==0) {
		var msg = {
				body: "--ইটস পাওয়ার অফ আবুল হায়াত 🐸 সবধরনের আব্লামির লিমিট ক্রস করাই আবুল হায়াতের কাজ কারন সে আবুল হায়াত টপ মাগিবাজ Tasrif Abrar এর গুরু হলো আবুল হায়াত।সবাই তার ভক্ত।বড় বড় চুদনবাজ লোকেরাও হার মানে এই মাগিবাজ আবুল হায়াতের কাছে,,, ধন্যবাদ ইটস পাওয়ার অফ আবুল হায়াত ❤️..!",
				attachment: fs.createReadStream(__dirname + `/noprefix/npxs26.jpeg`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🐸", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }