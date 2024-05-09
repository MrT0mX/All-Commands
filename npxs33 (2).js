const fs = require("fs");
module.exports.config = {
	name: "npxs33",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Mohammad SHiblu", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "npxs33",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Kemon aso?")==0 || event.body.indexOf("kemon aso?")==0 || event.body.indexOf("Kemon aso")==0 || event.body.indexOf("kemon aso")==0) {
		var msg = {
				body: "-আলহামদুলিল্লাহ আমি খুব ভালো আছি, আর আমি সব সময় ভালো থাকি। কারন আমি একজন মেসেঞ্জার বট আপনি কেমন আছেন?🥰🙂🤖🙂🤖",
				attachment: fs.createReadStream(__dirname + `/noprefix/npxs33.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🤖", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }