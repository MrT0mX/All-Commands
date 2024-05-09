module.exports.config = {
  name: "nyadmin",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "TuanDz",
  description: "Random Ảnh Ny Admin",
  commandCategory: "Random-IMG",
  usages: "TuanDz",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
    
};

module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
    var link = [
"https://i.imgur.com/DAUhspl.jpg",
"https://i.imgur.com/uzybHLe.jpg",
"https://i.imgur.com/Ch9tFXO.jpg",
"https://i.imgur.com/nBoPt26.jpg",
"https://i.imgur.com/DfUZgnR.jpg",
"https://i.imgur.com/4kDRQEl.jpg",
"https://i.imgur.com/G5jCNYo.jpg",
"https://i.imgur.com/Iv7wtyy.jpg",
"https://i.imgur.com/fbK29UY.jpg",
"https://i.imgur.com/Nns6yLY.jpg",
"https://i.imgur.com/2iQdM9k.jpg",
"https://i.imgur.com/gVD9W9j.jpg",
     ];
     var callback = () => api.sendMessage({body:`𝗡𝘆 𝗮𝗱𝗺𝗶𝗻 𝗯𝗼𝘁 𝗻𝗲̀ ❤️`,attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback());
   };
