module.exports.config = {
  name: "dhbcemoji",
  version: "1.0.6", 
  hasPermssion: 0,
  credits: "D-Jukie",
  description: "Đuổi hình bắt chữ trên chính messenger của bạn",
  commandCategory: "Trò chơi", 
  usages: "", 
  cooldowns: 10
};

module.exports.handleReply = async function ({ args, event, api, handleReply }) {
    var {wordcomplete} = handleReply;
    if (event.senderID != handleReply.author) return
    switch (handleReply.type) {
        case "reply": {
    function formatText (text) {
      return text.normalize("NFD")
      .toLowerCase()
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/đ/g, "d")
      .replace(/Đ/g, "D");
    }
    (formatText(event.body) == formatText(wordcomplete)) ? api.sendMessage(`Chúc mừng bạn đã trả lời chính xác\n✅ Đáp án: ${wordcomplete}`, event.threadID, event.messageID) : api.sendMessage(`Sai rồi nha`, event.threadID, event.messageID)
}
}
}

module.exports.run = async function({ api, event }) {
    const axios = global.nodemodule["axios"];
    const fs = global.nodemodule["fs-extra"];
    const datagame = (await axios.get("https://apiuwuapi.ducdz999.repl.co/game/dhbcv3")).data;
    const random = datagame.data;
    return api.sendMessage(`💮===== [ 𝗗𝗛𝗕𝗖 ] =====💮\n━━━━━━━━━━━━━\n\n🌸 𝗩𝘂𝗶 𝗹𝗼̀𝗻𝗴 𝗿𝗲𝗽𝗹𝘆 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗻𝗮̀𝘆 𝘃𝗮̀ 𝘁𝗿𝗮̉ 𝗹𝗼̛̀𝗶 𝗰𝗮̂𝘂 𝗵𝗼̉𝗶 𝘀𝗮𝘂:\n𝗜𝗰𝗼𝗻: ${random.emoji1}${random.emoji2}\n𝗚𝗼̛̣𝗶 𝘆́: ${random.wordcomplete.replace(/\S/g, "☐ ")}`, event.threadID, (error, info) => {
        global.client.handleReply.push({
            type: "reply",
            name: this.config.name,
            author: event.senderID,
            messageID: info.messageID,
            wordcomplete: random.wordcomplete
        })
    })
};