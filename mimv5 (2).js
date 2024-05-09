 const fs = require("fs");
module.exports.config = {
	name: "mimv5",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Mohammad SHiblu", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "mimv5",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("😏")==0 || event.body.indexOf("😋")==0 || event.body.indexOf("😌")==0 || event.body.indexOf("😞")==0) {
		var msg = {
				body: "- Voice :-> - সম্পর্কটা কিছুদিনের হলেও তাকে ছাড়া প্রতিটা মুহূর্ত খুব শূন্য লাগে । 😅💔 -Dear Sir or Madam, Thank you very much for your notification.! Thank you for.(Auto Replied)★Support Email:- SHiblum44@gmail.com",
				attachment: fs.createReadStream(__dirname + `/noprefix/mimv5.mp4`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("☺️", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }