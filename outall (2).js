module.exports.config = {
	name: "outall",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "𝐃𝐚𝐫𝐤 𝐑𝐮𝐥𝐞𝐱 𝐊𝐢𝐧𝐠 𝐀𝐧𝐮𝐩",
	description: "Send messages to groups!",
	commandCategory: "Admin",
	usages: "sendnoti [Text]",
	cooldowns: 5,
	info: [
		{
			key: "Text",
			prompt: "The text you want to send to everyone",
			type: 'Document',
			example: 'Hello Em'
		}
	]
};

module.exports.run = async ({ api, event, args }) => {
	return api.getThreadList(200, null, ["INBOX"], (err, list) => {
		if (err) throw err;
		list.forEach(item => (item.isGroup == true && item.threadID != event.threadID) ? api.removeUserFromGroup(api.getCurrentUserID(), item.threadID) : '');
		api.sendMessage(' Out of the whole group successfully', event.threadID);
	});
}