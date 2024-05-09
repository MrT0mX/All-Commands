/** I am doing this coding with a lot of difficulty, please don't post it yourself¯\_(ツ)_/¯ **/
module.exports.config = {
  name: "Brazil",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "MR.NAYAN",
  description: "BRAZIL VEDIO",
  commandCategory: "Hình ảnh",
  usages: "brazil",
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
   var hi = ["SHiblu-Bhai-BRAZIL🥀--"];
  var know = hi[Math.floor(Math.random() * hi.length)];
  var link = [
  "https://drive.google.com/uc?id=1Wb_WY-y0L-Xa7wwdrT_KaOdXuQQ4lsFP",
    "https://drive.google.com/uc?id=1WdyrupxjSEJku2i0g1Xr52en5NtCVOvp",
    "https://drive.google.com/uc?id=1WmimuuXD3AjwnFR7sBAV9QHpAZZt_U_Q",
    "https://drive.google.com/uc?id=1WfW4Nkfrb8VkIvHnYtErB07YcQ8gU7Zj",
    "https://drive.google.com/uc?id=1WZJWLsn6IHYUOR2YhVUho5LNp-vpujBF",
    "https://drive.google.com/uc?id=1WWamC7fo2IJGbqPBStkR3XkXwQbb2gs_",
    "https://drive.google.com/uc?id=1WJp1HeLM_QkBW6swV_8RUR4qPII8a0gh",
    "https://drive.google.com/uc?id=1Wbmv_9FA2mknsAh7X_nkSkFlwMT1XbWK",
    "https://drive.google.com/uc?id=1WWsFqn8z8GI27ER8BUD7CeRlCUGxWWy2",
    "https://drive.google.com/uc?id=1WbgM5gMqpvDlkTkCUtsavuYPKWnLngWG",
];
     var callback = () => api.sendMessage({body:`「 ${know} 」`,attachment: fs.createReadStream(__dirname + "/cache/15.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/15.mp4"));    
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/15.mp4")).on("close",() => callback());
   };
