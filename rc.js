
module.exports.config = {
  name: "rc",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Yae Miko",
  description: "Chat ẩn danh qua bot",
  commandCategory: "Tiện Ích",
  usages: "[random/id/check]",
  cooldowns: 0
}

const fs = require('fs-extra');
const axios = require('axios');
const rcp = require('path').resolve(__dirname, 'cache', 'rcp.json');
module.exports.onLoad = function () {
  if (!fs.existsSync(rcp)) fs.writeFileSync(rcp, '[]');
}

module.exports.run = async function ({ api, event, Users, args }) {
  const { messageID, threadID, isGroup } = event;
  const o = (m, c = () => { }, id = threadID) => api.sendMessage(m, id, c, messageID);
  const s = api.sendMessage;
  if (isGroup) return o("𝗕𝗮̣𝗻 𝗰𝗵𝗶̉ 𝗰𝗼́ 𝘁𝗵𝗲̂̉ 𝗱𝘂̀𝗻𝗴 𝗿𝗰 𝘁𝗿𝗼𝗻𝗴 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗿𝗶𝗲̂𝗻𝗴 𝘃𝗼̛́𝗶 𝗯𝗼𝘁 𝘁𝗵𝗼̂𝗶 𝗻𝗵𝗲́ 😽");
  var rc = {};
  rc.root = threadID;
  rc.head = null;
  rc.isWaiting = false;
  rc.isStarted = false;
  rc.isError = false;
  rc.rootIsIncognito = true;
  rc.headIsIncognito = true;
  rc.isRandom = false;

  switch (args[0]) {
    case 'random':
      var data = require(rcp);
      if (data.some(e => (e.root == threadID || e.head == threadID))) return o("𝗕𝗮̣𝗻 𝗵𝗶𝗲̣̂𝗻 𝗴𝗶𝗼̛̀ 𝗻𝗴𝗼̂̀𝗶 𝗰𝗵𝗼̛̀ 𝗸𝗲̂́𝘁 𝗻𝗼̂́𝗶 𝘃𝗼̛́𝗶 𝗺𝗼̣̂𝘁 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗸𝗵𝗮́𝗰. 𝗞𝗵𝗼̂𝗻𝗴 𝘁𝗵𝗲̂̉ 𝘁𝗵𝘂̛̣𝗰 𝗵𝗶𝗲̣̂𝗻 𝘆𝗲̂𝘂 𝗰𝗮̂̀𝘂 𝗻𝗮̀𝘆 🌸");
      rc.isRandom = true;
      o("𝐁𝐚̣𝐧 𝐯𝐮̛̀𝐚 𝐜𝐡𝐨̣𝐧 𝐦𝐨𝐝𝐞 𝐭𝐢̀𝐦 𝐤𝐢𝐞̂́𝐦 𝐧𝐠𝐚̂̃𝐮 𝐧𝐡𝐢𝐞̂𝐧.\n𝐁𝐚̣𝐧 𝐜𝐨́ 𝐦𝐮𝐨̂́𝐧 𝐚̂̉𝐧 𝐠𝐢𝐚̂́𝐮 𝐭𝐡𝐚̂𝐧 𝐩𝐡𝐚̣̂𝐧 ?\n\n𝐑𝐞𝐩𝐥𝐲 𝐯𝐨̛́𝐢 𝐬𝐨̂́ 𝟏 𝐧𝐞̂́𝐮 𝐦𝐮𝐨̂́𝐧 𝐚̂̉𝐧 𝐝𝐚𝐧𝐡, 𝐬𝐨̂́ 𝟎 𝐧𝐞̂́𝐮 𝐦𝐮𝐨̂́𝐧 𝐜𝐨̂𝐧𝐠 𝐤𝐡𝐚𝐢 𝐭𝐡𝐚̂𝐧 𝐩𝐡𝐚̣̂𝐧 💌", (_, i) => global.client.handleReply.push({ type: 'incognitoRootRandomHead', name: this.config.name, author: threadID, messageID: i.messageID, data: rc }));
      break;
    case 'reject':
      var data = require(rcp);
      if (data.some(e => e.head == threadID && e.isWaiting)) {
        let rj = data.findIndex(e => e.head == threadID);
        o("𝐁𝐚̣𝐧 𝐯𝐮̛̀𝐚 𝐭𝐮̛̀ 𝐜𝐡𝐨̂́𝐢 𝐤𝐞̂́𝐭 𝐧𝐨̂́𝐢 𝐯𝐨̛́𝐢 𝐧𝐠𝐮̛𝐨̛̀𝐢 𝐥𝐢𝐞̂𝐧 𝐡𝐞̣̂ 😿💔", () => {
          s("𝐍𝐠𝐮̛𝐨̛̀𝐢 𝐥𝐢𝐞̂𝐧 𝐡𝐞̣̂ 𝐯𝐮̛̀𝐚 𝐭𝐮̛̀ 𝐜𝐡𝐨̂́𝐢 𝐤𝐞̂́𝐭 𝐧𝐨̂́𝐢 𝐯𝐨̛́𝐢 𝐛𝐚̣𝐧 😿💔", data[rj].root);
          data.splice(rj, 1);
          fs.writeFileSync(rcp, JSON.stringify(data, null, 4));
        });
      } else o("𝐊𝐡𝐨̂𝐧𝐠 𝐜𝐨́ 𝐧𝐠𝐮̛𝐨̛̀𝐢 𝐥𝐢𝐞̂𝐧 𝐡𝐞̣̂ 𝐧𝐚̀𝐨 𝐡𝐢𝐞̣̂𝐧 𝐧𝐠𝐨̂̀𝐢 𝐜𝐡𝐨̛̀ 𝐤𝐞̂́𝐭 𝐧𝐨̂́𝐢 𝐜𝐮̉𝐚 𝐛𝐚̣𝐧 😿💔");
      break;
    case 'accept':
      var data = require(rcp);
      if (data.some(e => e.head == threadID && e.isWaiting)) {
        let ac = data.find(e => e.head == threadID && e.isWaiting);
        o("𝐁𝐚̣𝐧 𝐯𝐮̛̀𝐚 𝐜𝐡𝐚̂́𝐩 𝐧𝐡𝐚̣̂𝐧 𝐤𝐞̂́𝐭 𝐧𝐨̂́𝐢 𝐯𝐨̛́𝐢 𝐧𝐠𝐮̛𝐨̛̀𝐢 𝐥𝐢𝐞̂𝐧 𝐡𝐞̣̂ 💌\n𝐁𝐚̣𝐧 𝐜𝐨́ 𝐦𝐮𝐨̂́𝐧 𝐚̂̉𝐧 𝐠𝐢𝐚̂́𝐮 𝐭𝐡𝐚̂𝐧 𝐩𝐡𝐚̣̂𝐧 ?\n\n𝐑𝐞𝐩𝐥𝐲 𝐯𝐨̛́𝐢 𝐬𝐨̂́ 𝟏 𝐧𝐞̂́𝐮 𝐦𝐮𝐨̂́𝐧 𝐚̂̉𝐧 𝐝𝐚𝐧𝐡, 𝐬𝐨̂́ 𝟎 𝐧𝐞̂́𝐮 𝐦𝐮𝐨̂́𝐧 𝐜𝐨̂𝐧𝐠 𝐤𝐡𝐚𝐢 𝐭𝐡𝐚̂𝐧 𝐩𝐡𝐚̣̂𝐧 💌", (_, i) => global.client.handleReply.push({ type: 'incognitoHead', name: this.config.name, author: threadID, messageID: i.messageID, data: ac }))
      }
      break;
    case 'end':
    case 'leave':
    case '-l':
      var data = require(rcp);
      if (data.some(e => (e.root == threadID || e.head == threadID))) {
        var end = data.findIndex(e => (e.root == threadID || e.head == threadID));
        var endData = data[end];
        var enderId = endData.root == threadID ? endData.root : endData.head;
        var remain = endData.root == threadID ? endData.head : endData.root;
        var enderIncognito = endData.root == threadID ? endData.rootIsIncognito : endData.headIsIncognito;
        o("𝐁𝐚̣𝐧 𝐯𝐮̛̀𝐚 𝐤𝐞̂́𝐭 𝐭𝐡𝐮́𝐜 𝐜𝐮𝐨̣̂𝐜 𝐭𝐫𝐨̀ 𝐜𝐡𝐮𝐲𝐞̣̂𝐧 💓", async (er) => {
          var enderName = await Users.getNameUser(enderId);
          var msg = enderIncognito == false ? `${enderName} 𝐯𝐮̛̀𝐚 𝐫𝐨̛̀𝐢 𝐤𝐡𝐨̉𝐢 𝐜𝐮𝐨̣̂𝐜 𝐭𝐫𝐨̀ 𝐜𝐡𝐮𝐲𝐞̣̂𝐧.` : "𝐍𝐠𝐮̛𝐨̛̀𝐢 𝐥𝐢𝐞̂𝐧 𝐡𝐞̣̂ 𝐯𝐮̛̀𝐚 𝐫𝐨̛̀𝐢 𝐤𝐡𝐨̉𝐢 𝐜𝐮𝐨̣̂𝐜 𝐭𝐫𝐨̀ 𝐜𝐡𝐮𝐲𝐞̣̂𝐧.";
          return s(msg, remain);
        });
        data.splice(end, 1);
        fs.writeFileSync(rcp, JSON.stringify(data, null, 4));
      } else o("𝐊𝐡𝐨̂𝐧𝐠 𝐜𝐨́ 𝐜𝐮𝐨̣̂𝐜 𝐭𝐫𝐨̀ 𝐜𝐡𝐮𝐲𝐞̣̂𝐧 𝐧𝐚̀𝐨 𝐡𝐢𝐞̣̂𝐧 𝐝𝐢𝐞̂̃𝐧 𝐫𝐚.");
      break;
    case "data":
      var data = require(rcp);
      console.log(JSON.stringify(data));
      break;
    case "check":
    case "info":
    case "-i":
      var data = require(rcp);
      if (data.some(e => (e.root == threadID || e.head == threadID))) {
        var rcData = data.find(e => (e.root == threadID || e.head == threadID));
        var incognito = rcData.root == threadID ? rcData.headIsIncognito : rcData.rootIsIncognito;
        var msg = '𝐈𝐧𝐟𝐨𝐫𝐦𝐚𝐭𝐢𝐨𝐧 𝐨𝐟 𝐑𝐂:';
        msg += '\n\n- 𝗬𝗼𝘂𝗿 𝗜𝗗: ' + threadID;
        if (incognito == true) msg += '\n- 𝗢𝘁𝗵𝗲𝗿: 𝗜𝗗 𝗶𝘀 𝗵𝗶𝗱𝗱𝗲𝗻';
        else {
          var name = await Users.getNameUser((rcData.head == threadID ? rcData.root : rcData.head));
          msg += '\n- 𝗢𝘁𝗵𝗲𝗿: ' + (rcData.head == threadID ? rcData.root : rcData.head) + ' - ' + name;
        }
        msg += '\n- 𝗦𝘁𝗮𝘁𝘂𝘀: ' + (rcData.isWaiting ? '𝗪𝗮𝗶𝘁𝗶𝗻𝗴 𝗳𝗼𝗿 𝗮𝗰𝗰𝗲𝗽𝘁.' : rcData.isStarted ? '𝗕𝗲 𝗰𝗵𝗮𝘁𝘁𝗶𝗻𝗴.' : '???');
        return o(msg);
      } else o("𝐊𝐡𝐨̂𝐧𝐠 𝐜𝐨́ 𝐜𝐮𝐨̣̂𝐜 𝐭𝐫𝐨̀ 𝐜𝐡𝐮𝐲𝐞̣̂𝐧 𝐧𝐚̀𝐨 𝐡𝐢𝐞̣̂𝐧 𝐝𝐢𝐞̂̃𝐧 𝐫𝐚");
    default:
      var data = require(rcp);
      if (data.some(e => (e.root == threadID || e.head == threadID))) return o("𝗕𝗮̣𝗻 𝗵𝗶𝗲̣̂𝗻 𝗰𝗼́ 𝟭 𝗸𝗲̂́𝘁 𝗻𝗼̂́𝗶 𝗸𝗵𝗮́𝗰 𝗻𝗲̂𝗻 𝗸𝗵𝗼̂𝗻𝗴 𝘁𝗵𝗲̂̉ 𝘁𝗵𝘂̛̣𝗰 𝗵𝗶𝗲̣̂𝗻 𝘆𝗲̂𝘂 𝗰𝗮̂̀𝘂 𝗻𝗮̀𝘆.");
      if (!args[0] || isNaN(args[0])) return o("𝐕𝐮𝐢 𝐥𝐨̀𝐧𝐠 𝐧𝐡𝐚̣̂𝐩 𝐈𝐃 𝐧𝐠𝐮̛𝐨̛̀𝐢 𝐛𝐚̣𝐧 𝐦𝐮𝐨̂́𝐧 𝐤𝐞̂́𝐭 𝐧𝐨̂́𝐢 𝐭𝐫𝐨̀ 𝐜𝐡𝐮𝐲𝐞̣̂𝐧 💌");
      rc.head = args[0];
      if (data.some(e => (e.root == rc.head || e.head == rc.head))) return o('𝐍𝐠𝐮̛𝐨̛̀𝐢 𝐛𝐚̣𝐧 𝐦𝐮𝐨̂́𝐧 𝐤𝐞̂́𝐭 𝐧𝐨̂́𝐢 𝐡𝐢𝐞̣̂𝐧 𝐭𝐫𝐨𝐧𝐠 𝟏 𝐤𝐞̂́𝐭 𝐧𝐨̂́𝐢 𝐤𝐡𝐚́𝐜, 𝐯𝐮𝐢 𝐥𝐨̀𝐧𝐠 𝐭𝐡𝐮̛̉ 𝐥𝐚̣𝐢 𝐬𝐚𝐮.')
      o(`𝐁𝐚̣𝐧 𝐯𝐮̛̀𝐚 𝐲𝐞̂𝐮 𝐜𝐚̂̀𝐮 ${args[0]} 𝐤𝐞̂́𝐭 𝐧𝐨̂́𝐢 𝐭𝐫𝐨̀ 𝐜𝐡𝐮𝐲𝐞̣̂𝐧 💌\n𝐁𝐚̣𝐧 𝐜𝐨́ 𝐦𝐮𝐨̂́𝐧 𝐚̂̉𝐧 𝐠𝐢𝐚̂́𝐮 𝐭𝐡𝐚̂𝐧 𝐩𝐡𝐚̣̂𝐧 ?\n\n𝐑𝐞𝐩𝐥𝐲 𝐯𝐨̛́𝐢 𝐬𝐨̂́ 𝟏 𝐧𝐞̂́𝐮 𝐦𝐮𝐨̂́𝐧 𝐚̂̉𝐧 𝐝𝐚𝐧𝐡, 𝐬𝐨̂́ 𝟎 𝐧𝐞̂́𝐮 𝐦𝐮𝐨̂́𝐧 𝐜𝐨̂𝐧𝐠 𝐤𝐡𝐚𝐢 𝐭𝐡𝐚̂𝐧 𝐩𝐡𝐚̣̂𝐧 💌`, (_, i) => global.client.handleReply.push({ type: 'incognitoRoot', name: this.config.name, author: threadID, messageID: i.messageID, data: rc }));
      break;
  }
}

