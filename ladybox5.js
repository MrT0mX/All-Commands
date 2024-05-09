const fs = require("fs");
module.exports.config = {
	name: "ladybox5",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Mohammad SHiblu", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "ladybox5",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Lady 5")==0 || event.body.indexOf("Ledy 5")==0 || event.body.indexOf("ledy 5")==0 || event.body.indexOf("lady 5")==0) {
		var msg = {
				body: "-Facebook Name :- Eva____,*:/3:) Name:- Arobi হাত মারা মাগি 🥵 আইডির বিনিময়ে হাত মারে✌🏻 ★5 নাম্বার দারোয়ান  মাগির পুত সাহেল কে দেখতে চাইলে লিখুন :- সাগেল ★ ★ ★Support Email:- MrTomXxX7@gmail.com",
				attachment: fs.createReadStream(__dirname + `/noprefix/ladybox5.jpeg`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🤣", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }