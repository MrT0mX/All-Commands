module.exports.config = {
	name: 'congcu',
	version: '1.0.0',
	hasPermssion: 0,
	credits: 'Raiden Shogun',
	description: 'Đếm mọi thứ trong server bot',
	commandCategory: 'Công cụ',
	usages: '[alluser/allthread/admin/adminbot/members/ndh/mess/mymess/fast/ping/uptime/time/tarot/cadao]',
	cooldowns: 2
};
module.exports.languages = {
    "vi": {
        "listAdmin": '📝 Danh sách toàn bộ người điều hành bot: \n\n%1'
    },
    "en": {
        "listAdmin": '[Admin] Admin list: \n\n%1'
    }
}

module.exports.run = async ({ api, event, args, Currencies, Threads, Users, getText }) => {
	const { threadID, messageID, senderID} = event;
	if (args[0] == "alluser" || args[0] == "user" || args[0] == "users" || args[0] == "allusers") {

		return api.sendMessage(`[🦋] 𝐓𝐨̂̉𝐧𝐠 𝐔𝐬𝐞𝐫𝐬: ${global.data.allUserID.length}`, threadID);
	}
	if (args[0] == "allthread" || args[0] == "thread" || args[0] == "group" || args[0] == "threads" || args[0] == "allthreads") {
		return api.sendMessage(`[🦋] 𝐓𝐨̂̉𝐧𝐠 𝐍𝐡𝐨́𝐦: ${global.data.allThreadID.length}`, threadID);
	}
	if (args[0] == "admin" || args[0] == "ad" || args[0] == "qtv") {
		const { participantIDs, adminIDs } = (await Threads.getData(event.threadID)).threadInfo;
		let qtv = adminIDs.length;
		return api.sendMessage(`[🦋] 𝐒𝐨̂́ 𝐪𝐮𝐚̉𝐧 𝐭𝐫𝐢̣ 𝐯𝐢𝐞̂𝐧 𝐜𝐮̉𝐚 𝐧𝐡𝐨́𝐦: ${qtv}`, threadID);
	}
	if (args[0] == "cadao") {
		const axios = global.nodemodule["axios"];
		const res = await axios.get(`https://apiuwuapi.ducdz999.repl.co/poem/cadao`);
		var cadao = res.data.data;
		return api.sendMessage(`[🦋] 𝐂𝐚 𝐃𝐚𝐨 𝐕𝐢𝐞̣̂𝐭 𝐍𝐚𝐦 [⚜️]\n${cadao}`, event.threadID, event.messageID)
	}
	if (args[0] == "member" || args[0] == "mem" || args[0] == "membox" || args[0] == "members") {
		const { participantIDs, adminIDs } = (await Threads.getData(event.threadID)).threadInfo;
		let members = (event.participantIDs).length;
		return api.sendMessage(`[🦋] 𝐒𝐨̂́ 𝐭𝐡𝐚̀𝐧𝐡 𝐯𝐢𝐞̂𝐧 𝐜𝐮̉𝐚 𝐧𝐡𝐨́𝐦: ${members}`, threadID);
	}
	if (args[0] == "mess" || args[0] == "inbox" || args[0] == "ib") {
		var threadInfo = await api.getThreadInfo(event.threadID);
		let sl = threadInfo.messageCount;
		return api.sendMessage(`[🦋] 𝐒𝐨̂́ 𝐭𝐢𝐧 𝐧𝐡𝐚̆́𝐧 𝐜𝐮̉𝐚 𝐧𝐡𝐨́𝐦: ${sl}`, threadID);
	}
	if (args[0] == "mymess" || args[0] == "myinbox" || args[0] == "myib") {
		const countMess = await Currencies.getData(senderID);
		return api.sendMessage(`[🦋] 𝐒𝐨̂́ 𝐭𝐢𝐧 𝐧𝐡𝐚̆́𝐧 𝐜𝐮̉𝐚 𝐛𝐚̣𝐧: ${countMess.exp}`, threadID);
	}
	if (args[0] == "fast") {
		const fast = global.nodemodule["fast-speedtest-api"];
		const speedTest = new fast({
			token: "YXNkZmFzZGxmbnNkYWZoYXNkZmhrYWxm",
			verbose: false,
			timeout: 10000,
			https: true,
			urlCount: 5,
			bufferSize: 8,
			unit: fast.UNITS.Mbps
		});
		const resault = await speedTest.getSpeed();
		return api.sendMessage(`[🦋] 𝐅𝐚𝐬𝐭: ${resault}𝗠𝗯𝘀`, threadID);
	}
	if (args[0] == "time") {
		const moment = require("moment-timezone");
    var gio = moment.tz("Asia/Ho_Chi_Minh").format("D/MM/YYYY || HH:mm:ss");
    var thu = moment.tz('Asia/Ho_Chi_Minh').format('dddd');
     if (thu == 'Sunday') thu = 'Chủ Nhật'
  if (thu == 'Monday') thu = 'Thứ Hai'
  if (thu == 'Tuesday') thu = 'Thứ Ba'
  if (thu == 'Wednesday') thu = 'Thứ Tư'
  if (thu == "Thursday") thu = 'Thứ Năm'
  if (thu == 'Friday') thu = 'Thứ Sáu'
  if (thu == 'Saturday') thu = 'Thứ Bảy'
  var gio2 = moment.tz("Europe/Lodon").format("HH:mm:ss || D/MM/YYYY");
  var gio1 = moment.tz("America/Brasília").format("HH:mm:ss || D/MM/YYYY");
  var gio3 = moment.tz("Asia/Seoul").format("HH:mm:ss || D/MM/YYYY");
  var gio4 = moment.tz("Asia/Tokyo").format("HH:mm:ss || D/MM/YYYY");
  var gio5 = moment.tz("America/New_York").format("HH:mm:ss || D/MM/YYYY");
  var gio6 = moment.tz("Asia/Kuala_Lumpur").format("HH:mm:ss || D/MM/YYYY");var gio1 = moment.tz("America/New_York").format("HH:mm:ss || D/MM/YYYY");
  var gio7 = moment.tz("Europe/Paris").format("HH:mm:ss || D/MM/YYYY");
	let today = new Date();
		return api.sendMessage(`[🦋] 𝐇𝐨̂𝐦 𝐧𝐚̀𝐲 𝐥𝐚̀: ${thu} || ${gio}\n[🦋] 𝐂𝐚́𝐜 𝐦𝐮́𝐢 𝐠𝐢𝐨̛̀ 𝐤𝐡𝐚́𝐜 𝐭𝐫𝐞̂𝐧 𝐭𝐡𝐞̂́ 𝐠𝐢𝐨̛́𝐢:\n-🇬🇧 𝐋𝐨𝐧𝐝𝐨𝐧: ${gio2}\n-🇺🇸 𝐍𝐞𝐰 𝐘𝐨𝐫𝐤: ${gio5}\n-🇰🇷 𝐒𝐞𝐨𝐮𝐥: ${gio3}\n-🇯🇵𝐓𝐨𝐤𝐲𝐨: ${gio4}\n-🇧🇷 𝐁𝐫𝐚𝐬𝐢́𝐥𝐢𝐚: ${gio1}\n-🇲🇾 𝐊𝐮𝐚𝐥𝐚 𝐋𝐮𝐦𝐩𝐮𝐫: ${gio6}\n-🇫🇷 𝐏𝐚𝐫𝐢𝐬:${gio7}`, event.threadID, event.messageID)
	}

	if (args[0] == "ping") {
		const timeStart = Date.now();
		return api.sendMessage(`[🦋] 𝐏𝐢𝐧𝐠: ${Date.now() - timeStart}ms`, threadID);
	}
	if (args[0] == "uptime" || args[0] == "upt") {
	const time = process.uptime(),
		  hours = Math.floor(time / (60 * 60)),
		  minutes = Math.floor((time % (60 * 60)) / 60),
		  seconds = Math.floor(time % 60);
		  return api.sendMessage(`[🦋] 𝐔𝐩𝐭𝐢𝐦𝐞: ${hours}:${minutes}:${seconds}`, threadID)
	}
	if (args[0] == "adminbot" || args[0] == "admbot" || args[0] == "adbot") {
			const { configPath } = global.client;
			const { ADMINBOT } = global.config;
			var config = require(configPath);
		    const listAdmin = ADMINBOT || config.ADMINBOT || [];
            var msg = [];

            for (const idAdmin of listAdmin) {
                if (parseInt(idAdmin)) {
                    const name = (await Users.getData(idAdmin)).name 
                    msg.push(` - ${name}\n- 𝐋𝐢𝐧𝐤: https://facebook.com/${idAdmin}`);
                }
            }
            return api.sendMessage(getText("listAdmin", msg.join("\n\n")), threadID, messageID);
	}
    if (args[0] == "ndhbot" || args[0] == "ndh") {
			const { configPath } = global.client;
			const { NDH } = global.config;
			var config = require(configPath);
		    const listAdmin = NDH || config.NDH || [];
            var msg = [];

            for (const idAdmin of listAdmin) {
                if (parseInt(idAdmin)) {
                    const name = (await Users.getData(idAdmin)).name 
                    msg.push(`- ${name}\n- 𝐋𝐢𝐧𝐤: https://facebook.com/${idAdmin}`);
                }
            }
            return api.sendMessage(getText("listAdmin", msg.join("\n\n")), threadID, messageID);
	}
      if (args[0] == "love" || args[0] =="ngontinh") {
		const axios = global.nodemodule["axios"];
		const res = await axios.get(`https://apiuwuapi.ducdz999.repl.co/poem/love`);
		var love = res.data.data;
		return api.sendMessage(`[🦋] 𝐍𝐠𝐨̂𝐧 𝐓𝐢̀𝐧𝐡 [🦋]\n${love}`, event.threadID, event.messageID)
	}
        if (args[0] == "thayboi" || args[0] =="boi") {
		const axios = global.nodemodule["axios"];
		const res = await axios.get(`https://apiuwuapi.ducdz999.repl.co/poem/thayboi`);
		var thayboi = res.data.data;
		return api.sendMessage(`[🦋] 𝑻𝒉𝒂̂̀𝒚 𝑩𝒐́𝒊 [🦋]\n\n${thayboi}`, event.threadID, event.messageID)
	}
          if (args[0] == "joker") {
		const axios = global.nodemodule["axios"];
		const res = await axios.get(`https://apiuwuapi.ducdz999.repl.co/poem/joker`);
		var joker = res.data.data;
		return api.sendMessage(`[🦋] 𝑪𝒂̂𝒖 𝑵𝒐́𝒊 𝑪𝒖̉𝒂 𝑱𝒐𝒌𝒆𝒓 [🦋]\n\n${joker}`, event.threadID, event.messageID)
	}

	else 
		return api.sendMessage("⚙===「 𝐓𝐚𝐠𝐬 𝐂𝐨̂𝐧𝐠 𝐂𝐮̣ 」===⚙\n──────────────\n[🦋] 𝐂𝐨𝐧𝐠𝐜𝐮 𝐚𝐥𝐥𝐮𝐬𝐞𝐫 -> Tổng Số Thành Viên\n[🦋] 𝐂𝐨𝐧𝐠𝐜𝐮 𝐚𝐥𝐥𝐭𝐡𝐫𝐞𝐚𝐝 -> Tổng Số Nhóm\n[🦋] 𝐂𝐨𝐧𝐠𝐜𝐮 𝐪𝐭𝐯 -> Số Quản Trị Viên Nhóm\n[🦋] 𝐂𝐨𝐧𝐠𝐜𝐮 𝐚𝐝𝐛𝐨𝐭 -> Số Admin Bot\n𝐂𝐨𝐧𝐠𝐜𝐮 𝐧𝐝𝐡 -> Số NDH BOT\n[🦋] 𝐂𝐨𝐧𝐠𝐜𝐮 𝐦𝐞𝐦 -> Số Thành Viên Nhóm\n[🦋] 𝐂𝐨𝐧𝐠𝐜𝐮 𝐦𝐞𝐬𝐬 -> Số Tin Nhắn Của Nhóm\n[🦋] 𝐂𝐨𝐧𝐠𝐜𝐮 𝐦𝐲𝐦𝐞𝐬𝐬 -> Số Tin Nhắn Của Bạn\n──────────────\n[🦋] 𝐂𝐨𝐧𝐠𝐜𝐮 𝐟𝐚𝐬𝐭 -> Xem Fast\n[🦋] 𝐂𝐨𝐧𝐠𝐜𝐮 𝐩𝐢𝐧𝐠 -> Xem Ping\n[🦋] 𝐂𝐨𝐧𝐠𝐜𝐮 𝐮𝐩𝐭𝐢𝐦𝐞 -> Xem Thời Gian Bot Online\n[🦋] 𝐂𝐨𝐧𝐠𝐜𝐮 𝐭𝐢𝐦𝐞 -> Xem Thời Gian Các Nước\n──────────────\n[🦋] 𝐂𝐨𝐧𝐠𝐜𝐮 𝐥𝐨𝐯𝐞 -> Ngôn Tình\n[🦋] 𝐂𝐨𝐧𝐠𝐜𝐮 𝐛𝐨𝐢 -> Xem Bói\n[🦋] 𝐂𝐨𝐧𝐠𝐜𝐮 𝐜𝐚𝐝𝐚𝐨 -> Ca Dao VN\n[🦋] 𝐂𝐨𝐧𝐠𝐜𝐮 𝐣𝐨𝐤𝐞𝐫 -> Câu Nói Của Joker\n──────────────", threadID, messageID)

}