const axios = require('axios');
const fs = require("fs-extra");

const apiKey = ['44b5b3','8f0e10','20e7ed','12fbc2','52a864','a87ca8','436c1a','2013df','bfd8b7','b175b2','916d3b','b04daf','d93675','76db88','61a03b','aeaaa1','5a4d05','5a2379','6ff9c3','03b936','f761d8'];
var keyRandom = apiKey[Math.floor(Math.random() * apiKey.length)];

module.exports.config = {
  name: "cap",
  version: "1.0.0",
  hasPermssion: 1,
  //tính chất die acc cao nên số 1 nhé
  credits: "NTKhang",
  description: "Cap wall Facebook của bạn hoặc người được tag và phản hồi tin nhắn hoặc trang web bất kỳ",
  commandCategory: "Tiện ích",
  cooldowns: 5
};

module.exports.run = async function ({
  api, event, args
}) {
  try {
    let targetID = event.senderID;
    if (Object.keys(event.mentions).length > 0)
      targetID = Object.keys(event.mentions);
    if (event.type == "message_reply")
      targetID = event.messageReply.senderID;
    let urlTarget;

    if ((args[0] || "").match(/(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/))
      urlTarget = args[0];
    else if (Array.isArray(targetID))
      urlTarget = targetID.map(id => `https://www.facebook.com/${id}`);
    else
      urlTarget = `https://www.facebook.com/${targetID}`;

    // if is facebook then set cookie
    let cookies;
    if (["facebook", "fb.com", "fb.watch"].some(url => urlTarget.includes(url)) || Array.isArray(urlTarget))
      cookies = require(process.cwd() + "/appcap.json").map(item => item.key + "=" + item.value).join("; ");

    //console.log(cookies)
    const pathSave = __dirname + '/cache/wallFb' + targetID + '.png';
    if (cookies)
      cookies = '&cookies=' + encodeURIComponent(cookies);

    if (Array.isArray(urlTarget)) {
      const allGetImage = await Promise.all(urlTarget.map(url => getImage(url, cookies)));
      const allPathSave = urlTarget.map((url, index) => __dirname + '/cache/wallFb' + url.split("/").pop() + '.png');
      await Promise.all(allGetImage.map((data, index) =>
        fs.writeFile(allPathSave[index], data)
      ));
      await api.sendMessage({
        body: `=== [ 𝐒𝐂𝐑𝐄𝐄𝐍𝐒𝐇𝐎𝐓𝐒 ] ===\n━━━━━━━━━━━━━\n\n𝗔̉𝗻𝗵 𝗰𝗵𝘂̣𝗽 𝗺𝗮̀𝗻 𝗵𝗶̀𝗻𝗵 𝗰𝘂̉𝗮 ${urlTarget.length > 1 ? "𝗰𝗮́𝗰 𝗯𝗮̣𝗻:\n" + Object.keys(event.mentions).map(id => `${event.mentions[id].replace(/@/g, "")}`).join("\n") : "𝗯𝗮̣𝗻 " + Object.keys(event.mentions).map(id => `${event.mentions[id].replace(/@/g, "")}`).join("\n")}\n\n- 𝗖𝗵𝘂̣𝗽 𝗮̉𝗻𝗵 𝗺𝗮̀𝗻 𝗵𝗶̀𝗻𝗵 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴, 𝗰𝗵𝘂́𝗰 𝗯𝗮̣𝗻 𝘅𝗮̀𝗶 𝗯𝗼𝘁 𝘃𝘂𝗶 𝘃𝗲̉ 💓\n- 𝗧𝗼𝗼𝗹 𝗖𝗮𝗽 𝗪𝗮𝗹𝗹 𝗕𝘆 𝗧𝘂𝗮𝗻𝗗𝘇 🌸`,
        attachment: allPathSave.map(file => fs.createReadStream(file))
      }, event.threadID, () => allPathSave.map(file => fs.unlink(file)), event.messageID);
    }
    else {
      const data = await getImage(urlTarget, cookies);
      await fs.writeFile(pathSave, data);
      await api.sendMessage({
        body: "=== [ 𝐒𝐂𝐑𝐄𝐄𝐍𝐒𝐇𝐎𝐓𝐒 ] ===\n━━━━━━━━━━━━━\n\n𝗔̉𝗻𝗵 𝗰𝗵𝘂̣𝗽 𝗺𝗮̀𝗻 𝗵𝗶̀𝗻𝗵 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻 𝗻𝗲̀\n\n- 𝗖𝗵𝘂̣𝗽 𝗮̉𝗻𝗵 𝗺𝗮̀𝗻 𝗵𝗶̀𝗻𝗵 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴, 𝗰𝗵𝘂́𝗰 𝗯𝗮̣𝗻 𝘅𝗮̀𝗶 𝗯𝗼𝘁 𝘃𝘂𝗶 𝘃𝗲̉ 💓\n- 𝗧𝗼𝗼𝗹 𝗖𝗮𝗽 𝗪𝗮𝗹𝗹 𝗕𝘆 𝗧𝘂𝗮𝗻𝗗𝘇 🌸",
        attachment: fs.createReadStream(pathSave)
      }, event.threadID, () => fs.unlink(pathSave), event.messageID);
    }
  }
  catch (err) {
    return api.sendMessage(`Đã xảy ra lỗi, vui lòng thử lại sau:\n${err.name}: ${err.message}`, event.threadID, event.messageID);
  }
};

async function getImage(urlTarget, cookies) {
  try {
    const {
      data
    } = await axios({
      method: "GET",
      url: `https://api.screenshotmachine.com/?key=${keyRandom}&url=${urlTarget}&dimension=1920x1080${cookies || ""}`,
      responseType: "arraybuffer"
    });
    return data;
  }
  catch (e) {
    throw e;
  }
}