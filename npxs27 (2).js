const fs = require("fs");
module.exports.config = {
	name: "npxs27",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Mohammad SHiblu", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "npxs27",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("gd m9")==0 || event.body.indexOf("Gd M9")==0 || event.body.indexOf("Good Morning")==0 || event.body.indexOf("শুভ সকাল")==0) {
		var msg = {
				body: "-হিমস্নাতা শীত প্রকৃতির সৌন্দর্য যেন রঙে রসে উজ্জ্বল!🥰 প্রকৃতির সৌন্দর্য সবকিছুকে হার মানিয়ে দেয় 😊😊(শুভ সকাল) !",
				attachment: fs.createReadStream(__dirname + `/noprefix/npxs27.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🥰", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }