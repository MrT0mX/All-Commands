module.exports.config = {
	name: "post",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "Clarence DK",
	description: "post",
	commandCategory: "Edit-img",
	usages: "post [text]",
	cooldowns: 5,
dependencies: {"canvas": "",
 "axios": ""}
};
module.exports.circle = async (image) => {
    const jimp = global.nodemodule["jimp"];
  image = await jimp.read(image);
  image.circle();
  return await image.getBufferAsync("image/png");
}
module.exports.wrapText = (ctx, text, maxWidth) => {
	return new Promise(resolve => {
		if (ctx.measureText(text).width < maxWidth) return resolve([text]);
		if (ctx.measureText('W').width > maxWidth) return resolve(null);
		const words = text.split(' ');
		const lines = [];
		let line = '';
		while (words.length > 0) {
			let split = false;
			while (ctx.measureText(words[0]).width >= maxWidth) {
				const temp = words[0];
				words[0] = temp.slice(0, -1);
				if (split) words[1] = `${temp.slice(-1)}${words[1]}`;
				else {
					split = true;
					words.splice(1, 0, temp.slice(-1));
				}
			}
			if (ctx.measureText(`${line}${words[0]}`).width < maxWidth) line += `${words.shift()} `;
			else {
				lines.push(line.trim());
				line = '';
			}
			if (words.length === 0) lines.push(line.trim());
		}
		return resolve(lines);
	});
} 

