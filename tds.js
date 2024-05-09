module.exports.config = {
	name: "tds",
	version: "0.0.1",
	hasPermssion: 0,
	credits: "Raiden Ei",
	description: "Kiểm tra số xu trao đổi sub",
	commandCategory: "Công Cụ",
	usages: "+ token",
	cooldowns: 0,
};

module.exports.run = async function({ api, event, args, Currencies, utils,Users,Threads }) {
           let axios = require('axios')
           let { threadID, senderID, messageID } = event;
          
           if(args.length == 0) api.sendMessage("Thiếu token tds ?",threadID,messageID)
           else{
           let res = await axios.get(encodeURI(`https://traodoisub.com/api/?fields=profile&access_token=${args[0]}`));
           console.log(res.data)
           var i = res.data;
           var ii = i.data;
           var msg = `🐰 𝗧𝗲̂𝗻 𝘁𝗮̀𝗶 𝗸𝗵𝗼𝗮̉𝗻: ${ii.user}\n💸 𝗫𝘂: ${ii.xu}\r\n🔰 𝐂𝐡𝐞𝐜𝐤 𝐁𝐲 𝐓𝐮𝐚̂́𝐧 𝐃𝐳`
           api.sendMessage(msg,threadID,messageID)
          }
       }