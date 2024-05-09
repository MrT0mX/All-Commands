module.exports.config = {
    name: "logout",
    version: "1.0.1",
    hasPermssion: 2,
    credits: "Yae Miko",
    description: "Đăng xuất acc bot",
    commandCategory: "Hệ Thống",
    usages: "",
    cooldowns: 0
};

module.exports.run = async function({ api, event })
{
api.sendMessage("Đang đăng xuất...",event.threadID,event.messageID)
api.logout()
}