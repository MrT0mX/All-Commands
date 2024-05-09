module.exports.config = {
	name: "20",
	version: "1.0.3",
	hasPermssion: 0,
	credits: "MrTomXxX",
	description: "Xem ảnh réply",
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
	if (!n[0]) return a.sendMessage(" 💌 𝐃𝐚𝐧𝐡 𝐒𝐚́𝐜𝐡 𝐀̉𝐧𝐡 💌 \n\n𝟙. 𝐀̉𝐧𝐡 𝐆𝐚́𝐢 💞 \n𝟚. 𝐀̉𝐧𝐡 𝐓𝐫𝐚𝐢 💕\n𝟛. 𝐀̉𝐧𝐡 𝐌𝐨̂𝐧𝐠 🍑\n𝟜. 𝐀̉𝐧𝐡 𝟔 𝐌𝐮́𝐢 😽\n𝟝. 𝐀̉𝐧𝐡 𝐍𝐮𝐝𝐞 🌚\n𝟞. 𝐀̉𝐧𝐡 𝐂𝐨𝐬𝐩𝐥𝐚𝐲 😻\n𝟟. 𝐀̉𝐧𝐡 𝐀𝐧𝐢𝐦𝐞 🦄\n𝟠. 𝐀̉𝐧𝐡 𝐒𝐞𝐱𝐲 🔥\n𝟡. 𝐀̉𝐧𝐡 𝐊𝐚𝐧𝐚 🌸\n𝟙𝟘. 𝐀̉𝐧𝐡 𝐃𝐮́ 🎀\n𝟙𝟙. 𝐀̉𝐧𝐡 𝐇𝐞𝐧𝐭𝐚𝐢 💸\n𝟙𝟚. 𝐀̉𝐧𝐡 𝐉𝐢𝐦𝐦𝐲 💊\n𝟙𝟛. 𝐀̉𝐧𝐡 𝐓𝐰𝐢𝐭𝐭𝐞𝐫 💎\n𝟙𝟜. 𝐀̉𝐧𝐡 𝐈𝐧𝐬𝐭𝐚𝐠𝐫𝐚𝐦 💦\n𝟙𝟝. 𝐀̉𝐧𝐡 𝐖𝐢𝐛𝐮 🌸\n𝟙𝟞. 𝐀̉𝐧𝐡 𝐋𝐨𝐥𝐢 📌\n𝟙𝟟. 𝐀̉𝐧𝐡 𝐍𝐚𝐮𝐠𝐡𝐭𝐲 🏮\n\n𝐑𝐞𝐩𝐥𝐲 𝐭𝐢𝐧 𝐧𝐡𝐚̆́𝐧 𝐧𝐚̀𝐲 𝐯𝐚̀ 𝐜𝐡𝐨̣𝐧 𝐭𝐡𝐞𝐨 𝐒𝐓𝐓 𝐚̉𝐧𝐡 𝐜𝐚̂̀𝐧 𝐱𝐞𝐦 𝐧𝐡𝐞́ ⛩", e.threadID, ((a, n) => {
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
            var h = "https://tuandz.herokuapp.com/images/girl";
        else if ("2" == a.body)
         var   h = "https://tuandz.herokuapp.com/images/trai";
        else if ("3" == a.body)
         var   h = "https://tuandz.herokuapp.com/images/mong";
        else if ("4" == a.body)
          var  h = "https://tuandz.herokuapp.com/images/saumui";
        else if ("5" == a.body)
          var  h = "https://tuandz.herokuapp.com/images/nude";
        else if ("6" == a.body)
          var  h = "https://tuandz.herokuapp.com/images/cosplay";
        else if ("7" == a.body)
          var  h = "https://tuandz.herokuapp.com/images/anime";
        else if ("8" == a.body)
          var  h = "https://tuandz.herokuapp.com/images/girlsexy";
        else if ("9" == a.body)
         var   h = "https://apikanna.khoahoang3.repl.co/";
        else if ("10" == a.body)
         var  h = "https://tuandz.herokuapp.com/images/du";
        else if ("11" == a.body)
          var  h = "https://tuandz.herokuapp.com/images/hentai";
        else if ("12" == a.body)
          var  h = "https://jimmy.ocvat2810.repl.co";
        else if ("13" == a.body)
          var  h = "https://tuandz.herokuapp.com/images/tw";
        else if ("14" == a.body)
         var   h = "https://tuandz.herokuapp.com/images/ig";
        else if ("15" == a.body)
         var   h = "https://wibu.ocvat2810.repl.co";
        else if ("16" == a.body)
          var  h = "https://tuandz.herokuapp.com/images/loli";
        else if ("17" == a.body)
          var  h = "https://tuandz.herokuapp.com/images/naughty";
        return { p, h };
    }
};