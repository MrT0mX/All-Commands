module.exports.config = {
  name: "card4",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Clarence DK",
  description: "Create an interesting banner image",
  commandCategory: "Create a photo",
  usages: "card [name - age]",
  cooldowns: 0,
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
  if (!text) return api.sendMessage('Type [name - age] ', event.threadID, event.messageID);
  const text1 = text.substr(0, text.indexOf(' - ')); 
  if (!text1) return api.sendMessage('Type [name - age] ', event.threadID, event.messageID);
  const text2 = text.split(" - ").pop()
  if (!text2) return api.sendMessage('Type [name - age] ', event.threadID, event.messageID);
  let Avatar = (
    await axios.get(
      `https://graph.facebook.com/${event.senderID}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`,
      { responseType: "arraybuffer" }
    )
  ).data;
  let getWanted = (
    await axios.get(encodeURI(`https://imgur.com/g4zAltz.png`), {
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
  ctx.drawImage(baseImage, 0, 0, canvas.width, canvas.height);
  ctx.drawImage(baseAva, 55, 305, 355, 355);
  ctx.font = "25px Manrope";
  ctx.fillStyle = "#ffff";
  ctx.textAlign = "left";
  fontSize = 30;
  ctx.fillText(text1, 165, 200);
  ctx.font = "25px Manrope";
  ctx.fillStyle = "#ffff";
  ctx.textAlign = "left";
  fontSize = 30;
  ctx.fillText(text2, 165, 228)
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
