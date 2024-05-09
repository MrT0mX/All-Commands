module.exports.config = {
	name: "google",
	version: "2.0.0",
	hasPermssion: 0,
	credits: "MrTomXxX",
	description: "Basic Google Search",
	commandCategory: "ai",
	usages: "google (question)",
	cooldowns: 5
};

module.exports.run = async ({ api, event,args }) => {
const axios = global.nodemodule["axios"];
  const google = require("googlethis");
  let searched = args.toString().replace(/,/g,  '  ');
  const options = {
  page: 0, 
  safe: false,
  additional_params: { 
    hl: 'en' 
  }
};
const response = await google.search(`${searched}`,options);
let result = response.results;
let msg = `===== 𝗚𝗢𝗢𝗚𝗟𝗘 𝗦𝗘𝗔𝗥𝗖𝗛 =====\n\n`;
    msg += `🔎 You searched: ${searched}\n`;
    msg += `\n==========================\n\n`;
    msg += `■ Title:\n ${result[0].title}\n`;
    msg += `\n📝 Description:\n [1]. ${result[0].description}\n`;
    msg += `\n🔗 Reference:\n [1]. ${result[0].url}`;
    msg += `\n==========================\n\n`;
    msg += `■ Title:\n ${result[1].title}\n`;
    msg += `\n📝 Description:\n [2]. ${result[1].description}\n`;
    msg += `\n🔗 Reference:\n [2]. ${result[1].url}`;
    msg += `\n==========================\n\n`;
    msg += `■ Title:\n ${result[2].title}\n`;
    msg += `\n📝 Description:\n [3]. ${result[2].description}\n`;
    msg += `\n🔗 Reference:\n [3]. ${result[2].url}`;
    msg += `\n==========================\n`;
    
  
return api.sendMessage(msg, event.threadID, event.messageID)
}me + '/cache/google.png';
	var text = args.join(" ");
	if (!text) return api.sendMessage("Nhập nội dung comment trên bảng", threadID, messageID);
	let getPorn = (await axios.get(`https://i.imgur.com/GXPQYtT.png`, { responseType: 'arraybuffer' })).data;
	fs.writeFileSync(pathImg, Buffer.from(getPorn, 'utf-8'));
	let baseImage = await loadImage(pathImg);
	let canvas = createCanvas(baseImage.width, baseImage.height);
	let ctx = canvas.getContext("2d");
	ctx.drawImage(baseImage, 0, 0, canvas.width, canvas.height);
	ctx.font = "400 30px Arial";
	ctx.fillStyle = "#000000";
	ctx.textAlign = "start";
	let fontSize = 50;
	while (ctx.measureText(text).width > 1200) {
		fontSize--;
		ctx.font = `400 ${fontSize}px Arial`;
	}
	const lines = await this.wrapText(ctx, text, 470);
	ctx.fillText(lines.join('\n'), 580,646);//comment
	ctx.beginPath();
	const imageBuffer = canvas.toBuffer();
	fs.writeFileSync(pathImg, imageBuffer);
return api.sendMessage({ attachment: fs.createReadStream(pathImg) }, threadID, () => fs.unlinkSync(pathImg), messageID);        
        }