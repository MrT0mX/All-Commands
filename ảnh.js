module.exports.config = {
	name: "ảnh",
	version: "1.0.3",
	hasPermssion: 0,
	credits: "Thiệu Trung Kiên",
	description: "Xem ảnh reply",
	commandCategory: "Tiện ích",
	cooldowns: 5,
	dependencies: {
		axios: ""
	}
}, module.exports.run = async function({
	event: e,
	api: a,
	args: n
}) {
	if (!n[0]) return a.sendMessage("🌸====「 𝗞𝗛𝗢 𝗔̉𝗡𝗛 」====🌸\n━━━━━━━━━━━━━━\n\n𝟙. 𝗔̉𝗻𝗵 𝗚𝗮́𝗶 💞 \n𝟚. 𝗔̉𝗻𝗵 𝗧𝗿𝗮𝗶 💕\n𝟛. 𝗔̉𝗻𝗵 𝗠𝗼̂𝗻𝗴 🍑\n𝟜. 𝗔̉𝗻𝗵 𝟲 𝗠𝘂́𝗶 😽\n𝟝. 𝗔̉𝗻𝗵 𝗡𝘂𝗱𝗲 🌚\n𝟞. 𝗔̉𝗻𝗵 𝗖𝗼𝘀𝗽𝗹𝗮𝘆 😻\n𝟟. 𝗔̉𝗻𝗵 𝗔𝗻𝗶𝗺𝗲 🦄\n𝟠. 𝗔̉𝗻𝗵 𝗦𝗲𝘅𝘆 🔥\n𝟡. 𝗔̉𝗻𝗵 𝗞𝗮𝗻𝗮 🌸\n𝟙𝟘. 𝗔̉𝗻𝗵 𝗗𝘂́ 🎀\n𝟙𝟙. 𝗔̉𝗻𝗵 𝗛𝗲𝗻𝘁𝗮𝗶 💸\n𝟙𝟚. 𝗔̉𝗻𝗵 𝗝𝗶𝗺𝗺𝘆 💊\n𝟙𝟛. 𝗔̉𝗻𝗵 𝗧𝘄𝗶𝘁𝘁𝗲𝗿 💎\n𝟙𝟜. 𝗔̉𝗻𝗵 𝗜𝗻𝘀𝘁𝗮𝗴𝗿𝗮𝗺 💦\n𝟙𝟝. 𝗔̉𝗻𝗵 𝗪𝗶𝗯𝘂 🍩\n𝟙𝟞. 𝗔̉𝗻𝗵 𝗟𝗼𝗹𝗶 📌\n𝟙𝟟. 𝗔̉𝗻𝗵 𝗡𝗮𝘂𝗴𝗵𝘁𝘆 🏮\n𝟙𝟠. 𝗔̉𝗻𝗵 𝗚𝗲𝗻𝘁𝗹𝗲 𝗦𝗲𝘅𝘆 👙\n𝟙𝟡. 𝗔̉𝗻𝗵 𝗔𝘂𝘀𝗮𝗻𝗱 ☘\n𝟚𝟘. 𝗔̉𝗻𝗵 𝗞𝗮𝘄𝗮𝗶𝗶 🎃\n\n𝐑𝐞𝐩𝐥𝐲 𝐭𝐢𝐧 𝐧𝐡𝐚̆́𝐧 𝐧𝐚̀𝐲 𝐯𝐚̀ 𝐜𝐡𝐨̣𝐧 𝐭𝐡𝐞𝐨 𝐒𝐓𝐓 𝐚̉𝐧𝐡 𝐜𝐚̂̀𝐧 𝐱𝐞𝐦 𝐧𝐡𝐞́ ⛩", e.threadID, ((a, n) => {
		global.client.handleReply.push({
			name: this.config.name,
			messageID: n.messageID,
			author: e.senderID,
			type: "create"
		})
	}), e.messageID)
}, module.exports.handleReply = async ({
	api: e,
	event: a,
	client: n,
	handleReply: t,
	Currencies: s,
	Users: i,
	Threads: o
}) => {
	var { p, h } = linkanh();

	if ("create" === t.type) {
		const n = (await p.get(h)).data.url;
		let t = (await p.get(n, {
			responseType: "stream"
		})).data;
		return e.sendMessage({
			body: "[ 𝐓𝐡𝐚̀𝐧𝐡 𝐂𝐨̂𝐧𝐠 ] - 𝗔̉𝗻𝗵 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻 𝘆𝗲̂𝘂 𝗰𝗮̂̀𝘂 𝗻𝗲̀ ⚜️",
			attachment: t
		}, a.threadID, a.messageID)
	}

    function linkanh() {
        const p = require("axios");
        if ("1" == a.body)
            var h = "https://apiuwuapi.ducdz999.repl.co/images/girl";
        else if ("2" == a.body)
         var   h = "https://apiuwuapi.ducdz999.repl.co/images/trai";
        else if ("3" == a.body)
         var   h = "https://apiuwuapi.ducdz999.repl.co/images/mong";
        else if ("4" == a.body)
          var  h = "https://apiuwuapi.ducdz999.repl.co/images/saumui";
        else if ("5" == a.body)
          var  h = "https://apiuwuapi.ducdz999.repl.co/images/nude";
        else if ("6" == a.body)
          var  h = "https://apiuwuapi.ducdz999.repl.co/images/cosplay";
        else if ("7" == a.body)
          var  h = "https://apiuwuapi.ducdz999.repl.co/images/anime";
        else if ("8" == a.body)
          var  h = "https://apiuwuapi.ducdz999.repl.co/images/girlsexy";
        else if ("9" == a.body)
         var   h = "https://apikanna.khoahoang3.repl.co/";
        else if ("10" == a.body)
         var  h = "https://apiuwuapi.ducdz999.repl.co/images/du";
        else if ("11" == a.body)
          var  h = "https://apiuwuapi.ducdz999.repl.co/images/hentai";
        else if ("12" == a.body)
          var  h = "https://jimmy.ocvat2810.repl.co";
        else if ("13" == a.body)
          var  h = "https://apiuwuapi.ducdz999.repl.co/images/tw";
        else if ("14" == a.body)
         var   h = "https://apiuwuapi.ducdz999.repl.co/images/ig";
        else if ("15" == a.body)
         var   h = "https://apiuwuapi.ducdz999.repl.co/images/kana";
        else if ("16" == a.body)
          var  h = "https://apiuwuapi.ducdz999.repl.co/images/loli";
        else if ("17" == a.body)
          var  h = "https://apiuwuapi.ducdz999.repl.co/images/naughty";
        else if ("18" == a.body)
          var  h = "https://apiuwuapi.ducdz999.repl.co/images/gentle";
        else if ("19" == a.body)
          var  h = "https://apiuwuapi.ducdz999.repl.co/images/ausand";
        else if ("20" == a.body)
          var  h = "https://apiuwuapi.ducdz999.repl.co/images/kawaii";
        return { p, h };
    }
};