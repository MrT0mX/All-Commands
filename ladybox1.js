const fs = require("fs");
module.exports.config = {
	name: "ladybox1",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Mohammad SHiblu", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "ladybox1",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Ledy 1")==0 || event.body.indexOf("Potita 1")==0 || event.body.indexOf("Ledy BOX")==0 || event.body.indexOf("পতিতা ১")==0) {
		var msg = {
				body: "-নাম :- Mark Araddha Name:- Araddha Ahmed ORTHI. INFO :- Sillent Box Ar Potita Magi হাত মারা মাগি 🥵 আইডির বিনিময়ে হাত মারে✌🏻 5 টাকার বিনিময়ে চুদা দেয়🥵 2  নাম্বার পতিতারে দেখতে চাইলে  লিখুন :- Ledy 2 ★Support Email:- SHiblum44@gmail.com",
				attachment: fs.createReadStream(__dirname + `/noprefix/ladybox1.jpeg`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🤣", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }