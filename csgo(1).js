module.exports.config = {
  name: "csgoquiz",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "keng",//fix some things by Ken
  description: "Choose the correct answer about CSGO item",
  commandCategory: "game-sp",
  usages: "csgoquiz [type]",
  cooldowns: 0
};

module.exports.run = async function ({ api, args, event, Currencies, Users }) {
  const axios = require("axios");
    const fs = require("fs-extra");
    const { senderID ,threadID, messageID } = event;
  	switch (args[0]) {
		case "rifle": 
		case "heavy":               
		case "smg":
    case "piston":
    case "grenade":
    case "knife":{
      let res = (await	axios.get(encodeURI(`https://ginxkin-api.herokuapp.com/api/csgo_quiz/${args[0]}`))).data;
      let csgo = (await axios.get(`${res.link}`, { responseType: "arraybuffer" } )).data;
      fs.writeFileSync( __dirname + "/cache/csgo.png", Buffer.from(csgo, "utf-8"));
      var namePlayer_react = await Users.getData(event.senderID)
     return  api.sendMessage({body:`=====[CSGO QUIZ]=====\n${res.body}\n=====[${args[0].toUpperCase()}]=====\n\nReply to this message with your answer`,attachment: fs.createReadStream(__dirname + `/cache/csgo.png`)}, event.threadID, async (err, info) => {
                    global.client.handleReply.push({
                        type: args[0],
                        name: this.config.name,
                        senderID: event.senderID,
                        messageID:  info.messageID,
                        replyID: event.messageID, 
                        threadID: event.threadID,
                        answer_:res.answer
                    },event.messageID);
        await new Promise(resolve => setTimeout(resolve, 1000))
        })  
       
      return fs.unlinkSync(__dirname + `/cache/csgo.png`);
		}
    default: {
      let res = (await	axios.get(encodeURI(`https://ginxkin-api.herokuapp.com/api/csgo_quiz/random`))).data;
      let csgo = (await axios.get(`${res.link}`, { responseType: "arraybuffer" } )).data;
      fs.writeFileSync( __dirname + "/cache/csgo.png", Buffer.from(csgo, "utf-8"));
      return api.sendMessage({body:`=====[CSGO QUIZ]=====\n${res.body}\n=====[RANDOM]=====\n\nReply to this message with your answer`,attachment: fs.createReadStream(__dirname + `/cache/csgo.png`)}, event.threadID, async (err, info) => {
                    global.client.handleReply.push({
                        type: "random",
                        name: this.config.name,
                        senderID: event.senderID,
                        messageID:  info.messageID,
                        replyID: event.messageID, 
                        threadID: event.threadID,
                        answer_:res.answer
                    },event.messageID);
        await new Promise(resolve => setTimeout(resolve, 1000))
        })  
           
      return fs.unlinkSync(__dirname + `/cache/csgo.png`);
    }
    }
}
module.exports.handleReply = async function({ api, event, args, handleReply, client, __GLOBAL, Threads, Users, Currencies }) {
    if (event.senderID == api.getCurrentUserID()) return;
    const moment = require("moment-timezone");
    let { senderID, messageID, threadID } = event;
    let name = (await Users.getData(senderID)).name;
    var money = parseInt(Math.floor(Math.random() * 50))
    switch (handleReply.type) {
		case "rifle": 
		case "heavy":               
		case "smg":
    case "piston":
    case "grenade":
    case "knife":{
      if(event.body.toUpperCase() == handleReply.answer_) return api.sendMessage({body :`Congratulations ${name} for the correct answer`}, handleReply.threadID, () => api.unsendMessage(handleReply.messageID));    
      else return api.sendMessage({body :`Wrong answer ${handleReply.answer_} just right!`}, handleReply.threadID, () => api.unsendMessage(handleReply.messageID));    
    }
    default: {
      if(event.body.toUpperCase() == handleReply.answer_) return api.sendMessage({body :`Congratulations ${name} for the correct answer, you get ${money}$`}, handleReply.threadID, () => api.unsendMessage(handleReply.messageID) + Currencies.increaseMoney(event.senderID, money));    
      else return api.sendMessage({body :`Wrong, then ${handleReply.answer_} is correct!`}, handleReply.threadID, () => api.unsendMessage(handleReply.messageID));    
     }
    }
};