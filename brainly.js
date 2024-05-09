module.exports.config = {
	name: "brainly",
	version: "11.9.7",
	hasPermssion: 0,
	credits: "MrTomXxX",
	description: "Brainly",
  usages: "[text]",
	commandCategory: "...",
	cooldowns: 5
};

module.exports.run = async ({ api, event,args }) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
let text = args.join(" ")
const res = await axios.get(`https://api.xteam.xyz/brainly?soal=${text}&APIKEY=bb87827d6c4b905e`);
var answer = res.data.jawaban;
return request(encodeURI(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=en&dt=t&q=${answer}`), (err, response, body) => {
		if (err) return api.sendMessage("Error", event.threadID, event.messageID);
		var retrieve = JSON.parse(body);
		var text = '';
		retrieve[0].forEach(item => (item[0]) ? text += item[0] : '');
    api.sendMessage(text, event.threadID, event.messageID)
  });
}
, event.messageID);
		var retrieve = JSON.parse(body);
		var text = '';
		retrieve[0].forEach(item => (item[0]) ? text += item[0] : '');
    api.sendMessage(text, event.threadID, event.messageID)
  });
}
