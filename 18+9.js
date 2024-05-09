module.exports.config = {
  name: "approved",
  version: "1.0.2",
  hasPermssion: 2,
  credits: "MrTomXxX",
  description: "approve gc,
  commandCategory: "Người hỗ trợ bot",
  cooldowns: 5
};


const dataPath = __dirname + "/cache/approvedThreads.json";
const pendingPath = __dirname + "/cache/pendingThreads.json";
const fs = require("fs");

module.exports.onLoad = () => {
  if (!fs.existsSync(dataPath)) fs.writeFileSync(dataPath, JSON.stringify([]));
  if (!fs.existsSync(pendingPath)) fs.writeFileSync(pendingPath, JSON.stringify([]));
}

module.exports.run = async ({ event, api, args }) => {
  const { threadID, messageID, senderID } = event;
  let data = JSON.parse(fs.readFileSync(dataPath));
  let pending = JSON.parse(fs.readFileSync(pendingPath));
  let msg = "";
  let idBox = (args[0]) ? args[0] : threadID;
  if (args[0] == "list") {
    msg = "LIST OF APPROVED BOXES! ";
    let count = 0;
    for (e of data) {
      msg += `
${count += 1}. ID: ${e}`;
    }
    api.sendMessage(msg, threadID, messageID);
  }
  else if (args[0] == "del") {
    idBox = (args[1]) ? args[1] : event.threadID;
    if (isNaN(parseInt(idBox))) return api.sendMessage("Not a number.", threadID, messageID);
    if (!data.includes(idBox)) return api.sendMessage("The box was not approved before! ", threadID, messageID);
    api.sendMessage(`Box ${idBox} has been removed from bot permission list `, threadID, () => {
      if (!pending.includes(idBox)) pending.push(idBox);
      data.splice(data.indexOf(idBox), 1);
      fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
      fs.writeFileSync(pendingPath, JSON.stringify(pending, null, 2));
    }, messageID)
  }
  else if (args[0] == "pending") {
    msg = "LIST OF BOXES WAITING FOR APPROVAL!";
    let count = 0;
    for (e of pending) {
      let name = (await api.getThreadInfo(e)).name || "Nhóm Chat";
      msg += `
${count += 1}. ${name}
ID: ${e}`;
    }
    api.sendMessage(msg, threadID, messageID);
  }
  else if (isNaN(parseInt(idBox))) api.sendMessage("Id you entered invalid ", threadID, messageID);
  else if (data.includes(idBox)) api.sendMessage(`ID ${idBox} has been approved in advance! `, threadID, messageID);
  else api.sendMessage("» Box has been approved by MrTomXxX.
use help to see more commands.", idBox, (error, info) => {
    if (error) return api.sendMessage("An error has occurred, making sure that the ID you entered is valid and the bot is in the box! ", threadID, messageID);
    else {
      data.push(idBox);
      pending.splice(pending.indexOf(idBox), 1);
      fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
      fs.writeFileSync(pendingPath, JSON.stringify(pending, null, 2));
      api.sendMessage(`» Successful box approval:
${idBox}`, threadID, messageID);
    }
  });
                                                 }