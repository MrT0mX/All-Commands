module.exports.config = {
	name: "uid",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "MrTomXxX",
	description: "Get id user",
	commandCategory: "other",
	cooldowns: 5
};

module.exports.run = function({ api, event }) {
 var {mentions, senderID, threadID, messageID} = event;
	if (Object.keys(mentions) == 0) return api.sendMessage(`${senderID}`, threadID, messageID);
	else {
		for (var i = 0; i < Object.keys(mentions).length; i++) api.sendMessage(`${Object.values(mentions)[i].replace('@', '')}: ${Object.keys(mentions)[i]}`, threadID);
		return;
	}
}
ength; i++) api.sendMessage(`${Object.values(event.mentions)[i].replace('@', '')}: ${Object.keys(event.mentions)[i]}`, event.threadID);
		return;
	}
  }rn;
	}
  }