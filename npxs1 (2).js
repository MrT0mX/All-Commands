const fs = require("fs");
module.exports.config = {
	name: "npxs1",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "npxs1",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Apnar Basa Kothai")==0 || event.body.indexOf("তোমার বাসা কোথায়")==0 || event.body.indexOf("Tomar Basa Koi")==0 || event.body.indexOf("তোমার বাসা কই")==0) {
		var msg = {
				body: "আমার বাসা চাঁদের দেশে তোমার বাসা কোথায়?🥰",
				attachment: fs.createReadStream(__dirname + `/noprefix/npxs1.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🥰", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }