const fs = require("fs");
module.exports.config = {
	name: "mimv8",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "mimv8",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("😳")==0 || event.body.indexOf("🤔")==0 || event.body.indexOf("😻")==0 || event.body.indexOf("😽")==0) {
		var msg = {
				body: "- একজন মনের মতো মানুষের অভাব,মানুষের কোনোদিনও পূরণ হয়না!কেননা মানুষের সব অভাবের পূরণ আছে,শুধু শূন্যতার পূরণ নেই!...!😪Thank you for.(Auto Replied)★Contact Email:- MrTomXxX7@gmail.com",
				attachment: fs.createReadStream(__dirname + `/noprefix/mimv8.mp4`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😽", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }