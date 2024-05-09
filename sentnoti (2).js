const fs = require('fs');
const request = require('request');

module.exports.config = {
    name: "sendnoti4",
    version: "1.0.0",
    hasPermssion: 2,
    credits: "TruongMini, mod by NCQB và Magus",
    description: "",
    commandCategory: "Tiện ích",
    usages: "[msg]",
    cooldowns: 5,
}

let atmDir = [];

const getAtm = (atm, body) => new Promise(async (resolve) => {
    let msg = {}, attachment = [];
    msg.body = body;
    for(let eachAtm of atm) {
        await new Promise(async (resolve) => {
            try {
                let response =  await request.get(eachAtm.url),
                    pathName = response.uri.pathname,
                    ext = pathName.substring(pathName.lastIndexOf(".") + 1),
                    path = __dirname + `/cache/${eachAtm.filename}.${ext}`
                response
                    .pipe(fs.createWriteStream(path))
                    .on("close", () => {
                        attachment.push(fs.createReadStream(path));
                        atmDir.push(path);
                        resolve();
                    })
            } catch(e) { console.log(e); }
        })
    }
    msg.attachment = attachment;
    resolve(msg);
})

module.exports.handleReply = async function ({ api, event, handleReply, Users, Threads }) {
    const moment = require("moment-timezone");
      var gio = moment.tz("Asia/Dhaka").format("DD/MM/YYYY - HH:mm:s");
    const { threadID, messageID, senderID, body } = event;
    let name = await Users.getNameUser(senderID);
    switch (handleReply.type) {
        case "sendnoti": {
            let text = `====== [ User Reply ] ======\n--------------\n『𝗧𝗶𝗺𝗲』: ${gio}\n\n--------------\n『Reply』 : ${body}\n\n--------------\nUser Name ${name}  From Group ${(await Threads.getInfo(threadID)).threadName || "Unknow"}`;
            if(event.attachments.length > 0) text = await getAtm(event.attachments, `====== [ User Reply ] ======\n--------------\n『𝗧𝗶𝗺𝗲』: ${gio}\n\n--------------\n『Reply』 : ${body}\n\n--------------\nUser Name: ${name} From Group ${(await Threads.getInfo(threadID)).threadName || "Unknow"}`);
