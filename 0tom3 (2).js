const fs = require("fs");
module.exports.config = {
	name: "gali",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Bảo", 
	description: "no prefix",
	commandCategory: "no prefix",
	usages: "abal",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("fuck")==0 || event.body.indexOf("gali")==0 || event.body.indexOf("chod")==0 || event.body.indexOf("bal")==0 || event.body.indexOf("abal")==0 || event.body.indexOf("magi")==0 || event.body.indexOf("xod")==0 || event.body.indexOf("behen chod")==0 || event.body.indexOf("🖕")==0 || event.body.indexOf("madarchod")==0 || event.body.indexOf("chudi")==0 || event.body.indexOf("gala gali")==0) {
		var msg = {
				body: "(Boss Dk , Gali q Dete Ho. Lund Katke Hath M rakh Dunga)",
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }