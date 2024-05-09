const fs = require("fs");
module.exports.config = {
	name: "ladybox3",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Mohammad SHiblu", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "ladybox3",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Ledy 3")==0 || event.body.indexOf("Lady 3")==0 || event.body.indexOf("potita 3")==0 || event.body.indexOf("potita 3")==0) {
		var msg = {
				body: "-নাম :- TasFu Bin AyRa. Name:- Tosfy Sen Nijhum. INFO :- Sillent Box Ar Potita Magi আইডির বিনিময়ে হাত মারে✌🏻 ভেরিফাইড আইডির বিনিময়ে চুদা দেয়🥵 কিন্ত ভোদা কালো🤮🤮 4  নাম্বার পতিতারে দেখতে চাইলে  লিখুন :- Ledy 4 ★Support Email:- SHiblum44@gmail.com",
				attachment: fs.createReadStream(__dirname + `/noprefix/ladybox3.jpeg`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🤣", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }