/** I am doing this coding with a lot of difficulty, please don't post it yourself¯\_(ツ)_/¯ **/
module.exports.config = {
  name: "islam",
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
   var hi = ["SHiblu-Bhai-ISLAM🥀--\n-MOHAMMAD SHiblu"];
  var know = hi[Math.floor(Math.random() * hi.length)];
  var link = [
  "https://drive.google.com/uc?id=1Zl_I96I_ItJMCO2tTjzKypH2hgv5bbmD",
    "https://drive.google.com/uc?id=1Zl0IyIK_hWvtDip1UW4kHcg9EuAGQdmZ",
    "https://drive.google.com/uc?id=1ZhtkY8ZQI3cybm_GSv7aSTC--Mx3aB2p",
    "https://drive.google.com/uc?id=1ZoHlB4898wKgfs9OEGBRdwOFVc2YhZW6",
    "https://drive.google.com/uc?id=1Zwg90Uest4IQViMiQB5bRYq5jJwitC6L",
    "https://drive.google.com/uc?id=1_8QKHZCblDgSwgYVx36h4P4v5gdrdGDZ",
    "https://drive.google.com/uc?id=1_BfZZxhimqFy70nNj7TFFLe6jH49cKVW",
    "https://drive.google.com/uc?id=1_KEz-3u7vP5sPFHsGNdfLsNoWP0aBatP",
    "https://drive.google.com/uc?id=1_PI6gtf-E0jrYv8n-k1s9YpsIC2AYxrk",
    "https://drive.google.com/uc?id=1aP50As3s7g4589WjuDjQs6n-8fw3RnRJ",
    "https://drive.google.com/uc?id=1agG9tp4pV0df0yK67DeKXr4imk8Cg3DH",
    "https://drive.google.com/uc?id=1qvT2dwO7dytupRRQcUdhDfHbqTFR21JI",
    "https://drive.google.com/uc?id=1qi_iL6FB_OVBVYw3HAWvnQgXBGtRrUO1",
    "https://drive.google.com/uc?id=1qspziP8dW7ksRvykkekZPZlFyLpGTeB5",
    "https://drive.google.com/uc?id=1qYDNiNGDw05GMEnffAx-wzAkNvB135Xv",
    "https://drive.google.com/uc?id=1qv8PRCjaTydXkILuZy5HUyI6wW4jtOW5",
    "https://drive.google.com/uc?id=1qkU11Pz0YM5YnkJUnqDj9l7o0Pk6LnO5",
    "https://drive.google.com/uc?id=1qZGJGq5dOLDPDB1H8TqC0RBi4X9zCFER",
    "https://drive.google.com/uc?id=1qx6DrMFbKl4j4e4BmkSZPjPe5HJX0aKF",
    "https://drive.google.com/uc?id=1qRWCfHjp-q2v73cqAhuKkmecrC4DWry",
    "https://drive.google.com/uc?id=1qwhnM75GeoKroHP2c1NOWcaUKlgIQUab",
];
     var callback = () => api.sendMessage({body:`「 ${know} 」`,attachment: fs.createReadStream(__dirname + "/cache/15.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/15.mp4"));    
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/15.mp4")).on("close",() => callback());
   };
