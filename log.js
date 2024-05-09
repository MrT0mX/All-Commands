module.exports.config = {
  name: "log",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "TuanDzz",
  description: "Xem bản hệ thống on/off",
  commandCategory: "Hệ Thống",
  usages: "",
  cooldowns: 3,
  denpendencies: {
  }
};

module.exports.run = async function ({ api, event, Threads, getText }) {
  const fs = global.nodemodule["fs-extra"];
  var { threadID, messageID, senderID } = event;
  //if (senderID == global.data.botID) return;

  var dataThread = (await Threads.getData(threadID));
  var data = dataThread.data;
  //console.log(data)
  //var prefix = data.PREFIX;
  var rankup = data.rankup;
  var resend = data.resend;
  var log = data.log;
  var tagadmin = data.tagadmin;
  var guard = data.guard;
  var antiout = data.antiout;
  //prefix == null ? rankup = `!` : rankup = `${prefix}`;
  log == null ? log = `true` : log = `${log}`;
  rankup == null ? rankup = `false` : rankup = `${rankup}`;
  resend == null ? resend = `false` : resend = `${resend}`;
  tagadmin == null ? tagadmin = `true` : tagadmin = `${tagadmin}`;
  guard == null ? guard = `true` : guard = `${guard}`;
  antiout == null ? antiout = `true` : antiout = `${antiout}`;
return api.sendMessage(`ㅤㅤ☣️ 𝐁𝐚̉𝐧𝐠 𝐇𝐞̣̂ 𝐓𝐡𝐨̂́𝐧𝐠 ☣️\n\n🍄──── •🦋• ────🍄\n❯🍉 𝐋𝐨𝐠: ${log}\n❯🍇 𝐑𝐚𝐧𝐤𝐮𝐩: ${rankup}\n❯🍓 𝐑𝐞𝐬𝐞𝐧𝐝: ${resend}\n❯🥕 𝐓𝐚𝐠 𝐚𝐝𝐦𝐢𝐧: ${tagadmin}\n❯🍑 𝐂𝐡𝐨𝐧𝐠𝐜𝐮𝐨𝐩𝐛𝐨𝐱 ${guard}\n❯🍒 𝐀𝐧𝐭𝐢𝐨𝐮𝐭: ${antiout}\n🍄──── •🦋• ────🍄`, threadID, messageID);
}