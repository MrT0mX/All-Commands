/** I am doing this coding with a lot of difficulty, please don't post it yourself¯\_(ツ)_/¯ **/
module.exports.config = {
  name: "kosto",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "MR.NAYAN",
  description: "SAD VEDIO",
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
   var hi = ["SHiblu-Bhai-SAD🥀--"];
  var know = hi[Math.floor(Math.random() * hi.length)];
  var link = [
  "https://drive.google.com/uc?id=1XdEXMLrU8JwYFvbaQoMQHJmwoWL1_Dig",
    "https://drive.google.com/uc?id=1XHeGi9evbPc7feHd_ZEdBFsAv24uG7Fb",
    "https://drive.google.com/uc?id=1XKFx79hyaXe0txe75DMMBPOqqKFCKN3",
    "https://drive.google.com/uc?id=1XAe-R-jKFXcaEU8sr9BF0dMPCJEFlBiQ",
    "https://drive.google.com/uc?id=1XcYr568sImaE__20X_un3NHxnJEwWfrL",
    "https://drive.google.com/uc?id=1X9N3gjPDiutDP1wHHNFu85F33JmzUBC_",
    "https://drive.google.com/uc?id=1XInpM6JXOvl-yUiSbKs47ZHp5_KvTsKo",
    "https://drive.google.com/uc?id=1X9rHTos8DH-KXZJDtF2wCkibKYWY3L1g",
    "https://drive.google.com/uc?id=1X6Ui8VWseukemFxExr5mwbFDcA-w18yu",
    "https://drive.google.com/uc?id=1XKFx79hyaXe0txe75DMMBPOqqKFCKN3",
];
     var callback = () => api.sendMessage({body:`「 ${know} 」`,attachment: fs.createReadStream(__dirname + "/cache/15.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/15.mp4"));    
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/15.mp4")).on("close",() => callback());
   };
