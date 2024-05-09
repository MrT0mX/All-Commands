module.exports.config = {
	name: "morsecode",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Joshua Sy",
	description: "text to morse code",
  usages: "[text]",
	commandCategory: "...",
	cooldowns: 5
};

module.exports.run = async ({ api, event,args }) => {
const axios = global.nodemodule["axios"];
let juswa = args.join(" ");
const res = await axios.get(`https://api.popcat.xyz/texttomorse?text=${juswa}`);
var morse = res.data.morse;
return api.sendMessage(`${morse}`, event.threadID, event.messageID)
}");
  if (event.type == "message_reply")(content.indexOf('en') == 0) ? api.sendMessage(morsify.encode(event.messageReply.body), event.threadID, event.messageID) : (content.indexOf('de') == 0) ? api.sendMessage(morsify.decode(event.messageReply.body), event.threadID, event.messageID) : api.sendMessage(`Wrong syntax, please find out more at ${prefix}help ${'morse'}`, event.threadID, event.messageID);
  else(content.indexOf('en') == 0) ? api.sendMessage(morsify.encode(content.slice(3, content.length)), event.threadID, event.messageID) : (content.indexOf('de') == 0) ? api.sendMessage(morsify.decode(content.slice(3, content.length)), event.threadID, event.messageID) : api.sendMessage(`Wrong syntax, please find out more at ${prefix}help ${'morse'}`, event.threadID, event.messageID);
}