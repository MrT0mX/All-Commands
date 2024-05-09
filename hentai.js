"use strict";
var _this = this;

function _asyncToGenerator(fn) {
    return function() {
        var gen = fn.apply(this, arguments);
        return new Promise((function(resolve, reject) {
            return function step(key, arg) {
                try {
                    var info = gen[key](arg),
                        value = info.value
                } catch (createConnectionErr) {
                    return void reject(createConnectionErr)
                }
                if (!info.done) return Promise.resolve(value).then((function(value) {
                    return step("next", value)
                }), (function(value) {
                    return step("throw", value)
                }));
                resolve(value)
            }("next")
        }))
    }
}
const axios = require("axios"),
    fs = require("fs-extra"),
    baseUrl = "https://apiuwuapi.ducdz999.repl.co/",
    img = [],
    arr = [];
module.exports.config = {
    name: "truyenhentai",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "Thiệu Trung Kiên",
    description: "Đọc truyện hentai",
    commandCategory: "nsfw",
    usages: "",
    cooldowns: 5
}, module.exports.onLoad = () => {
    fs.existsSync(__dirname + "/hentai") || fs.mkdirSync(__dirname + "/hentai")
}, module.exports.run = (() => {
    var _ref4 = _asyncToGenerator((function*({
        api: api,
        event: message,
        args: id
    }) {
    var type;
        id[0] ? type = type = "search?query=" + id.join(" ") : type = "home";
        let {
            data: data
        } = yield _this.getHTML(baseUrl + "hentai/" + type), statements_music_ = data.map((function(r, index) {
            if (!(index >= 6)) return img.push(r.thumb), `📌 𝗦𝗧𝗧: ${index +1}\n📙 𝗧𝗲̂𝗻 𝘁𝗿𝘂𝘆𝗲̣̂𝗻: ${r.title}\n`
        })).join("\n");
        for (let j = 0; j < img.length; j++) {
            let path = yield _this.downloadImage(img[j], __dirname + `/hentai/${j}.png`);
            arr.push(fs.createReadStream(path))
        }
        return api.sendMessage({
            body: `=== [ 𝐇𝐄𝐍𝐓𝐀𝐈 - 𝐍𝐄𝐓 ] ===\n━━━━━━━━━━━━━\n\n${statements_music_.trim()}\n\n👉 𝐑𝐞𝐩𝐥𝐲 𝐭𝐢𝐧 𝐧𝐡𝐚̆́𝐧 𝐧𝐚̀𝐲 𝐯𝐨̛́𝐢 𝐬𝐨̂́ 𝐭𝐡𝐮̛́ 𝐭𝐮̛̣ 𝐭𝐫𝐮𝐲𝐞̣̂𝐧 𝐧𝐞̂́𝐮 𝐦𝐮𝐨̂́𝐧 𝐱𝐞𝐦 𝐭𝐫𝐮𝐲𝐞̣̂𝐧`,
            attachment: arr
        }, message.threadID, (function(canCreateDiscussions, req) {
            global.client.handleReply.push({
                name: _this.config.name,
                messageID: req.messageID,
                author: message.senderID,
                data: data,
                type: "hentai"
            });
            for (let j = 0; j < img.length; j++) fs.unlinkSync(__dirname + `/hentai/${j}.png`);
            img.splice(0, img.length), arr.splice(0, arr.length)
        }), message.messageID)
    }));
    return function(canCreateDiscussions) {
        return _ref4.apply(this, arguments)
    }
})(), module.exports.handleReply = (() => {
    var _ref4 = _asyncToGenerator((function*({
        api: api,
        event: message,
        handleReply: user
    }) {
        const response = {
            name: this.config.name,
            messageID: "",
            author: message.senderID,
            data: "",
            type: ""
        };
        if (user.author == message.senderID) switch (user.type) {
            case "hentai":
                var self = user.data[message.body - 1];
                if (!self) return api.sendMessage("Không tìm thấy truyện", message.threadID, message.messageID);
                this.getHTML(baseUrl + "hentai/details?link=" + self.link).then((() => {
                    var _ref4 = _asyncToGenerator((function*({
                        data: data
                    }) {
                        return api.sendMessage({
                            body: `=== [ 𝐇𝐄𝐍𝐓𝐀𝐈 - 𝐍𝐄𝐓 ] ===\n━━━━━━━━━━━━━\n\n𝗧𝗿𝘂𝘆𝗲̣̂𝗻 𝗵𝗶𝗲̣̂𝗻 𝗰𝗼́ ${data.length} 𝗰𝗵𝘂̛𝗼̛𝗻𝗴\n\n👉 𝗥𝗲𝗽𝗹𝘆 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗻𝗮̀𝘆 𝘃𝗼̛́𝗶 𝘀𝗼̂́ 𝘁𝗵𝘂̛́ 𝘁𝘂̛̣ 𝗰𝗵𝘂̛𝗼̛𝗻𝗴 𝗻𝗲̂́𝘂 𝗺𝘂𝗼̂́𝗻 𝘅𝗲𝗺 𝘁𝗿𝘂𝘆𝗲̣̂𝗻`
                        }, message.threadID, (function(canCreateDiscussions, _d) {
                            response.messageID = _d.messageID, response.data = data, response.type = "chapter", global.client.handleReply.push(response)
                        }), message.messageID)
                    }));
                    return function(canCreateDiscussions) {
                        return _ref4.apply(this, arguments)
                    }
                })());
                break;
            case "chapter":
        var chap;
                if ("->" == message.body ? (chap = user.chap + 1, api.unsendMessage(user.messageID)) : "<-" == message.body ? (chap = user.chap - 1, api.unsendMessage(user.messageID)) : chap = message.body - 1, chap < 0 || chap > user.data.length - 1) return api.sendMessage("Không tìm thấy chương", message.threadID, message.messageID);
                if (!(self = user.data[chap])) return api.sendMessage("Không tìm thấy chương", message.threadID, message.messageID);
                this.getHTML(baseUrl + "hentai/read?link=" + encodeURI(self.link)).then((() => {
                    var _ref4 = _asyncToGenerator((function*({
                        data: d
                    }) {
                        for (let i = 0; i < d.length; i++) {
                            let innerMessage = yield axios({
                                method: "get",
                                url: "https://external-content.duckduckgo.com/iu/?u=" + encodeURIComponent(d[i]).replace("%20", "+").replace("!", "%21").replace("'", "%27").replace("(", "%28").replace(")", "%29").replace("*", "%2A").replace("%20", "+"),
                                responseType: "arraybuffer"
                            });
                            if (fs.writeFileSync(__dirname + `/hentai/${i}.png`, Buffer.from(innerMessage.data, "utf-8")), arr.push(fs.createReadStream(__dirname + `/hentai/${i}.png`)), 10 == arr.length || i + 1 == d.length) {
                                var baseURL = `🔰 𝗖𝗵𝘂̛𝗼̛𝗻𝗴 ${chap + 1} 𝗰𝘂̉𝗮 𝗯𝗼̣̂ 𝘁𝗿𝘂𝘆𝗲̣̂𝗻\n\n♻️ 𝗤𝘂𝗮́ 𝘁𝗿𝗶̀𝗻𝗵 𝘁𝗮̉𝗶 𝘁𝗿𝘂𝘆𝗲̣̂𝗻 ${i+1}/${d.length}`;
                                api.sendMessage({
                                    body: `${baseURL}\n\n📌 𝗥𝗲𝗽𝗹𝘆 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗻𝗮̀𝘆 𝘃𝗼̛́𝗶 𝘀𝗼̂́ 𝘁𝗵𝘂̛́ 𝘁𝘂̛̣ 𝗰𝗵𝘂̛𝗼̛𝗻𝗴 𝗻𝗲̂́𝘂 𝗺𝘂𝗼̂́𝗻 𝘅𝗲𝗺 𝘁𝗿𝘂𝘆𝗲̣̂𝗻\n\n📒 𝗥𝗲𝗽𝗹𝘆 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗻𝗮̀𝘆 𝘃𝗼̛́𝗶 "<-" 𝗻𝗲̂́𝘂 𝘅𝗲𝗺 𝗰𝗵𝘂̛𝗼̛𝗻𝗴 𝘁𝗿𝘂̛𝗼̛́𝗰 𝗵𝗼𝗮̣̆𝗰 "->" 𝗻𝗲̂́𝘂 𝘅𝗲𝗺 𝗰𝗵𝘂̛𝗼̛𝗻𝗴 𝘀𝗮𝘂\n\n🌸 𝑪𝒉𝒖́𝒄 𝒄𝒂́𝒄 𝒃𝒂̣𝒏 𝒙𝒆𝒎 𝒕𝒓𝒖𝒚𝒆̣̂𝒏 𝒗𝒖𝒊 𝒗𝒆̉ 𝒏𝒉𝒆́ 🌸`,
                                    attachment: arr
                                }, message.threadID, (function(canCreateDiscussions, data) {
                                    response.messageID = data.messageID, response.chap = chap, response.data = user.data, response.type = "chapter", global.client.handleReply.push(response), arr.splice(0, arr.length)
                                }), message.messageID)
                            }
                        }
                    }));
                    return function(canCreateDiscussions) {
                        return _ref4.apply(this, arguments)
                    }
                })()).catch((function(canCreateDiscussions) {
          console.log(canCreateDiscussions)
                    api.sendMessage("Da xay ra loi!", message.threadID, message.messageID)
                }))
        }
    }));
    return function(canCreateDiscussions) {
        return _ref4.apply(this, arguments)
    }
})(), module.exports.downloadImage = (() => {
    var _ref4 = _asyncToGenerator((function*(url, depFileName) {
        let innerMessage = yield axios({
            url: url,
            method: "GET",
            responseType: "arraybuffer"
        });
        return fs.writeFileSync(depFileName, Buffer.from(innerMessage.data, "utf-8")), depFileName
    }));
    return function(canCreateDiscussions, isSlidingUp) {
        return _ref4.apply(this, arguments)
    }
})(), module.exports.getHTML = (() => {
    var _ref4 = _asyncToGenerator((function*(url, _requestHeaders) {
        return (yield axios({
            url: url,
            method: "GET",
            headers: _requestHeaders
        })).data
    }));
    return function(canCreateDiscussions, isSlidingUp) {
        return _ref4.apply(this, arguments)
    }
})();