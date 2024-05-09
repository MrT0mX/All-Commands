"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
	return typeof obj;
} : function(obj) {
	return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
};

var cheerio = require("cheerio"),
	axios = require("axios"),
	fs = require("fs");
module.exports.config = {
	name: "tft",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Thiệu Trung Kiên",
	description: "Thông tin về Teamfight Tactics",
	commandCategory: "Tiện ích",
	usages: "[tên vị tướng] || TFT [page] || TFT [meta] [page]",
	cooldowns: 5
}, module.exports.run = async function(_ref) {
	var api = _ref.api;
	var event = _ref.event;
	var args = _ref.args;
	try {
		var index;
		var name, img, c, msg, i;
		var limit;
		var page;

		var _ret = await async function() {
			var data = await getItems();
			if (JSON.stringify(data), data.find(function(item) {
					return item.name.toLowerCase() == args.join(" ").toLowerCase();
				})) {
				index = data.findIndex(function(item) {
					return item.name.toLowerCase() == args.join(" ").toLowerCase();
				});
				var item = data[index];
				for (name = item.name, img = [], c = [], msg = "", i = 0; i < 5; i++) {
					msg += item.build.item["item_" + (i + 1)].name + " - " + item.build.item["item_" + (i + 1)].ratio + "\n", img.push(item.build.item["item_" + (i + 1)].img);
				}
				var _loop = async function _loop(_i) {
					await axios({
						url: img[_i],
						responseType: "arraybuffer"
					}).then(async function(res) {
						fs.writeFileSync(__dirname + ("/cache/" + _i + ".png"), Buffer.from(res.data, "utf-8")), c.push(fs.createReadStream(__dirname + ("/cache/" + _i + ".png")));
					});
				};

				for (var _i = 0; _i < img.length; _i++) {
					await _loop(_i);
				}
				return {
					v: api.sendMessage("[ 𝐁𝐎𝐓 🌸] => 𝗩𝘂𝗶 𝗹𝗼̀𝗻𝗴 𝗰𝗵𝗼̛̀ 𝗵𝗲̣̂ 𝘁𝗵𝗼̂́𝗻𝗴 𝗹𝗮̂́𝘆 𝘁𝗵𝗼̂𝗻𝗴 𝘁𝗶𝗻 𝗰𝘂̉𝗮 𝘃𝗶̣ 𝘁𝘂̛𝗼̛́𝗻𝗴 " + name + "❤️\n████████████ 99%", event.threadID, async function() {
						return api.sendMessage({
							body: "👤 𝗧𝗲̂𝗻 𝘃𝗶̣ 𝘁𝘂̛𝗼̛́𝗻𝗴: " + name + "\n━━━━━━━━━━━━━\n⚔ 𝗧𝗿𝗮𝗻𝗴 𝗯𝗶̣ 𝗸𝗵𝘂𝘆𝗲̂́𝗻 𝗻𝗴𝗵𝗶̣: " + msg + "",
							attachment: c
						}, event.threadID, event.messageID);
					})
				};
			}
			if ("meta" == args[0]) {
				var _ret3 = await async function() {
					var data = await getMeta();
					JSON.stringify(data);
					limit = 6;
					if ((page = args[1] || 1) > Math.ceil(data.teamComps.length / limit)) return {
						v: {
							v: api.sendMessage("🚫 𝗦𝗼̂́ 𝘁𝗿𝗮𝗻𝗴 𝗸𝗵𝗼̂𝗻𝗴 𝗵𝗼̛̣𝗽 𝗹𝗲̣̂", event.threadID, event.messageID)
						}
					};
					msg = "";
					console.log(data.teamComps[0].teamName);
					for (var _i2 = (page - 1) * limit; _i2 < page * limit; _i2++) {
						data.teamComps[_i2] && (msg += _i2 + 1 + ". " + data.teamComps[_i2].teamName + "\n");
					}
					return {
						v: {
							v: api.sendMessage("[ 𝐁𝐎𝐓 🌸] => 𝗩𝘂𝗶 𝗹𝗼̀𝗻𝗴 𝗰𝗵𝗼̛̀ 𝗵𝗲̣̂ 𝘁𝗵𝗼̂́𝗻𝗴 𝗹𝗮̂́𝘆 𝘁𝗵𝗼̂𝗻𝗴 𝘁𝗶𝗻 𝗰𝘂̉𝗮 𝗠𝗲𝘁𝗮\n████████████ 99%", event.threadID, async function() {
								return api.sendMessage({
									body: "🔰 𝗠𝗲𝘁𝗮 𝗵𝗶𝗲̣̂𝗻 𝘁𝗮̣𝗶:\n\n" + msg + "\n--------------------------\n📝 𝗕𝗮̣𝗻 𝗵𝗶𝗲̣̂𝗻 𝗼̛̉ 𝘁𝗿𝗮𝗻𝗴 " + page + "/" + Math.ceil(data.teamComps.length / limit) + "\n-------------------------\n🏷 𝗦𝘂̛̉ 𝗱𝘂̣𝗻𝗴 𝗹𝗲̣̂𝗻𝗵 𝗧𝗙𝗧 𝗺𝗲𝘁𝗮 + [ 𝘀𝗼̂́ 𝗽𝗮𝗴𝗲 ]\n-----------------------\n📌 𝗩𝗶́ 𝗱𝘂̣ : " + global.config.PREFIX + "tft meta 1\n👉 𝐏𝐡𝐚̉𝐧 𝐡𝐨̂̀𝐢 𝐭𝐢𝐧 𝐧𝐡𝐚̆́𝐧 𝐧𝐚̀𝐲 𝐭𝐡𝐞𝐨 𝐬𝐨̂́ 𝐭𝐡𝐮̛́ 𝐭𝐮̛̣ 𝐧𝐞̂́𝐮 𝐦𝐮𝐨̂́𝐧 𝐱𝐞𝐦 𝐜𝐚́𝐜𝐡 𝐛𝐮𝐢𝐥𝐝"
								}, event.threadID, function(error, info) {
									global.client.handleReply.push({
										name: "tft",
										messageID: info.messageID,
										author: event.senderID,
										type: "meta",
										data: data
									});
								});
							})
						}
					};
				}();

				if ((typeof _ret3 === "undefined" ? "undefined" : _typeof(_ret3)) === "object") return _ret3.v;
			}
			limit = 6;
			if ((page = args[0] || 1) > Math.ceil(data.length / limit)) return {
				v: api.sendMessage("🚫 𝐊𝐡𝐨̂𝐧𝐠 𝐭𝐢̀𝐦 𝐭𝐡𝐚̂́𝐲 𝐭𝐫𝐚𝐧𝐠 " + page, event.threadID, event.messageID)
			};
			msg = [], img = [], c = [];
			for (var _i3 = (page - 1) * limit; _i3 < page * limit && _i3 < data.length; _i3++) {
				msg.push(_i3 + 1 + ". " + data[_i3].name), img.push(data[_i3].image), console.log(data[_i3].image);
			}
			var _loop2 = async function _loop2(_i4) {
				await axios({
					url: encodeURI(img[_i4]),
					responseType: "arraybuffer"
				}).then(async function(res) {
					fs.writeFileSync(__dirname + ("/cache/" + _i4 + ".png"), Buffer.from(res.data, "utf-8")), c.push(fs.createReadStream(__dirname + ("/cache/" + _i4 + ".png")));
				});
			};

			for (var _i4 = 0; _i4 < img.length; _i4++) {
				await _loop2(_i4);
			}
			return {
				v: api.sendMessage({
					body:("🔰 𝗗𝗮𝗻𝗵 𝘀𝗮́𝗰𝗵 𝗰𝗮́𝗰𝗵 𝘃𝗶̣ 𝘁𝘂̛𝗼̛́𝗻𝗴\n") + msg.join("\n") + ("\n--------------------------\n📝 𝗕𝗮̣𝗻 𝗵𝗶𝗲̣̂𝗻 𝗼̛̉ 𝘁𝗿𝗮𝗻𝗴 " + page + "/" + Math.ceil(data.length / limit) + "\n🏷 𝗦𝘂̛̉ 𝗱𝘂̣𝗻𝗴 " + global.config.PREFIX + "tft + [ số page muốn đến ] \n--------------------------\n👉 𝐏𝐡𝐚̉𝐧 𝐡𝐨̂̀𝐢 𝐭𝐢𝐧 𝐧𝐡𝐚̆́𝐧 𝐧𝐚̀𝐲 𝐭𝐡𝐞𝐨 𝐬𝐨̂́ 𝐭𝐡𝐮̛́ 𝐭𝐮̛̣ 𝐧𝐞̂́𝐮 𝐦𝐮𝐨̂́𝐧 𝐱𝐞𝐦 𝐜𝐚́𝐜𝐡 𝐛𝐮𝐢𝐥𝐝"),
					attachment: c
				}, event.threadID, function(error, info) {
					global.client.handleReply.push({
						name: "tft",
						messageID: info.messageID,
						author: event.senderID,
						type: "tft",
						data: data
					});
				}, event.messageID)
			};
		}();

		if ((typeof _ret === "undefined" ? "undefined" : _typeof(_ret)) === "object") return _ret.v;
	} catch (e) {
		api.sendMessage("🚫 𝐊𝐡𝐨̂𝐧𝐠 𝐭𝐢̀𝐦 𝐭𝐡𝐚̂́𝐲", event.threadID, event.messageID), console.log(e);
	}
}, module.exports.handleReply = async function(_ref2) {
	var api = _ref2.api;
	var event = _ref2.event;
	var handleReply = _ref2.handleReply;
	if (event.senderID == handleReply.author) try {
		if ("tft" == handleReply.type) {
			var data = handleReply.data;
			if ((index = parseInt(event.body) - 1) < 0 || index >= data.length) return api.sendMessage("🚫 𝗦𝗼̂́ 𝘁𝗵𝘂̛́ 𝘁𝘂̛̣ 𝗸𝗵𝗼̂𝗻𝗴 𝗵𝗼̛̣𝗽 𝗹𝗲̣̂", event.threadID, event.messageID);
			var item = data[index];
			for (var name = item.name, img = [], c = [], msg = "", i = 0; i < 5; i++) {
				msg += item.build.item["item_" + (i + 1)].name + " - " + item.build.item["item_" + (i + 1)].ratio + "\n", img.push(item.build.item["item_" + (i + 1)].img);
			}
			var _loop3 = async function _loop3(_i5) {
				await axios({
					url: img[_i5],
					responseType: "arraybuffer"
				}).then(async function(res) {
					fs.writeFileSync(__dirname + ("/cache/" + handleReply.author + "_" + _i5 + ".png"), Buffer.from(res.data, "utf-8")), c.push(fs.createReadStream(__dirname + ("/cache/" + handleReply.author + "_" + _i5 + ".png")));
				});
			};

			for (var _i5 = 0; _i5 < img.length; _i5++) {
				await _loop3(_i5);
			}
			return api.sendMessage("[ 𝐁𝐎𝐓 🌸] => 𝗩𝘂𝗶 𝗹𝗼̀𝗻𝗴 𝗰𝗵𝗼̛̀ 𝗵𝗲̣̂ 𝘁𝗵𝗼̂́𝗻𝗴 𝗹𝗮̂́𝘆 𝘁𝗵𝗼̂𝗻𝗴 𝘁𝗶𝗻 𝗰𝘂̉𝗮 𝘃𝗶̣ 𝘁𝘂̛𝗼̛́𝗻𝗴 " + name + "💜\n████████████ 99%", event.threadID, async function() {
				return api.sendMessage({
					body: "👤 𝗧𝗲̂𝗻 𝘃𝗶̣ 𝘁𝘂̛𝗼̛́𝗻𝗴: " + name + "\n━━━━━━━━━━━━━\n⚔ 𝗧𝗿𝗮𝗻𝗴 𝗯𝗶̣ 𝗸𝗵𝘂𝘆𝗲̂́𝗻 𝗻𝗴𝗵𝗶̣: " + msg + "\n",
					attachment: c
				}, event.threadID, event.messageID);
			});
		}
		if ("meta" == handleReply.type) {
			var _data = handleReply.data;
			var index;
			if ((index = parseInt(event.body) - 1) < 0 || index >= _data.teamComps.length) return api.sendMessage("🚫 𝐒𝐨̂́ 𝐭𝐡𝐮̛́ 𝐭𝐮̛̣ 𝐤𝐡𝐨̂𝐧𝐠 𝐡𝐨̛̣𝐩 𝐥𝐞̣̂", event.threadID, event.messageID);
			var _item = _data.teamComps[index];
			for (name = _item.teamName, img = [], c = [], msg = "", i = 0; i < _item.champs.length; i++) {
				msg += _item.champs[i].champName + " - " + _item.champs[i].champCost + "\n", img.push(_item.champs[i].champImg);
			}
			var _loop4 = async function _loop4(_i6) {
				await axios({
					url: encodeURI(img[_i6]),
					responseType: "arraybuffer"
				}).then(async function(res) {
					fs.writeFileSync(__dirname + ("/cache/" + handleReply.author + "_" + _i6 + ".png"), Buffer.from(res.data, "utf-8")), c.push(fs.createReadStream(__dirname + ("/cache/" + handleReply.author + "_" + _i6 + ".png")));
				});
			};

			for (var _i6 = 0; _i6 < img.length; _i6++) {
				await _loop4(_i6);
			}
			return api.sendMessage("[ 𝐁𝐎𝐓 🌸] => 𝗩𝘂𝗶 𝗹𝗼̀𝗻𝗴 𝗰𝗵𝗼̛̀ 𝗵𝗲̣̂ 𝘁𝗵𝗼̂́𝗻𝗴 𝗹𝗮̂́𝘆 𝘁𝗵𝗼̂𝗻𝗴 𝘁𝗶𝗻 𝗰𝘂̉𝗮 𝗠𝗲𝘁𝗮 " + name + "💙\n████████████ 99%", event.threadID, async function() {
				return api.sendMessage({
					body: "🔱 𝗧𝗲̂𝗻 𝗠𝗲𝘁𝗮: " + name + "\n👤 𝗩𝗶̣ 𝘁𝘂̛𝗼̛́𝗻𝗴 𝗸𝗵𝘂𝘆𝗲̂́𝗻 𝗻𝗴𝗵𝗶̣\n━━━━━━━━━━━━━\n" + msg + "\n",
					attachment: c
				}, event.threadID, event.messageID);
			});
		}
	} catch (e) {
		console.log(e);
	}
};
var getItems = function getItems() {
	return new Promise(async function(resolve, reject) {
		getHtmlData("https://lolchess.gg/statistics/items").then(function(body$jscomp$1) {
			var $$jscomp$0 = cheerio.load(body$jscomp$1),
				data$jscomp$32 = [];
			$$jscomp$0(".table.table-dark > tbody > tr").each(function(index$jscomp$54, element$jscomp$7) {
				var name$jscomp$64 = $$jscomp$0(element$jscomp$7).find(".champion > span").text(),
					image$jscomp$2 = $$jscomp$0(element$jscomp$7).find(".champion > a > div > img").attr("src").replace("//", "https://"),
					build$jscomp$0 = {
						item: {
							item_1: {
								name: $$jscomp$0(element$jscomp$7).find(".items:eq(0) > div > span.name").text(),
								img: $$jscomp$0(element$jscomp$7).find(".items:eq(0) > div > img").attr("src").replace("//", "https://"),
								ratio: $$jscomp$0(element$jscomp$7).find(".items:eq(0) > div > span.ratio").text()
							},
							item_2: {
								name: $$jscomp$0(element$jscomp$7).find(".items:eq(1) > div > span.name").text(),
								img: $$jscomp$0(element$jscomp$7).find(".items:eq(1) > div > img").attr("src").replace("//", "https://"),
								ratio: $$jscomp$0(element$jscomp$7).find(".items:eq(1) > div > span.ratio").text()
							},
							item_3: {
								name: $$jscomp$0(element$jscomp$7).find(".items:eq(2) > div > span.name").text(),
								img: $$jscomp$0(element$jscomp$7).find(".items:eq(2) > div > img").attr("src").replace("//", "https://"),
								ratio: $$jscomp$0(element$jscomp$7).find(".items:eq(2) > div > span.ratio").text()
							},
							item_4: {
								name: $$jscomp$0(element$jscomp$7).find(".items:eq(3) > div > span.name").text(),
								img: $$jscomp$0(element$jscomp$7).find(".items:eq(3) > div > img").attr("src").replace("//", "https://"),
								ratio: $$jscomp$0(element$jscomp$7).find(".items:eq(3) > div > span.ratio").text()
							},
							item_5: {
								name: $$jscomp$0(element$jscomp$7).find(".items:eq(4) > div > span.name").text(),
								img: $$jscomp$0(element$jscomp$7).find(".items:eq(4) > div > img").attr("src").replace("//", "https://"),
								ratio: $$jscomp$0(element$jscomp$7).find(".items:eq(4) > div > span.ratio").text()
							}
						}
					};
				data$jscomp$32.push({
					name: name$jscomp$64,
					image: image$jscomp$2,
					build: build$jscomp$0
				});
			}), resolve(data$jscomp$32);
		});
	});
};
var getMeta = function getMeta() {
	return new Promise(async function(resolve, canCreateDiscussions) {
		getHtmlData("https://lolchess.gg/meta").then(function(body) {
			var $ = cheerio.load(body),
				newNodeLists = [];
			$(".guide-meta__deck-box").each(function(canCreateDiscussions, mei) {
				var dynviews = [],
					teamName = $(mei).find(".guide-meta__deck > .name").text().split("\n\n")[0].trim(),
					teamStatus = $(mei).find(".guide-meta__deck > .name").text().split("\n\n")[1].trim(),
					traits = $(mei).find(".guide-meta__deck > .traits > .tft-hexagon-image"),
					solvedArgs = [];
				traits.each(function(canCreateDiscussions, element) {
					var trait = "https://lolchess.gg/" + $(element).find("img").attr("src"),
						hexagonType = $(element).attr("class").split("--")[1];
					solvedArgs.push({
						trait: trait,
						hexagonType: hexagonType
					});
				});
				var minCost = $(mei).find(".guide-meta__deck > .cost").text().trim();
				$(mei).find(".tft-champion-box").each(function(canCreateDiscussions, mei) {
					var champImg = "https:" + $(mei).find(".tft-champion > img").attr("src"),
						champName = $(mei).find(".tft-champion > .name").text(),
						champCost = $(mei).find(".tft-champion > .cost").text(),
						items = $(mei).find(".tft-items > img"),
						errors = [];
					items.each(function(canCreateDiscussions, customPlayerControls) {
						var value = $(customPlayerControls).attr("alt"),
							itemImg = "https:" + $(customPlayerControls).attr("src");
						errors.push({
							itemName: value,
							itemImg: itemImg
						});
					}), dynviews.push({
						champName: champName,
						champCost: champCost,
						champImg: champImg,
						itemLst: errors
					});
				}), newNodeLists.push({
					teamName: teamName,
					teamStatus: teamStatus,
					minCost: minCost,
					champs: dynviews,
					traitLst: solvedArgs
				});
			});
			var patchJasmine = $(".guide-meta__tab__item").text().trim();
			resolve({
				patch: patchJasmine,
				teamComps: newNodeLists
			});
		});
	});
};
var getHtmlData = function getHtmlData(url$jscomp$21) {
	return new Promise(function(resolve$jscomp$0, reject$jscomp$0) {
		axios.get(url$jscomp$21).then(function(res$jscomp$0) {
			resolve$jscomp$0(res$jscomp$0.data);
		}).catch(function(err$jscomp$3) {
			return reject$jscomp$0(err$jscomp$3);
		});
	});
};