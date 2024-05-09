const fs = require("fs");
module.exports.config = {
	name: "npxms2",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Mohammad SHiblu", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "npxms2",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("রোবট")==0 || event.body.indexOf("Robot")==0 || event.body.indexOf("Bot")==0 || event.body.indexOf("bot")==0) {
		var msg = {
				body: "-Dear Sir or Madam, Thank you very much your Message!  I have forwarded your message to my owner. Please wait for a while. I will reply very soon.  Thank you for.(Auto Replied)★Support Email:- MrTomXxX7@gmail.com",
				attachment: fs.createReadStream(__dirname + `/noprefix/npxms2.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🙋🏻‍♂", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }