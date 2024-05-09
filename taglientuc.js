module.exports.config = {
  name: "taglientuc",
  version: "1.0.0",
  hasPermssion: 1,
  credits: "Yae Miko",
  description: "Tag liên tục người bạn tag trong 5 lần\nCó thể gọi là gọi hồn người đó",
  commandCategory: "Box Chat",
  usages: "taglientuc @mention",
  cooldowns: 1,
  dependencies: {
      "fs-extra": "",
      "axios": ""
  }
}

module.exports.run = async function({ api, args, Users, event }) {
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
const { mentions, threadID, messageID } = event;
function reply(body) {
  api.sendMessage(body, threadID, messageID);
}
if (!global.client.modulesTaglientuc) global.client.modulesTaglientuc = [];
const dataTaglientuc = global.client.modulesTaglientuc;
if (!dataTaglientuc.some(item => item.threadID == threadID)) dataTaglientuc.push({ threadID, targetID: []});
const thisTaglientuc = dataTaglientuc.find(item => item.threadID == threadID);
if (args[0] == "stop") {
  if (args[1] == "all") {
    thisTaglientuc.targetID = [];
    return reply("Đã tắt gọi hồn tất cả");
  }
  else {
    if (Object.keys(mentions).length == 0) return reply("Hãy tag người bạn muốn dừng gọi hồn");
    let msg = "";
    for (let id in mentions) {
      
      const userName = mentions[id].replace("@", "");
      if (!thisTaglientuc.targetID.includes(id)) msg += `\n${userName} hiện tại không bị gọi hồn`;
      else {
        thisTaglientuc.targetID.splice(thisTaglientuc.targetID.findIndex(item => item == id, 1));
        msg += `\nĐã tắt gọi hồn ${userName}`;
      }
    }
    return reply(msg);
  }
}
else {
  let solantag = args[args.length - 2];
  let time = args[args.length - 1];
                // Check syntax
  if (Object.keys(mentions) == 0) return reply("Vui lòng tag người bạn muốn gọi hồn");
  if (!solantag || !time) return global.utils.throwError(this.config.name, threadID, messageID);
  if (isNaN(solantag)) return reply("Số lần tag phải là một con số");
  if (isNaN(time)) return reply("Thời gian giữa mỗi lần tag phải là một con số");
  time = time*1000;
  const target = Object.keys(mentions)[0];
  if (thisTaglientuc.targetID.includes(target)) return reply("Người này đang được gọi hồn");
  thisTaglientuc.targetID.push(target);
  reply(`𝐓𝐡𝐞̂𝐦 𝐭𝐡𝐚̀𝐧𝐡 𝐜𝐨̂𝐧𝐠 ${mentions[target].replace("@", "")} 𝐯𝐚̀𝐨 𝐝𝐚𝐧𝐡 𝐬𝐚́𝐜𝐡 𝐠𝐨̣𝐢 𝐡𝐨̂̀𝐧 𝐯𝐨̛́𝐢:\n𝐒𝐨̂́ 𝐥𝐚̂̀𝐧 𝐭𝐚𝐠 𝐥𝐚̀: ${solantag}\n𝐓𝐡𝐨̛̀𝐢 𝐠𝐢𝐚𝐧 𝐠𝐢𝐮̛̃𝐚 𝐜𝐚́𝐜 𝐥𝐚̂̀𝐧 𝐭𝐚𝐠 𝐥𝐚̀ ${time/1000} 𝐠𝐢𝐚̂𝐲`);
  const noidungtag = args.slice(0, args.length - 2).join(" ").replace("@", "");
  
  let i = 0;
  while (true) {
    await delay(time);
    if (i == solantag) {
      thisTaglientuc.targetID.splice(thisTaglientuc.targetID.findIndex(item => item == target, 1));
      break;
    }
    if (!global.client.modulesTaglientuc.find(item => item.threadID == threadID).targetID.includes(target)) break;
    await api.sendMessage({
      body: noidungtag,
      mentions: [{ id: target, tag: noidungtag }]
    }, threadID);
    i++;
  }
}
};