module.exports.config = {
  name: "messi",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Tanvir Ahmed", //don't change credit : api.control's.itz-tanvir
  description: "messi pitcher 💙 ",
  commandCategory: "image",
  usages: "messi",
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
   var hi = ["SHibluBhai009💙:MrTomXxX7@gmail.com",
             "& Facebook Page Link:- https://www.facebook.com/MrTomXxX"];
  var know = hi[Math.floor(Math.random() * hi.length)];
  var link = [
  "https://i.ibb.co/FVCXWkH/5e0f4bab046c8e761622eef67770803c.jpg",
"https://i.ibb.co/JrcYt2j/eb02ff5341eab696f881c305df04fb1f.jpg",
"https://i.ibb.co/ZcrswnW/4f10b6766bcf83a2c2667e77dfa2a6a0.jpg",
"https://i.ibb.co/TkstKXM/8c66c54bff60c9fb9afef4eb1a857659.jpg",
"https://i.ibb.co/024n4Xn/4c15964c2df9e2a2432115b1544b6539.jpg",
"https://i.ibb.co/txSTPWR/219deb3fca33631205ef4fe8966ded6e.jpg",
"https://i.ibb.co/8YJHZWP/b2f6b39c693b4cbb90cf9704e0dcd86f.jpg",
"https://i.ibb.co/ZNhKp59/829b9251ef7c78721a110bb2981a2bb4.jpg",
"https://i.ibb.co/DCs3pBT/2dfc15fa9a8566d98ee2db96eafdae55.jpg",
"https://i.ibb.co/xJcwVJM/536eef8096cb674d8c44ee463047bed9.jpg",
"",
];
     var callback = () => api.sendMessage({body:`「 ${know} 」`,attachment: fs.createReadStream(__dirname + "/cache/5.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.jpg"));    
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.jpg")).on("close",() => callback());
   };
