module.exports.config = {
    name: 'youtube',
    version: '1.0.0',
    hasPermssion: 0,
    credits: 'DungUwU',
    description: 'Phát nhạc hoặc video thông qua link YouTube hoặc từ khoá tìm kiếm',
    commandCategory: 'Tiện ích',
    usages: '< keyword/url >',
    cooldowns: 5,
    dependencies: {
        'moment-timezone': '',
        'axios': '',
        'fs-extra': '',
        'ytdl-core': '',
        'axios': '',
        '@ffmpeg-installer/ffmpeg': '',
        'fluent-ffmpeg': ''
    },
    envConfig: {
        "YOUTUBE_API": "AIzaSyD8fodb6cR6P_6G9oqRjy9es-o1fa5TAuY"
    }
};

const mediaSavePath = __dirname + '/cache/media_x213/';

module.exports.handleReply = async function ({ api, event, handleReply }) {
    const { threadID, messageID, body, senderID } = event;
    const { author, videoID, IDs, type: reply_type } = handleReply;
    if (senderID != author) return;

    const { createWriteStream, createReadStream, unlinkSync, existsSync, mkdirSync, statSync } = global.nodemodule['fs-extra'];
    const moment = global.nodemodule['moment-timezone'];
    const currentTime = moment.tz('Asia/Ho_Chi_Minh').format('HH:mm:ss');

    const axios = global.nodemodule['axios'];


    const downloadMedia = async (videoID, type) => {
        const filePath = `${mediaSavePath}${Date.now()}${senderID}.${(type == 'video') ? 'mp4' : 'm4a'}`;
        const errObj = {
            filePath,
            error: 1
        };
        try {
            const mediaObj = {
                filePath,
                error: 0
            }

            let ytdlOptions;

            if (!existsSync(mediaSavePath)) mkdirSync(mediaSavePath, { recursive: true });

            if (type == 'video') {
                ytdlOptions = { quality: '18' };
            } else {
                ytdlOptions = { filter: 'audioonly' };
            }
            await new Promise((resolve, reject) => {
                const ytdl = global.nodemodule['ytdl-core'];
                const ffmpeg = global.nodemodule['fluent-ffmpeg'];
                const startTime = Date.now();
                const stream = ytdl('https://www.youtube.com/watch?v=' + videoID, ytdlOptions)

                if (type == 'video') {
                    stream
                        .pipe(createWriteStream(filePath))
                        .on('error', (err) => {
                            reject(err);
                        })
                        .on('close', () => {
                            resolve()
                        })
                } else {
                    ffmpeg.setFfmpegPath(global.nodemodule['@ffmpeg-installer/ffmpeg'].path);

                    ffmpeg(stream)
                        .audioCodec("aac")
                        // .bitrate(128)
                        .save(filePath)
                        .on("error", err => {
                            reject(err);
                        })
                        .on("end", () => {
                            console.log('[ YOUTUBE ] Downloaded, converted in ' + (Date.now() - startTime) + 'ms');
                            resolve();
                        })
                }

            });

            return mediaObj;
        } catch (e) {
            console.log(e)
            return errObj;
        }
    }

    switch (reply_type) {
        case 'download':
            {
                const { filePath, error } = await downloadMedia(videoID, body == '1' ? 'video' : 'audio');
                    
                const mediaData = {
                    title: (await axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoID}&key=${global.configModule[this.config.name].YOUTUBE_API}`)).data.items[0].snippet.title,
                    duration: prettyTime((await axios.get(encodeURI(`https://www.googleapis.com/youtube/v3/videos?part=contentDetails&id=${videoID}&key=${global.configModule[this.config.name].YOUTUBE_API}`))).data.items[0].contentDetails.duration)
                }

                if (error != 0) {
                    api.sendMessage('Đã có lỗi xảy ra', threadID, messageID);
                    if (existsSync(filePath)) unlinkSync(filePath);
                } else {
                    api.unsendMessage(handleReply.messageID);
                    if ((statSync(filePath).size > 50331648 && body == 1) || (statSync(filePath).size > 26214400 && body == 2)) {
                        api.sendMessage('Không thể gửi vì kích thước tệp quá lớn', threadID, messageID);
                        unlinkSync(filePath);
                    } else {
                        api.sendMessage({
                            body: `🎬===「 𝗬𝗢𝗨𝗧𝗨𝗕𝗘 」===🎬\━━━━━━━━━━━━━━\n\n📌 → 𝗧𝗶𝘁𝗹𝗲: ${mediaData.title}\n⏱️ → 𝗧𝗵𝗼̛̀𝗶 𝗴𝗶𝗮𝗻: ${mediaData.duration}\n\n====== [ ${currentTime} ] ======`,
                            attachment: createReadStream(filePath)
                        }, threadID, (err) => {
                            if (err) {
                                console.log(err);
                                api.sendMessage('Đã có lỗi xảy ra', threadID, messageID);
                            }
                            if (existsSync(filePath)) unlinkSync(filePath);
                        }, messageID);
                    }
                }
                break;
            }
        case 'list':
            {
                if (isNaN(body) || body < 1 || body > IDs.length) {
                    api.sendMessage('Vui lòng chọn số từ 1 đến ' + IDs.length, threadID, messageID);
                } else {
                    api.unsendMessage(handleReply.messageID);
                    const chosenIndex = parseInt(body) - 1;
                    const chosenID = IDs[chosenIndex];
                    api.sendMessage('🎬====「 𝗬𝗢𝗨𝗧𝗨𝗕𝗘 」====🎬\━━━━━━━━━━━━━━\n\n→ 𝗩𝘂𝗶 𝗹𝗼̀𝗻𝗴 𝗽𝗵𝗮̉𝗻 𝗵𝗼̂̀𝗶 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗻𝗮̀𝘆 𝘃𝗼̛́𝗶 𝗰𝗮́𝗰 𝗹𝘂̛̣𝗮 𝗰𝗵𝗼̣𝗻 𝗯𝗲̂𝗻 𝗱𝘂̛𝗼̛́𝗶:\n📺 → 𝟭. 𝗧𝗮̉𝗶 𝘃𝗶𝗱𝗲𝗼\n️🎼 → 𝟮. 𝗧𝗮̉𝗶 𝗮𝘂𝗱𝗶𝗼', threadID,
                        (error, info) => {
                            if (error) {
                                console.log(error);
                                api.sendMessage('Lỗi khi thực hiện yêu cầu', threadID, messageID);
                            } else {
                                global.client.handleReply.push({
                                    type: 'download',
                                    name: this.config.name,
                                    messageID: info.messageID,
                                    author: senderID,
                                    videoID: chosenID
                                })
                            }
                        },
                        messageID);
                }

            }
    }
}

