module.exports.config = {
	name: "màu",
	version: "1.0.2",
	hasPermssion: 0,
	credits: "TuanDz",
	description: "trò chơi cược màu",
	commandCategory: "Trò Chơi",
	usages: "[lam/blue][cam/orange][lục/green][vàng/yellow][tím/violet][đen/black]",
	cooldowns: 0,
   dependencies: {}
};
module.exports.run = async function ({event, api, args, Currencies, __GLOBAL }) {
	             var data = await Currencies.getData(event.senderID);
  var money = data.money
  const moneyUser = (await Currencies.getData(event.senderID)).money;
  if (5000 > moneyUser) return api.sendMessage("Bạn kh đủ tiền để chơi", event.threadID, event.messageID);
	            var color = args.join("") 
				var check = (num) => (num == 0) ? '💙' : (num % 2 == 0 && num % 6 != 0 && num % 10 != 0) ? '🧡' : (num % 3 == 0 && num % 6 != 0) ? '💚' : (num % 5 == 0 && num % 10 != 0) ? '💛' : (num % 10 == 0) ? '💜' : '🖤️';
				let random = Math.floor(Math.random() * 5);
				if (color == "lam" || color == "blue") color = 0;
				else if (color == "cam" || color == "orange") color = 1;
				else if (color == "lục" || color == "green") color = 2;
				else if (color == "vàng" || color == "yellow") color = 3;
				else if (color == "tím" || color == "violet") color = 4;
				else if (color == "đen" || color == "black") color = 5;
				else return api.sendMessage("Bạn chưa nhập thông tin cá cược\n💙lam/blue \n🧡cam/orange \n💚lục/green \n💛vàng/yellow \n💜tím/violet \n🖤đen/black", event.threadID, event.messageID);
				let coin = Math.floor(Math.random() * (10000 - 5000 + 1)) + 5000;
				if (color == 0 && check(random) == '💙') api.sendMessage(`Bạn đã chọn màu 💙, bạn đã thắng và được + ${coin}$\nSố tiền hiện tại của bạn là: ${moneyUser + coin}$`, event.threadID,() => Currencies.setData(event.senderID, options = {money: money + coin}),event.messageID);
				else if (color == 1 && check(random) == '🧡') api.sendMessage(`Bạn đã chọn màu 🧡, bạn đã thắng và được + ${coin}$\nSố tiền hiện tại của bạn là: ${moneyUser + coin}$`, event.threadID,() => Currencies.setData(event.senderID, options = {money: money + coin}),event.messageID);
				else if (color == 2 && check(random) == '💚') api.sendMessage(`Bạn đã chọn màu 💚, bạn đã thắng và được + ${coin}$\nSố tiền hiện tại của bạn là: ${moneyUser + coin}$`, event.threadID,() => Currencies.setData(event.senderID, options = {money: money + coin}),event.messageID);
				else if (color == 3 && check(random) == '💛') api.sendMessage(`Bạn đã chọn màu 💛, bạn đã thắng và được + ${coin}$\nSố tiền hiện tại của bạn là: ${moneyUser + coin}$`, event.threadID,() => Currencies.setData(event.senderID, options = {money: money + coin}),event.messageID);
				else if (color == 4 && check(random) == '💜') api.sendMessage(`Bạn đã chọn màu 💜, bạn đã thắng và được + ${coin}$\nSố tiền hiện tại của bạn là: ${moneyUser + coin}$`, event.threadID,() => Currencies.setData(event.senderID, options = {money: money + coin}),event.messageID);
				else if (color == 5 && check(random) == '🖤️') api.sendMessage(`Bạn đã chọn màu 🖤️, bạn đã thắng và được + ${coin}$\nSố tiền hiện tại của bạn là: ${moneyUser + coin}$`, event.threadID,() => Currencies.setData(event.senderID, options = {money: money + coin}),event.messageID);
				else api.sendMessage(`Màu ${check(random)}\nBạn đã ra đê ở :'(\nvà bị trừ đi 1000$\nSố tiền còn lại của bạn là: ${moneyUser - 1000}$`, event.threadID,() => Currencies.setData(event.senderID, options = {money: money - 1000}),event.messageID);
			}