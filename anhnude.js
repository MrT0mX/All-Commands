module.exports.config = {
    name: "anhnude",   
     version: "1.0.0",
    hasPermssion: 0,
    credits: "TuanDz",
    description: "Random ảnh nude",
    commandCategory: "nsfw",
    usages: "",
    cooldowns: 5
   };
   module.exports. run = async ({ api, event }) => {
    const axios = global.nodemodule['axios'];
    const request = global.nodemodule['request'];
    const fs = global.nodemodule["fs"];
    axios.get(`https://apiuwuapi.ducdz999.repl.co/images/nude`).then((res) => {
    let callback = function () {
    api.sendMessage({
                    body: `𝗔𝘂𝘁𝗵𝗼𝗿: ${res.data.author}\n𝗦𝗼̂́ 𝗹𝘂̛𝗼̛̣𝗻𝗴 𝗮̉𝗻𝗵: ${res.data.count}`,
    attachment: fs.createReadStream(__dirname + `/cache/nude.jpg`)
    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/nude.jpg`), event.messageID);
    };
    request(res.data.url).pipe(fs.createWriteStream(__dirname + `/cache/nude.jpg`)).on("close", callback);
    })
   };