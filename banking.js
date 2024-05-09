module.exports.config = {
	name: "banking",
	version: "1.0.0",
	credits: "HungCho",
	description: "Trao đổi tiền/exp",
	usages: "",
    commandCategory: "Kiếm Tiền",
	cooldowns: 0,
	dependencies: {
        "fs-extra" : ""
    }
};
module.exports.onLoad = function () {
    const fs = global.nodemodule["fs-extra"];

	if (!fs.existsSync(__dirname + "/cache/bill.json")) {
		const requestList = [];
		fs.writeFileSync(__dirname + "/cache/bill.json", JSON.stringify(requestList));
	}
}
module.exports.handleReply = async function({ api, event, handleReply, Currencies }) {
    const fs = global.nodemodule["fs-extra"];
	const dirFile = __dirname + "/cache/bill.json";

	var getList = fs.readFileSync(dirFile);
	var getData = JSON.parse(getList);

    if (handleReply.author != event.senderID) return;
    var data = await Currencies.getData(handleReply.author);
    var exp =  data.exp;
    var money = data.money
    var d = new Date();
    var date = d.getDate()+'/'+(d.getMonth() + 1 )+'/'+d.getFullYear();
	var time = d.getHours() + ":" + d.getMinutes();
    switch (handleReply.type) {
        case "banking": {
            switch (event.body) {
                case "1": {
                    return api.sendMessage(
                        "𝗕𝗮̣𝗻 𝗰𝗼́ 𝘁𝗵𝗲̂̉ 𝗿𝗲𝗽𝗹𝘆 𝘀𝗼̂́ 𝘁𝗶𝗲̂̀𝗻 𝗰𝗮̂̀𝗻 𝗰𝗵𝘂𝘆𝗲̂̉𝗻 𝘀𝗮𝗻𝗴 𝗲𝘅𝗽 ! 𝟭𝟬 đô = 𝟭 𝗲𝘅𝗽."
                  , event.threadID, (error, info) => {
                      global.client.handleReply.push({
                          name: this.config.name,
                          messageID: info.messageID,
                          author: event.senderID,
                          type: "money"
                      });
                  }, event.messageID);
                } 
                case "2": {
                    return api.sendMessage(
                        "𝗕𝗮̣𝗻 𝗰𝗼́ 𝘁𝗵𝗲̂̉ 𝗿𝗲𝗽𝗹𝘆 𝘀𝗼̂́ 𝗲𝘅𝗽 𝗰𝗮̂̀𝗻 𝗰𝗵𝘂𝘆𝗲̂̉𝗻 𝘀𝗮𝗻𝗴 𝘁𝗶𝗲̂̀𝗻 ! 𝟱 𝗲𝘅𝗽 = 𝟭 đô."
                  , event.threadID, (error, info) => {
                      global.client.handleReply.push({
                          name: this.config.name,
                          messageID: info.messageID,
                          author: event.senderID,
                          type: "exp"
                      });
                  }, event.messageID);
                }
                default:
                    break;
            }
            return;
          }
          case "exp": {
            var content = event.body;
            if(content > exp) api.sendMessage("Exp của bạn không đủ ? vui lòng cào phím nhiều hơn",event.threadID,event.messageID)
            else 
            {
            await Currencies.increaseMoney(handleReply.author, parseInt(content / 5));
            var exp = ((await Currencies.getData(handleReply.author)).exp) - parseInt(content);
            await Currencies.setData(handleReply.author, { exp })
            var msg = `💸𝗚𝗶𝗮𝗼 𝗱𝗶̣𝗰𝗵 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴 !\n𝗧𝗵𝗼̛̀𝗶 𝗴𝗶𝗮𝗻: ${time} - ${date}\n𝗖𝗵𝗶 𝘁𝗶𝗲̂́𝘁: 𝗖𝗵𝘂𝘆𝗲̂̉𝗻 ${content} exp để lấy ${content / 5} đô.`
            api.sendMessage(msg,handleReply.author);
            const suggest = msg;
            getData.push(suggest);
            api.sendMessage("𝗚𝗶𝗮𝗼 𝗱𝗶̣𝗰𝗵 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻 đ𝗮̃ đ𝘂̛𝗼̛̣𝗰 𝗹𝘂̛𝘂 𝘁𝗿𝗲̂𝗻 𝗵𝗲̣̂ 𝘁𝗵𝗼̂́𝗻𝗴 !",event.threadID, () => fs.writeFileSync(dirFile, JSON.stringify(getData)),event.messageID);
          
            }
          break;
       }
       case "money": {
        var content = event.body;
        if(content > money) api.sendMessage("Tiền của bạn không đủ ? vui lòng theo thầy Huấn bươm trải !",event.threadID,event.messageID)
        else 
        {
            await Currencies.increaseMoney(event.senderID, parseInt("-"+content))
        var exp = ((await Currencies.getData(handleReply.author)).exp) + parseInt(content / 10);
        await Currencies.setData(handleReply.author, { exp })
        var msg = `💸𝗚𝗶𝗮𝗼 𝗱𝗶̣𝗰𝗵 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴 !\n𝗧𝗵𝗼̛̀𝗶 𝗴𝗶𝗮𝗻: ${time} - ${date}\n𝗖𝗵𝗶 𝘁𝗶𝗲̂́𝘁: 𝗖𝗵𝘂𝘆𝗲̂̉𝗻 ${content} đô để lấy ${content / 10} exp.`
        api.sendMessage(msg,handleReply.author);
        const suggest = msg;
        getData.push(suggest);
        api.sendMessage("𝗚𝗶𝗮𝗼 𝗱𝗶̣𝗰𝗵 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻 đ𝗮̃ đ𝘂̛𝗼̛̣𝗰 𝗹𝘂̛𝘂 𝘁𝗿𝗲̂𝗻 𝗵𝗲̣̂ 𝘁𝗵𝗼̂́𝗻𝗴 !",event.threadID, () => fs.writeFileSync(dirFile, JSON.stringify(getData)),event.messageID);
      
        }
      break;
   }
      }
    }
module.exports.run = async function({ api, event, args }) {
    const fs = global.nodemodule["fs-extra"];
	const dirFile = __dirname + "/cache/bill.json";

	var getList = fs.readFileSync(dirFile);
	var getData = JSON.parse(getList);

    if(!args[0])return api.sendMessage(
                "◆━━◆ 🏛 𝐁𝐀𝐍𝐊𝐈𝐍𝐆 ◆━━◆" +
                "\n» 𝐌𝐨̛̀𝐢 𝐛𝐚̣𝐧 𝐧𝐡𝐚̣̂𝐩 𝐥𝐮̛̣𝐚 𝐜𝐡𝐨̣𝐧 «" +
                "\n\n1. 𝐂𝐡𝐮𝐲𝐞̂̉𝐧 𝐭𝐢𝐞̂̀𝐧 𝐬𝐚𝐧𝐠 𝐞𝐱𝐩 ❄️." +
                "\n2. 𝗖𝗵𝘂𝘆𝗲̂̉𝗻 𝗲𝘅𝗽 𝘀𝗮𝗻𝗴 𝘁𝗶𝗲̂̀𝗻 💦." +
                "\n3. 𝐔𝐩𝐝𝐚𝐭𝐞 𝐬𝐚𝐮 ⚒." +
                "\n\n» 𝐇𝐚̃𝐲 𝐫𝐞𝐩𝐥𝐲 𝐭𝐢𝐧 𝐧𝐡𝐚̆́𝐧 𝐯𝐚̀ 𝐜𝐡𝐨̣𝐧 𝐭𝐡𝐞𝐨 𝐬𝐨̂́ «"
            , event.threadID, (error, info) => {
                client.handleReply.push({
                    name: this.config.name,
                    messageID: info.messageID,
                    author: event.senderID,
                    type: "banking"
                });
            }, event.messageID);
     
    if (args[0] == "check") {
        var workList = "";
			getData.map(item => workList += `\n ${item}`);
			return api.sendMessage(`${workList}`, event.threadID, event.messageID);
		}
        
  }