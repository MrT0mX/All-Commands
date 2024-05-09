/** I am doing this coding with a lot of difficulty, please don't post it yourself¯\_(ツ)_/¯ **/
module.exports.config = {
  name: "neymar",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "TANVIR",
  description: "বস নেইমারের  ৫০+ ছবি🥰",
  commandCategory: "Hình ảnh",
  usages: "neymar",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
   var hi = ["SHibluBhai009 💛:50+🦋"];
  var know = hi[Math.floor(Math.random() * hi.length)];
  var link = [
  "https://i.postimg.cc/K8dBZY6W/15024deba2e1f76df65455fb1e0d6d93.jpg",
"https://i.postimg.cc/PJnBqD56/591a40b22dbe7aba1ccf55c48f0627a4.jpg",
"https://i.postimg.cc/QMH4zVpn/850e17b62f02773d64d6352aaec724de.jpg",
"https://i.postimg.cc/Vv920NSz/deea30e5c29e6892f33a92e6c6967f30.jpg",
"https://i.postimg.cc/dtYX484W/27a563cf0fef622f91b52c187ce5c6d5.jpg",
"https://i.postimg.cc/J06kD3n1/01d1c3837995a223a101fc9bbc4397ae.jpg",
"https://i.postimg.cc/439bD03p/03c3fc7ca5c2f50f31ec89781b954fff.jpg",
"https://i.postimg.cc/ZnCqQGbS/05fd0fdbad8505abe09ee31656a8398e.jpg",
"https://i.postimg.cc/htxXcR94/07d572a8c9a5cd39cabe7f8b288c11e4.jpg",
"https://i.postimg.cc/50P0n4Mg/0efa8b8dcb96246cc79cd56ea226c809.jpg",
"https://i.postimg.cc/bJ1gt5cq/0fbeac0b1525ffd016257f7813a5d4c6.jpg",
"https://i.postimg.cc/W3mm3Jg3/10cbaa53e9f9be6088039d26c7cc7dd1.jpg",
"https://i.postimg.cc/Xqmv6sqy/142d0e9a419015a95d19b8bb2507369f.jpg",
"https://i.postimg.cc/4ydKgK1j/188b7525b47e032588b1f0a976ccb3b2.jpg",
"https://i.postimg.cc/Ssm2g1YS/18b3c54cef2da1c32de370395338f4cb.jpg",
"https://i.postimg.cc/3w5DvxKD/2d0991cb939075adfd9529218f90b950.jpg",
"https://i.postimg.cc/m21DyWp3/2fd31538cf6699b771563e8f917fa628.jpg",
"https://i.postimg.cc/k4C8kXzd/302d58cadc1cda9ce074b7784837b459.jpg",
"https://i.postimg.cc/L4TBFLmQ/30edad908471ce5d161633fb14a0a9bd.jpg",
"https://i.postimg.cc/pdHpdcZf/33897e01ab2cfb1a3688130850926068.jpg",
"https://i.postimg.cc/SNHnBxYt/355dbd0a72ff17561d3de95c6657c56e.jpg",
"https://i.postimg.cc/PrXyCK6k/36e1c493f212e4ff1775164731647894.jpg",
"https://i.postimg.cc/y8rL49yC/39bdb496a0afe10447c432f4fe67a71d.jpg",
"https://i.postimg.cc/13zvjM6K/3b78f772839d4d6579dcbe31accf6a7b.jpg",
"https://i.postimg.cc/J7cK7S5q/438d727508e1d998c35b2791be149c06.jpg",
"https://i.postimg.cc/d0jDZRHz/455bc8e020ea4ed7ff7e348fca04711f.jpg",
"https://i.postimg.cc/yxXLwbvL/4e73b484529ee602a8d0bbcf6bf990cb.jpg",
"https://i.postimg.cc/pdzzGn0Z/55274304fd0500da70bcc4e47a94e2ca.jpg",
"https://i.postimg.cc/3NBZLDx6/590ba87876d0bf53882a3d21af18e84b.jpg",
"https://i.postimg.cc/JnCcMQyv/5bd0df673573388abf7b7bbf6ee602a7.jpg",
"https://i.postimg.cc/FsHbrzRr/5c5ac3a74d5a37e45974dea275731373.jpg",
"https://i.postimg.cc/G2jYrnnT/5d5c830401f7f7d2286e4b708571c8b7.jpg",
"https://i.postimg.cc/zX2CVNbn/60a5d6f637713486d184c897772aa03c.jpg",
"https://i.postimg.cc/nhsvmWBN/63eb37734c6a8117cc65abeb785b31f6.jpg",
"https://i.postimg.cc/L8730SmH/6583ea38d0eb45c46b0425c9181f9429.jpg",
"https://i.postimg.cc/sg1Jcxd6/6b7bcec74410e6ab89ce546e7aa84f07.jpg",
"https://i.postimg.cc/FzsSHChW/784c3f6fbc3ae7b5deb6afcfefa75afd.jpg",
"https://i.postimg.cc/YCJQzxx0/840598f975191031eed7a9b2e082c72e.jpg",
"https://i.postimg.cc/dV8VgmYL/842751fd3f25bd8ac67ea606daf2715d.jpg",
"https://i.postimg.cc/281q9ZyZ/8f16457b781a574aca8907955d71bb5b.jpg",
"https://i.postimg.cc/d0k4q15k/9365ec3413f4c65b4641f1ddb99e2355.jpg",
"https://i.postimg.cc/4NsLzXxq/949236a0a4320c47bb7dfc476d593649.jpg",
"https://i.postimg.cc/Dy6C6RWZ/977bd58ceb342d30ded294a7527fc4ef.jpg",
"https://i.postimg.cc/MGCtXSLs/a19eaacc0137ba5fd9e8e380bf6cf614.jpg",
"https://i.postimg.cc/PqWvznxV/a37ba5862ddad77a0bbfb946156dcb52.jpg",
"https://i.postimg.cc/90VptBCZ/b060fb49d402aa90dbd9e461331837bd.jpg",
"https://i.postimg.cc/636qr7FT/b6c1efd97084f7d6b830afe77e832efe.jpg",
"https://i.postimg.cc/65qRsPjT/b6f625b9863048bd13217d32a3f3f4f7.jpg",
"https://i.postimg.cc/Wb5ngrKq/bc59162413c8a0c0b2d5fc2a1d4ad29e.jpg",
"https://i.postimg.cc/ZKQNJL2H/bc84bdde1a96a647c1e2de8d2c6081d5.jpg",
"https://i.postimg.cc/XNzq5YL7/bf773165cfc35c72da267c19a89709ad.jpg",
"https://i.postimg.cc/66j2h0WK/c0a4e4027efaf491f3e730501ba7f841.jpg",
"https://i.postimg.cc/C5mjCTvp/c6b20df5f1633ba56204412f50a5e01f.jpg",
"https://i.postimg.cc/YCmW0WwH/d8be886d239cfc922e00c4c8aafeb05a.jpg",
"https://i.postimg.cc/kMxY62qW/d9300f68563fa340696515aa624b258a.jpg",
"https://i.postimg.cc/rw6phZ7B/deea30e5c29e6892f33a92e6c6967f30.jpg",
"https://i.postimg.cc/PxKL9b1m/f069b3360a2d258ae970638d9f4d0540.jpg",
"https://i.postimg.cc/pr6mX2Gr/f508c2d9f21fe350a9b916c2fb3ceecb.jpg",,
];
     var callback = () => api.sendMessage({body:`「 ${know} 」`,attachment: fs.createReadStream(__dirname + "/cache/5.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.jpg"));    
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.jpg")).on("close",() => callback());
   };
