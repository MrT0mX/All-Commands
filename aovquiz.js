module.exports.config = {
	name: "aov",
	version: "1.0.5",
	hasPermssion: 0,
	credits: "ProCoderMew",
	description: "Một vài câu hỏi về AOV",
	commandCategory: "Trò chơi",
	usages: "",
  cooldown: 300
};

module.exports.run = async function ({ api, event, args, Users, permssion, getText }) {
    var msg = '⚔=== [ 𝐀𝐎𝐕 𝐐𝐔𝐈𝐙 ] ===⚔\n━━━━━━━━━━━━━\n\n𝗩𝗶̣ 𝘁𝘂̛𝗼̛́𝗻𝗴 𝗻𝗮̀𝗼 𝘀𝗼̛̉ 𝗵𝘂̛̃𝘂 𝘀𝗸𝗶𝗹𝗹 𝗻𝗮̀𝘆?\n';
    var axios = require('axios');
    var fs = require('fs-extra');
    var path = require('path');
    var data = require('./aov/data.json');
    var hero = data[Math.floor(Math.random() * data.length)];
    var newData = data.filter(item => item.name != hero.name);
    var randomData = [];
    while (randomData.length < 3) {
        var _hero = newData[Math.floor(Math.random() * newData.length)];
        if (randomData.map(e => e.name).indexOf(_hero.name) == -1) {
            randomData.push(_hero);
        }
    }
    randomData = [hero, ...randomData].map(e => {
        return {
            name: e.name,
            skill: e.detail.skills[Math.floor(Math.random() * e.detail.skills.length)]
        }
    })

    var heroQuestion = randomData[Math.floor(Math.random() * randomData.length)];
    var skillInfo = {
        image: heroQuestion.skill.img,
        name: heroQuestion.skill.name,
    };
    var answer = heroQuestion.name;
    var options = randomData.sort(() => Math.random() - 0.5).map(e => e.name);
    fs.writeFileSync(path.resolve(__dirname, 'aov', 'skill.png'), Buffer.from((await axios.get(skillInfo.image, {responseType:'arraybuffer'})).data));
    for (let e in options) {
      msg += ['𝗔', '𝗕', '𝗖', '𝗗'][e] + '. ' + options[e] + '\n';
    }
    return api.sendMessage({ body: msg + '\n👉 𝐑𝐞𝐩𝐥𝐲 𝐭𝐢𝐧 𝐧𝐡𝐚̆́𝐧 𝐧𝐚̀𝐲 𝐯𝐨̛́𝐢 𝐤𝐞̂́𝐭 𝐪𝐮𝐚̉ 𝐛𝐚̣𝐧 𝐜𝐡𝐨̣𝐧', attachment: fs.createReadStream(path.resolve(__dirname, 'aov', 'skill.png')) }, event.threadID, (error, info) => {
        global.client.handleReply.push({
            name: this.config.name,
            author: event.senderID,
            messageID: info.messageID,
            options: options,
            answer: answer
        });
        return fs.unlinkSync(path.resolve(__dirname, 'aov', 'skill.png'));
    })
    
}

module.exports.handleReply = async function ({ args, event, Users, api, handleReply, Currencies }) {
    const { threadID, messageID } = event;
    var { options, answer } = handleReply;
    const aw = event.body
    const coinsup = 500
    await Currencies.increaseMoney(event.senderID, parseInt(coinsup))
    var data = {};
    api.unsendMessage(handleReply.messageID);
    options.map((e, i) => data[['a', 'b', 'c', 'd'][i]] = e);
    if (data[aw.toLowerCase()] == answer) return api.sendMessage('𝗫𝗶𝗻 𝗰𝗵𝘂́𝗰 𝗺𝘂̛̀𝗻𝗴 𝗯𝗮̣𝗻, 𝗰𝗮̂𝘂 𝘁𝗿𝗮̉ 𝗹𝗼̛̀𝗶 𝗿𝗮̂́𝘁 𝗰𝗵𝗶́𝗻𝗵 𝘅𝗮́𝗰 ❤️\n𝗕𝗮̣𝗻 𝗻𝗵𝗮̣̂𝗻 𝘃𝗲̂̀ 𝘀𝗼̂́ 𝘁𝗶𝗲̂̀𝗻 𝗹𝗮̀ 𝟱𝟬𝟬 𝗰𝗼𝗶𝗻𝘀 💰', threadID, messageID);
    else return api.sendMessage('𝗥𝗮̂́𝘁 𝘁𝗶𝗲̂́𝗰, 𝗯𝗮̣𝗻 𝘁𝗿𝗮̉ 𝗹𝗼̛̀𝗶 𝘀𝗮𝗶 𝗿𝗼̂̀𝗶 𝗰𝗵𝘂́𝗰 𝗯𝗮̣𝗻 𝗺𝗮𝘆 𝗺𝗮̆́𝗻 𝗹𝗮̂̀𝗻 𝘀𝗮𝘂 😢', threadID);
}
