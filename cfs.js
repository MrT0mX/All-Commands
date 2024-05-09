module.exports.config = {
	name: "cfs",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "D-Jukie",
	description: "Confession phiên bản messenger",
	commandCategory: "Box chat",
	usages: "send/find",
	cooldowns: 5
};
module.exports.wrapText = (ctx, text, maxWidth) => {
    return new Promise((resolve) => {
        if (ctx.measureText(text).width < maxWidth) return resolve([text]);
        if (ctx.measureText("W").width > maxWidth) return resolve(null);
        const words = text.split(" ");
        const lines = [];
        let line = "";
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
            if (ctx.measureText(`${line}${words[0]}`).width < maxWidth)
                line += `${words.shift()} `;
            else {
                lines.push(line.trim());
                line = "";
            }
            if (words.length === 0) lines.push(line.trim());
        }
        return resolve(lines);
    });
};
module.exports.run = async ({ api, event, args, Users }) => {  
const axios = require("axios");
const { threadID, messageID, senderID } = event;
	switch (args[0]) {
		case 'send': {
			return api.sendMessage(`[ 𝗦𝗘𝗡𝗗 ] - 𝗥𝗲𝗽𝗹𝘆 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗻𝗮̀𝘆 𝘃𝗮̀ 𝗻𝗵𝗮̣̂𝗽 𝗻𝗼̣̂𝗶 𝗱𝘂𝗻𝗴 𝗯𝗮̣𝗻 𝗺𝘂𝗼̂́𝗻 𝗴𝘂̛̉𝗶 𝗹𝗲̂𝗻 𝗖𝗙𝗦`, threadID, (error, info) => {
	            global.client.handleReply.push({
	                name: this.config.name,
	                messageID: info.messageID,
	                author: senderID,
	                type: "send"
	            })
	        }, messageID);
		}
		case 'find': {
			var userID = args[1]
			if(!userID) return api.sendMessage('» 𝗩𝘂𝗶 𝗹𝗼̀𝗻𝗴 𝗻𝗵𝗮̣̂𝗽 𝗜𝗗 𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗰𝗮̂̀𝗻 𝘁𝗶̀𝗺 🔍')
			var res = (await axios.get(`https://apiuwuapi.ducdz999.repl.co/cfsdata`)).data
				res.reverse()
			var find = res.filter(i => i.senderID == userID);
			var data = '🧡=== [ 𝗖𝗙𝗦 𝗙𝗜𝗡𝗗𝗘𝗥 ] ===🧡\n\n', num = 1;
			for (let i of find) {
				data += `🔰 𝗦𝗼̂́ 𝘁𝗵𝘂̛́ 𝘁𝘂̛̣: ${num++}\n👤 𝗧𝗲̂𝗻: ${i.name}\n🌈 𝗖𝗼𝗻𝘁𝗲𝗻𝘁: ${i.message}\n❤️ 𝗟𝘂̛𝗼̛̣𝘁 𝘁𝗵𝗶́𝗰𝗵: ${i.react}\n⏰ 𝗧𝗶𝗺𝗲: ${i.time}\n\n`
			}
			data += '» 𝐕𝐮𝐢 𝐥𝐨̀𝐧𝐠 𝐫𝐞𝐩𝐥𝐲 𝐭𝐡𝐞𝐨 𝐭𝐡𝐮̛́ 𝐭𝐮̛̣ 𝐧𝐞̂́𝐮 𝐦𝐮𝐨̂́𝐧 𝐱𝐞𝐦 𝐜𝐡𝐢 𝐭𝐢𝐞̂́𝐭'
			return api.sendMessage(data, threadID, (error, info) => {
	            global.client.handleReply.push({
	                name: this.config.name,
	                messageID: info.messageID,
	                author: senderID,
	                type: "find",
	                find,
	                res
	            })
	        }, messageID);
		}
		default: {
			var res = (await axios.get(`https://apiuwuapi.ducdz999.repl.co/cfsdata`)).data
				res.reverse()
			var page = parseInt(args[0]) || 1;
				page < -1 ? page = 1 : "";
			var limit = 10;
			var msg = "🧡=== [ 𝗖𝗢𝗡𝗙𝗘𝗦𝗦𝗜𝗢𝗡 ] ===🧡\n━━━━━━━━━━━━━━\n\n";
			var numPage = Math.ceil(res.length / limit);
			for (var i = limit * (page - 1); i < limit * (page - 1) + limit; i++) {
				if (i >= res.length) break;
				msg += `🔰 𝗦𝗼̂́ 𝘁𝗵𝘂̛́ 𝘁𝘂̛̣: ${i+1}\n👤 𝗧𝗲̂𝗻: ${res[i].name}\n🌈 𝗖𝗼𝗻𝘁𝗲𝗻𝘁: ${res[i].message}\n❤️ 𝗟𝘂̛𝗼̛̣𝘁 𝘁𝗵𝗶́𝗰𝗵: ${res[i].react}\n⏰ 𝗧𝗶𝗺𝗲: ${res[i].time}\n\n`;   
			} 
			msg += `» 𝐓𝐫𝐚𝐧𝐠 ${page}/${numPage}\n» 𝐃𝐮̀𝐧𝐠 /𝐜𝐟𝐬 + 𝐬𝐨̂́ 𝐭𝐫𝐚𝐧𝐠\n`
			msg += '» 𝐕𝐮𝐢 𝐥𝐨̀𝐧𝐠 𝐫𝐞𝐩𝐥𝐲 𝐭𝐡𝐞𝐨 𝐭𝐡𝐮̛́ 𝐭𝐮̛̣ 𝐧𝐞̂́𝐮 𝐦𝐮𝐨̂́𝐧 𝐱𝐞𝐦 𝐜𝐡𝐢 𝐭𝐢𝐞̂́𝐭'
			return api.sendMessage(msg, threadID, (error, info) => {
	            global.client.handleReply.push({
	                name: this.config.name,
	                messageID: info.messageID,
	                author: senderID,
	                type: "list",
	                res
	            })
	        }, messageID);
		}
	}
}
module.exports.handleReply = async ({ event, api, Currencies, handleReply, Users }) => {
const axios = require("axios");
const fs = require("fs-extra")
const Canvas = require("canvas")
if(!fs.existsSync(__dirname+`/cache/UTMAvoBold.ttf`)) { 
    let getfont2 = (await axios.get(`https://drive.google.com/u/0/uc?id=1DuI-ou9OGEkII7n8odx-A7NIcYz0Xk9o&export=download`, { responseType: "arraybuffer" })).data;
    fs.writeFileSync(__dirname+`/cache/UTMAvoBold.ttf`, Buffer.from(getfont2, "utf-8"));
};
if(!fs.existsSync(__dirname+`/cache/Roboto.ttf`)) { 
    let getfont = (await axios.get(`https://drive.google.com/u/0/uc?id=1ZhvdAOzugHMVWP9OQuJXRD_Yi2ZeCB-M&export=download`, { responseType: "arraybuffer" })).data;
    fs.writeFileSync(__dirname+`/cache/Roboto.ttf`, Buffer.from(getfont, "utf-8"));
};
const { loadImage, createCanvas } = require("canvas");
const { threadID, messageID, senderID, body } = event;
	switch (handleReply.type) {
		case 'send': {
			api.unsendMessage(handleReply.messageID)
			var res = await axios.get(`https://apiuwuapi.ducdz999.repl.co/cfs?message=${encodeURI(body)}&senderID=${senderID}&name=${encodeURI((await Users.getData(senderID)).name)}`);
			return api.sendMessage('[ 𝗦𝗘𝗡𝗗 ] - 𝗚𝘂̛̉𝗶 𝗻𝗼̣̂𝗶 𝗱𝘂𝗻𝗴 𝗻𝗮̀𝘆 𝗹𝗲̂𝗻 𝗖𝗙𝗦 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴', threadID, messageID)
		}
		case 'list': {
			var data = handleReply.res[parseInt(body) - 1]
			let path = __dirname + "/cache/cfs.png";
			let bg = (await axios.get(`https://i.imgur.com/w6iNyHr.jpg`, { responseType: "arraybuffer" }) ).data;
			fs.writeFileSync(path, Buffer.from(bg, "utf-8"));
			let img = await loadImage(path);
			let canvas = createCanvas(img.width, img.height);
			Canvas.registerFont(__dirname+`/cache/UTMAvoBold.ttf`, { family: "UTMAvoBold" });
			Canvas.registerFont(__dirname+`/cache/Roboto.ttf`, { family: "Roboto" });
			let ctx = canvas.getContext("2d");
				ctx.font = "30px UTMAvoBold";
			    ctx.fillStyle = "#fff";
			    ctx.textAlign = "center";
			    ctx.clearRect(0, 0, canvas.width, canvas.height);
			    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
			const lines = await this.wrapText(ctx, data.message, 585);
    			ctx.fillText(lines.join("\n"), 342, 306);
    			ctx.textAlign = "start";
    			ctx.font = "20px Roboto";
    			ctx.fillStyle = "#000000";
    			ctx.fillText(data.react, 77, 568)
    			const imageBuffer = canvas.toBuffer();
    			fs.writeFileSync(path, imageBuffer);

			api.unsendMessage(handleReply.messageID)
			return api.sendMessage({ body: `[❤️] 𝗧𝗵𝗮̉ 𝗰𝗮̉𝗺 𝘅𝘂́𝗰 𝘃𝗮̀𝗼 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗻𝗲̂́𝘂 𝗺𝘂𝗼̂́𝗻 𝗹𝗶𝗸𝗲 𝗯𝗮̀𝗶 𝗻𝗮̀𝘆`, attachment: fs.createReadStream(path)}, threadID, (error, info) => {
                global.client.handleReaction.push({
                    name: this.config.name,
                    messageID: info.messageID,
                    author: event.senderID,
                    type: 'react',
                    index: handleReply.res.length - parseInt(body) 
                })
            }, messageID);
		}
		case 'find': {
			var data = handleReply.find[parseInt(body) - 1]
			var res = (await axios.get(`https://apiuwuapi.ducdz999.repl.co/cfsdata`)).data
			var findI = res.findIndex(k => k === data)
			let path = __dirname + "/cache/cfs.png";
			let bg = (await axios.get(`https://i.imgur.com/w6iNyHr.jpg`, { responseType: "arraybuffer" }) ).data;
			fs.writeFileSync(path, Buffer.from(bg, "utf-8"));
			let img = await loadImage(path);
			let canvas = createCanvas(img.width, img.height);
			Canvas.registerFont(__dirname+`/cache/UTMAvoBold.ttf`, { family: "UTMAvoBold" });
			Canvas.registerFont(__dirname+`/cache/Roboto.ttf`, { family: "Roboto" });
			let ctx = canvas.getContext("2d");
				ctx.font = "30px UTMAvoBold";
			    ctx.fillStyle = "#fff";
			    ctx.textAlign = "center";
			    ctx.clearRect(0, 0, canvas.width, canvas.height);
			    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
			const lines = await this.wrapText(ctx, data.message, 585);
    			ctx.fillText(lines.join("\n"), 342, 306);
    			ctx.textAlign = "start";
    			ctx.font = "20px Roboto";
    			ctx.fillStyle = "#000000";
    			ctx.fillText(data.react, 77, 568)
    			const imageBuffer = canvas.toBuffer();
    			fs.writeFileSync(path, imageBuffer);
    		api.unsendMessage(handleReply.messageID)
			return api.sendMessage({ body: `[❤️] 𝗧𝗵𝗮̉ 𝗰𝗮̉𝗺 𝘅𝘂́𝗰 𝘃𝗮̀𝗼 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗻𝗲̂́𝘂 𝗺𝘂𝗼̂́𝗻 𝗹𝗶𝗸𝗲 𝗯𝗮̀𝗶 𝗻𝗮̀𝘆`, attachment: fs.createReadStream(path)}, threadID, (error, info) => {
                global.client.handleReaction.push({
                    name: this.config.name,
                    messageID: info.messageID,
                    author: event.senderID,
                    type: 'react',
                    index: parseInt(findI)
                })
            }, messageID);
		}
	}
}
module.exports.handleReaction = async ({ api, event, handleReaction }) => {
const axios = require("axios");
const { threadID, messageID, senderID } = event;
	switch (handleReaction.type) {
		case 'react': {
			var res = await axios.get('https://apiuwuapi.ducdz999.repl.co/react?index=' + handleReaction.index);
		}
	}
}