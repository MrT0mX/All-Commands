module.exports.config = {
    name: "draw",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Hakira",
    description: "Biến đổi ảnh thành anime | Vẽ ảnh theo yêu cầu",
    commandCategory: "Công cụ",
    usages: "reply ảnh hoặc nội dung",
    cooldowns: 5
};
const axios = require('axios')
const fs =require('fs')
function base64_encode(file) {
  try {
    var bitmap = fs.readFileSync(__dirname + file);
    var d = (bitmap).toString('base64')
    return d
  } catch (e) {  }
}
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: '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',
});
const openai = new OpenAIApi(configuration);

module.exports.run = async function ({ api, event, args, Threads, Users }) {
  try{
     if (event.type == "message_reply") {
       if(!event.messageReply.attachments[0]){
         var d = `https://graph.facebook.com/${event.messageReply.senderID}/picture?height=720&width=720&access_token=1371688333316058|yqnZCV_SATCp9jPHNUQZaj5_C_Y`
       }
       else {
  var d = event.messageReply.attachments[0].url
       }
    const getImg = (await axios.get(d, { responseType: 'arraybuffer' })).data;
  var img = `${event.senderID}` + ".jpg"
  fs.writeFileSync(__dirname + '/cache/' + img, Buffer.from(getImg, 'utf-8'));
  fs.createReadStream(__dirname + '/cache/' + img)
  const oix = base64_encode("/cache/" + img)
    const data = {
            "parameter": {
                "rsp_media_type": "jpg",
            },
            "extra": {},
            "media_info_list": [{
                "media_data": oix,
                "media_profiles": {
                    "media_data_type":"jpg"
                },
                "media_extra": {
                }
            }]

        }

const r = await axios.post('https://openapi.mtlab.meitu.com/v1/stable_diffusion_anime?api_key=237d6363213c4751ba1775aba648517d&api_secret=b7b1c5865a83461ea5865da3ecc7c03d',
  data
)
    var im = r.data.media_info_list[0].media_data
        const opx = (await axios.post('https://uploadimage-1.hanakuhshsjsjshejsna.repl.co/uploadFile',{
  code: "abc" + Math.floor(Math.random() * 9999999),
data:"data:image/jpeg;base64," + im,
type: "image/jpeg",
  })).data
      const t = (await axios.get(encodeURI(`https://uploadimage-1.hanakuhshsjsjshejsna.repl.co/` + opx.link), {
                responseType: "stream"
            })).data;
       fs.unlinkSync(__dirname + '/cache/' + img)
   return api.sendMessage({
                body: "𝗔̉𝗻𝗵 𝗔𝗜 𝘃𝘂̛̀𝗮 𝘃𝗲̃ 𝗰𝗵𝗼 𝗯𝗮̣𝗻 𝗻𝗲̀ 🌸",
                attachment: t
            }, event.threadID)
  }
   const size = "";
   const prompt = args.join(" ")
   const imageSize = size === 'nhỏ' ? '256x256' : size === 'vừa' ? '512x512' : '1024x1024';
   const response = await openai.createImage({
            prompt,
            n: 1,
            size: imageSize,
        });
  const imageUrl = response.data.data[0].url
  const t = (await axios.get(`${imageUrl}`, {
                responseType: "stream"
            })).data;
   return api.sendMessage({
                body: "𝗔̉𝗻𝗵 𝗔𝗜 𝘃𝘂̛̀𝗮 𝘃𝗲̃ 𝗰𝗵𝗼 𝗯𝗮̣𝗻 𝗻𝗲̀ 🌸",
                attachment: t
            }, event.threadID)
 
} catch(e){
    console.log(e)
}}