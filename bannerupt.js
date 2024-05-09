const loz = ["https://imgur.com/evWplKH.png","https://imgur.com/VwOYMn3.png","https://imgur.com/WuOVJIa.png","https://imgur.com/6SiB9yB.png","https://imgur.com/BRmVPFh.png","https://imgur.com/63E6i9f.png","https://imgur.com/o3OaHBz.png","https://imgur.com/JxeFlO8.png","https://imgur.com/i5wFLzQ.png","https://imgur.com/L209zJL.png","https://imgur.com/Y1AJjrN.png","https://imgur.com/0rQdQPO.png","https://imgur.com/hcOkU5i.png","https://imgur.com/KNajylt.png","https://imgur.com/cKWScwd.png","https://imgur.com/xrLi2Ss.png","https://imgur.com/PdVcRjh.png","https://imgur.com/9gSky1P.png","https://imgur.com/aG76R3G.png","https://imgur.com/VD6yYki.png","https://imgur.com/5cBezU8.png","https://imgur.com/5cBezU8.png","https://imgur.com/9Gw4scs.png"]
module.exports.config = {
  name: "bannerupt",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Hanaku UwuU",
  description: "Tạo banner kiểu upt bot",
  commandCategory: "Tạo Ảnh",
  usages: "",
  cooldowns: 5
};
module.exports.run = async function({ api, args, event, permssion }) {
  const axios = require('axios')
  const lengthchar = (await axios.get('https://run.mocky.io/v3/fc1cc59c-2603-4d27-ae05-0d29d372d53a')).data
  if(args[0] == "find" || args[0] == "tìm"){
    const t = (await axios.get(`${lengthchar[args[1]].imgAnime}`, {
        responseType: "stream"
      })).data;
    var msg = ({
      body: `𝗜𝗗 𝗡𝗛𝗔̂𝗡 𝗩𝗔̣̂𝗧 ${args[1]}, 𝗠𝗔̀𝗨 𝗧𝗥𝗨𝗬𝗘̂̀𝗡 𝗧𝗛𝗢̂́𝗡𝗚 ${lengthchar[args[1]].colorBg}`,
      attachment: t
    })
    return api.sendMessage(msg, event.threadID, event.messageID)
  }
  else if(args[0] == "list"){
    const alime = (await axios.get('https://run.mocky.io/v3/fc1cc59c-2603-4d27-ae05-0d29d372d53a')).data
    var count = alime.listAnime.length;
      var data = alime.listAnime
      var page = 1;
      page = parseInt(args[1]) || 1;
      page < -1 ? page = 1 : "";
      var limit = 20;
      var numPage = Math.ceil(count/limit);
      var msg = ``;
      for(var i = limit*(page - 1); i < limit*(page-1) + limit; i++){
         if(i >= count) break;
        msg += `[ ${i+1} ] - ${data[i].ID} | ${data[i].name}\n`;
      }
      msg += `Trang (${page}/${numPage})\nDùng ${global.config.PREFIX}${this.config.name} list <số trang>`;
      return api.sendMessage(msg, event.threadID,event.messageID);
  } else {
  const fs =  require('fs-extra')
   if (!fs.existsSync(__dirname +
        `/tad/UTM-Avo.ttf`)) {
        let getfont = (await axios.get(`https://github.com/kenyrm2250/font/blob/main/UTM%20Avo.ttf?raw=true`, { responseType: "arraybuffer" })).data;
        fs.writeFileSync(__dirname + `/tad/UTM-Avo.ttf`, Buffer.from(getfont, "utf-8"));
      }
         if (!fs.existsSync(__dirname +
      `/tad/phenomicon.ttf`)) {
      let getfont2 = (await axios.get(`https://github.com/kenyrm2250/font/blob/main/phenomicon.ttf?raw=true`, { responseType: "arraybuffer" })).data;
      fs.writeFileSync(__dirname + `/tad/phenomicon.ttf`, Buffer.from(getfont2, "utf-8"));
    };
  if (!fs.existsSync(__dirname +
      `/tad/CaviarDreams.ttf`)) {
      let getfont3 = (await axios.get(`https://github.com/kenyrm2250/font/blob/main/CaviarDreams.ttf?raw=true`, { responseType: "arraybuffer" })).data;
      fs.writeFileSync(__dirname + `/tad/CaviarDreams.ttf`, Buffer.from(getfont3, "utf-8"));
    };
   return api.sendMessage("𝗥𝗲𝗽𝗹𝘆 𝗧𝗶𝗻 𝗡𝗵𝗮̆́𝗻 𝗡𝗮̀𝘆 𝗩𝗮̀ 𝗖𝗵𝗼̣𝗻 𝗖𝗵𝗮𝗿 🌸", event.threadID, (err, info) => {
    return global.client.handleReply.push({
      step: 1,
      name: this.config.name,
      author: event.senderID,
      messageID: info.messageID
    });
  }, event.messageID);
}
}
module.exports.handleReply = async function({ api, event, args, handleReply, client, __GLOBAL, Threads, Users, Currencies }) {
  const axios = require("axios");
  var nameSender = (await Users.getData(event.senderID)).name
    var arraytag = [];
        arraytag.push({id: event.senderID, tag: nameSender});
  const lengthchar = (await axios.get('https://run.mocky.io/v3/fc1cc59c-2603-4d27-ae05-0d29d372d53a')).data
  const fs = require("fs-extra");
  const request = require("request");
  if (event.senderID != handleReply.author) return api.sendMessage('CúC', event.threaID);
  const { loadImage, createCanvas, registerFont } = require("canvas");
  const path = require('path');
  const Canvas = require('canvas');
  let pathImg = __dirname + `/tad/avatar_1.png`;
  let pathAva = __dirname + `/tad/avatar_2.png`;
  if(handleReply.step == 1){
     api.unsendMessage(handleReply.messageID);
    const o = [];
    for(let i = 0; i < loz.length; i++){
    const t = (await axios.get(`${loz[i]}`, {
        responseType: "stream"
      })).data;
    o.push(t)
  }
  const msg = ({
    body: `𝗕𝗮̣𝗻 𝘃𝘂̛̀𝗮 𝗰𝗵𝗼̣𝗻 𝗻𝗵𝗮̂𝗻 𝘃𝗮̣̂𝘁 𝗺𝗮𝗻𝗴 𝘀𝗼̂́ 𝗯𝗮́𝗼 𝗱𝗮𝗻𝗵 ${event.body}, 𝗿𝗲𝗽𝗹𝘆 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗻𝗮̀𝘆 𝘃𝗮̀ 𝗰𝗵𝗼̣𝗻 𝗸𝗵𝘂𝗻𝗴 𝗺𝗮̀𝘂 𝗮̉𝗻𝗵 🌸`,
     attachment: o
  })
    return api.sendMessage(msg, event.threadID, (err, info) => {
      if(err) return api.sendMessage(`Lỗi bất định`, event.threadID)
      return global.client.handleReply.push({
        step: 2,
        name: this.config.name,
        author: event.senderID,
        id: event.body,
        messageID: info.messageID
      })
    },event.messageID)
  }
  else if(handleReply.step == 2){
     api.unsendMessage(handleReply.messageID);
    const z = (await axios.get(`${loz[event.body - 1]}`, {
        responseType: "stream"
      })).data;
  const msg = ({
    body: `𝗕𝗮̣𝗻 𝘃𝘂̛̀𝗮 𝗰𝗵𝗼̣𝗻 𝗸𝗵𝘂𝗻𝗴 𝘀𝗼̂́ ${event.body}, 𝗿𝗲𝗽𝗹𝘆 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗻𝗮̀𝘆 𝘃𝗮̀ 𝗴𝗵𝗶 𝘁𝗲̂𝗻 𝗰𝗵𝗶́𝗻𝗵 🌸`,
     attachment: z
  })
    return api.sendMessage(msg, event.threadID, (err, info) => {
      if(err) return api.sendMessage(`Lỗi bất định`, event.threadID)
      return global.client.handleReply.push({
        step: 3,
        name: this.config.name,
        author: event.senderID,
        id: handleReply.id,
        khung: event.body,
        messageID: info.messageID
      })
    },event.messageID)
  }
    else if(handleReply.step == 3){
     api.unsendMessage(handleReply.messageID);
    return api.sendMessage(`𝗕𝗮̣𝗻 𝗰𝗵𝗼̣𝗻 𝘁𝗲̂𝗻 𝗰𝗵𝗶́𝗻𝗵 𝗰𝘂̉𝗮 𝗺𝗶̀𝗻𝗵 𝗹𝗮̀ ${event.body}, 𝗿𝗲𝗽𝗹𝘆 𝘁𝗶𝗲̂́𝗽 𝘁𝘂̣𝗰 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗻𝗮̀𝘆 𝘃𝗮̀ 𝗻𝗵𝗮̣̂𝗽 𝘁𝗲̂𝗻 𝗽𝗵𝘂̣ 🌸`, event.threadID, (err, info) => {
      if(err) return api.sendMessage(`Lỗi bất định`, event.threadID)
      return global.client.handleReply.push({
        step: 4,
        name: this.config.name,
        author: event.senderID,
        id: handleReply.id,
        khung: handleReply.khung,
        tenchinh: event.body,
        messageID: info.messageID
      })
    },event.messageID)
  }
  else if(handleReply.step == 4){
     api.unsendMessage(handleReply.messageID);
    return api.sendMessage(`𝗕𝗮̣𝗻 𝗰𝗵𝗼̣𝗻 𝘁𝗲̂𝗻 𝗽𝗵𝘂̣ 𝗰𝘂̉𝗮 𝗺𝗶̀𝗻𝗵 𝗹𝗮̀ ${event.body}, 𝗿𝗲𝗽𝗹𝘆 𝘁𝗶𝗲̂́𝗽 𝘁𝘂̣𝗰 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗻𝗮̀𝘆 𝘃𝗮̀ 𝗻𝗵𝗮̣̂𝗽 𝘂𝘀𝗲𝗿𝗻𝗮𝗺𝗲 𝗶𝗻𝘀𝘁𝗮𝗴𝗿𝗮𝗺 🌸`, event.threadID, (err, info) => {
      if(err) return api.sendMessage(`Lỗi bất định`, event.threadID)
      return global.client.handleReply.push({
        step: 5,
        name: this.config.name,
        author: event.senderID,
        id: handleReply.id,
        khung: handleReply.khung,
        tenchinh: handleReply.tenchinh,
        tenphu: event.body,
        messageID: info.messageID
      })
    },event.messageID)
  }
    else if(handleReply.step == 5){
     api.unsendMessage(handleReply.messageID);
    return api.sendMessage(`𝗕𝗮̣𝗻 𝘃𝘂̛̀𝗮 𝗻𝗵𝗮̣̂𝗽 𝘂𝘀𝗲𝗿𝗻𝗮𝗺𝗲 𝗶𝗻𝘀𝘁𝗮𝗴𝗿𝗮𝗺 𝗰𝘂̉𝗮 𝗺𝗶̀𝗻𝗵 𝗹𝗮̀ ${event.body}, 𝗿𝗲𝗽𝗹𝘆 𝘁𝗶𝗲̂́𝗽 𝘁𝘂̣𝗰 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗻𝗮̀𝘆 𝘃𝗮̀ 𝗻𝗵𝗮̣̂𝗽 𝘂𝘀𝗲𝗿𝗻𝗮𝗺𝗲 𝗴𝗶𝘁𝗵𝘂𝗯 🌸`, event.threadID, (err, info) => {
      if(err) return api.sendMessage(`Lỗi bất định`, event.threadID)
      return global.client.handleReply.push({
        step: 6,
        name: this.config.name,
        author: event.senderID,
        id: handleReply.id,
        khung: handleReply.khung,
        tenchinh: handleReply.tenchinh,
        tenphu: handleReply.tenphu,
        inst: event.body,
        messageID: info.messageID
      })
    },event.messageID)
  }
      else if(handleReply.step == 6){
     api.unsendMessage(handleReply.messageID);
    return api.sendMessage(`𝗕𝗮̣𝗻 𝘃𝘂̛̀𝗮 𝗻𝗵𝗮̣̂𝗽 𝘂𝘀𝗲𝗿𝗻𝗮𝗺𝗲 𝗴𝗶𝘁𝗵𝘂𝗯 𝗰𝘂̉𝗮 𝗺𝗶̀𝗻𝗵 𝗹𝗮̀ ${event.body}, 𝗿𝗲𝗽𝗹𝘆 𝘁𝗶𝗲̂́𝗽 𝘁𝘂̣𝗰 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗻𝗮̀𝘆 𝘃𝗮̀ 𝗻𝗵𝗮̣̂𝗽 𝘂𝘀𝗲𝗿𝗻𝗮𝗺𝗲 𝗳𝗮𝗰𝗲𝗯𝗼𝗼𝗸 🌸`, event.threadID, (err, info) => {
      if(err) return api.sendMessage(`Lỗi bất định`, event.threadID)
      return global.client.handleReply.push({
        step: 7,
        name: this.config.name,
        author: event.senderID,
        id: handleReply.id,
        khung: handleReply.khung,
        tenchinh: handleReply.tenchinh,
        tenphu: handleReply.tenphu,
        inst: handleReply.inst,
        github: event.body,
        messageID: info.messageID
      })
    },event.messageID)
  }
  else if(handleReply.step == 7){
    api.unsendMessage(handleReply.messageID);
    return api.sendMessage(`𝗕𝗮̣𝗻 𝘃𝘂̛̀𝗮 𝗻𝗵𝗮̣̂𝗽 𝘂𝘀𝗲𝗿𝗻𝗮𝗺𝗲 𝗳𝗮𝗰𝗲𝗯𝗼𝗼𝗸 𝗰𝘂̉𝗮 𝗺𝗶̀𝗻𝗵 𝗹𝗮̀ ${event.body}, 𝗿𝗲𝗽𝗹𝘆 𝘁𝗶𝗲̂́𝗽 𝘁𝘂̣𝗰 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗻𝗮̀𝘆 𝘃𝗮̀ 𝗻𝗵𝗮̣̂𝗽 𝗺𝗮̀𝘂 𝗺𝗮̀ 𝗯𝗮̣𝗻 𝗺𝘂𝗼̂́𝗻 𝗵𝗮̃𝘆 𝗴𝗵𝗶 𝗻𝗼 𝗻𝗲̂́𝘂 𝗯𝗮̣𝗻 𝗺𝘂𝗼̂́𝗻 𝗱𝘂̀𝗻𝗴 𝗺𝗮̀𝘂 𝘁𝗿𝘂𝘆𝗲̂̀𝗻 𝘁𝗵𝗼̂́𝗻𝗴 🌸`, event.threadID, (err, info) => {
      if(err) return api.sendMessage(`Lỗi bất định`, event.threadID)
      return global.client.handleReply.push({
        step: 8,
        name: this.config.name,
        author: event.senderID,
        id: handleReply.id,
        khung: handleReply.khung,
        tenchinh: handleReply.tenchinh,
        tenphu: handleReply.tenphu,
        inst: handleReply.inst,
        github: handleReply.github,
        fb: event.body,
        messageID: info.messageID
      })
    },event.messageID)
  } else if(handleReply.step == 8){
    api.unsendMessage(handleReply.messageID);
    const tenchinh = handleReply.tenchinh;
    const id_ = handleReply.id;
    const subname = handleReply.tenphu;
    const khung = handleReply.khung;
    const inst = handleReply.inst;
    const github = handleReply.github;
    const fb = handleReply.fb;
    const color_ = event.body;
    if(id_ == "random" || id_ == "Random"){
      var id = Math.floor(Math.random() * 848)
    } else {
      var id = id_
    }
    if (color_ == "no" || color_ == "No") {
      var color = lengthchar[id - 1].colorBg;
    } else {
      var color = color_;
    }
     let background = (await axios.get(encodeURI(`${loz[khung - 1]}`), { responseType: "arraybuffer" })).data;
    fs.writeFileSync(pathImg, Buffer.from(background, "utf-8"));
    let ava = (await axios.get(encodeURI(`${lengthchar[id - 1].imgAnime}`), { responseType: "arraybuffer" })).data;
    fs.writeFileSync(pathAva, Buffer.from(ava, "utf-8"));
    let l1 = await loadImage(pathAva);
    let a = await loadImage(pathImg);
    let canvas = createCanvas(a.width, a.height);
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(l1, -200, -200, 1200, 1200);
    ctx.drawImage(a, 0, 0, canvas.width, canvas.height);
     registerFont(__dirname + `/tad/phenomicon.ttf`, {
      family: "phenomicon"
    });
    ctx.textAlign = "start";
    ctx.strokeStyle = color;
    ctx.filter = "brightness(90%) contrast(110%)";
    ctx.font = "130px phenomicon";
    ctx.fillStyle = color;
    ctx.fillText(tenchinh, 900, 340);
    ctx.beginPath();
  ////////////////////////////////////////
   registerFont(__dirname + `/tad/UTM-Avo.ttf`, {
      family: "UTM"
    });
    ctx.textAlign = "start";
    ctx.font = "70px UTM";
    ctx.fillStyle = "#000000";
    ctx.fillText(subname, 920, 440);
    ctx.restore();
    ctx.save();
registerFont(__dirname + `/tad/CaviarDreams.ttf`, {
      family: "time"
    });
    ctx.textAlign = "start";
    ctx.font = "45px time";
    ctx.fillText("@" + inst, 930, 540)
    ctx.fillText("@" + github, 930, 610)
    ctx.fillText("@" + fb, 930, 690)
    ctx.restore();
    ctx.save();
    ctx.beginPath();
      const imageBuffer = canvas.toBuffer();
  fs.writeFileSync(pathImg, imageBuffer);

     return api.sendMessage({
     body: `𝗧𝗮̣𝗼 𝗔̉𝗻𝗵 𝗧𝗵𝗮̀𝗻𝗵 𝗖𝗼̂𝗻𝗴 🌸\n𝗔̉𝗻𝗵 𝗰𝘂̉𝗮 ${nameSender} 𝗻𝗲̀\n𝗜𝗗 𝗻𝗵𝗮̂𝗻 𝘃𝗮̣̂𝘁: ${id_}\n𝗞𝗵𝘂𝗻𝗴: ${khung}\n𝗧𝗲̂𝗻 𝗰𝗵𝗶́𝗻𝗵: ${tenchinh}\n𝗧𝗲̂𝗻 𝗽𝗵𝘂̣: ${subname}\n𝗜𝗻𝘀: ${inst}\n𝗚𝗶𝘁𝗵𝘂𝗯: ${github}\n𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸: ${fb}\n𝗠𝗮̀𝘂: ${color_}`,
     attachment: fs.createReadStream(pathImg)
   },
     event.threadID,
     () => fs.unlinkSync(pathImg),
     fs.unlinkSync(pathAva),
     event.messageID
   );
  }
}
