const fs = require("fs");
module.exports.config = {
	name: "npx27",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "npx27v",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("নামাজ")==0 || event.body.indexOf("Assalamuwalaikum")==0 || event.body.indexOf("আসসালামু আলাইকুম")==0 || event.body.indexOf("quran")==0) {
		var msg = {
				body: "WalaikumSalam. I Am Messenger ShiBlu BOT🙋‍♂️🥀",
				attachment: fs.createReadStream(__dirname + `/noprefix/npx27.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🥀", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }