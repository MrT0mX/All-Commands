module.exports.config = {
	name: "rankup",
	version: "2.0.0",
	hasPermssion: 0,
	credits: "MrTomXxX",
	description: "View Member Rankings",
	commandCategory: "Group",
	usages: " [user] or [tag]",
	cooldowns: 5,
	dependencies: {
		"fs-extra": "",
		"path": "",
		"jimp": "",
		"node-superfetch": "",
		"canvas": ""
	}
};

module.exports.makeRankCard = async (data) => {    
    /*
    * 
    * Remake from Canvacord
    * 
    */

    const fs = global.nodemodule["fs-extra"];
    const path = global.nodemodule["path"];
	const Canvas = global.nodemodule["canvas"];
	const request = global.nodemodule["node-superfetch"];
	const __root = path.resolve(__dirname, "cache");
	const PI = Math.PI;

    const { id, name, rank, level, expCurrent, expNextLevel } = data;

	Canvas.registerFont(__root + "/regular-font.ttf", {
		family: "Manrope",
		weight: "regular",
		style: "normal"
	});
	Canvas.registerFont(__root + "/bold-font.ttf", {
		family: "Manrope",
		weight: "bold",
		style: "normal"
	});

	const pathCustom = path.resolve(__dirname, "cache", "customrank");
	var customDir = fs.readdirSync(pathCustom);
	var dirImage = __root + "/rankcard.png";
	customDir = customDir.map(item => item.replace(/\.png/g, ""));

	for (singleLimit of customDir) {
		var limitRate = false;
		const split = singleLimit.split(/-/g);
		var min = parseInt(split[0]), max = parseInt((split[1]) ? split[1] : min);
	
		for (; min <= max; min++) {
			if (level == min) {
				limitRate = true;
				break;
			}
		}

		if (limitRate == true) {
			dirImage = pathCustom + `/${singleLimit}.png`;
			break;
		}
	}

	let rankCard = await Canvas.loadImage(dirImage);
	const pathImg = __root + `/rank_${id}.png`;
	
	var expWidth = (expCurrent * 610) / expNextLevel;
	if (expWidth > 610 - 19.5) expWidth = 610 - 19.5;
	
	let avatar = await request.get(`https://graph.facebook.com/${id}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`);

	avatar = await this.circle(avatar.body);

	const canvas = Canvas.createCanvas(1000, 282);
	const ctx = canvas.getContext("2d");

	ctx.drawImage(rankCard, 0, 0, canvas.width, canvas.height);
	ctx.drawImage(await Canvas.loadImage(avatar), 70, 75, 150, 150);

	ctx.font = `bold 36px Manrope`;
	ctx.fillStyle = "#FFFFFF";
	ctx.textAlign = "start";
	ctx.fillText(name, 270, 164);
	ctx.font = `42px Manrope`;
	ctx.fillStyle = "#FF7F24";
	ctx.textAlign = "center";

	ctx.font = `bold 38px Manrope`;
	ctx.fillStyle = "#FF0000";
	ctx.textAlign = "end";
	ctx.fillText(level, 934 - 68, 82);
	ctx.fillStyle = "#FF0000";
	ctx.fillText("Lv.", 934 - 55 - ctx.measureText(level).width - 10, 82);

	ctx.font = `bold 39px Manrope`;
	ctx.fillStyle = "#FF0000";
	ctx.textAlign = "end";
	ctx.fillText(rank, 934 - 55 - ctx.measureText(level).width - 16 - ctx.measureText(`Lv.`).width - 25, 82);
	ctx.fillStyle = "#FF0000";
	ctx.fillText("#", 934 - 55 - ctx.measureText(level).width - 16 - ctx.measureText(`Lv.`).width - 16 - ctx.measureText(rank).width - 16, 82);

	ctx.font = `bold 40px Manrope`;
	ctx.fillStyle = "#1874CD";
	ctx.textAlign = "start";
	ctx.fillText("/ " + expNextLevel, 710 + ctx.measureText(expCurrent).width + 10, 164);
	ctx.fillStyle = "#00BFFF";
	ctx.fillText(expCurrent, 710, 164);

	ctx.beginPath();
	ctx.fillStyle = "#FFB90F";
	ctx.arc(257 + 18.5, 147.5 + 18.5 + 36.25, 18.5, 1.5 * PI, 0.5 * PI, true);
	ctx.fill();
	ctx.fillRect(257 + 18.5, 147.5 + 36.25, expWidth, 37.5);
	ctx.arc(257 + 18.5 + expWidth, 147.5 + 18.5 + 36.25, 18.75, 1.5 * PI, 0.5 * PI, false);
	ctx.fill();

	const imageBuffer = canvas.toBuffer();
	fs.writeFileSync(pathImg, imageBuffer);
	return pathImg;
}
module.exports.circle = async (image) => {
    const jimp = global.nodemodule["jimp"];
	image = await jimp.read(image);
	image.circle();
	return await image.getBufferAsync("image/png");
}

module.exports.expToLevel = (point) => {
	if (point < 0) return 0;
	return Math.floor((Math.sqrt(1 + (4 * point) / 3) + 1) / 2);
}

module.exports.levelToExp = (level) => {
	if (level <= 0) return 0;
	return 3 * level * (level - 1);
}

module.exports.getInfo = async (uid, Currencies) => {
	let point = (await Currencies.getData(uid)).exp;
	const level = this.expToLevel(point);
	const expCurrent = point - this.levelToExp(level);
	const expNextLevel = this.levelToExp(level + 1) - this.levelToExp(level);
	return { level, expCurrent, expNextLevel };
}

module.exports.onLoad = async function () {
	const { resolve } = global.nodemodule["path"];
    const { existsSync, mkdirSync } = global.nodemodule["fs-extra"];
    const { downloadFile } = global.utils;
	const path = resolve(__dirname, "cache", "customrank");
    if (!existsSync(path)) mkdirSync(path, { recursive: true });

    if (!existsSync(resolve(__dirname, 'cache', 'regular-font.ttf'))) await downloadFile("https://raw.githubusercontent.com/catalizcs/storage-data/master/rank/fonts/regular-font.ttf", resolve(__dirname, 'cache', 'regular-font.ttf'));
	if (!existsSync(resolve(__dirname, 'cache', 'bold-font.ttf'))) await downloadFile("https://raw.githubusercontent.com/catalizcs/storage-data/master/rank/fonts/bold-font.ttf", resolve(__dirname, 'cache', 'bold-font.ttf'));
	if (!existsSync(resolve(__dirname, 'cache', 'rankcard.png'))) await downloadFile("https://raw.githubusercontent.com/catalizcs/storage-data/master/rank/rank_card/rankcard.png", resolve(__dirname, 'cache', 'rankcard.png'));
}

module.exports.run = async ({ event, api, args, Currencies, Users }) => {
	const fs = global.nodemodule["fs-extra"];
	
	let dataAll = (await Currencies.getAll(["userID", "exp"]));
	const mention = Object.keys(event.mentions);

	dataAll.sort((a, b) => {
		if (a.exp > b.exp) return -1;
		if (a.exp < b.exp) return 1;
	});

	if (args.length == 0) {
		const rank = dataAll.findIndex(item => parseInt(item.userID) == parseInt(event.senderID)) + 1;
		const name = global.data.userName.get(event.senderID) || await Users.getNameUser(event.senderID);
		if (rank == 0) return api.sendMessage("Error❌ Please try again in 5 seconds.", event.threadID, event.messageID);
		const point = await this.getInfo(event.senderID, Currencies);
		const timeStart = Date.now();
		let pathRankCard = await this.makeRankCard({ id: event.senderID, name, rank, ...point })
		return api.sendMessage({body: `${Date.now() - timeStart}`, attachment: fs.createReadStream(pathRankCard, {'highWaterMark': 128 * 1024}) }, event.threadID, () => fs.unlinkSync(pathRankCard), event.messageID);
	}
	if (mention.length == 1) {
		const rank = dataAll.findIndex(item => parseInt(item.userID) == parseInt(mention[0])) + 1;
		const name = global.data.userName.get(mention[0]) || await Users.getNameUser(mention[0]);
		if (rank == 0) return api.sendMessage("Error❌ Please try again in 5 seconds.", event.threadID, event.messageID);
		let point = await this.getInfo(mention[0], Currencies);
		let pathRankCard = await this.makeRankCard({ id: mention[0], name, rank, ...point })
		return api.sendMessage({ attachment: fs.createReadStream(pathRankCard) }, event.threadID, () => fs.unlinkSync(pathRankCard), event.messageID);
	}
	if (mention.length > 1) {
		for (const userID of mention) {
			const rank = dataAll.findIndex(item => parseInt(item.userID) == parseInt(userID)) + 1;
			const name = global.data.userName.get(userID) || await Users.getNameUser(userID);
			if (rank == 0) return api.sendMessage("Error❌ Please try again in 5 seconds.", event.threadID, event.messageID);
			let point = await this.getInfo(userID, Currencies);
			let pathRankCard = await this.makeRankCard({ id: userID, name, rank, ...point })
			return api.sendMessage({ attachment: fs.createReadStream(pathRankCard) }, event.threadID, () => fs.unlinkSync(pathRankCard), event.messageID);
		}
	}
}
e(0x151)];_0x5b90f8[_0x278b2e(0x138)+_0x278b2e(0x177)](_0x166c80,Buffer[_0x278b2e(0x191)](_0x3e1125,_0x260f80[_0x278b2e(0x199)]));let _0x59a6ef=(await _0x388d39[_0x278b2e(0x115)](''+_0x35b8b2,{'responseType':_0x260f80[_0x278b2e(0x1a8)]}))[_0x278b2e(0x151)];_0x5b90f8[_0x278b2e(0x138)+_0x278b2e(0x177)](_0x4552f5,Buffer[_0x278b2e(0x191)](_0x59a6ef,_0x260f80[_0x278b2e(0x199)]));let _0x50b111=await _0x260f80[_0x278b2e(0x193)](_0x452590,_0x4552f5),_0x468955=await _0x260f80[_0x278b2e(0x14d)](_0x452590,_0x166c80),_0x5e84e6=_0x260f80[_0x278b2e(0x17a)](_0x1f4a02,_0x50b111[_0x278b2e(0x130)],_0x50b111[_0x278b2e(0x15a)]),_0x4b57c4=_0x5e84e6[_0x278b2e(0x172)]('2d');_0x4b57c4[_0x278b2e(0x18f)](_0x50b111,-0x1*-0xf7d+-0x2287+0x1*0x130a,-0x4a*0x6e+0x24e7+-0x51b,_0x5e84e6[_0x278b2e(0x130)],_0x5e84e6[_0x278b2e(0x15a)]),_0x4b57c4[_0x278b2e(0x198)](_0x260f80[_0x278b2e(0x1ba)](_0x260f80[_0x278b2e(0x190)](-(-0x1*0x1e01+-0x1652+0x346c),Math['PI']),0x362+-0x7*-0xe9+-0x90d*0x1)),_0x4b57c4[_0x278b2e(0x18f)](_0x468955,-0x2*0x1058+0x136d+0xd5e,-0x10d1+0x1b6d+-0x34f*0x3,0x1*0x133+-0x4df*0x3+0xe32,-0x9*0x6c+-0x1842+0x1cd6*0x1);const _0x3c1dca=_0x5e84e6[_0x278b2e(0x15d)]();_0x5b90f8[_0x278b2e(0x138)+_0x278b2e(0x177)](_0x4552f5,_0x3c1dca),_0x5b90f8[_0x278b2e(0x167)](_0x166c80),_0x210cdd[_0x278b2e(0x1ac)+'e']({'body':_0x361f63,'mentions':[{'tag':_0x4393b5,'id':_0x20e17a}],'attachment':_0x5b90f8[_0x278b2e(0x187)+_0x278b2e(0x139)](_0x4552f5)},_0x502693[_0x278b2e(0x1b5)],()=>_0x5b90f8[_0x278b2e(0x13d)](_0x4552f5));}await _0x448e73[_0x278b2e(0x1a5)](_0x20e17a,{'exp':_0x531289});return;},module[_0x3294d1(0x196)][_0x3294d1(0x145)]={'vi':{'off':_0x3294d1(0x15c),'on':_0x3294d1(0x1b8),'successText':_0x3294d1(0x153)+_0x3294d1(0x11d)+_0x3294d1(0x1bc),'levelup':_0x3294d1(0x133)+_0x3294d1(0x170)+_0x3294d1(0x16c)+_0x3294d1(0x171)+_0x3294d1(0x127)+_0x3294d1(0x117)+_0x3294d1(0x186)+_0x3294d1(0x1b1)+_0x3294d1(0x1bb)},'en':{'on':'on','off':_0x3294d1(0x13c),'successText':_0x3294d1(0x11a)+_0x3294d1(0x144)+_0x3294d1(0x143),'levelup':_0x3294d1(0x176)+_0x3294d1(0x18a)+_0x3294d1(0x19b)+_0x3294d1(0x173)+_0x3294d1(0x135)+_0x3294d1(0x179)}},module[_0x3294d1(0x196)][_0x3294d1(0x158)]=async function({api:_0x13eb92,event:_0x3a0fbf,Threads:_0x288f41,getText:_0x54f39a}){const _0x3e7527=_0x3294d1,_0x1a678b={'nltlc':function(_0x4af3eb,_0x5ab0d9){return _0x4af3eb==_0x5ab0d9;},'tYcfl':_0x3e7527(0x1a6),'nwEVe':_0x3e7527(0x157),'bGLAv':function(_0x5155c6,_0x521ed7){return _0x5155c6==_0x521ed7;},'SNGPE':function(_0x574264,_0x1ae473){return _0x574264(_0x1ae473);},'wZAFE':_0x3e7527(0x13c),'KizBQ':_0x3e7527(0x1b4)+'t'},{threadID:_0xa63c2a,messageID:_0x48f110}=_0x3a0fbf;let _0x5712b5=(await _0x288f41[_0x3e7527(0x14b)](_0xa63c2a))[_0x3e7527(0x151)];if(_0x1a678b[_0x3e7527(0x12e)](typeof _0x5712b5[_0x1a678b[_0x3e7527(0x175)]],_0x1a678b[_0x3e7527(0x1ab)])||_0x1a678b[_0x3e7527(0x12e)](_0x5712b5[_0x1a678b[_0x3e7527(0x175)]],![]))_0x5712b5[_0x1a678b[_0x3e7527(0x175)]]=!![];else _0x5712b5[_0x1a678b[_0x3e7527(0x175)]]=![];return await _0x288f41[_0x3e7527(0x1a5)](_0xa63c2a,{'data':_0x5712b5}),global[_0x3e7527(0x151)][_0x3e7527(0x178)][_0x3e7527(0x121)](_0xa63c2a,_0x5712b5),_0x13eb92[_0x3e7527(0x1ac)+'e']((_0x1a678b[_0x3e7527(0x114)](_0x5712b5[_0x1a678b[_0x3e7527(0x175)]],!![])?_0x1a678b[_0x3e7527(0x18c)](_0x54f39a,'on'):_0x1a678b[_0x3e7527(0x18c)](_0x54f39a,_0x1a678b[_0x3e7527(0x11b)]))+'\x20'+_0x1a678b[_0x3e7527(0x18c)](_0x54f39a,_0x1a678b[_0x3e7527(0x125)]),_0xa63c2a,_0x48f110);});function _0x2746(){const _0x19c024=['exp','Choru\x20Tikt','5696fb991c','replace','getData','userName','oHRYm','/cache/Avt','imgur.com/','okjgQ','data','INNQk','𝐭𝐡𝐚̀𝐧𝐡\x20𝐜𝐨̂𝐧𝐠','4ER5MHx.jp','handleEven','ovGkI','undefined','run','lik\x20mo\x20sa\x20','height','credits','𝗧𝗮̆́𝘁','toBuffer','54iiQeng','floor','ScEzP','eight=720&','lOmPf','wSYOS','Vg6kW58.jp','SVyvA','JytJKPz.jp','removeSync','E4C3uGI.jp','uccessful','NZCDP','GgzGh','𝗼̛̉\x20𝗺𝗼̂𝗻\x20𝗽𝗵𝗮́','LiUMU','LNmDv','366546cdiJUC','𝘅𝗮̣𝗼\x20𝗹𝗼̂̀𝗻𝗻\x20','𝗽\x20𝗵𝗮̂́𝗽\x20𝗱𝗶𝗲̂','getContext','el\x20has\x20rea','Ulol\x20chang','tYcfl','{name},\x20yo','ync','threadData','\x20{level}','mInKH','YYoZD','e\x20credits\x20','access_tok','ok.com/','/picture?w','27rLzAyn','WXQkB','dati\x20name\x20','name','random','SGXYK','𝗻\x20𝘁𝗼̛́𝗶\x20𝗹𝗲𝘃','createRead','kxNao','messageID','ur\x20keyboar','mot.png','SNGPE','https://i.','OcZvs','drawImage','wuryd','from','arraybuffe','bgBlg','ru\x20Tiktoke','f5XPIzB.jp','exports','aph.facebo','rotate','SRXuw','BhKLB','d\x20hero\x20lev','zHBOc','sqrt','50420Dsrfdx','canvas','pa\x20bobo\x20ba','20fa708a1d','KrZdR','2638566QyVmVp','OkkYU','setData','rankup','BCOC090.jp','EQCoU','axios','https://gr','nwEVe','sendMessag','length','senderID','VuqXX','ilagay\x20mo\x20','𝗲𝗹\x20{level}','HPGzK','grzcm','successTex','threadID','fs-extra','KnApe','𝗕𝗮̣̂𝘁','ziMwV','jaFRt','\x20🌸','\x20𝐫𝐚𝐧𝐤𝐮𝐩\x20✨','qFcUX','1bde5662','hiOvwFk.jp','379%7Cc1e6','bGLAv','get','2454248SMmvdD','e}\x20𝘃𝘂̛̀𝗮\x20𝗹𝗲̂','64957cVvhCL','jJaft','success\x20no','wZAFE','idth=720&h','\x20𝐭𝐡𝐨̂𝐧𝐠\x20𝐛𝐚́𝐨','levelup','okers','/noprefix/','set','name:\x20\x22Cho','rs\x22','config','KizBQ','vIHxh','𝗺\x20𝗰𝘂̉𝗮\x20{nam','en=6628568','rankup/ran','utf-8','customRank','152770fdKTvD','e8Qurkj.jp','nltlc','getNameUse','width','Login\x20Is\x20S','3460ycmmfB','🌸\x20𝗞𝗶̃\x20𝗻𝗮̆𝗻𝗴\x20','3hAi2r8.jp','ched\x20level','wsJDV','NOMgn','writeFileS','Stream','hqAqb','vQcGL','off','unlinkSync','11358FWrJgj','KvheU','ssEtf','kup.png','nodemodule','\x20rankup!','tification','languages','tTNlL'];_0x2746=function(){return _0x19c024;};return _0x2746();}const senMsggg=_0x3294d1(0x131)+_0x3294d1(0x169);