module.exports.handleReply = async function ({ handleReply, api, event, Users }) {
  const { threadID, messageID, body } = event;
  const o = (m, c = () => { }, id = threadID) => api.sendMessage(m, id, c, messageID);
  const s = api.sendMessage;
  switch (handleReply.type) {
    case 'incognitoRootRandomHead':
      var rcData = require(rcp);
      var rc = handleReply.data;
      var headID;
      if (body == 0) {
        rc.rootIsIncognito = true;
        o("𝐁𝐚̣𝐧 𝐯𝐮̛̀𝐚 𝐜𝐡𝐨̣𝐧 𝐚̂̉𝐧 𝐠𝐢𝐚̂́𝐮 𝐭𝐡𝐚̂𝐧 𝐩𝐡𝐚̣̂𝐧 👥");
      } else if (body == 1) {
        rc.rootIsIncognito = false;
        o("𝐁𝐚̣𝐧 𝐯𝐮̛̀𝐚 𝐜𝐡𝐨̣𝐧 𝐡𝐢𝐞̣̂𝐧 𝐭𝐡𝐚̂𝐧 𝐩𝐡𝐚̣̂𝐧 💑");
      }
      const userID = global.data.allUserID;
      headID = userID[Math.floor(Math.random() * userID.length)];
      var rootName = await Users.getNameUser(rc.root);
      var fbUrl = 'https://facebook.com/' + rc.root;
      s((rc.rootIsIncognito ? "𝐂𝐨́ 𝟏 𝐧𝐠𝐮̛𝐨̛̀𝐢 𝐥𝐢𝐞̂𝐧 𝐡𝐞̣̂ 𝐚̂̉𝐧 𝐝𝐚𝐧𝐡 𝐦𝐮𝐨̂́𝐧 𝐭𝐫𝐨̀ 𝐜𝐡𝐮𝐲𝐞̣̂𝐧 𝐯𝐨̛́𝐢 𝐛𝐚̣𝐧" : `𝐌𝐨̣̂𝐭 𝐧𝐠𝐮̛𝐨̛̀𝐢 𝐭𝐞̂𝐧 ${rootName} - ${fbUrl} 𝐦𝐮𝐨̂́𝐧 𝐭𝐫𝐨̀ 𝐜𝐡𝐮𝐲𝐞̣̂𝐧 𝐯𝐨̛́𝐢 𝐛𝐚̣𝐧.`) + `\n𝐍𝐞̂́𝐮 𝐦𝐮𝐨̂́𝐧 𝐭𝐮̛̀ 𝐜𝐡𝐨̂́𝐢 𝐡𝐚̃𝐲 𝐧𝐡𝐚̣̂𝐩 𝐥𝐞̣̂𝐧𝐡: ${global.config.PREFIX}𝗿𝗰 𝗿𝗲𝗷𝗲𝗰𝘁\n𝐍𝐞̂́𝐮 𝐦𝐮𝐨̂́𝐧 𝐜𝐡𝐚̂́𝐩 𝐧𝐡𝐚̣̂𝐧 𝐡𝐚̃𝐲 𝐧𝐡𝐚̣̂𝐩 𝐥𝐞̣̂𝐧𝐡: ${global.config.PREFIX}𝐫𝐜 𝐚𝐜𝐜𝐞𝐩𝐭`, headID, (er, i) => {
        if (er) o("Đã có lỗi xảy ra khi cố kết nối với người liên hệ.\nVui lòng thử lại sau.");
        else {
          o("𝐓𝐢̀𝐦 𝐤𝐢𝐞̂́𝐦 𝐭𝐡𝐚̀𝐧𝐡 𝐜𝐨̂𝐧𝐠 !\n𝐇𝐚̃𝐲 𝐜𝐡𝐨̛̀ 𝐥𝐞̣̂𝐧𝐡 𝐤𝐞̂́𝐭 𝐧𝐨̂́𝐢 𝐭𝐮̛̀ 𝐩𝐡𝐢́𝐚 𝐛𝐞̂𝐧 𝐤𝐢𝐚 ⏳");
          rc.isWaiting = true;
          rc.head = headID;
          rcData.push(rc);
          fs.writeFileSync(rcp, JSON.stringify(rcData, null, 4));
        }
      });
      break;

    case 'incognitoHead':
      var rcData = require(rcp);
      var ac = handleReply.data;
      if (body == 1) {
        ac.headIsIncognito = true;
        o(`𝐁𝐚̣𝐧 𝐜𝐡𝐨̣𝐧 𝐚̂̉𝐧 𝐠𝐢𝐚̂́𝐮 𝐭𝐡𝐚̂𝐧 𝐩𝐡𝐚̣̂𝐧 👥\n𝐍𝐞̂́𝐮 𝐦𝐮𝐨̂́𝐧 𝐤𝐞̂́𝐭 𝐭𝐡𝐮́𝐜 𝐜𝐮𝐨̣̂𝐜 𝐭𝐫𝐨̀ 𝐜𝐡𝐮𝐲𝐞̣̂𝐧 𝐡𝐚̃𝐲 𝐧𝐡𝐚̣̂𝐩 𝐥𝐞̣̂𝐧𝐡: ${global.config.PREFIX}𝐫𝐜 𝐞𝐧𝐝`);
      } else if (body == 0) {
        ac.headIsIncognito = false;
        o(`𝐁𝐚̣𝐧 𝐜𝐡𝐨̣𝐧 𝐡𝐢𝐞̣̂𝐧 𝐭𝐡𝐚̂𝐧 𝐩𝐡𝐚̣̂𝐧 💑\n𝐍𝐞̂́𝐮 𝐦𝐮𝐨̂́𝐧 𝐤𝐞̂́𝐭 𝐭𝐡𝐮́𝐜 𝐜𝐮𝐨̣̂𝐜 𝐭𝐫𝐨̀ 𝐜𝐡𝐮𝐲𝐞̣̂𝐧 𝐡𝐚̃𝐲 𝐧𝐡𝐚̣̂𝐩 𝐥𝐞̣̂𝐧𝐡: ${global.config.PREFIX}𝐫𝐜 𝐞𝐧𝐝`);
      }
      ac.isWaiting = false;
      ac.isStarted = true;
      var nameHead = await Users.getNameUser(ac.head);
      var fbUrl = 'fb.com/' + ac.head;
      var msg = (ac.headIsIncognito ? "𝐍𝐠𝐮̛𝐨̛̀𝐢 𝐥𝐢𝐞̂𝐧 𝐡𝐞̣̂ 𝐚̂̉𝐧 𝐝𝐚𝐧𝐡 👥" : `${nameHead} - ${fbUrl}`) + ` 𝐯𝐮̛̀𝐚 𝐜𝐡𝐚̂́𝐩 𝐧𝐡𝐚̣̂𝐧 𝐤𝐞̂́𝐭 𝐧𝐨̂́𝐢 𝐯𝐨̛́𝐢 𝐛𝐚̣𝐧.\n𝐍𝐞̂́𝐮 𝐦𝐮𝐨̂́𝐧 𝐤𝐞̂́𝐭 𝐭𝐡𝐮́𝐜 𝐜𝐮𝐨̣̂𝐜 𝐭𝐫𝐨̀ 𝐜𝐡𝐮𝐲𝐞̣̂𝐧 𝐡𝐚̃𝐲 𝐧𝐡𝐚̣̂𝐩 𝐥𝐞̣̂𝐧𝐡: ${global.config.PREFIX}𝐫𝐜 𝐞𝐧𝐝`;
      await s(msg, ac.root);
      var prevData = rcData.find(e => e.root = ac.root);
      Object.keys(prevData).map((v) => prevData[v] = ac[v]);
      fs.writeFileSync(rcp, JSON.stringify(rcData, null, 4));
      break;

    case 'incognitoRoot':
      var rcData = require(rcp);
      var rc = handleReply.data;
      if (body == 1) {
        rc.rootIsIncognito = true;
        o("𝐁𝐚̣𝐧 𝐯𝐮̛̀𝐚 𝐜𝐡𝐨̣𝐧 𝐚̂̉𝐧 𝐠𝐢𝐚̂́𝐮 𝐭𝐡𝐚̂𝐧 𝐩𝐡𝐚̣̂𝐧 👥");
      } else if (body == 0) {
        rc.rootIsIncognito = false;
        o("𝐁𝐚̣𝐧 𝐯𝐮̛̀𝐚 𝐜𝐡𝐨̣𝐧 𝐡𝐢𝐞̣̂𝐧 𝐭𝐡𝐚̂𝐧 𝐩𝐡𝐚̣̂𝐧 💑");
      }
      var rootName = await Users.getNameUser(rc.root);
      var fbUrl = 'fb.com/' + rc.root;
      s((rc.rootIsIncognito ? "𝐂𝐨́ 𝟏 𝐧𝐠𝐮̛𝐨̛̀𝐢 𝐥𝐢𝐞̂𝐧 𝐡𝐞̣̂ 𝐚̂̉𝐧 𝐝𝐚𝐧𝐡 𝐦𝐮𝐨̂́𝐧 𝐭𝐫𝐨̀ 𝐜𝐡𝐮𝐲𝐞̣̂𝐧 𝐯𝐨̛́𝐢 𝐛𝐚̣𝐧" : `𝐌𝐨̣̂𝐭 𝐧𝐠𝐮̛𝐨̛̀𝐢 𝐭𝐞̂𝐧 ${rootName} - ${fbUrl} 𝐦𝐮𝐨̂́𝐧 𝐭𝐫𝐨̀ 𝐜𝐡𝐮𝐲𝐞̣̂𝐧 𝐯𝐨̛́𝐢 𝐛𝐚̣𝐧.`) + `\n𝐍𝐞̂́𝐮 𝐦𝐮𝐨̂́𝐧 𝐭𝐮̛̀ 𝐜𝐡𝐨̂́𝐢 𝐡𝐚̃𝐲 𝐧𝐡𝐚̣̂𝐩 𝐥𝐞̣̂𝐧𝐡: ${global.config.PREFIX}𝗿𝗰 𝗿𝗲𝗷𝗲𝗰𝘁\n𝐍𝐞̂́𝐮 𝐦𝐮𝐨̂́𝐧 𝐜𝐡𝐚̂́𝐩 𝐧𝐡𝐚̣̂𝐧 𝐡𝐚̃𝐲 𝐧𝐡𝐚̣̂𝐩 𝐥𝐞̣̂𝐧𝐡: ${global.config.PREFIX}𝐫𝐜 𝐚𝐜𝐜𝐞𝐩𝐭`, rc.head, (er, i) => {
        if (er) o("Đã có lỗi xảy ra khi cố kết nối với người liên hệ.\nVui lòng thử lại sau.");
        else {
          o("𝐘𝐞̂𝐮 𝐜𝐚̂̀𝐮 𝐭𝐡𝐚̀𝐧𝐡 𝐜𝐨̂𝐧𝐠\n𝐇𝐚̃𝐲 𝐜𝐡𝐨̛̀ 𝐥𝐞̣̂𝐧𝐡 𝐤𝐞̂́𝐭 𝐧𝐨̂́𝐢 𝐭𝐮̛̀ 𝐩𝐡𝐢́𝐚 𝐛𝐞̂𝐧 𝐤𝐢𝐚 ⏳");
          rc.isWaiting = true;
          rcData.push(rc);
          fs.writeFileSync(rcp, JSON.stringify(rcData));
        }
      });
      break;
  }
}

