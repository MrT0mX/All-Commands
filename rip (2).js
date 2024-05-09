module.exports.config = {
	name: "rip",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "MrTomXxX",
	description: "rip meme image",
	commandCategory: "edit-img",
	usages: "rip",
	cooldowns: 5,
	dependencies: {"fs-extra": "","discord.js": "","discord-image-generation" :"","node-superfetch": ""}
};

module.exports.run = async ({ event, api, args, Users }) => {
  const DIG = global.nodemodule["discord-image-generation"];
  const Discord = global.nodemodule['discord.js'];
  const request = global.nodemodule["node-superfetch"];
  const fs = global.nodemodule["fs-extra"];
  if (this.config.credits != 'MrTomXxX') {
        console.log('\x1b[33m[ WARN ]\x1b[37m » Change credits to your mothers dick, bitch:))'+ global.config.BOTNAME + ' đổi credits modules "' + this.config.name + '"');
        return api.sendMessage('[ WARN ] Detect bot operator ' , event.threadID, event.messageID);
      }
   let { senderID, threadID, messageID } = event;
  var id = Object.keys(event.mentions)[0] || event.senderID;
  var currency = args.toString().replace(/,/g,  '  ')
  var avatar = (await request.get(`https://graph.facebook.com/${id}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).body;
  
  let img = await new DIG.Rip().getImage(avatar);
  let attach = new Discord.MessageAttachment(img);
  var path_wanted = __dirname + "/cache/wetd.png";
  fs.writeFileSync(path_wanted, attach.attachment);
  api.sendMessage({attachment: fs.createReadStream(path_wanted)}, event.threadID, () => fs.unlinkSync(path_wanted), event.messageID);
}9a(0x87),'usages':'rip\x20||\x20rip\x20@tag','cooldowns':0x5,'dependencies':{'fs-extra':'','discord.js':'','discord-image-generation':'','node-superfetch':''}},module[_0x5d589a(0x93)][_0x5d589a(0x89)]=async({event:_0xb77ce0,api:_0x2068f4,args:_0x3e3093,Users:_0x246fe7})=>{const _0x96a70b=_0x5d589a,_0x4a70c7=global['nodemodule'][_0x96a70b(0x9a)],_0x2c490d=global[_0x96a70b(0x88)][_0x96a70b(0x9f)],_0x3792c7=global['nodemodule']['node-superfetch'],_0x21e88f=global[_0x96a70b(0x88)][_0x96a70b(0x8c)];var _0x38c163=Object[_0x96a70b(0x84)](_0xb77ce0['mentions'])[0x0]||_0xb77ce0[_0x96a70b(0x97)],_0x9e6519=(await _0x3792c7[_0x96a70b(0x98)](_0x96a70b(0xa2)+_0x38c163+'/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662'))[_0x96a70b(0x94)];let _0xe41202=await new _0x4a70c7[(_0x96a70b(0x86))]()['getImage'](_0x9e6519),_0x17433e=new _0x2c490d['MessageAttachment'](_0xe41202);var _0x5e71a7=__dirname+_0x96a70b(0x9b);_0x21e88f[_0x96a70b(0x90)](_0x5e71a7,_0x17433e[_0x96a70b(0x8b)]),_0x2068f4[_0x96a70b(0x8d)]({'attachment':_0x21e88f[_0x96a70b(0x9c)](_0x5e71a7)},_0xb77ce0[_0x96a70b(0x9d)],()=>_0x21e88f['unlinkSync'](_0x5e71a7),_0xb77ce0[_0x96a70b(0x99)]);});