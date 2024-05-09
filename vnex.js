module.exports.config = {
	name: "vnex",
	version: "1.0.2",
	hasPermssion: 0,
	credits: "HungCho",
	description: "Báo tin tức vnex !",
	commandCategory: "Tiện ích",
	usages: "",
	cooldowns: 0,
dependencies: {"axios": "","cheerio": ""}
};

module.exports.run = async function({ api, event, args, __GLOBAL,Currencies }) {
    const request = require('request')
    var cheerio = require("cheerio")
    var chovui = request.get('https://vnexpress.net/tin-tuc-24h', (error, response, html) => {
      if (!error && response.statusCode == 200) {
        var $ = cheerio.load(html);
        var thoigian = $('.time-count');
        var tieude = $('.thumb-art');
        var noidung = $('.description');
        var time = thoigian.find('span').attr('datetime');
        var title = tieude.find('a').attr('title');
        var des = noidung.find('a').text();
        var link = noidung.find('a').attr('href');
        var description = des.split('.');
       
        api.sendMessage(`===  [ 𝗧𝗜𝗡 𝗧𝗨̛́𝗖 𝗩𝗡𝗘𝗫 ] ===\n━━━━━━━━━━━━━\n\n📺 𝗧𝗶𝗻 𝘁𝘂̛́𝗰 𝗺𝗼̛́𝗶 𝗻𝗵𝗮̂́𝘁\r\n⏰ 𝗧𝗵𝗼̛̀𝗶 𝗴𝗶𝗮𝗻 𝗽𝗼𝘀𝘁: ${time}\r\n📰 𝗧𝗶𝘁𝗹𝗲: ${title}\r\n\n📌 𝗡𝗼̣̂𝗶 𝗱𝘂𝗻𝗴: ${description[0]}\r\n🔗 𝗟𝗶𝗻𝗸: ${link}\r\n\n`,event.threadID,event.messageID)
        }
}
)}