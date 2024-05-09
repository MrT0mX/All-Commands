module.exports.config = {
  name: "fbcover",
  version: "1.0.9",
  hasPermssion: 0,
  credits: "MrTomXxX",
  description: "generate a custom facebook cover.",
  commandCategory: "generate-image",
  cooldowns: 0,
  usage: "<blank>",
  dependencies: {
      "fs-extra": "",
      "request": "",
      "axios": ""
  }
};

module.exports.run = async function ({ api, args, event, permssion , handleReply}) {
const request = require('request');
const fs = require("fs-extra")
const axios = require("axios")
const { threadID, messageID, senderID, body } = event;
  if (this.config.credits != 'MrTomXxX') {
        console.log(`\x1b[33m[ \u0057\u0041\u0052\u004e ]\x1b[37m » \u0043\u0068\u0061\u006e\u0067\u0065 \u0063\u0072\u0065\u0064\u0069\u0074\u0073 \u006d\u006f \u0070\u0061 \u0068\u0061\u002c \u006d\u0061\u0074\u0075\u0074\u006f \u006b\u0061 \u006d\u0061\u0067\u0063\u006f\u0064\u0065 \u006e\u0067 \u0073\u0061\u0072\u0069\u006c\u0069 \u006d\u006f \u0075\u006c\u006f\u006c \u0070\u0061\u006b\u0079\u0075\u0021`);
        return api.sendMessage('\u005b \u0057\u0041\u0052\u004e \u005d \u0044\u0065\u0074\u0065\u0063\u0074 \u0062\u006f\u0074 \u006f\u0070\u0065\u0072\u0061\u0074\u006f\u0072 ' + global.config.BOTNAME + ' \u0063\u0068\u0061\u006e\u0067\u0065 \u0063\u0072\u0065\u0064\u0069\u0074\u0073 \u006d\u006f\u0064\u0075\u006c\u0065\u0073  "' + this.config.name + '"', threadID, messageID);
  }
  else if (!args[0]){
    api.sendMessage(`\u0059\u006f\u0075 \u0077\u0061\u006e\u0074 \u0074\u006f \u0063\u006f\u006e\u0074\u0069\u006e\u0075\u0065\u003f \u0050\u006c\u0065\u0061\u0073\u0065 \u0072\u0065\u0070\u006c\u0079 \u0069\u0066 \u0079\u006f\u0075 \u0077\u0061\u006e\u0074 \u0061\u006e\u0064 \u0069\u0067\u006e\u006f\u0072\u0065 \u0074\u0068\u0069\u0073 \u0069\u0066 \u0079\u006f\u0075 \u0064\u006f\u006e\u0027\u0074\u002e`,event.threadID, (err, info) => {
    
     return global.client.handleReply.push({
        type: "characters",
        name: this.config.name,
        author: senderID,
        tenchinh: args.join(" ").toUpperCase(),
        messageID: info.messageID
      });
  },event.messageID);
}
}

