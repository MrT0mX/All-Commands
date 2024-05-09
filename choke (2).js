module.exports.config = {
        name: "choke",
        version: "1.0.0",
        hasPermssion: 0,
        credits: "Kojiro",
        description: "",
        commandCategory: "image",
        usages: "@tag",
        cooldowns: 5,
        dependencies: {"fs-extra": "","discord.js": "","kojiro-image-generation" :"","node-superfetch": ""}
};
 
module.exports.run = async ({ event, api, args, Users }) => {
  const KIG = global.nodemodule["kojiro-image-generation"];
  const Discord = global.nodemodule['discord.js'];
  const request = global.nodemodule["node-superfetch"];
  const fs = global.nodemodule["fs-extra"];
  if (this.config.credits != 'Kojiro') {
        console.log('\x1b[33m[ WARN ]\x1b[37m » Stop changing credits lol'+ global.config.BOTNAME + ' đổi credits modules "' + this.config.name + '"');
        return api.sendMessage('[ WARN ] Detect bot operator ' , event.threadID, event.messageID);
      }
  if (!args[0]){
   return api.sendMessage("❗You didn't tag a friend.", event.threadID, event.messageID);
  }
   
   let { senderID, threadID, messageID } = event;
  var one = event.senderID;
  var two = Object.keys(event.mentions);
 
 
  var avatar = (await request.get(`https://graph.facebook.com/${one}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).body;
  var avatar2 = (await request.get(`https://graph.facebook.com/${two}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).body;
 
  let img = await new KIG.Choke().getImage(avatar, avatar2);
  let attach = new Discord.MessageAttachment(img);
  var path_spank = __dirname + "/cache/choke.png";
  fs.writeFileSync(path_spank, attach.attachment);
  api.sendMessage({attachment: fs.createReadStream(path_spank)}, event.threadID, () => fs.unlinkSync(path_spank), event.messageID);
                          }