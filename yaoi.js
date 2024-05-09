module.exports.config = {
  name: "yaoi",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "saikidesu",
  description: "DamDang lady",
  commandCategory: "ramdom-images",
  usages: "yaoi",
  cooldowns: 5
};

module.exports.run = async function({ api, event }) {
  const axios = require('axios');
  const request = require('request');
  const fs = require("fs");
  axios.get('https://gay.sangnguyn10.repl.co').then(res => {
  let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
  let count = res.data.count;
  let callback = function () {
          api.sendMessage({
            body: `yaoi😶\nPhotos Available: ${count}`,
            attachment: fs.createReadStream(__dirname + `/cache/yaoi.${ext}`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/yaoi.${ext}`), event.messageID);
        };
        request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/yaoi.${ext}`)).on("close", callback);
      })
    .catch(err => {
                     api.sendMessage("there's something problem while generating photo, please try again!", event.threadID, event.messageID);
    api.setMessageReaction("☹️", event.messageID, (err) => {}, true);
                  })     
}