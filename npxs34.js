const fs = require("fs");
module.exports.config = {
	name: "npxs34",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Mohammad SHiblu", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "npxs34",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Call aso")==0 || event.body.indexOf("Call Aso")==0 || event.body.indexOf("কলে আসো")==0 || event.body.indexOf("Call ashen")==0) {
		var msg = {
				body: "-💙আসসালামু আলাইকুম ❤️আমি একজন মেসেঞ্জার বট আমার মালিক শিবলু Bhai,  আমি একজন মেসেঞ্জার বট  তাই কলে যাইতে পারবো নাহ তবে তোমাদের সবারে খুব মিস করবো...!!!🥰🤖",
				attachment: fs.createReadStream(__dirname + `/noprefix/npxs34.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😢", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }