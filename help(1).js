module.exports.config = {
	name: "help",
	version: "1.0.2",
	hasPermssion: 0,
	credits: "MrTomXxX",
	description: "Beginner's Guide",
	commandCategory: "system",
	usages: "[Tên module]",
	cooldowns: 1,
	envConfig: {
		autoUnsend: true,
		delayUnsend: 300
	}
};

module.exports.languages = {
	//"vi": {
	//	"moduleInfo": "「 %1 」\n%2\n\n❯ Cách sử dụng: %3\n❯ Thuộc nhóm: %4\n❯ Thời gian chờ: %5 giây(s)\n❯ Quyền hạn: %6\n\n» Module code by %7 «",
	//	"helpList": '[ Hiện tại đang có %1 lệnh có thể sử dụng trên bot này, Sử dụng: "%2help nameCommand" để xem chi tiết cách sử dụng! ]"',
	//	"user": "Người dùng",
  //      "adminGroup": "Quản trị viên nhóm",
  //      "adminBot": "Quản trị viên bot"
//	},
	"en": {
		"moduleInfo": "──────[ %1 ]──────\n%2\n───────────────────\n\n➣ Usage: %3\n➣ Category: %4\n➣ Waiting time: %5 seconds(s)\n➣ Permission: %6\n\n» Module code by %7 «",
		"helpList": '[ There are %1 commands on this bot, Use: "%2help nameCommand" to know how to use! ]',
		"user": "User",
        "adminGroup": "Admin group",
        "adminBot": "Admin bot"
	}
};

module.exports.handleEvent = function ({ api, event, getText }) {
	const { commands } = global.client;
	const { threadID, messageID, body } = event;

	if (!body || typeof body == "undefined" || body.indexOf("help") != 0) return;
	const splitBody = body.slice(body.indexOf("help")).trim().split(/\s+/);
	if (splitBody.length == 1 || !commands.has(splitBody[1].toLowerCase())) return;
	const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
	const command = commands.get(splitBody[1].toLowerCase());
	const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;
	return api.sendMessage(getText("moduleInfo", command.config.name, command.config.description, `${prefix}${command.config.name} ${(command.config.usages) ? command.config.usages : ""}`, command.config.commandCategory, command.config.cooldowns, ((command.config.hasPermssion == 0) ? getText("user") : (command.config.hasPermssion == 1) ? getText("adminGroup") : getText("adminBot")), command.config.credits), threadID, messageID);
}

module.exports.run = async function({ api, event, args, getText, Users }) {
  const axios = require("axios");
  const request = require('request');
  const fs = require("fs-extra");
  const { commands } = global.client;
	const { threadID, messageID } = event;
	const command = commands.get((args[0] || "").toLowerCase());
	const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
	const { autoUnsend, delayUnsend } = global.configModule[this.config.name];
	const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;
if (args[0] == "all") {
    const command = commands.values();
    var group = [], msg = "";
    for (const commandConfig of command) {
      if (!group.some(item => item.group.toLowerCase() == commandConfig.config.commandCategory.toLowerCase())) group.push({ group: commandConfig.config.commandCategory.toLowerCase(), cmds: [commandConfig.config.name] });
      else group.find(item => item.group.toLowerCase() == commandConfig.config.commandCategory.toLowerCase()).cmds.push(commandConfig.config.name);
    }
    group.forEach(commandGroup => msg += `➦ ${commandGroup.group.charAt(0).toUpperCase() + commandGroup.group.slice(1)} \n${commandGroup.cmds.join(' • ')}\n\n`);
  
    return axios.get('https://sakiapi-kanna.000webhostapp.com').then(res => {
    let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
      let admID = "100017985245260";    

      api.getUserInfo(parseInt(admID), (err, data) => {
      if(err){ return console.log(err)}
     var obj = Object.keys(data);
    var firstname = data[obj].name.replace("@", "");
    let callback = function () {
        api.sendMessage({ body:`  === COMMAND LISTS ==\n\n` + msg + `=====================\n⚠️Spamming the bot are strictly prohibited, If you want to spam accept the consequences!!⚠️\n=====================\n🤖Total Commands: ${commands.size}\n=====================\n\n⌨️Made by: ${firstname}`, mentions: [{
                           tag: firstname,
                           id: admID,
                           fromIndex: 0,
                 }],
            attachment: fs.createReadStream(__dirname + `/cache/472.${ext}`)
        }, event.threadID, (err, info) => {
        fs.unlinkSync(__dirname + `/cache/472.${ext}`);
        if (autoUnsend == false) {
            setTimeout(() => { 
                return api.unsendMessage(info.messageID);
            }, delayUnsend * 1000);
        }
        else return;
    }, event.messageID);
        }
         request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/472.${ext}`)).on("close", callback);
     })
      })
};
	if (!command) {
		const arrayInfo = [];
		const page = parseInt(args[0]) || 1;
    const numberOfOnePage = 10;
    //*số thứ tự 1 2 3.....cú pháp ${++i}*//
    let i = 0;
    let msg = "";
    
    for (var [name, value] of (commands)) {
      name += ``;
      arrayInfo.push(name);
    }

    arrayInfo.sort((a, b) => a.data - b.data);
    
const first = numberOfOnePage * page - numberOfOnePage;
    i = first;
    const helpView = arrayInfo.slice(first, first + numberOfOnePage);

    
    for (let cmds of helpView) msg += `${cmds}\n`;
    
    
    const siu = ` Page Cmds`;
    
 const text = `\nPage (${page}/${Math.ceil(arrayInfo.length/numberOfOnePage)})`;
 
    return api.sendMessage(siu + "\n\n" + msg  + text, threadID, async (error, info) => {
			if (autoUnsend) {
				await new Promise(resolve => setTimeout(resolve, delayUnsend * 1000));
				return api.unsendMessage(info.messageID);
			} else return;
		}, event.messageID);
	}

	return api.sendMessage(getText("moduleInfo", command.config.name, command.config.description, `${prefix}${command.config.name} ${(command.config.usages) ? command.config.usages : ""}`, command.config.commandCategory, command.config.cooldowns, ((command.config.hasPermssion == 0) ? getText("user") : (command.config.hasPermssion == 1) ? getText("adminGroup") : getText("adminBot")), command.config.credits), threadID, messageID);
};
 its own existence: What color am I?.","The reason why flamingos are pink-red in color is because they can absorb pigments from the shells of shrimp and shrimp that they eat every day."," Owls and pigeons can memorize human faces", "Cows are more dangerous than sharks","The single pair of wings on the back and the rear stabilizer help the flies to fly continuously, but their lifespan is not more than 14 days.","With a pair of endlessly long legs that can be up to 1.5 m high and weigh 20-25 kg, the ostrich can run faster than a horse. In addition, male ostriches can roar like a lion.","Kangaroos use their tails for balance, so if you lift a Kangaroo's tail off the ground, it won't be able to jump and stand.","Tigers not only have stripes on their backs but also printed on their skin. Each individual tiger is born with its own unique stripe.","If you are being attacked by a crocodile, do not try to get rid of their sharp teeth by pushing them away. Just poke the crocodile in the eye, that's their weakness.","Fleas can jump up to 200 times their height. This is equivalent to a man jumping on the Empire State Building in New York.","A cat has up to 32 muscles in the ear. That makes them have superior hearing ability","Koalas have a taste that does not change throughout life, they eat almost nothing but .. leaves of the eucalyptus tree.","The beaver's teeth do not stop growing throughout its life. If you do not want the teeth to be too long and difficult to control, the beaver must eat hard foods to wear them down.","Animals living in coastal cliffs or estuaries have extremely weird abilities. Oysters can change sex to match the mating method.","Butterflies have eyes with thousands of lenses similar to those on cameras, but they can only see red, green, and yellow..","Don't try this at home, the truth is that if a snail loses an eye, it can recover.","Giraffes do not have vocal cords like other animals of the same family, their tongues are blue-black.","Dog nose prints are like human fingerprints and can be used to identify different dogs.","alam nyo ba na ang pogi ni ken yung owner ng bot laki pa ng tite",];
    
    const text = `{page (${page}/${Math.ceil(arrayInfo.length/numberOfOnePage)}) help 1 help 2}\n༻𝐎𝐖𝐍𝐄𝐑:- ☞𝐑𝐚𝐭𝐮𝐥 𝐇𝐚𝐬𝐬𝐚𝐧☜ ༺\n༒𝚈𝚘𝚞 𝙲𝚊𝚗 𝙲𝚊𝚕𝚕 𝙷𝚒𝚖 〠𝐌𝐫𝐓𝐨𝐦𝐗𝐱𝐗〠.༒\n༒𝐇𝐢𝐬 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐢𝐝༒:- ☞ www.facebook.com/MrTomXxX ☜ \n༻𝘠𝘰𝘶𝘵𝘶𝘣𝘦 𝘭𝘪𝘯𝘬༺:- ☞ https://youtube.com/@MrT0mX ☜\n֎𝘍𝘰𝘳 𝘈𝘯𝘺 𝘒𝘪𝘯𝘥 𝘖𝘧 𝘏𝘦𝘭𝘱 𝘫𝘰𝘪𝘯 𝘞𝘱 𝘎𝘳𝘰𝘶𝘱֍:-☞ https://chat.whatsapp.com/Hog9Xpbgz9cK7EpfUKaHnC ☜\n֎𝘊𝘰𝘯𝘵𝘢𝘤𝘵 𝘔𝘦 𝘖𝘯 𝘞𝘩𝘢𝘵𝘴𝘈𝘱𝘱֍ :-  ☞+8801581712206 ☜                  THANKS FOR USING MY BOT SUBSCRIBE MY YT CHANNEL & JOIN MY WHATSAPP GROUP FOR MORE TIPS AND TRICKS`;  

return api.sendMessage(msg + "\n" + text, threadID, async (error, info) => {
			if (autoUnsend) {
				await new Promise(resolve => setTimeout(resolve, delayUnsend * 10000));
				return api.unsendMessage(info.messageID);
			} else return;
		});
	}

	return

api.sendMessage(getText("moduleInfo", command.config.name, command.config.description, `${prefix}${command.config.name} ${(command.config.usages) ? command.config.usages : ""}`, command.config.commandCategory, command.config.cooldowns, ((command.config.hasPermssion == 0) ? getText("user") : (command.config.hasPermssion == 1) ? getText("adminGroup") : getText("adminBot")), command.config.credits), threadID, messageID);
};