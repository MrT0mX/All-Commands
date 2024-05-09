module.exports.config = {
    name: "daoly",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Bennet",
    description: "Những Câu Nói Đạo Lý Đi Vào Lòng Người",
    commandCategory: "Kiến Thức Học Hỏi",
    usages: "",
    cooldowns: 5
};
module.exports.run = async function ({ api, event, args}) {
  const axios = require('axios');
  const request = require('request');
  const fs = require('fs');
  const { threadID, messageID } = event;
  const data = ["Đạo trời không thiên vị ai, luôn giúp đỡ cho người lương thiện. Lưới trời lồng lộng, tuy thưa nhưng khó lọt","Lời nói hợp đạo nghe như ngược đời.","Binh mạnh thì không thắng, cây cứng thì lại bị chặt. Cứng mạnh thì phải ở dưới, mềm yếu lại được ở trên. Răng cứng thì chóng gãy, lưỡi mềm thì bền lâu","Binh mạnh thì không thắng, cây cứng thì lại bị chặt. Cứng mạnh thì phải ở dưới, mềm yếu lại được ở trên. Răng cứng thì chóng gãy, lưỡi mềm thì bền lâu","Danh dự với sinh mệnh, cái nào mới thật sự quý ? Người khôn ngoan không bao giờ vì trọng cái danh hão mà xem nhẹ tính mạng mình.","Lời hứa dễ dàng thì khó tin, người nào cho việc gì cũng dễ làm thì sẽ gặp nhiều cái khó. Cho nên người hiểu đạo coi việc gì cũng khó mà rốt cuộc không gặp cái gì khó","Cần cù thì bù siêng năng, không làm mà đòi có ăn thì ăn đầu buồi, ăn cứt.","Cây lớn sinh ra từ một cái mầm nhỏ; tháp cao chín tầng khởi đầu từ một sọt đất, đi xa ngàn dặm bắt đầu từ một bước chân.","Cái gì ở yên thì dễ nắm, giòn thì dễ vỡ, nhỏ thì dễ phân tán.","Người giản dị nhất thì không phải là người giản dị.","Người khiêm tốn nhất thì không phải là người khiêm tốn","Người cực khéo thì dường như vụng. Người nói giỏi thì dường như ấp úng. Cử động thì thắng được lạnh. Nhưng yên tĩnh thì thắng được nóng. Vậy cứ thanh tĩnh thì mọi vật sẽ đâu vào đấy.","Từ bi là vũ khí tốt nhất của chính bạn.","Có lòng thương yêu vô tư thì sẽ có tất cả.","Bạn bè là để sớt chia, không phải để lấn lướt.","Tiền bạc là để chi tiêu, không phải để so lường.","Bình yên đến từ bên trong. Đừng tìm nó bên ngoài.","Không có sự ô nhiễm nào lớn hơn sự thiếu hiểu biết.","Nguồn gốc mọi đau khổ của con người chính là luyến ái.","Niềm Tin là để chắc chắn, không phải để lường gạt.","Hãy nhớ rằng, đôi khi sự im lặng là câu trả lời hay nhất.","Nếu có điều gì đáng làm, hãy làm nó bằng tất cả trái tim.","Bạn hãy luôn cảm ơn những ai đem đến nghịch cảnh cho mình.","Cung kính đối với người là sự trang nghiêm cho chính mình.","Chỉ cần đối diện với hiện thực, bạn mới vượt qua hiện thực.","Người không biết yêu mình thì không thể yêu được người khác.","Hận thù diệt hận thù, là điều không thể có. Tình yêu diệt hận thù, là định luật ngàn thu.","Tâm là tên lừa đảo lớn nhất, người khác có thể dối bạn nhất thời, nhưng nó lại gạt bạn suốt đời.","Quảng kết chúng duyên, chính là không làm tổn thương bất cứ người nào.","Sống một ngày vô ích, không làm được chuyện gì, thì chẳng khác gì kẻ phạm tội ăn trộm.","Nói một lời dối gian thì phải bịa thêm mười câu không thật nữa để đắp vào, cần gì khổ như vậy?","Người che đậy khuyết điểm của mình bằng thủ đoạn tổn thương người khác là kẻ đê tiện.","Đừng lãng phí sinh mạng của mình trong những chốn mà nhất định bạn sẽ ân hận.","Những ai phá hủy được cội nguồn của sự ghen tị sẽ luôn bình yên trong tâm hồn.","Nếu có thể đứng ở góc độ của người khác để nghĩ cho họ thì đó mới là từ bi.","Bạn cứ xem những chuyện đơn thuần thành nghiêm trọng, như thế bạn sẽ rất đau khổ.","Nụ cười của bạn khiến người khác cảm thấy hạnh phúc, kể cả những người không thích bạn.","Cảm xúc, một là phục vụ ta, hai là thao túng ta, tùy thuộc ta xem ai là người làm chủ.","Bầu không khí yêu thương trong gia đình chính là nền tảng cho cuộc sống của bạn.","Người âm thầm quan tâm chúc phúc người khác, đó là một sự bố thí vô hình.","Cảm ơn đời với những gì tôi đã có, cảm ơn đời những gì tôi không có.","Hạnh phúc không có sẵn. Hạnh phúc xuất phát từ chính hành động của bạn.","Hãy sẵn sàng để thay đổi nhưng đừng đánh mất các giá trị của bản thân.","Bao dung mới là trí huệ, tĩnh tại mới là tu tâm.","Cá lội ngược dòng cá sống, người vượt nghịch cảnh người thành công","Chân lý của nhân sinh chỉ là giấu trong cái bình thường đơn điệu.","Sự chấp trước của ngày hôm nay sẽ là niềm hối hận cho ngày mai.","Không có nỗi sợ hãi với những ai tâm trí không ngập tràn ham muốn.","Không có con đường dẫn đến hạnh phúc, hạnh phúc chính là con đường.","Nhân quả không nợ chúng ta thứ gì, cho nên xin đừng oán trách nó.","Một con chó tốt không phải bởi vì nó sủa giỏi. Một người tốt không phải bởi vì anh ta nói hay.","Yêu nhau là phải được sờ. Không cho lại bảo giả vờ yêu nhau.","Đi Lên Từ Hai Bàn Tay Trắng. Và Gây Dựng Một Khoản Nợ Khổng Lồ.","Trời sinh cái khiếu trăng hoa lại cho cái ấy gấp 3 người thường !","Tình chỉ đẹp khi tiền đầy túi - Đời bớt vui khi túi cạn tiền.","Tiền không phải là tất kả, vì trên thế giới này còn vàng và kim cương.","Sai thì sửa, mà chửa thì đẻ…","Trái tim em chỉ 2 lần mở cửa, đón anh vào và tống cổ anh ra.","Thất bại vì ngại thành công","Phất áo lên vai đời lãng tử, chào mẹ con đi 9 rưỡi về","Bồ xấu thì sợ bạn chê, bồ đẹp thì sợ bạn mê bạn dành.","Thuốc đắng vào người em lắc, em phê xong rồi anh nắc"]; //thêm ngồn từ gì tùy bạn
  const daoly = data[Math.floor(Math.random() * data.length)];
  var anh = [
 "https://i.imgur.com/Ug8DdT2.jpg",
 "https://i.imgur.com/o8SEY1t.jpg",
 "https://i.imgur.com/eHDM5Cj.jpg",
 "https://i.imgur.com/mAOeIN4.jpg",
 "https://i.imgur.com/hprcKjZ.jpg",
 "https://i.imgur.com/xoCUuwn.jpg",
 "https://i.imgur.com/ntZZb8h.jpg",
 "https://i.imgur.com/5gauBi2.jpg",
 "https://i.imgur.com/O33j0m4.jpg",
 "https://i.imgur.com/Ibtedft.jpg",
 "https://i.imgur.com/pIat8Oy.jpg",
 "https://i.imgur.com/8wHuwUd.jpg",
 "https://i.imgur.com/MHkJ4tx.jpg",
 "https://i.imgur.com/fhvu1a5.jpg",
 "https://i.imgur.com/5TZGjaT.jpg",
 "https://i.imgur.com/OpqdzeW.jpg",
 "https://i.imgur.com/vbWMcgN.jpg",
 "https://i.imgur.com/I37cisf.jpg",
 "https://i.imgur.com/dgAuUle.jpg",
 "https://i.imgur.com/nvC8FNO.jpg",
 "https://i.imgur.com/1XLQc1o.jpg",
 "https://i.imgur.com/XcE5Y9z.jpg",
 "https://i.imgur.com/70WS5hh.jpg",
 "https://i.imgur.com/sv1TbVr.jpg",
 "https://i.imgur.com/df7pMbg.jpg",
 "https://i.imgur.com/QWUftu3.jpg",
 "https://i.imgur.com/1Djng2I.jpg",
 "https://i.imgur.com/YTBG0il.jpg",
 "https://i.imgur.com/3apnMR9.jpg",
 "https://i.imgur.com/vh19sow.jpg",
 "https://i.imgur.com/X3WNvMJ.jpg",
 "https://i.imgur.com/w8kaDKK.jpg",
 "https://i.imgur.com/LmTUfru.jpg",
 "https://i.imgur.com/J81CUKl.jpg",
 "https://i.imgur.com/d6y2Auy.jpg",
 "https://i.imgur.com/uHkFmWx.jpg",
 "https://i.imgur.com/ouQuwGv.jpg",
 "https://i.imgur.com/0Ge3ldv.jpg",
 "https://i.imgur.com/cjNxj1h.jpg",
 "https://i.imgur.com/MyGnF6M.jpg",
 "https://i.imgur.com/IxF9h6A.jpg",
 "https://i.imgur.com/KxARtAY.jpg",
 "https://i.imgur.com/8xQWAvb.jpg",
 "https://i.imgur.com/DsyUu49.jpg",
 "https://i.imgur.com/9FU9BmU.jpg",
 "https://i.imgur.com/BSI7MLq.jpg",
 "https://i.imgur.com/AjHV0Of.jpg",
 "https://i.imgur.com/CyJuHQH.jpg",
 "https://i.imgur.com/9S5jRiR.jpg",
 "https://i.imgur.com/UXVqZjo.jpg",
 "https://i.imgur.com/Ss6v7eU.jpg",
 "https://i.imgur.com/24PvOAV.jpg",
 "https://i.imgur.com/vNOuiti.jpg",
 "https://i.imgur.com/vU6QV53.jpg",
 "https://i.imgur.com/slrMeLQ.jpg",
 "https://i.imgur.com/l8YH5Mh.jpg",
 "https://i.imgur.com/uz2Saeg.jpg",
 "https://i.imgur.com/m7Gv2Zr.jpg",
 "https://i.imgur.com/qlG7OYf.jpg",
 "https://i.imgur.com/Jeb4XZy.jpg",
 "https://i.imgur.com/7wjEI27.jpg",
 "https://i.imgur.com/kQMNvlw.jpg",
 "https://i.imgur.com/JRFIXvz.jpg",
 "https://i.imgur.com/txidmDD.jpg",
  "https://i.imgur.com/6dQEV6k.jpg",
 "https://i.imgur.com/jqFmxmn.jpg",
 "https://i.imgur.com/WI0YflD.jpg",
 "https://i.imgur.com/1OiBCLP.jpg",
 "https://i.imgur.com/bOu9yYv.jpg",
 "https://i.imgur.com/8rfjGOS.jpg",
 "https://i.imgur.com/8V73XNa.jpg",
 "https://i.imgur.com/tLdkJV3.jpg",
 "https://i.imgur.com/aBSQpXm.jpg",
 "https://i.imgur.com/0DFLNvJ.jpg",
 "https://i.imgur.com/UAn1JgE.jpg",
 "https://i.imgur.com/FpLf7ib.jpg",
 "https://i.imgur.com/snm7yfj.jpg",
 "https://i.imgur.com/sgrH5aV.jpg",
 "https://i.imgur.com/hoPNSCR.jpg",
 "https://i.imgur.com/jEMTKTx.jpg",
 "https://i.imgur.com/ts1BemO.jpg",
 "https://i.imgur.com/IAWtACk.jpg",
 "https://i.imgur.com/JMqx1LR.jpg",
 "https://i.imgur.com/LRJuN6K.jpg",
 "https://i.imgur.com/AH88XVK.jpg",
 "https://i.imgur.com/gj0R0xq.jpg",
 "https://i.imgur.com/AETxJJD.jpg",
 "https://i.imgur.com/MbFvHCn.jpg",
 "https://i.imgur.com/Q8zLydl.jpg",
 "https://i.imgur.com/UsJENqe.jpg",
 "https://i.imgur.com/xpJpU6R.jpg",
 "https://i.imgur.com/9ZTOJQi.jpg",
 "https://i.imgur.com/KMQGjnU.jpg",
 "https://i.imgur.com/T1q0fWY.jpg",
 "https://i.imgur.com/gJFIBc3.jpg",
 "https://i.imgur.com/lsGAlYb.jpg",
 "https://i.imgur.com/5LPpKwg.jpg",
 "https://i.imgur.com/dztFRd7.jpg",
 "https://i.imgur.com/FxchIKS.jpg",
 "https://i.imgur.com/P73sgEK.jpg",
 "https://i.imgur.com/ScNfipI.jpg",
 "https://i.imgur.com/gqsPMnJ.jpg",
 "https://i.imgur.com/30ll2w8.jpg",
 "https://i.imgur.com/fn24mug.jpg",
 "https://i.imgur.com/u1iVigr.jpg",
 "https://i.imgur.com/e5oK2ND.jpg",
 "https://i.imgur.com/FKGxYuS.jpg",
 "https://i.imgur.com/Ojy5NSz.jpg",
 "https://i.imgur.com/In7aus1.jpg",
 "https://i.imgur.com/PudGnyV.jpg",
 "https://i.imgur.com/wHJC0JE.jpg",
 "https://i.imgur.com/em9fNTq.jpg",
 "https://i.imgur.com/j92kGtW.jpg",
 "https://i.imgur.com/dv1OU4v.jpg",
 "https://i.imgur.com/xmuwQeK.jpg",
 "https://i.imgur.com/EnRZhEp.jpg",
 "https://i.imgur.com/6X2Xuvn.jpg",
 "https://i.imgur.com/9Ll7J9h.jpg",
 "https://i.imgur.com/scuJpXq.jpg",
 "https://i.imgur.com/RILekj6.jpg",
 "https://i.imgur.com/OCt2ovb.jpg",
 "https://i.imgur.com/FLvki2A.jpg",
 "https://i.imgur.com/ZX25OpU.jpg",
 "https://i.imgur.com/rXuXFp7.jpg",
 "https://i.imgur.com/24PvOAV.jpg",
 "https://i.imgur.com/Ijq7hcy.jpg",
 "https://i.imgur.com/fql0QZw.jpg",
 "https://i.imgur.com/9QthcXG.jpg",
 "https://i.imgur.com/gDkSKjI.jpg",
 "https://i.imgur.com/HEBMuCi.jpg",
 "https://i.imgur.com/fMXkoXe.jpg",
 "https://i.imgur.com/IyDnwue.jpg",
 "https://i.imgur.com/BBokm2J.jpg",
 "https://i.imgur.com/kwMVWTX.jpg",
 "https://i.imgur.com/h1rX6yW.jpg",
 "https://i.imgur.com/aCGJdDe.jpg",
 "https://i.imgur.com/HtQpVpk.jpg",
 "https://i.imgur.com/CT1DdiB.jpg",
 "https://i.imgur.com/NC2dNVQ.jpg",
 "https://i.imgur.com/EKUEhc6.jpg",
 "https://i.imgur.com/iVcieYh.jpg",
 "https://i.imgur.com/YOMhsVr.jpg",
 "https://i.imgur.com/YI6g3r8.jpg",
 "https://i.imgur.com/XTM6cSN.jpg",
 "https://i.imgur.com/bMyb5do.jpg",
 "https://i.imgur.com/y09R7i7.jpg",
 "https://i.imgur.com/9WEoZkj.jpg",
 "https://i.imgur.com/ZpSEeF0.jpg",
 "https://i.imgur.com/lifdLYH.jpg",
 "https://i.imgur.com/4oEFZjF.jpg",
 "https://i.imgur.com/NC9Xu3c.jpg",
 "https://i.postimg.cc/K8b0Pvzy/194290927-113432477633979-1224909257786179582-n.jpg",
 "https://i.postimg.cc/fbT5P2m2/201034733-125136939796866-7789490736021663641-n.jpg",
 "https://i.postimg.cc/mgS88fz1/239803489-143957694581457-1559095017672212956-n.jpg",
 "https://i.postimg.cc/MTn56ns1/240131184-145536501090243-6582678601954987175-n.jpg",
 "https://i.postimg.cc/FRwZ7hq8/240181519-164520859191807-8573544782657241490-n.jpg",
 "https://i.postimg.cc/xjb5BbN2/240529975-169504288693464-7809960437520509723-n.jpg",
 "https://i.postimg.cc/xTvR1DPp/240655565-148222474154979-132215561903338801-n.jpg",
 "https://i.postimg.cc/rsW94v2m/241060948-177478537896039-7286543256909518271-n.jpg",
 "https://i.postimg.cc/3x9F2XVg/241252318-148222540821639-8371561568404747269-n.jpg",
 "https://i.postimg.cc/cLdcK99x/241347606-169393442037882-243526049572956501-n.jpg",
 "https://i.postimg.cc/tgTtk1G8/241515378-154655226845037-8736339382749832252-n.jpg",
 "https://i.postimg.cc/ncb2xcqQ/247090368-178542624456297-521124634018329037-n.jpg",
 "https://i.postimg.cc/BvV5Vqqb/257386139-196938319283394-1670397472646319125-n.jpg",
 "https://i.postimg.cc/KjXPmJ3y/259441418-199889852321574-7487620754943953489-n.jpg",
 "https://i.postimg.cc/h4x82WN4/261175198-206271978350028-5811079553929682196-n.jpg",
 "https://i.postimg.cc/pXHf7ctf/265982312-214844127492813-1236086116455268420-n.jpg",
 "https://i.postimg.cc/CLsGVCFW/268950364-216367860673773-7334362440152316456-n.jpg",
 "https://i.postimg.cc/QdNpNBCV/269504284-222755206701705-3231309028939526887-n.jpg",
 "https://i.postimg.cc/6pHC894c/270282205-230117575965468-4063898853652977037-n.jpg",
 "https://i.postimg.cc/PJmmJY1v/271134797-456475285872966-8876350206358335376-n.jpg",
 "https://i.postimg.cc/nLCB76vJ/271656210-461473155373179-2980242163389474907-n.jpg",
 "https://i.postimg.cc/LXPPQLCQ/271793859-231928582451034-4492058161988456537-n.jpg",
 "https://i.postimg.cc/tgwPz25V/271801782-463365701850591-5728345316440405911-n.jpg",
 "https://i.postimg.cc/QCrT2Cv8/271901288-463646655155829-5763819091563724919-n.jpg",
 "https://i.postimg.cc/d3mywvK8/272046446-236925571951335-4422122764237725253-n.jpg",
 "https://i.postimg.cc/pVD8DQnp/272193749-237964275180798-1597224103837255399-n.jpg",
 "https://i.postimg.cc/c403TKQT/272988170-1270016636869651-5778310935264758534-n.jpg",
 "https://i.postimg.cc/65cvP9cK/272996729-250781673899058-5075090889356536863-n.jpg",
 "https://i.postimg.cc/bwvtcKVt/273604215-248814487429110-7368494625544786866-n.jpg",
 "https://i.postimg.cc/9QNqWJsN/273684061-249520380691854-3285028032621870790-n.jpg",
 "https://i.postimg.cc/vHfPx6Gz/4d0e9e4c7d5fb101e84e.jpg",
 "https://i.postimg.cc/BvLPt20Z/b52fd59a3789fbd7a298.jpg",
 "https://i.postimg.cc/zfB6hXtG/192957559-105526445091249-4860161969202807506-n.jpg",
 "https://i.postimg.cc/RhcDm3FX/241365095-147687004208526-620492193124161898-n.jpg",
 "https://i.postimg.cc/v89jfKzf/242523782-170086141968612-3684309947872880839-n.jpg",
 "https://i.postimg.cc/D0VMRQ2S/243600968-164969162480310-3242035850125730494-n.jpg",
 "https://i.postimg.cc/C1n2vrVy/243852383-165570559086837-2468863157777869056-n.jpg",
 "https://i.postimg.cc/3xrcMxHF/245520736-179794720997754-7334849431239135051-n.jpg",
 "https://i.postimg.cc/02s4fCW3/246022870-180975424213017-629036212262321466-n.jpg",
 "https://i.postimg.cc/fTfrg01b/246631812-182302244080335-5053348686330119523-n.jpg",
 "https://i.postimg.cc/Z5fDJzbt/247194067-181786570798569-3745214036018583061-n.jpg",
 "https://i.postimg.cc/MGNPj0f9/247592165-180328660944360-1790456739095790427-n.jpg",
 "https://i.postimg.cc/bvsVJVrG/249039355-187706176873275-5427087590821020894-n.jpg",
 "https://i.postimg.cc/cH3D7KQ0/250341367-188348026809090-9144648720053776844-n.jpg",
 "https://i.postimg.cc/VvcKKYRM/252018287-186858956957997-6858035615907243131-n.jpg",
 "https://i.postimg.cc/ZK4f350z/253343241-189006566743236-8984206006852302631-n.jpg",
 "https://i.postimg.cc/1RpCfqmK/258038984-200616435582249-5100759851707517420-n.jpg",
 "https://i.postimg.cc/m2jmSWFz/263414299-440487757471719-4558842059815848720-n.jpg",
 "https://i.postimg.cc/CxKmPrjv/268567496-220008093643083-3255605732280787341-n.jpg",
 "https://i.postimg.cc/JhDKmyYZ/271689764-236324752011417-7298713001917937010-n.jpg",
 "https://i.postimg.cc/zGPp9w7q/271781732-464437275076767-3095064561843995063-n.jpg",
 "https://i.postimg.cc/3R2B4sTw/271791883-462677438586084-3908831792964142389-n.jpg",
 "https://i.postimg.cc/XvRLvVth/272223959-468099781377183-4506970039747721711-n.jpg",
 "https://i.postimg.cc/59qgxWg7/273328698-3566167203653995-414002308632275005-n.jpg",
 "https://i.postimg.cc/3N7Zgt8F/273564363-250352573941968-191569878801856068-n.jpg",
 "https://i.postimg.cc/P5trBYxV/172775346-123918253252068-2102626980051622383-n.jpg",
"https://i.postimg.cc/nh0cZr9F/200334998-116476810662879-8276134121970366200-n.jpg",
"https://i.postimg.cc/zvZqpR6j/240158615-162581826052377-8523678178204578520-n.jpg",
"https://i.postimg.cc/N0ns9nxZ/240672764-173950671582159-4608395208819502450-n.jpg",
"https://i.postimg.cc/6Qq6QKCd/241179573-149147074062519-1877653884812096404-n.jpg",
"https://i.postimg.cc/mDFbQSXk/241230696-157171143260112-7934560549275342134-n.jpg",
"https://i.postimg.cc/G3GLtqTS/241341079-175707984739761-7337459266933401806-n.jpg",
"https://i.postimg.cc/nr4pWhtt/241342754-149443587366201-2291360039206931062-n.jpg",
"https://i.postimg.cc/mrPRswGj/241461881-166262375684322-924968466708548897-n.jpg",
"https://i.postimg.cc/J7N8M0Sf/241479260-175070064803553-7036084814371565221-n.jpg",
"https://i.postimg.cc/7hkySrJt/241505364-428023478718147-785778795948756982-n.jpg",
"https://i.postimg.cc/ZR3S95ny/241546344-167676882209538-6234147779263235840-n.jpg",
"https://i.postimg.cc/Jz6mvFSt/241565538-150150293962197-8259387505590516661-n.jpg",
"https://i.postimg.cc/13t1GH4S/242091121-156046100039283-380060867800578540-n.jpg",
"https://i.postimg.cc/Znxzcsrb/242384059-164209922556234-256235901597578295-n.jpg",
"https://i.postimg.cc/W4xVbkNv/242400561-165803022396924-5086677504604738084-n.jpg",
"https://i.postimg.cc/YqtH9kHh/242430585-158600489783844-7367627965628180531-n.jpg",
"https://i.postimg.cc/RZD5XHnH/243168603-228944332749459-132478258009076504-n.jpg",
"https://i.postimg.cc/1txxZ1BR/244968434-175790071398219-6017877933733187947-n.jpg",
"https://i.postimg.cc/HL8GKkQP/245256485-173194924991067-5276520860724184338-n.jpg",
"https://i.postimg.cc/5NpMQG4p/246702893-178005837843309-2932521689644840248-n.jpg",
"https://i.postimg.cc/gjdfny1f/254007586-189722430004983-5012656765537255913-n.jpg",
"https://i.postimg.cc/ZR6Gbss8/258585411-436870164500145-4046560458954420858-n.jpg",
"https://i.postimg.cc/T19BmL6h/259164086-200797135564179-7638911198676060137-n.jpg",
"https://i.postimg.cc/5N4hJ3Bz/263093353-208575798119646-9094829618631075043-n.jpg",
"https://i.postimg.cc/tRtK8fxy/264433362-441346384052523-8951103239290547622-n.jpg",
"https://i.postimg.cc/xT6W1z54/268597823-222033763440516-4853679892394076951-n.jpg",
"https://i.postimg.cc/g2r1X2Bk/269815221-229324922711400-2005289245832992595-n.jpg",
"https://i.postimg.cc/g25Qvbfy/270465891-226327139677845-2684258203782247843-n.jpg",
"https://i.postimg.cc/fb9FCgNG/270598542-227645212879371-4553798268322598136-n.jpg",
"https://i.postimg.cc/W3cyH6ph/271640006-463975121789649-667349735834578780-n.jpg",
"https://i.postimg.cc/cH7zyg6T/271654900-232570075720218-2521563039874170502-n.jpg",
"https://i.postimg.cc/nVkW3Dyh/271825896-236032855373940-7222734720576414966-n.jpg",
"https://i.postimg.cc/4yBFyD69/272787198-250853713891854-8573012141414273761-n.jpg",
"https://i.postimg.cc/brzBzytP/272803839-470961597757668-731771586925543160-n.jpg",
"https://i.postimg.cc/NfjzS0t7/273182988-648811146442168-6253942538852908557-n.jpg",
"https://i.postimg.cc/x8Dcqz8m/026e608b3fa9f3f7aab814.jpg",
"https://i.postimg.cc/hj7XSrDg/09c265283a0af654af1b13.jpg",
"https://i.postimg.cc/HkBc3nvG/1000c4af9b8d57d30e9c6.jpg",
"https://i.postimg.cc/tgc1QfH2/1824daca85e849b610f99.jpg",
"https://i.postimg.cc/nhH9vBkY/1dd2f504d2e646f6b651bbc5355074a7.jpg",
"https://i.postimg.cc/QxDF31RG/7172a3e5f0c73c9965d6.jpg",
"https://i.postimg.cc/tgJ1cb8s/7d38e3dcbcfe70a029ef18.jpg",
"https://i.postimg.cc/3NXWGx0c/a33196d5c9f705a95ce616.jpg",
"https://i.postimg.cc/2jh1M297/a56b6e8231a0fdfea4b110.jpg",
"https://i.postimg.cc/NjJFmVLB/b9e0ee07b1257d7b243419.jpg",
"https://i.postimg.cc/g2krwdzg/g1-WNWann-PBm3j-M8-St-U7j.jpg",
"https://i.postimg.cc/TYcpYh6y/image.jpg",
"https://i.postimg.cc/PJsQhNk3/2fdcd3398c1b4045190a15.jpg",
"https://i.postimg.cc/QN1qmgpR/4ea7a243fd61313f687017.jpg",
"https://i.postimg.cc/dtFjx76D/690d0ee451c69d98c4d711.jpg",
"https://i.postimg.cc/nc1GbHS2/9bcf7e272105ed5bb41412.jpg",
"https://i.postimg.cc/4xNbXrrg/a2d0263f791db543ec0c8.jpg",
    ]; //ảnh sao tùy bạn
    const link = anh[Math.floor(Math.random() * anh.length)];
    
     var callback = () => api.sendMessage({body:`💞 = 𝐘́ 𝐍𝐠𝐡𝐢̃𝐚 𝐋𝐚̀𝐦 𝐍𝐠𝐮̛𝐨̛̀𝐢 = 💞\n\n🌸──── •❤️‍🔥• ────🌸\n\n${daoly}\n\n🎀──── •❤️‍🔥• ────🎀\n 𝑵𝒈𝒖𝒚𝒆̂̃𝒏 𝑷𝒉𝒂̣𝒎 𝑴𝒊𝒏𝒉 𝑻𝒖𝒂̂́𝒏 ❤️`,attachment: fs.createReadStream(__dirname + "/cache/daoly.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/daoly.png"),event.messageID);
                return request(encodeURI(`${link}`)).pipe(fs.createWriteStream(__dirname + '/cache/daoly.png')).on('close', () => callback());
      
  }
  //nếu bạn có api ảnh thì làm như sau
  //axios.get('thay api vao day').then(res => {
  //let ext = res.data.url.substring (res.data.url.lastIndexOf(".") + 1); 
 // let callback = function () {
         // api.sendMessage({
         //   body: `${daoly}`,
        //    attachment: fs.createReadStream(__dirname + `/cache/daoly.${ext}`)
        //  }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/daoly.${ext}`), event.messageID);
      //  };
      //  request(res.data.url).pipe(fs.createWriteStream(__dirname + `/cache/daoly.${ext}`)).on("close", callback);
    //  })    
 // }
