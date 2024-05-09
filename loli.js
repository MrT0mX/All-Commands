module.exports.config = {
	name: "loli",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Yae Miko",
	description: "Xem ảnh gái xinh loli",
	commandCategory: "Random-IMG",
	usages: "",
	cooldowns: 5
};

module.exports. run = async ({ api, event }) => {
    const axios = global.nodemodule['axios'];
    const request = global.nodemodule['request'];
    const fs = global.nodemodule["fs"];
    axios.get(`https://apiuwuapi.ducdz999.repl.co/images/loli`).then((res) => {
    let callback = function () {
    api.sendMessage({
                    body: `👑 𝗔𝘂𝘁𝗵𝗼𝗿: ${res.data.author}\n🌸 𝗦𝗼̂́ 𝗮̉𝗻𝗵: ${res.data.count}`,
    attachment: fs.createReadStream(__dirname + `/cache/loli.jpg`)
    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/loli.jpg`), event.messageID);
    };
    request(res.data.url).pipe(fs.createWriteStream(__dirname + `/cache/loli.jpg`)).on("close", callback);
    })
   };