module.exports.run = async function ({ api, event, args }) {
    const { threadID, messageID, senderID } = event;

    if (args.length == 0) return api.sendMessage('Phần tìm kiếm không được để trống', threadID, messageID);
    const input = args.join(' ');
    const urlPatten = /^(http(s)?:\/\/)?((w){3}.)?youtu(be|.be)?(\.com)?\/.+/gm;
    const isValidUrl = urlPatten.test(input);

    const axios = global.nodemodule['axios'];


    const getBasicInfo = async (keyword) => {
        try {
            const mediaData = (await axios.get(encodeURI(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=6&q=${keyword}&type=video&key=${global.configModule[this.config.name].YOUTUBE_API}`))).data.items;
            return mediaData;
        } catch (e) {
            throw e;
        }
    }

    try {
        if (isValidUrl) {
            let videoID = input.split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
            (videoID[2] !== undefined) ? videoID = videoID[2].split(/[^0-9a-z_\-]/i)[0] : videoID = videoID[0];
    
            api.sendMessage('🎬====「 𝗬𝗢𝗨𝗧𝗨𝗕𝗘 」====🎬\━━━━━━━━━━━━━━\n\n→ 𝗩𝘂𝗶 𝗹𝗼̀𝗻𝗴 𝗽𝗵𝗮̉𝗻 𝗵𝗼̂̀𝗶 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗻𝗮̀𝘆 𝘃𝗼̛́𝗶 𝗰𝗮́𝗰 𝗹𝘂̛̣𝗮 𝗰𝗵𝗼̣𝗻 𝗯𝗲̂𝗻 𝗱𝘂̛𝗼̛́𝗶:\n📺 → 𝟭. 𝗧𝗮̉𝗶 𝘃𝗶𝗱𝗲𝗼\n️🎼 → 𝟮. 𝗧𝗮̉𝗶 𝗮𝘂𝗱𝗶𝗼', threadID,
                (error, info) => {
                    if (error) {
                        console.log(error);
                    } else {
                        global.client.handleReply.push({
                            type: 'download',
                            name: this.config.name,
                            messageID: info.messageID,
                            author: senderID,
                            videoID
                        })
                    }
                },
                messageID);
        } else {
            let IDs = [],
                msg = '',
                result = await getBasicInfo(input);
    
            for (let i = 0; i < result.length; i++) {
                const id = result[i].id.videoId;
                if (id !== undefined) {
                    IDs.push(id);
                    const mediaDuration = (await axios.get(encodeURI(`https://www.googleapis.com/youtube/v3/videos?part=contentDetails&id=${id}&key=${global.configModule[this.config.name].YOUTUBE_API}`))).data.items[0].contentDetails.duration;
                    msg += `\n\n${i + 1}. ${result[i].snippet.title}\n⏱️ → 𝗧𝗵𝗼̛̀𝗶 𝗴𝗶𝗮𝗻: ${prettyTime(mediaDuration)}\n---------------------------`;
                }
            }
    
            msg = `»🔎 𝐂𝐨́ ${IDs.length} 𝐤𝐞̂́𝐭 𝐪𝐮𝐚̉ 𝐭𝐫𝐮̀𝐧𝐠 𝐯𝐨̛́𝐢 𝐭𝐮̛̀ 𝐤𝐡𝐨𝐚́ 𝐭𝐢̀𝐦 𝐤𝐢𝐞̂́𝐦 𝐜𝐮̉𝐚 𝐛𝐚̣𝐧:${msg}\n\n» 𝐇𝐚̃𝐲 𝐫𝐞𝐩𝐥𝐲 (𝐩𝐡𝐚̉𝐧 𝐡𝐨̂̀𝐢) 𝐜𝐡𝐨̣𝐧 𝐦𝐨̣̂𝐭 𝐭𝐫𝐨𝐧𝐠 𝐧𝐡𝐮̛̃𝐧𝐠 𝐭𝐢̀𝐦 𝐤𝐢𝐞̂́𝐦 𝐭𝐫𝐞̂𝐧`
            api.sendMessage(msg, threadID, (error, info) => {
                if (error) {
                    console.log(error);
                } else {
                    global.client.handleReply.push({
                        type: 'list',
                        name: this.config.name,
                        messageID: info.messageID,
                        author: senderID,
                        IDs
                    })
                }
            }, messageID);
        }
    } catch (e) {
        api.sendMessage('Đã xảy ra lỗi, vui lòng thử lại trong giây lát' + e, threadID, messageID);
    }


    return;
}

const prettyTime = (time) => {
    let newTimeArray = [];
    time = time.slice(2);

    if (time.includes('H')) {
        newTimeArray.push(time.split('H')[0]);
        time = time.split('H')[1];
    } else newTimeArray.push(0);
    if (time.includes('M')) {
        newTimeArray.push(time.split('M')[0]);
        time = time.split('M')[1];
    } else newTimeArray.push(0);
    if (time.includes('S')) {
        newTimeArray.push(time.split('S')[0]);
    } else newTimeArray.push(0);

    newTimeArray = newTimeArray.map(item => {
        if (parseInt(item) < 10) {
            return '0' + item;
        } else return item;
    })

    return newTimeArray.join(':');
}