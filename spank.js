const request = 
module.exports.config = {
  name: "spank",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "MrTomXxX",
  description: "spank the user tagged",
  commandCategory: "anime",
  usages: "spank [Tag someone you need to spank]",
  cooldowns: 5,
};

module.exports.run = async ({ api, event, args }) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
    var out = (msg) => api.sendMessage(msg, event.threadID, event.messageID);
  if (!args.join("")) return out("Please tag someone");
  else
  return axios.get('https://api.satou-chan.xyz/api/endpoint/spank').then(res => {
        let ext = res.data.url.substring(res.data.url.lastIndexOf(".") + 1);
        var mention = Object.keys(event.mentions)[0];
                  let tag = event.mentions[mention].replace("@", "");    
        
 let callback = function () {
            api.setMessageReaction("✅", event.messageID, (err) => {}, true);
        api.sendMessage({
						body: "owchh " + tag,
                                          mentions: [{
          tag: tag,
          id: Object.keys(event.mentions)[0]
        }],
						attachment: fs.createReadStream(__dirname + `/cache/spank.${ext}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/spank.${ext}`), event.messageID)
				};
 //   }
        request(res.data.url).pipe(fs.createWriteStream(__dirname + `/cache/spank.${ext}`)).on("close", callback);
			})
    .catch(err => {
                     api.sendMessage("Failed to generate gif, be sure that you've tag someone!", event.threadID, event.messageID);
    api.setMessageReaction("☹️", event.messageID, (err) => {}, true);
                  })     
}
