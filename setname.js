module.exports.config = {
	name: "setname",
	version: "1.1.0",
	hasPermssion: 0,
	credits: "Raiden Ei",
	description: "Đổi biệt danh trong nhóm của bạn hoặc của người bạn tag",
	commandCategory: "Box chat",
	usages: "[trống/tag/reply] + [name]",
	cooldowns: 5
}

module.exports.run = async ({ api, event, args, Users }) => {
  let { threadID, messageReply, senderID, mentions, type } = event;
  const delayUnsend = 60;// tính theo giây
	if (type == "message_reply") {
    let name2 = await Users.getNameUser(messageReply.senderID)
    const name = args.join(" ")
    return api.changeNickname(`${name}`, threadID, messageReply.senderID),
      api.sendMessage(`✅ 𝗖𝗮̣̂𝗽 𝗻𝗵𝗮̣̂𝘁 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴 𝘁𝗲̂𝗻 𝗰𝘂̉𝗮 ${name2} 𝘁𝗵𝗮̀𝗻𝗵 ${name || "𝘁𝗲̂𝗻 𝗴𝗼̂́𝗰"}`, threadID, (err, info) =>
	setTimeout(() => {api.unsendMessage(info.messageID) }, delayUnsend * 1000))
  }
  else {
	const mention = Object.keys(mentions)[0];
	const name2 = await Users.getNameUser(mention || senderID)
    if (args.join().indexOf('@') !== -1 ) {
      const name = args.join(' ')
      return api.changeNickname(`${name.replace(mentions[mention],"")}`, threadID, mention),
        api.sendMessage(`✅ 𝗖𝗮̣̂𝗽 𝗻𝗵𝗮̣̂𝘁 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴 𝘁𝗲̂𝗻 𝗰𝘂̉𝗮 ${name2} 𝘁𝗵𝗮̀𝗻𝗵 ${name.replace(mentions[mention],"") || "𝘁𝗲̂𝗻 𝗴𝗼̂́𝗰"}`, threadID, (err, info) =>
          setTimeout(() => {api.unsendMessage(info.messageID) } , delayUnsend * 1000))
      } else {
    const name = args.join(" ")
      return api.changeNickname(`${name}`, threadID, senderID),
        api.sendMessage(`✅ 𝗖𝗮̣̂𝗽 𝗻𝗵𝗮̣̂𝘁 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴 𝘁𝗲̂𝗻 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻 𝘁𝗵𝗮̀𝗻𝗵 ${name || "𝘁𝗲̂𝗻 𝗴𝗼̂́𝗰"}`, threadID, (err, info) =>
          setTimeout(() => {api.unsendMessage(info.messageID) } , delayUnsend * 1000))
      }
    }
  }
