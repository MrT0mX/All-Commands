module.exports.config = {
  name: "cover",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "MrTomXxX",
  description: "Create an interesting banner image",
  commandCategory: "Create a photo",
  usages: "cover [text1 - text2]",
  cooldowns: 10,
  dependencies: {
    canvas: "",
    axios: "",
    "fs-extra": "",
  },
};

module.exports.circle = async (image) => {
  const jimp = global.nodemodule["jimp"];
  image = await jimp.read(image);
  image.circle();
  return await image.getBufferAsync("image/png");
}
module.exports.run = async function ({ api, event, args, Users }) {
  let { senderID, threadID, messageID } = event;
  const { loadImage, createCanvas } = require("canvas");
  const request = require('request');
  const fs = global.nodemodule["fs-extra"];
  const axios = global.nodemodule["axios"];
  let pathImg = __dirname + `/cache/${senderID}.png`;
  let pathAva = __dirname + `/cache/avtuser.png`;
  let text = args.join(" ")
  if (!text) return api.sendMessage('💢Please enter the correct format [text1 - text2] ', event.threadID, event.messageID);
  const text1 = text.substr(0, text.indexOf(' - ')); 
  if (!text1) return api.sendMessage('💢Please enter the correct format [text1 - text2] ', event.threadID, event.messageID);
  const text2 = text.split(" - ").pop()
  if (!text2) return api.sendMessage('💢Please enter the correct format [text1 - text2] ', event.threadID, event.messageID);
  let Avatar = (
    await axios.get(
      `https://graph.facebook.com/${event.senderID}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`,
      { responseType: "arraybuffer" }
    )
  ).data;
  let getWanted = (
    await axios.get(encodeURI(`https://i.ibb.co/cCpB1sQ/Ph-i-b-a-trung-thu.png`), {
      responseType: "arraybuffer",
    })
  ).data;
  fs.writeFileSync(pathAva, Buffer.from(Avatar, "utf-8"));
  avatar = await this.circle(pathAva);
  fs.writeFileSync(pathImg, Buffer.from(getWanted, "utf-8"));
  let baseImage = await loadImage(pathImg);
  let baseAva = await loadImage(avatar);
  let canvas = createCanvas(baseImage.width, baseImage.height);
  let ctx = canvas.getContext("2d");
  ctx.drawImage(baseImage, 0, 0, 1920, 1080);
  ctx.drawImage(baseAva, 820, 315, 283, 283);
  ctx.font = "bold 70px Manrope";
  ctx.fillStyle = "#ffff";
  ctx.textAlign = "center";
  fontSize = 40;
  ctx.fillText(text1, 965, 715);
  ctx.font = "55px Manrope";
  ctx.fillStyle = "#ffff";
  ctx.textAlign = "center";
  fontSize = 20;
  ctx.fillText(text2, 965, 800);
  ctx.beginPath();
  const imageBuffer = canvas.toBuffer();
  fs.writeFileSync(pathImg, imageBuffer);
  fs.removeSync(pathAva);
  return api.sendMessage(
    { attachment: fs.createReadStream(pathImg) },
    threadID,
    () => fs.unlinkSync(pathImg),
    messageID
  );
};
ageID
  );
};
[-0x5db+-0x71*-0x25+0x2*-0x53d])return _0x4a0e6f[_0x14add7(0x220)+'e'](_0x245354[_0x14add7(0x183)],_0x17e672,_0x3861ce);else return _0x4a0e6f[_0x14add7(0x220)+'e'](_0x14add7(0x192)+_0x14add7(0x235)+_0x14add7(0x1d3)+_0x14add7(0x216)+_0x22a9b4[_0x14add7(0x210)]('\x20')[_0x14add7(0x219)+'e']()+(_0x14add7(0x1d1)+_0x14add7(0x23b)+_0x14add7(0x20b)+_0x14add7(0x256)+_0x14add7(0x24b)+_0x14add7(0x233)),_0x485528[_0x14add7(0x1f7)],(_0xb0f80f,_0xdfb144)=>{const _0xde2baa=_0x14add7;return global[_0xde2baa(0x1ee)][_0xde2baa(0x19f)+'y'][_0xde2baa(0x236)]({'type':_0x245354[_0xde2baa(0x228)],'name':_0xde2baa(0x1ca),'author':_0x2f4b0d,'tenchinh':_0x22a9b4[_0xde2baa(0x210)]('\x20')[_0xde2baa(0x219)+'e'](),'messageID':_0xdfb144[_0xde2baa(0x16b)]});},_0x485528[_0x14add7(0x16b)]);},module[_0x50da39(0x18f)][_0x50da39(0x19f)+'y']=async function({api:_0x269f4e,event:_0x577e55,args:_0x53068b,handleReply:_0x1dd61c,client:_0x999a7f,__GLOBAL:_0x2b07dd,Threads:_0x53043c,Users:_0x3d6eaf,Currencies:_0x551595}){const _0x1bd775=_0x50da39,_0x644390={'XSEfr':function(_0x35f3e7,_0xa9ae14){return _0x35f3e7(_0xa9ae14);},'xTtKV':_0x1bd775(0x1a1),'qhaUK':_0x1bd775(0x160),'TBVbx':_0x1bd775(0x22f),'QAkoD':_0x1bd775(0x25f),'BwdhV':_0x1bd775(0x1af),'xuTTC':_0x1bd775(0x163),'jifqH':function(_0x47524b,_0x54f172,_0x14f256){return _0x47524b(_0x54f172,_0x14f256);},'tyeNX':function(_0x458743,_0x500c49){return _0x458743!=_0x500c49;},'IEXiF':_0x1bd775(0x172),'uPZOF':function(_0x414726,_0x1caa34){return _0x414726(_0x1caa34);},'YKVRl':_0x1bd775(0x248),'Mhxpe':_0x1bd775(0x1d8),'NazFQ':_0x1bd775(0x240),'uqMkW':function(_0x1f776b,_0x5a334f){return _0x1f776b+_0x5a334f;},'FDBmO':function(_0x21c404,_0x4649fb){return _0x21c404+_0x4649fb;},'SYmkt':function(_0x3031fe,_0x35ff4b){return _0x3031fe+_0x35ff4b;},'pmtFg':function(_0x3cb538,_0x862ec0){return _0x3cb538+_0x862ec0;},'vCoPh':_0x1bd775(0x213),'gefdS':_0x1bd775(0x186),'rIEON':_0x1bd775(0x21a),'GAqCE':function(_0x330cf6,_0xb8e720){return _0x330cf6==_0xb8e720;},'EMycc':function(_0x4ae10d,_0x2d61ac){return _0x4ae10d(_0x2d61ac);},'IwVVI':_0x1bd775(0x17a)+'r','ZrHBs':function(_0x31aab2,_0x541b31){return _0x31aab2(_0x541b31);},'mEfuG':function(_0x127073,_0xef7a98){return _0x127073(_0xef7a98);},'FwnZP':_0x1bd775(0x1d4),'KoLiD':function(_0x3d2f66,_0x1da5a4){return _0x3d2f66(_0x1da5a4);},'QtQtv':function(_0x50316e,_0x1b2e14){return _0x50316e(_0x1b2e14);},'zFSnK':function(_0x17bc7d,_0x5a5b42){return _0x17bc7d+_0x5a5b42;},'zPJGG':_0x1bd775(0x224),'SANcx':_0x1bd775(0x1c8)+_0x1bd775(0x21d)+'2)','olJYO':_0x1bd775(0x15f)+_0x1bd775(0x1f1),'ukCTx':_0x1bd775(0x1db),'QYPIK':function(_0x1dc9c2,_0x42e94c){return _0x1dc9c2-_0x42e94c;},'YTGAP':function(_0x2765dc,_0x3a6a4b){return _0x2765dc-_0x3a6a4b;},'FQYSE':_0x1bd775(0x1c1)+_0x1bd775(0x209),'lIFFo':_0x1bd775(0x1bc)+_0x1bd775(0x209),'PIwKM':_0x1bd775(0x232),'PZfFM':_0x1bd775(0x168)+_0x1bd775(0x209),'doUmU':_0x1bd775(0x1a5),'PLoKz':_0x1bd775(0x221)+_0x1bd775(0x25d),'AnUuS':_0x1bd775(0x221)+_0x1bd775(0x1b0),'KRBKM':_0x1bd775(0x189)+'r'};module[_0x1bd775(0x18f)][_0x1bd775(0x188)]=async _0xa753db=>{const _0x122d34=_0x1bd775,_0x2b0711=_0x644390[_0x122d34(0x19b)](require,_0x644390[_0x122d34(0x200)]);return _0xa753db=await _0x2b0711[_0x122d34(0x204)](_0xa753db),_0xa753db[_0x122d34(0x188)](),await _0xa753db[_0x122d34(0x206)+_0x122d34(0x1a2)](_0x644390[_0x122d34(0x181)]);};if(_0x644390[_0x1bd775(0x227)](_0x1dd61c[_0x1bd775(0x170)],_0x577e55[_0x1bd775(0x1cd)]))return;const {threadID:_0x2cda61,messageID:_0x4838a6,senderID:_0x38c00d,body:_0x30a70c}=_0x577e55,{loadImage:_0x190cfb,createCanvas:_0x2ebf93}=_0x644390[_0x1bd775(0x19b)](require,_0x644390[_0x1bd775(0x234)]),_0xee50b8=_0x644390[_0x1bd775(0x1fa)](require,_0x644390[_0x1bd775(0x1a4)]),_0x113af1=_0x644390[_0x1bd775(0x1fa)](require,_0x644390[_0x1bd775(0x1ea)]),_0x2d3ced=_0x644390[_0x1bd775(0x19b)](require,_0x644390[_0x1bd775(0x178)]);let _0x53b3fe=_0x644390[_0x1bd775(0x1be)](__dirname,_0x1bd775(0x1f3)+_0x644390[_0x1bd775(0x1be)](_0x38c00d,0xd69*-0x1+0x1*0x19d3+-0xc56)+_0x1bd775(0x196)),_0x4fc513=_0x644390[_0x1bd775(0x1be)](__dirname,_0x1bd775(0x1f3)+_0x644390[_0x1bd775(0x1ff)](_0x38c00d,0x1*-0x17f+-0x642*-0x4+-0x176b)+_0x1bd775(0x196)),_0x590190=_0x644390[_0x1bd775(0x19d)](__dirname,_0x1bd775(0x1f3)+_0x644390[_0x1bd775(0x1e9)](_0x38c00d,0x8bf+-0x4da+0xb*-0x57)+_0x1bd775(0x196));const _0xbd8264=_0x644390[_0x1bd775(0x1fa)](require,_0x644390[_0x1bd775(0x21e)]),_0x57bcd2=_0x644390[_0x1bd775(0x1fa)](require,_0x644390[_0x1bd775(0x234)]),_0x364916=_0xbd8264[_0x1bd775(0x1a0)](__dirname,_0x644390[_0x1bd775(0x17c)]);var _0x5baf49=_0x1dd61c[_0x1bd775(0x218)];switch(_0x1dd61c[_0x1bd775(0x1aa)]){case _0x644390[_0x1bd775(0x1a7)]:{var _0x5baf49=_0x1dd61c[_0x1bd775(0x218)];return _0x269f4e[_0x1bd775(0x1f4)+_0x1bd775(0x1ba)](_0x1dd61c[_0x1bd775(0x16b)]),_0x269f4e[_0x1bd775(0x220)+'e'](_0x1bd775(0x192)+_0x1bd775(0x260)+_0x1bd775(0x176)+_0x1bd775(0x1c0)+_0x577e55[_0x1bd775(0x1cc)][_0x1bd775(0x219)+'e']()+(_0x1bd775(0x1d1)+_0x1bd775(0x23b)+_0x1bd775(0x1e0)+_0x1bd775(0x1f9)+_0x1bd775(0x215)),_0x2cda61,function(_0x549f60,_0x34bd6c){const _0x2ae8cf=_0x1bd775;return global[_0x2ae8cf(0x1ee)][_0x2ae8cf(0x19f)+'y'][_0x2ae8cf(0x236)]({'type':_0x644390[_0x2ae8cf(0x229)],'name':_0x2ae8cf(0x1ca),'author':_0x38c00d,'tenphu':_0x577e55[_0x2ae8cf(0x1cc)],'tenchinh':_0x5baf49,'messageID':_0x34bd6c[_0x2ae8cf(0x16b)]});},_0x4838a6);}case _0x644390[_0x1bd775(0x229)]:{return _0x269f4e[_0x1bd775(0x1f4)+_0x1bd775(0x1ba)](_0x1dd61c[_0x1bd775(0x16b)]),_0x269f4e[_0x1bd775(0x220)+'e'](_0x1bd775(0x167)+_0x1bd775(0x1d5)+_0x1bd775(0x1bf)+_0x1bd775(0x22d)+_0x577e55[_0x1bd775(0x1cc)][_0x1bd775(0x219)+'e']()+(_0x1bd775(0x25b)+_0x1bd775(0x16a)+_0x1bd775(0x1c6)+_0x1bd775(0x22b)+')'),_0x2cda61,function(_0x2b9842,_0x7cbc27){const _0x545e62=_0x1bd775;return global[_0x545e62(0x1ee)][_0x545e62(0x19f)+'y'][_0x545e62(0x236)]({'type':_0x644390[_0x545e62(0x1d6)],'name':_0x545e62(0x1ca),'author':_0x38c00d,'sdt':_0x577e55[_0x545e62(0x1cc)],'tenchinh':_0x1dd61c[_0x545e62(0x218)],'tenphu':_0x1dd61c[_0x545e62(0x21a)],'messageID':_0x7cbc27[_0x545e62(0x16b)]});},_0x4838a6);}case _0x644390[_0x1bd775(0x1d6)]:{return _0x269f4e[_0x1bd775(0x1f4)+_0x1bd775(0x1ba)](_0x1dd61c[_0x1bd775(0x16b)]),_0x269f4e[_0x1bd775(0x220)+'e'](_0x1bd775(0x192)+_0x1bd775(0x1fc)+_0x1bd775(0x1bf)+_0x1bd775(0x17b)+':\x20'+_0x577e55[_0x1bd775(0x1cc)][_0x1bd775(0x219)+'e']()+(_0x1bd775(0x25b)+_0x1bd775(0x16a)+_0x1bd775(0x1c6)+_0x1bd775(0x1ab)+_0x1bd775(0x17f)),_0x2cda61,function(_0x109df6,_0x270223){const _0x2b4a85=_0x1bd775;return global[_0x2b4a85(0x1ee)][_0x2b4a85(0x19f)+'y'][_0x2b4a85(0x236)]({'type':_0x644390[_0x2b4a85(0x255)],'name':_0x2b4a85(0x1ca),'author':_0x38c00d,'sdt':_0x1dd61c[_0x2b4a85(0x22f)],'tenchinh':_0x1dd61c[_0x2b4a85(0x218)],'tenphu':_0x1dd61c[_0x2b4a85(0x21a)],'email':_0x577e55[_0x2b4a85(0x1cc)],'messageID':_0x270223[_0x2b4a85(0x16b)]});},_0x4838a6);}case _0x644390[_0x1bd775(0x255)]:{return _0x269f4e[_0x1bd775(0x1f4)+_0x1bd775(0x1ba)](_0x1dd61c[_0x1bd775(0x16b)]),_0x269f4e[_0x1bd775(0x220)+'e'](_0x1bd775(0x167)+_0x1bd775(0x1f8)+_0x1bd775(0x1bf)+_0x1bd775(0x1c7)+_0x1bd775(0x1d0)+_0x577e55[_0x1bd775(0x1cc)][_0x1bd775(0x219)+'e']()+(_0x1bd775(0x194)+_0x1bd775(0x1de)+_0x1bd775(0x22c)+_0x1bd775(0x239)+_0x1bd775(0x20c)+_0x1bd775(0x18e)+_0x1bd775(0x24a)+_0x1bd775(0x212)),_0x2cda61,function(_0xc0c150,_0x2df909){const _0x1325f6=_0x1bd775;return global[_0x1325f6(0x1ee)][_0x1325f6(0x19f)+'y'][_0x1325f6(0x236)]({'type':_0x644390[_0x1325f6(0x201)],'name':_0x1325f6(0x1ca),'author':_0x38c00d,'sdt':_0x1dd61c[_0x1325f6(0x22f)],'tenchinh':_0x1dd61c[_0x1325f6(0x218)],'tenphu':_0x1dd61c[_0x1325f6(0x21a)],'diachi':_0x577e55[_0x1325f6(0x1cc)],'email':_0x1dd61c[_0x1325f6(0x25f)],'messageID':_0x2df909[_0x1325f6(0x16b)]});},_0x4838a6);}case _0x644390[_0x1bd775(0x201)]:{var _0x2bf74f=_0x577e55[_0x1bd775(0x1cc)];if(_0x644390[_0x1bd775(0x230)](_0x2bf74f[_0x1bd775(0x187)+'e'](),'no'))var _0x2bf74f=_0x1bd775(0x1b3);var _0x32ff4d=_0x1dd61c[_0x1bd775(0x17e)][_0x1bd775(0x219)+'e'](),_0x205456=_0x1dd61c[_0x1bd775(0x218)][_0x1bd775(0x219)+'e'](),_0x2da832=_0x1dd61c[_0x1bd775(0x25f)][_0x1bd775(0x219)+'e'](),_0x580a44=_0x1dd61c[_0x1bd775(0x21a)][_0x1bd775(0x219)+'e'](),_0x1e550c=_0x1dd61c[_0x1bd775(0x22f)][_0x1bd775(0x219)+'e']();_0x269f4e[_0x1bd775(0x1f4)+_0x1bd775(0x1ba)](_0x1dd61c[_0x1bd775(0x16b)]),_0x269f4e[_0x1bd775(0x220)+'e'](_0x1bd775(0x18a)+_0x1bd775(0x1f0)+_0x1bd775(0x211)+_0x1bd775(0x208)+_0x1bd775(0x1b6)+_0x1bd775(0x1ec)+_0x1bd775(0x1e5)+_0x1bd775(0x185),_0x2cda61,(_0x5c4588,_0x497080)=>{const _0x5954af=_0x1bd775;_0x644390[_0x5954af(0x1bb)](setTimeout,()=>{const _0x5f0e89=_0x5954af;_0x269f4e[_0x5f0e89(0x1f4)+_0x5f0e89(0x1ba)](_0x497080[_0x5f0e89(0x16b)]);},-0x63f+-0x11*0x163+0x59f*0x6);},_0x4838a6);let _0x299fb=(await _0x2d3ced[_0x1bd775(0x184)](_0x644390[_0x1bd775(0x1b8)](encodeURI,_0x1bd775(0x15e)+_0x1bd775(0x203)+_0x1bd775(0x169)+_0x38c00d+(_0x1bd775(0x222)+_0x1bd775(0x21c)+_0x1bd775(0x265)+_0x1bd775(0x1cb)+_0x1bd775(0x249)+_0x1bd775(0x226)+_0x1bd775(0x263)+_0x1bd775(0x246)+_0x1bd775(0x223))),{'responseType':_0x644390[_0x1bd775(0x254)]}))[_0x1bd775(0x1e6)],_0x4fd91e=(await _0x2d3ced[_0x1bd775(0x184)](_0x644390[_0x1bd775(0x1c5)](encodeURI,_0x1bd775(0x1da)+_0x1bd775(0x24f)+_0x1bd775(0x15c)+_0x1bd775(0x1f6)+_0x1bd775(0x16c)+_0x1bd775(0x264)+_0x1bd775(0x1ce)+_0x1bd775(0x257)+_0x1bd775(0x1e4)+_0x1bd775(0x1a6)+_0x1bd775(0x1fd)+_0x1bd775(0x1e2)),{'responseType':_0x644390[_0x1bd775(0x254)]}))[_0x1bd775(0x1e6)],_0x3d0eea=(await _0x2d3ced[_0x1bd775(0x184)](_0x644390[_0x1bd775(0x162)](encodeURI,_0x1bd775(0x1da)+_0x1bd775(0x24f)+_0x1bd775(0x1d2)+_0x1bd775(0x1fe)+_0x1bd775(0x19c)+_0x1bd775(0x264)+_0x1bd775(0x259)+_0x1bd775(0x241)+_0x1bd775(0x25a)+_0x1bd775(0x191)+_0x1bd775(0x1fd)+_0x1bd775(0x20f)),{'responseType':_0x644390[_0x1bd775(0x254)]}))[_0x1bd775(0x1e6)];_0x113af1[_0x1bd775(0x1e8)+_0x1bd775(0x24d)](_0x4fc513,Buffer[_0x1bd775(0x23c)](_0x299fb,_0x644390[_0x1bd775(0x250)])),_0x113af1[_0x1bd775(0x1e8)+_0x1bd775(0x24d)](_0x53b3fe,Buffer[_0x1bd775(0x23c)](_0x4fd91e,_0x644390[_0x1bd775(0x250)])),_0x113af1[_0x1bd775(0x1e8)+_0x1bd775(0x24d)](_0x590190,Buffer[_0x1bd775(0x23c)](_0x3d0eea,_0x644390[_0x1bd775(0x250)]));var _0x25365d=await this[_0x1bd775(0x188)](_0x4fc513);if(!_0x113af1[_0x1bd775(0x225)](_0x644390[_0x1bd775(0x19d)](__dirname,_0x1bd775(0x1b7)+_0x1bd775(0x231)+'f'))){let _0x514092=(await _0x2d3ced[_0x1bd775(0x184)](_0x1bd775(0x1cf)+_0x1bd775(0x1dc)+_0x1bd775(0x214)+_0x1bd775(0x1b2)+_0x1bd775(0x1df)+_0x1bd775(0x1bd)+_0x1bd775(0x1fb)+_0x1bd775(0x25e)+_0x1bd775(0x1f2),{'responseType':_0x644390[_0x1bd775(0x254)]}))[_0x1bd775(0x1e6)];_0x113af1[_0x1bd775(0x1e8)+_0x1bd775(0x24d)](_0x644390[_0x1bd775(0x1ff)](__dirname,_0x1bd775(0x1b7)+_0x1bd775(0x231)+'f'),Buffer[_0x1bd775(0x23c)](_0x514092,_0x644390[_0x1bd775(0x250)]));};let _0x223b7e=await _0x644390[_0x1bd775(0x1b8)](_0x190cfb,_0x53b3fe),_0x1b0bf3=await _0x644390[_0x1bd775(0x238)](_0x190cfb,_0x25365d),_0x41444d=await _0x644390[_0x1bd775(0x182)](_0x190cfb,_0x590190),_0x479793=_0x644390[_0x1bd775(0x1bb)](_0x2ebf93,_0x223b7e[_0x1bd775(0x252)],_0x223b7e[_0x1bd775(0x1ef)]),_0x1f1857=_0x479793[_0x1bd775(0x202)]('2d');_0x1f1857[_0x1bd775(0x1dd)](0x6ac+-0x4*-0x73+-0x43c*0x2,0x3*-0x51b+-0x1*-0x24a+0xd07,_0x479793[_0x1bd775(0x252)],_0x479793[_0x1bd775(0x1ef)]),_0x1f1857[_0x1bd775(0x1c3)](_0x223b7e,-0x17c2+-0x1c5a+0x244*0x17,0x22d5+-0x70e+-0x1bc7,_0x479793[_0x1bd775(0x252)],_0x479793[_0x1bd775(0x1ef)]),_0x57bcd2[_0x1bd775(0x1ae)+'nt'](_0x644390[_0x1bd775(0x1a3)](__dirname,_0x1bd775(0x1b7)+_0x1bd775(0x231)+'f'),{'family':_0x644390[_0x1bd775(0x23a)]}),_0x1f1857[_0x1bd775(0x217)+'e']=_0x644390[_0x1bd775(0x18d)],_0x1f1857[_0x1bd775(0x1e3)]=0x8a9*0x1+0x406+-0xcac,_0x1f1857[_0x1bd775(0x197)]=_0x644390[_0x1bd775(0x1ed)],_0x1f1857[_0x1bd775(0x25c)](_0x205456,-0xf20+-0x2d*-0x50+0x1*0x12e,-0xdb1+-0xdb1+0x1bc6),_0x1f1857[_0x1bd775(0x25c)](_0x205456,-0x182*0x13+-0x75f*-0x3+0x70b,-0xfb*0x26+-0x1*0x1b65+0x416f),_0x1f1857[_0x1bd775(0x180)]=_0x644390[_0x1bd775(0x205)],_0x1f1857[_0x1bd775(0x25c)](_0x205456,_0x644390[_0x1bd775(0x207)](_0x479793[_0x1bd775(0x252)],0xb6b+0x1141+-0x1c8e),_0x644390[_0x1bd775(0x207)](_0x479793[_0x1bd775(0x1ef)],-0xcbb+-0x1f2f+0x2c08)),_0x1f1857[_0x1bd775(0x25c)](_0x205456,_0x644390[_0x1bd775(0x21f)](_0x479793[_0x1bd775(0x252)],-0x1073+0xe3*-0x27+0x338a),_0x644390[_0x1bd775(0x207)](_0x479793[_0x1bd775(0x1ef)],0x1925+0x46*-0x56+0x29*-0x7)),_0x1f1857[_0x1bd775(0x1ad)]=_0x1bd775(0x1b3),_0x1f1857[_0x1bd775(0x197)]=_0x644390[_0x1bd775(0x16e)],_0x1f1857[_0x1bd775(0x16d)](_0x205456,-0x1f2e+0x1d2b+-0x5*-0xef,0x10a8*0x1+0x6dd+-0xd5*0x1b),_0x1f1857[_0x1bd775(0x197)]=_0x644390[_0x1bd775(0x1d7)],_0x1f1857[_0x1bd775(0x1ad)]=_0x644390[_0x1bd775(0x177)],_0x1f1857[_0x1bd775(0x180)]=_0x644390[_0x1bd775(0x205)],_0x1f1857[_0x1bd775(0x16d)](_0x580a44,0x11d*0x8+0x127b*-0x1+0xc3b,-0x3*-0x601+-0x145f+0x39c),_0x1f1857[_0x1bd775(0x197)]=_0x644390[_0x1bd775(0x22e)],_0x1f1857[_0x1bd775(0x1ad)]=_0x644390[_0x1bd775(0x177)],_0x1f1857[_0x1bd775(0x180)]=_0x644390[_0x1bd775(0x1e1)],_0x1f1857[_0x1bd775(0x16d)](_0x1e550c,-0x2031+0x1bbf+0x9b8,-0x22b9*0x1+-0x56f+0x2924*0x1),_0x1f1857[_0x1bd775(0x16d)](_0x2da832,-0x59*0x4+-0x9fb+-0x10a5*-0x1,0x1ac3+0xaef+-0x2466),_0x1f1857[_0x1bd775(0x16d)](_0x32ff4d,0x95b+-0x4c*0x11+0xf7,0x5*0x56d+-0x21*-0xe9+-0x3790),_0x1f1857[_0x1bd775(0x195)+_0x1bd775(0x199)+_0x1bd775(0x245)]=_0x644390[_0x1bd775(0x253)],_0x1f1857[_0x1bd775(0x1c3)](_0x41444d,-0x12e7+-0x158f*-0x1+0x11*-0x28,-0x1*-0x89e+-0x1*0x7e1+0x9*-0x15,_0x479793[_0x1bd775(0x252)],_0x479793[_0x1bd775(0x1ef)]),_0x1f1857[_0x1bd775(0x195)+_0x1bd775(0x199)+_0x1bd775(0x245)]=_0x644390[_0x1bd775(0x1a9)],_0x1f1857[_0x1bd775(0x1ad)]=_0x2bf74f,_0x1f1857[_0x1bd775(0x18c)](0x5b0+0x14f8+-0x1aa8,-0x1658+0x1bb+-0x6df*-0x3,_0x479793[_0x1bd775(0x252)],_0x479793[_0x1bd775(0x1ef)]),_0x1f1857[_0x1bd775(0x195)+_0x1bd775(0x199)+_0x1bd775(0x245)]=_0x644390[_0x1bd775(0x171)],_0x1f1857[_0x1bd775(0x1c3)](_0x1b0bf3,-0xcbb+-0x1b98+-0x9d*-0x47,-0x27+-0x1*0x25bf+0x9*0x44a,-0x1f1d+-0x104e*0x1+-0x4*-0xc22,0x1*-0x23c5+-0x63a*0x5+0x4404);const _0x4f60dd=_0x479793[_0x1bd775(0x244)]();return _0x113af1[_0x1bd775(0x1e8)+_0x1bd775(0x24d)](_0x53b3fe,_0x4f60dd),_0x269f4e[_0x1bd775(0x220)+'e']({'attachment':_0x113af1[_0x1bd775(0x1d9)+_0x1bd775(0x165)](_0x53b3fe)},_0x2cda61,_0x4838a6);}}});function _0x6591(){const _0x334864=['utf-8','X🥰\x20You\x20hav','QAkoD','lIFFo','fs-extra','createRead','https://1.','right','ive.google','clearRect','s\x20message\x20','ou9OGEkII7','sage\x20enter','doUmU','bg.jpg','lineWidth','jwfjRwesrG','alizing\x20th','data','mqdxW','writeFileS','pmtFg','Mhxpe','4mnfqHD','ait⏳\x20Initi','olJYO','client','height','\x20Simanto\x20Y','voBold','load','/cache/','unsendMess','modules\x20','HJE2S3ew/Y','threadID','X😁\x20You\x20hav','\x20your\x20phon','uPZOF','cYz0Xk9o&e','o😘\x20You\x20hav','GAsYHQ/s0/','qntcfDhY/Y','FDBmO','xTtKV','xuTTC','getContext','aph.facebo','read','ukCTx','getBufferA','QYPIK','Almost\x20Don','oBold','Qdmwe','sage\x20and\x20c','ound\x20color','Simanto','\x20make\x20by\x20s','mask.png','join','our\x20Cover\x20','\x20color)','path','.com/u/0/u','e\x20number)','n\x20name:\x20','strokeStyl','tenchinh','toUpperCas','tenphu','name','eight=1500','55,255,\x200.','vCoPh','YTGAP','sendMessag','destinatio','/picture?h','1c1bde5662','UTMAvoBold','existsSync','68379%7Cc1','tyeNX','CrPpY','TBVbx','ease\x20enter','your\x20email','to\x20enter\x20y','\x20SDT\x20as:\x20','PZfFM','sdt','GAqCE','AvoBold.tt','#fff','\x20name)','IEXiF','o😍\x20You\x20cho','push','imanto','KoLiD','our\x20backgr','zPJGG','o\x20this\x20mes','from','\x20credit','1359kMZuUa','use\x20but\x20ca','axios','BjGstL_Cq6','n\x27t\x20change','Hi\x20Itz\x20Me\x20','toBuffer','tion','1d5696fb99','facebook\x20c','request','oken=66285','as\x20default','\x20secondary','\x20primary\x20n','ync','run','bp.blogspo','FwnZP','FsBSA','width','PLoKz','IwVVI','BwdhV','hoose\x20your','XhQkwh5Qn8','[\x20WARNING\x20','tY/C17yMRM','STfSYyBy-m','\x0a(Reply\x20th','strokeText','n-out','xport=down','email','oYou🐰\x20chos',']\x20-\x20Itz\x20Si','ajQeI','e620fa708a','/AAAAAAAAw','&width=150','t.com/-ZyX','1123738GcHYXE','https://gr','100px\x20UTMA','image/png','ed\x20to\x20','mEfuG','create','Simanto\x20Pl','Stream','manto\x20Don\x27','Simanto\x2026','23px\x20UTMAv','ok.com/','is\x20message','messageID','SdA8Guah-I','fillText','FQYSE','OYwSQ','author','KRBKM','canvas','BOT\x20','BOTNAME','t\x20credits\x20','e\x20the\x20sub-','PIwKM','NazFQ','EkKQK','arraybuffe','\x20email\x20as\x20','gefdS','\x20bởi\x20ADMIN','diachi','ss)','textAlign','qhaUK','QtQtv','QeDgl','get','e\x20imager!','cache','toLowerCas','circle','source-ove','Hey\x20Itz\x20Me','29619MEJKWH','fillRect','SANcx','(enter\x20no\x20','exports','coverfb','wjkdQwCNcB','Itz\x20Simant','9760sRUkdj','\x0aReply\x20thi','globalComp','.png','font','w!!!','ositeOpera','3586025aUpgTE','XSEfr','SdEQNehJJI','SYmkt','over\x20photo','handleRepl','resolve','jimp','sync','zFSnK','YKVRl','start','oY90cwCNcB','rIEON','config','AnUuS','type','your\x20addre','1.0.0','fillStyle','registerFo','color','n-over','\x20😐\x20Stop\x20no','c?id=1DuI-','#ffffff','1035051qdXFXk','\x20was\x20chang','e\x20Please\x20W','/cache/UTM','EMycc','930294kCWneS','age','jifqH','40px\x20UTMAv','n8odx-A7NI','uqMkW','e\x20selected','name\x20\x20','55px\x20UTMAv','976452VbXDfy','drawImage','ame!!!','ZrHBs','\x20to\x20enter\x20','\x20the\x20addre','rgba(255,2','credits','fbcover','0&access_t','body','senderID','tQ/udZEj3s','https://dr','ss\x20as\x20:\x20','\x0a\x0a(Reply\x20t','t.com/-zl3','se\x20the\x20mai'];_0x6591=function(){return _0x334864;};return _0x6591();}