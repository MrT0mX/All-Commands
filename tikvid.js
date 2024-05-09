module.exports.config = {
	name: "tikvid",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "HungCho",
	description: "",
	commandCategory: "Media",
	usages: "",
	cooldowns: 1,
dependencies: {"request": "","fs": "","tiktok-scraper": ""}
};

module.exports.run = async({api, event, args}) => {
  var fs = require("fs-extra");
  var request = require("request");
  var tiktok = require('tiktok-scraper');
  var { threadID, messageID } = event;
  
  
  if(args.length == 0) api.sendMessage("/tik [info/mp4(no logo)", event.threadID,messageID);
  if(args[0] == "info") {
    try{
    var info = await tiktok.getUserProfileInfo(args[1]);
    console.log(info)
    var ab = info.user;
    var name = ab.nickname;
    var id = ab.id;
    var username = ab.uniqueId;
    var follow = info.stats.followerCount;
    var following = info.stats.followingCoun
    
    var callback = () => api.sendMessage({body:`Name: ${name}\n❄ID: ${id}\nUsername: ${username}\nFollower: ${follow} followers\n☘Following: ${following} users !\ nVideo count: ${info.stats.videoCount}\nLikes: ${info.stats.heartCount}\n==========\n${info.user.signature}`,attachment: fs.createReadStream(__dirname + "/src/1.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/src/1.png"), event.messageID);	
    return request(encodeURI(`${ab.avatarLarger}`)).pipe(fs.createWriteStream(__dirname+'/src/1.png')).on('close',() => callback());     
  }
   catch(e){
    api.sendMessage("User does not exist !",event.threadID,event.messageID)
   }
}
 
  }


author: event.senderID,
            messageID: info.messageID,
            video: res.data_nowatermark[0].url,
            mp3: res.data_music.url,
            title: res.title,
          authorvd: res.author_video,
          text : res.data_music.title
        })
    }) 
}
module.exports.handleReply = async function ({ args, event, Users, Currencies, api, handleReply }) {
 const axios = require("axios");
  const fs = require("fs-extra");
    const request = require("request");
    let { author, video,mp3, title,authorvd, text  , messageID } = handleReply;
    if (event.senderID != author) return api.sendMessage("Choose one or two, idiot.😠", event.threadID, event.messageID); 
    switch(handleReply.type) {
        case "reply": {
        switch(event.body){
          case"1":{
            var callback = () => api.sendMessage({body:`Video owner: ${authorvd}\nContent:${title}\n`,attachment: fs.createReadStream(__dirname + "/cache/toptop.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/toptop.mp4"),event.messageID);
return request(encodeURI(`${video}`)).pipe(fs.createWriteStream(__dirname+'/cache/toptop.mp4')).on('close',() => callback());     
          }
            case"2":{
            var callback = () => api.sendMessage({body:`𝐒𝐨𝐧𝐠: ${text}`,attachment: fs.createReadStream(__dirname + "/cache/toptop.m4a")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/toptop.m4a"),event.messageID);
return request(encodeURI(`${mp3}`)).pipe(fs.createWriteStream(__dirname+'/cache/toptop.m4a')).on('close',() => callback());     
          }
        }
        }
    }
    }