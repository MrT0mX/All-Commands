module.exports.config = {
	name: "count", // Tên lệnh, được sử dụng trong việc gọi lệnh
	version: "1.0.0", // phiên bản của module này
	hasPermssion: 0, // Quyền hạn sử dụng, với 0 là toàn bộ thành viên, 1 là quản trị viên trở lên, 2 là admin/owner
	credits: "MrTomXxX", // Công nhận module sở hữu là ai
	description:"Count everything in the chat box", // Thông tin chi tiết về lệnh
	commandCategory: "group", // Thuộc vào nhóm nào
	usages: "count message/admin/member/male/female/gei/allgroup/alluser", // Cách sử dụng lệnh
	cooldowns: 5,  //Liệt kê các package module ở ngoài tại đây để khi load lệnh nó sẽ tự động cài!
	// Info là phần chi tiết thêm của cách sử dụng lệnh
	// Key: Từ khoá thuộc trong usages
	// prompt: Chi tiết dữ liệu đầu vào của key
	// type: Định dạng dữ liệu đầu vào của key

	envConfig: {
		//Đây là nơi bạn sẽ setup toàn bộ env của module, chẳng hạn APIKEY, ...
	}
};

module.exports.run = async function({ api,Threads,Users, event, args, client, __GLOBAL }) {
	//Làm cái gì ở đây tuỳ thuộc vào bạn ¯\_(ツ)_/¯ 
	var input =args.join();
	    var nameMen = [];
    var gendernam = [];
    var gendernu = [];
    var nope = [];
    		let threadInfo = await api.getThreadInfo(event.threadID);
        for (let z in threadInfo.userInfo) {
     	var gioitinhone = threadInfo.userInfo[z].gender;
        if(gioitinhone == "MALE"){gendernam.push(gioitinhone)
        }else{
        		if (gioitinhone=="FEMALE"){gendernu.push(gioitinhone)
        			}else{nope.push(gioitinhone)}}}

		var out = (msg) => api.sendMessage(msg, event.threadID, event.messageID);
	var boxget = await Threads.getAll(['threadID'])
var userget = await Users.getAll(['userID'])
		if (input==""){out(`You have not entered a tag, use the following tags: message/admin/member/male/female/gei/allgroup/alluser`)}
		if (input=="message") {out(`This group has ${threadInfo.messageCount} message`)}
		if (input=="admin"){out(`The group you have ${threadInfo.adminIDs.length} administrator`)}
		if (input=="member"){out(`This group has ${threadInfo.participantIDs.length} member`)}
		if (input=="male"){out(`This group has ${gendernam.length} member is male`)}
		if (input=="female"){out(`This group has ${gendernu.length} member is female`)}
		if (input=="gei"){out(`This group has ${nope.length} member is Gei`)}
		if (input=="allgroup"){out(`Total yes ${boxget.length} group chat using bots`)}
		if (input=="alluser"){out(`Total yes ${userget.length} users using bots`)}
  }.exp - a.exp });
            const rank = exp.findIndex(info => parseInt(info.uid) == parseInt(mention[0])) + 1;
            const infoUser = exp[rank - 1];
            //const rank = exp.findIndex(info => parseInt(info.listUserID) == parseInt(event.senderID)) + 1;
            return api.sendMessage(`${(await Users.getData(mention[0])).name} currently ranked ${rank} with ${infoUser.exp} messages`, event.threadID, event.messageID);
}
else {
            var { participantIDs } =(await Threads.getData(event.threadID)).threadInfo;
            //const countMess = (await Currencies.getData(event.senderID)).exp
            const listUserID = event.participantIDs
            var id = listUserID //[Math.floor(Math.random() * listUserID.length)];
            exp = [];
            var name = await Users.getData(id)
            for(const idUser of listUserID) {
            const countMess = await Currencies.getData(idUser);
            exp.push({"name" : idUser.name, "exp": (typeof countMess.exp == "undefined") ? 0 : countMess.exp, "uid": idUser});
        }
            exp.sort(function (a, b) { return b.exp - a.exp });
            const rank = exp.findIndex(info => parseInt(info.uid) == parseInt(event.senderID)) + 1;
            const infoUser = exp[rank - 1];
          
            return api.sendMessage(`You are ranked ${rank} with ${infoUser.exp} messages`, event.threadID, event.messageID);
}
}
