module.exports.config = {
	name: "doanthangbangnhau",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "LeMinh",
	description: "Đoạn thẳng bằng nhau",
	commandCategory: "Kiến Thức Học Hỏi",
	cooldowns: 0
};

module.exports.run = ({ event, api }) => api.sendMessage(`CHỨNG MINH ĐOẠN THẲNG BẰNG NHAU:
1/ Xét 2 tam giác bằng nhau.
2/ 2 cạnh bên tam giác cân.
3/ Cùng bằng 1 đoạn thứ 3...
4/ Tính 2 đoạn thẳng đó.
5/ Hai đường chéo hình thang cân, hình chữ nhật, 2 cạnh đối  hình bình hành…
6/ 2 ∆ có d.tích =nhau, 2 cạnh đáy =, thì 2 đường cao = nhau`, event.threadID, event.messageID);
