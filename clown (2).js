module.exports.config = {
	name: "clown",	
	version: "1.0.0", 
	hasPermssion: 0,
	credits: "Joshua Sy",
	description: "image", 
	commandCategory: "image",
	usages: "reply to image or put an image link",
	cooldowns: 5
};

module.exports.run = async function({ api, event, args }) {
const fs = global.nodemodule["fs-extra"];
const axios = require('axios');
	var linkUp = event.messageReply.attachments[0].url || args.join(" ");
	if(!linkUp) return api.sendMessage('Please reply to 1 imgae', event.threadID, event.messageID)
	try {
		const res = await axios.get(`https://api-1.huytran6868.repl.co/imgur?link=${encodeURIComponent(linkUp)}`)
		const link = res.data.uploaded.image
		var img = (await axios.get(`https://api.popcat.xyz/clown?image=${link}`, { responseType: "arraybuffer" })).data;
		fs.writeFileSync(__dirname + `/cache/pet.png`, Buffer.from(img, "utf-8"));
		return api.sendMessage({ body: `honk🤡`, attachment: fs.createReadStream(__dirname + `/cache/pet.png`)}, event.threadID, () => 
		fs.unlinkSync(__dirname + `/cache/pet.png`), event.messageID)
	} catch(e) {
		return api.sendMessage(e, event.threadID, event.messageID);
	}
}