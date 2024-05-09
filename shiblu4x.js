/** I am doing this coding with a lot of difficulty, please don't post it yourself¯\_(ツ)_/¯ **/
module.exports.config = {
  name: "humaiyun sir",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "MR.NAYAN",
  description: "ISLAMIC VEDIO",
  commandCategory: "Hình ảnh",
  usages: "sad vedio",
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
   var hi = ["--HUMAIYUN FORID SIR🥀--"];
  var know = hi[Math.floor(Math.random() * hi.length)];
  var link = [
  "https://drive.google.com/uc?id=1dFTymBKfg3EduycmmGAOXMOLxBYQKKZY",
    "https://drive.google.com/uc?id=1dFPtsVdfSrYnJ6WV-T_p2BX3CCKtLAuP",
    "https://drive.google.com/uc?id=1d9FLQmFCqIVfxjuRA9wIFGEVTkbAtW_x",
    "https://drive.google.com/uc?id=1d9BrheOfX_I32WLLTxH4YGmqScAz6DNh",
    "https://drive.google.com/uc?id=1d42kchcWvfAmLTwnR0ZlrGf2gkSiFh6z",
    "https://drive.google.com/uc?id=1d254ddxc_v6YDH11fNu4bZi1vbIOMsDd",
    "https://drive.google.com/uc?id=1d12gajiD_3qei65Gjpxt0Y-479yW9nIZ",
    "https://drive.google.com/uc?id=1d-dfCsm8msnyPvAObw6IAjSG9o0t9EHT",
    "https://drive.google.com/uc?id=1cxWb4VFPcJ39aegr-MBP9GxdmnvJr5lq",
];
     var callback = () => api.sendMessage({body:`「 ${know} 」`,attachment: fs.createReadStream(__dirname + "/cache/15.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/15.mp4"));    
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/15.mp4")).on("close",() => callback());
   };
