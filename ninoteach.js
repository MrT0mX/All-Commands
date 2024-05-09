module.exports.config = {
    name:"ninoteach",
    version: "1.0.2",
    hasPermssion: 0,
    credits: "DungUwU",
    description: "Dạy nino cute :3",
    commandCategory: "Sim, Nino",
    usages: "câu muốn hỏi nino => câu muốn nino trả lời",
    cooldowns: 5
};

const axios = require('axios');

module.exports.run = async ({ api, event, args }) => {
    let { messageID, threadID } = event;
    let work = args.join(" ");
    let fw = work.indexOf(" => ");
    if (fw == -1) {
        api.sendMessage("𝗦𝗮𝗶 𝗳𝗼𝗿𝗺𝗮𝘁 𝗿𝗼̂̀𝗶 𝗻𝗵𝗲́",threadID,messageID);
    } else {
        let ask = work.slice(0, fw);
        let answer = work.slice(fw + 4, work.length);
        if (ask=="") {api.sendMessage("𝘁𝗵𝗶𝗲̂́𝘂 𝗰𝗮̂𝘂 𝗵𝗼̉𝗶 𝗸𝗶̀𝗮 ",threadID,messageID)} else {
            if (!answer) {api.sendMessage("𝘁𝗵𝗶𝗲̂́𝘂 𝗰𝗮̂𝘂 𝘁𝗿𝗮̉ 𝗹𝗼̛̀𝗶 𝗸𝗶̀𝗮 ",threadID,messageID)} else {
                    axios.get(encodeURI(`https://Adreno-API.ducdz999.repl.co/nino/add/${ask}&&${answer}`)).then(res => {
                        if (res.data.reply == "𝗞𝗲𝘆 𝘃𝗼̛́𝗶 𝘃𝗮𝗹𝘂𝗲 𝗰𝗼́ 𝗵𝗲̂́𝘁 𝗰𝗺𝗻𝗿, 𝘁𝗵𝗲̂𝗺 𝗰𝗮́𝗶 𝗰𝗰"){
                            api.sendMessage("𝗰𝗮̂𝘂 𝗵𝗼̉𝗶, 𝗰𝗮̂𝘂 𝘁𝗿𝗮̉ 𝗹𝗼̛̀𝗶 đ𝗮̃ 𝘁𝗼̂̀𝗻 𝘁𝗮̣𝗶 𝗿 𝗻𝗵𝗮 :))",threadID,messageID)} else {
                                if (res.data.reply == "𝗕𝗶̣ 𝗹𝗼̂̃𝗶 𝗰𝗰 𝗴𝗶̀ 𝗲́𝗼 𝗯𝗶𝗲̂́𝘁") {api.sendMessage('𝗟𝗼̂̃𝗶 𝗸𝗵𝗼̂𝗻𝗴 𝘅𝗮́𝗰 𝗱𝗶̣𝗻𝗵 :>',threadID,messageID)} else {
                                    api.sendMessage("𝗗𝗮̣𝘆 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴!",threadID,messageID);
                                }
                            }
                    })
            }
        }
    }
}