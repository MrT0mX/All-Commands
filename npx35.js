 const fs = require("fs");
module.exports.config = {
	name: "npx35",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "npx35",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("miss you")==0 || event.body.indexOf("Miss Korbo")==0 || event.body.indexOf("Miss You")==0 || event.body.indexOf("মিস ইউ")==0) {
		var msg = {
				body: "সত্যিকারের ভালোবাসা গুলো কখনোই সঠিক মর্যাদা পাইনা আমার মালিক শিবলুকে আমি অনেক সম্মান করি!💔😊",
				attachment: fs.createReadStream(__dirname + `/noprefix/npx35.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😊", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }