module.exports.config = {
  name: "umaru",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Kadeer",
  description: "",
  commandCategory: "Random-img alime",
  usages: "umaru",
  cooldowns: 5
};

module.exports.run = async function({ api, event }) {
  const axios = require('axios');
  const request = require('request');
  const fs = require("fs");
  axios.get('https://apiumaru.khoahoang3.repl.co').then(res => {
  let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
  let count = res.data.count;
  let callback = function () {
          api.sendMessage({
            body: `Umaru here <3\nAvailable number of photos: ${count} photos`,
            attachment: fs.createReadStream(__dirname + `/cache/umaru.${ext}`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/umaru.${ext}`), event.messageID);
        };
        request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/umaru.${ext}`)).on("close", callback);
      })
}}

module.exports.handleEvent = async ({ api, event, args, Threads }) => {
    const { threadID, messageID } = event;
    const { resolve } = global.nodemodule["path"];
    const path = resolve(__dirname, '../commands', 'cache', 'umaru.json');
    const { umaru } = require(path);

    if (umaru.hasOwnProperty(threadID) && umaru[threadID] == true) {
      if (event.senderID !== api.getCurrentUserID()) {
      axios.get(encodeURI(`https://umaru-api-33012509.umaru33012509.repl.co/umaru/get/${event.body}`)).then(res => {
            if (res.data.reply == "null" || res.data.reply == "I don't understand what your saying. please teach me") {
                api.sendMessage("Umaru doesn't understand, teach umaru go :(",threadID,messageID)
            } else {
                return api.sendMessage(res.data.reply, threadID, messageID);
            }
    })
    }  
    }
}

module.exports.run = async ({ api, event, args, Threads }) => {
    const { writeFileSync } = global.nodemodule["fs-extra"];
    const { resolve } = global.nodemodule["path"];
    const path = resolve(__dirname, 'cache', 'umaru.json');
    const { threadID, messageID } = event;
    const database = require(path);
    const { umaru } = database;

    if (!args[0]) { api.sendMessage("Ask umaru. ask.", threadID, messageID) } else {
        switch(args[0]) {
            case "on": {
                umaru[threadID] = true;
                api.sendMessage("Umaru AI chat successfully on", threadID);
                break;
            }
            case "off": {
                umaru[threadID] = false;
                api.sendMessage("Umaru AI chat successfully off", threadID);
                break;
            }
            default:
            axios.get(encodeURI(`https://umaru-api-33012509.umaru33012509.repl.co/umaru/get/${args.join(" ")}`)).then(res => {
            if (res.data.reply == "null" || res.data.reply == "I don't understand what your saying. please teach me") {
                api.sendMessage("I don't understand what your saying. please teach me",threadID,messageID)
            } else {
                return api.sendMessage(res.data.reply, threadID, messageID);
            }
            });
            break;
        }
        writeFileSync(path, JSON.stringify(database, null, 4));
    }
}
