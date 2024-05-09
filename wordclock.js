module.exports.config = {
  name: "wordclock",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "MrTomXxX",
  description: "View the dates and times of Country",
  commandCategory: "Time",
  cooldowns: 2
};
module.exports.run = async ({ api, event }) => {
  const axios = require('axios');
  const fetch = global.nodemodule["node-fetch"];
  const request = require('request');
  const fs = require("fs");
  const moment = require("moment-timezone");
  var gio = moment.tz("Asia/Dhaka").format("HH:mm:ss || D/MM/YYYY");
  var gio2 = moment.tz("Europe/Lodon").format("HH:mm:ss || D/MM/YYYY");
  var gio1 = moment.tz("America/Brasília").format("HH:mm:ss || D/MM/YYYY");
  var gio3 = moment.tz("Asia/Kolkata").format("HH:mm:ss || D/MM/YYYY");
  var gio4 = moment.tz("Asia/New_Delhi").format("HH:mm:ss || D/MM/YYYY");
  var gio5 = moment.tz("America/New_York").format("HH:mm:ss || D/MM/YYYY");
  var gio6 = moment.tz("Asia/Mumbai").format("HH:mm:ss || D/MM/YYYY");var gio1 = moment.tz("America/New_York").format("HH:mm:ss || D/MM/YYYY");
  var gio7 = moment.tz("Europe/Paris").format("HH:mm:ss || D/MM/YYYY");
  var gio8 = moment.tz("Asia/Dhaka").format("HH:mm:ss || D/MM/YYYY");//add pa kayo kung gusto nyo
  axios.get('https://apituandz1407.herokuapp.com/api/gaisexy.php').then(res => {
 let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
  let callback = function () {
  api.sendMessage({
  body: `View Dates in Country:\n-🇵🇭Philippines: ${gio8}\n-🇻🇳 Vietnam𝐢: ${gio}\n-🇬🇧 London: ${gio2}\n-🇺🇸 New York: ${gio5}\n-🇰🇷 Seoul: ${gio3}\n-🇯🇵 Tokyo: ${gio4}\n-🇧🇷 Brasilia: ${gio1}\n-🇲🇾 Kuala Lumpur: ${gio6}\n-🇫🇷 Paris: ${gio7}`,
  attachment: fs.createReadStream(__dirname + `/data/anh.${ext}`)
  }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/anh.${ext}`), event.messageID);
   };
  request(res.data.data).pipe(fs.createWriteStream(__dirname + `/data/anh.${ext}`)).on("close", callback);
  })
}k);
  })
}