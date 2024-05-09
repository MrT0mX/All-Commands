module.exports.config = {
	name: "quotes",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Joshua Sy",
	description: "random quotes",
	commandCategory: "...",
	cooldowns: 5
};

module.exports.run = async ({ api, event,args }) => {
const axios = global.nodemodule["axios"];
const res = await axios.get(`https://api.popcat.xyz/quote`);
var quote = res.data.quote;
return api.sendMessage(`Quote: ${quote}`, event.threadID, event.messageID)
}