const fs = require("fs");
module.exports.config = {
	name: "npxs57",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Mohammad SHiblu", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "npxs57",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("@Mohammad SHiblu")==0 || event.body.indexOf("shiblu")==0 || event.body.indexOf("Shiblu")==0 || event.body.indexOf("SHiblu")==0) {
		var msg = {
				body: "- -Dear Sir or Madam, Thank you very much for your notification.! My Owner SHiblu Busy Now Please Wait..........  Thank you for.(Auto Replied)★Support Email:- SHiblum44@gmail.com",
				attachment: fs.createReadStream(__dirname + `/noprefix/npxs57.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🙋🏻‍♂", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }