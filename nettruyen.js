function _asyncToGenerator(fn) {
    return function () {
        var gen = fn.apply(this, arguments);
        return new Promise(function (resolve, reject) {
            function step(key, arg) {
                try {
                    var info = gen[key](arg);
                    var value = info.value;
                } catch (error) {
                    reject(error);
                    return;
                }
                if (info.done) {
                    resolve(value);
                } else {
                    return Promise.resolve(value).then(function (value) {
                        return step("next", value);
                    }, function (err) {
                        return step("throw", err);
                    });
                }
            }
            return step("next");
        });
    };
}

var axios = require("axios"),
    fs = require("fs-extra"),
    baseURL = 'https://thieutrungkien.dev/';
module.exports.config = {
    name: "nettruyen",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Thiệu Trung Kiên",
    description: "Xem truyện online",
    commandCategory: "Tiện Ích",
    usages: "truyenqq [tên truyện]",
    cooldowns: 5
};
module.exports.onLoad = _asyncToGenerator(function* () {
    fs.existsSync(__dirname + "/truyenqq") || fs.mkdirSync(__dirname + "/truyenqq", {
        recursive: !0
    });
});
module.exports.run = (() => {
    var ref = _asyncToGenerator(function* ({
        api,
        event,
        args
    }) {
        var _this = this;

        var data = [],
            images = [],
            path = [];
        if (!args[0]) {
            axios({
                method: 'GET',
                url: baseURL + 'truyenqq/home',
                headers: {
                    'Content-Type': 'application/json',
                    'User-Agent': 'Mozilla/5.0 (Linux; Android 10; SM-G975F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.106 Mobile Safari/537.36'
                }
            }).then((() => {
                var ref = _asyncToGenerator(function* (res) {
                    res.data.forEach((() => {
                        var ref = _asyncToGenerator(function* (item, element) {
                            if (element >= 6) return;
                            data.push({
                                title: item.name,
                                url: item.url,
                                time_ago: item.time_ago,
                                images: item.images
                            });
                        });

                        return function (_x3, _x4) {
                            return ref.apply(this, arguments);
                        };
                    })());
                    for (let i = 0; i < data.length; i++) {
                        const res = (yield axios.get(data[i].images, {
                            responseType: 'arraybuffer'
                        })).data;
                        fs.writeFileSync(__dirname + `/truyenqq/${i}_${event.senderID}.png`, Buffer.from(res, 'utf-8'));
                        images.push(fs.createReadStream(__dirname + `/truyenqq/${i}_${event.senderID}.png`));
                        path.push(__dirname + `/truyenqq/${i}_${event.senderID}.png`);
                    }
                    let msg = data.map(function (item, element) {
                        return `🔗 STT: ${element + 1}\n📖 Name: ${item.title}\n📅 Time: ${item.time_ago}`;
                    }).join('\n\n');
                    return api.sendMessage({
                        body: `Danh sách các truyện mới cập nhật\n${msg}\n\nReply tin nhắn này theo số thứ tự để đọc truyện!`,
                        attachment: images
                    }, event.threadID, function (err, info) {
                        for (u in path) fs.unlinkSync(path[u]);
                        global.client.handleReply.push({
                            name: _this.config.name,
                            messageID: info.messageID,
                            author: event.senderID,
                            type: "reply",
                            data: data
                        });
                    });
                });

                return function (_x2) {
                    return ref.apply(this, arguments);
                };
            })());
        } else {
            axios({
                method: 'GET',
                url: baseURL + 'truyenqq/search',
                params: {
                    query: args.join(' ')
                },
                headers: {
                    'Content-Type': 'application/json',
                    'User-Agent': 'Mozilla/5.0 (Linux; Android 10; SM-G975F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.106 Mobile Safari/537.36'
                }
            }).then((() => {
                var ref = _asyncToGenerator(function* (res) {
                    res.data.data.forEach((() => {
                        var ref = _asyncToGenerator(function* (item, element) {
                            if (element >= 6) return;
                            data.push({
                                title: item.name,
                                url: item.url,
                                time_ago: item.time_ago,
                                images: item.images
                            });
                        });

                        return function (_x6, _x7) {
                            return ref.apply(this, arguments);
                        };
                    })());
                    for (let i = 0; i < data.length; i++) {
                        const res = (yield axios.get(data[i].images, {
                            responseType: 'arraybuffer'
                        })).data;
                        fs.writeFileSync(__dirname + `/truyenqq/${i}_${event.senderID}.png`, Buffer.from(res, 'utf-8'));
                        images.push(fs.createReadStream(__dirname + `/truyenqq/${i}_${event.senderID}.png`));
                        path.push(__dirname + `/truyenqq/${i}_${event.senderID}.png`);
                    }
                    let msg = data.map(function (item, element) {
                        return `🔗 𝗦𝗧𝗧: ${element + 1}\n📖 𝗧𝗲̂𝗻 𝘁𝗿𝘂𝘆𝗲̣̂𝗻: ${item.title}\n📅 𝗧𝗵𝗼̛̀𝗶 𝗴𝗶𝗮𝗻: ${item.time_ago}\n`;
                    }).join('\n\n');
                    return api.sendMessage({
                        body: `== [ 𝐓𝐑𝐔𝐘𝐄𝐍𝐐𝐐𝐐.𝐂𝐎𝐌 ] ==\n━━━━━━━━━━━━━━\n\n${msg}\n👉 𝐑𝐞𝐩𝐥𝐲 𝐭𝐢𝐧 𝐧𝐡𝐚̆́𝐧 𝐧𝐚̀𝐲 𝐭𝐡𝐞𝐨 𝐬𝐨̂́ 𝐭𝐡𝐮̛́ 𝐭𝐮̛̣ 𝐯𝐚̀ 𝐱𝐞𝐦 𝐭𝐫𝐮𝐲𝐞̣̂𝐧`,
                        attachment: images
                    }, event.threadID, function (err, info) {
                        for (u in path) fs.unlinkSync(path[u]);
                        global.client.handleReply.push({
                            name: _this.config.name,
                            messageID: info.messageID,
                            author: event.senderID,
                            type: "reply",
                            data: data
                        });
                    });
                });

                return function (_x5) {
                    return ref.apply(this, arguments);
                };
            })());
        }
    });

    return function (_x) {
        return ref.apply(this, arguments);
    };
})();
module.exports.handleReply = (() => {
    var ref = _asyncToGenerator(function* ({
        api,
        event,
        handleReply
    }) {
        var _this2 = this;

        if (handleReply.author != event.senderID) return api.sendMessage('Cút', event.threadID, event.messageID);
        switch (handleReply.type) {
            case "reply": {
                axios({
                    method: 'GET',
                    url: baseURL + 'truyenqq/details',
                    params: {
                        url: handleReply.data[event.body - 1].url
                    },
                    headers: {
                        'Content-Type': 'application/json',
                        'User-Agent': 'Mozilla/5.0 (Linux; Android 10; SM-G975F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.106 Mobile Safari/537.36'
                    }
                }).then((() => {
                    var ref = _asyncToGenerator(function* (res) {
                        var chapter = [];
                        var name = res.data.name,
                            author = res.data.author,
                            status = res.data.status,
                            description = res.data.descriptions,
                            chapters = res.data.chapters,
                            images = res.data.images;
                        var genres = res.data.genres.map(function (item) {
                            return item;
                        }).join(', ');
                        var chapters = res.data.chapters.map(function (item) {
                            chapter.push(item);
                        });
                        var getImg = (yield axios.get(images, {
                            responseType: 'arraybuffer'
                        })).data;
                        fs.writeFileSync(__dirname + `/truyenqq/details_${event.senderID}.png`, Buffer.from(getImg, 'utf-8'));
                        var msg = `== [ 𝐓𝐑𝐔𝐘𝐄𝐍𝐐𝐐𝐐.𝐂𝐎𝐌 ] ==\n━━━━━━━━━━━━━━\n\n📖 𝗧𝗲̂𝗻 𝘁𝗿𝘂𝘆𝗲̣̂𝗻: ${name}\n👨‍💻 𝗧𝗮́𝗰 𝗴𝗶𝗮̉: ${author}\n📅 𝗖𝗮̣̂𝗽 𝗻𝗵𝗮̣̂𝘁: ${status}\n📚 𝗧𝗵𝗲̂̉ 𝗹𝗼𝗮̣𝗶: ${genres}\n📝 𝗚𝗶𝗼̛́𝗶 𝘁𝗵𝗶𝗲̣̂𝘂: ${description}\n\n𝗧𝗿𝘂𝘆𝗲̣̂𝗻 𝗵𝗶𝗲̣̂𝗻 𝗰𝗼́ ${chapter.length} 𝗰𝗵𝘂̛𝗼̛𝗻𝗴\n\n👉 𝗥𝗲𝗽𝗹𝘆 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗻𝗮̀𝘆 𝘁𝗵𝗲𝗼 𝘀𝗼̂́ 𝘁𝗵𝘂̛́ 𝘁𝘂̛̣ 𝗰𝗵𝘂̛𝗼̛𝗻𝗴 𝗻𝗲̂́𝘂 𝗺𝘂𝗼̂́𝗻 𝘅𝗲𝗺 𝘁𝗿𝘂𝘆𝗲̣̂𝗻`;
                        console.log(chapters.length);
                        return api.sendMessage({
                            body: msg,
                            attachment: fs.createReadStream(__dirname + `/truyenqq/details_${event.senderID}.png`)
                        }, event.threadID, function (error, info) {
                            fs.unlinkSync(__dirname + `/truyenqq/details_${event.senderID}.png`);
                            global.client.handleReply.push({
                                name: _this2.config.name,
                                messageID: info.messageID,
                                author: event.senderID,
                                type: "read",
                                data_old: handleReply.data,
                                data: chapter
                            });
                        });
                    });

                    return function (_x9) {
                        return ref.apply(this, arguments);
                    };
                })());
            }
                break;
            case "read": {
                "->" == event.body ? (chap = handleReply.chap + 1, api.unsendMessage(handleReply.messageID)) : "<-" == event.body ? (chap = handleReply.chap - 1, api.unsendMessage(handleReply.messageID)) : chap = event.body - 1;
                console.log(handleReply.data[parseInt(chap)]);
                axios({
                    method: 'GET',
                    url: baseURL + 'truyenqq/getChapters',
                    params: {
                        url: handleReply.data[parseInt(chap)]
                    },
                    headers: {
                        'Content-Type': 'application/json',
                        'User-Agent': 'Mozilla/5.0 (Linux; Android 10; SM-G975F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.106 Mobile Safari/537.36'
                    }
                }).then((() => {
                    var ref = _asyncToGenerator(function* (res) {
                        console.log(res.data);
                        var arr = [];
                        for (let i = 0; i < res.data.length; i++) {
                            var getImg = (yield axios.get(res.data[i], {
                                headers: {
                                    referer: 'https://truyenqqpro.com/'
                                },
                                responseType: 'arraybuffer'
                            })).data;
                            fs.writeFileSync(__dirname + `/truyenqq/read_${i}_${event.senderID}.png`, Buffer.from(getImg, 'utf-8'));
                            arr.push(fs.createReadStream(__dirname + `/truyenqq/read_${i}_${event.senderID}.png`));
                            if (arr.length == 10 || i + 1 == res.data.length) {
                                yield new Promise(function (resolve) {
                                    return api.sendMessage({
                                        body: `🔰 𝗖𝗵𝘂̛𝗼̛𝗻𝗴 ${chap + 1} 𝗰𝘂̉𝗮 𝘁𝗿𝘂𝘆𝗲̣̂𝗻 ${handleReply.data_old[0].title}\n\n📌 𝗥𝗲𝗽𝗹𝘆 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗻𝗮̀𝘆 𝘁𝗵𝗲𝗼 𝘀𝗼̂́ 𝘁𝗵𝘂̛́ 𝘁𝘂̛̣ 𝗰𝗵𝘂̛𝗼̛𝗻𝗴 𝘃𝗮̀ 𝘅𝗲𝗺 𝘁𝗿𝘂𝘆𝗲̣̂𝗻\n\n📕 𝗥𝗲𝗽𝗹𝘆 "<-" 𝗻𝗲̂́𝘂 𝘅𝗲𝗺 𝗰𝗵𝘂̛𝗼̛𝗻𝗴 𝘁𝗿𝘂̛𝗼̛́𝗰 𝗵𝗼𝗮̣̆𝗰 𝗿𝗲𝗽𝗹𝘆 "->" 𝗻𝗲̂́𝘂 𝘅𝗲𝗺 𝗰𝗵𝘂̛𝗼̛𝗻𝗴 𝘀𝗮𝘂\n\n🌸 𝑪𝒉𝒖́𝒄 𝒄𝒂́𝒄 𝒃𝒂̣𝒏 𝒙𝒆𝒎 𝒕𝒓𝒖𝒚𝒆̣̂𝒏 𝒗𝒖𝒊 𝒗𝒆̉ 𝒏𝒉𝒆́ 🌸`,
                                        attachment: arr
                                    }, event.threadID, function (error, info) {
                                        arr.splice(0, arr.length);
                                        global.client.handleReply.push({
                                            name: _this2.config.name,
                                            messageID: info.messageID,
                                            author: event.senderID,
                                            type: "read",
                                            data_old: handleReply.data_old,
                                            data: handleReply.data,
                                            chap: parseInt(chap)
                                        });
                                        resolve();
                                    });
                                });
                            }
                        }
                    });

                    return function (_x10) {
                        return ref.apply(this, arguments);
                    };
                })());
            }
        }
    });

    return function (_x8) {
        return ref.apply(this, arguments);
    };
})();