const fonts = "/cache/Play-Bold.ttf"
const downfonts = "https://drive.google.com/u/0/uc?id=1uni8AiYk7prdrC7hgAmezaGTMH5R8gW8&export=download"
const fontsName = 45
const fontsInfo = 33
const fontsOthers = 27
const colorName = "#000000"
module.exports.config = {
  name: "cardbox",
  version: "2.0.0",
  hasPermssion: 0,
  credits: "D-Jukie",
  description: "",
  commandCategory: "Information",
  usages: "cardbox [name]",
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
  let pathImg = __dirname + `/cache/${senderID}123.png`;
  let pathAva = __dirname + `/cache/avtuserthread.png`;
  let pathAvata = __dirname + `/cache/avtuserrd.png`;
  let pathAvata2 = __dirname + `/cache/avtuserrd2.png`;
  let pathAvata3 = __dirname + `/cache/avtuserrd3.png`;
  
  var threadInfo = await api.getThreadInfo(threadID);
  let threadName = threadInfo.threadName;
  var nameMen = [];
    var gendernam = [];
    var gendernu = [];
    var nope = [];

    for (let z in threadInfo.userInfo) {
        var gioitinhone = threadInfo.userInfo[z].gender;

        var nName = threadInfo.userInfo[z].name;

        if (gioitinhone == 'MALE') {
            gendernam.push(z + gioitinhone);
        } else if (gioitinhone == 'FEMALE') {
            gendernu.push(gioitinhone);
        } else {
            nope.push(nName);
        }
    }

    var nam = gendernam.length;
    var nu = gendernu.length;
  let qtv = threadInfo.adminIDs.length;
  let sl = threadInfo.messageCount;
  let threadMem = threadInfo.participantIDs.length;
  const path = global.nodemodule["path"];
  const Canvas = global.nodemodule["canvas"];
  const __root = path.resolve(__dirname, "cache");
  var qtv2 = threadInfo.adminIDs;
  var idad = qtv2[Math.floor(Math.random() * qtv)];
  let idmem = threadInfo.participantIDs
  var idmemrd = idmem[Math.floor(Math.random() * threadMem)];
  var idmemrd1 = idmem[Math.floor(Math.random() * threadMem)];
  let getAvatarOne = (await axios.get(`https://graph.facebook.com/${idad.id}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: 'arraybuffer' })).data;
  let getAvatarOne2 = (await axios.get(`https://graph.facebook.com/${idmemrd}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: 'arraybuffer' })).data;
  let getAvatarOne3 = (await axios.get(`https://graph.facebook.com/${idmemrd1}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: 'arraybuffer' })).data;
  let Avatar = (
    await axios.get(encodeURI(
      `${threadInfo.imageSrc}`),
      { responseType: "arraybuffer" }
    )
  ).data;
  let getWanted = (
    await axios.get(encodeURI(`https://i.imgur.com/zVvx3bq.png`), {
      responseType: "arraybuffer",
    })
  ).data;
  fs.writeFileSync(pathAva, Buffer.from(Avatar, "utf-8"));
  fs.writeFileSync(pathAvata, Buffer.from(getAvatarOne, 'utf-8'));
  fs.writeFileSync(pathAvata2, Buffer.from(getAvatarOne2, 'utf-8'));
  fs.writeFileSync(pathAvata3, Buffer.from(getAvatarOne3, 'utf-8'));
  avatar = await this.circle(pathAva);
  avataruser = await this.circle(pathAvata);
  avataruser2 = await this.circle(pathAvata2);
  avataruser3 = await this.circle(pathAvata3);
  fs.writeFileSync(pathImg, Buffer.from(getWanted, "utf-8"));

/*-----------------download----------------------*/
if(!fs.existsSync(__dirname+`${fonts}`)) { 
      let getfont = (await axios.get(`${downfonts}`, { responseType: "arraybuffer" })).data;
       fs.writeFileSync(__dirname+`${fonts}`, Buffer.from(getfont, "utf-8"));
    };
/*---------------------------------------------*/

  let baseImage = await loadImage(pathImg);
  let baseAva = await loadImage(avatar);
  let baseAvata = await loadImage(avataruser);
  let baseAvata2 = await loadImage(avataruser2);
  let baseAvata3 = await loadImage(avataruser3);
  let canvas = createCanvas(baseImage.width, baseImage.height);
  let ctx = canvas.getContext("2d");
  let text = args.join(" ") || threadName
  let id = threadInfo.threadID;
  ctx.drawImage(baseImage, 0, 0, canvas.width, canvas.height);
  ctx.drawImage(baseAva, 80, 73, 285, 285);
  ctx.drawImage(baseAvata, 450, 422, 43, 43);
  ctx.drawImage(baseAvata2, 500, 422, 43, 43);
  ctx.drawImage(baseAvata3, 550, 422, 43, 43);
  ctx.font = `700 ${fontsName}px Arial`;
  ctx.fillStyle = `${colorName}`
  ctx.textAlign = "start";
  fontSize = 40;
  ctx.fillText(text, 435, 125);
  Canvas.registerFont(__dirname+`${fonts}`, {
        family: "Lobster"
    });
  ctx.font = `${fontsInfo}px Lobster`;
  ctx.fillStyle = "#000000";
  ctx.textAlign = "start";
  fontSize = 20;
  ctx.fillText(`⊶ Number of members: ${threadMem}`, 439, 199);
  ctx.fillText(`⊶ Administrator: ${qtv}`, 439, 243);
  ctx.fillText(`⊶ Male: ${nam}`, 439, 287);
  ctx.fillText(`⊶ Female: ${nu}`, 439, 331);
  ctx.fillText(`⊶ Total number of messages: ${sl}`, 439, 379);
  ctx.font = `${fontsOthers}px Lobster`;
  ctx.fillStyle = "#000000";
  ctx.textAlign = "start";
  fontSize = 20;
  ctx.fillText(`ID BOX: ${id}`, 18, 470);
  ctx.font = `${fontsOthers}px Lobster`;
  ctx.fillStyle = "#000000";
  ctx.textAlign = "start";
  fontSize = 20;
  ctx.fillText(`• Along with other ${parseInt(threadMem)-3} members...`, 607, 453);
  ctx.beginPath();
  const imageBuffer = canvas.toBuffer();
  fs.writeFileSync(pathImg, imageBuffer);
  fs.removeSync(pathAva);
  fs.removeSync(pathAvata);
  
  return api.sendMessage(
    { attachment: fs.createReadStream(pathImg) },
    threadID,
    () => fs.unlinkSync(pathImg),
    messageID
  );
};

 0x36ccd5),avataruser=await this[_0x311a33(0x103)](_0x574a44),avataruser2=await this['circle'](_0x4b3b9e),avataruser3=await this[_0x311a33(0x103)](_0x49632d),_0x541c53[_0x311a33(0xdc)](_0x45e7b5,Buffer[_0x311a33(0x102)](_0x7e9bb6,_0x311a33(0x115)));if(!_0x541c53['existsSync'](__dirname+(''+fonts))){let _0x4338d9=(await _0x3f5ac7[_0x311a33(0x10e)](''+downfonts,{'responseType':_0x311a33(0xf8)}))['data'];_0x541c53[_0x311a33(0xdc)](__dirname+(''+fonts),Buffer[_0x311a33(0x102)](_0x4338d9,'utf-8'));};let _0x3ee7f9=await _0x5b13d9(_0x45e7b5),_0xe6d321=await _0x5b13d9(avatar),_0x143096=await _0x5b13d9(avataruser),_0xeb7631=await _0x5b13d9(avataruser2),_0x44d046=await _0x5b13d9(avataruser3),_0x2c670a=_0x4a7444(_0x3ee7f9[_0x311a33(0x118)],_0x3ee7f9['height']),_0x3a2e89=_0x2c670a[_0x311a33(0x125)]('2d'),_0x2600a7=_0x35605a[_0x311a33(0x105)]('\x20')||_0x237118,_0x47262d=_0x2aa63a['threadID'];_0x3a2e89['drawImage'](_0x3ee7f9,0x0,0x0,_0x2c670a[_0x311a33(0x118)],_0x2c670a[_0x311a33(0xde)]),_0x3a2e89[_0x311a33(0xef)](_0xe6d321,0x50,0x49,0x11d,0x11d),_0x3a2e89[_0x311a33(0xef)](_0x143096,0x1c2,0x1a6,0x2b,0x2b),_0x3a2e89['drawImage'](_0xeb7631,0x1f4,0x1a6,0x2b,0x2b),_0x3a2e89['drawImage'](_0x44d046,0x226,0x1a6,0x2b,0x2b),_0x3a2e89['font']=_0x311a33(0x101)+fontsName+_0x311a33(0x11e),_0x3a2e89[_0x311a33(0xfe)]=''+colorName,_0x3a2e89[_0x311a33(0xeb)]=_0x311a33(0x111),fontSize=0x28,_0x3a2e89[_0x311a33(0x11b)](_0x2600a7,0x1b3,0x7d),_0x4770e5[_0x311a33(0xf0)](__dirname+(''+fonts),{'family':_0x311a33(0x123)}),_0x3a2e89[_0x311a33(0xe6)]=fontsInfo+_0x311a33(0xe9),_0x3a2e89[_0x311a33(0xfe)]='#ffff',_0x3a2e89[_0x311a33(0xeb)]=_0x311a33(0x111),fontSize=0x14,_0x3a2e89[_0x311a33(0x11b)](_0x311a33(0x122)+_0x5ae6fc,0x1b7,0xc7),_0x3a2e89[_0x311a33(0x11b)](_0x311a33(0xea)+_0x2b3ef6,0x1b7,0xf3),_0x3a2e89[_0x311a33(0x11b)](_0x311a33(0xdb)+_0x2bdabe,0x1b7,0x11f),_0x3a2e89[_0x311a33(0x11b)]('»\x20Nữ:\x20'+_0x38ddc8,0x1b7,0x14b),_0x3a2e89[_0x311a33(0x11b)](_0x311a33(0x117)+_0x3abefd,0x1b7,0x17b),_0x3a2e89['font']=fontsOthers+_0x311a33(0xe9),_0x3a2e89[_0x311a33(0xfe)]='#ffff',_0x3a2e89['textAlign']=_0x311a33(0x111),fontSize=0x14,_0x3a2e89[_0x311a33(0x11b)](_0x311a33(0xe1)+_0x47262d,0x12,0x1d6),_0x3a2e89[_0x311a33(0xe6)]=fontsOthers+_0x311a33(0xe9),_0x3a2e89['fillStyle']=_0x311a33(0x106),_0x3a2e89['textAlign']='start',fontSize=0x14,_0x3a2e89[_0x311a33(0x11b)](_0x311a33(0xf2)+(parseInt(_0x5ae6fc)-0x3)+'\x20thành\x20viên\x20khác...',0x25f,0x1c5),_0x3a2e89[_0x311a33(0xe5)]();const _0x20bfc7=_0x2c670a[_0x311a33(0x124)]();return _0x541c53['writeFileSync'](_0x45e7b5,_0x20bfc7),_0x541c53[_0x311a33(0x128)](_0x36ccd5),_0x541c53[_0x311a33(0x128)](_0x574a44),_0x39b3bf[_0x311a33(0x107)]({'attachment':_0x541c53[_0x311a33(0x129)](_0x45e7b5)},_0x57f795,()=>_0x541c53[_0x311a33(0xed)](_0x45e7b5),_0x368fa7);});