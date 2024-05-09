module.exports.config = {
  name: 'dovui',
  version: '10.02',
  hasPermssion: 0,
  credits: 'Arana',
  description: 'Trả lời câu hỏi đố vui',
  commandCategory: 'Trò chơi',
  usages: '[]',
  cooldowns: 3,
  dependencies: { axios: '' },
}
const $$ = {
  max: 9999,
  min: 1000,
}
const localeNum = (n) => (+n).toLocaleString().replace(/,/g, '.')
const { get } = require('axios')
module.exports.run = function ({ api, event }) {
  runRiddle({
    api,
    event,
    autoNext: false,
    author: event.senderID,
  })
}
module.exports.handleReaction = function ({ handleReaction: $, api, event }) {
  if (event.userID != $.author) {
    return
  }
  runRiddle({
    api,
    event,
    autoNext:
      event.reaction == '\uD83D\uDC4D' ? ($.autoNext ? false : true) : false,
    author: $.author,
  })
}
module.exports.handleReply = function ({
  handleReply: $,
  api,
  event,
  Currencies: $_,
}) {
  const index = $.data.option[+event.args[0] - 1]
  if (event.senderID != $.author || isNaN(event.args[0]) || !index) {
    return
  }
  api.unsendMessage($.messageID)
  const ans = index == $.data.correct
  const money = {
    type: `${ans ? 'increaseMoney' : 'decreaseMoney'}`,
    num: randomNumber($$),
  }
  api.sendMessage(
    `➢ 𝗞𝗲̂́𝘁 𝗤𝘂𝗮̉: ${$.data.correct}\n\n✡ ${
      ans
        ? `𝗟𝘂̛̣𝗮 𝗰𝗵𝗼̣𝗻 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻 𝗹𝗮̀ 𝗰𝗵𝗶́𝗻𝗵 𝘅𝗮́𝗰 𝗰𝗼̣̂𝗻𝗴 ${localeNum(money.num)}`
        : `𝗥𝗮̂́𝘁 𝘁𝗶𝗲̂́𝗰 𝗹𝘂̛̣𝗮 𝗰𝗵𝗼̣𝗻 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻 𝘀𝗮𝗶 𝗿𝗼̂̀𝗶 𝘁𝗿𝘂̛̀ ${localeNum(money.num)}`
    }$ 💸\n✡ [ 𝗥𝗲𝗮𝗰𝘁𝗶𝗼𝗻 ] 𝗻𝗲̂́𝘂 𝗰𝗵𝗼̛𝗶 𝘁𝗶𝗲̂́𝗽 𝗵𝗼𝗮̣̆𝗰 𝗥𝗲𝗮𝗰𝘁𝗶𝗼𝗻 👍 ${
      $.autoNext ? '𝘁𝗮̆́𝘁' : '𝗯𝗮̣̂𝘁'
    } 𝗮𝘂𝘁𝗼 𝗰𝗵𝘂𝘆𝗲̂̉𝗻 𝗰𝗮̂𝘂 𝗵𝗼̉𝗶`,
    event.threadID,
    (err, msg) => {
      global.client.handleReaction.push({
        name: 'dovui',
        messageID: msg.messageID,
        autoNext: $.autoNext,
        author: $.author,
      })
      if ($.autoNext) {
        runRiddle({
          api,
          event,
          autoNext: true,
          author: event.senderID,
        })
      }
      $_[money.type](event.senderID, +money.num)
    },
    event.messageID
  )
}
function runRiddle({ api, event, autoNext, author }) {
  get(`https://apiuwuapi.ducdz999.repl.co/game/dovui`).then((response) => {
    const { question, option, correct } = response.data.data
    var count = 0
    api.sendMessage(
      `🌸===== [ 𝗗𝗢𝗩𝗨𝗜 ] =====🌸\n\n➢ 𝗖𝗮̂𝘂 𝗵𝗼̉𝗶: ${question}\n_____________________________\n${option
        .map((i) => `${++count}. ${i}`)
        .join(
          '\n'
        )}\n\n✡ [ 𝗥𝗲𝗽𝗹𝘆 ] 𝗖𝗵𝗼̣𝗻 𝟭 𝘁𝗿𝗼𝗻𝗴 𝘀𝗼̂́ 𝗰𝗮́𝗰 𝗰𝗮̂𝘂 𝘁𝗿𝗮̉ 𝗹𝗼̛̀𝗶 𝗯𝗲̂𝗻 𝘁𝗿𝗲̂𝗻 \n✡ 𝗔𝘂𝘁𝗼 𝗡𝗲𝘅𝘁: ${
        autoNext ? 'bật' : 'tắt'
      }`,
      event.threadID,
      (err, msg) =>
        global.client.handleReply.push({
          name: 'dovui',
          messageID: msg.messageID,
          author,
          autoNext,
          data: response.data.data,
        })
    )
  })
}
function randomNumber({ min = 0, max = 0 }) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}
