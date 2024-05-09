module.exports.config = {
	name: "simv2",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Choru",
	description: "convert text to baybayin",
	commandCategory: "Phương tiện",
	usages: "sim [text]",
	cooldowns: 5
};

module.exports.run = async ({ api, event,args }) => {
const axios = global.nodemodule["axios"];
let timkiem = args.join(" ");
const res = await axios.get(`https://api.phamvandien.xyz/sim?type=ask&ask=${error}`);
var sim = res.data.error;
return api.sendMessage(`${sim}`, event.threadID, event.messageID)
}
