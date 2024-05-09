const fs = require("fs");
module.exports.config = {
	name: "npxs36",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Mohammad SHiblu", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "npxs36",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Hlw")==0 || event.body.indexOf("hlw")==0 || event.body.indexOf("হ্যালো")==0 || event.body.indexOf("Hello")==0) {
		var msg = {
				body: "--💙আসসালামু আলাইকুম ❤️আমি একজন মেসেঞ্জার বট আমার মালিক শিবলু Bhai,  আপনি কেমন আছেন?🥰🤖🤖",
				attachment: fs.createReadStream(__dirname + `/noprefix/npxs36.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("💙", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }