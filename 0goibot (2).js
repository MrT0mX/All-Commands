const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "goibot",
  version: "2.0.1",
  hasPermssion: 0,
  credits: "MrTomXxX",
  description: "Reply when someone write bot and autoreact",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Kolkata").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;

  var tl = ["Hi I am Robot made by MrTomXxX", "Please don't disturb me", "Love uhh janeman ;*","Meri Jann Kya Hua","I Love uhh Always","Baby Kaho tO Kiss Kar Lu","Jann aap Mere ho","Date pe chale","Haye Main Sadke jawa Teri Masoom Shakal pe baby 💋 " , "Bot Nah Bol Oye Janu bol Mujhe " , "Bar Bar Disturb Na KRr JaNu Ke SaTh Busy Hun 🤭🐒" , "Main Gareebon Sy Bt Nhi kRta 😉😝😋🤪" , "Itna Na Pass aa Pyar h0o JayGa" , "Bolo Babu Tum Mujhse Pyar Karte Ho Na 🙈💋💋 " , "Are jaan Majaak ke mood me nhi hu main jo kaam hai bol do sharmao nahi" , "Bar Bar Bolke Dimag Kharab Kiya toh. Teri ...... Fad dunga🤬" , "Tu Bandh nhi Karega kya?" , "Gali Sunna H kya? 🤬" , "Teri Ma ka Ramunda. Teri Behen kaChuri🤬, Teri Baap Ka Faluda" , "Aree Bandh kar Bandh Kar" , "M hath jod ke Modi Ji Se Gujarish Karta hu" , "Tujhe Kya koi aur Kam nhi ha? Puradin Kata h Aur Messenger pe Bot Bot Karta h" , " MrTomXxX Ake tera behen Ko Chura le Jayega" , "Bosdk Teri Chamunda" , "Tujhe Apna Bejjati Karne Ka Saukh h?" , "Abhi Bola Toh Bola Dubara Mat Bolna" , "Teri Ground a began laga dunga" , "Bol De koi nahi dakh rha 🙄" , "Haaye Main Mar Jawa Babu Ek Chuma To Do Kafi Din Se Chumi Nahi Di 😝" , "Dur Hat Be  Mujhe Aur Koi Kam Nahi Kya Har Waqat Mujhy Tang Kerte Rhte ho 😂" , "Are Bolo Meri Jaan Kya Hall Hai😚 " , "IB Aja Yahan Nhi B0ol Salta 🙈😋" , "Mujhe Mat BuLao Naw Main buSy h0o Naw" , "Bot Bolke Bejjti Kar Rahe ho yall...Main To Tumhare Dil Ki Dhadkan Hu Baby...💔🥺" , "Are Tum Wahi ho nah Jisko Main Nahi Janta 🤪" , "Kal Haveli Pe Mil Jra Tu 😈" , "Aagye SaJJy KhaBBy Sy 😏" , "Bx KRr Uh k0o Pyar H0o Na H0o Mujhe H0o JayGa" , "FarMao 😒" , "BulaTi Hai MaGar JaNy Ka Nhi 😜" , "Main T0o AnDha Hun 😎" , "Phle NaHa kRr Aa 😂" , "Aaaa Thooo 😂😂😂" , "Main yahin hoon kya hua sweetheart‎ ," , "Boss Dk Tujhe Aur Koi Kaam Nhi H? Har Waqt Bot Bot Karta H" , "Chup Reh, Nhi Toh Bahar Ake tera Dath Tor Dunga" , "WaYa KaRana Mere NaL 🙊 ", "MaiNy Uh Sy Bt Nhi kRrni" , "MeKo Kxh DiKhai Nhi Dy Rha 🌚" , "Bot Na BoL 😢 JaNu B0ol 😘 " , "Bar Bar Disturb Na KRr JaNu Ke SaTh Busy Hun  😋" , "Main Gareebon Sy Bt Nhi kRta 😉😝😋🤪" , "Itna Na Pass aa Pyar h0o JayGa" , "MeKo Tang Na kRo Main Kiss 💋 KRr DunGa 😘 " , "Ary yrr MaJak Ke M0oD Me Nhi Hun 😒" , "HaYe JaNu Aow Idher 1 PaPpi Idher d0o 1 PaPpi Idher 😘" , "Dur HaT Terek0o 0or K0oi Kam Nhi Jb DeKho Bot Bot ShaDi KerLe Mujhsy 😉😋🤣" , "TeRi K0oi Ghr Me Nhi SunTa T0o Main Q SuNo 🤔😂 " , "IB Aja Yahan Nhi B0ol Salta 🙈😋" , "Mujhe Mat BuLao Naw Main buSy h0o Naw" , "Kyun JaNu MaNu Another Hai 🤣" , "Are TuMari T0o Sb he baZzati kRrty Me Be kRrDun 🤏😜" , "KaL HaVeLi Prr Aa ZaRa T0o 😈" , "Aagye SaJJy KhaBBy Sy 😏" , "Bx KRr Uh k0o Pyar H0o Na H0o Mujhe H0o JayGa" , "FarMao 😒" , "BulaTi Hai MaGar JaNy Ka Nhi 😜" , "Main T0o AnDha Hun 😎" , "Phle NaHa kRr Aa 😂" , "Papi ChuLo 🌚" , "TeRek0o DiKh Nhi Rha Main buSy Hun 😒" , "TeRa T0o GaMe BaJana PreGa" , "Ta Huwa 🥺"  , "TuM Phr AaGye 🙄 Kisi 0or Ny Muu Nhi LaGaYa Kya🤣🤣🤣" , "MeKo JaNu Chai Hai Tum Single H0o?" , "Aaaa Thooo 😂😂😂" , "Main S0o Rha Hun " , "Ase He HansTy Rha kRo 😍"];
  var rand = tl[Math.floor(Math.random() * tl.length)]

  if (event.body.indexOf("bot") == 0 || (event.body.indexOf("Bot") == 0)) {
 let userH = event.senderID 
    /*api.getUserInfo(parseInt(userH), (err, data) => {
      if(err){ return console.log(err)}
     var obj = Object.keys(data);
    var firstname = data[obj].name.replace("@", ""); */
    
  const firstname = global.data.userName.get(userH) || await Users.getNameUser(userH);
	if (event.senderID == api.getCurrentUserID()) return;

    var msg = {
      body: firstname + ", " + rand, 
      mentions: [{
          tag: firstname,
          id: userH
        }]
    }
    return api.sendMessage(msg, threadID, messageID);
    //  })
  };
  let input2 = event.body.toLowerCase();
if(input2.includes("haha") || input2.includes("sis") || input2.includes("hihi") || input2.includes("lmao") || input2.includes("lol") || input2.includes("😂") || input2.includes("😹") || input2.includes("🤣") || input2.includes("😆") || input2.includes("😄") || input2.includes("😅") || input2.includes("bete")){
					        	return api.setMessageReaction("😆", event.messageID, (err) => {}, true)
} 
    if(input2.includes("dead") || input2.includes("ake") || input2.includes("bhag") || input2.includes("nik") || input2.includes("death") || input2.includes("go") || input2.includes("sed") || input2.includes("jhag") || input2.includes("fyt") || input2.includes("fight") || input2.includes("nafrat") || input2.includes("accident") || input2.includes("divorce") || input2.includes("break") || input2.includes("sad") || input2.includes("alone") || input2.includes("hate") ||input2.includes("need") || input2.includes("mar") || input2.includes("janaza")){
					        	return api.setMessageReaction("😢", event.messageID, (err) => {}, true)
    }
  if(input2.includes("tom") || input2.includes("ratum") || input2.includes("MrTomXxX") || input2.includes("mr tom") || input2.includes("love") || input2.includes("lab") || input2.includes("holy") || input2.includes("mas") || input2.includes("temp") || input2.includes("pak") || input2.includes("ind") || input2.includes("islam") || input2.includes("muslim") || input2.includes("hindu") || input2.includes("bible") || input2.includes("allah") || input2.includes("god") || input2.includes("bhagwan") || input2.includes("gita") || input2.includes("quran") || input2.includes("shadi") || input2.includes("marry") || input2.includes("chum") || input2.includes("kiss") || input2.includes("heart") || input2.includes("pyar") || input2.includes("muhabbat") || input2.includes("mohabbat") || input2.includes("jan")){
					        	return api.setMessageReaction("❤️", event.messageID, (err) => {}, true)
}
  if(input2.includes("fuck") || input2.includes("ab") || input2.includes("gali") || input2.includes("use") || input2.includes("wait") || input2.includes("rand") || input2.includes("bc") || input2.includes("bxdk") || input2.includes("bkl") || input2.includes("gandu") || input2.includes("mc") || input2.includes("chod") || input2.includes("lun") || input2.includes("lora") || input2.includes("gan")){
					        	return api.setMessageReaction("🤬", event.messageID, (err) => {}, true)
}


}

module.exports.run = function({ api, event, client, __GLOBAL }) { }