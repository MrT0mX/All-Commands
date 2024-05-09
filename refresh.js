module.exports.config = {
	name: "refesh",
	version: "1.0.0",
	hasPermssion: 2, 
	credits: "Raiden Ei",
	description: "update database",
	commandCategory: "Hệ thống",
	usages: "",
	cooldowns: 0
};
module.exports.run = async function({ api, event, args, models, Users, Threads, Currencies, permssion }) {
    const { threadID, messageID, senderID } = event;
    if (event.senderID != config.ADMINBOT[0]) return api.sendMessage("» Bạn không được phép sử dụng lệnh này", event.threadID, event.messageID);
    if (args[0] == 'thread' && !args[1]) {
        await api.getThreadInfo(event.threadID);
        return api.sendMessage('Đã làm mới lại thông tin của nhóm thành công.', threadID, messageID);
    } else if (args[0] == 'thread' && args[1]) {
        await api.getThreadInfo(args[1]);
        return api.sendMessage('Đã làm mới lại thông tin của nhóm thành công.', threadID, messageID);
    }
    if (args[0] == 'user' && !args[1]) {
        if (event.type == 'message_reply') {
            await api.getUserInfo(event.messageReply.senderID);
            return api.sendMessage('Đã làm mới lại thông tin của thành viên thành công.', threadID, messageID);
        } else {
            await api.getUserInfo(event.senderID);
            return api.sendMessage('Đã làm mới lại thông tin của thành viên thành công.', threadID, messageID);
        }
    } else if (Object.keys(event.mentions).length >= 0) {
        for (var i of Object.keys(event.mentions)) {
            await api.getUserInfo(i);
        }
        return api.sendMessage('Đã làm mới lại thông tin của thành viên thành công.', threadID, messageID);
    }
}