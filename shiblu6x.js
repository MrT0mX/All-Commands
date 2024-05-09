const fs = require("fs");
module.exports.config = {
	name: "Assalamualaykum",
    version: "1.1.1",
	hasPermssion: 0,
	credits: "John Lester", 
	description: "Just Respond",
	commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("As-salamu alaykum")==0 || event.body.indexOf(" ٱلسَّلَامُ عَلَيْكُمْ")==0 || event.body.indexOf("আস-সালামু আলাইকুম")==0 || event.body.indexOf("Allah")==0 || event.body.indexOf("আসসালামু আলাইকুম")==0 || event.body.indexOf("assalamu alaikum")==0 || event.body.indexOf("salam")==0 || event.body.indexOf("assalamualaikum")==0 || event.body.indexOf("আসসালামুয়ালাইকুম")==0 || event.body.indexOf("সালাম")==0 ) { 
		var msg = {
				body: "- ওয়ালাইকুমুস-সালাম-!!🖤",
				attachment: fs.createReadStream(__dirname + `/noprefix/morning.gif`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("💜", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
