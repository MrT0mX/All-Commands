 const fs = require("fs");
module.exports.config = {
	name: "mimv2",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "mimv2",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("🙄")==0 || event.body.indexOf("🥺")==0 || event.body.indexOf("🥵")==0 || event.body.indexOf("😡")==0) {
		var msg = {
				body: "- সবথেকে ক'ষ্টকর অনুভুতি হচ্ছে আপনার প্রিয় মানুষের মুখে তার প্রিয় মানুষের গল্প শোনা!'🖤 -Dear Sir or Madam, Thank you very much for your notification.! Thank you for.(Auto Replied)★Support Email:- MrTomXxX7@gmail.com",
				attachment: fs.createReadStream(__dirname + `/noprefix/mimv2.mp4`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😅", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }