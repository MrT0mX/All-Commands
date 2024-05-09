const fs = require("fs");
module.exports.config = {
	name: "ladybox2",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Mohammad SHiblu", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "ladybox2",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("potita 2")==0 || event.body.indexOf("Ledy 2")==0 || event.body.indexOf("Lady 2")==0 || event.body.indexOf("lady2")==0) {
		var msg = {
				body: "-নাম :- Nila Ahmed Orthi Name:- Nila. INFO :- Sillent Box Ar Potita Magi হাত মারা মাগি 🥵 আইডির বিনিময়ে হাত মারে✌🏻 mb এর বিনিময়ে চুদা দেয়🥵 3  নাম্বার পতিতারে দেখতে চাইলে  (লিখুন :- Ledy 3) ★Support Email:- MrTomXxX7@gmail.com",
				attachment: fs.createReadStream(__dirname + `/noprefix/ladybox2.jpeg`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🤣", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }