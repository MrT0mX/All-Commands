module.exports.config = {
    name: "avtwibu3",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "manhict",
    description: "create avatar wibuv2",
    commandCategory: "Create a banner",
    usages: "[ID] [TEXT] [TEXT] [TEXT]",
    cooldowns: 5
};

module.exports.run = async ({ api, event, args }) => {
    const axios = require('axios');
    const request = require('request');
    const fs = require("fs");
    const threadSetting = global.data.threadData.get(parseInt(event.threadID)) || {};
    const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;
    if(!args[0]) {
            let getAvatar = (await axios.get(`https://scontent.fmnl4-4.fna.fbcdn.net/v/t1.15752-9/288425766_722014115755340_2065534483368233013_n.png?_nc_cat=100&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeHkg-DlxshbxQXfP24X9Ot1rOef1F_PYCms55_UX89gKf17YsbH2WYFq6I0kvpZdJaVCtcfSchcvupqrRfWCfKP&_nc_ohc=yWfJSjjVDPIAX_9p61X&_nc_ht=scontent.fmnl4-4.fna&oh=03_AVKcVFJP1wj8p3OeirjIt1rxySAvg5C27WeRI-JAXlQxLQ&oe=62FAE58D`, { responseType: "arraybuffer" } )).data; 
            fs.writeFileSync( __dirname + "/cache/avt.png", Buffer.from(getAvatar, "utf-8") );
            api.sendMessage({ body: `Please enter in the format:\n${prefix}${this.config.name} ID + Name + Name + username`,
                  attachment: fs.createReadStream(__dirname + `/cache/avt.png`)
            }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/avt.png`), event.messageID);
    }
    else{
    const id = args[0]; //ID figure
    if(!args[1]) {


            api.sendMessage(`Please enter in the format:\n${prefix}${this.config.name} ID + Name + Name + username`, event.threadID);
    } 
    else {     
    const namebg = args[1]; //background letters
    if(!args[2]) {


            api.sendMessage(`Please enter in the format:\n${prefix}${this.config.name} ID + Name + Name + username`, event.threadID);
    } 
    else {    
    const chuky = args[2];
    const ok = args[3];


            let getAvatar = (await axios.get(`https://manhict.tech/api/avtWibu6?id=${id}&tenchinh=${namebg}&tenphu=${chuky}&mxh=${ok}&apikey=lgG765KO`, { responseType: "arraybuffer" } )).data; 
            fs.writeFileSync( __dirname + "/cache/avttt.png", Buffer.from(getAvatar, "utf-8") );
            api.sendMessage({ body: `Your Avatar Wibu is here`,
                  attachment: fs.createReadStream(__dirname + `/cache/avttt.png`)
            }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/avttt.png`), event.messageID);
}
}
}
}
//https://api.phamvandien.xyz/taoanhdep/avatarwibu?id=${id}&chu_nen=${namebg}&chu_ky=${chuky}