module.exports.config = {
    name: "youtube",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "MrTomXxX",
    description: "Play music or video via YouTube link or search keyword",
    commandCategory: "Phương tiện",
    usages: "[search/url youtube]",
    cooldowns: 0
};

module.exports.handleReply = async function ({ api, event, handleReply, utils }) {
  const { threadID, messageID, body, senderID } = event;
  const { createReadStream, unlinkSync, writeFileSync, statSync, copyFile } = require("fs-extra");
  const axios = require("axios");
  const { resolve } = require('path');

  switch (handleReply.type) {
    case 'link': {
      if(body == '1') {
        return api.sendMessage({ 
          body: `🎵 Youtube: ${handleReply.data.title}\n⏱️ Thời gian: ${handleReply.data.duration}\n💿====DISME PROJECT====💿`,
          attachment: createReadStream(handleReply.path)}, threadID, 
          async function() {
            api.unsendMessage(handleReply.messageID);
            unlinkSync(handleReply.path)
          }, messageID);
      }
      if(body == '2') {
        await copyFile(handleReply.path, handleReply.path.replace(".mp4",".m4a"));
        return api.sendMessage({ 
          body: `🎵 Youtube: ${handleReply.data.title}\n⏱️ Time: ${handleReply.data.duration}\n💿====DISME PROJECT====💿`,
          attachment: createReadStream(handleReply.path.replace(".mp4",".m4a"))}, threadID, 
          async function() {
            api.unsendMessage(handleReply.messageID);
            unlinkSync(handleReply.path.replace(".mp4",".m4a"))
            unlinkSync(handleReply.path);
        }, messageID);
      }
    }
    case 'reply': {
      var path = resolve(__dirname, 'cache', `youtube-${senderID}.mp4`);
      try {
        var data = await global.utils.getYoutube(handleReply.number == 0 ? handleReply.link : handleReply.link[body - 1], 'getLink', 'video')
        var getms = (await axios.get(data.download.SD, { responseType: "arraybuffer" })).data;
        writeFileSync(path, Buffer.from(getms, "utf-8"));
        return api.sendMessage('Please reply to the options below:\n1. Download videos\n2. Download audio', threadID, 
          (error, info) => global.client.handleReply.push({
            type: 'link',
            name: this.config.name,
            messageID: info.messageID,
            author: event.senderID,
            path: path,
            data,
            link: 'https://www.youtube.com/watch?v=' + handleReply.link[body - 1]
          }),
        messageID);
      } catch {
        return api.sendMessage('An error has occurred, the command cannot be executed at this time!', threadID, messageID);
      }
    }
    default: return
  }
}
module.exports.run = async function ({ api, event, args, utils }) {
  const { threadID, messageID } = event;
  const fs = require("fs-extra");
  if (args.length == 0 || !args) return api.sendMessage('» Search cannot be left blank!', event.threadID, event.messageID);
  const keywordSearch = args.join(" ");
  if (args.join(" ").indexOf("https://") == 0) {
    var url = args.join(" ");
    var urlsplit = url.split(/^.*(youtu.be\/|v\/|embed\/|watch\?|youtube.com\/user\/[^#]*#([^\/]*?\/)*)\??v?=?([^#\&\?]*).*/);
    return api.sendMessage('Please reply to the options below: \n1. Download videos\n2. Download audio', threadID, 
      (error, info) => global.client.handleReply.push({
        type: 'link',
        name: this.config.name,
        messageID: info.messageID,
        author: event.senderID,
        link: urlsplit[3],
        number: 0
      }),
    messageID);
  } 
  else {
      try {
        var link = [],
            msg = "",
            num = 0
        var imgthumnail = [];
        const data = await global.utils.getYoutube(keywordSearch, 'search');
        for (let value of data) {
          link.push(value.id);
          num = num+=1
          msg += (`${num} - ${value.title}\n\n`);
        }
        var body = `»🔎 Have ${link.length} Results match your search term:\n\n${msg}» Please reply(feedback) choose one of the above searches`
        return api.sendMessage({
          body: body
        }, event.threadID, (error, info) => global.client.handleReply.push({
          type: 'reply',
          name: this.config.name,
          messageID: info.messageID,
          author: event.senderID,
          link,
          number: 1
        }), messageID);
      } catch(e) {
        return api.sendMessage('An error occurred, please try again in a moment!!\n' + e, event.threadID, event.messageID);
    }
  }
}