module.exports.config = {
  name: "goiadmin",
  version: "1.0.0-beta-fixbyDungUwU",
  hasPermssion: 0,
  credits: "ZyrosGenZ-fixbyDungUwU",
  description: "Bot will rep ng tag admin or rep ng tagbot ",
  commandCategory: "Other",
  usages: "",
  cooldowns: 1
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "100017985245260") {
    var aid = ["100017985245260"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["Wo Busy H mujhe Bolo Kya Bolna H?", "Kya Hua Boss ko q Bula Rhe Ho?", "Wo Shayad Busy hoga", "Ratul Toh Vag gya"];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
        }