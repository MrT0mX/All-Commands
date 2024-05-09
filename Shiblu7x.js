/** I am doing this coding with a lot of difficulty, please don't post it yourself¯\_(ツ)_/¯ **/
module.exports.config = {
  name: "neymar+messi",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "MR.NAYA ",
  description: "বস নেইমারের এবং মেসির ৫০+ ছবি🥰",
  commandCategory: "Hình ảnh",
  usages: "neymar",
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
   var hi = ["Neymar And Messi Picture 💛:50+🦋"];
  var know = hi[Math.floor(Math.random() * hi.length)];
  var link = [
  "https://i.postimg.cc/1tvbcFrG/gettyimages-1344007155-612x612.jpg",
"https://i.postimg.cc/NFMqWDjC/gettyimages-622177234-612x612.jpg",
"https://i.postimg.cc/HkXSpNjc/gettyimages-1233913444-612x612.jpg",
"https://i.postimg.cc/pXgGMvVM/gettyimages-1233913543-612x612.jpg",
"https://i.postimg.cc/zBt7tZ2M/gettyimages-1234756879-612x612.jpg",
"https://i.postimg.cc/4yY5jLr3/gettyimages-1235073687-612x612.jpg",
"https://i.postimg.cc/66zxKyFJ/gettyimages-1244322266-612x612.jpg",
"https://i.postimg.cc/nzZNbJkh/gettyimages-1335046020-612x612.jpg",
"https://i.postimg.cc/3rtV6zD3/gettyimages-1343198836-612x612.jpg",
"https://i.postimg.cc/sD1qRKp7/gettyimages-1343606888-612x612.jpg",
"https://i.postimg.cc/MpCh5RfR/gettyimages-1343626459-612x612.jpg",
"https://i.postimg.cc/v822X9pB/gettyimages-1343627063-612x612.jpg",
"https://i.postimg.cc/5tmnzFBf/gettyimages-1343627154-612x612.jpg",
"https://i.postimg.cc/W336JYp7/gettyimages-1355608248-612x612.jpg",
"https://i.postimg.cc/YCG5Q80M/gettyimages-1373030968-612x612.jpg",
"https://i.postimg.cc/Wz5BwH0b/gettyimages-1383840711-612x612.jpg",
"https://i.postimg.cc/dtxM7gq5/gettyimages-1413327442-612x612.jpg",
"https://i.postimg.cc/rFmXwqLd/gettyimages-1436673355-612x612.jpg",
"https://i.postimg.cc/9Qdp3qNy/gettyimages-459420584-612x612.jpg",
"https://i.postimg.cc/s23J3Dtq/gettyimages-470166305-612x612.jpg",
"https://i.postimg.cc/SRx5RfH0/gettyimages-470166309-612x612.jpg",
"https://i.postimg.cc/pX9GSrHB/gettyimages-523549436-612x612.jpg",
"https://i.postimg.cc/pdK36TKS/gettyimages-603131872-612x612.jpg",
"https://i.postimg.cc/PJfGZjpR/gettyimages-633790062-612x612.jpg",
"https://i.postimg.cc/QMDfVqW6/gettyimages-645572224-612x612.jpg",
"https://i.postimg.cc/gJk4Hks8/gettyimages-648000236-612x612.jpg",
"https://i.postimg.cc/kXtscHQ1/gettyimages-648000246-612x612.jpg",
"https://i.postimg.cc/KvVVcLNV/gettyimages-648000506-612x612.jpg",
"https://i.postimg.cc/D0pNXbKS/gettyimages-648002772-612x612.jpg",
"https://i.postimg.cc/HkD2Pt3p/gettyimages-651742502-612x612.jpg",
"https://i.postimg.cc/kGHj43x8/gettyimages-823294904-612x612.jpg",
];
     var callback = () => api.sendMessage({body:`「 ${know} 」`,attachment: fs.createReadStream(__dirname + "/cache/5.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.jpg"));    
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.jpg")).on("close",() => callback());
   };