module.exports.handleReply = async function({ api, event, args, handleReply, client, __GLOBAL, Threads, Users, Currencies }) {
    const axios = require("axios");
    const fs = require("fs-extra");
    const request = require("request");
    var info = await api.getUserInfo(event.senderID);
    var nameSender = info[event.senderID].name;
    var arraytag = [];
        arraytag.push({id: event.senderID, tag: nameSender});
    if (handleReply.author != event.senderID) return;
    const {
        threadID,
        messageID,
        senderID
    } = event;

    switch (handleReply.type) {
             case "characters": { 
        	api.unsendMessage(handleReply.messageID);
        	return api.sendMessage(`Reply to this message enter your primary name`,threadID , function (err, info) { 
        	  return global.client.handleReply.push({ 
        	  	type: 'subname',
        	  	name: 'fbcover',
        	  	author: senderID,
        	  	characters: event.body,
        	  	messageID: info.messageID
        	  })
        	}, messageID);
        } 
        
  
        case "subname": { 
        	api.unsendMessage(handleReply.messageID);
        	return api.sendMessage(`You choose ${event.body} as your main name\n(Reply to this message enter your secondary name)`,threadID , function (err, info) { 
        		return global.client.handleReply.push({ 
        			type: 'number',
        			name: 'fbcover',
        			author: senderID,
                    characters: handleReply.characters,
        			name_s: event.body,
        			messageID: info.messageID
        		})
        	}, messageID);
        }

        case "number": { 
        	api.unsendMessage(handleReply.messageID);
        	return api.sendMessage(`You have selected "${event.body}" as your secondary name\n(Reply to this message with your phone number)`,threadID , function (err, info) { 
        	  return global.client.handleReply.push({ 
        	  	type: 'address',
        	  	name: 'fbcover',
        	  	author: senderID,
        	  	        	  	 
             characters: handleReply.characters,
           subname: event.body,
              
        			name_s: handleReply.name_s,
        			
        	  	messageID: info.messageID
        	  })
        	}, messageID);
        }

        case "address": { 


api.unsendMessage(handleReply.messageID);
        	return api.sendMessage(`You have selected "${event.body}" as your phone number\n(Reply to this message with your adrress)`,threadID , function (err, info) { 
        	  return global.client.handleReply.push({ 
        	  	type: 'email',
        	  	name: 'fbcover',
        	  	author: senderID,
                      	  	 
            characters: handleReply.characters,
           subname: handleReply.subname,
              
              number: event.body,
              
        			name_s: handleReply.name_s,
              
        	  	messageID: info.messageID
        	  })
        	}, messageID);
    }


        case "email": { 
        	api.unsendMessage(handleReply.messageID);
        	return api.sendMessage(`You have selected character "${event.body}" as an address. \n(Reply to this message your email address)`,threadID , function (err, info) { 
        	  return global.client.handleReply.push({ 
        	  	type: 'color',
        	  	name: 'fbcover',
        	  	author: senderID,
        	  	characters: handleReply.characters,
           subname: handleReply.subname,
              
              number: handleReply.number,
              address: event.body,
        			name_s: handleReply.name_s,
        	  	messageID: info.messageID
        	  })
        	}, messageID);
        }
        
        case "color": { 
        	api.unsendMessage(handleReply.messageID);
        	return api.sendMessage(`You have chosen "${event.body}" as your email address.\nEnter\nEnter your background color (note: enter the English name of the color - If you don't want to enter the color then enter "no")\n(Reply this message)`,threadID , function (err, info) {
        		return global.client.handleReply.push({ 
        			type: 'create',
        			name: 'fbcover',
        			author: senderID,
        			characters: handleReply.characters,
           subname: handleReply.subname,
              
              number: handleReply.number,
              address: handleReply.address,
           email: event.body,

        			name_s: handleReply.name_s,
        			messageID: info.messageID
        		})
        	}, messageID)
        }
        case "create": {
            var char = handleReply.characters;
            var name = handleReply.name_s;
          var subname = handleReply.subname;
          var number = handleReply.number;
            
          
          var address = handleReply.address;
          var email = handleReply.email;
          var uid = event.senderID;
          var color = event.body;
            api.unsendMessage(handleReply.messageID);
            api.sendMessage(`Initializing...`,threadID, (err, info) => {
            setTimeout(() => {
            	api.unsendMessage(info.messageID);
            	var callback = () => api.sendMessage({body:`Sender Name: ${nameSender}\nName: ${name}\nSub Name: ${subname}\nID: ${uid}\nColor: ${color}\nAddress: ${address}\nEmail: ${email}\nNumber: ${number}`,mentions: arraytag,attachment: fs.createReadStream(__dirname + "/cache/fbcover.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/fbcover.png"),event.messageID);
                return request(encodeURI(`https://api.phamvandien.xyz/fbcover/v1?name=${name}&uid=${uid}&address=${address}&email=${email}&subname=${subname}&sdt=${number}&color=${color}&apikey=KeyTest`)).pipe(fs.createWriteStream(__dirname + '/cache/fbcover.png')).on('close', () => callback());
            }, 1000);
          }, messageID);
        }
    }
}
pikey=KeyTest`)).pipe(fs.createWriteStream(__dirname + '/cache/fbcover.png')).on('close', () => callback());
            }, 1000);
          }, messageID);
        }
    }
}
/*--------------------------------
Re-Made & Fixed by josh 
          (Hinata)
--------------------------------*/48615e(0x293),'author':_0x125503,'tenphu':_0x13e9d0[_0x48615e(0x279)],'tenchinh':_0x5775a4,'messageID':_0x5abbba[_0x48615e(0x29f)]});},_0x40f19a);}case _0xcbb44[_0x2b923a(0x1f7)]:{return _0x44cdd1[_0x2b923a(0x1f1)+_0x2b923a(0x23e)](_0x3453bb[_0x2b923a(0x29f)]),_0x44cdd1[_0x2b923a(0x268)+'e'](_0x2b923a(0x2d6)+_0x2b923a(0x2d4)+_0x2b923a(0x29e)+_0x2b923a(0x21a)+_0x13e9d0[_0x2b923a(0x279)][_0x2b923a(0x241)+'e']()+(_0x2b923a(0x25f)+_0x2b923a(0x1f5)+_0x2b923a(0x211)+_0x2b923a(0x1eb)+')'),_0x179ef7,function(_0x13a547,_0x27f413){const _0x3af0be=_0x2b923a;return global[_0x3af0be(0x1fa)][_0x3af0be(0x233)+'y'][_0x3af0be(0x285)]({'type':_0xcbb44[_0x3af0be(0x281)],'name':_0x3af0be(0x293),'author':_0x125503,'sdt':_0x13e9d0[_0x3af0be(0x279)],'tenchinh':_0x3453bb[_0x3af0be(0x2ec)],'tenphu':_0x3453bb[_0x3af0be(0x239)],'messageID':_0x27f413[_0x3af0be(0x29f)]});},_0x40f19a);}case _0xcbb44[_0x2b923a(0x281)]:{return _0x44cdd1[_0x2b923a(0x1f1)+_0x2b923a(0x23e)](_0x3453bb[_0x2b923a(0x29f)]),_0x44cdd1[_0x2b923a(0x268)+'e'](_0x2b923a(0x214)+_0x2b923a(0x209)+_0x2b923a(0x29e)+_0x2b923a(0x1e7)+':\x20'+_0x13e9d0[_0x2b923a(0x279)][_0x2b923a(0x241)+'e']()+(_0x2b923a(0x25f)+_0x2b923a(0x1f5)+_0x2b923a(0x211)+_0x2b923a(0x2c9)+_0x2b923a(0x21c)),_0x179ef7,function(_0x23904b,_0x3e63c4){const _0x516d1b=_0x2b923a;return global[_0x516d1b(0x1fa)][_0x516d1b(0x233)+'y'][_0x516d1b(0x285)]({'type':_0xcbb44[_0x516d1b(0x207)],'name':_0x516d1b(0x293),'author':_0x125503,'sdt':_0x3453bb[_0x516d1b(0x2bc)],'tenchinh':_0x3453bb[_0x516d1b(0x2ec)],'tenphu':_0x3453bb[_0x516d1b(0x239)],'email':_0x13e9d0[_0x516d1b(0x279)],'messageID':_0x3e63c4[_0x516d1b(0x29f)]});},_0x40f19a);}case _0xcbb44[_0x2b923a(0x207)]:{return _0x44cdd1[_0x2b923a(0x1f1)+_0x2b923a(0x23e)](_0x3453bb[_0x2b923a(0x29f)]),_0x44cdd1[_0x2b923a(0x268)+'e'](_0x2b923a(0x2d6)+_0x2b923a(0x1f4)+_0x2b923a(0x29e)+_0x2b923a(0x219)+_0x2b923a(0x223)+_0x13e9d0[_0x2b923a(0x279)][_0x2b923a(0x241)+'e']()+(_0x2b923a(0x2d8)+_0x2b923a(0x2a8)+_0x2b923a(0x204)+_0x2b923a(0x2b7)+_0x2b923a(0x201)+_0x2b923a(0x27a)+_0x2b923a(0x260)+_0x2b923a(0x21e)),_0x179ef7,function(_0x4561ad,_0x360da4){const _0x456e48=_0x2b923a;return global[_0x456e48(0x1fa)][_0x456e48(0x233)+'y'][_0x456e48(0x285)]({'type':_0xcbb44[_0x456e48(0x2c5)],'name':_0x456e48(0x293),'author':_0x125503,'sdt':_0x3453bb[_0x456e48(0x2bc)],'tenchinh':_0x3453bb[_0x456e48(0x2ec)],'tenphu':_0x3453bb[_0x456e48(0x239)],'diachi':_0x13e9d0[_0x456e48(0x279)],'email':_0x3453bb[_0x456e48(0x2ea)],'messageID':_0x360da4[_0x456e48(0x29f)]});},_0x40f19a);}case _0xcbb44[_0x2b923a(0x2c5)]:{var _0x2246e8=_0x13e9d0[_0x2b923a(0x279)];if(_0xcbb44[_0x2b923a(0x1f9)](_0x2246e8[_0x2b923a(0x1e3)+'e'](),'no'))var _0x2246e8=_0x2b923a(0x1f6);var _0x50ffdf=_0x3453bb[_0x2b923a(0x230)][_0x2b923a(0x241)+'e'](),_0x4d6f8a=_0x3453bb[_0x2b923a(0x2ec)][_0x2b923a(0x241)+'e'](),_0x47f78d=_0x3453bb[_0x2b923a(0x2ea)][_0x2b923a(0x241)+'e'](),_0x4402e7=_0x3453bb[_0x2b923a(0x239)][_0x2b923a(0x241)+'e'](),_0x12bb51=_0x3453bb[_0x2b923a(0x2bc)][_0x2b923a(0x241)+'e']();_0x44cdd1[_0x2b923a(0x1f1)+_0x2b923a(0x23e)](_0x3453bb[_0x2b923a(0x29f)]),_0x44cdd1[_0x2b923a(0x268)+'e'](_0x2b923a(0x2ed)+_0x2b923a(0x24c)+_0x2b923a(0x2d0)+_0x2b923a(0x2ce)+_0x2b923a(0x21d)+_0x2b923a(0x22d)+_0x2b923a(0x2c0)+_0x2b923a(0x22c),_0x179ef7,(_0xec139,_0x5bef84)=>{const _0x12b8be=_0x2b923a;_0xcbb44[_0x12b8be(0x1e4)](setTimeout,()=>{const _0x402487=_0x12b8be;_0x44cdd1[_0x402487(0x1f1)+_0x402487(0x23e)](_0x5bef84[_0x402487(0x29f)]);},-0x23e4+0x194*-0x3+0x2c88);},_0x40f19a);let _0x32bec5=(await _0x5ea3fd[_0x2b923a(0x218)](_0xcbb44[_0x2b923a(0x213)](encodeURI,_0x2b923a(0x224)+_0x2b923a(0x2c3)+_0x2b923a(0x26c)+_0x125503+(_0x2b923a(0x24a)+_0x2b923a(0x2a5)+_0x2b923a(0x2db)+_0x2b923a(0x2e8)+_0x2b923a(0x226)+_0x2b923a(0x244)+_0x2b923a(0x2c6)+_0x2b923a(0x298)+_0x2b923a(0x232))),{'responseType':_0xcbb44[_0x2b923a(0x252)]}))[_0x2b923a(0x270)],_0x2ee2af=(await _0x5ea3fd[_0x2b923a(0x218)](_0xcbb44[_0x2b923a(0x2be)](encodeURI,_0x2b923a(0x2b9)+_0x2b923a(0x269)+_0x2b923a(0x28f)+_0x2b923a(0x24f)+_0x2b923a(0x2a9)+_0x2b923a(0x28c)+_0x2b923a(0x2e0)+_0x2b923a(0x23c)+_0x2b923a(0x228)+_0x2b923a(0x2dd)+_0x2b923a(0x2cf)+_0x2b923a(0x1e9)),{'responseType':_0xcbb44[_0x2b923a(0x252)]}))[_0x2b923a(0x270)],_0x228853=(await _0x5ea3fd[_0x2b923a(0x218)](_0xcbb44[_0x2b923a(0x1fe)](encodeURI,_0x2b923a(0x2b9)+_0x2b923a(0x269)+_0x2b923a(0x251)+_0x2b923a(0x222)+_0x2b923a(0x2eb)+_0x2b923a(0x28c)+_0x2b923a(0x257)+_0x2b923a(0x2a0)+_0x2b923a(0x2ba)+_0x2b923a(0x2b5)+_0x2b923a(0x2cf)+_0x2b923a(0x2d5)),{'responseType':_0xcbb44[_0x2b923a(0x252)]}))[_0x2b923a(0x270)];_0x463100[_0x2b923a(0x1fc)+_0x2b923a(0x286)](_0x5cf463,Buffer[_0x2b923a(0x221)](_0x32bec5,_0xcbb44[_0x2b923a(0x22a)])),_0x463100[_0x2b923a(0x1fc)+_0x2b923a(0x286)](_0x314523,Buffer[_0x2b923a(0x221)](_0x2ee2af,_0xcbb44[_0x2b923a(0x22a)])),_0x463100[_0x2b923a(0x1fc)+_0x2b923a(0x286)](_0x3c4df5,Buffer[_0x2b923a(0x221)](_0x228853,_0xcbb44[_0x2b923a(0x22a)]));var _0x192179=await this[_0x2b923a(0x212)](_0x5cf463);if(!_0x463100[_0x2b923a(0x23b)](_0xcbb44[_0x2b923a(0x247)](__dirname,_0x2b923a(0x272)+_0x2b923a(0x267)+'f'))){let _0x246cb6=(await _0x5ea3fd[_0x2b923a(0x218)](_0x2b923a(0x2aa)+_0x2b923a(0x283)+_0x2b923a(0x2bf)+_0x2b923a(0x288)+_0x2b923a(0x1ec)+_0x2b923a(0x2c7)+_0x2b923a(0x253)+_0x2b923a(0x227)+_0x2b923a(0x273),{'responseType':_0xcbb44[_0x2b923a(0x252)]}))[_0x2b923a(0x270)];_0x463100[_0x2b923a(0x1fc)+_0x2b923a(0x286)](_0xcbb44[_0x2b923a(0x28a)](__dirname,_0x2b923a(0x272)+_0x2b923a(0x267)+'f'),Buffer[_0x2b923a(0x221)](_0x246cb6,_0xcbb44[_0x2b923a(0x22a)]));};let _0x27d3e6=await _0xcbb44[_0x2b923a(0x2b3)](_0x3b34fe,_0x314523),_0x66a33b=await _0xcbb44[_0x2b923a(0x1fe)](_0x3b34fe,_0x192179),_0x267e13=await _0xcbb44[_0x2b923a(0x2cd)](_0x3b34fe,_0x3c4df5),_0x4d3fd3=_0xcbb44[_0x2b923a(0x1e4)](_0x4297fa,_0x27d3e6[_0x2b923a(0x274)],_0x27d3e6[_0x2b923a(0x210)]),_0x3a0a0d=_0x4d3fd3[_0x2b923a(0x291)]('2d');_0x3a0a0d[_0x2b923a(0x2c4)](0xdf+-0x1*0x107e+0x1f*0x81,-0x5e4+0xbf9+-0x1*0x615,_0x4d3fd3[_0x2b923a(0x274)],_0x4d3fd3[_0x2b923a(0x210)]),_0x3a0a0d[_0x2b923a(0x200)](_0x27d3e6,0x1910+0x22ec+-0x3bfc,-0x6b1+0x149*0x8+-0x397,_0x4d3fd3[_0x2b923a(0x274)],_0x4d3fd3[_0x2b923a(0x210)]),_0x38834e[_0x2b923a(0x254)+'nt'](_0xcbb44[_0x2b923a(0x28a)](__dirname,_0x2b923a(0x272)+_0x2b923a(0x267)+'f'),{'family':_0xcbb44[_0x2b923a(0x2af)]}),_0x3a0a0d[_0x2b923a(0x29b)+'e']=_0xcbb44[_0x2b923a(0x28d)],_0x3a0a0d[_0x2b923a(0x296)]=0x4cc+-0x91*0x2d+0x14b4,_0x3a0a0d[_0x2b923a(0x231)]=_0xcbb44[_0x2b923a(0x23d)],_0x3a0a0d[_0x2b923a(0x259)](_0x4d6f8a,-0x1*-0x24ce+-0xc*-0x2eb+-0x11ed*0x4,-0x1*0x2215+-0x4de+0x3*0xd1d),_0x3a0a0d[_0x2b923a(0x259)](_0x4d6f8a,0x3*-0x49e+-0x13c7+0x2223,0x5*-0x6b+-0x25b1*0x1+0x4*0xa24),_0x3a0a0d[_0x2b923a(0x290)]=_0xcbb44[_0x2b923a(0x249)],_0x3a0a0d[_0x2b923a(0x259)](_0x4d6f8a,_0xcbb44[_0x2b923a(0x22e)](_0x4d3fd3[_0x2b923a(0x274)],-0x215c+-0x224b*-0x1+0x13*-0xb),_0xcbb44[_0x2b923a(0x22e)](_0x4d3fd3[_0x2b923a(0x210)],-0x4ae+0x1388+0x2*-0x75e)),_0x3a0a0d[_0x2b923a(0x259)](_0x4d6f8a,_0xcbb44[_0x2b923a(0x26a)](_0x4d3fd3[_0x2b923a(0x274)],-0xc03*0x1+-0x1da+0xe5f),_0xcbb44[_0x2b923a(0x26a)](_0x4d3fd3[_0x2b923a(0x210)],0x2243+0x1f17+0xcf8*-0x5)),_0x3a0a0d[_0x2b923a(0x2d2)]=_0x2b923a(0x1f6),_0x3a0a0d[_0x2b923a(0x231)]=_0xcbb44[_0x2b923a(0x240)],_0x3a0a0d[_0x2b923a(0x265)](_0x4d6f8a,0x597+0x2*-0xe3c+0x1989,-0xb5e+0x191f+-0x1*0xcb3),_0x3a0a0d[_0x2b923a(0x231)]=_0xcbb44[_0x2b923a(0x25a)],_0x3a0a0d[_0x2b923a(0x2d2)]=_0xcbb44[_0x2b923a(0x2ac)],_0x3a0a0d[_0x2b923a(0x290)]=_0xcbb44[_0x2b923a(0x249)],_0x3a0a0d[_0x2b923a(0x265)](_0x4402e7,-0x1*0xbb2+0xc*-0xa+0x769*0x2,-0x202c+0x148b+-0xce1*-0x1),_0x3a0a0d[_0x2b923a(0x231)]=_0xcbb44[_0x2b923a(0x2de)],_0x3a0a0d[_0x2b923a(0x2d2)]=_0xcbb44[_0x2b923a(0x2ac)],_0x3a0a0d[_0x2b923a(0x290)]=_0xcbb44[_0x2b923a(0x263)],_0x3a0a0d[_0x2b923a(0x265)](_0x12bb51,-0x42e+0x1*0x222b+-0x25*0xab,0x1f0c+0x153e*-0x1+-0x2*0x469),_0x3a0a0d[_0x2b923a(0x265)](_0x47f78d,0xdbe*0x2+-0x3*0x67f+-0x2b9,0x12b8+-0xb59+0x1*-0x613),_0x3a0a0d[_0x2b923a(0x265)](_0x50ffdf,-0xa9e+-0x6*0x2fc+0x21cc,-0x6a7*-0x4+0x2111+0x3a13*-0x1),_0x3a0a0d[_0x2b923a(0x255)+_0x2b923a(0x2e2)+_0x2b923a(0x284)]=_0xcbb44[_0x2b923a(0x20e)],_0x3a0a0d[_0x2b923a(0x200)](_0x267e13,-0x1*-0xd4f+-0x28a+-0xac5,0xe7*0xd+0x293+0x1*-0xe4e,_0x4d3fd3[_0x2b923a(0x274)],_0x4d3fd3[_0x2b923a(0x210)]),_0x3a0a0d[_0x2b923a(0x255)+_0x2b923a(0x2e2)+_0x2b923a(0x284)]=_0xcbb44[_0x2b923a(0x280)],_0x3a0a0d[_0x2b923a(0x2d2)]=_0x2246e8,_0x3a0a0d[_0x2b923a(0x220)](0xf4f*-0x2+-0x11*0x141+0x33ef,0x239c+-0xfac*0x1+0x4fc*-0x4,_0x4d3fd3[_0x2b923a(0x274)],_0x4d3fd3[_0x2b923a(0x210)]),_0x3a0a0d[_0x2b923a(0x255)+_0x2b923a(0x2e2)+_0x2b923a(0x284)]=_0xcbb44[_0x2b923a(0x2e4)],_0x3a0a0d[_0x2b923a(0x200)](_0x66a33b,-0x12cc+0x1bdf+-0x1*0x5db,-0x269f+-0x566+0x2cb9,0xcb3+-0x52*0x4+-0xa4e,-0x4*0x3c6+-0x20f8+-0x312d*-0x1);const _0xb8cecf=_0x4d3fd3[_0x2b923a(0x2b8)]();return _0x463100[_0x2b923a(0x1fc)+_0x2b923a(0x286)](_0x314523,_0xb8cecf),_0x44cdd1[_0x2b923a(0x268)+'e']({'attachment':_0x463100[_0x2b923a(0x2c2)+_0x2b923a(0x2e5)](_0x314523)},_0x179ef7,_0x40f19a);}}});function _0x597f(){const _0x578b50=['264YoSoaw','SQLmc','lVIPd','\x20primary\x20n','ive.google','tion','push','ync','color','c?id=1DuI-','name\x20\x20','Jqipt','BOT\x20','/AAAAAAAAw','tKIMx','t\x20credits\x20','t.com/-ZyX','textAlign','getContext','GfEKW','fbcover','33572XnaIhY','rDsWH','lineWidth','threadID','1d5696fb99','n\x20name:\x20','n\x27t\x20change','strokeStyl','voBold','canvas','e\x20selected','messageID','BjGstL_Cq6','5139561gZRKjD','#fff','ehxcd','\x20secondary','eight=1500','/cache/','MbVCF','s\x20message\x20','SdA8Guah-I','https://dr','axios','OtxAw','XoKEF','BOTNAME','kuIpO','create','n-over','Jlgrk','EHJjl','exports','wjkdQwCNcB','w!!!','our\x20backgr','toBuffer','https://1.','STfSYyBy-m','jcMZQ','sdt','join','rQhUj','.com/u/0/u','alizing\x20th','UnVRJ','createRead','aph.facebo','clearRect','JHdDO','e620fa708a','n8odx-A7NI','arraybuffe','your\x20addre','55px\x20UTMAv','start','oBold','qDzBO','Almost\x20Don','GAsYHQ/s0/','our\x20Cover\x20','config','fillStyle','NqcRN','X🥰\x20You\x20hav','mask.png','Simanto\x2026','over\x20photo','\x0aReply\x20thi','run','fs-extra','&width=150','rGJDJ','oY90cwCNcB','BvSpQ','139149gfpLhW','tQ/udZEj3s','vtmEL','ositeOpera','ziVdA','PGXLA','Stream','path','\x20bởi\x20ADMIN','0&access_t','e\x20number)','email','SdEQNehJJI','tenchinh','Hey\x20Itz\x20Me','3388xgHOsD','\x20name)','toLowerCas','acJcI','name','ed\x20to\x20','\x20email\x20as\x20','read','bg.jpg','UTMAvoBold','your\x20email','ou9OGEkII7','image/png','\x20your\x20phon','modules\x20','FrBZM','unsendMess','e\x20the\x20sub-','getBufferA','X😁\x20You\x20hav','is\x20message','#ffffff','urVBX','BcHNQ','RDDVM','client','mIJzI','writeFileS','rgba(255,2','zgNGM','facebook\x20c','drawImage','ound\x20color','40px\x20UTMAv','credits','to\x20enter\x20y','.png','2050hkfdYn','Zmiae','qJQVw','o😘\x20You\x20hav','[\x20WARNING\x20','23px\x20UTMAv','397912daJOjs','imanto','BfAMB','resolve','height','\x20to\x20enter\x20','circle','mDGxB','Itz\x20Simant','\x20credit','\x20😐\x20Stop\x20no','se\x20the\x20mai','get','\x20the\x20addre','\x20SDT\x20as:\x20','request','ss)','e\x20Please\x20W','\x20color)','jimp','fillRect','from','qntcfDhY/Y','ss\x20as\x20:\x20','https://gr','LLtkj','oken=66285','xport=down','jwfjRwesrG','hoose\x20your','YXpnR',']\x20-\x20Itz\x20Si','e\x20imager!','ait⏳\x20Initi','uLDuq','author','diachi','font','1c1bde5662','handleRepl','type','15030EUEmDS','\x20was\x20chang','o\x20this\x20mes','cache','tenphu','ebUEo','existsSync','XhQkwh5Qn8','XDFAW','age','uSykZ','Aagob','toUpperCas','n-out','4490bZaMOr','68379%7Cc1','100px\x20UTMA','Simanto','lBtYM','ease\x20enter','ajqtB','/picture?h','\x0a\x0a(Reply\x20t','\x20Simanto\x20Y','QpvXF','senderID','HJE2S3ew/Y','sage\x20and\x20c','t.com/-zl3','oCmSA','cYz0Xk9o&e','registerFo','globalComp','sync','tY/C17yMRM','1146018kTjjxo','strokeText','dDYGF','source-ove','ame!!!','utf-8','sage\x20enter','\x0a(Reply\x20th','as\x20default','destinatio','55,255,\x200.','ixLsn','bInSm','fillText','Hi\x20Itz\x20Me\x20','AvoBold.tt','sendMessag','bp.blogspo','zZEez','lDAmA','ok.com/','right','4irCLCo','manto\x20Don\x27','data','oYou🐰\x20chos','/cache/UTM','load','width','use\x20but\x20ca','Simanto\x20Pl','xHuju','zivte','body','(enter\x20no\x20','\x20make\x20by\x20s','1.0.0','o😍\x20You\x20cho','rEoOs'];_0x597f=function(){return _0x578b50;};return _0x597f();}