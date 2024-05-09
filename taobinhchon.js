module.exports.config = {
    name: "taobinhchon",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "TruongMini",
    description: "Tạo bình chọn",
    commandCategory: "Box chat",
    usages: " [name1 | name2 | ...]",
    cooldowns: 5
};

module.exports.handleReply = function({ api, event, handleReply }) {
    const { threadID, senderID, body } = event;
    if(senderID != handleReply.author) return;
    return api.createPoll(body, event.threadID, handleReply.obj, (err, info) => {
        if(err) return console.log(err);
        else {
            api.sendMessage(`🔖 == 𝐂𝐫𝐞𝐚𝐭𝐞 𝐀 𝐕𝐨𝐭𝐞 == 🔖\n𝗧𝗮̣𝗼 𝗯𝗶̀𝗻𝗵 𝗰𝗵𝗼̣𝗻 ${body} 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴`, threadID);
            api.unsendMessage(handleReply.messageID);
            global.client.handleReply.splice(global.client.handleReply.indexOf(handleReply), 1);
        }
    });
}

module.exports.run = function({ api, event, args }) {
    const { threadID, messageID, senderID } = event;
    let options = args.join(" ").split("|");
    let obj = {}
    for(let item of options) obj[item] = false;
    api.sendMessage(`🔖 == 𝐂𝐫𝐞𝐚𝐭𝐞 𝐀 𝐕𝐨𝐭𝐞 == 🔖\n𝗧𝗮̣𝗼 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴 𝗰𝗮́𝗰 𝗯𝗶̀𝗻𝗵 𝗰𝗵𝗼̣𝗻 ${options.join(",")}\n𝗛𝗮̃𝘆 𝗿𝗲𝗽𝗹𝘆 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗻𝗮̀𝘆 𝘃𝗮̀ 𝘁𝗮̣𝗼 𝘁𝗶𝘁𝗹𝗲`, threadID, (err, info) => {
        if(err) return console.log(err);
        else {
            global.client.handleReply.push({
                name: this.config.name,
                messageID: info.messageID,
                author: senderID,
                obj
            })
        }
    });
}