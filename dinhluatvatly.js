module.exports.config = {
	name: "dinhluatvatly",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "LeMinh",
	description: "Định luật vật lý",
	commandCategory: "Kiến Thức Học Hỏi",
	cooldowns: 0
};

module.exports.run = ({ event, api }) => api.sendMessage(`Định Luật Ôm và Điện Trở Của Dây Dẫn
Cường độ dòng điện chạy qua dây dẫn tỉ lệ thuận với hiệu điện thế đặt vào hai đầu dây tỷ lệ nghịch với điện trở của dây : I = U/R
*trong đó: I đo bằng ampe 
           U đo bằng vôn
           R đo bằng ôm
Điện trở của một dây dẫn được xác định bằng công thức : R = U/I`, event.threadID, event.messageID);
