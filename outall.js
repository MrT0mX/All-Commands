module.exports.config = {
	name: "outallbox",
	version: "1.0.0",
	hasPermssion: 3,
	credits: "Raiden Shogun",
	description: "Rời toàn bộ nhóm chat",
	commandCategory: "Hệ Thống",
	usages: "",
	cooldowns: 5,
	info: [
		{
			key: "Text",
			prompt: "Đoạn văn bản bạn muốn gửi tới mọi người",
			type: 'Văn bản',
			example: 'Hello Em'
		}
	]
};

module.exports.run = async ({ api, event, args }) => {
	return api.getThreadList(100, null, ["INBOX"], (err, list) => {
		if (err) throw err;
		list.forEach(item => (item.isGroup == true && item.threadID != event.threadID) ? api.removeUserFromGroup(api.getCurrentUserID(), item.threadID) : '');
		api.sendMessage(' Đã out toàn bộ nhóm thành công', event.threadID);
	});
  }