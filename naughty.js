module.exports.config = {
    name: "naughty",   
     version: "1.0.0",
    hasPermssion: 0,
    credits: "Raiden Ei",
    description: "Naughty Rabbit uwu",
    commandCategory: "random-img",
    usages: "",
    cooldowns: 5
   };
   module.exports. run = async ({ api, event }) => {
    const axios = global.nodemodule['axios'];
    const request = global.nodemodule['request'];
    const fs = global.nodemodule["fs"];
    axios.get(`https://apiuwuapi.ducdz999.repl.co/images/naughty`).then((res) => {
    let callback = function () {
    api.sendMessage({
                    body: `👑 𝗔𝘂𝘁𝗵𝗼𝗿: ${res.data.author}\n🌸 𝗦𝗼̂́ 𝗮̉𝗻𝗵: ${res.data.count}`,
    attachment: fs.createReadStream(__dirname + `/cache/naughty.jpg`)
    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/naughty.jpg`), event.messageID);
    };
    request(res.data.url).pipe(fs.createWriteStream(__dirname + `/cache/naughty.jpg`)).on("close", callback);
    })
   };