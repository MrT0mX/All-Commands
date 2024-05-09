module.exports.config = {
  name: "stk",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "TuanDz",
  description: "Donate cho admin",
  commandCategory: "Admin",
  usages: "stk",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
  var link = [
"https://i.imgur.com/CygJIqC.gif",
"https://i.imgur.com/l6wrLGT.gif",
"https://i.imgur.com/x5B3NPs.gif",
"https://i.imgur.com/CKRxNP0.gif",
  ];
	  var callback = () => api.sendMessage({body:`=== 🌸 [ 𝐃𝐎𝐍𝐀𝐓𝐄 ] 🌸 ===\n
💕💕 𝗦𝗧𝗞 𝗠𝗕𝗕𝗔𝗡𝗞 💕💕\n𝗦𝗧𝗞: 𝟬𝟱𝟴𝟮𝟲𝟬𝟳𝟬𝟲𝟱\n𝗡𝗚𝗨𝗬𝗘𝗡 𝗣𝗛𝗔𝗠 𝗠𝗜𝗡𝗛 𝗧𝗨𝗔𝗡\n\n💓 𝗦𝗧𝗞 𝗩𝗜𝗘𝗧𝗖𝗢𝗠𝗕𝗔𝗡𝗞 💓\n𝗦𝗧𝗞: 𝟵𝟱𝟴𝟮𝟲𝟬𝟳𝟬𝟲𝟱\n𝗡𝗚𝗨𝗬𝗘𝗡 𝗣𝗛𝗔𝗠 𝗠𝗜𝗡𝗛 𝗧𝗨𝗔𝗡\n\n𝐌𝐢̀𝐧𝐡 𝐜𝐡𝐨 𝐭𝐡𝐮𝐞̂ 𝐛𝐨𝐭 𝐯𝐨̛́𝐢 𝐠𝐢𝐚́ 𝟎đ 𝐧𝐡𝐮̛𝐧𝐠 𝐛𝐚̣𝐧 𝐧𝐚̀𝐨 𝐜𝐨́ 𝐥𝐨̀𝐧𝐠 𝐭𝐨̂́𝐭 𝐭𝐡𝐢̀ 𝐭𝐡𝐢̉𝐧𝐡 𝐭𝐡𝐨𝐚̉𝐧𝐠 𝐛𝐚𝐧𝐤 𝐢́𝐭 𝐦𝐮𝐚 𝐦𝐢̀ 𝐠𝐨́𝐢, 𝐦𝐚̃𝐢 𝐢𝐮𝐮𝐮 ❤️`,attachment: fs.createReadStream(__dirname + "/cache/5.gif")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.gif")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.gif")).on("close",() => callback());
   };