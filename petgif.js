module.exports.config = {
	name: "petgif",	
	version: "1.0.0", 
	hasPermssion: 0,
	credits: "D-Jukie",
	description: "Biến đứa được tag thành 1 con pet", 
	commandCategory: "tạo ảnh",
	usages: "reply",
	cooldowns: 5
};

module.exports.run = async function({ api, event, args }) {
const fs = global.nodemodule["fs-extra"];
const axios = require('axios');
	var linkUp = event.messageReply.attachments[0].url || args.join(" ");
	if(!linkUp) return api.sendMessage('Vui lòng reply hoặc nhập link 1 hình ảnh!!!', event.threadID, event.messageID)
	try {
		const res = await axios.get(`https://apiuwuapi.ducdz999.repl.co/imgur?link=${encodeURIComponent(linkUp)}`)
		const link = res.data.uploaded.image
		var img = (await axios.get(`https://api.popcat.xyz/pet?image=${link}`, { responseType: "arraybuffer" })).data;
		fs.writeFileSync(__dirname + `/cache/pet.gif`, Buffer.from(img, "utf-8"));
		return api.sendMessage({ body: `Uh pet`, attachment: fs.createReadStream(__dirname + `/cache/pet.gif`)}, event.threadID, () => 
		fs.unlinkSync(__dirname + `/cache/pet.gif`), event.messageID)
	} catch(e) {
		return api.sendMessage(e, event.threadID, event.messageID);
	}
}