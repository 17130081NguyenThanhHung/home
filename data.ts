import type { Feast } from './types';

const placeholder = {
  vi: `<p class="text-center text-gray-400 italic">Nội dung cho phần này đang được cập nhật...</p>`,
  en: `<p class="text-center text-gray-400 italic">Content for this section is being updated...</p>`,
};

export const FEASTS: Feast[] = [
  {
    id: 'st-elizabeth-ann-seton',
    date: '01-04',
    title: { 
      vi: 'Thánh Nữ Ê-li-za-bét An-na Xe-tôn',
      en: 'St. Elizabeth Ann Seton'
    },
    subtitle: {
      vi: '(Sainte Elizabeth Ann Seton)',
      en: '(Saint Elizabeth Ann Seton)'
    },
    type: 'Lễ nhớ',
    sections: {
      biography: {
        vi: `<strong>Tiểu sử</strong>
Elizabeth Ann Baley sinh ở New York ngày 28 tháng 8 năm 1774, khi sắp xảy ra các biến cố đưa Hợp chủng quốc Hoa Kỳ đến nền Độc lập. Mồ côi mẹ lúc ba tuổi, cô bé lớn lên trong một gia đình được đánh dấu bởi sự tục huyền của cha cô và việc gia đình thuộc Giáo Hội Tân giáo.
Thánh nữ kết hôn với William Seton lúc 20 tuổi, và từ cuộc hôn nhân này, bà có năm người con. Trong một chuyến đi công tác đến Ý, chồng bà qua đời ở Pise ngày 27 tháng 12 năm 1803. Bà được một gia đình thân tình công giáo đón tiếp và an ủi: đó là gia đình Felicchi mà bà phát hiện có lòng bác ái sâu xa.
Trở về Hoa Kỳ, Elizabeth, là tín đồ Tân giáo sùng đạo, giờ đây lại cảm thấy bị giáo thuyết Công giáo thu hút mạnh mẽ. Gia đình bà, vì không hiểu sự tìm hiểu nghiên cứu này của bà, nên ruồng bỏ bà. Khi đó, Elizabeth đương đầu với rất nhiều thử thách cá nhân cũng như gia đình. Cuối cùng, đến ngày 14 tháng 3 năm 1805, bà được tiếp nhận vào Giáo Hội Công Giáo.
Trong khi vẫn có một cuộc sống thiêng liêng mãnh liệt và thường xuyên chăm lo giáo dục con cái, bà vẫn theo đuổi sở thích riêng là được dấn thân trọn vẹn cho các công việc bác ái. Đến năm 1809, bà sáng lập Hội Dòng các Nữ tu Bác ái, ở giáo phận Baltimore, nhận thánh Giuse làm quan thầy, để giáo dục các thiếu nữ. Theo sự hướng dẫn của Đức Cha Cheverus, bà muốn được sát nhập với Tu Hội Nữ Tử Bác Ái thánh Vinh Sơn Phaolô, thế nhưng tình hình chính trị lúc bấy giờ cản trở kế hoạch này. Đến ngày 4 tháng 01 năm 1821, Ê-li-za-bét An-na Xe-tôn qua đời ở Emmitsburg. Bà cũng là người làm phát sinh ra năm nhánh các nữ tu Hoa Kỳ hoạt động bác ái. Nhánh ở Emmitsburg sẽ hợp nhất với Tu Hội Nữ Tử Bác Ái vào ngày 25 tháng 3 năm 1850.
Được Lời Chúa rèn luyện, cùng với một tình yêu cuồng nhiệt đối với Giáo Hội, Ê-li-za-bét An-na Xe-tôn để lại một tư tưởng vững chắc. Ngài được Đức Giáo Hoàng Gioan XXIII tuyên phong chân phước ngày 17 tháng 3 năm 1963, và được Đức Phaolô VI tôn phong hiển thánh ngày 14 tháng 9 năm 1975.`,
        en: `<strong>Biography</strong>
Elizabeth Ann Bayley was born in New York on August 28, 1774, on the eve of the events that would lead the United States of America to its Independence. Orphaned of her mother at the age of three, she grew up in a family marked by her father's remarriage and their membership in the Episcopal Church.
She married William Seton at the age of 20, and from this marriage, she had five children. During a business trip to Italy, her husband died in Pisa on December 27, 1803. She was welcomed and comforted by a friendly Catholic family: the Felicchi family, in whom she discovered profound charity.
Upon her return to the United States, Elizabeth, a devout Episcopalian, now felt strongly attracted to Catholic doctrine. Her family, not understanding her quest, abandoned her. Elizabeth then faced many personal and family trials. Finally, on March 14, 1805, she was received into the Catholic Church.
While maintaining an intense spiritual life and regularly caring for the education of her children, she pursued her own interest in being fully committed to charitable works. In 1809, she founded the Congregation of the Sisters of Charity in the diocese of Baltimore, with St. Joseph as its patron, for the education of young girls. Under the guidance of Bishop Cheverus, she wished to be affiliated with the Company of the Daughters of Charity of St. Vincent de Paul, but the political situation at the time prevented this plan. On January 4, 1821, Elizabeth Ann Seton died in Emmitsburg. She was also the originator of five branches of American Sisters of Charity. The Emmitsburg branch would merge with the Company of the Daughters of Charity on March 25, 1850.
Formed by the Word of God, with a fervent love for the Church, Elizabeth Ann Seton left a solid legacy of thought. She was beatified by Pope John XXIII on March 17, 1963, and canonized by Pope Paul VI on September 14, 1975.`
      },
      massReadings: {
        vi: `<strong>THÁNH LỄ</strong>

<strong>Ca nhập lễ (Gr 17, 7 - 8)</strong>
Phúc thay kẻ đặt niềm tin vào Đức Chúa, và có Đức Chúa làm chỗ nương thân. Người ấy như cây trồng bên dòng nước, và không ngừng trổ sinh hoa trái.

<strong>Lời nguyện nhập lễ</strong>
Lạy Chúa, thánh nữ Ê-li-za-bét An-na Xe-tôn đã tha thiết ao ước tìm thấy Chúa, nên Chúa đã ban cho thánh nữ Ánh Sáng rực rỡ của Chúa. Xin ban cho chúng con, theo gương người để lại, biết đáp trả tiếng gọi của Tin Mừng, và kiên vững trong đức tin, nhiệt thành trong đức mến. Chúng con cầu xin.

<strong>Bài đọc (Gr 20, 7,8b-9)</strong>
<em>(Để đáp trả tiếng gọi của Thiên Chúa, Ê-li-za-bét An-na Xe-tôn đã phải chiến đấu chống lại gia đình mình và chống lại những cám dỗ của riêng mình).</em>
<strong>Bài trích sách Ngôn sứ Giêrêmia</strong>
Lạy Đức Chúa Ngài đã quyến rũ con, và con đã để cho Ngài quyến rũ. Ngài mạnh hơn con, và Ngài đã thắng. Suốt ngày con đã nên trò cười cho thiên hạ, để họ nhạo báng con. Vì Lời Đức Chúa mà con đây bị sỉ nhục và chế giễu suốt ngày. Có lần con tự nhủ: “Tôi sẽ không nghĩ đến Người, cũng chẳng nhân danh Người mà nói nữa”. Nhưng Lời Ngài cứ như ngọn lửa bừng cháy trong tim, âm ỉ trong xương cốt. Con nén chịu đến phải hao mòn, nhưng làm sao nén được!
Đó là lời Chúa.

<strong>Đáp ca (Tv 15)</strong>
<strong>Đ. Lạy Chúa, Chúa là nguồn hạnh phúc và niềm vui của con!</strong>
Lạy Chúa Trời xin giữ gìn con,
vì bên Ngài con đang ẩn náu.
Con thưa cùng Chúa: “Ngài là Chúa con thờ,
ngoài Chúa ra đâu là hạnh phúc”. <strong>Đ.</strong>

Con chúc tụng Chúa hằng thương chỉ dạy,
ngay cả đêm trường, lòng dạ nhắn nhủ con
Con luôn nhớ có Ngài trước mặt,
được Ngài ở bên chẳng nao núng bao giờ. <strong>Đ.</strong>

Chúa sẽ dạy con biết đường về cõi sống:*
trước Thánh Nhan ôi vui sướng tràn trề,
ở bên Ngài, hoan lạc chẳng hề vơi! <strong>Đ.</strong>

<strong>Tung hô Tin Mừng (Ga 15,16)</strong>
Ha-lê-lu-i-a. Ha-lê-lu-i-a. Thầy đã chọn anh em từ giữa thế gian, để anh em ra đi, sinh được hoa trái, và hoa trái của anh em tồn tại. Ha-lê-lu-i-a.

<strong>Tin Mừng (Ga 15, 9 – 17)</strong>
<strong>X Tin Mừng Đức Giêsu Kitô theo thánh Gio-an</strong>
Trước khi bỏ thế gian về với Chúa Cha, Đức Giêsu nói với các môn đệ: “Chúa Cha đã yêu mến Thầy thế nào, Thầy cũng yêu mến anh em như vậy. Anh em hãy ở lại trong tình thương của Thầy. Nếu anh em giữ các điều răn của Thầy, anh em sẽ ở lại trong tình thương của Thầy, như Thầy đã giữ các điều răn của Cha Thầy và ở lại trong tình thương của Người. Các điều ấy, Thầy đã nói với anh em để anh em được hưởng niềm vui của Thầy và niềm vui của anh em được nên trọn vẹn.
Đây là điều răn của Thầy: anh em hãy yêu thương nhau như Thầy đã yêu thương anh em. Không có tình thương nào cao cả hơn tình thương của người đã hy sinh tính mạng vì bạn hữu của mình. Anh em là bạn hữu của Thầy, nếu anh em thực hiện những điều Thầy truyền dạy. Thầy không còn gọi anh em là tôi tớ nữa, vì tôi tớ không biết việc chủ làm. Nhưng Thầy gọi anh em là bạn hữu, vì tất cả những gì Thầy nghe được nơi Cha Thầy, Thầy đã cho anh em biết.
Không phải anh em đã chọn Thầy, nhưng chính Thầy đã chọn anh em, và cắt cử anh em để anh em ra đi, sinh được hoa trái, và hoa trái của anh em tồn tại, hầu tất cả những gì anh em xin cùng Chúa Cha nhân danh Thầy, thì Người ban cho anh em. Điều Thầy truyền dạy anh em là “hãy yêu thương nhau”.
Đó là lời Chúa.

<strong>Lời nguyện tiến lễ</strong>
Lạy Chúa, xin đón nhận lễ phẩm của dân Chúa. Khi chúng con nhớ lại tình yêu vô biên của Con Chúa, xin cho chúng con, theo gương thánh nữ Ê-li-za-bét An-na, biết yêu mến Chúa và yêu thương tha nhân với một tâm hồn quảng đại hơn. Chúng con cầu xin.

<strong>TIỀN TỤNG</strong>
Lạy Cha chí thánh,
là Thiên Chúa toàn năng hằng hữu,
chúng con tạ ơn Cha mọi nơi mọi lúc,
thật là chính đáng, phải đạo
và đem lại ơn cứu độ cho chúng con
nhờ Đức Kitô, Chúa chúng con.
Cha luôn làm sống lại sức mạnh của Giáo Hội Cha
nhờ niềm tin của các thánh,
và như vậy Cha cho chúng con thấy được tình yêu của Cha.
Hôm nay, chúng con tạ ơn Cha,
nhờ gương sáng của các ngài khích lệ,
và nhờ lời chuyển cầu của các ngài trợ giúp,
chúng con hăng say hoạt động để Nước Cha trị đến.
Vì thế, lạy Cha, cùng với toàn thể thiên thần và các thánh,
chúng con chúc tụng vinh quang Cha rằng:

<strong>Ca hiệp lễ (Ga 8,12)</strong>
Đức Giê-su nói với người Do-thái:
“Tôi là ánh sáng thế gian.
Ai theo tôi, sẽ không phải đi trong bóng tối,
nhưng sẽ nhận được ánh sáng đem lại sự sống”.

<strong>Lời nguyện hiệp lễ</strong>
Lạy Thiên Chúa toàn năng, xin cho Bí tích Thánh Thể này trợ giúp chúng con, để theo gương thánh nữ Ê-li-za-bét An-na, tâm hồn và cả đời sống chúng con biểu lộ tình bác ái huynh đệ và làm tỏa rạng chân lý. Chúng con cầu xin.`,
        en: `[English Mass Readings coming soon...]`
      },
      officeOfReadings: placeholder,
      lauds: placeholder,
      middayPrayer: placeholder,
      vespers: placeholder,
      compline: placeholder,
    },
  },
  {
    id: 'blessed-lindalva-justa-de-oliveira',
    date: '01-07',
    title: {
      vi: 'Chân Phước Lin-đan-va Giút-ta Ô-li-bây-ra',
      en: 'Blessed Lindalva Justa de Oliveira'
    },
    subtitle: {
      vi: '(Blessed Lindalva Justa de Oliveira)',
      en: '(Blessed Lindalva Justa de Oliveira)'
    },
    type: 'Lễ nhớ',
    sections: {
      biography: {
        vi: `<strong>Tiểu sử</strong>
Chân phước Lin-đan-va Giút-ta Ô-li-bây-ra sinh ngày 20/10/1953, tại Sitio Maihada de Areira, Acu, ở Brasil. Từ thời thơ ấu, chân phước đã trau dồi một tình yêu mến đặc biệt đối với người nghèo. Khi trở thành Nữ Tử Bác Ái Thánh Vinh Sơn Phaolô, chị phục vụ người nghèo và người già cả tại một viện Dưỡng Lão… Sơ là tấm gương tuyệt vời trong công việc, trong sự dấn thân để tạo tinh thần hiệp thông với mọi người, nhất là với các chị em trong tu hội. Công việc bác ái của chị đã không ngừng phát triển cho tới ngày chị bảo vệ sự trinh khiết của mình cho đến chết. Được ơn tử đạo, chân phước chết tử đạo ngày 09 tháng 4 năm 1993. Chị được phong chân phước ngày 2 tháng 12 năm 1993, tại Salvador-Bahia, ở Brasil.`,
        en: `[English Biography coming soon...]`
      },
      massReadings: {
        vi: `<strong>THÁNH LỄ</strong>

<strong>Ca nhập lễ</strong>
Chân phước Lin-đan-va Giút-ta Ô-li-bây-ra quả thực là một vị tử đạo, vì chị đã đổ máu mình ra vì danh Đức Kitô. Chị đã không sợ hãi trước những đe dọa, và chị đã đạt được Nước Trời.

<strong>Lời nguyện nhập lễ</strong>
Lạy Chúa, nơi Chân Phước Lin-đan-va, Chúa đã chuẩn nhận việc phục vụ người nghèo bằng phần thưởng tử đạo. Nhờ lời chuyển cầu của người, xin Chúa cho chúng con khi thực hiện công việc vì lòng yêu mến Chúa, biết hy sinh cuộc sống của mình làm của lễ đẹp lòng Chúa. Chúng con cầu xin.

<strong>Bài đọc (1Ga 5, 1-5)</strong>
<strong>Bài trích thư thứ nhất của Thánh Gio-an Tông Đồ</strong>
Phàm ai tin rằng Đức Giêsu là Đấng Kitô, kẻ ấy đã được Thiên Chúa sinh ra. Và ai yêu mến Đấng sinh thành, thì cũng yêu thương kẻ được Đấng ấy sinh ra. Căn cứ vào điều này, chúng ta biết được mình yêu thương con cái Thiên Chúa và thi hành các điều răn của Người. Quả thật, yêu mến Thiên Chúa là tuân giữ các điều răn của Người. Mà các điều răn của Người có nặng nề gì đâu, vì mọi kẻ đã được Thiên Chúa sinh ra đều thắng được thế gian. Và điều làm cho chúng ta thắng được thế gian, đó là lòng tin của chúng ta. Ai là người thắng được thế gian, nếu không phải là người tin rằng Đức Giêsu là Con Thiên Chúa ?
Đó là lời Chúa.

<strong>Đáp ca (Tv 36, 4-5, 5-6, 30-31)</strong>
<strong>Đ. Lạy Chúa, hy vọng của con đặt ở nơi Chúa.</strong>
Cứ tin tưởng vào Chúa và làm điều thiện,
thì sẽ được ở trong đất nước và sống yên hàn.
Hãy lấy Chúa làm niềm vui của bạn,
Người sẽ cho được phỉ chí toại lòng. <strong>Đ.</strong>

Hãy ký thác đường đời cho Chúa,
tin tưởng vào Người, Người sẽ ra tay.
Chính nghĩa bạn, Chúa sẽ làm rực rỡ tựa bình minh,
công lý bạn, Người sẽ cho huy hoàng như chính ngọ. <strong>Đ.</strong>

Miệng người công chính niệm lẽ khôn ngoan
và lưỡi họ nói lên điều chính trực.
Luật Thiên Chúa, họ ghi tạc vào lòng,
bước chân đi không hề lảo đảo. <strong>Đ.</strong>

<strong>Tung hô Tin Mừng (1Pr 4,14)</strong>
Ha-lê-lu-i-a. Ha-lê-lu-i-a. Nếu bị sỉ nhục vì danh Đức Kitô, anh em thật có phúc, bởi lẽ Thần Khí vinh hiển và uy quyền, là Thần Khí của Thiên Chúa, ngự trên anh em. Ha-lê-lu-i-a.

<strong>Tin Mừng (Lc 9,23-26)</strong>
<strong>X Tin Mừng Đức Giêsu Kitô theo thánh Lu-ca</strong>
Đức Giêsu nói với mọi người: “Ai muốn theo tôi, phải từ bỏ chính mình, vác thập giá mình hằng ngày mà theo. Quả vậy, ai muốn cứu mạng sống mình, thì sẽ mất; còn ai liều mạng sống mình vì tôi, thì sẽ cứu được mạng sống ấy. Vì người nào được cả thế giới mà phải đánh mất chính mình hay là thiệt thân, thì nào có ích lợi gì? Ai xấu hổ vì tôi và vì những lời của tôi, thì Con Người cũng sẽ xấu hổ vì kẻ ấy, khi Người ngự đến trong vinh quang của mình, của Chúa Cha và các thánh thiên thần.
Đó là lời Chúa.

<strong>Lời nguyện tiến lễ</strong>
Lạy Chúa, chúng con dâng tiến Chúa những lễ vật này trong ngày lễ kính chân phước Lin-đan-va: Xin Chúa vui lòng chấp nhận như Chúa đã vui lòng đón nhận cuộc tử đạo của Người. Chúng con cầu xin.

<strong>TIỀN TỤNG</strong>
Lạy Cha chí thánh,
là Thiên Chúa toàn năng hằng hữu, chúng con tạ ơn Chúa mọi nơi mọi lúc,
thật là chính đáng, phải đạo và đem lại ơn cứu độ cho chúng con.
Chúng con nhận biết dấu chỉ sáng ngời của ân sủng Cha
qua việc tử đạo của Chị.
Khi hy sinh mạng sống mình như Đức Kitô,
Chị đã tôn vinh Danh Cha.
Chính sức mạnh của Cha được tỏ rõ qua sự yếu đuối
khi Cha ban cho những thụ tạo mỏng dòn
được làm chứng cho Cha nhờ Đức Kitô, Chúa chúng con.
Vì thế cùng với các Thiên thần trên trời,
chúng con dưới trần gian chúc tụng, tôn thờ
và tung hô Cha rằng:

<strong>Ca hiệp lễ (Mt 16, 24)</strong>
Chúa Giêsu phán cùng các môn đệ rằng: “Nếu ai muốn theo Thầy, thì hãy từ bỏ mình đi, và vác thập giá mình mà theo Thầy”.

<strong>Lời nguyện hiệp lễ</strong>
Lạy Chúa, Chúa đã cho chân phước Lin-đan-va được kể vào số các thánh trên trời, với hai danh hiệu: Trinh nữ và Tử đạo; nhờ sức mạnh của việc rước lễ này, xin Chúa cho chúng con được chiến thắng mọi thử thách, để một ngày kia được hưởng vinh quang nước trời. Chúng con cầu xin.`,
        en: `[English Mass Readings coming soon...]`
      },
      officeOfReadings: placeholder,
      lauds: placeholder,
      middayPrayer: placeholder,
      vespers: placeholder,
      compline: placeholder,
    }
  },
  {
    id: 'st-paul-conversion',
    date: '01-25',
    title: {
      vi: 'Thánh Phaolô Tông Đồ Trở Lại',
      en: 'Conversion of Saint Paul the Apostle'
    },
    subtitle: {
      vi: 'Kỷ niệm ngày thành lập Tu Hội Truyền Giáo',
      en: 'Anniversary of the foundation of the Congregation of the Mission'
    },
    type: 'Lễ kính',
    sections: {
        biography: {
          vi: `<strong>Tiểu sử</strong>
Hôm nay, chúng ta cử hành việc Đức Giêsu Kitô Phục Sinh tỏ mình ra cho Sao-lô, như là Đấng Mêsia vinh hiển nơi Thiên Chúa và đang sống động nơi các môn đệ, và Người còn trở nên một với họ. (Cv 9).
Chính vào ngày 25 tháng 01 năm 1617, tại Folleville (Somme) “đã diễn ra bài giảng đầu tiên của Tu Hội Truyền Giáo” và Chúa cho Tu Hội “được bắt đầu”, vì thánh Vinh Sơn có nói rõ điều đó (SV XII, 169).
Thiên Chúa, Đấng kêu gọi Vị Tông đồ dân ngoại, cũng khơi dậy nơi Vinh Sơn Phao-lô việc rao giảng Tin Mừng cho người nghèo khó, “điều mà Chúa cố ý cho xảy ra vào ngày hôm đó” (SV XI, 4).`,
          en: `[English Biography coming soon...]`
        },
        massReadings: {
          vi: `<strong>THÁNH LỄ</strong>

<strong>Ca nhập lễ (2Tm 1, 12; 4, 8)</strong>
Tôi biết tôi tin vào ai; và tôi xác tín rằng Chúa là vị Thẩm Phán chí công sẽ trao phần thưởng đó cho tôi trong ngày Người xuất hiện.

<strong>Kinh Vinh Danh</strong>

<strong>Lời nguyện nhập lễ</strong>
Lạy Thiên Chúa là Cha chúng con, trong ngày chúng con cử hành lễ thánh Phaolô tông đồ trở lại, Chúa đã kêu gọi Thánh Vinh Sơn Phaolô thành lập một gia đình thiêng liêng để rao giảng Tin Mừng cho người nghèo khó và đào tạo hàng giáo sĩ. Xin làm cho chúng con trở nên xứng đáng rao giảng Tin Mừng sự thật và bình an. Chúng con cầu xin.`,
          en: `[English Mass Readings coming soon...]`
        },
        officeOfReadings: placeholder,
        lauds: placeholder,
        middayPrayer: placeholder,
        vespers: placeholder,
        compline: placeholder,
    },
  },
  {
      id: 'blessed-marie-anne-vaillot-odile-baumgarten',
      date: '02-01',
      title: {
        vi: 'Các Chân Phước Ma-ri-a An-na Vai-ô và Ô-đi-la Bôm-gác-tăng',
        en: 'Blessed Marie-Anne Vaillot and Odile Baumgarten'
      },
      subtitle: {
        vi: '(Blessed Marie Anne Vaillot và Odile Baumgarten)',
        en: '(Blessed Marie Anne Vaillot and Odile Baumgarten)'
      },
      type: 'Lễ nhớ',
      sections: {
          biography: {
            vi: `<strong>Tiểu sử</strong>
Những năm 1793-1794, ngay giữa thời Cách Mạng, khủng bố hoành hành trên khắp nước Pháp, và đặc biệt ác liệt ở các vùng phía Tây, là nơi nông dân đã cầm vũ khí để bảo vệ đức tin của mình. Hơn 200 linh mục và tu sĩ bị giết hoặc chết trong tù, vì đã từ chối tuyên thệ trung thành với Hiến Chương dân sự của hàng Giáo Sĩ, là văn kiện tách Giáo Hội Pháp ra khỏi Giáo Hội Rôma. Nhiều giáo dân bị kết án tử hình vì muốn trung thành với Chúa Giêsu Kitô trong Giáo Hội. Trong số các vị tử đạo này, có hai Nữ Tử Bác Ái của bệnh viện Thánh Gioan ở Angers: các chị bị xử bắn ngày 1 tháng 2 năm 1794.
Sơ Ma-ri-a An-na Vai-ô, sinh tại Fontainebleau ngày 13 tháng 5 năm 1734, gia nhập Tu Hội Nữ Tử Bác Ái ngày 25 tháng 9 năm 1761. Sơ giữ chức quản lý ở bệnh viện Angers.
Sơ Ô-đi-la Bôm-gác-tăng, sinh tại Gondrexange ở Lorraine ngày 15 tháng 11 năm 1750, gia nhập Tu Hội Nữ Tử Bác Ái ngày 4 tháng 8 năm 1775. Sơ phụ trách tủ thuốc ở bệnh viện Angers.
Vì ảnh hưởng tinh thần và đạo đức của các Chị ở trong Cộng Đoàn, nên người ta chọn hai Sơ làm nạn nhân đầu tiên.
Sơ Ma-ri-a An-na Vai-ô và Sơ Ô-đi-la Bôm-gác-tăng được Đức Thánh Cha Gioan Phaolô II phong chân phước, cùng với 97 vị tử đạo khác ở Angers, vào ngày 19 tháng 2 năm 1984.`,
            en: `[English Biography coming soon...]`
          },
          massReadings: {
            vi: `<strong>THÁNH LỄ</strong>

<strong>Ca nhập lễ (Kh 12, 11-12)</strong>
Chúng ta hãy vui mừng cùng các thánh tử đạo: Họ đã thắng được nhờ máu Con Chiên. Họ coi thường tính mạng, sẵn sàng chịu chết. Vì thế, họ hiển trị cùng Đức Kitô.

<strong>Lời nguyện nhập lễ</strong>
Lạy Chúa, Chúa đã làm sống lại tình yêu của Đức Kitô nơi các chân phước Ma-ri-a An-na Vai-ô và Ô-đi-la Bôm-gác-tăng, đã khiến cho các ngài trở nên quảng đại trong trong việc phục vụ người nghèo, và sẵn sàng hy sinh mạng sống mình vì Chúa. Xin ban cho chúng con sức mạnh để noi gương đức tin vững mạnh và lòng bác ái không mệt mỏi của các ngài, mà luôn sẵn sàng tha thứ, và làm chứng tá rõ ràng như các ngài trước mặt người đời. Chúng con cầu xin.`,
            en: `[English Mass Readings coming soon...]`
          },
          officeOfReadings: placeholder,
          lauds: placeholder,
          middayPrayer: placeholder,
          vespers: placeholder,
          compline: placeholder,
      },
  },
  {
    id: 'blessed-rosalie-rendu',
    date: '02-07',
    title: {
        vi: 'Chân Phước Rô-sa-li-a Răng-đu',
        en: 'Blessed Rosalie Rendu'
    },
    subtitle: {
        vi: 'Nữ tu',
        en: 'Nun'
    },
    type: 'Lễ nhớ',
    sections: {
        biography: placeholder,
        massReadings: placeholder,
        officeOfReadings: placeholder,
        lauds: placeholder,
        middayPrayer: placeholder,
        vespers: placeholder,
        compline: placeholder,
    },
  },
  {
    id: 'st-vincent-de-paul-relic-translation',
    date: '02-13',
    title: {
        vi: 'Chuyển Xương Thánh Vinh Sơn Phaolô',
        en: 'Translation of the Relics of St. Vincent de Paul'
    },
    subtitle: {
        vi: 'Kỷ niệm',
        en: 'Commemoration'
    },
    type: 'Kỷ niệm',
    sections: {
        biography: placeholder,
        massReadings: placeholder,
        officeOfReadings: placeholder,
        lauds: placeholder,
        middayPrayer: placeholder,
        vespers: placeholder,
        compline: placeholder,
    },
  },
  {
    id: 'st-louise-de-marillac',
    date: '03-15',
    title: {
        vi: 'Thánh Nữ Lu-i-sa đờ Ma-ri-lắc',
        en: 'St. Louise de Marillac'
    },
    subtitle: {
        vi: 'Đấng Sáng Lập',
        en: 'Co-Foundress'
    },
    type: 'Đại lễ',
    sections: {
        biography: placeholder,
        massReadings: placeholder,
        officeOfReadings: placeholder,
        lauds: placeholder,
        middayPrayer: placeholder,
        vespers: placeholder,
        compline: placeholder,
    },
  },
  {
    id: 'blessed-marta-wiecka',
    date: '05-30',
    title: {
        vi: 'Chân Phước Mác-ta Vi-ét-cka',
        en: 'Blessed Marta Wiecka'
    },
    subtitle: {
        vi: 'Nữ tu, Tử đạo',
        en: 'Nun, Martyr'
    },
    type: 'Lễ nhớ',
    sections: {
        biography: placeholder,
        massReadings: placeholder,
        officeOfReadings: placeholder,
        lauds: placeholder,
        middayPrayer: placeholder,
        vespers: placeholder,
        compline: placeholder,
    },
  },
  {
    id: 'st-justin-de-jacobis',
    date: '07-31',
    title: {
        vi: 'Thánh Gút-ti-nô đờ Gia-cô-bít',
        en: 'St. Justin de Jacobis'
    },
    subtitle: {
        vi: 'Giám mục',
        en: 'Bishop'
    },
    type: 'Lễ nhớ',
    sections: {
        biography: placeholder,
        massReadings: placeholder,
        officeOfReadings: placeholder,
        lauds: placeholder,
        middayPrayer: placeholder,
        vespers: placeholder,
        compline: placeholder,
    },
  },
  {
    id: 'blessed-ghebre-michael',
    date: '08-30',
    title: {
        vi: 'Chân Phước Ghê-brê Mi-ca-en',
        en: 'Blessed Ghebre Michael'
    },
    subtitle: {
        vi: 'Linh mục, Tử đạo',
        en: 'Priest, Martyr'
    },
    type: 'Lễ nhớ',
    sections: {
        biography: placeholder,
        massReadings: placeholder,
        officeOfReadings: placeholder,
        lauds: placeholder,
        middayPrayer: placeholder,
        vespers: placeholder,
        compline: placeholder,
    },
  },
  {
    id: 'blessed-frederic-ozanam',
    date: '09-09',
    title: {
        vi: 'Chân Phước Phê-rê-đê-ric Ô-za-nam',
        en: 'Blessed Frederic Ozanam'
    },
    subtitle: {
        vi: 'Giáo dân',
        en: 'Layman'
    },
    type: 'Lễ nhớ',
    sections: {
        biography: placeholder,
        massReadings: placeholder,
        officeOfReadings: placeholder,
        lauds: placeholder,
        middayPrayer: placeholder,
        vespers: placeholder,
        compline: placeholder,
    },
  },
  {
    id: 'st-john-gabriel-perboyre',
    date: '09-11',
    title: {
        vi: 'Thánh Gioan Ga-bri-en Péc-boa',
        en: 'St. John Gabriel Perboyre'
    },
    subtitle: {
        vi: 'Linh mục, Tử đạo',
        en: 'Priest, Martyr'
    },
    type: 'Lễ kính',
    sections: {
        biography: placeholder,
        massReadings: placeholder,
        officeOfReadings: placeholder,
        lauds: placeholder,
        middayPrayer: placeholder,
        vespers: placeholder,
        compline: placeholder,
    },
  },
  {
    id: 'st-vincent-de-paul-main',
    date: '09-27',
    title: {
        vi: 'Thánh Vinh Sơn Phaolô',
        en: 'St. Vincent de Paul'
    },
    subtitle: {
        vi: 'Linh mục, Đấng Sáng Lập',
        en: 'Priest, Founder'
    },
    type: 'Đại lễ',
    sections: {
        biography: placeholder,
        massReadings: placeholder,
        officeOfReadings: placeholder,
        lauds: placeholder,
        middayPrayer: placeholder,
        vespers: placeholder,
        compline: placeholder,
    },
  },
  {
      id: 'st-ignatius-of-antioch',
      date: '10-17',
      title: {
          vi: 'Thánh Inhaxiô thành Antiôkia',
          en: 'Saint Ignatius of Antioch'
      },
      subtitle: {
          vi: 'Giám mục, Tử đạo',
          en: 'Bishop, Martyr'
      },
      type: 'Lễ kính',
      sections: {
          biography: {
            vi: `<strong>Tiểu sử</strong>
Thánh Inhaxiô, cũng gọi là Theophorus (người mang Thiên Chúa), là giám mục thứ hai của Antioch, kế vị thánh Evodius, người được cho là do chính các Tông đồ đặt lên. Ngài là một người nhiệt thành và đầy lòng yêu mến Chúa Kitô. Trong cuộc bách hại của hoàng đế Trajan, ngài bị bắt và bị kết án phải ném cho thú dữ ăn thịt tại Rôma.
Trên đường tới Rôma, ngài đã viết bảy lá thư nổi tiếng cho các giáo đoàn khác nhau, trong đó ngài khuyến khích họ giữ vững đức tin, hiệp nhất với giám mục của mình, và cảnh giác với các lạc giáo. Các lá thư của ngài là một kho tàng vô giá về thần học và linh đạo của Giáo hội sơ khai. Ngài khao khát được tử đạo để nên một với Chúa Kitô, và lời cầu nguyện của ngài đã được nhậm. Ngài chịu tử đạo tại hí trường Flavianô ở Rôma vào khoảng năm 107.`,
            en: `<strong>Biography</strong>
Saint Ignatius, also called Theophorus (God-bearer), was the second bishop of Antioch, succeeding Saint Evodius, who is said to have been appointed by the Apostles themselves. He was a man of zeal and full of love for Christ. During the persecution of Emperor Trajan, he was arrested and condemned to be devoured by wild beasts in Rome.
On his way to Rome, he wrote seven famous letters to various churches, in which he encouraged them to remain firm in the faith, to be united with their bishops, and to be wary of heresies. His letters are a priceless treasure of the theology and spirituality of the early Church. He longed for martyrdom in order to be united with Christ, and his prayer was answered. He was martyred in the Flavian Amphitheater in Rome around the year 107.`
          },
          massReadings: {
            vi: `<strong>THÁNH LỄ</strong>

<strong>Ca nhập lễ (Ga 12, 24-25)</strong>
Thật, Thầy bảo thật anh em, nếu hạt lúa gieo vào lòng đất mà không chết đi, thì nó vẫn trơ trọi một mình; còn nếu chết đi, nó mới sinh được nhiều hạt khác. Ai yêu quý mạng sống mình, thì sẽ mất; còn ai coi thường mạng sống mình ở đời này, thì sẽ giữ lại được cho sự sống đời đời.

<strong>Lời nguyện nhập lễ</strong>
Lạy Chúa, Chúa đã dùng lời chứng của thánh giám mục tử đạo Inhaxiô để soi sáng cho Hội Thánh. Xin cho chúng con, những người lãnh nhận bánh ban sự sống đời đời, cũng can đảm làm chứng cho Tin Mừng. Chúng con cầu xin...`,
            en: `[English Mass Readings coming soon...]`
          },
          officeOfReadings: placeholder,
          lauds: placeholder,
          middayPrayer: placeholder,
          vespers: placeholder,
          compline: placeholder,
      }
  },
  {
      id: 'st-luke-the-evangelist',
      date: '10-18',
      title: {
          vi: 'Thánh Luca, Tác giả Tin Mừng',
          en: 'Saint Luke, Evangelist'
      },
      subtitle: {
          vi: 'Lễ Kính - Dữ liệu mẫu cho ngày mai',
          en: 'Feast - Sample data for tomorrow'
      },
      type: 'Lễ kính',
      sections: {
          biography: {
            vi: `<strong>Tiểu sử mẫu</strong>
Thánh Luca là tác giả của sách Tin Mừng thứ ba và sách Công vụ Tông đồ. Ngài là một người gốc Hy Lạp, một thầy thuốc, và là bạn đồng hành thân thiết của Thánh Phaolô Tông đồ. Tin Mừng của ngài đặc biệt nhấn mạnh đến lòng thương xót của Chúa Giêsu đối với người nghèo và người tội lỗi.`,
            en: `<strong>Sample Biography</strong>
Saint Luke is the author of the third Gospel and the Acts of the Apostles. He was a Greek native, a physician, and a close companion of Saint Paul the Apostle. His Gospel especially emphasizes Jesus' compassion for the poor and sinners.`
          },
          massReadings: placeholder,
          officeOfReadings: placeholder,
          lauds: placeholder,
          middayPrayer: placeholder,
          vespers: placeholder,
          compline: placeholder,
      }
  },
  {
    id: 'st-catherine-laboure',
    date: '11-28',
    title: {
        vi: 'Thánh Ca-ta-ri-na La-bu-rê',
        en: 'St. Catherine Labouré'
    },
    subtitle: {
        vi: 'Nữ tu',
        en: 'Nun'
    },
    type: 'Lễ nhớ',
    sections: {
        biography: placeholder,
        massReadings: placeholder,
        officeOfReadings: placeholder,
        lauds: placeholder,
        middayPrayer: placeholder,
        vespers: placeholder,
        compline: placeholder,
    },
  },
  {
    id: 'blessed-marcantonio-durando',
    date: '12-10',
    title: {
        vi: 'Chân Phước Mác-can-tô-ni-ô Đu-ran-đô',
        en: 'Blessed Marcantonio Durando'
    },
    subtitle: {
        vi: 'Linh mục',
        en: 'Priest'
    },
    type: 'Lễ nhớ',
    sections: {
        biography: placeholder,
        massReadings: placeholder,
        officeOfReadings: placeholder,
        lauds: placeholder,
        middayPrayer: placeholder,
        vespers: placeholder,
        compline: placeholder,
    },
  }
];