module.exports.handleEvent = async function ({ event, api, Users }) {
  var { threadID, isGroup, body } = event;
  var tiny = async function (url) {
    const { data } = await axios.get('https://tinyurl.com/api-create.php?url=' + encodeURIComponent(url));
    return data;
  }
  if (isGroup == false) {
    if (body.startsWith(global.config.PREFIX)) return;
    const rcData = require(rcp);
    const o = (msg, id) => api.sendMessage(msg, id || threadID);
    if (rcData.some(e => (e.head == threadID || e.root == threadID))) {
      var data = rcData.find(e => (e.head == threadID || e.root == threadID));
      if (data.isStarted == true) {
        var sender = data.root == threadID ? data.root : data.head;
        var receiver = data.root == threadID ? data.head : data.root;
        var senderIncognito = data.root == threadID ? data.rootIsIncognito : data.headIsIncognito;
        if (senderIncognito == false) {
          var name = await Users.getNameUser(sender);
          body = `${name} 𝐠𝐮̛̉𝐢 𝐭𝐢𝐧 𝐧𝐡𝐚̆́𝐧 𝐭𝐨̛́𝐢 𝐛𝐚̣𝐧 💌:\n` + body;
        } else body = "𝐍𝐠𝐮̛𝐨̛̀𝐢 𝐛𝐢́ 𝐚̂̉𝐧 𝐠𝐮̛̉𝐢 𝐭𝐢𝐧 𝐧𝐡𝐚̆́𝐧 𝐭𝐨̛́𝐢 𝐛𝐚̣𝐧 💌:\n" + body;
        if (event.attachments.length != 0) {
          body += '\n𝐓𝐞̣̂𝐩 𝐠𝐮̛̉𝐢 𝐤𝐞̀𝐦 🗂:'
          for (var e of event.attachments) {
            var u = await tiny(e.url);
            body += '\n- ' + u;
          }
        }
        return o(body, receiver);
      }
    }
  }
}