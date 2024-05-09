module.exports.config = {
	name: "reload",
	version: "1.0.0",
	hasPermssion: 1,
	credits: "MrTomXxX",
	description: "The bot command will restarts",
	commandCategory: "admin",
	usages: "reload + time",
	cooldowns: 5
};

module.exports.run = async ({ api, event, args }) => {
 const permission = ["100017985245260", "100017985245260"];
             if (!permission.includes(event.senderID))
             return api.sendMessage("《Do you want to reload, yes you are not old enough》", event.threadID, event.messageID);
	const { threadID, messageID } = event;
	var time = args.join(" ");
	var rstime = "68";
	if (!time) rstime = "69";
	else rstime = time;
	api.sendMessage(`[${global.config.BOTNAME} Bot] => Will reload the bot later ${rstime} second more !`, threadID);
	return setTimeout(() => { api.sendMessage(`[${global.config.BOTNAME} Bot] => Reloading Bot !`,event.threadID,() => process.exit(1) )},	rstime * 1000);
}