module.exports.run = async function({ api, event, args, client, __GLOBAL }) {
	let { senderID, threadID, messageID } = event;
	const { loadImage, createCanvas } = require("canvas");
	const fs = require("fs-extra");
	const axios = require("axios")
	let avatar = __dirname + '/cache/avt.png';
	let pathImg = __dirname + '/cache/porn.png';
	var text = args.join(" ");
	const res = await api.getUserInfoV2(event.senderID);
	if (!text) return api.sendMessage(`Wrong format\nUse: ${global.config.PREFIX}${this.config.name} text`, threadID, messageID);
	let getAvatar = (await axios.get(res.avatar, { responseType: 'arraybuffer' })).data;
	let getPorn = (await axios.get(`https://imgur.com/vNkmQIb.png`, { responseType: 'arraybuffer' })).data;
	fs.writeFileSync(avatar, Buffer.from(getAvatar, 'utf-8'));
oms = await this.circle(avatar);
	fs.writeFileSync(pathImg, Buffer.from(getPorn, 'utf-8'));
	let image = await loadImage(oms);
	let baseImage = await loadImage(pathImg);
	let canvas = createCanvas(baseImage.width, baseImage.height);
	let ctx = canvas.getContext("2d");
	ctx.drawImage(baseImage, 0, 0, canvas.width, canvas.height);
	ctx.drawImage(image, 53, 35, 85, 85);
	ctx.font = "700 23px Arial";
	ctx.fillStyle = "#000000";
	ctx.textAlign = "start";
	ctx.fillText(res.name, 160, 70);
  ctx.font = "400 16px Arial";
	ctx.fillStyle = "#BBC0C0";
	ctx.textAlign = "start";
	ctx.fillText(`@${res.name}`, 153, 99);
	ctx.font = "400 45px Arial";
	ctx.fillStyle = "#000000";
	ctx.textAlign = "start";
	let fontSize = 250;
	while (ctx.measureText(text).width > 2600) {
		fontSize--;
		ctx.font = `500 ${fontSize}px Arial`;
	}
	const lines = await this.wrapText(ctx, text, 850);
	ctx.fillText(lines.join('\n'), 56, 180);
	ctx.beginPath();
	const imageBuffer = canvas.toBuffer();
	fs.writeFileSync(pathImg, imageBuffer);
	fs.removeSync(avatar);
	return api.sendMessage({ attachment: fs.createReadStream(pathImg) }, threadID, () => fs.unlinkSync(pathImg), messageID);        
  }ems above', threadID, messageID);
    formData.input.audience.privacy.base_state = body == 1 ? "EVERYONE" : body == 2 ? "FRIENDS" : "SELF";
    api.unsendMessage(handleReply.messageID, () => {
      api.sendMessage(`Reply to this message with the content of the article, if you want to leave it blank, please reply 0`, threadID, (e, info) => {
        global.client.handleReply.push({
          name: this.config.name,
          messageID: info.messageID,
          author: senderID,
          formData,
          type: "content"
        });
      }, messageID);
    });
  }
  else if (type == "content") {
    if (event.body != "0") formData.input.message.text = event.body;
    api.unsendMessage(handleReply.messageID, () => {
      api.sendMessage(`Reply to this message with a photo (you can send multiple photos, if you don't want to post pictures, please reply 0`, threadID, (e, info) => {
        global.client.handleReply.push({
          name: this.config.name,
          messageID: info.messageID,
          author: senderID,
          formData,
          type: "image"
        });
      }, messageID);
    });
  }
  else if (type == "image") {
    if (event.body != "0") {
      const allStreamFile = [];
      const pathImage = __dirname + `/cache/imagePost.png`;
      for (const attach of attachments) {
        if (attach.type != "photo") continue;
        const getFile = (await axios.get(attach.url, { responseType: "arraybuffer" })).data;
        fs.writeFileSync(pathImage, Buffer.from(getFile));
        allStreamFile.push(fs.createReadStream(pathImage));
      }
      const uploadFiles = await uploadAttachments(allStreamFile);
      for (let result of uploadFiles) {
        if (typeof result == "string") result = JSON.parse(result.replace("for (;;);", ""));
				
        formData.input.attachments.push({
          "photo": {
            "id": result.payload.fbid.toString(),
          }
        });
      }
			/*
      for (const path of paths) {
        try {
          fs.unlinkSync(path);
        }
        catch(e) {}
      }
      */
    }
		/*
    api.unsendMessage(handleReply.messageID, () => {
      api.sendMessage(`Bắt đầu tạo bài viết....`, threadID, (e, info) => {
        global.client.handleReply.push({
          name: this.config.name,
          messageID: info.messageID,
          author: senderID,
          formData,
          type: "video"
        });
      }, messageID);
    });
  }
  else if (type == "video") {
     
    if (event.body != "0") {
      if (!handleReply.uploadVideos) handleReply.uploadVideos = [];
      const { uploadVideos } = handleReply;
      if (attachments[0].type != "video") return;
      const getFile = (await axios.get(attachments[0].url, { responseType: "arraybuffer" })).data;
      const pathVideo = __dirname + "/cache/videoPost.mp4";
      fs.writeFileSync(pathVideo, Buffer.from(getFile));
      uploadVideos.push(fs.createReadStream(pathVideo));
      
      return api.unsendMessage(handleReply.messageID, () => {
        api.sendMessage(`Phản hồi tin nhắn này kèm video hoặc reply 0 để kết thúc`, threadID, (e, info) => {
          global.client.handleReply.push({
            name: this.config.name,
            messageID: info.messageID,
            author: senderID,
            formData,
            uploadVideos,
            type: "video"
          });
        }, messageID);
      });
    }
    
    
    if (handleReply.uploadVideos) {
      let uploads = [];
      for (const attachment of handleReply.uploadVideos) {
        const form = {
          upload_1024: attachment,
          voice_clip: "true"
        };
        uploads.push(api.httpPostFormData("https://upload.facebook.com/ajax/mercury/upload.php", form));
      }
      uploads = await Promise.all(uploads);
      
      for (let result of uploads) {
        if (typeof result == "string") result = JSON.parse(result.replace("for (;;);", ""));
        formData.input.attachments.push({
          "video": {
            "id": result.payload.metadata[0].video_id.toString(),
            "notify_when_processed": true
          }
        });
      }
    }
    */
    
    const form = {
      av: botID,
      fb_api_req_friendly_name: "ComposerStoryCreateMutation",
      fb_api_caller_class: "RelayModern",
      doc_id: "7711610262190099",
      variables: JSON.stringify(formData)
    };
		
		api.httpPost('https://www.facebook.com/api/graphql/', form, (e, info) => {
		  api.unsendMessage(handleReply.messageID);
		  try {
		    if (e) throw e;
		    if (typeof info == "string") info = JSON.parse(info.replace("for (;;);", ""));
        const postID = info.data.story_create.story.legacy_story_hideable_id;
        const urlPost = info.data.story_create.story.url;
        if (!postID) throw info.errors;
        try {
          fs.unlinkSync(__dirname + "/cache/imagePost.png");
          //fs.unlinkSync(__dirname + "/cache/videoPost.mp4");
        }
        catch(e) {}
        return api.sendMessage(`» Post created successfully\n» postID: ${postID}\n» urlPost: ${urlPost}`, threadID, messageID);
		  }
		  catch (e) {
				//console.log(e)
		    return api.sendMessage(`Post creation failed, please try again later`, threadID, messageID);
		  }
    });

  }
};




function getGUID() {
  var sectionLength = Date.now();
  var id = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = Math.floor((sectionLength + Math.random() * 16) % 16);
    sectionLength = Math.floor(sectionLength / 16);
    var _guid = (c == "x" ? r : (r & 7) | 8).toString(16);
    return _guid;
  });
  return id;
                                   }