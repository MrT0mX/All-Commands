const fs = require("fs");
module.exports.config = {
	name: "ladybox4",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Mohammad SHiblu", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "ladybox4",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Lady 4")==0 || event.body.indexOf("Ledy 4")==0 || event.body.indexOf("ledy 4")==0 || event.body.indexOf("lady 4")==0) {
		var msg = {
				body: "-নাম :- XreYa Mallik. Name:- XaiFa Ahmed Orthi. NFO :- Sillent Box Ar Potita Magi হাত মারা মাগি 🥵 আইডির বিনিময়ে হাত মারে✌🏻 কার্ড মেইক করে প্রি- বেক  আইডি দিলে চুদা দে🥴★5 নাম্বার পতিতারে দেখতে চাইলে লিখুন :- Ledy 5 ★ ★Support Email:- MrTomXxX7@gmail.com",
				attachment: fs.createReadStream(__dirname + `/noprefix/ladybox4.jpeg`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🤣", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }