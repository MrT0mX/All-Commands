module.exports.config = {
    name: "lamviec",
    version: "1.0.2",
    hasPermssion: 0,
    credits: "Raiden Ei", 
    description: "Làm việc để có tiền, có làm thì mới có ăn",
    commandCategory: "Kiếm Tiền",
    cooldowns: 5,
    envConfig: {
        cooldownTime: 1200000
    }
};
module.exports.languages = {
    "vi": {
        "cooldown": "🌸 𝗕𝗮̣𝗻 𝘃𝘂̛̀𝗮 𝗹𝗮̀𝗺 𝘃𝗶𝗲̣̂𝗰 𝗿𝗼̂̀𝗶, 𝗾𝘂𝗮𝘆 𝗹𝗮̣𝗶 𝘀𝗮𝘂: %1 phút %2 giây."      
    },
    "en": {
        "cooldown": "⚡️You're done, come back later: %1 minute(s) %2 second(s)."
    }
}
module.exports.handleReply = async ({ event, api, handleReply, Currencies, getText }) => {
    const { threadID, messageID, senderID } = event;
    let data = (await Currencies.getData(senderID)).data || {};
//random coins nhận được khi làm việc ít nhất 200
var coinscn = Math.floor(Math.random() * 100000) + 200; //random coins khi làm ở khu công nghiệp
var coinsdv = Math.floor(Math.random() * 170000) + 100; //random coins khi làm ở khu dịch vụ
var coinsmd = Math.floor(Math.random() * 300000) + 400; //random coins khi làm ở mỏ dầu
var coinsq = Math.floor(Math.random() * 200000) + 90; //random coins khi khai thác quặng
var coinsdd = Math.floor(Math.random() * 50000) + 500; //random coins khi đào đá
var coinsdd1 = Math.floor(Math.random() * 400000) + 1000; //random coins khi đào đá
var coinsex1 = Math.floor(Math.random() * 300000) + 420;
var coinsex12 = Math.floor(Math.random() * 300000) + 420;
//random công việc cần làm
var rdcn = ['𝘁𝘂𝘆𝗲̂̉𝗻 𝗱𝘂̣𝗻𝗴 𝗻𝗵𝗮̂𝗻 𝘃𝗶𝗲̂𝗻 𝗰𝗵𝗼 𝗧𝘂𝗮̂́𝗻', '𝗾𝘂𝗮̉𝗻 𝘁𝗿𝗶̣ 𝗸𝗵𝗮́𝗰𝗵 𝘀𝗮̣𝗻', '𝘁𝗮̣𝗶 𝗻𝗵𝗮̀ 𝗺𝗮́𝘆 ', '𝗯𝗲̂́𝗽 𝘁𝗿𝘂̛𝗼̛̉𝗻𝗴 𝘁𝗿𝗼𝗻𝗴 𝗻𝗵𝗮̀ 𝗵𝗮̀𝗻𝗴', '𝗰𝗼̂𝗻𝗴 𝗻𝗵𝗮̂𝗻', '𝗽𝗵𝘂̣ 𝗵𝗼̂̀', '𝗮̆𝗻 𝘅𝗶𝗻 𝟰𝟬𝟬𝘁𝗿', '𝗯𝗮́𝗻 𝗵𝗮̀𝗻𝗴 𝗼𝗻𝗹𝗶𝗻𝗲', '𝗯𝗮́𝗻 𝗵𝗮̀𝗻𝗴 𝗼𝗻𝗹𝗶𝗻𝗲', '𝗹𝗮̀𝗺 𝘁𝗵𝘂̛ 𝗸𝘆́ 𝗰𝗵𝗼 𝘁𝘂𝗮̂́𝗻']; //random công việc khi làm ở khu công nghiệp
var work1 = rdcn[Math.floor(Math.random() * rdcn.length)];   

var rddv = ['𝘀𝘂̛̉𝗮 𝗼̂́𝗻𝗴 𝗻𝘂̛𝗼̛́𝗰', '𝘀𝘂̛̉𝗮 𝗺𝗮́𝘆 𝗹𝗮̣𝗻𝗵', '𝗯𝗮́𝗻 𝗸𝗲𝗺 𝘁𝗿𝗼̣̂𝗻', '𝗽𝗵𝗮́𝘁 𝘁𝗼̛̀ 𝗿𝗼̛𝗶', '𝘀𝗵𝗶𝗽𝗽𝗲𝗿', '𝘀𝘂̛̉𝗮 𝗣𝗖', '𝗵𝘂̛𝗼̛́𝗻𝗴 𝗱𝗮̂̃𝗻 𝘃𝗶𝗲̂𝗻 𝗱𝘂 𝗹𝗶̣𝗰𝗵', '𝘆 𝘁𝗮́', '𝗺𝗮𝘀𝘀𝗮𝗴𝗲 𝗰𝗵𝗼 𝘁𝘂𝗮̂́𝗻', '𝗺𝗮𝘀𝘀𝗮𝗴𝗲 𝘁𝗿𝗮́ 𝗵𝗶̀𝗻𝗵 𝟭𝟴+', '𝗰𝗮̆́𝘁 𝘁𝗼́𝗰']; //random công việc khi làm ở khu dịch vụ
var work2 = rddv[Math.floor(Math.random() * rddv.length)]; 

var rdmd = ['𝗸𝗶𝗲̂́𝗺 𝟭𝟯 𝘁𝗵𝘂̀𝗻𝗴 𝗱𝗮̂̀𝘂', '𝗸𝗶𝗲̂́𝗺 𝟴 𝘁𝗵𝘂̀𝗻𝗴 𝗱𝗮̂̀𝘂', '𝗸𝗶𝗲̂́𝗺 𝟵 𝘁𝗵𝘂̀𝗻𝗴 𝗱𝗮̂̀𝘂', '𝗸𝗶𝗲̂́𝗺 𝟳 𝘁𝗵𝘂̀𝗻𝗴 𝗱𝗮̂̀𝘂', '𝗮̆𝗻 𝗰𝘂̛𝗼̛́𝗽 𝗱𝗮̂̀𝘂', '𝗯𝗮́𝗻 𝗱𝗮̂̀𝘂 𝗴𝗶𝗮̉', ]; //random công việc khi làm ở mỏ dầu
var work3 = rdmd[Math.floor(Math.random() * rdmd.length)]; 

var rdq = ['𝗾𝘂𝗮̣̆𝗻𝗴 𝘀𝗮̆́𝘁', '𝗾𝘂𝗮̣̆𝗻𝗴 𝘃𝗮̀𝗻𝗴', '𝗾𝘂𝗮̣̆𝗻𝗴 𝘁𝗵𝗮𝗻', '𝗾𝘂𝗮̣̆𝗻𝗴 𝗰𝗵𝗶̀', '𝗾𝘂𝗮̣̆𝗻𝗴 𝗻𝗵𝗼̂𝗺', '𝗾𝘂𝗮̣̆𝗻𝗴 𝗱𝗮̂̀𝘂']; //random công việc khi khai thác quặng
var work4 = rdq[Math.floor(Math.random() * rdq.length)]; 

var rddd = ['𝗸𝗶𝗺 𝗰𝘂̛𝗼̛𝗻𝗴', '𝘃𝗮̀𝗻𝗴', '𝘁𝗵𝗮𝗻', '𝗻𝗴𝗼̣𝗰 𝗹𝘂̣𝗰 𝗯𝗮̉𝗼', '𝘀𝗮̆́𝘁', '𝘀𝘁𝗼𝗻𝗲', '𝗹𝘂̛𝘂 𝗹𝘆', '𝘅𝘂̛𝗼̛𝗻𝗴 𝗸𝗵𝘂̉𝗻𝗴 𝗹𝗼𝗻𝗴']; //random công việc khi đào đá
var work5 = rddd[Math.floor(Math.random() * rddd.length)]; 

var rddd1 = ['𝗸𝗵𝗮́𝗰𝗵 𝘃𝗶𝗽', '𝗸𝗵𝗮́𝗰𝗵 𝗾𝘂𝗲𝗻', '𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗹𝗮̣', '𝗰𝗵𝗮̀𝗻𝗴 𝗸𝗵𝗼̛̀', '𝗮𝗻𝗵 𝗹𝗮̣ 𝗺𝗮̣̆𝘁', '𝗮𝗻𝗵 𝘁𝗮̂𝘆', '𝗼̂𝗻𝗴 𝗴𝗶𝗮̀', '𝗻𝗵𝗼́𝗰 𝗺𝗼̛́𝗶 𝗹𝗼̛́𝗻']; //random công việc khi đào đá
var work6 = rddd1[Math.floor(Math.random() * rddd1.length)];

  var rdex1 = ['𝗹𝗮̀𝗺 𝗼̂ 𝘀𝗶𝗻 𝗰𝗵𝗼 𝗮𝗱𝗺𝗶𝗻', '𝗹𝗮̀𝗺 𝗯𝗼̂̀𝗻 𝗰𝗮̂̀𝘂 𝗻𝗵𝘂̛ 𝗱𝘂𝗯𝗮𝗶', '𝗯𝗮̆́𝘁 𝗰𝘂̛𝗼̛́𝗽', '𝗹𝗮̀𝗺 𝗰𝗮𝘃𝗲 ', '𝗰𝗵𝗮𝘁 𝘀𝗲𝘅 𝘃𝗼̛́𝗶 𝗮𝗱𝗺𝗶𝗻', '𝘁𝗵𝘂̉ 𝗱𝗮̂𝗺', '𝗰𝗵𝗮𝘁 𝘀𝗲𝘅']; //random công việc khi thử thách 
var work7 = rdex1[Math.floor(Math.random() * rdex1.length)];

  var rdex12 = ['𝘁𝗵𝘂 𝘁𝗶𝗲̂̀𝗻 𝗯𝗮̉𝗼 𝗸𝗲̂', '𝗴𝗶𝗮̀𝗻𝗵 𝗹𝗮̃𝗻𝗵 𝘁𝗵𝗼̂̉', '𝗯𝗮́𝗻 𝗺𝗮𝗶 𝘁𝗵𝘂𝘆́', '𝗯𝘂𝗼̂𝗻 𝗯𝗮́𝗻 𝗺𝗮̣𝗶 𝗱𝗮̂𝗺', '𝗯𝘂𝗼̂𝗻 𝗹𝗮̣̂𝘂', '𝗰𝘂̛𝗼̛́𝗽 𝗻𝗴𝗮̂𝗻 𝗵𝗮̀𝗻𝗴', '𝗯𝗮́𝗻 𝘃𝘂̃ 𝗸𝗵𝗶́']; //random công việc khi thử thách 
var work8 = rdex12[Math.floor(Math.random() * rdex12.length)];


var msg = "";
    switch(handleReply.type) {
        case "choosee": {
            
            switch(event.body) {
                case "1": msg = `𝗕𝗮̣𝗻 𝘃𝘂̛̀𝗮 𝗹𝗮̀𝗺 ${work1} 𝗼̛̉ 𝗸𝗵𝘂 𝗰𝗼̂𝗻𝗴 𝗻𝗴𝗵𝗶𝗲̣̂𝗽 𝘃𝗮̀ 𝗸𝗶𝗲̂́𝗺 𝘃𝗲̂̀ ${coinscn}$` ;await Currencies.increaseMoney(event.senderID, parseInt(coinscn)); break;             
                case "2": msg = `𝗕𝗮̣𝗻 𝘃𝘂̛̀𝗮 𝗹𝗮̀𝗺 ${work2} 𝗼̛̉ 𝗸𝗵𝘂 𝗱𝗶̣𝗰𝗵 𝘃𝘂̣ 𝘃𝗮̀ 𝗸𝗶𝗲̂́𝗺 𝘃𝗲̂̀ ${coinsdv}$ 🌸`; await Currencies.increaseMoney(event.senderID, parseInt(coinsdv)); break;
                case "3": msg = `𝗕𝗮̣𝗻 ${work3} 𝘁𝗮̣𝗶 𝗸𝗵𝘂 𝗺𝗼̛̉ 𝗱𝗮̂̀𝘂 𝘃𝗮̀ 𝗯𝗮́𝗻 𝘃𝗼̛́𝗶 𝗴𝗶𝗮́ ${coinsmd}$ 🌸`; await Currencies.increaseMoney(event.senderID, parseInt(coinsmd)); break;
                case "4": msg = `𝗕𝗮̣𝗻 𝘃𝘂̛̀𝗮 𝗸𝗵𝗮𝗶 𝘁𝗵𝗮́𝗰 ${work4} 𝘃𝗮̀ 𝗸𝗶𝗲̂́𝗺 𝘃𝗲̂̀ ${coinsq}$ 🌸`; await Currencies.increaseMoney(event.senderID, parseInt(coinsq)); break;
                case "5": msg = `𝗕𝗮̣𝗻 𝘁𝗶̀𝗺 𝘁𝗵𝗮̂́𝘆 ${work5} 𝘃𝗮̀ 𝗯𝗮́𝗻 𝘃𝗼̛́𝗶 𝗴𝗶𝗮́ ${coinsdd}$ 🌸` ; await Currencies.increaseMoney(event.senderID, parseInt(coinsdd)); break;
                case "6": msg = `𝗕𝗮̣𝗻 𝘃𝘂̛̀𝗮 𝗰𝗵𝗶̣𝗰𝗵 𝘃𝗼̛́𝗶 ${work6} 𝘃𝗮̀ 𝗻𝗵𝗮̣̂𝗻 ${coinsdd1}$ 🌸`; await Currencies.increaseMoney(event.senderID, parseInt(coinsdd1)); break;
                case "7": msg = `𝗕𝗮̣𝗻 𝘃𝘂̛̀𝗮 𝗻𝗵𝗮̣̂𝗻 𝘁𝗵𝘂̛̉ 𝘁𝗵𝗮́𝗰𝗵 𝟮𝟰𝗵 ${work7} 𝘃𝗮̀ 𝗻𝗵𝗮̣̂𝗻 𝘃𝗲̂̀ ${coinsex1}$ 
 🌸`; await Currencies.increaseMoney(event.senderID, parseInt(coinsex1)); break;
                case "8": msg = `𝗕𝗮̣𝗻 𝘃𝘂̛̀𝗮 ${work8} 𝗼̛̉ 𝗸𝗵𝘂 𝗖𝗮𝗼 𝗟𝗮̂̀𝘂 𝘃𝗮̀ 𝗸𝗶𝗲̂́𝗺 𝘃𝗲̂̀ ${coinsex12}$ 🌸`; await Currencies.increaseMoney(event.senderID, parseInt(coinsex12)); break;
            };
            const choose = parseInt(event.body);
            if (isNaN(event.body)) return api.sendMessage("Vui lòng nhập 1 con số", event.threadID, event.messageID);
            if (choose > 9 || choose < 1) return api.sendMessage("Lựa chọn không nằm trong danh sách.", event.threadID, event.messageID); //thay số case vào số 7
            api.unsendMessage(handleReply.messageID);
            if (msg == "🌸 𝗖𝗵𝘂̛𝗮 𝘂𝗽𝗱𝗮𝘁𝗲...") {
                msg = "🌸 𝗨𝗽𝗱𝗮𝘁𝗲 𝘀𝗼𝗼𝗻...";
            };
            return api.sendMessage(`${msg}`, threadID, async () => {
            data.work2Time = Date.now();
            await Currencies.setData(senderID, { data });
            
        });

    };
}
}
module.exports.run = async ({  event, api, handleReply, Currencies, getText }) => {
    const { threadID, messageID, senderID } = event;
    const cooldown = global.configModule[this.config.name].cooldownTime;
    let data = (await Currencies.getData(senderID)).data || {};
    //cooldownTime cho mỗi lần nhận 
    if (typeof data !== "undefined" && cooldown - (Date.now() - data.work2Time) > 0) {

        var time = cooldown - (Date.now() - data.work2Time),
            minutes = Math.floor(time / 40000),
            seconds = ((time % 1000) / 1000).toFixed(0); 
        return api.sendMessage(getText("cooldown", minutes, (seconds < 10 ? "0" + seconds : seconds)), event.threadID, event.messageID);
    }
    else {    
    return api.sendMessage("◆━🌸 𝗪𝗢𝗥𝗞𝗜𝗡𝗚 🌸━◆" +
                "\n\n𝟙. 𝐊𝐡𝐮 𝐜𝐨̂𝐧𝐠 𝐧𝐠𝐡𝐢𝐞̣̂𝐩 🏬" +
                "\n𝟚. 𝐊𝐡𝐮 𝐝𝐢̣𝐜𝐡 𝐯𝐮̣ 🏢" +
                "\n𝟛. 𝐊𝐡𝐮 𝐦𝐨̉ 𝐝𝐚̂̀𝐮 🕳️" +
                "\n𝟜. 𝐊𝐡𝐚𝐢 𝐭𝐡𝐚́𝐜 𝐪𝐮𝐚̣̆𝐧𝐠 ⛏️💎" +
                "\n𝟝. 𝐊𝐡𝐚𝐢 𝐓𝐡𝐚́𝐜 ⛏️⛰️" +
                "\n𝟞. 𝐂𝐚𝐯𝐞 𝐓𝐫𝐚̂̀𝐧 𝐃𝐮𝐲 𝐇𝐮̛𝐧𝐠 💃" +
                "\n𝟟. 𝐓𝐡𝐮̛̉ 𝐭𝐡𝐚́𝐜𝐡 ⛩" +
                "\n𝟠. 𝐊𝐡𝐮 𝐂𝐚𝐨 𝐋𝐚̂̀𝐮 💣" +
                "\n\n🔱 𝐇𝐚̃𝐲 𝐫𝐞𝐩𝐥𝐲 𝐭𝐢𝐧 𝐧𝐡𝐚̆́𝐧 𝐯𝐚̀ 𝐜𝐡𝐨̣𝐧 𝐭𝐡𝐞𝐨 𝐒𝐓𝐓 🔱" //thêm hiển thị case tại đây ||  \n[number]. [Ngành nghề]" +
            , event.threadID, (error, info) => {
                data.work2Time = Date.now();
        global.client.handleReply.push({
            type: "choosee",
            name: this.config.name,
            author: event.senderID,
            messageID: info.messageID
          })  
        })
    }
}
