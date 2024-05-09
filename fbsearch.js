module.exports.config = {
	name: "fbsearch",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "chinhle",
	description: "Tìm kiếm người dùng facecbook", //nhập thứ bạn muốn
	commandCategory: "tiện ích", //Phần hiển thị trên help
	usages: "[ tên facebook ]", //cách sử dụng
	cooldowns: 1, //thời gian chờ cách nhau
	
	};
			
module.exports.run = async ({ event, api ,global ,Config , logger, Threads, Users, args, body, is}) => {
  const axios = require("axios");
	 const fs = require("fs");
  const login = require("fca-disme");
  let type = args.join(" ");
  if (!type) return api.sendMessage("Vui lòng nhập từ khoá", event.threadID, event.messageID);
  const res = await axios.get("https://apiuwuapi.ducdz999.repl.co/images/girl");
//lấy data trên web api
const data = res.data.url;
//tải ảnh xuống
let download = (await axios.get(data, {
			responseType: "stream"
		})).data;
  login({
    appState: JSON.parse(fs.readFileSync('appstate.json', 'utf8'))
  }, (err, api) => {
    if (err) return console.error(err);
    api.getUserID(`${type}`, (err, data) => {
      if (err) return console.error(err);
      var a = data[0].name;
      var a1 = data[0].userID;
      var b = data[1].name;
      var b1 = data[1].userID;
      var c = data[2].name;
      var c2 = data[2].userID;
      var d = data[3].name;
      var d1 = data[3].userID;
      var e = data[4].name;
      var e1 = data[4].userID;
      var f = data[5].name;
      var f1 = data[5].userID;
      var g = data[6].name;
      var g1 = data[6].userID;
      var h = data[7].name;
      var h1 = data[7].userID;
      var i = data[8].name;
      var i1 = data[8].userID;
      var k = data[9].name;
      var k1 = data[9].userID;
      var p0 = data[0].profileUrl;
      var p1 = data[1].profileUrl;
      var p2 = data[2].profileUrl;
      var p3 = data[3].profileUrl;
      var p4 = data[4].profileUrl;
      var p5 = data[5].profileUrl;
      var p6 = data[6].profileUrl;
      var p7 = data[7].profileUrl;
      var p8 = data[8].profileUrl;
      var p9 = data[9].profileUrl;
      api.sendMessage({body: `Đã tìm thấy 10 người dùng trùng với từ khoá!\n
1/ ${a}\nUID: ${a1}\nProfile Url : ${p0}\n
2/ ${b}\nUID: ${b1}\nProfile Url : ${p1}\n
3/ ${c}\nUID: ${c2}\nProfile Url : ${p2}\n
4/ ${d}\nUID: ${d1}\nProfile Url : ${p3}\n
5/ ${e}\nUID: ${e1}\nProfile Url : ${p4}\n
6/ ${f}\nUID: ${f1}\nProfile Url : ${p5}\n
7/ ${g}\nUID: ${g1}\nProfile Url : ${p6}\n
8/ ${h}\nUID: ${h1}\nProfile Url : ${p7}\n
9/ ${i}\nUID: ${i1}\nProfile Url : ${p8}\n
10/ ${k}\nUID: ${k1}\nProfile Url : ${p9}`, attachment: download}, event.threadID, event.messageID);
    });
  });
                             }