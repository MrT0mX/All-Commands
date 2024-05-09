const fs = require("fs");
module.exports.config = {
	name: "npxloveking",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "MrTomXxX", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "😍",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("🚸")==0 || event.body.indexOf("⛔")==0 || event.body.indexOf("⚠️")==0 || event.body.indexOf("🚸")==0 || event.body.indexOf("🎉")==0 || event.body.indexOf("🧧")==0 || event.body.indexOf("🏐")==0 || event.body.indexOf("🏀")==0 || event.body.indexOf("🏒")==0 || event.body.indexOf("👣")==0 || event.body.indexOf("🦍")==0 || event.body.indexOf("🦧")==0 || event.body.indexOf("🐕")==0 || event.body.indexOf("🦒")==0 || event.body.indexOf("🦣")==0 || event.body.indexOf("🐤")==0 || event.body.indexOf("🐍")==0 || event.body.indexOf("🐟")==0 || event.body.indexOf("🌼")==0 || event.body.indexOf("🌾")==0 || event.body.indexOf("💮")==0 || event.body.indexOf("🪷")==0 || event.body.indexOf("🍀")==0 || event.body.indexOf("🍂")==0 || event.body.indexOf("🍃")==0 || event.body.indexOf("🌿")==0 || event.body.indexOf("☘️")==0 || event.body.indexOf("🍰")==0 || event.body.indexOf("🏆")==0 || event.body.indexOf("🔥")==0 || event.body.indexOf("⭐")==0 || event.body.indexOf("🌟")==0 || event.body.indexOf("🚲")==0 || event.body.indexOf("😾")==0 || event.body.indexOf("😅")==0 || event.body.indexOf("✅")==0 || event.body.indexOf("🔰")==0 || event.body.indexOf("Hi")==0 || event.body.indexOf("Hlw")==0 || event.body.indexOf("Hello")==0 || event.body.indexOf("❌")==0 || event.body.indexOf("❎")==0 || event.body.indexOf("👻")==0 || event.body.indexOf("✨")==0 || event.body.indexOf("⛳")==0 || event.body.indexOf("⛸️")==0 || event.body.indexOf("🧿")==0 || event.body.indexOf("🎭")==0 || event.body.indexOf("🎨")==0 ||event.body.indexOf("♥️")==0 || event.body.indexOf("♦️")==0 || event.body.indexOf("🧸")==0 || event.body.indexOf("🧶")==0 || event.body.indexOf("♟️")==0 ||
event.body.indexOf("🎯")==0 || event.body.indexOf("🥅")==0) {
		var msg = {
				body: "লোকের তাতে কোনো কিছু এসে যায়না যে আপনি খুশিতে আছেন নাকি কষ্টে, তারা তো এটাই দেখে যে আপনি তাদেরকে খুশি রেখেছেন কিনা।🤍",
				attachment: fs.createReadStream(__dirname + `/noprefix/music7.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🤎", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }