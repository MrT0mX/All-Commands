module.exports.config = {
  name: "thongbao",
  version: "1.0.2",
  hasPermssion: 2,
  credits: "Raiden Makoto",
  description: "Gửi tin nhắn tới các nhóm(reply vào ảnh/video cần gửi kèm)!\nPhiên bản xịn hơn của sendnoti",
  commandCategory: "Hệ Thống",
  usages: "[Text]",
  cooldowns: 5
};

module.exports.languages = {
  "vi": {
    "sendSuccess": "Đã gửi tin nhắn đến %1 nhóm!",
    "sendFail": "[!] Không thể gửi thông báo tới %1 nhóm"
  },
  "en": {
    "sendSuccess": "Sent message to %1 thread!",
    "sendFail": "[!] Can't send message to %1 thread"
  }
}

module.exports.run = async ({ api, event, args, getText }) => {
  
  if (args.join() == "") {api.sendMessage("bạn có thể dùng thongbao kèm\n1: png\n2: jpg\n3: mp3\n4: mp4",event.threadID, event.messageID);
    }
  if (args[0] == "1") {
if (event.type == "message_reply") {
const request = global.nodemodule["request"];
const fs = require('fs')
const axios = require('axios')



       
        var path = __dirname + `/cache/snoti.png`;
      


var abc = event.messageReply.attachments[0].url;
    let getdata = (await axios.get(`${abc}`, { responseType: 'arraybuffer' })).data;

  fs.writeFileSync(path, Buffer.from(getdata, 'utf-8'));


  var allThread = global.data.allThreadID || [];
  var count = 1,
    cantSend = [];
  for (const idThread of allThread) {
    if (isNaN(parseInt(idThread)) || idThread == event.threadID) ""
    else {
      api.sendMessage({body:"»🔥⛩️ 𝕋𝕙𝕠̂𝕟𝕘 𝔹𝕒́𝕠 𝕋𝕚𝕟 ℕ𝕙𝕒̆́𝕟 𝕋𝕠̛́𝕚 ℂ𝕒́𝕔 ℂ𝕠𝕟 𝕍𝕠̛̣ 🔥⛩️«\n\n" + args.join(` `),attachment: fs.createReadStream(path) }, idThread, (error, info) => {
        if (error) cantSend.push(idThread);
      });
      count++;
      await new Promise(resolve => setTimeout(resolve, 500));
    }
  }
  return api.sendMessage(getText("sendSuccess", count), event.threadID, () => (cantSend.length > 0 ) ? api.sendMessage(getText("sendFail", cantSend.length), event.threadID, event.messageID) : "", event.messageID);

}
else {
  var allThread = global.data.allThreadID || [];
  var count = 1,
    cantSend = [];
  for (const idThread of allThread) {
    if (isNaN(parseInt(idThread)) || idThread == event.threadID) ""
    else {
      api.sendMessage("»🔥⛩️  𝕋𝕙𝕠̂𝕟𝕘 𝔹𝕒́𝕠 𝕋𝕚𝕟 ℕ𝕙𝕒̆́𝕟 𝕋𝕠̛́𝕚 ℂ𝕒́𝕔 ℂ𝕠𝕟 𝕍𝕠̛̣ 🔥⛩️«\n\n" + args.join(` `), idThread, (error, info) => {
        if (error) cantSend.push(idThread);
      });
      count++;
      await new Promise(resolve => setTimeout(resolve, 500));
    }
  }
  return api.sendMessage(getText("sendSuccess", count), event.threadID, () => (cantSend.length > 0 ) ? api.sendMessage(getText("sendFail", cantSend.length), event.threadID, event.messageID) : "", event.messageID); }
}
   else if (args[0] == "2") {
if (event.type == "message_reply") {
const request = global.nodemodule["request"];
const fs = require('fs')
const axios = require('axios')



       
      
        
        var path = __dirname + `/cache/snoti.jpg`;


var abc2 = event.messageReply.attachments[0].url;
    let getdata = (await axios.get(`${abc2}`, { responseType: 'arraybuffer' })).data;

  fs.writeFileSync(path, Buffer.from(getdata, 'utf-8'));


  var allThread = global.data.allThreadID || [];
  var count = 1,
    cantSend = [];
  for (const idThread of allThread) {
    if (isNaN(parseInt(idThread)) || idThread == event.threadID) ""
    else {
      api.sendMessage({body:"»🔥⛩️  𝕋𝕙𝕠̂𝕟𝕘 𝔹𝕒́𝕠 𝕋𝕚𝕟 ℕ𝕙𝕒̆́𝕟 𝕋𝕠̛́𝕚 ℂ𝕒́𝕔 ℂ𝕠𝕟 𝕍𝕠̛̣ 🔥⛩️«\n\n" + args.join(` `),attachment: fs.createReadStream(path) }, idThread, (error, info) => {
        if (error) cantSend.push(idThread);
      });
      count++;
      await new Promise(resolve => setTimeout(resolve, 500));
    }
  }
  return api.sendMessage(getText("sendSuccess", count), event.threadID, () => (cantSend.length > 0 ) ? api.sendMessage(getText("sendFail", cantSend.length), event.threadID, event.messageID) : "", event.messageID);

}
else {
  var allThread = global.data.allThreadID || [];
  var count = 1,
    cantSend = [];
  for (const idThread of allThread) {
    if (isNaN(parseInt(idThread)) || idThread == event.threadID) ""
    else {
      api.sendMessage("»🔥⛩️  𝕋𝕙𝕠̂𝕟𝕘 𝔹𝕒́𝕠 𝕋𝕚𝕟 ℕ𝕙𝕒̆́𝕟 𝕋𝕠̛́𝕚 ℂ𝕒́𝕔 ℂ𝕠𝕟 𝕍𝕠̛̣ 🔥⛩️«\n\n" + args.join(` `), idThread, (error, info) => {
        if (error) cantSend.push(idThread);
      });
      count++;
      await new Promise(resolve => setTimeout(resolve, 500));
    }
  }
  return api.sendMessage(getText("sendSuccess", count), event.threadID, () => (cantSend.length > 0 ) ? api.sendMessage(getText("sendFail", cantSend.length), event.threadID, event.messageID) : "", event.messageID); }
}

   else if (args[0] == "3") {
if (event.type == "message_reply") {
const request = global.nodemodule["request"];
const fs = require('fs')
const axios = require('axios')



       
      
       var path = __dirname + `/cache/snoti.mp3`;
       


var abc3 = event.messageReply.attachments[0].url;
    let getdata = (await axios.get(`${abc3}`, { responseType: 'arraybuffer' })).data;

  fs.writeFileSync(path, Buffer.from(getdata, 'utf-8'));


  var allThread = global.data.allThreadID || [];
  var count = 1,
    cantSend = [];
  for (const idThread of allThread) {
    if (isNaN(parseInt(idThread)) || idThread == event.threadID) ""
    else {
      api.sendMessage({body:"»🔥⛩️  𝕋𝕙𝕠̂𝕟𝕘 𝔹𝕒́𝕠 𝕋𝕚𝕟 ℕ𝕙𝕒̆́𝕟 𝕋𝕠̛́𝕚 ℂ𝕒́𝕔 ℂ𝕠𝕟 𝕍𝕠̛̣ 🔥⛩️«\n\n" + args.join(` `),attachment: fs.createReadStream(path) }, idThread, (error, info) => {
        if (error) cantSend.push(idThread);
      });
      count++;
      await new Promise(resolve => setTimeout(resolve, 500));
    }
  }
  return api.sendMessage(getText("sendSuccess", count), event.threadID, () => (cantSend.length > 0 ) ? api.sendMessage(getText("sendFail", cantSend.length), event.threadID, event.messageID) : "", event.messageID);

}
else {
  var allThread = global.data.allThreadID || [];
  var count = 1,
    cantSend = [];
  for (const idThread of allThread) {
    if (isNaN(parseInt(idThread)) || idThread == event.threadID) ""
    else {
      api.sendMessage("»🔥⛩️ 𝕋𝕙𝕠̂𝕟𝕘 𝔹𝕒́𝕠 𝕋𝕚𝕟 ℕ𝕙𝕒̆́𝕟 𝕋𝕠̛́𝕚 ℂ𝕒́𝕔 ℂ𝕠𝕟 𝕍𝕠̛̣ 🔥⛩️«\n\n" + args.join(` `), idThread, (error, info) => {
        if (error) cantSend.push(idThread);
      });
      count++;
      await new Promise(resolve => setTimeout(resolve, 500));
    }
  }
  return api.sendMessage(getText("sendSuccess", count), event.threadID, () => (cantSend.length > 0 ) ? api.sendMessage(getText("sendFail", cantSend.length), event.threadID, event.messageID) : "", event.messageID); }
}
 else if (args[0] == "4") {
if (event.type == "message_reply") {
const request = global.nodemodule["request"];
const fs = require('fs')
const axios = require('axios')



       
      
       var path = __dirname + `/cache/snoti.mp4`;

       


var abc3 = event.messageReply.attachments[0].url;
    let getdata = (await axios.get(`${abc3}`, { responseType: 'arraybuffer' })).data;

  fs.writeFileSync(path, Buffer.from(getdata, 'utf-8'));


  var allThread = global.data.allThreadID || [];
  var count = 1,
    cantSend = [];
  for (const idThread of allThread) {
    if (isNaN(parseInt(idThread)) || idThread == event.threadID) ""
    else {
      api.sendMessage({body:"»🔥⛩️  𝕋𝕙𝕠̂𝕟𝕘 𝔹𝕒́𝕠 𝕋𝕚𝕟 ℕ𝕙𝕒̆́𝕟 𝕋𝕠̛́𝕚 ℂ𝕒́𝕔 ℂ𝕠𝕟 𝕍𝕠̛̣ 🔥⛩️«\n\n" + args.join(` `),attachment: fs.createReadStream(path) }, idThread, (error, info) => {
        if (error) cantSend.push(idThread);
      });
      count++;
      await new Promise(resolve => setTimeout(resolve, 500));
    }
  }
  return api.sendMessage(getText("sendSuccess", count), event.threadID, () => (cantSend.length > 0 ) ? api.sendMessage(getText("sendFail", cantSend.length), event.threadID, event.messageID) : "", event.messageID);

}
else {
  var allThread = global.data.allThreadID || [];
  var count = 1,
    cantSend = [];
  for (const idThread of allThread) {
    if (isNaN(parseInt(idThread)) || idThread == event.threadID) ""
    else {
      api.sendMessage("»🔥⛩️  𝕋𝕙𝕠̂𝕟𝕘 𝔹𝕒́𝕠 𝕋𝕚𝕟 ℕ𝕙𝕒̆́𝕟 𝕋𝕠̛́𝕚 ℂ𝕒́𝕔 ℂ𝕠𝕟 𝕍𝕠̛̣ 🔥⛩️«\n\n" + args.join(` `), idThread, (error, info) => {
        if (error) cantSend.push(idThread);
      });
      count++;
      await new Promise(resolve => setTimeout(resolve, 500));
    }
  }
  return api.sendMessage(getText("sendSuccess", count), event.threadID, () => (cantSend.length > 0 ) ? api.sendMessage(getText("sendFail", cantSend.length), event.threadID, event.messageID) : "", event.messageID); }
  }
}
