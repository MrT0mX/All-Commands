module.exports.config = {
	name: "info",
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
var juswa = moment.tz("Asia/Dhaka").format("『D/MM/YYYY』 【hh:mm:ss】");
var link =["https://i.postimg.cc/pdV1Bhdq/20230206-002203.jpg", 
            
            "https://i.postimg.cc/FsczV1dt/images-2.png", 
            
            "https://i.postimg.cc/8kKq5btw/images-2.jpg",

            "https://i.postimg.cc/k5TBR809/images-3.png",
       
              "https://i.postimg.cc/pdV1Bhdq/20230206-002203.jpg",

                    "https://i.postimg.cc/pdV1Bhdq/20230206-002203.jpg"];
  
var callback = () => api.sendMessage({body:`ADMIN AND BOT INFORMATION 

BOT NAME : ${global.config.BOTNAME}

BOT ADMIN : 『MrTomXxX』

FACEBOOK : https://www.facebook.com/MrTomXxX

BOT PREFIX : ${global.config.PREFIX}

BOT OWNER : 『MrTomXxX』 

➟ UPTIME

TODAY IS TIME : ${juswa} 

BOT IS RUNNING ${hours}:${minutes}:${seconds}.

THANKS FOR USING ${global.config.BOTNAME} 『🙅🖤』`,attachment: fs.createReadStream(__dirname + "/cache/juswa.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/juswa.jpg")).on("close",() => callback());
   };