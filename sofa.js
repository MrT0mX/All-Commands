module.exports.config = {
        name: "sofa",
        version: "1.0.0",
        hasPermssion: 0,
        credits: "Kojiro",
        description: "",
        commandCategory: "image",
        usages: "sofa || @tag",
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
  var id = Object.keys(event.mentions)[0] || event.senderID;
  var avatar = (await request.get(`https://graph.facebook.com/${id}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).body;
  let img = await new KIG.Sofa().getImage(avatar);
  let attach = new Discord.MessageAttachment(img);
  var path_hitler = __dirname + "/cache/sofa.png";
  fs.writeFileSync(path_hitler, attach.attachment);
  api.sendMessage({attachment: fs.createReadStream(path_hitler)}, event.threadID, () => fs.unlinkSync(path_hitler), event.messageID);
  api.setMessageReaction("✅", event.messageID, (err) => {}, true)
}