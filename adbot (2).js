module.exports.config = {
    name: "adbot",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "MrTomXxX",
    description: "",
    commandCategory: "Media",
    usages: "",
    cooldowns: 4,
    dependencies: {
        "request": "",
        "fs": ""
    }
    
};

module.exports.run = async({api,event,args}) => {
    const fs = global.nodemodule["fs-extra"];
    const request = global.nodemodule["request"];
    const threadSetting = global.data.threadData.get(parseInt(event.threadID)) || {};
    const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;
     if (args.length == 0) return api.sendMessage(`You can use:\n\n${prefix}${this.config.name} user => it will take your own information.\n\n${prefix}${this.config.name} user @[Tag] => it will get friend information tag.\n\n${prefix}${this.config.name} box => it will get your box information (number of members, djt each other,...)\n\n${prefix}${this.config.name} user box [uid || tid.:\n\n${prefix}${this.config.name} admin => Admin Bot's Personal Information]`, event.threadID, event.messageID);
    if (args[0] == "box") {
           if(args[1]){ let threadInfo = await api.getThreadInfo(args[1]);
           let imgg = threadInfo.imageSrc;
           var gendernam = [];
            var gendernu = [];
                for (let z in threadInfo.userInfo) {
                var gioitinhone = threadInfo.userInfo[z].gender;
                if(gioitinhone == "MALE"){gendernam.push(gioitinhone)
                }else{gendernu.push(gioitinhone)
                }};
             var nam = gendernam.length;
             var nu = gendernu.length;
             let sex = threadInfo.approvalMode;
       var pd = sex == false ? "Turn off" : sex == true ? "turn on" : "NS";
       if(!imgg) api.sendMessage(`Group name: ${threadInfo.threadName}\nTID: ${args[1]}\nApproved: ${pd}\nEmoji: ${threadInfo.emoji}\nInformation: \n»${threadInfo.participantIDs.length} members and ${threadInfo.adminIDs.length} administrators.\n»Including ${nam} boy and ${nu} female.\n»Total number of messages: ${threadInfo.messageCount}.`,event.threadID,event.messageID);
        else var callback = () => api.sendMessage({body:`Group name: ${threadInfo.threadName}\nTID: ${args[1]}\nApproved: ${pd}\nEmoji: ${threadInfo.emoji}\nInformation: \n»${threadInfo.participantIDs.length} members and ${threadInfo.adminIDs.length}administrators.\n»Including ${nam} boy and ${nu} female.\n»Total number of messages: ${threadInfo.messageCount}.`,attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.png"), event.messageID); 
      return request(encodeURI(`${threadInfo.imageSrc}`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
      
      }
          
            let threadInfo = await api.getThreadInfo(event.threadID);
            let img = threadInfo.imageSrc;
            var gendernam = [];
            var gendernu = [];
                for (let z in threadInfo.userInfo) {
                var gioitinhone = threadInfo.userInfo[z].gender;
                if(gioitinhone == "MALE"){gendernam.push(gioitinhone)
                }else{gendernu.push(gioitinhone)
                }};
             var nam = gendernam.length;
             var nu = gendernu.length;
             let sex = threadInfo.approvalMode;
       var pd = sex == false ? "Turn off" : sex == true ? "turn on" : "NS";
          if(!img) api.sendMessage(`Group name: ${threadInfo.threadName}\nTID: ${event.threadID}\nApproved: ${pd}\nEmoji: ${threadInfo.emoji}\nInformation: \n»${threadInfo.participantIDs.length} members and ${threadInfo.adminIDs.length} administrators.\n»Including ${nam} boy and ${nu} nữ.\n»Total number of messages: ${threadInfo.messageCount}.`,event.threadID,event.messageID)
          else  var callback = () => api.sendMessage({body:`Group name: ${threadInfo.threadName}\nTID: ${event.threadID}\nBrowser: ${pd}\nEmoji: ${threadInfo.emoji}\nInformation: \n»${threadInfo.participantIDs.length} members and ${threadInfo.adminIDs.length} administrators.\n»Including ${nam} boy and ${nu} female.\n»Total number of messages: ${threadInfo.messageCount}.`,attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.png"), event.messageID);   
      return request(encodeURI(`${threadInfo.imageSrc}`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
    }
               if (args.length == 0) return api.sendMessage(`You can use:\n\n${prefix}${this.config.name} user => it will get your own information.\n\n${prefix}${this.config.name} user @[Tag] => it will get the information of the person you tag.\n\n${prefix}${this.config.name} box => it will get your box information (number of members, djt each other,...)\n\n${prefix}${this.config.name} user box [uid || tid]`, event.threadID, event.messageID);
    if (args[0] == "admin") {
      var callback = () => api.sendMessage(
  {body:`———»ADMIN BOT«———\n❯ Name: MrTomXxX\n❯ Facebook: https://www.facebook.com/MrTomXxX\n❯ Thanks for using ${global.config.BOTNAME} bot`,
    attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => 
    fs.unlinkSync(__dirname + "/cache/1.png"));  
      return request(encodeURI(`https://graph.facebook.com/100017985245260/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).pipe(
fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
    
      };

if (args[0] == "user") { 
    if(!args[1]){
    if(event.type == "message_reply") id = event.messageReply.senderID
    else id = event.senderID;
    let data = await api.getUserInfo(id);
    let url = data[id].profileUrl;
    let b = data[id].isFriend == false ? "are not !" : data[id].isFriend == true ? "Yes !" : "Damn";
    let sn = data[id].vanity;
    let name = await data[id].name;
    var sex = await data[id].gender;
    var gender = sex == 2 ? "Male" : sex == 1 ? "Female" : "Tran Duc Bo";
    var callback = () => api.sendMessage({body:`Name: ${name}` + `\nUser url: ${url}` + `\nUser name: ${sn}\nUID: ${id}\nGender: ${gender}\nMake friends with bots: ${b}`,attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.png"),event.messageID); 
       return request(encodeURI(`https://graph.facebook.com/${id}/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
   }
    else {
    
    if (args.join().indexOf('@') !== -1){
    var mentions = Object.keys(event.mentions)
    let data = await api.getUserInfo(mentions);
    let url = data[mentions].profileUrl;
    let b = data[mentions].isFriend == false ? "are not !" : data[mentions].isFriend == true ? "yes!" : "Dammit";
    let sn = data[mentions].vanity;
    let name = await data[mentions].name;
    var sex = await data[mentions].gender;
    var gender = sex == 2 ? "Male" : sex == 1 ? "Female" : "Tran Duc Bo";
    var callback = () => api.sendMessage({body:`Name: ${name}` + `\nPersonal URL: ${url}` + `\n💦User name: ${sn}\nUID: ${mentions}\nSex: ${gender}\nMake friends with bots: ${b}`,attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.png"),event.messageID);   
       return request(encodeURI(`https://graph.facebook.com/${mentions}/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
    }
    else {
    let data = await api.getUserInfo(args[1]);
    let url = data[args[1]].profileUrl;
    let b = data[args[1]].isFriend == false ? "are not !" : data[args[1]].isFriend == true ? "yes!" : "Damn";
    let sn = data[args[1]].vanity;
    let name = await data[args[1]].name;
    var sex = await data[args[1]].gender;
    var gender = sex == 2 ? "Name" : sex == 1 ? "Female" : "Tran Duc Bo";
    var callback = () => api.sendMessage({body:`Name: ${name}` + `\nPersonal URL: ${url}` + `\nUser name: ${sn}\nUID: ${args[1]}\nGender: ${gender}\nMake friends with bots: ${b}`,attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.png"),event.messageID);   
       return request(encodeURI(`https://graph.facebook.com/${args[1]}/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
    }
     }
     }
      }))+_0x1a9e84[_0x460744(0x2a1)][_0x460744(0x227)]+(_0x460744(0x260)+_0x460744(0x284)+_0x460744(0x24b))+_0x5bdd18+_0x460744(0x226)+_0x5d427b+(_0x460744(0x1dc)+_0x460744(0x2af)+_0x460744(0x229)+':\x20')+_0x1a9e84[_0x460744(0x1e3)+'nt']+'.',_0x5c5000[_0x460744(0x239)],_0x5c5000[_0x460744(0x1d8)]);else var _0x57a831=()=>_0x3bb3a1[_0x460744(0x266)+'e']({'body':_0x460744(0x1e6)+':\x20'+_0x1a9e84[_0x460744(0x20a)]+_0x460744(0x272)+_0x5c5000[_0x460744(0x239)]+_0x460744(0x253)+_0x51f64c+_0x460744(0x285)+_0x1a9e84[_0x460744(0x1ea)]+(_0x460744(0x22b)+_0x460744(0x1ff))+_0x1a9e84[_0x460744(0x1eb)+_0x460744(0x271)][_0x460744(0x227)]+(_0x460744(0x1d9)+_0x460744(0x1fe))+_0x1a9e84[_0x460744(0x2a1)][_0x460744(0x227)]+(_0x460744(0x260)+_0x460744(0x284)+_0x460744(0x24b))+_0x5bdd18+_0x460744(0x226)+_0x5d427b+(_0x460744(0x29c)+_0x460744(0x287)+_0x460744(0x22a)+_0x460744(0x21a))+_0x1a9e84[_0x460744(0x1e3)+'nt']+'.','attachment':_0x1ac3ed[_0x460744(0x24d)+_0x460744(0x1dd)](__dirname+(_0x460744(0x295)+'ng'))},_0x5c5000[_0x460744(0x239)],()=>_0x1ac3ed[_0x460744(0x29a)](__dirname+(_0x460744(0x295)+'ng')),_0x5c5000[_0x460744(0x1d8)]);return _0x72120d[_0x460744(0x25c)](_0xe01f37,_0x72120d[_0x460744(0x264)](encodeURI,''+_0x1a9e84[_0x460744(0x1d7)]))[_0x460744(0x205)](_0x1ac3ed[_0x460744(0x204)+_0x460744(0x1ed)](_0x72120d[_0x460744(0x1e2)](__dirname,_0x72120d[_0x460744(0x22e)])))['on'](_0x72120d[_0x460744(0x1d5)],()=>_0x57a831());}if(_0x72120d[_0x460744(0x23a)](_0x190c64[_0x460744(0x227)],-0x19ed*0x1+-0xf3*0x7+0x2092))return _0x3bb3a1[_0x460744(0x266)+'e'](_0x460744(0x278)+_0x460744(0x220)+_0x3c5a1a+this[_0x460744(0x276)][_0x460744(0x23c)]+(_0x460744(0x265)+_0x460744(0x27c)+_0x460744(0x257)+_0x460744(0x277)+_0x460744(0x22f))+_0x3c5a1a+this[_0x460744(0x276)][_0x460744(0x23c)]+(_0x460744(0x2b2)+_0x460744(0x235)+_0x460744(0x1f3)+_0x460744(0x296)+_0x460744(0x20e)+_0x460744(0x2ac)+_0x460744(0x224))+_0x3c5a1a+this[_0x460744(0x276)][_0x460744(0x23c)]+(_0x460744(0x293)+_0x460744(0x282)+_0x460744(0x237)+_0x460744(0x23f)+_0x460744(0x240)+_0x460744(0x1f1)+_0x460744(0x23e)+_0x460744(0x263)+'\x0a\x0a')+_0x3c5a1a+this[_0x460744(0x276)][_0x460744(0x23c)]+(_0x460744(0x200)+_0x460744(0x28f)+'d]'),_0x5c5000[_0x460744(0x239)],_0x5c5000[_0x460744(0x1d8)]);if(_0x72120d[_0x460744(0x28a)](_0x190c64[0x7e6+-0x640+-0x1a6],_0x72120d[_0x460744(0x242)])){var _0x57a831=()=>_0x3bb3a1[_0x460744(0x266)+'e']({'body':_0x460744(0x279)+_0x460744(0x209)+_0x460744(0x280)+_0x460744(0x26f)+_0x460744(0x298)+_0x460744(0x275)+_0x460744(0x1ce)+_0x460744(0x1fa)+_0x460744(0x299)+_0x460744(0x24e)+_0x460744(0x216)+_0x460744(0x26b)+_0x460744(0x29f)+global[_0x460744(0x276)][_0x460744(0x2ad)]+_0x460744(0x222),'attachment':_0x1ac3ed[_0x460744(0x24d)+_0x460744(0x1dd)](__dirname+(_0x460744(0x295)+'ng'))},_0x5c5000[_0x460744(0x239)],()=>_0x1ac3ed[_0x460744(0x29a)](__dirname+(_0x460744(0x295)+'ng')));return _0x72120d[_0x460744(0x27b)](_0xe01f37,_0x72120d[_0x460744(0x264)](encodeURI,_0x460744(0x22c)+_0x460744(0x2b1)+_0x460744(0x251)+_0x460744(0x2b5)+_0x460744(0x1f9)+_0x460744(0x27a)))[_0x460744(0x205)](_0x1ac3ed[_0x460744(0x204)+_0x460744(0x1ed)](_0x72120d[_0x460744(0x1e2)](__dirname,_0x72120d[_0x460744(0x22e)])))['on'](_0x72120d[_0x460744(0x1d5)],()=>_0x57a831());};if(_0x72120d[_0x460744(0x21c)](_0x190c64[0x18b1+0x118*0x16+-0x1*0x30c1],_0x72120d[_0x460744(0x208)])){if(!_0x190c64[0x254+-0x209e+0x1e4b]){if(_0x72120d[_0x460744(0x1d0)](_0x5c5000[_0x460744(0x20c)],_0x72120d[_0x460744(0x238)]))id=_0x5c5000[_0x460744(0x1fc)+'ly'][_0x460744(0x1e9)];else id=_0x5c5000[_0x460744(0x1e9)];let _0x9d0c23=await _0x3bb3a1[_0x460744(0x230)+'o'](id),_0x2c9dda=_0x9d0c23[id][_0x460744(0x243)],_0x48d4e3=_0x72120d[_0x460744(0x211)](_0x9d0c23[id][_0x460744(0x201)],![])?_0x72120d[_0x460744(0x292)]:_0x72120d[_0x460744(0x27e)](_0x9d0c23[id][_0x460744(0x201)],!![])?_0x72120d[_0x460744(0x215)]:_0x72120d[_0x460744(0x297)],_0x3a54e9=_0x9d0c23[id][_0x460744(0x23b)],_0x1449ea=await _0x9d0c23[id][_0x460744(0x23c)];var _0x592253=await _0x9d0c23[id][_0x460744(0x2a5)],_0x15f7f2=_0x72120d[_0x460744(0x1d4)](_0x592253,0x1*-0x3c5+-0xf1a+0xb3*0x1b)?_0x72120d[_0x460744(0x248)]:_0x72120d[_0x460744(0x288)](_0x592253,-0x2*0x12df+0xa03*-0x1+0x2fc2)?_0x72120d[_0x460744(0x1df)]:_0x72120d[_0x460744(0x2a4)],_0x57a831=()=>_0x3bb3a1[_0x460744(0x266)+'e']({'body':_0x460744(0x28d)+_0x1449ea+(_0x460744(0x231)+'\x20'+_0x2c9dda)+(_0x460744(0x249)+':\x20'+_0x3a54e9+_0x460744(0x212)+id+_0x460744(0x254)+_0x15f7f2+(_0x460744(0x2a3)+_0x460744(0x1f4)+_0x460744(0x259))+_0x48d4e3),'attachment':_0x1ac3ed[_0x460744(0x24d)+_0x460744(0x1dd)](__dirname+(_0x460744(0x295)+'ng'))},_0x5c5000[_0x460744(0x239)],()=>_0x1ac3ed[_0x460744(0x29a)](__dirname+(_0x460744(0x295)+'ng')),_0x5c5000[_0x460744(0x1d8)]);return _0x72120d[_0x460744(0x25c)](_0xe01f37,_0x72120d[_0x460744(0x256)](encodeURI,_0x460744(0x213)+_0x460744(0x25b)+_0x460744(0x23d)+id+(_0x460744(0x214)+_0x460744(0x26e)+_0x460744(0x24c)+_0x460744(0x203)+_0x460744(0x1f7)+_0x460744(0x1d3)+_0x460744(0x2ae)+_0x460744(0x247)+_0x460744(0x20b))))[_0x460744(0x205)](_0x1ac3ed[_0x460744(0x204)+_0x460744(0x1ed)](_0x72120d[_0x460744(0x1e2)](__dirname,_0x72120d[_0x460744(0x22e)])))['on'](_0x72120d[_0x460744(0x1d5)],()=>_0x57a831());}else{if(_0x72120d[_0x460744(0x1ef)](_0x190c64[_0x460744(0x241)]()[_0x460744(0x20d)]('@'),-(-0xa10+-0x3b*0x36+0x1683))){var _0x4a3f19=Object[_0x460744(0x21b)](_0x5c5000[_0x460744(0x1da)]);let _0x53a645=await _0x3bb3a1[_0x460744(0x230)+'o'](_0x4a3f19),_0x36ca52=_0x53a645[_0x4a3f19][_0x460744(0x243)],_0x225efa=_0x72120d[_0x460744(0x234)](_0x53a645[_0x4a3f19][_0x460744(0x201)],![])?_0x72120d[_0x460744(0x292)]:_0x72120d[_0x460744(0x1e0)](_0x53a645[_0x4a3f19][_0x460744(0x201)],!![])?_0x72120d[_0x460744(0x21d)]:_0x72120d[_0x460744(0x258)],_0x6c06b9=_0x53a645[_0x4a3f19][_0x460744(0x23b)],_0x164bc1=await _0x53a645[_0x4a3f19][_0x460744(0x23c)];var _0x592253=await _0x53a645[_0x4a3f19][_0x460744(0x2a5)],_0x15f7f2=_0x72120d[_0x460744(0x20f)](_0x592253,0x19f5+0x1f7*-0x5+-0x1020)?_0x72120d[_0x460744(0x248)]:_0x72120d[_0x460744(0x29b)](_0x592253,-0x7eb*0x1+-0x1569+0x1d55)?_0x72120d[_0x460744(0x1df)]:_0x72120d[_0x460744(0x2a4)],_0x57a831=()=>_0x3bb3a1[_0x460744(0x266)+'e']({'body':_0x460744(0x28d)+_0x164bc1+(_0x460744(0x1d1)+_0x460744(0x221)+_0x36ca52)+(_0x460744(0x2a6)+_0x460744(0x29e)+_0x6c06b9+_0x460744(0x212)+_0x4a3f19+_0x460744(0x218)+_0x15f7f2+(_0x460744(0x2a3)+_0x460744(0x1f4)+_0x460744(0x259))+_0x225efa),'attachment':_0x1ac3ed[_0x460744(0x24d)+_0x460744(0x1dd)](__dirname+(_0x460744(0x295)+'ng'))},_0x5c5000[_0x460744(0x239)],()=>_0x1ac3ed[_0x460744(0x29a)](__dirname+(_0x460744(0x295)+'ng')),_0x5c5000[_0x460744(0x1d8)]);return _0x72120d[_0x460744(0x261)](_0xe01f37,_0x72120d[_0x460744(0x264)](encodeURI,_0x460744(0x213)+_0x460744(0x25b)+_0x460744(0x23d)+_0x4a3f19+(_0x460744(0x214)+_0x460744(0x26e)+_0x460744(0x24c)+_0x460744(0x203)+_0x460744(0x1f7)+_0x460744(0x1d3)+_0x460744(0x2ae)+_0x460744(0x247)+_0x460744(0x20b))))[_0x460744(0x205)](_0x1ac3ed[_0x460744(0x204)+_0x460744(0x1ed)](_0x72120d[_0x460744(0x28c)](__dirname,_0x72120d[_0x460744(0x22e)])))['on'](_0x72120d[_0x460744(0x1d5)],()=>_0x57a831());}else{let _0x24e719=await _0x3bb3a1[_0x460744(0x230)+'o'](_0x190c64[-0x22f8+0x36f*0x5+0x11ce]),_0x3d8d88=_0x24e719[_0x190c64[-0x6*-0x476+0x3*0x62a+-0x2d41]][_0x460744(0x243)],_0x2b5f66=_0x72120d[_0x460744(0x26c)](_0x24e719[_0x190c64[-0x1be2+0x1*-0x110f+0x2cf2]][_0x460744(0x201)],![])?_0x72120d[_0x460744(0x292)]:_0x72120d[_0x460744(0x289)](_0x24e719[_0x190c64[0xfb4+-0x746+-0x86d]][_0x460744(0x201)],!![])?_0x72120d[_0x460744(0x21d)]:_0x72120d[_0x460744(0x297)],_0x198c5f=_0x24e719[_0x190c64[-0x2669+0x5*-0x567+-0x15cf*-0x3]][_0x460744(0x23b)],_0xca4507=await _0x24e719[_0x190c64[0x1*0x18a3+-0x1166+-0x2*0x39e]][_0x460744(0x23c)];var _0x592253=await _0x24e719[_0x190c64[0x84a+0x17*-0xc9+0x9c6]][_0x460744(0x2a5)],_0x15f7f2=_0x72120d[_0x460744(0x29b)](_0x592253,-0x1*0x9eb+0x1d0b+-0x131e)?_0x72120d[_0x460744(0x28e)]:_0x72120d[_0x460744(0x2ab)](_0x592253,-0x2d*-0x74+-0x291*-0x2+-0x1985)?_0x72120d[_0x460744(0x1df)]:_0x72120d[_0x460744(0x2a4)],_0x57a831=()=>_0x3bb3a1[_0x460744(0x266)+'e']({'body':_0x460744(0x28d)+_0xca4507+(_0x460744(0x1d1)+_0x460744(0x221)+_0x3d8d88)+(_0x460744(0x249)+':\x20'+_0x198c5f+_0x460744(0x212)+_0x190c64[0x12bf+0x16b6+-0x2974]+_0x460744(0x254)+_0x15f7f2+(_0x460744(0x2a3)+_0x460744(0x1f4)+_0x460744(0x259))+_0x2b5f66),'attachment':_0x1ac3ed[_0x460744(0x24d)+_0x460744(0x1dd)](__dirname+(_0x460744(0x295)+'ng'))},_0x5c5000[_0x460744(0x239)],()=>_0x1ac3ed[_0x460744(0x29a)](__dirname+(_0x460744(0x295)+'ng')),_0x5c5000[_0x460744(0x1d8)]);return _0x72120d[_0x460744(0x1e5)](_0xe01f37,_0x72120d[_0x460744(0x27b)](encodeURI,_0x460744(0x213)+_0x460744(0x25b)+_0x460744(0x23d)+_0x190c64[-0x203*-0x7+-0xde9+-0x1*0x2b]+(_0x460744(0x214)+_0x460744(0x26e)+_0x460744(0x24c)+_0x460744(0x203)+_0x460744(0x1f7)+_0x460744(0x1d3)+_0x460744(0x2ae)+_0x460744(0x247)+_0x460744(0x20b))))[_0x460744(0x205)](_0x1ac3ed[_0x460744(0x204)+_0x460744(0x1ed)](_0x72120d[_0x460744(0x28c)](__dirname,_0x72120d[_0x460744(0x22e)])))['on'](_0x72120d[_0x460744(0x1d5)],()=>_0x57a831());}}}});function _0x4954(_0x3b163e,_0x2178d4){var _0x3cbd74=_0x4394();return _0x4954=function(_0x163950,_0x424388){_0x163950=_0x163950-(0xb5*0x17+0x20dd+0xe9*-0x34);var _0x53a764=_0x3cbd74[_0x163950];return _0x53a764;},_0x4954(_0x3b163e,_0x2178d4);}function _0x4394(){var _0x170a16=['www.facebo','d.:\x0a\x0a','AUhxI','\x0aPersonal\x20','ApJOo','379%7Cc1e6','QclOi','pPgGp','approvalMo','imageSrc','messageID','\x20members\x20a','mentions','ill\x20get\x20fr','\x20nữ.\x0a»Tota','Stream','10ILuMUI','nxiOl','LkzBA','Tran\x20Duc\x20B','tnVMS','messageCou','Mirai\x20Team','VfrCR','Group\x20name','admin','INNke','senderID','emoji','participan','luding\x20','eStream','Media','oWYnv','Admin\x20Bot\x27','f\x20members,','gYylG','ill\x20get\x20th','nds\x20with\x20b','adbot','are\x20not\x20!','en=6628568','Damn','221203-202','ok.com/HEY','nodemodule','messageRep','Male','nd\x20','on:\x20\x0a»','\x20user\x20box\x20','isFriend','request','access_tok','createWrit','pipe','push','\x20admin\x20=>\x20','mKhLl','BOT«———\x0a❯\x20','threadName','1bde5662','type','indexOf','ion\x20of\x20the','MrAvU','Turn\x20off','FBicl','\x0aUID:\x20','https://gr','/picture?h','sXStK','B26\x0a❯\x20Than','Name','\x0aSex:\x20','Cqyri','ages:\x20','keys','VQmOT','VsPEj','.\x0a\x0a','hasOwnProp','e:\x0a\x0a','URL:\x20','\x20bot','746814ThpbaO','u\x20tag.\x0a\x0a','getThreadI','\x20boy\x20and\x20','length','1887608kfpujb','f\x20messages','er\x20of\x20mess','\x0aInformati','https://i.','bCUDB','Sktbr','n.\x0a\x0a','getUserInf','\x0aUser\x20url:','on.\x0a\x0a','ply','wNgGL','g]\x20=>\x20it\x20w','message_re','your\x20box\x20i','lGLgp','threadID','GWJmk','vanity','name','ok.com/','\x20djt\x20each\x20','nformation','\x20(number\x20o','join','VeyYo','profileUrl','MALE','MJWLX','turn\x20on','5696fb991c','ZiXeY','\x0aUser\x20name','Female','cluding\x20','width=720&','createRead','MANTO.SAKI','t\x20will\x20tak','15236BecDbJ','/y8Ky03ZQ/','s\x20Personal','\x0aBrowser:\x20','\x0aGender:\x20','\x0aApproved:','evTpB','\x20your\x20own\x20','dtLqZ','ots:\x20','Yes\x20!','aph.facebo','gnZAC','Dammit','run','administra','\x20administr','jzJrQ','user','other,...)','cOvyN','\x20user\x20=>\x20i','sendMessag','tors.\x0a»Inc','45444geVyuJ','on]','iend\x20infor','ks\x20for\x20usi','GDrGo','1.0.0','eight=720&','B\x20S1M4NT0\x0a','e\x20your\x20own','tIDs','\x0aTID:\x20','425MqpDNi','yes!',':\x20https://','config','informatio','You\x20can\x20us','———»ADMIN\x20','726566.jpg','kJoMI','t\x20will\x20get','\x20Informati','JKjwB','fs-extra','Name:\x20S4K1','iYquS','\x20will\x20get\x20','get','ators.\x0a»In','\x0aEmoji:\x20','191502WqpyMY','Total\x20numb','eiIXW','HAZmo','NsREm','RHNol','saYhb','Name:\x20','TFMaa','[uid\x20||\x20ti','nfo','2840257jEQxug','jixPZ','\x20box\x20=>\x20it','box','/cache/1.p','e\x20informat','NaCjI','❯\x20Facebook','.ITZ.ME.SI','unlinkSync','UcohE','\x20female.\x0a»','PREFIX','e:\x20','ng\x20','threadData','adminIDs','close','\x0aMake\x20frie','xlUuj','gender','\x0a💦User\x20nam','exports','userInfo','9qrFypH','14360750uExBRt','hAWqf','\x20person\x20yo','BOTNAME','20fa708a1d','l\x20number\x20o','erty','postimg.cc','\x20user\x20@[Ta','\x20informati','mation\x20tag','In-Shot-20','data','ESigp'];_0x4394=function(){return _0x170a16;};return _0x4394();}