module.exports.config = {
	name: "trandan2",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Rip05",
	description: "biến bạn trở thành trần dần =))",
	commandCategory: "Edit-IMG",
	usages: "@tag",
	cooldowns: 5,
	dependencies: {
	  "fs-extra": "",
	  "axios": "",
	  "canvas" :"",
	  "jimp": "",
	  "node-superfetch": ""
	}
};

module.exports.circle = async (image) => {
	  const jimp = global.nodemodule['jimp'];
  	image = await jimp.read(image);
  	image.circle();
  	return await image.getBufferAsync("image/png");
};

module.exports.run = async ({ event, api, args, Users }) => {
try {
  const Canvas = global.nodemodule['canvas'];
  const request = global.nodemodule["node-superfetch"];
  const jimp = global.nodemodule["jimp"];
  const fs = global.nodemodule["fs-extra"];
  var path_toilet = __dirname+'/cache/trandan2.png'; 
  var id = Object.keys(event.mentions)[0] || event.senderID;
  const canvas = Canvas.createCanvas(106, 118);
	const ctx = canvas.getContext('2d');
	const background = await Canvas.loadImage('https://i.imgur.com/qe1HcgM.jpg');
  
	var avatar = await request.get(`https://graph.facebook.com/${id}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`);
	avatar = await this.circle(avatar.body);
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
	ctx.drawImage(await Canvas.loadImage(avatar), 25, 25, 50, 50);
	const imageBuffer = canvas.toBuffer();
	fs.writeFileSync(path_toilet,imageBuffer);
	 api.sendMessage({attachment: fs.createReadStream(path_toilet, {'highWaterMark': 225 * 225}), body: "Ai vô văn hóa ra gặp tao :))"}, event.threadID, () => fs.unlinkSync(path_toilet), event.messageID);
}
catch(e) {api.sendMessage(e.stack, event.threadID )}
}
// Text by DMH - do not clear this line & forget me !

  ////////   //         /////////       //         ////////   /////////
  //    //   //         //           //    //    //           //
  //   ///   //         //          //      //    ////        //
  ////////   //         /////////   //      //      ///       /////////
  //         //         //          //////////         ///    //
  //         //         //          //      //           //   //
  //         /////////  /////////   //      //   ////////     /////////  