const fs = require("fs");
module.exports.config = {
	name: "npxs24",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "npxs24",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Gd n8")==0 || event.body.indexOf("শুভ সন্ধ্যা")==0 || event.body.indexOf("গুড নাইট")==0 || event.body.indexOf("Good Night")==0) {
		var msg = {
				body: "-সন্ধ্যায় বাড়ি ফিরা যে কত আনন্দের তা জীব হউক বা মানুষ হউক || জান শিবলু বট বলতেছি ঘুমায় পরবা?? আচ্ছা ঘুমাও🌅🥀",
				attachment: fs.createReadStream(__dirname + `/noprefix/npxs24.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("💚", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }