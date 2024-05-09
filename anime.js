module.exports.config = {
	name: "anime",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Tiadal",
	description: "Random ảnh anime",
	commandCategory: "Random-IMG",
	usages: "",
	cooldowns: 5
};

module.exports. run = async ({ api, event }) => {
    const axios = global.nodemodule['axios'];
    const request = global.nodemodule['request'];
    const fs = global.nodemodule["fs"];
    axios.get(`https://apiuwuapi.ducdz999.repl.co/images/anime`).then((res) => {
    let callback = function () {
    api.sendMessage({
                    body: `🌸 𝗔̉𝗻𝗵 𝗮𝗻𝗶𝗺𝗲 𝗰𝘂̛̣𝗽 𝗺𝘂́𝗽 🌸\n🌈 𝗔𝘂𝘁𝗵𝗼𝗿: ${res.data.author}\n💦 𝗦𝗼̂́ 𝗹𝘂̛𝗼̛̣𝗻𝗴 𝗮̉𝗻𝗵: ${res.data.count}`,
    attachment: fs.createReadStream(__dirname + `/cache/anime.jpg`)
    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/anime.jpg`), event.messageID);
    };
    request(res.data.url).pipe(fs.createWriteStream(__dirname + `/cache/anime.jpg`)).on("close", callback);
    })
   };