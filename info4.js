module.exports.config = {
	name: "shiblu",
	version: "1.0.1", 
	hasPermssion: 0,
	credits: "Joshua Sy", //don't change the credits please
	description: "Admin and Bot info.",
	commandCategory: "...",
	cooldowns: 1,
	dependencies: 
	{
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Manila").format("『D/MM/YYYY』 【hh:mm:ss】");
var link = ["https://i.postimg.cc/766FHNQt/Screenshot-2022-11-23-11-38-04-877-com-facebook-orca.jpg", 
            
            "https://i.postimg.cc/8CDDSMSx/Screenshot-2022-11-23-11-31-20-564-com-facebook-lite.jpg", 
            
            "https://i.postimg.cc/L572KW9V/Screenshot-2022-11-23-11-31-08-815-com-facebook-lite.jpg",
            
            "https://i.postimg.cc/zvPXDBjK/Screenshot-2022-11-23-11-31-00-359-com-facebook-lite.jpg"];
  
var callback = () => api.sendMessage({body:`জ্বী বলুন শুনতেছি......
ADMIN AND BOT INFORMATION 
BOT NAME : 🤖ＳＨｉｂｌｕ ＢｏＴ- 69🤖 

*My Owner info & Any Problem Contact :-
  
Page1 Link :- https://www.facebook.com/COPYRIGHT.8484

Page 2 Link :- https://www.facebook.com/MohammadSHiblu009/

★Facebook Account Link:-https://www.facebook.com/SHibluBhai69

★Support Email:- SHiblum44@gmail.com

➟ UPTIME

TODAY IS TIME : ${juswa} 

BOT IS RUNNING ${hours}:${minutes}:${seconds}.

THANKS FOR USING ${global.config.BOTNAME} 『🙅🖤』`,attachment: fs.createReadStream(__dirname + "/cache/juswa.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/juswa.jpg")).on("close",() => callback());
   };