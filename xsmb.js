module.exports.config = {
	name: "xsmb",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "NTKhang",
	description: "xem kết quả xổ số miền bắc",
	commandCategory: "Công cụ",
	cooldowns: 5
};

module.exports.run = async function ({ api, event, args }) {
	const axios = require('axios');
	const moment = require('moment-timezone');
	const currentHour = moment.tz("Asia/Ho_Chi_Minh").format("HH");
	const currentMinute = moment.tz("Asia/Ho_Chi_Minh").format("mm");

	let dayGetResult;
	if (currentHour > 18 || (currentHour == 18 && currentMinute >= 15))
		dayGetResult = moment.tz("Asia/Ho_Chi_Minh").format("DD-MM-YYYY");
	else
		dayGetResult = moment.tz("Asia/Ho_Chi_Minh").subtract(1, 'days').format("DD-MM-YYYY");
	if (args[0] && moment.tz(args[0], "DD-MM-YYYY", true, "Asia/Ho_Chi_Minh").isValid())
		dayGetResult = moment.tz(args[0], "DD-MM-YYYY", true, "Asia/Ho_Chi_Minh").format("DD-MM-YYYY");

	const response = await axios.get("https://apiuwuapi.ducdz999.repl.co/xsmb?date=" + dayGetResult);
	const data = response.data;

	api.sendMessage(` Kết quả xổ số miền Bắc ngày ${data.date}\n`
		+ `\nMã giải đặc biệt: ${data.maDB.join('  -  ')}`
		+ `\nGiải đặc biệt: ${data.giaiDB[0]}`
		+ `\nGiải nhất: ${data.giaiNhat[0]}`
		+ `\nGiải nhì: ${data.giaiNhi.join(" - ")}`
		+ `\nGiải ba: ${data.giaiBa.join(" - ")}`
		+ `\nGiải tư: ${data.giaiTu.join(" - ")}`
		+ `\nGiải năm: ${data.giaiNam.join(" - ")}`
		+ `\nGiải sáu: ${data.giaiSau.join(" - ")}`
		+ `\nGiải bảy: ${data.giaiBay.join(" - ")}`, event.threadID, event.messageID);
};