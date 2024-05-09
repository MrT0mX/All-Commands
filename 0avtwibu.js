module.exports.config = {
	name: "avtwibu",
  version: "1.0.0",
	hasPermssion: 0,
	credits: "Kojiro", 
	description: "example /avtwibu 1 clarence ClarenceDK",
	commandCategory: "text",
	usages: "text",
  cooldowns: 5
}
module.exports.run = async ({ api, event, args, Users }) => { 
	const request = require("request");
	const fs = require("fs-extra");
	const axios = require("axios")
	const id = args[0]; //ID nhân vật
  if(!args[1]) {
    api.sendMessage(`Character ID is missing!`, event.threadID)
  }
    if(!args[1]) {
          api.sendMessage(`Missing background text!`, event.threadID);
    } 
    else {     
    const namebg = args[1]; //chữ nền
    if(!args[2]) { 
      api.sendMessage(`Missing signature! `, event.threadID);
    } 
      else {    
    const chuky = args[2] //chữ ký

	var callback = () => api.sendMessage({body:``,attachment: fs.createReadStream(__dirname + "/cache/avt1.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/avt1.png"),event.messageID);
	return request(encodeURI(`https://api.phamvandien.xyz/taoanhdep/avatarwibu?id=${id}&chu_nen=${namebg}&chu_ky=${chuky}`)).pipe(fs.createWriteStream(__dirname+'/cache/avt1.png')).on('close',() => callback());     
}
    }
}