module.exports.config = {
	name: "quote",
  version: "1.0.0",
	hasPermssion: 0,
  credits: "MrTomXxX", 
	description: "Random Quotes",
	commandCategory: "Text",
	usages: "",
  cooldowns: 1, 
}
module.exports.run = async function({api, event, args, utils, Users, Threads}) {
    try {
        let axios = require('axios');
        let fs = require("fs-extra");
        let request = require("request");
        let {threadID, senderID, messageID} = event;
    const res = await axios.get(`https://api.popcat.xyz/quote`);
    console.log(res.data);
	  var data = res.data;
      return api.sendMessage(`${data.quote}`, event.threadID, event.messageID)
		} catch (err) {
        return console.log(`[ERR]: ${err}`)
    }
}