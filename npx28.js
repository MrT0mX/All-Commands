 const fs = require("fs");
module.exports.config = {
	name: "npx28",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "npx28v",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Okay")==0 || event.body.indexOf("Bye")==0 || event.body.indexOf("Busy")==0 || event.body.indexOf("বিজি")==0) {
		var msg = {
				body: "আমি একজন Messenger BOT আমি যদি মানুষ হতাম তাহলে তোমার সাথে প্রেম করতাম,  আমাকে সৃষ্টি করছে আমার শিবলু বস!!🙋‍♂️🥀",
				attachment: fs.createReadStream(__dirname + `/noprefix/npxl28.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🙂", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }