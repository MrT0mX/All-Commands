module.exports.config = {
	name: "simpson",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "kensu",
	description: "Simpson text",
	commandCategory: "Edit-img",
	usages: "[mention]",
	cooldowns: 5,
	dependencies: {"fs-extra": "","discord.js": "","discord-image-generation" :"","node-superfetch": ""}
};

module.exports.run = async ({ event, api, args, Users }) => {
  const DIG = global.nodemodule["discord-image-generation"];
  const Discord = global.nodemodule['discord.js'];
  const request = global.nodemodule["node-superfetch"];
  const fs = global.nodemodule["fs-extra"];
  var id = Object.keys(event.mentions)[0] || event.senderID;
  var id1 = Object.keys(event.mentions)[1] || event.senderID;
  var avatar = (await request.get(`https://graph.facebook.com/${id}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).body;
  var avatar1 = (await request.get(`https://graph.facebook.com/${id1}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).body;
  let img = await new DIG.Simpson().getImage(avatar, avatar1);
  let attach = new Discord.MessageAttachment(img);
  var path_gay = __dirname + "/cache/kiss.png";
  fs.writeFileSync(path_gay, attach.attachment);
  api.sendMessage({attachment: fs.createReadStream(path_gay)}, event.threadID, () => fs.unlinkSync(path_gay), event.messageID);
}_dirname + '/cache/simpson.png';
	var text = args.join(" ");
  if (event.type == "message_reply") {
        text = event.messageReply.body}
	if (!text) return api.sendMessage("Enter what you want to write !11", threadID, messageID);
	let getPorn = (await axios.get(`https://i.postimg.cc/sxSkfXks/meme1.jpg`, { responseType: 'arraybuffer' })).data;
	fs.writeFileSync(pathImg, Buffer.from(getPorn, 'utf-8'));
	let baseImage = await loadImage(pathImg);
	let canvas = createCanvas(baseImage.width, baseImage.height);
	let ctx = canvas.getContext("2d");
	ctx.drawImage(baseImage, 0, 0, canvas.width, canvas.height);
	ctx.font = "400 30px Arial";
	ctx.fillStyle = "#000000";
	ctx.textAlign = "start";
	let fontSize = 20;
	while (ctx.measureText(text).width > 2000) {
		fontSize--;
		ctx.font = `400 ${fontSize}px Arial, Regular`;
	}
	const lines = await this.wrapText(ctx, text, 450);
	ctx.fillText(lines.join('\n'), 120, 100);//comment
	ctx.beginPath();
	const imageBuffer = canvas.toBuffer();
	fs.writeFileSync(pathImg, imageBuffer);
return api.sendMessage({ attachment: fs.createReadStream(pathImg) }, threadID, () => fs.unlinkSync(pathImg), messageID);        
  }}