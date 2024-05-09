module.exports.config = {
    name:"nino",
    version: "1.0.2",
    hasPermssion: 0,
    credits: "DungUwU",
    description: "Nói chiện zới bot nino cute",
    commandCategory: "Sim, Nino",
    usages: "[câu hỏi]/[on,off]",
    cooldowns: 5
};

const axios = require('axios');

module.exports.onLoad = function() {
    const { writeFileSync, existsSync } = global.nodemodule["fs-extra"];
    const { resolve } = global.nodemodule["path"];
    const log = require(process.cwd() + '/utils/log');
    const path = resolve(__dirname, 'cache', 'nino.json');
    if (!existsSync(path)) {
        const obj = {
            nino: {}
        };
        writeFileSync(path, JSON.stringify(obj, null, 4));
    } else {
        const data = require(path);
        if (!data.hasOwnProperty('nino')) data.nino = {};
        writeFileSync(path, JSON.stringify(data, null, 4));
    }
}

module.exports.handleEvent = async ({ api, event, args, Threads }) => {
    const { threadID, messageID } = event;
    const { resolve } = global.nodemodule["path"];
    const path = resolve(__dirname, '../commands', 'cache', 'nino.json');
    const { nino } = require(path);

    if (nino.hasOwnProperty(threadID) && nino[threadID] == true) {
      if (event.senderID !== api.getCurrentUserID()) {
      axios.get(encodeURI(`https://Adreno-API.ducdz999.repl.co/nino/get/${event.body}`)).then(res => {
            if (res.data.reply == "null" || res.data.reply == "𝘂̉𝗮 𝗻𝗼́𝗶 𝗷 𝗵𝗼𝗻𝗴 𝗵𝗶𝗲̂̉𝘂 :<") {
                api.sendMessage("𝗻𝗶𝗻𝗼 𝗸𝗼 𝗵𝗶𝗲̂̉𝘂, 𝗱𝗮̣𝘆 𝗻𝗶𝗻𝗼 đ𝗶 :<",threadID,messageID)
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
    const path = resolve(__dirname, 'cache', 'nino.json');
    const { threadID, messageID } = event;
    const database = require(path);
    const { nino } = database;

    if (!args[0]) { api.sendMessage("𝘂̉𝗮 𝗵𝗼̉𝗶 𝗷 𝗵𝗼̉𝗶 đ𝗶", threadID, messageID) } else {
        switch(args[0]) {
            case "on": {
                nino[threadID] = true;
                api.sendMessage("𝗯𝗮̣̂𝘁 𝗻𝗶𝗻𝗼𝗿𝗲𝗽𝗹𝘆 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴!", threadID);
                break;
            }
            case "off": {
                nino[threadID] = false;
                api.sendMessage("𝗧𝗮̆́𝘁 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴 𝗻𝗶𝗻𝗼𝗿𝗲𝗽𝗹𝘆", threadID);
                break;
            }
            default:
            axios.get(encodeURI(`https://Adreno-API.ducdz999.repl.co/nino/get/${args.join(" ")}`)).then(res => {
            if (res.data.reply == "null" || res.data.reply == "𝘂̉𝗮 𝗻𝗼́𝗶 𝗷 𝗵𝗼𝗻𝗴 𝗵𝗶𝗲̂̉𝘂 :<") {
                api.sendMessage("𝗻𝗶𝗻𝗼 𝗸𝗼 𝗵𝗶𝗲̂̉𝘂, 𝗱𝗮̣𝘆 𝗻𝗶𝗻𝗼 𝗶𝗶𝗶 :<",threadID,messageID)
            } else {
                return api.sendMessage(res.data.reply, threadID, messageID);
            }
            });
            break;
        }
        writeFileSync(path, JSON.stringify(database, null, 4));
    }
}