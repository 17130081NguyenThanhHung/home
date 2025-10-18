import type { Feast } from './types';

const placeholder = {
  vi: `<p class="text-center text-gray-400 italic">Nội dung cho phần này đang được cập nhật...</p>`,
  en: `<p class="text-center text-gray-400 italic">Content for this section is being updated...</p>`,
  es: `<p class="text-center text-gray-400 italic">El contenido de esta sección se está actualizando...</p>`,
  fr: `<p class="text-center text-gray-400 italic">Le contenu de cette section est en cours de mise à jour...</p>`,
  la: `<p class="text-center text-gray-400 italic">Contentus huius sectionis renovatur...</p>`,
};

export const FEASTS: Feast[] = [
  {
    id: 'st-elizabeth-ann-seton',
    date: '01-04',
    title: { 
      vi: 'Thánh Nữ Ê-li-za-bét An-na Xe-tôn',
      en: 'St. Elizabeth Ann Seton',
      es: 'Santa Isabel Ana Seton',
      fr: 'Sainte Élisabeth-Ann Seton',
      la: 'Sancta Elisabeth Anna Seton'
    },
    subtitle: {
      vi: 'Nữ tu',
      en: 'Religious',
      es: 'Religiosa',
      fr: 'Religieuse',
      la: 'Religiosa'
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
Formed by the Word of God, with a fervent love for the Church, Elizabeth Ann Seton left a solid legacy of thought. She was beatified by Pope John XXIII on March 17, 1963, and canonized by Pope Paul VI on September 14, 1975.`,
        es: `<strong>Biografía</strong>
Elizabeth Ann Bayley nació en Nueva York el 28 de agosto de 1774, en vísperas de los acontecimientos que llevarían a los Estados Unidos de América a su Independencia. Huérfana de madre a los tres años, creció en una familia marcada por el segundo matrimonio de su padre y su pertenencia a la Iglesia Episcopal.
Se casó con William Seton a los 20 años, y de este matrimonio tuvo cinco hijos. Durante un viaje de negocios a Italia, su esposo murió en Pisa el 27 de diciembre de 1803. Fue acogida y consolada por una amigable familia católica: la familia Felicchi, en la que descubrió una profunda caridad.
A su regreso a los Estados Unidos, Elizabeth, una devota episcopaliana, se sintió fuertemente atraída por la doctrina católica. Su familia, al no comprender su búsqueda, la abandonó. Elizabeth enfrentó entonces muchas pruebas personales y familiares. Finalmente, el 14 de marzo de 1805, fue recibida en la Iglesia Católica.
Mientras mantenía una intensa vida espiritual y cuidaba regularmente la educación de sus hijos, persiguió su propio interés de comprometerse plenamente con las obras de caridad. En 1809, fundó la Congregación de las Hermanas de la Caridad en la diócesis de Baltimore, con San José como patrón, para la educación de las jóvenes. Bajo la guía del obispo Cheverus, deseaba afiliarse a la Compañía de las Hijas de la Caridad de San Vicente de Paúl, pero la situación política de la época impidió este plan. El 4 de enero de 1821, Elizabeth Ann Seton murió en Emmitsburg. También fue la fundadora de cinco ramas de Hermanas de la Caridad americanas. La rama de Emmitsburg se fusionaría con la Compañía de las Hijas de la Caridad el 25 de marzo de 1850.
Formada por la Palabra de Dios, con un ferviente amor por la Iglesia, Elizabeth Ann Seton dejó un sólido legado de pensamiento. Fue beatificada por el Papa Juan XXIII el 17 de marzo de 1963 y canonizada por el Papa Pablo VI el 14 de septiembre de 1975.`,
        fr: `<strong>Biographie</strong>
Elizabeth Ann Bayley est née à New York le 28 août 1774, à la veille des événements qui allaient conduire les États-Unis d'Amérique à leur indépendance. Orpheline de sa mère à l'âge de trois ans, elle a grandi dans une famille marquée par le remariage de son père et leur appartenance à l'Église épiscopalienne.
Elle a épousé William Seton à l'âge de 20 ans, et de ce mariage, elle a eu cinq enfants. Lors d'un voyage d'affaires en Italie, son mari est décédé à Pise le 27 décembre 1803. Elle a été accueillie et réconfortée par une famille catholique amie : la famille Felicchi, chez qui elle a découvert une profonde charité.
À son retour aux États-Unis, Elizabeth, une fervente épiscopalienne, se sentit fortement attirée par la doctrine catholique. Sa famille, ne comprenant pas sa quête, l'abandonna. Elizabeth a alors dû faire face à de nombreuses épreuves personnelles et familiales. Finalement, le 14 mars 1805, elle fut reçue dans l'Église catholique.
Tout en menant une vie spirituelle intense et en s'occupant régulièrement de l'éducation de ses enfants, elle a poursuivi son propre intérêt à s'engager pleinement dans les œuvres de charité. En 1809, elle a fondé la Congrégation des Sœurs de la Charité dans le diocèse de Baltimore, avec saint Joseph comme patron, pour l'éducation des jeunes filles. Sous la direction de Mgr Cheverus, elle souhaitait être affiliée à la Compagnie des Filles de la Charité de saint Vincent de Paul, mais la situation politique de l'époque a empêché ce projet. Le 4 janvier 1821, Elizabeth Ann Seton est décédée à Emmitsburg. Elle est également à l'origine de cinq branches de Sœurs de la Charité américaines. La branche d'Emmitsburg fusionnera avec la Compagnie des Filles de la Charité le 25 mars 1850.
Formée par la Parole de Dieu, avec un amour fervent pour l'Église, Elizabeth Ann Seton a laissé un solide héritage de pensée. Elle a été béatifiée par le pape Jean XXIII le 17 mars 1963 et canonisée par le pape Paul VI le 14 septembre 1975.`,
        la: `<strong>Vita</strong>
Elisabeth Anna Bayley nata est Novi Eboraci die 28 Augusti 1774, pridie eventuum qui Civitates Foederatas Americae ad libertatem ducerent. Matre orbata tres annos nata, in familia crevit patris secundis nuptiis et adhaesione ad Ecclesiam Episcopalem notata.
Gulielmo Seton nupsit viginti annos nata, et ex hoc matrimonio quinque filios habuit. In itinere negotiatorio in Italiam, maritus eius Pisis obiit die 27 Decembris 1803. A familia catholica amica excepta et consolata est: familia Felicchi, in qua profundam caritatem invenit.
In Civitates Foederatas reversa, Elisabeth, devota episcopaliana, nunc ad doctrinam catholicam vehementer attracta sensit. Familia eius, hanc quaestionem non intelligens, eam deseruit. Elisabeth tunc multis personalibus et familiaribus probationibus obviam ivit. Denique, die 14 Martii 1805, in Ecclesiam Catholicam recepta est.
Dum vitam spiritualem intensam gerebat et filiorum educationi regulariter vacabat, proprium studium se plene operibus caritatis dedicandi secuta est. Anno 1809, Congregationem Sororum Caritatis in dioecesi Baltimorensi fundavit, Sancto Iosepho patrono, ad puellarum educationem. Sub ductu Episcopi Cheverus, cum Societate Filiarum Caritatis Sancti Vincentii a Paulo affiliari cupiebat, sed rerum politicarum condicio tunc temporis hoc consilium impedivit. Die 4 Ianuarii 1821, Elisabeth Anna Seton Emmitsburgi obiit. Fuit etiam origo quinque ramorum Sororum Caritatis Americanarum. Ramus Emmitsburgensis cum Societate Filiarum Caritatis die 25 Martii 1850 uniretur.
Verbo Dei formata, ferventi amore erga Ecclesiam, Elisabeth Anna Seton solidum cogitationis legatum reliquit. A Papa Ioanne XXIII beatificata est die 17 Martii 1963, et a Papa Paulo VI canonizata die 14 Septembris 1975.`
      },
      massReadings: {
        vi: `<strong>THÁNH LỄ</strong>
<strong>Ca nhập lễ (Gr 17, 7 - 8)</strong>
Phúc thay kẻ đặt niềm tin vào Đức Chúa, và có Đức Chúa làm chỗ nương thân. Người ấy như cây trồng bên dòng nước, và không ngừng trổ sinh hoa trái.
<strong>Lời nguyện nhập lễ</strong>
Lạy Chúa, thánh nữ Ê-li-za-bét An-na Xe-tôn đã tha thiết ao ước tìm thấy Chúa, nên Chúa đã ban cho thánh nữ Ánh Sáng rực rỡ của Chúa. Xin ban cho chúng con, theo gương người để lại, biết đáp trả tiếng gọi của Tin Mừng, và kiên vững trong đức tin, nhiệt thành trong đức mến. Chúng con cầu xin.
<strong>Bài đọc (1 Ga 3, 14-18)</strong>
<em>Bài trích thư thứ nhất của thánh Gioan tông đồ.</em>
Anh em thân mến, chúng ta biết rằng: chúng ta đã từ cõi chết bước vào cõi sống, vì chúng ta yêu thương anh em. Kẻ không yêu thương, thì ở lại trong sự chết. Ai ghét anh em mình, ấy là kẻ sát nhân. Và anh em biết: không kẻ sát nhân nào có sự sống đời đời ở lại trong nó. Căn cứ vào điều này, chúng ta biết được tình yêu là gì: đó là Đức Kitô đã thí mạng vì chúng ta. Như vậy, cả chúng ta nữa, chúng ta cũng phải thí mạng vì anh em. Nếu ai có của cải thế gian và thấy anh em mình lâm cảnh túng thiếu, mà lại đóng cửa lòng lại, không thương xót, thì làm sao tình yêu của Thiên Chúa ở lại trong người ấy được? Hỡi anh em là những người con bé nhỏ, chúng ta đừng yêu thương nơi đầu môi chóp lưỡi, nhưng phải yêu thương cách chân thật và bằng việc làm.
<strong>Đáp ca (Tv 15)</strong>
<strong>Đ. Lạy Chúa, Chúa là nguồn hạnh phúc và niềm vui của con!</strong>
Lạy Chúa Trời xin giữ gìn con, vì bên Ngài con đang ẩn náu. Con thưa cùng Chúa: “Ngài là Chúa con thờ, ngoài Chúa ra đâu là hạnh phúc”. <strong>Đ.</strong>
Con chúc tụng Chúa hằng thương chỉ dạy, ngay cả đêm trường, lòng dạ nhắn nhủ con. Con luôn nhớ có Ngài trước mặt, được Ngài ở bên chẳng nao núng bao giờ. <strong>Đ.</strong>
Chúa sẽ dạy con biết đường về cõi sống, trước Thánh Nhan ôi vui sướng tràn trề, ở bên Ngài, hoan lạc chẳng hề vơi! <strong>Đ.</strong>
<strong>Tung hô Tin Mừng (Ga 15,16)</strong>
Ha-lê-lu-i-a. Ha-lê-lu-i-a. Thầy đã chọn anh em từ giữa thế gian, để anh em ra đi, sinh được hoa trái, và hoa trái của anh em tồn tại. Ha-lê-lu-i-a.
<strong>Tin Mừng (Ga 15, 9 – 17)</strong>
<strong>Tin Mừng Đức Giêsu Kitô theo thánh Gio-an</strong>
Khi ấy, Đức Giêsu nói với các môn đệ rằng: “Chúa Cha đã yêu mến Thầy thế nào, Thầy cũng yêu mến anh em như vậy. Anh em hãy ở lại trong tình thương của Thầy. Nếu anh em giữ các điều răn của Thầy, anh em sẽ ở lại trong tình thương của Thầy, như Thầy đã giữ các điều răn của Cha Thầy và ở lại trong tình thương của Người. Các điều ấy, Thầy đã nói với anh em để anh em được hưởng niềm vui của Thầy và niềm vui của anh em được nên trọn vẹn. Đây là điều răn của Thầy: anh em hãy yêu thương nhau như Thầy đã yêu thương anh em. Không có tình thương nào cao cả hơn tình thương của người đã hy sinh tính mạng vì bạn hữu của mình. Anh em là bạn hữu của Thầy, nếu anh em thực hiện những điều Thầy truyền dạy. Thầy không còn gọi anh em là tôi tớ nữa, vì tôi tớ không biết việc chủ làm. Nhưng Thầy gọi anh em là bạn hữu, vì tất cả những gì Thầy nghe được nơi Cha Thầy, Thầy đã cho anh em biết. Không phải anh em đã chọn Thầy, nhưng chính Thầy đã chọn anh em, và cắt cử anh em để anh em ra đi, sinh được hoa trái, và hoa trái của anh em tồn tại, hầu tất cả những gì anh em xin cùng Chúa Cha nhân danh Thầy, thì Người ban cho anh em. Điều Thầy truyền dạy anh em là “hãy yêu thương nhau””.
<strong>Lời nguyện tiến lễ</strong>
Lạy Chúa, xin đón nhận lễ phẩm của dân Chúa. Khi chúng con nhớ lại tình yêu vô biên của Con Chúa, xin cho chúng con, theo gương thánh nữ Ê-li-za-bét An-na, biết yêu mến Chúa và yêu thương tha nhân với một tâm hồn quảng đại hơn. Chúng con cầu xin.
<strong>Ca hiệp lễ (Ga 8,12)</strong>
Đức Giê-su nói: “Tôi là ánh sáng thế gian. Ai theo tôi, sẽ không phải đi trong bóng tối, nhưng sẽ nhận được ánh sáng đem lại sự sống”.
<strong>Lời nguyện hiệp lễ</strong>
Lạy Thiên Chúa toàn năng, xin cho Bí tích Thánh Thể này trợ giúp chúng con, để theo gương thánh nữ Ê-li-za-bét An-na, tâm hồn và cả đời sống chúng con biểu lộ tình bác ái huynh đệ và làm tỏa rạng chân lý. Chúng con cầu xin.`,
        en: `[English Mass Readings coming soon...]`,
        es: `[Spanish Mass Readings coming soon...]`,
        fr: `[French Mass Readings coming soon...]`,
        la: `[Latin Mass Readings coming soon...]`
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
      en: 'Blessed Lindalva Justa de Oliveira',
      es: 'Beata Lindalva Justa de Oliveira',
      fr: 'Bienheureuse Lindalva Justa de Oliveira',
      la: 'Beata Lindalva Iusta de Oliveira'
    },
    subtitle: {
      vi: 'Nữ tu, Tử đạo',
      en: 'Virgin, Martyr',
      es: 'Virgen y Mártir',
      fr: 'Vierge et Martyre',
      la: 'Virgo et Martyr'
    },
    type: 'Lễ nhớ',
    sections: {
      biography: {
        vi: `<strong>Tiểu sử</strong>
Chân phước Lin-đan-va Giút-ta Ô-li-bây-ra sinh ngày 20/10/1953, tại Sitio Maihada de Areira, Acu, ở Brasil. Từ thời thơ ấu, chân phước đã trau dồi một tình yêu mến đặc biệt đối với người nghèo. Khi trở thành Nữ Tử Bác Ái Thánh Vinh Sơn Phaolô, chị phục vụ người nghèo và người già cả tại một viện Dưỡng Lão… Sơ là tấm gương tuyệt vời trong công việc, trong sự dấn thân để tạo tinh thần hiệp thông với mọi người, nhất là với các chị em trong tu hội. Công việc bác ái của chị đã không ngừng phát triển cho tới ngày chị bảo vệ sự trinh khiết của mình cho đến chết. Được ơn tử đạo, chân phước chết tử đạo ngày 09 tháng 4 năm 1993. Chị được phong chân phước ngày 2 tháng 12 năm 1993, tại Salvador-Bahia, ở Brasil.`,
        en: `<strong>Biography</strong>
Blessed Lindalva Justa de Oliveira was born on October 20, 1953, in Sitio Malhada de Areia, Acu, in Brazil. From her childhood, she cultivated a special love for the poor. When she became a Daughter of Charity of Saint Vincent de Paul, she served the poor and the elderly in a nursing home. Sister was a wonderful example in her work, in her commitment to creating a spirit of communion with everyone, especially with the sisters in her community. Her work of charity continued to grow until the day she defended her chastity to the death. Having received the grace of martyrdom, she died a martyr on April 9, 1993. She was beatified on December 2, 2007, in Salvador-Bahia, Brazil.`,
        es: `<strong>Biografía</strong>
La Beata Lindalva Justa de Oliveira nació el 20 de octubre de 1953, en Sitio Malhada de Areia, Acu, en Brasil. Desde su infancia, cultivó un amor especial por los pobres. Cuando se convirtió en Hija de la Caridad de San Vicente de Paúl, sirvió a los pobres y a los ancianos en un asilo. La hermana fue un ejemplo maravilloso en su trabajo, en su compromiso por crear un espíritu de comunión con todos, especialmente con las hermanas de su comunidad. Su obra de caridad siguió creciendo hasta el día en que defendió su castidad hasta la muerte. Habiendo recibido la gracia del martirio, murió mártir el 9 de abril de 1993. Fue beatificada el 2 de diciembre de 2007, en Salvador-Bahia, Brasil.`,
        fr: `<strong>Biographie</strong>
La bienheureuse Lindalva Justa de Oliveira est née le 20 octobre 1953, à Sitio Malhada de Areia, Acu, au Brésil. Dès son enfance, elle a cultivé un amour particulier pour les pauvres. Devenue Fille de la Charité de Saint Vincent de Paul, elle a servi les pauvres et les personnes âgées dans une maison de retraite. Sœur Lindalva était un exemple merveilleux dans son travail, dans son engagement à créer un esprit de communion avec tout le monde, en particulier avec les sœurs de sa communauté. Son travail de charité n'a cessé de croître jusqu'au jour où elle a défendu sa chasteté jusqu'à la mort. Ayant reçu la grâce du martyre, elle est morte en martyre le 9 avril 1993. Elle a été béatifiée le 2 décembre 2007, à Salvador-Bahia, au Brésil.`,
        la: `<strong>Vita</strong>
Beata Lindalva Iusta de Oliveira nata est die XX mensis Octobris anno MCMLIII, in Sitio Malhada de Areia, Acu, in Brasilia. A pueritia, specialem amorem erga pauperes coluit. Cum Filia Caritatis Sancti Vincentii a Paulo facta esset, pauperibus et senibus in gerontocomio servivit. Soror exemplum mirabile fuit in opere suo, in studio suo ad spiritum communionis cum omnibus creandum, praesertim cum sororibus in communitate sua. Opus eius caritatis crescere non desiit usque ad diem quo castitatem suam usque ad mortem defendit. Gratiam martyrii adepta, martyr obiit die IX mensis Aprilis anno MCMXCIII. Beatificata est die II mensis Decembris anno MMVII, in Salvator-Bahia, in Brasilia.`
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
    id: 'st-paul-conversion',
    date: '01-25',
    title: {
      vi: 'Thánh Phaolô Tông Đồ Trở Lại',
      en: 'Conversion of Saint Paul the Apostle',
      es: 'Conversión de San Pablo Apóstol',
      fr: 'Conversion de Saint Paul Apôtre',
      la: 'In conversione S. Pauli, apostoli'
    },
    subtitle: {
      vi: 'Kỷ niệm ngày thành lập Tu Hội Truyền Giáo',
      en: 'Anniversary of the foundation of the Congregation of the Mission',
      es: 'Aniversario de la fundación de la Congregación de la Misión',
      fr: 'Anniversaire de la fondation de la Congrégation de la Mission',
      la: 'In anniversario fundationis Congregationis Missionis'
    },
    type: 'Lễ kính',
    sections: {
        biography: {
          vi: `<strong>Tiểu sử</strong>
Hôm nay, chúng ta cử hành việc Đức Giêsu Kitô Phục Sinh tỏ mình ra cho Sao-lô, như là Đấng Mêsia vinh hiển nơi Thiên Chúa và đang sống động nơi các môn đệ, và Người còn trở nên một với họ. (Cv 9).
Chính vào ngày 25 tháng 01 năm 1617, tại Folleville (Somme) “đã diễn ra bài giảng đầu tiên của Tu Hội Truyền Giáo” và Chúa cho Tu Hội “được bắt đầu”, vì thánh Vinh Sơn có nói rõ điều đó (SV XII, 169).
Thiên Chúa, Đấng kêu gọi Vị Tông đồ dân ngoại, cũng khơi dậy nơi Vinh Sơn Phao-lô việc rao giảng Tin Mừng cho người nghèo khó, “điều mà Chúa cố ý cho xảy ra vào ngày hôm đó” (SV XI, 4).`,
          en: `<strong>Biography</strong>
Today, we celebrate the manifestation of the Risen Jesus Christ to Saul, as the glorious Messiah with God and living in his disciples, with whom he becomes one (Acts 9).
It was on January 25, 1617, in Folleville (Somme), that "the first sermon of the Mission was given" and that God "gave it its beginning," as Saint Vincent specified (SV XII, 169).
God, who called the Apostle to the Gentiles, also inspired in Vincent de Paul the preaching of the Gospel to the poor, "something He intentionally made happen on that day" (SV XI, 4).`,
          es: `<strong>Biografía</strong>
Hoy celebramos la manifestación de Jesucristo Resucitado a Saulo, como el Mesías glorioso junto a Dios y vivo en sus discípulos, con quienes se hace uno (Hch 9).
Fue el 25 de enero de 1617, en Folleville (Somme), cuando "se dio el primer sermón de la Misión" y Dios "le dio su comienzo", como especificó San Vicente (SV XII, 169).
Dios, que llamó al Apóstol de los Gentiles, también inspiró en Vicente de Paúl la predicación del Evangelio a los pobres, "algo que Él hizo que sucediera intencionadamente ese día" (SV XI, 4).`,
          fr: `<strong>Biographie</strong>
Aujourd'hui, nous célébrons la manifestation de Jésus-Christ Ressuscité à Saul, comme le Messie glorieux auprès de Dieu et vivant dans ses disciples, avec lesquels il ne fait qu'un (Ac 9).
C'est le 25 janvier 1617, à Folleville (Somme), que « se fit le premier sermon de la Mission » et que Dieu « lui donna commencement », ainsi que le précise saint Vincent (SV XII, 169).
Dieu qui appelle l'Apôtre des nations, suscite aussi en Vincent de Paul la prédication de l'Évangile aux pauvres, « chose qu'il fit à dessein arriver ce jour-là » (SV XI, 4).`,
          la: `<strong>Vita</strong>
Hodie celebramus manifestationem Iesu Christi Resuscitati Saulo, tamquam Messiam gloriosum apud Deum et viventem in discipulis suis, quibuscum unus fit (Act 9).
Die 25 Ianuarii 1617, in Folleville (Somme), "primus sermo Missionis habitus est" et Deus "ei initium dedit", sicut Sanctus Vincentius specificavit (SV XII, 169).
Deus, qui Apostolum gentium vocat, etiam in Vincentio a Paulo praedicationem Evangelii pauperibus inspiravit, "quam rem de industria eo die evenire fecit" (SV XI, 4).`
        },
        massReadings: {
          vi: `<strong>THÁNH LỄ</strong>

<strong>Ca nhập lễ (2Tm 1, 12; 4, 8)</strong>
Tôi biết tôi tin vào ai; và tôi xác tín rằng Chúa là vị Thẩm Phán chí công sẽ trao phần thưởng đó cho tôi trong ngày Người xuất hiện.

<strong>Kinh Vinh Danh</strong>

<strong>Lời nguyện nhập lễ</strong>
Lạy Thiên Chúa là Cha chúng con, trong ngày chúng con cử hành lễ thánh Phaolô tông đồ trở lại, Chúa đã kêu gọi Thánh Vinh Sơn Phaolô thành lập một gia đình thiêng liêng để rao giảng Tin Mừng cho người nghèo khó và đào tạo hàng giáo sĩ. Xin làm cho chúng con trở nên xứng đáng rao giảng Tin Mừng sự thật và bình an. Chúng con cầu xin.`,
          en: `[English Mass Readings coming soon...]`,
          es: `[Spanish Mass Readings coming soon...]`,
          fr: `[French Mass Readings coming soon...]`,
          la: `[Latin Mass Readings coming soon...]`
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
        en: 'Blessed Marie-Anne Vaillot and Odile Baumgarten',
        es: 'Beatas María Ana Vaillot y Odilia Baumgarten',
        fr: 'Bienheureuses Marie-Anne Vaillot et Odile Baumgarten',
        la: 'Beatae Maria Anna Vaillot et Odilia Baumgarten'
      },
      subtitle: {
        vi: 'Nữ tu, Tử đạo',
        en: 'Virgins, Martyrs',
        es: 'Vírgenes y Mártires',
        fr: 'Vierges et Martyres',
        la: 'Virgines et Martyres'
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
            en: `<strong>Biography</strong>
In the years 1793-1794, during the French Revolution, terror reigned throughout France, and was particularly fierce in the western regions where peasants had taken up arms to defend their faith. More than 200 priests and religious were killed or died in prison for refusing to swear allegiance to the Civil Constitution of the Clergy, a document that separated the French Church from the Church of Rome. Many lay people were sentenced to death for wanting to remain faithful to Jesus Christ in the Church. Among these martyrs were two Daughters of Charity from the Saint John Hospital in Angers: they were shot on February 1, 1794.
Sister Marie-Anne Vaillot, born in Fontainebleau on May 13, 1734, joined the Company of the Daughters of Charity on September 25, 1761. She served as the administrator at the Angers hospital.
Sister Odile Baumgarten, born in Gondrexange in Lorraine on November 15, 1750, joined the Company of the Daughters of Charity on August 4, 1775. She was in charge of the pharmacy at the Angers hospital.
Because of their spiritual and moral influence in the Community, the two Sisters were chosen as the first victims.
Sister Marie-Anne Vaillot and Sister Odile Baumgarten were beatified by Pope John Paul II, along with 97 other martyrs of Angers, on February 19, 1984.`,
            es: `<strong>Biografía</strong>
En los años 1793-1794, durante la Revolución Francesa, el terror reinó en toda Francia, y fue particularly feroz en las regiones del oeste donde los campesinos se habían levantado en armas para defender su fe. Más de 200 sacerdotes y religiosos fueron asesinados o murieron en prisión por negarse a jurar lealtad a la Constitución Civil del Clero, un documento que separaba a la Iglesia francesa de la Iglesia de Roma. Muchos laicos fueron sentenciados a muerte por querer permanecer fieles a Jesucristo en la Iglesia. Entre estos mártires se encontraban dos Hijas de la Caridad del Hospital de San Juan en Angers: fueron fusiladas el 1 de febrero de 1794.
Sor Marie-Anne Vaillot, nacida en Fontainebleau el 13 de mayo de 1734, se unió a la Compañía de las Hijas de la Caridad el 25 de septiembre de 1761. Se desempeñó como administradora en el hospital de Angers.
Sor Odile Baumgarten, nacida en Gondrexange en Lorena el 15 de noviembre de 1750, se unió a la Compañía de las Hijas de la Caridad el 4 de agosto de 1775. Estaba a cargo de la farmacia en el hospital de Angers.
Debido a su influencia espiritual y moral en la Comunidad, las dos Hermanas fueron elegidas como las primeras víctimas.
Sor Marie-Anne Vaillot y Sor Odile Baumgarten fueron beatificadas por el Papa Juan Pablo II, junto con otros 97 mártires de Angers, el 19 de febrero de 1984.`,
            fr: `<strong>Biographie</strong>
Dans les années 1793-1794, en pleine Révolution, la terreur sévit dans toute la France, et particulièrement dans les régions de l'Ouest où les paysans avaient pris les armes pour défendre leur foi. Plus de 200 prêtres et religieux furent tués ou moururent en prison pour avoir refusé de prêter serment de fidélité à la Constitution civile du clergé, document qui séparait l'Église de France de l'Église de Rome. De nombreux laïcs furent condamnés à mort pour avoir voulu rester fidèles à Jésus-Christ dans l'Église. Parmi ces martyrs, deux Filles de la Charité de l'hôpital Saint-Jean d'Angers : elles furent fusillées le 1er février 1794.
Sœur Marie-Anne Vaillot, née à Fontainebleau le 13 mai 1734, entra dans la Compagnie des Filles de la Charité le 25 septembre 1761. Elle exerçait la fonction d'économe à l'hôpital d'Angers.
Sœur Odile Baumgarten, née à Gondrexange en Lorraine le 15 novembre 1750, entra dans la Compagnie des Filles de la Charité le 4 août 1775. Elle était responsable de la pharmacie à l'hôpital d'Angers.
En raison de leur influence spirituelle et morale dans la Communauté, les deux Sœurs furent choisies comme premières victimes.
Sœur Marie-Anne Vaillot et Sœur Odile Baumgarten ont été béatifiées par le pape Jean-Paul II, avec 97 autres martyrs d'Angers, le 19 février 1984.`,
            la: `<strong>Vita</strong>
Annis 1793-1794, inter Rerum Novarum Francicarum, terror per totam Galliam saeviit, et praesertim in regionibus occidentalibus, ubi rustici arma ceperant ad fidem suam defendendam. Plus quam 200 sacerdotes et religiosi occisi sunt aut in carcere perierunt, quia iuramentum fidelitatis Constitutioni Civili Cleri, quae Ecclesiam Gallicanam ab Ecclesia Romana separabat, recusabant. Multi laici ad mortem damnati sunt, quia Iesu Christo in Ecclesia fideles manere volebant. Inter hos martyres erant duae Filiae Caritatis ex hospitali Sancti Ioannis Andegavensis: sclopetatae sunt die 1 Februarii 1794.
Soror Maria Anna Vaillot, nata Fontis Bleaudi die 13 Maii 1734, Societatem Filiarum Caritatis intravit die 25 Septembris 1761. Munus oeconomae in hospitali Andegavensi gerebat.
Soror Odilia Baumgarten, nata Gondrexange in Lotharingia die 15 Novembris 1750, Societatem Filiarum Caritatis intravit die 4 Augusti 1775. Pharmacopolio hospitalis Andegavensis praeerat.
Propter auctoritatem spiritualem et moralem in Communitate, duae Sorores primae victimae electae sunt.
Soror Maria Anna Vaillot et Soror Odilia Baumgarten a Papa Ioanne Paulo II beatificatae sunt, una cum 97 aliis martyribus Andegavensibus, die 19 Februarii 1984.`
          },
          massReadings: placeholder,
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
        en: 'Blessed Rosalie Rendu',
        es: 'Beata Rosalía Rendu',
        fr: 'Bienheureuse Rosalie Rendu',
        la: 'Beata Rosalia Rendu'
    },
    subtitle: {
        vi: 'Nữ tu',
        en: 'Religious',
        es: 'Religiosa',
        fr: 'Religieuse',
        la: 'Religiosa'
    },
    type: 'Lễ nhớ',
    sections: {
        biography: {
          vi: `<strong>Tiểu sử</strong>
Sơ Rosalie Rendu, tên thật là Jeanne-Marie Rendu, sinh ngày 9 tháng 9 năm 1786 tại Confort, Pháp. Lớn lên trong thời kỳ Cách mạng Pháp đầy biến động, Sơ đã sớm chứng kiến những đau khổ và bất công trong xã hội. Năm 1802, Sơ gia nhập Tu hội Nữ Tử Bác Ái tại Paris và cống hiến trọn đời mình để phục vụ người nghèo ở khu phố Mouffetard, một trong những khu vực nghèo khổ nhất Paris.
Sơ Rosalie được biết đến với lòng can đảm, sự khôn ngoan và tình yêu thương vô bờ bến. Sơ đã tổ chức các bếp ăn từ thiện, trường học, nhà trẻ, và các trung tâm chăm sóc y tế cho người nghèo. Sơ không chỉ giúp đỡ về vật chất mà còn mang lại cho họ niềm hy vọng và phẩm giá. Sơ là người hướng dẫn cho nhiều người trẻ, trong đó có Chân phước Frédéric Ozanam, người sáng lập Hội Bác Ái Vinh Sơn.
Sơ qua đời ngày 7 tháng 2 năm 1856 và được dân chúng Paris vô cùng thương tiếc. Sơ được Đức Thánh Cha Gioan Phaolô II phong chân phước vào ngày 9 tháng 11 năm 2003.`,
          en: `<strong>Biography</strong>
Sister Rosalie Rendu, born Jeanne-Marie Rendu, was born on September 9, 1786, in Confort, France. Growing up during the turbulent French Revolution, she witnessed the suffering and injustice in society from an early age. In 1802, she joined the Company of the Daughters of Charity in Paris and dedicated her entire life to serving the poor in the Mouffetard district, one of the poorest areas of Paris.
Sister Rosalie was known for her courage, wisdom, and boundless love. She organized soup kitchens, schools, nurseries, and medical care centers for the poor. She not only provided material assistance but also brought them hope and dignity. She was a guide to many young people, including Blessed Frédéric Ozanam, the founder of the Society of Saint Vincent de Paul.
She passed away on February 7, 1856, and was deeply mourned by the people of Paris. She was beatified by Pope John Paul II on November 9, 2003.`,
          es: `<strong>Biografía</strong>
Sor Rosalía Rendu, nacida Jeanne-Marie Rendu, nació el 9 de septiembre de 1786 en Confort, Francia. Creciendo durante la turbulenta Revolución Francesa, fue testigo del sufrimiento y la injusticia en la sociedad desde una edad temprana. En 1802, se unió a la Compañía de las Hijas de la Caridad en París y dedicó toda su vida a servir a los pobres en el distrito de Mouffetard, una de las zonas más pobres de París.
Sor Rosalía era conocida por su valentía, sabiduría y amor ilimitado. Organizó comedores sociales, escuelas, guarderías y centros de atención médica para los pobres. No solo proporcionó asistencia material, sino que también les devolvió la esperanza y la dignidad. Fue una guía para muchos jóvenes, incluido el Beato Frédéric Ozanam, fundador de la Sociedad de San Vicente de Paúl.
Falleció el 7 de febrero de 1856 y fue profundamente llorada por el pueblo de París. Fue beatificada por el Papa Juan Pablo II el 9 de noviembre de 2003.`,
          fr: `<strong>Biographie</strong>
Sœur Rosalie Rendu, née Jeanne-Marie Rendu, est née le 9 septembre 1786 à Confort, en France. Ayant grandi pendant la période troublée de la Révolution française, elle a été très tôt témoin des souffrances et de l'injustice de la société. En 1802, elle entre dans la Compagnie des Filles de la Charité à Paris et consacre toute sa vie au service des pauvres du quartier Mouffetard, l'un des plus pauvres de Paris.
Sœur Rosalie était connue pour son courage, sa sagesse et son amour sans bornes. Elle a organisé des soupes populaires, des écoles, des crèches et des centres de soins médicaux pour les pauvres. Elle n'a pas seulement apporté une aide matérielle, mais leur a aussi redonné espoir et dignité. Elle fut un guide pour de nombreux jeunes, dont le bienheureux Frédéric Ozanam, fondateur de la Société de Saint-Vincent-de-Paul.
Elle est décédée le 7 février 1856 et a été profondément pleurée par le peuple de Paris. Elle a été béatifiée par le pape Jean-Paul II le 9 novembre 2003.`,
          la: `<strong>Vita</strong>
Soror Rosalia Rendu, nata Ioanna Maria Rendu, die 9 Septembris 1786 in Confort, Gallia, nata est. Crescens per turbulentam Revolutionem Gallicam, ab ineunte aetate passiones et iniustitias in societate vidit. Anno 1802, Societatem Filiarum Caritatis Lutetiae ingressa est et totam vitam suam pauperibus in regione Mouffetard, una ex pauperrimis Lutetiae regionibus, serviens dedicavit.
Soror Rosalia nota erat ob fortitudinem, sapientiam et amorem infinitum. Coquinas publicas, scholas, infantaria et centra medica pauperibus instituit. Non solum auxilium materiale praebuit, sed etiam spem et dignitatem eis attulit. Dux fuit multis iuvenibus, inter quos Beatus Fridericus Ozanam, conditor Societatis Sancti Vincentii a Paulo.
Obiit die 7 Februarii 1856 et a populo Lutetiae valde lamentata est. A Papa Ioanne Paulo II die 9 Novembris 2003 beatificata est.`
        },
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
        en: 'Translation of the Relics of St. Vincent de Paul',
        es: 'Traslación de las Reliquias de San Vicente de Paúl',
        fr: 'Translation des Reliques de Saint Vincent de Paul',
        la: 'In Translatione S. Vincentii a Paulo'
    },
    subtitle: {
        vi: 'Kỷ niệm',
        en: 'Commemoration',
        es: 'Conmemoración',
        fr: 'Commémoration',
        la: 'Commemoratio'
    },
    type: 'Kỷ niệm',
    sections: {
        biography: {
          vi: `<strong>Lịch sử</strong>
Thánh Vinh Sơn Phaolô qua đời ngày 27 tháng 9 năm 1660. Thi hài của ngài được chôn cất trong nhà nguyện của nhà Saint-Lazare ở Paris. Sau khi được phong chân phước (1729) và phong thánh (1737), hài cốt của ngài được đặt trong một hòm bạc và được tôn kính công khai. Trong cuộc Cách mạng Pháp, nhà Saint-Lazare bị cướp phá và hài cốt của ngài bị phân tán, nhưng may mắn là trái tim và một phần xương cốt đã được các tu sĩ Vinh Sơn và Nữ Tử Bác Ái cứu giữ.
Sau Cách mạng, các di tích được thu thập lại. Vào ngày 13 tháng 2 năm 1830, thi hài của Thánh Vinh Sơn đã được long trọng chuyển đến nhà nguyện mới của Tu Hội Truyền Giáo tại số 95, đường Sèvres, Paris, nơi ngài được tôn kính cho đến ngày nay. Sự kiện này là một dịp để canh tân lòng sùng kính đối với "Người Cha của người nghèo" và để làm sống lại linh đạo Vinh Sơn.`,
          en: `<strong>History</strong>
Saint Vincent de Paul died on September 27, 1660. His body was buried in the chapel of the Saint-Lazare house in Paris. After his beatification (1729) and canonization (1737), his remains were placed in a silver reliquary and publicly venerated. During the French Revolution, the Saint-Lazare house was plundered and his remains were scattered, but fortunately, his heart and some of his bones were saved by the Vincentian priests and the Daughters of Charity.
After the Revolution, the relics were gathered again. On February 13, 1830, the body of Saint Vincent was solemnly transferred to the new chapel of the Congregation of the Mission at 95, rue de Sèvres, Paris, where it is venerated to this day. This event was an occasion to renew devotion to the "Father of the Poor" and to revive the Vincentian spirit.`,
          es: `<strong>Historia</strong>
San Vicente de Paúl murió el 27 de septiembre de 1660. Su cuerpo fue enterrado en la capilla de la casa de San Lázaro en París. Después de su beatificación (1729) y canonización (1737), sus restos fueron colocados en un relicario de plata y venerados públicamente. Durante la Revolución Francesa, la casa de San Lázaro fue saqueada y sus restos fueron dispersados, pero afortunadamente, su corazón y algunos de sus huesos fueron salvados por los sacerdotes vicentinos y las Hijas de la Caridad.
Después de la Revolución, las reliquias fueron reunidas de nuevo. El 13 de febrero de 1830, el cuerpo de San Vicente fue solemnemente trasladado a la nueva capilla de la Congregación de la Misión en el 95, rue de Sèvres, París, donde es venerado hasta el día de hoy. Este evento fue una ocasión para renovar la devoción al "Padre de los Pobres" y para reavivar el espíritu vicentino.`,
          fr: `<strong>Histoire</strong>
Saint Vincent de Paul est décédé le 27 septembre 1660. Son corps fut inhumé dans la chapelle de la maison Saint-Lazare à Paris. Après sa béatification (1729) et sa canonisation (1737), ses restes furent placés dans une châsse en argent et vénérés publiquement. Pendant la Révolution française, la maison Saint-Lazare fut pillée et ses restes dispersés, mais heureusement, son cœur et une partie de ses ossements furent sauvés par les prêtres vincentiens et les Filles de la Charité.
Après la Révolution, les reliques furent à nouveau rassemblées. Le 13 février 1830, le corps de Saint Vincent fut solennellement transféré dans la nouvelle chapelle de la Congrégation de la Mission au 95, rue de Sèvres, à Paris, où il est vénéré jusqu'à ce jour. Cet événement fut l'occasion de renouveler la dévotion au "Père des Pauvres" et de raviver l'esprit vincentien.`,
          la: `<strong>Historia</strong>
Sanctus Vincentius a Paulo obiit die 27 Septembris 1660. Corpus eius in sacello domus Sancti Lazari Lutetiae sepultum est. Post beatificationem (1729) et canonizationem (1737), reliquiae eius in theca argentea positae et publice veneratae sunt. Inter Rerum Novarum Francicarum, domus Sancti Lazari direpta est et reliquiae eius dispersae sunt, sed feliciter cor eius et nonnulla ossa a presbyteris Vincentianis et Fíliabus Caritatis servata sunt.
Post Revolutionem, reliquiae iterum collectae sunt. Die 13 Februarii 1830, corpus Sancti Vincentii sollemniter translatum est in novum sacellum Congregationis Missionis ad 95, rue de Sèvres, Lutetiae, ubi usque hodie veneratur. Hic eventus fuit occasio renovandae devotionis erga "Patrem Pauperum" et spiritus Vincentiani vivificandi.`
        },
        massReadings: placeholder,
        officeOfReadings: placeholder,
        lauds: placeholder,
        middayPrayer: placeholder,
        vespers: placeholder,
        compline: placeholder,
    },
  },
  {
    id: 'st-francis-regis-clet',
    date: '02-18',
    title: {
        vi: 'Thánh Phanxicô Regis Clet',
        en: 'St. Francis Regis Clet',
        es: 'San Francisco Regis Clet',
        fr: 'Saint François-Régis Clet',
        la: 'Sanctus Franciscus Regis Clet'
    },
    subtitle: {
        vi: 'Linh mục, Tử đạo',
        en: 'Priest, Martyr',
        es: 'Sacerdote y Mártir',
        fr: 'Prêtre et Martyr',
        la: 'Presbyter et Martyr'
    },
    type: 'Lễ kính',
    sections: {
        biography: {
          vi: `<strong>Tiểu sử</strong>
Thánh Phanxicô Regis Clet sinh năm 1748 tại Grenoble, Pháp. Ngài gia nhập Tu Hội Truyền Giáo năm 1769. Sau khi thụ phong linh mục và làm giáo sư thần học, ngài đã đáp lại tiếng gọi truyền giáo và đến Trung Quốc vào năm 1791.
Trong gần 30 năm, cha Clet đã làm việc không mệt mỏi tại các tỉnh Giang Tây, Hồ Bắc và Hồ Nam. Ngài sống một cuộc đời khó nghèo, giản dị, rong rổi khắp nơi để rao giảng Tin Mừng, ban các bí tích và củng cố các cộng đoàn tín hữu.
Trong cuộc bách hại đạo, ngài bị một giáo dân bội phản nộp cho quan quân. Sau nhiều tháng bị giam cầm và tra tấn dã man, ngài đã bị xử tử bằng cách siết cổ cho đến chết vào ngày 18 tháng 2 năm 1820. Gương mặt ngài vẫn bình an và rạng rỡ sau khi chết. Ngài được Đức Giáo Hoàng Piô XII phong thánh vào ngày 1 tháng 10 năm 2000.`,
          en: `<strong>Biography</strong>
Saint Francis Regis Clet was born in 1748 in Grenoble, France. He entered the Congregation of the Mission in 1769. After his priestly ordination and serving as a professor of theology, he answered the call to the missions and arrived in China in 1791.
For nearly 30 years, Father Clet worked tirelessly in the provinces of Jiangxi, Hubei, and Hunan. He lived a life of poverty and simplicity, traveling extensively to preach the Gospel, administer the sacraments, and strengthen the Christian communities.
During a persecution, he was betrayed by a Christian and handed over to the authorities. After months of imprisonment and cruel torture, he was executed by strangulation on February 18, 1820. His face remained peaceful and radiant after death. He was canonized by Pope John Paul II on October 1, 2000.`,
          es: `<strong>Biografía</strong>
San Francisco Regis Clet nació en 1748 en Grenoble, Francia. Entró en la Congregación de la Misión en 1769. Después de su ordenación sacerdotal y de servir como profesor de teología, respondió a la llamada a las misiones y llegó a China en 1791.
Durante casi 30 años, el Padre Clet trabajó incansablemente en las provincias de Jiangxi, Hubei y Hunan. Vivió una vida de pobreza y sencillez, viajando extensamente para predicar el Evangelio, administrar los sacramentos y fortalecer las comunidades cristianas.
Durante una persecución, fue traicionado por un cristiano y entregado a las autoridades. Después de meses de prisión y crueles torturas, fue ejecutado por estrangulamiento el 18 de febrero de 1820. Su rostro permaneció pacífico y radiante después de la muerte. Fue canonizado por el Papa Juan Pablo II el 1 de octubre de 2000.`,
          fr: `<strong>Biographie</strong>
Saint François-Régis Clet est né en 1748 à Grenoble, en France. Il entra dans la Congrégation de la Mission en 1769. Après son ordination sacerdotale et avoir été professeur de théologie, il répondit à l'appel des missions et arriva en Chine en 1791.
Pendant près de 30 ans, le Père Clet travailla sans relâche dans les provinces du Jiangxi, du Hubei et du Hunan. Il vécut une vie de pauvreté et de simplicité, voyageant beaucoup pour prêcher l'Évangile, administrer les sacrements et fortifier les communautés chrétiennes.
Au cours d'une persécution, il fut trahi par un chrétien et livré aux autorités. Après des mois d'emprisonnement et de cruelles tortures, il fut exécuté par strangulation le 18 février 1820. Son visage resta paisible et rayonnant après sa mort. Il a été canonisé par le pape Jean-Paul II le 1er octobre 2000.`,
          la: `<strong>Vita</strong>
Sanctus Franciscus Regis Clet natus est anno 1748 Gratianopoli, in Gallia. Congregationem Missionis anno 1769 ingressus est. Post ordinationem presbyteralem et munus professoris theologiae, vocationi missionariae respondit et in Sinas anno 1791 pervenit.
Per fere 30 annos, Pater Clet indefesse laboravit in provinciis Jiangxi, Hubei et Hunan. Vitam paupertatis et simplicitatis vixit, multum iter faciens ad Evangelium praedicandum, sacramenta ministranda et communitates christianas confirmandas.
Inter persecutionem, a christiano proditus et auctoritatibus traditus est. Post menses carceris et crudelium tormentorum, strangulatione die 18 Februarii 1820 supplicio affectus est. Vultus eius pacificus et radians post mortem permansit. A Papa Ioanne Paulo II canonizatus est die 1 Octobris 2000.`
        },
        massReadings: placeholder,
        officeOfReadings: placeholder,
        lauds: placeholder,
        middayPrayer: placeholder,
        vespers: placeholder,
        compline: placeholder,
    },
  },
  {
    id: 'blessed-pierre-rene-rogue',
    date: '03-03',
    title: {
        vi: 'Chân Phước Phêrô Rơnê Rôgơ',
        en: 'Blessed Pierre-René Rogue',
        es: 'Beato Pedro Renato Rogue',
        fr: 'Bienheureux Pierre-René Rogue',
        la: 'Beatus Petrus Renatus Rogue'
    },
    subtitle: {
        vi: 'Linh mục, Tử đạo',
        en: 'Priest, Martyr',
        es: 'Sacerdote y Mártir',
        fr: 'Prêtre et Martyr',
        la: 'Presbyter et Martyr'
    },
    type: 'Lễ nhớ',
    sections: {
        biography: {
          vi: `<strong>Tiểu sử</strong>
Chân phước Phêrô Rơnê Rôgơ sinh năm 1758 tại Vannes, Pháp. Ngài gia nhập Tu Hội Truyền Giáo và được thụ phong linh mục năm 1786. Ngài nổi tiếng về lòng đạo đức và sự tận tụy trong việc mục vụ.
Trong cuộc Cách mạng Pháp, ngài từ chối tuyên thệ trung thành với Hiến pháp dân sự của hàng giáo sĩ. Ngài tiếp tục thi hành sứ vụ linh mục một cách bí mật, thăm viếng các bệnh nhân và ban các bí tích. Ngài bị bắt khi đang mang Mình Thánh Chúa cho một người hấp hối.
Tại tòa án, ngài đã can đảm tuyên xưng đức tin của mình. Ngài bị xử chém bằng máy chém vào ngày 3 tháng 3 năm 1796. Ngài được biết đến như là "Vị tử đạo của Thánh Thể". Ngài được Đức Giáo Hoàng Piô X phong chân phước vào năm 1934.`,
          en: `<strong>Biography</strong>
Blessed Pierre-René Rogue was born in 1758 in Vannes, France. He entered the Congregation of the Mission and was ordained a priest in 1786. He was known for his piety and pastoral zeal.
During the French Revolution, he refused to take the oath of allegiance to the Civil Constitution of the Clergy. He continued his priestly ministry in secret, visiting the sick and administering the sacraments. He was arrested while carrying the Viaticum to a dying person.
At his trial, he courageously professed his faith. He was executed by guillotine on March 3, 1796. He is known as the "Martyr of the Eucharist". He was beatified by Pope Pius X in 1934.`,
          es: `<strong>Biografía</strong>
El Beato Pedro Renato Rogue nació en 1758 en Vannes, Francia. Entró en la Congregación de la Misión y fue ordenado sacerdote en 1786. Era conocido por su piedad y celo pastoral.
Durante la Revolución Francesa, se negó a prestar el juramento de lealtad a la Constitución Civil del Clero. Continuó su ministerio sacerdotal en secreto, visitando a los enfermos y administrando los sacramentos. Fue arrestado mientras llevaba el Viático a un moribundo.
En su juicio, profesó valientemente su fe. Fue ejecutado en la guillotina el 3 de marzo de 1796. Es conocido como el "Mártir de la Eucaristía". Fue beatificado por el Papa Pío X en 1934.`,
          fr: `<strong>Biographie</strong>
Le bienheureux Pierre-René Rogue est né en 1758 à Vannes, en France. Il entra dans la Congrégation de la Mission et fut ordonné prêtre en 1786. Il était connu pour sa piété et son zèle pastoral.
Pendant la Révolution française, il refusa de prêter le serment de fidélité à la Constitution civile du clergé. Il continua son ministère sacerdotal en secret, visitant les malades et administrant les sacrements. Il fut arrêté alors qu'il portait le viatique à un mourant.
Lors de son procès, il professa courageusement sa foi. Il fut exécuté par la guillotine le 3 mars 1796. Il est connu comme le "Martyr de l'Eucharistie". Il a été béatifié par le pape Pie X en 1934.`,
          la: `<strong>Vita</strong>
Beatus Petrus Renatus Rogue natus est anno 1758 Venetiis, in Gallia. Congregationem Missionis ingressus est et presbyter anno 1786 ordinatus est. Pietate et zelo pastorali notus erat.
Inter Rerum Novarum Francicarum, iuramentum fidelitatis Constitutioni Civili Cleri praestare recusavit. Ministerium suum sacerdotale secreto continuavit, aegrotos visitans et sacramenta ministrans. Comprehensus est dum Viaticum ad morientem ferret.
In iudicio suo, fidem suam fortiter professus est. Guillotina supplicio affectus est die 3 Martii 1796. "Martyr Eucharistiae" appellatur. A Papa Pio X anno 1934 beatificatus est.`
        },
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
        en: 'St. Louise de Marillac',
        es: 'Santa Luisa de Marillac',
        fr: 'Sainte Louise de Marillac',
        la: 'Sancta Ludovica de Marillac'
    },
    subtitle: {
        vi: 'Đấng Đồng Sáng Lập Tu Hội Nữ Tử Bác Ái',
        en: 'Co-Foundress of the Daughters of Charity',
        es: 'Cofundadora de las Hijas de la Caridad',
        fr: 'Co-fondatrice des Filles de la Charité',
        la: 'Confundatrix Filiarum Caritatis'
    },
    type: 'Đại lễ',
    sections: {
        biography: {
          vi: `<strong>Tiểu sử</strong>
Thánh Lu-i-sa đờ Ma-ri-lắc sinh ngày 12 tháng 8 năm 1591 tại Paris. Mặc dù xuất thân từ một gia đình quý tộc, cuộc đời thời thơ ấu của ngài gặp nhiều khó khăn. Ngài kết hôn với Antoine Le Gras và có một người con trai. Sau khi chồng qua đời, ngài đã gặp Thánh Vinh Sơn Phaolô và cuộc đời ngài đã hoàn toàn thay đổi.
Dưới sự hướng dẫn của Thánh Vinh Sơn, ngài đã khám phá ra ơn gọi của mình là phục vụ người nghèo. Cùng với Thánh Vinh Sơn, ngài đã sáng lập Tu Hội Nữ Tử Bác Ái vào năm 1633. Ngài đã đi khắp nước Pháp để tổ chức các hội bác ái, thăm viếng và đào tạo các nữ tu đầu tiên. Ngài đã dạy họ phục vụ người nghèo với lòng khiêm tốn, dịu dàng và tận tụy, coi họ như là chủ và là thầy của mình.
Ngài qua đời ngày 15 tháng 3 năm 1660, chỉ vài tháng trước Thánh Vinh Sơn. Ngài được Đức Giáo Hoàng Piô XI phong thánh vào năm 1934 và được Đức Giáo Hoàng Gioan XXIII đặt làm Bổn mạng của các nhân viên xã hội Công giáo vào năm 1960.`,
          en: `<strong>Biography</strong>
Saint Louise de Marillac was born on August 12, 1591, in Paris. Although she came from an aristocratic family, her early life was marked by difficulties. She married Antoine Le Gras and had a son. After the death of her husband, she met Saint Vincent de Paul, and her life was completely transformed.
Under the guidance of Saint Vincent, she discovered her vocation to serve the poor. Together with Saint Vincent, she founded the Company of the Daughters of Charity in 1633. She traveled throughout France organizing confraternities of charity, visiting and forming the first sisters. She taught them to serve the poor with humility, gentleness, and devotion, seeing them as their lords and masters.
She died on March 15, 1660, just a few months before Saint Vincent. She was canonized by Pope Pius XI in 1934 and was named Patroness of Christian Social Workers by Pope John XXIII in 1960.`,
          es: `<strong>Biografía</strong>
Santa Luisa de Marillac nació el 12 de agosto de 1591 en París. Aunque provenía de una familia aristocrática, su vida temprana estuvo marcada por dificultades. Se casó con Antoine Le Gras y tuvo un hijo. Tras la muerte de su esposo, conoció a San Vicente de Paúl y su vida se transformó por completo.
Bajo la guía de San Vicente, descubrió su vocación de servir a los pobres. Junto con San Vicente, fundó la Compañía de las Hijas de la Caridad en 1633. Viajó por toda Francia organizando cofradías de la caridad, visitando y formando a las primeras hermanas. Les enseñó a servir a los pobres con humildad, dulzura y devoción, viéndolos como sus señores y amos.
Murió el 15 de marzo de 1660, solo unos meses antes que San Vicente. Fue canonizada por el Papa Pío XI en 1934 y nombrada Patrona de los Trabajadores Sociales Cristianos por el Papa Juan XXIII en 1960.`,
          fr: `<strong>Biographie</strong>
Sainte Louise de Marillac est née le 12 août 1591 à Paris. Bien qu'issue d'une famille aristocratique, sa jeunesse fut marquée par des difficultés. Elle épousa Antoine Le Gras et eut un fils. Après la mort de son mari, elle rencontra saint Vincent de Paul et sa vie fut complètement transformée.
Sous la direction de saint Vincent, elle découvrit sa vocation au service des pauvres. Avec saint Vincent, elle fonda la Compagnie des Filles de la Charité en 1633. Elle parcourut la France pour organiser les confréries de la charité, visiter et former les premières sœurs. Elle leur apprit à servir les pauvres avec humilité, douceur et dévouement, les considérant comme leurs seigneurs et maîtres.
Elle mourut le 15 mars 1660, quelques mois seulement avant saint Vincent. Elle fut canonisée par le pape Pie XI en 1934 et proclamée patronne des œuvres sociales chrétiennes par le pape Jean XXIII en 1960.`,
          la: `<strong>Vita</strong>
Sancta Ludovica de Marillac nata est die 12 Augusti 1591 Lutetiae. Etsi ex nobili familia orta, prima eius vita difficultatibus notata est. Antonio Le Gras nupsit et filium habuit. Post mortem mariti, Sancto Vincentio a Paulo occurrit, et vita eius funditus mutata est.
Sub ductu Sancti Vincentii, vocationem suam ad serviendum pauperibus invenit. Una cum Sancto Vincentio, Societatem Filiarum Caritatis anno 1633 condidit. Per Galliam iter fecit confraternitates caritatis ordinans, primas sorores visitans et formans. Eas docuit pauperibus cum humilitate, lenitate et devotione servire, eosque dominos et magistros suos considerare.
Obiit die 15 Martii 1660, paucis mensibus ante Sanctum Vincentium. A Papa Pio XI anno 1934 canonizata est et a Papa Ioanne XXIII Patrona Operum Socialium Christianorum anno 1960 nominata est.`
        },
        massReadings: placeholder,
        officeOfReadings: placeholder,
        lauds: placeholder,
        middayPrayer: placeholder,
        vespers: placeholder,
        compline: placeholder,
    },
  },
  {
    id: 'blessed-marguerite-rutan',
    date: '04-09',
    title: {
        vi: 'Chân Phước Magarita Rutan',
        en: 'Blessed Marguerite Rutan',
        es: 'Beata Margarita Rutan',
        fr: 'Bienheureuse Marguerite Rutan',
        la: 'Beata Margarita Rutan'
    },
    subtitle: {
        vi: 'Nữ tu, Tử đạo',
        en: 'Virgin, Martyr',
        es: 'Virgen y Mártir',
        fr: 'Vierge et Martyre',
        la: 'Virgo et Martyr'
    },
    type: 'Lễ nhớ',
    sections: {
        biography: {
          vi: `<strong>Tiểu sử</strong>
Chân phước Magarita Rutan sinh năm 1736 tại Metz, Pháp. Ngài gia nhập Tu Hội Nữ Tử Bác Ái và cống hiến đời mình phục vụ người bệnh và người nghèo. Ngài được sai đến Dax và trở thành Bề trên của bệnh viện tại đó.
Trong cuộc Cách mạng Pháp, Sơ Magarita và các nữ tu khác đã bị tố cáo là "phản cách mạng" vì đức tin và lòng bác ái của họ, khi họ chăm sóc cho tất cả mọi người không phân biệt. Mặc dù phải đối mặt với nhiều áp lực và nguy hiểm, Sơ vẫn kiên quyết trung thành với Giáo hội và sứ vụ của mình.
Ngài bị bắt và bị kết án tử hình. Ngài bị xử chém bằng máy chém vào ngày 9 tháng 4 năm 1794. Ngài được Đức Giáo Hoàng Bênêđictô XVI phong chân phước vào năm 2011.`,
          en: `<strong>Biography</strong>
Blessed Marguerite Rutan was born in 1736 in Metz, France. She entered the Company of the Daughters of Charity and dedicated her life to serving the sick and the poor. She was sent to Dax and became the superior of the hospital there.
During the French Revolution, Sister Marguerite and her fellow sisters were accused of being "counter-revolutionaries" because of their faith and their charity, as they cared for everyone without distinction. Despite facing much pressure and danger, she remained firm in her loyalty to the Church and her mission.
She was arrested and condemned to death. She was executed by guillotine on April 9, 1794. She was beatified by Pope Benedict XVI in 2011.`,
          es: `<strong>Biografía</strong>
La Beata Margarita Rutan nació en 1736 en Metz, Francia. Entró en la Compañía de las Hijas de la Caridad y dedicó su vida a servir a los enfermos y a los pobres. Fue enviada a Dax y se convirtió en la superiora del hospital de allí.
Durante la Revolución Francesa, Sor Margarita y sus compañeras fueron acusadas de ser "contrarrevolucionarias" por su fe y su caridad, ya que cuidaban a todos sin distinción. A pesar de enfrentar mucha presión y peligro, se mantuvo firme en su lealtad a la Iglesia y a su misión.
Fue arrestada y condenada a muerte. Fue ejecutada en la guillotina el 9 de abril de 1794. Fue beatificada por el Papa Benedicto XVI en 2011.`,
          fr: `<strong>Biographie</strong>
La bienheureuse Marguerite Rutan est née en 1736 à Metz, en France. Elle entra dans la Compagnie des Filles de la Charité et consacra sa vie au service des malades et des pauvres. Elle fut envoyée à Dax et y devint la supérieure de l'hôpital.
Pendant la Révolution française, Sœur Marguerite et ses consœurs furent accusées d'être des "contre-révolutionnaires" en raison de leur foi et de leur charité, car elles soignaient tout le monde sans distinction. Malgré de nombreuses pressions et dangers, elle resta ferme dans sa fidélité à l'Église et à sa mission.
Elle fut arrêtée et condamnée à mort. Elle fut exécutée par la guillotine le 9 avril 1794. Elle a été béatifiée par le pape Benoît XVI en 2011.`,
          la: `<strong>Vita</strong>
Beata Margarita Rutan nata est anno 1736 Mettis, in Gallia. Societatem Filiarum Caritatis ingressa est et vitam suam aegrotis et pauperibus serviens dedicavit. Aquae Augustae missa est et ibi superior hospitalis facta est.
Inter Rerum Novarum Francicarum, Soror Margarita et sociae eius "contra-revolutionariae" accusatae sunt propter fidem et caritatem suam, cum omnes sine distinctione curarent. Quamvis multas pressuras et pericula pateretur, in fide erga Ecclesiam et missionem suam firma permansit.
Comprehensa et ad mortem damnata est. Guillotina supplicio affecta est die 9 Aprilis 1794. A Papa Benedicto XVI anno 2011 beatificata est.`
        },
        massReadings: placeholder,
        officeOfReadings: placeholder,
        lauds: placeholder,
        middayPrayer: placeholder,
        vespers: placeholder,
        compline: placeholder,
    },
  },
  {
    id: 'st-joan-antida-thouret',
    date: '05-24',
    title: {
        vi: 'Thánh Gioanna An-ti-đa Thu-rê',
        en: 'St. Joan Antida Thouret',
        es: 'Santa Juana Antida Thouret',
        fr: 'Sainte Jeanne-Antide Thouret',
        la: 'Sancta Ioanna Antida Thouret'
    },
    subtitle: {
        vi: 'Nữ tu',
        en: 'Religious',
        es: 'Religiosa',
        fr: 'Religieuse',
        la: 'Religiosa'
    },
    type: 'Lễ nhớ',
    sections: {
        biography: {
          vi: `<strong>Tiểu sử</strong>
Thánh Gioanna An-ti-đa Thu-rê sinh năm 1765 tại Pháp. Ngài sớm cảm nhận được ơn gọi dâng mình cho Chúa và phục vụ người nghèo. Ngài đã gia nhập Tu Hội Nữ Tử Bác Ái tại Paris. Tuy nhiên, cuộc Cách mạng Pháp đã buộc Tu Hội phải giải tán, và Sơ Gioanna phải trở về quê nhà.
Không nản lòng, ngài tiếp tục công việc phục vụ, mở một trường học và một bếp ăn cho người nghèo. Năm 1799, tại Besançon, ngài đã thành lập một Tu hội mới, Dòng các Nữ tu Bác Ái Besançon, theo Tu luật của Thánh Vinh Sơn Phaolô. Tu hội của ngài nhanh chóng phát triển và lan rộng sang nhiều quốc gia.
Ngài qua đời tại Naples, Ý, vào ngày 24 tháng 8 năm 1826. Ngài được Đức Giáo Hoàng Piô XI phong thánh vào năm 1934.`,
          en: `<strong>Biography</strong>
Saint Joan Antida Thouret was born in 1765 in France. She soon felt the call to consecrate herself to God and to serve the poor. She joined the Company of the Daughters of Charity in Paris. However, the French Revolution forced the Company to dissolve, and Sister Joan had to return to her hometown.
Undeterred, she continued her work of service, opening a school and a soup kitchen for the poor. In 1799, in Besançon, she founded a new congregation, the Sisters of Charity of Besançon, under the Rule of Saint Vincent de Paul. Her congregation grew rapidly and spread to many countries.
She died in Naples, Italy, on August 24, 1826. She was canonized by Pope Pius XI in 1934.`,
          es: `<strong>Biografía</strong>
Santa Juana Antida Thouret nació en 1765 en Francia. Pronto sintió la llamada a consagrarse a Dios y a servir a los pobres. Se unió a la Compañía de las Hijas de la Caridad en París. Sin embargo, la Revolución Francesa obligó a la Compañía a disolverse, y Sor Juana tuvo que regresar a su ciudad natal.
Sin desanimarse, continuó su trabajo de servicio, abriendo una escuela y un comedor para los pobres. En 1799, en Besanzón, fundó una nueva congregación, las Hermanas de la Caridad de Besanzón, bajo la Regla de San Vicente de Paúl. Su congregación creció rápidamente y se extendió a muchos países.
Murió en Nápoles, Italia, el 24 de agosto de 1826. Fue canonizada por el Papa Pío XI en 1934.`,
          fr: `<strong>Biographie</strong>
Sainte Jeanne-Antide Thouret est née en 1765 en France. Elle sentit bientôt l'appel à se consacrer à Dieu et à servir les pauvres. Elle entra dans la Compagnie des Filles de la Charité à Paris. Cependant, la Révolution française força la Compagnie à se dissoudre, et Sœur Jeanne dut retourner dans sa ville natale.
Sans se décourager, elle poursuivit son œuvre de service, ouvrant une école et une soupe populaire pour les pauvres. En 1799, à Besançon, elle fonda une nouvelle congrégation, les Sœurs de la Charité de Besançon, sous la Règle de saint Vincent de Paul. Sa congrégation connut une croissance rapide et s'étendit à de nombreux pays.
Elle mourut à Naples, en Italie, le 24 août 1826. Elle fut canonisée par le pape Pie XI en 1934.`,
          la: `<strong>Vita</strong>
Sancta Ioanna Antida Thouret nata est anno 1765 in Gallia. Mox vocationem sensit ad se Deo consecrandam et pauperibus serviendum. Societatem Filiarum Caritatis Lutetiae ingressa est. Tamen, Rerum Novarum Francicarum Societatem dissolvi coegit, et Soror Ioanna in patriam redire debuit.
Non territa, opus suum servitii continuavit, scholam et coquinam publicam pauperibus aperiens. Anno 1799, Vesuntione, novam congregationem condidit, Sorores Caritatis Vesuntinenses, sub Regula Sancti Vincentii a Paulo. Congregatio eius cito crevit et in multas nationes diffusa est.
Neapoli, in Italia, die 24 Augusti 1826 obiit. A Papa Pio XI anno 1934 canonizata est.`
        },
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
        en: 'Blessed Marta Wiecka',
        es: 'Beata Marta Wiecka',
        fr: 'Bienheureuse Marta Wiecka',
        la: 'Beata Martha Wiecka'
    },
    subtitle: {
        vi: 'Nữ tu, Tử đạo Bác Ái',
        en: 'Religious, Martyr of Charity',
        es: 'Religiosa, Mártir de la Caridad',
        fr: 'Religieuse, Martyre de la Charité',
        la: 'Religiosa, Martyr Caritatis'
    },
    type: 'Lễ nhớ',
    sections: {
        biography: {
          vi: `<strong>Tiểu sử</strong>
Chân phước Mác-ta Vi-ét-cka sinh năm 1874 tại Ba Lan. Ngài gia nhập Tu Hội Nữ Tử Bác Ái và phục vụ tại nhiều bệnh viện khác nhau. Ngài được biết đến với lòng yêu mến sâu sắc đối với Thánh Thể và sự chăm sóc dịu dàng dành cho các bệnh nhân.
Khi đang phục vụ tại Sniatyn (nay thuộc Ukraina), một trận dịch sốt phát ban đã bùng phát. Một người đàn ông trẻ, một nhân viên bệnh viện có vợ con, được giao nhiệm vụ khử trùng phòng của một bệnh nhân mắc bệnh. Sơ Mác-ta, vì lo sợ cho sự an toàn của người đàn ông này, đã tình nguyện làm công việc đó thay anh.
Ngài đã bị nhiễm bệnh và qua đời sau một thời gian ngắn vào ngày 30 tháng 5 năm 1904, ở tuổi 30. Hành động anh hùng của ngài là một chứng tá hùng hồn về đức ái, sẵn sàng hy sinh mạng sống mình vì người khác. Ngài được Đức Giáo Hoàng Bênêđictô XVI phong chân phước vào năm 2008.`,
          en: `<strong>Biography</strong>
Blessed Marta Wiecka was born in 1874 in Poland. She joined the Company of the Daughters of Charity and served in various hospitals. She was known for her deep love for the Eucharist and her tender care for the sick.
While serving in Sniatyn (now in Ukraine), a typhus epidemic broke out. A young man, a hospital worker with a wife and child, was assigned to disinfect the room of a patient with the disease. Sister Marta, fearing for the man's safety, volunteered to do the job in his place.
She contracted the disease and died shortly after on May 30, 1904, at the age of 30. Her heroic act was a powerful witness to charity, willing to lay down her life for another. She was beatified by Pope Benedict XVI in 2008.`,
          es: `<strong>Biografía</strong>
La Beata Marta Wiecka nació en 1874 en Polonia. Se unió a la Compañía de las Hijas de la Caridad y sirvió en varios hospitales. Era conocida por su profundo amor a la Eucaristía y su tierno cuidado de los enfermos.
Mientras servía en Sniatyn (ahora en Ucrania), estalló una epidemia de tifus. A un joven, un trabajador del hospital con esposa e hijo, se le asignó la tarea de desinfectar la habitación de un paciente con la enfermedad. Sor Marta, temiendo por la seguridad del hombre, se ofreció voluntaria para hacer el trabajo en su lugar.
Contrajo la enfermedad y murió poco después, el 30 de mayo de 1904, a la edad de 30 años. Su acto heroico fue un poderoso testimonio de caridad, dispuesta a dar su vida por otro. Fue beatificada por el Papa Benedicto XVI en 2008.`,
          fr: `<strong>Biographie</strong>
La bienheureuse Marta Wiecka est née en 1874 en Pologne. Elle entra dans la Compagnie des Filles de la Charité et servit dans divers hôpitaux. Elle était connue pour son amour profond de l'Eucharistie et son soin tendre pour les malades.
Alors qu'elle servait à Sniatyn (aujourd'hui en Ukraine), une épidémie de typhus éclata. Un jeune homme, un employé de l'hôpital avec une femme et un enfant, fut chargé de désinfecter la chambre d'un patient atteint de la maladie. Sœur Marta, craignant pour la sécurité de l'homme, se porta volontaire pour faire le travail à sa place.
Elle contracta la maladie et mourut peu de temps après, le 30 mai 1904, à l'âge de 30 ans. Son acte héroïque fut un puissant témoignage de charité, prête à donner sa vie pour un autre. Elle a été béatifiée par le pape Benoît XVI en 2008.`,
          la: `<strong>Vita</strong>
Beata Martha Wiecka nata est anno 1874 in Polonia. Societatem Filiarum Caritatis ingressa est et in variis nosocomiis servivit. Nota erat ob profundum amorem erga Eucharistiam et teneram curam erga aegrotos.
Dum Sniatyni (nunc in Ucraina) serviebat, epidemia typhi exarsit. Iuveni, operario nosocomii cum uxore et filio, mandatum est ut cubiculum patientis morbo affecti desiniceret. Soror Martha, de salute viri timens, voluntarie opus in eius loco suscepit.
Morbum contraxit et paulo post obiit die 30 Maii 1904, aetatis suae 30. Actus eius heroicus potens testimonium caritatis fuit, parata ad vitam suam pro alio deponendam. A Papa Benedicto XVI anno 2008 beatificata est.`
        },
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
        en: 'St. Justin de Jacobis',
        es: 'San Justino de Jacobis',
        fr: 'Saint Justin de Jacobis',
        la: 'Sanctus Iustinus de Iacobis'
    },
    subtitle: {
        vi: 'Giám mục',
        en: 'Bishop',
        es: 'Obispo',
        fr: 'Évêque',
        la: 'Episcopus'
    },
    type: 'Lễ nhớ',
    sections: {
        biography: {
          vi: `<strong>Tiểu sử</strong>
Thánh Justin de Jacobis sinh ngày 9 tháng 10 năm 1800 tại San Fele, Ý. Ngài gia nhập Tu Hội Truyền Giáo năm 1818 và được thụ phong linh mục năm 1824. Sau nhiều năm phục vụ tại Ý, ngài được sai đến Ethiopia làm nhà truyền giáo vào năm 1839.
Tại Ethiopia, cha Justin đã làm việc không mệt mỏi để củng cố đức tin Công giáo và hòa giải các cộng đoàn Kitô hữu. Ngài sống một cuộc đời khó nghèo, giản dị, gần gũi với người dân và tôn trọng sâu sắc văn hóa địa phương. Ngài đã thành lập chủng viện, đào tạo các linh mục bản xứ và dịch các sách phụng vụ sang tiếng Amharic.
Năm 1847, ngài được bổ nhiệm làm Giám mục hiệu tòa Nilopolis và Đại diện Tông tòa Abyssinia. Ngài phải đối mặt với nhiều khó khăn và bách hại, nhưng ngài luôn kiên vững trong đức tin và lòng bác ái. Ngài qua đời vì kiệt sức vào ngày 31 tháng 7 năm 1860. Ngài được Đức Giáo Hoàng Phaolô VI phong thánh vào ngày 26 tháng 10 năm 1975.`,
          en: `<strong>Biography</strong>
Saint Justin de Jacobis was born on October 9, 1800, in San Fele, Italy. He joined the Congregation of the Mission in 1818 and was ordained a priest in 1824. After several years of service in Italy, he was sent to Ethiopia as a missionary in 1839.
In Ethiopia, Father Justin worked tirelessly to strengthen the Catholic faith and reconcile Christian communities. He lived a life of poverty and simplicity, close to the people and with deep respect for the local culture. He founded a seminary, trained native priests, and translated liturgical books into the Amharic language.
In 1847, he was appointed Titular Bishop of Nilopolis and Apostolic Vicar of Abyssinia. He faced many difficulties and persecutions, but he always remained steadfast in faith and charity. He died of exhaustion on July 31, 1860. He was canonized by Pope Paul VI on October 26, 1975.`,
          es: `<strong>Biografía</strong>
San Justino de Jacobis nació el 9 de octubre de 1800 en San Fele, Italia. Se unió a la Congregación de la Misión en 1818 y fue ordenado sacerdote en 1824. Después de varios años de servicio en Italia, fue enviado a Etiopía como misionero en 1839.
En Etiopía, el Padre Justino trabajó incansablemente para fortalecer la fe católica y reconciliar a las comunidades cristianas. Vivió una vida de pobreza y sencillez, cercano a la gente y con un profundo respeto por la cultura local. Fundó un seminario, formó a sacerdotes nativos y tradujo libros litúrgicos al idioma amhárico.
En 1847, fue nombrado Obispo Titular de Nilopolis y Vicario Apostólico de Abisinia. Enfrentó muchas dificultades y persecuciones, pero siempre se mantuvo firme en la fe y la caridad. Murió de agotamiento el 31 de julio de 1860. Fue canonizado por el Papa Pablo VI el 26 de octubre de 1975.`,
          fr: `<strong>Biographie</strong>
Saint Justin de Jacobis est né le 9 octobre 1800 à San Fele, en Italie. Il entra dans la Congrégation de la Mission en 1818 et fut ordonné prêtre en 1824. Après plusieurs années de service en Italie, il fut envoyé en Éthiopie comme missionnaire en 1839.
En Éthiopie, le Père Justin travailla sans relâche pour renforcer la foi catholique et réconcilier les communautés chrétiennes. Il vécut une vie de pauvreté et de simplicité, proche des gens et avec un profond respect pour la culture locale. Il fonda un séminaire, forma des prêtres autochtones et traduisit des livres liturgiques en langue amharique.
En 1847, il fut nommé évêque titulaire de Nilopolis et vicaire apostolique d'Abyssinie. Il fit face à de nombreuses difficultés et persécutions, mais il resta toujours ferme dans la foi et la charité. Il mourut d'épuisement le 31 juillet 1860. Il fut canonisé par le pape Paul VI le 26 octobre 1975.`,
          la: `<strong>Vita</strong>
Sanctus Iustinus de Iacobis natus est die 9 Octobris 1800 in San Fele, Italia. Congregationem Missionis anno 1818 intravit et presbyter anno 1824 ordinatus est. Post plures annos servitii in Italia, anno 1839 missionarius in Aethiopiam missus est.
In Aethiopia, Pater Iustinus indefesse laboravit ad fidem catholicam firmandam et communitates christianas reconciliandas. Vitam paupertatis et simplicitatis vixit, populo proximus et magno cum respectu erga culturam localem. Seminarium condidit, presbyteros indigenas instituit et libros liturgicos in linguam Amharicam transtulit.
Anno 1847, Episcopus titularis Nilopolitanus et Vicarius Apostolicus Abyssiniae nominatus est. Multas difficultates et persecutiones passus est, sed semper in fide et caritate firmus permansit. Lassitudine obiit die 31 Iulii 1860. A Papa Paulo VI canonizatus est die 26 Octobris 1975.`
        },
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
        en: 'Blessed Ghebre Michael',
        es: 'Beato Gebre Miguel',
        fr: 'Bienheureux Ghebre Michael',
        la: 'Beatus Gabra Michael'
    },
    subtitle: {
        vi: 'Linh mục, Tử đạo',
        en: 'Priest, Martyr',
        es: 'Sacerdote y Mártir',
        fr: 'Prêtre et Martyr',
        la: 'Presbyter et Martyr'
    },
    type: 'Lễ nhớ',
    sections: {
        biography: {
          vi: `<strong>Tiểu sử</strong>
Chân phước Ghebre Michael sinh khoảng năm 1791 tại Ethiopia. Là một tu sĩ Chính Thống Ethiopia, ngài nổi tiếng về sự uyên bác và đời sống thánh thiện. Sau khi gặp gỡ thánh Justin de Jacobis, ngài đã bị thuyết phục bởi sự thật của đức tin Công giáo và đã gia nhập Giáo hội Công giáo.
Sau khi trở thành linh mục Công giáo, cha Ghebre Michael đã dũng cảm rao giảng Tin Mừng và bảo vệ đức tin, bất chấp sự chống đối và bách hại. Ngài bị bắt, bị tra tấn dã man và bị kết án tử hình. Ngài đã trung thành với Chúa Kitô cho đến cùng và chịu tử đạo vào ngày 28 tháng 8 năm 1855. Ngài được Đức Giáo Hoàng Piô X phong chân phước vào năm 1926.`,
          en: `<strong>Biography</strong>
Blessed Ghebre Michael was born around 1791 in Ethiopia. As an Ethiopian Orthodox monk, he was renowned for his learning and holy life. After meeting Saint Justin de Jacobis, he was convinced of the truth of the Catholic faith and joined the Catholic Church.
After becoming a Catholic priest, Father Ghebre Michael courageously preached the Gospel and defended the faith, despite opposition and persecution. He was arrested, brutally tortured, and sentenced to death. He remained faithful to Christ to the end and was martyred on August 28, 1855. He was beatified by Pope Pius X in 1926.`,
          es: `<strong>Biografía</strong>
El Beato Gebre Miguel nació alrededor de 1791 en Etiopía. Como monje ortodoxo etíope, fue reconocido por su erudición y vida santa. Después de conocer a San Justino de Jacobis, se convenció de la verdad de la fe católica y se unió a la Iglesia Católica.
Después de convertirse en sacerdote católico, el Padre Gebre Miguel predicó valientemente el Evangelio y defendió la fe, a pesar de la oposición y la persecución. Fue arrestado, brutalmente torturado y sentenciado a muerte. Permaneció fiel a Cristo hasta el final y fue martirizado el 28 de agosto de 1855. Fue beatificado por el Papa Pío X en 1926.`,
          fr: `<strong>Biographie</strong>
Le bienheureux Ghebre Michael est né vers 1791 en Éthiopie. Moine orthodoxe éthiopien, il était réputé pour son savoir et sa vie sainte. Après avoir rencontré saint Justin de Jacobis, il fut convaincu de la vérité de la foi catholique et rejoignit l'Église catholique.
Devenu prêtre catholique, le père Ghebre Michael prêcha courageusement l'Évangile et défendit la foi, malgré l'opposition et la persécution. Il fut arrêté, brutalement torturé et condamné à mort. Il resta fidèle au Christ jusqu'à la fin et fut martyrisé le 28 août 1855. Il fut béatifié par le pape Pie X en 1926.`,
          la: `<strong>Vita</strong>
Beatus Gabra Michael natus est circa annum 1791 in Aethiopia. Monachus orthodoxus Aethiops, doctrina et sancta vita clarus erat. Postquam Sanctum Iustinum de Iacobis convenit, de veritate fidei catholicae persuasus est et Ecclesiam Catholicam intravit.
Postquam presbyter catholicus factus est, Pater Gabra Michael audacter Evangelium praedicavit et fidem defendit, non obstante oppositione et persecutione. Comprehensus, crudeliter tortus et ad mortem damnatus est. Christo usque in finem fidelis permansit et die 28 Augusti 1855 martyrium passus est. A Papa Pio X anno 1926 beatificatus est.`
        },
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
        en: 'Blessed Frederic Ozanam',
        es: 'Beato Federico Ozanam',
        fr: 'Bienheureux Frédéric Ozanam',
        la: 'Beatus Fridericus Ozanam'
    },
    subtitle: {
        vi: 'Giáo dân',
        en: 'Layman',
        es: 'Laico',
        fr: 'Laïc',
        la: 'Laicus'
    },
    type: 'Lễ nhớ',
    sections: {
        biography: {
          vi: `<strong>Tiểu sử</strong>
Antoine-Frédéric Ozanam sinh ngày 23 tháng 4 năm 1813 tại Milan, Ý. Ông là một học giả, luật sư, nhà báo và là người sáng lập chính của Hội Bác Ái Vinh Sơn (Society of Saint Vincent de Paul).
Lớn lên trong một gia đình Công giáo sùng đạo, Frédéric đã sớm có một đức tin sâu sắc và lòng yêu mến người nghèo. Khi là sinh viên tại Sorbonne ở Paris, ông và một nhóm bạn đã thành lập Hội Bác Ái Vinh Sơn vào năm 1833 để phục vụ những người nghèo khổ trong thành phố một cách trực tiếp.
Frédéric Ozanam là một người chồng và người cha mẫu mực, một giáo sư lỗi lạc và một người Công giáo dấn thân. Ông đã viết nhiều tác phẩm về lịch sử, văn học và các vấn đề xã hội, luôn bảo vệ chân lý của đức tin và phẩm giá của con người. Ông qua đời tại Marseille vào ngày 8 tháng 9 năm 1853. Ông được Đức Thánh Cha Gioan Phaolô II phong chân phước tại Paris vào ngày 22 tháng 8 năm 1997.`,
          en: `<strong>Biography</strong>
Antoine-Frédéric Ozanam was born on April 23, 1813, in Milan, Italy. He was a scholar, lawyer, journalist, and the main founder of the Society of Saint Vincent de Paul.
Raised in a devout Catholic family, Frédéric developed a deep faith and love for the poor from an early age. As a student at the Sorbonne in Paris, he and a group of friends founded the Society of Saint Vincent de Paul in 1833 to directly serve the city's poor.
Frédéric Ozanam was a model husband and father, a brilliant professor, and a committed Catholic. He wrote numerous works on history, literature, and social issues, always defending the truth of the faith and the dignity of the human person. He died in Marseille on September 8, 1853. He was beatified by Pope John Paul II in Paris on August 22, 1997.`,
          es: `<strong>Biografía</strong>
Antoine-Frédéric Ozanam nació el 23 de abril de 1813 en Milán, Italia. Fue un erudito, abogado, periodista y el principal fundador de la Sociedad de San Vicente de Paúl.
Criado en una devota familia católica, Federico desarrolló desde temprana edad una profunda fe y amor por los pobres. Como estudiante en la Sorbona de París, él y un grupo de amigos fundaron la Sociedad de San Vicente de Paúl en 1833 para servir directamente a los pobres de la ciudad.
Federico Ozanam fue un esposo y padre modelo, un profesor brillante y un católico comprometido. Escribió numerosas obras sobre historia, literatura y cuestiones sociales, defendiendo siempre la verdad de la fe y la dignidad de la persona humana. Murió en Marsella el 8 de septiembre de 1853. Fue beatificado por el Papa Juan Pablo II en París el 22 de agosto de 1997.`,
          fr: `<strong>Biographie</strong>
Antoine-Frédéric Ozanam est né le 23 avril 1813 à Milan, en Italie. Il était un érudit, un avocat, un journaliste et le principal fondateur de la Société de Saint-Vincent-de-Paul.
Élevé dans une famille catholique dévouée, Frédéric a développé très jeune une foi profonde et un amour pour les pauvres. Étudiant à la Sorbonne à Paris, il fonde avec un groupe d'amis la Société de Saint-Vincent-de-Paul en 1833 pour servir directement les pauvres de la ville.
Frédéric Ozanam était un mari et un père modèle, un brillant professeur et un catholique engagé. Il a écrit de nombreux ouvrages sur l'histoire, la littérature et les questions sociales, défendant toujours la vérité de la foi et la dignité de la personne humaine. Il est décédé à Marseille le 8 septembre 1853. Il a été béatifié par le pape Jean-Paul II à Paris le 22 août 1997.`,
          la: `<strong>Vita</strong>
Antonius Fridericus Ozanam natus est die 23 Aprilis 1813 Mediolani, in Italia. Fuit vir doctus, iurisconsultus, diurnarius et praecipuus conditor Societatis Sancti Vincentii a Paulo.
In devota familia catholica educatus, Fridericus ab ineunte aetate profundam fidem et amorem erga pauperes evolvit. Cum studens esset in Sorbona Lutetiae, ipse et coetus amicorum Societatem Sancti Vincentii a Paulo anno 1833 condiderunt ut pauperibus urbis directe servirent.
Fridericus Ozanam fuit exemplar coniugis et patris, professor clarissimus et catholicus devotus. Multa opera de historia, litteratura et quaestionibus socialibus scripsit, semper veritatem fidei et dignitatem personae humanae defendens. Massiliae obiit die 8 Septembris 1853. A Papa Ioanne Paulo II Lutetiae beatificatus est die 22 Augusti 1997.`
        },
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
        en: 'St. John Gabriel Perboyre',
        es: 'San Juan Gabriel Perboyre',
        fr: 'Saint Jean-Gabriel Perboyre',
        la: 'Sanctus Ioannes Gabriel Perboyre'
    },
    subtitle: {
        vi: 'Linh mục, Tử đạo',
        en: 'Priest, Martyr',
        es: 'Sacerdote y Mártir',
        fr: 'Prêtre et Martyr',
        la: 'Presbyter et Martyr'
    },
    type: 'Lễ kính',
    sections: {
        biography: {
          vi: `<strong>Tiểu sử</strong>
Thánh Gioan Gabriel Perboyre sinh ngày 6 tháng 1 năm 1802 tại Pháp. Ngài gia nhập Tu Hội Truyền Giáo và được thụ phong linh mục năm 1826. Với lòng khao khát truyền giáo, ngài đã được sai đến Trung Quốc vào năm 1835.
Tại Trung Quốc, cha Gioan Gabriel đã hăng say rao giảng Tin Mừng, rửa tội cho nhiều người và chăm sóc các cộng đoàn Kitô hữu. Ngài đã phải đối mặt với nhiều khó khăn và nguy hiểm. Trong cuộc bách hại năm 1839, ngài bị bắt, bị tra tấn dã man và cuối cùng bị xử tử bằng cách treo cổ vào ngày 11 tháng 9 năm 1840, giống như Thầy của mình là Đức Giêsu.
Ngài được Đức Giáo Hoàng Lêô XIII phong chân phước năm 1889 và được Đức Giáo Hoàng Gioan Phaolô II phong thánh vào ngày 2 tháng 6 năm 1996.`,
          en: `<strong>Biography</strong>
Saint John Gabriel Perboyre was born on January 6, 1802, in France. He joined the Congregation of the Mission and was ordained a priest in 1826. With a desire for missionary work, he was sent to China in 1835.
In China, Father John Gabriel zealously preached the Gospel, baptized many people, and cared for Christian communities. He faced many hardships and dangers. During the persecution of 1839, he was arrested, brutally tortured, and finally executed by strangulation on September 11, 1840, in a manner similar to his Master, Jesus.
He was beatified by Pope Leo XIII in 1889 and canonized by Pope John Paul II on June 2, 1996.`,
          es: `<strong>Biografía</strong>
San Juan Gabriel Perboyre nació el 6 de enero de 1802 en Francia. Se unió a la Congregación de la Misión y fue ordenado sacerdote en 1826. Con un deseo de trabajo misionero, fue enviado a China en 1835.
En China, el Padre Juan Gabriel predicó celosamente el Evangelio, bautizó a muchas personas y cuidó de las comunidades cristianas. Enfrentó muchas dificultades y peligros. Durante la persecución de 1839, fue arrestado, brutalmente torturado y finalmente ejecutado por estrangulamiento el 11 de septiembre de 1840, de manera similar a su Maestro, Jesús.
Fue beatificado por el Papa León XIII en 1889 y canonizado por el Papa Juan Pablo II el 2 de junio de 1996.`,
          fr: `<strong>Biographie</strong>
Saint Jean-Gabriel Perboyre est né le 6 janvier 1802 en France. Il entra dans la Congrégation de la Mission et fut ordonné prêtre en 1826. Désireux de partir en mission, il fut envoyé en Chine en 1835.
En Chine, le père Jean-Gabriel prêcha l'Évangile avec zèle, baptisa de nombreuses personnes et prit soin des communautés chrétiennes. Il fit face à de nombreuses difficultés et dangers. Lors de la persécution de 1839, il fut arrêté, brutalement torturé et finalement exécuté par strangulation le 11 septembre 1840, à la manière de son Maître, Jésus.
Il fut béatifié par le pape Léon XIII en 1889 et canonisé par le pape Jean-Paul II le 2 juin 1996.`,
          la: `<strong>Vita</strong>
Sanctus Ioannes Gabriel Perboyre natus est die 6 Ianuarii 1802 in Gallia. Congregationem Missionis intravit et presbyter anno 1826 ordinatus est. Missionis desiderio flagrans, anno 1835 in Sinas missus est.
In Sinis, Pater Ioannes Gabriel Evangelium studiose praedicavit, multos baptizavit et communitates christianas curavit. Multas difficultates et pericula passus est. Inter persecutionem anni 1839, comprehensus, crudeliter tortus et tandem strangulatione die 11 Septembris 1840 executus est, ad instar Magistri sui, Iesu.
A Papa Leone XIII anno 1889 beatificatus est et a Papa Ioanne Paulo II die 2 Iunii 1996 canonizatus est.`
        },
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
        en: 'St. Vincent de Paul',
        es: 'San Vicente de Paúl',
        fr: 'Saint Vincent de Paul',
        la: 'Sanctus Vincentius a Paulo'
    },
    subtitle: {
        vi: 'Linh mục, Đấng Sáng Lập',
        en: 'Priest, Founder',
        es: 'Sacerdote, Fundador',
        fr: 'Prêtre, Fondateur',
        la: 'Presbyter, Fundator'
    },
    type: 'Đại lễ',
    sections: {
        biography: {
          vi: `<strong>Tiểu sử</strong>
Thánh Vinh Sơn Phaolô sinh năm 1581 tại Pouy, Pháp, trong một gia đình nông dân. Sau khi thụ phong linh mục, ngài đã trải qua một cuộc khủng hoảng đức tin và một thời gian làm nô lệ. Những kinh nghiệm này đã biến đổi ngài sâu sắc và khơi dậy trong ngài một tình yêu mãnh liệt đối với người nghèo.
Ngài đã cống hiến trọn đời mình để phục vụ những người bị bỏ rơi nhất trong xã hội: người nghèo, bệnh nhân, trẻ mồ côi, tù nhân, người tị nạn. Ngài đã thành lập Tu Hội Truyền Giáo (các cha Laza) để rao giảng Tin Mừng cho người nghèo ở các vùng nông thôn và để đào tạo các linh mục. Cùng với Thánh Lu-i-sa đờ Ma-ri-lắc, ngài đã sáng lập Tu Hội Nữ Tử Bác Ái, những nữ tu đầu tiên phục vụ người nghèo ngay giữa đời.
Thánh Vinh Sơn được biết đến như là "Nhà tổ chức vĩ đại của đức ái". Tầm nhìn và các công cuộc của ngài đã đặt nền móng cho công tác xã hội hiện đại. Ngài qua đời tại Paris vào ngày 27 tháng 9 năm 1660. Ngài được Đức Giáo Hoàng Bênêđictô XIII phong thánh vào năm 1737 và được Đức Giáo Hoàng Lêô XIII đặt làm Bổn mạng của tất cả các hội bác ái Công giáo.`,
          en: `<strong>Biography</strong>
Saint Vincent de Paul was born in 1581 in Pouy, France, to a peasant family. After his priestly ordination, he experienced a crisis of faith and a period of slavery. These experiences profoundly transformed him and ignited in him an intense love for the poor.
He dedicated his entire life to serving the most abandoned in society: the poor, the sick, orphans, prisoners, and refugees. He founded the Congregation of the Mission (the Lazarists) to evangelize the rural poor and to form priests. With Saint Louise de Marillac, he founded the Company of the Daughters of Charity, the first non-cloistered sisters to serve the poor in the midst of the world.
Saint Vincent is known as the "Great Apostle of Charity." His vision and his works laid the foundations for modern social work. He died in Paris on September 27, 1660. He was canonized by Pope Benedict XIII in 1737 and was named Patron of all Catholic charities by Pope Leo XIII.`,
          es: `<strong>Biografía</strong>
San Vicente de Paúl nació en 1581 en Pouy, Francia, en una familia de campesinos. Después de su ordenación sacerdotal, experimentó una crisis de fe y un período de esclavitud. Estas experiencias lo transformaron profundamente y encendieron en él un intenso amor por los pobres.
Dedicó toda su vida a servir a los más abandonados de la sociedad: los pobres, los enfermos, los huérfanos, los prisioneros y los refugiados. Fundó la Congregación de la Misión (los Lazaristas) para evangelizar a los pobres de las zonas rurales y para formar a los sacerdotes. Con Santa Luisa de Marillac, fundó la Compañía de las Hijas de la Caridad, las primeras hermanas no enclaustradas que servían a los pobres en medio del mundo.
San Vicente es conocido como el "Gran Apóstol de la Caridad". Su visión y sus obras sentaron las bases del trabajo social moderno. Murió en París el 27 de septiembre de 1660. Fue canonizado por el Papa Benedicto XIII en 1737 y nombrado Patrono de todas las obras de caridad católicas por el Papa León XIII.`,
          fr: `<strong>Biographie</strong>
Saint Vincent de Paul est né en 1581 à Pouy, en France, dans une famille de paysans. Après son ordination sacerdotale, il a connu une crise de foi et une période d'esclavage. Ces expériences l'ont profondément transformé et ont allumé en lui un amour intense pour les pauvres.
Il a consacré toute sa vie au service des plus abandonnés de la société : les pauvres, les malades, les orphelins, les prisonniers et les réfugiés. Il a fondé la Congrégation de la Mission (les Lazaristes) pour évangéliser les pauvres des campagnes et pour former les prêtres. Avec sainte Louise de Marillac, il a fondé la Compagnie des Filles de la Charité, les premières sœurs non cloîtrées à servir les pauvres au milieu du monde.
Saint Vincent est connu comme le "Grand Apôtre de la Charité". Sa vision et ses œuvres ont jeté les bases du travail social moderne. Il est décédé à Paris le 27 septembre 1660. Il a été canonisé par le pape Benoît XIII en 1737 et a été nommé Patron de toutes les œuvres de charité catholiques par le pape Léon XIII.`,
          la: `<strong>Vita</strong>
Sanctus Vincentius a Paulo natus est anno 1581 in Pouy, Gallia, in familia rustica. Post ordinationem presbyteralem, crisim fidei et tempus servitutis expertus est. Hae experientiae eum profunde mutaverunt et in eo intensum amorem erga pauperes accenderunt.
Totam vitam suam dedicavit serviendo maxime derelictis in societate: pauperibus, aegrotis, orphanis, captivis et profugis. Congregationem Missionis (Lazaristas) condidit ad evangelizandos pauperes rurales et ad formandos presbyteros. Cum Sancta Ludovica de Marillac, Societatem Filiarum Caritatis condidit, primas sorores non claustratas quae pauperibus in medio mundi serviebant.
Sanctus Vincentius notus est ut "Magnus Caritatis Apostolus". Visio eius et opera eius fundamenta posuerunt operis socialis moderni. Lutetiae obiit die 27 Septembris 1660. A Papa Benedicto XIII anno 1737 canonizatus est et a Papa Leone XIII Patronus omnium operum caritatis catholicorum nominatus est.`
        },
        massReadings: placeholder,
        officeOfReadings: placeholder,
        lauds: placeholder,
        middayPrayer: placeholder,
        vespers: placeholder,
        compline: placeholder,
    },
  },
  {
    id: 'vincentian-martyrs-of-spain',
    date: '11-06',
    title: {
        vi: 'Các Thánh Tử Đạo Vinh Sơn tại Tây Ban Nha',
        en: 'Vincentian Martyrs of Spain',
        es: 'Mártires Vicencianos de España',
        fr: 'Martyrs Vincentiens d\'Espagne',
        la: 'Martyres Vincentiani Hispaniae'
    },
    subtitle: {
        vi: 'Linh mục, Tu sĩ và Giáo dân',
        en: 'Priests, Religious and Laity',
        es: 'Sacerdotes, Religiosos y Laicos',
        fr: 'Prêtres, Religieux et Laïcs',
        la: 'Presbyteri, Religiosi et Laici'
    },
    type: 'Lễ nhớ',
    sections: {
        biography: {
          vi: `<strong>Tiểu sử</strong>
Lễ này tưởng nhớ đông đảo các thành viên của Gia đình Vinh Sơn - bao gồm các linh mục và tu huynh Tu Hội Truyền Giáo, các Nữ Tử Bác Ái, và các thành viên giáo dân của các hội đoàn Vinh Sơn - đã bị giết vì đức tin trong cuộc Nội chiến Tây Ban Nha (1936-1939).
Trong thời kỳ bách hại tôn giáo khốc liệt này, họ đã phải đối mặt với sự lựa chọn giữa việc chối bỏ đức tin hoặc chịu chết. Với lòng can đảm phi thường, họ đã chọn trung thành với Chúa Kitô cho đến cùng. Tấm gương của họ là một lời nhắc nhở mạnh mẽ về sự cao cả của ơn gọi Kitô hữu và là một nguồn cảm hứng cho chúng ta sống đức tin của mình một cách triệt để. Hàng chục vị đã được Giáo hội tuyên phong chân phước.`,
          en: `<strong>Biography</strong>
This feast commemorates the numerous members of the Vincentian Family—including priests and brothers of the Congregation of the Mission, Daughters of Charity, and lay members of Vincentian associations—who were killed for their faith during the Spanish Civil War (1936-1939).
During this period of intense religious persecution, they were faced with the choice of renouncing their faith or facing death. With extraordinary courage, they chose to remain faithful to Christ to the end. Their example is a powerful reminder of the greatness of the Christian vocation and an inspiration for us to live our faith radically. Dozens of them have been beatified by the Church.`,
          es: `<strong>Biografía</strong>
Esta fiesta conmemora a los numerosos miembros de la Familia Vicenciana —incluyendo sacerdotes y hermanos de la Congregación de la Misión, Hijas de la Caridad y miembros laicos de las asociaciones vicencianas— que fueron asesinados por su fe durante la Guerra Civil Española (1936-1939).
Durante este período de intensa persecución religiosa, se enfrentaron a la elección de renunciar a su fe o enfrentar la muerte. Con un coraje extraordinario, eligieron permanecer fieles a Cristo hasta el final. Su ejemplo es un poderoso recordatorio de la grandeza de la vocación cristiana y una inspiración para que vivamos nuestra fe radicalmente. Decenas de ellos han sido beatificados por la Iglesia.`,
          fr: `<strong>Biographie</strong>
Cette fête commémore les nombreux membres de la Famille vincentienne - prêtres et frères de la Congrégation de la Mission, Filles de la Charité et membres laïcs des associations vincentiennes - qui ont été tués pour leur foi pendant la guerre civile espagnole (1936-1939).
Au cours de cette période d'intense persécution religieuse, ils ont été confrontés au choix de renoncer à leur foi ou d'affronter la mort. Avec un courage extraordinaire, ils ont choisi de rester fidèles au Christ jusqu'à la fin. Leur exemple est un puissant rappel de la grandeur de la vocation chrétienne et une inspiration pour nous de vivre notre foi radicalement. Des dizaines d'entre eux ont été béatifiés par l'Église.`,
          la: `<strong>Vita</strong>
Hoc festum commemorat numerosos sodales Familiae Vincentianae — inter quos presbyteri et fratres Congregationis Missionis, Filiae Caritatis et sodales laici consociationum Vincentianarum — qui propter fidem suam inter Bellum Civile Hispanicum (1936-1939) interfecti sunt.
Hoc tempore vehementis persecutionis religiosae, electionem inter fidem suam abnegandam aut mortem subeundam habuerunt. Animo extraordinario, Christo usque in finem fideles manere elegerunt. Exemplum eorum potens est commemoratio magnitudinis vocationis christianae et inspiratio nobis ad fidem nostram radicaliter vivendam. Decem ex iis ab Ecclesia beatificati sunt.`
        },
        massReadings: placeholder,
        officeOfReadings: placeholder,
        lauds: placeholder,
        middayPrayer: placeholder,
        vespers: placeholder,
        compline: placeholder,
    },
  },
  {
    id: 'all-saints-vincentian-family',
    date: '11-09',
    title: {
        vi: 'Lễ Các Thánh trong Gia Đình Vinh Sơn',
        en: 'Feast of All Saints of the Vincentian Family',
        es: 'Fiesta de Todos los Santos de la Familia Vicenciana',
        fr: 'Fête de Tous les Saints de la Famille Vincentienne',
        la: 'Festum Omnium Sanctorum Familiae Vincentianae'
    },
    subtitle: {
        vi: 'Đại lễ',
        en: 'Solemnity',
        es: 'Solemnidad',
        fr: 'Solennité',
        la: 'Sollemnitas'
    },
    type: 'Đại lễ',
    sections: {
        biography: {
          vi: `<strong>Giới thiệu</strong>
Hôm nay, Gia đình Vinh Sơn hân hoan mừng kính không chỉ các vị thánh và chân phước đã được Giáo hội chính thức tôn phong, mà còn vô số những thành viên khác - linh mục, tu huynh, nữ tu và giáo dân - những người đã sống theo đặc sủng của Thánh Vinh Sơn một cách âm thầm và anh hùng.
Họ là những người đã nhận ra Chúa Kitô nơi người nghèo, đã dành trọn cuộc đời để phục vụ những người bị bỏ rơi nhất, và đã trở thành những chứng nhân sống động của Tin Mừng Tình Thương. Lễ này là một lời mời gọi chúng ta noi gương các ngài, tiếp tục sứ mạng của Thánh Vinh Sơn trong thế giới ngày nay, và tin tưởng rằng chúng ta cũng được mời gọi nên thánh qua việc phục vụ khiêm tốn và bác ái.`,
          en: `<strong>Introduction</strong>
Today, the Vincentian Family joyfully celebrates not only the saints and blessed officially recognized by the Church, but also the countless other members—priests, brothers, sisters, and laity—who lived the Vincentian charism in a hidden and heroic way.
They are the ones who recognized Christ in the poor, who dedicated their lives to serving the most abandoned, and who became living witnesses of the Gospel of Charity. This feast is an invitation for us to follow their example, to continue the mission of St. Vincent in today's world, and to trust that we too are called to holiness through humble and charitable service.`,
          es: `<strong>Introducción</strong>
Hoy, la Familia Vicenciana celebra con alegría no solo a los santos y beatos reconocidos oficialmente por la Iglesia, sino también a los innumerables otros miembros —sacerdotes, hermanos, hermanas y laicos— que vivieron el carisma vicenciano de una manera oculta y heroica.
Ellos son los que reconocieron a Cristo en los pobres, los que dedicaron sus vidas a servir a los más abandonados y los que se convirtieron en testigos vivos del Evangelio de la Caridad. Esta fiesta es una invitación para que sigamos su ejemplo, para que continuemos la misión de San Vicente en el mundo de hoy y para que confiemos en que también nosotros estamos llamados a la santidad a través del servicio humilde y caritativo.`,
          fr: `<strong>Introduction</strong>
Aujourd'hui, la Famille vincentienne célèbre avec joie non seulement les saints et les bienheureux officiellement reconnus par l'Église, mais aussi les innombrables autres membres - prêtres, frères, sœurs et laïcs - qui ont vécu le charisme vincentien de manière cachée et héroïque.
Ce sont eux qui ont reconnu le Christ dans les pauvres, qui ont consacré leur vie au service des plus abandonnés et qui sont devenus des témoins vivants de l'Évangile de la Charité. Cette fête est une invitation à suivre leur exemple, à poursuivre la mission de saint Vincent dans le monde d'aujourd'hui et à croire que nous aussi, nous sommes appelés à la sainteté par un service humble et charitable.`,
          la: `<strong>Introductio</strong>
Hodie, Familia Vincentiana cum gaudio celebrat non solum sanctos et beatos ab Ecclesia publice agnitos, sed etiam innumerabiles alios sodales — presbyteros, fratres, sorores et laicos — qui charisma Vincentianum modo abscondito et heroico vixerunt.
Ipsi sunt qui Christum in pauperibus agnoverunt, qui vitam suam maxime derelictis serviendo dedicaverunt, et qui vivi testes Evangelii Caritatis facti sunt. Hoc festum invitatio est nobis ad eorum exemplum sequendum, ad missionem Sancti Vincentii in mundo hodierno continuandam, et ad confidendum nos quoque ad sanctitatem per humile et caritativum servitium vocari.`
        },
        massReadings: placeholder,
        officeOfReadings: placeholder,
        lauds: placeholder,
        middayPrayer: placeholder,
        vespers: placeholder,
        compline: placeholder,
    },
  },
  {
    id: 'our-lady-of-miraculous-medal',
    date: '11-27',
    title: {
        vi: 'Đức Trinh Nữ Maria Ảnh Phép Lạ',
        en: 'Our Lady of the Miraculous Medal',
        es: 'Nuestra Señora de la Medalla Milagrosa',
        fr: 'Notre-Dame de la Médaille Miraculeuse',
        la: 'Beata Maria Virgo a Sacro Numismate'
    },
    subtitle: {
        vi: '',
        en: '',
        es: '',
        fr: '',
        la: ''
    },
    type: 'Lễ kính',
    sections: {
        biography: {
          vi: `<strong>Lịch sử</strong>
Lễ này kỷ niệm các cuộc hiện ra của Đức Trinh Nữ Maria với Thánh Catarina Labouré, một tập sinh Nữ Tử Bác Ái, tại nhà nguyện ở Rue du Bac, Paris, vào năm 1830.
Trong các cuộc hiện ra này, Đức Mẹ đã tỏ mình đứng trên một quả địa cầu, với các tia sáng ân sủng chiếu tỏa từ đôi tay, và một dòng chữ bao quanh: "Ôi Maria vô nhiễm nguyên tội, xin cầu cho chúng con là kẻ chạy đến cùng Mẹ". Đức Mẹ đã yêu cầu đúc một mẫu ảnh theo mẫu này, và hứa ban nhiều ơn lành cho những ai đeo ảnh với lòng tin.
Mẫu ảnh nhanh chóng được phổ biến khắp thế giới và được gọi là "Ảnh Hay Phép Lạ" vì vô số ơn lành và phép lạ nhận được qua lời chuyển cầu của Đức Mẹ. Lễ này tôn vinh Đức Maria là Đấng Vô Nhiễm Nguyên Tội, là Mẹ và là Đấng Trung Gian các ơn thánh.`,
          en: `<strong>History</strong>
This feast commemorates the apparitions of the Blessed Virgin Mary to Saint Catherine Labouré, a novice of the Daughters of Charity, in the chapel on the Rue du Bac, Paris, in 1830.
During these apparitions, Our Lady appeared standing on a globe, with rays of grace streaming from her hands, and surrounded by the inscription: "O Mary, conceived without sin, pray for us who have recourse to thee." She requested that a medal be struck according to this model, promising great graces to those who wear it with confidence.
The medal quickly spread throughout the world and became known as the "Miraculous Medal" because of the countless graces and miracles obtained through Our Lady's intercession. This feast honors Mary as the Immaculate Conception, Mother, and Mediatrix of all graces.`,
          es: `<strong>Historia</strong>
Esta fiesta conmemora las apariciones de la Santísima Virgen María a Santa Catalina Labouré, una novicia de las Hijas de la Caridad, en la capilla de la Rue du Bac, París, en 1830.
Durante estas apariciones, Nuestra Señora se apareció de pie sobre un globo, con rayos de gracia emanando de sus manos, y rodeada por la inscripción: "Oh María, sin pecado concebida, ruega por nosotros que recurrimos a ti". Ella solicitó que se acuñara una medalla según este modelo, prometiendo grandes gracias a quienes la lleven con confianza.
La medalla se difundió rápidamente por todo el mundo y se conoció como la "Medalla Milagrosa" debido a las innumerables gracias y milagros obtenidos por la intercesión de Nuestra Señora. Esta fiesta honra a María como la Inmaculada Concepción, Madre y Mediadora de todas las gracias.`,
          fr: `<strong>Histoire</strong>
Cette fête commémore les apparitions de la Très Sainte Vierge Marie à sainte Catherine Labouré, novice des Filles de la Charité, dans la chapelle de la rue du Bac, à Paris, en 1830.
Au cours de ces apparitions, Notre-Dame est apparue debout sur un globe, des rayons de grâce jaillissant de ses mains, et entourée de l'inscription : "Ô Marie, conçue sans péché, priez pour nous qui avons recours à vous". Elle a demandé qu'une médaille soit frappée selon ce modèle, promettant de grandes grâces à ceux qui la porteraient avec confiance.
La médaille s'est rapidement répandue dans le monde entier et est devenue connue sous le nom de "Médaille Miraculeuse" en raison des innombrables grâces et miracles obtenus par l'intercession de Notre-Dame. Cette fête honore Marie comme l'Immaculée Conception, Mère et Médiatrice de toutes les grâces.`,
          la: `<strong>Historia</strong>
Hoc festum apparitiones Beatae Mariae Virginis Sanctae Catharinae Labouré, noviciae Filiarum Caritatis, in sacello ad Rue du Bac, Lutetiae, anno 1830 commemorat.
Inter has apparitiones, Domina Nostra stans super globum apparuit, radiis gratiae e manibus eius fluentibus, et circumdata inscriptione: "O Maria, sine labe concepta, ora pro nobis qui ad te confugimus." Petivit ut numisma secundum hoc exemplar cuderetur, magnas gratias promittens iis qui illud cum fiducia gererent.
Numisma cito per totum mundum diffusum est et "Numisma Miraculosum" notum factum est propter innumerabiles gratias et miracula per intercessionem Dominae Nostrae obtenta. Hoc festum Mariam honorat ut Immaculatam Conceptionem, Matrem et Mediatricem omnium gratiarum.`
        },
        massReadings: placeholder,
        officeOfReadings: placeholder,
        lauds: placeholder,
        middayPrayer: placeholder,
        vespers: placeholder,
        compline: placeholder,
    },
  },
  {
    id: 'st-catherine-laboure',
    date: '11-28',
    title: {
        vi: 'Thánh Ca-ta-ri-na La-bu-rê',
        en: 'St. Catherine Labouré',
        es: 'Santa Catalina Labouré',
        fr: 'Sainte Catherine Labouré',
        la: 'Sancta Catharina Labouré'
    },
    subtitle: {
        vi: 'Nữ tu',
        en: 'Religious',
        es: 'Religiosa',
        fr: 'Religieuse',
        la: 'Religiosa'
    },
    type: 'Lễ nhớ',
    sections: {
        biography: {
          vi: `<strong>Tiểu sử</strong>
Thánh Catherine Labouré sinh ngày 2 tháng 5 năm 1806 tại Pháp. Ngài gia nhập Tu Hội Nữ Tử Bác Ái năm 1830. Chính trong năm đó, ngài đã được diễm phúc thấy Đức Trinh Nữ Maria hiện ra nhiều lần tại nhà nguyện ở Rue du Bac, Paris.
Trong các lần hiện ra, Đức Mẹ đã trao cho ngài sứ mệnh đúc một mẫu ảnh, sau này được gọi là "Ảnh Hay Phép Lạ", với lời hứa ban nhiều ơn lành cho những ai tin tưởng đeo ảnh này. Sơ Catherine đã sống một cuộc đời âm thầm, khiêm tốn, phục vụ người già và bệnh tật trong suốt 46 năm. Ngài đã giữ bí mật về các cuộc hiện ra cho đến gần cuối đời.
Ngài qua đời ngày 31 tháng 12 năm 1876. Thi hài không hư nát của ngài được đặt tại nhà nguyện Rue du Bac. Ngài được Đức Giáo Hoàng Piô XII phong thánh vào năm 1947.`,
          en: `<strong>Biography</strong>
Saint Catherine Labouré was born on May 2, 1806, in France. She joined the Company of the Daughters of Charity in 1830. In that same year, she was graced with several apparitions of the Blessed Virgin Mary in the chapel on the Rue du Bac, Paris.
During the apparitions, Our Lady entrusted her with the mission of having a medal struck, which later became known as the "Miraculous Medal," with the promise of great graces for those who wear it with confidence. Sister Catherine lived a hidden and humble life, serving the elderly and the sick for 46 years. She kept the secret of the apparitions until near the end of her life.
She died on December 31, 1876. Her incorrupt body rests in the chapel on the Rue du Bac. She was canonized by Pope Pius XII in 1947.`,
          es: `<strong>Biografía</strong>
Santa Catalina Labouré nació el 2 de mayo de 1806 en Francia. Se unió a la Compañía de las Hijas de la Caridad en 1830. En ese mismo año, fue agraciada con varias apariciones de la Santísima Virgen María en la capilla de la Rue du Bac, París.
Durante las apariciones, Nuestra Señora le confió la misión de hacer acuñar una medalla, que más tarde se conoció como la "Medalla Milagrosa", con la promesa de grandes gracias para quienes la lleven con confianza. Sor Catalina vivió una vida oculta y humilde, sirviendo a los ancianos y enfermos durante 46 años. Guardó el secreto de las apariciones hasta casi el final de su vida.
Murió el 31 de diciembre de 1876. Su cuerpo incorrupto descansa en la capilla de la Rue du Bac. Fue canonizada por el Papa Pío XII en 1947.`,
          fr: `<strong>Biographie</strong>
Sainte Catherine Labouré est née le 2 mai 1806 en France. Elle entra dans la Compagnie des Filles de la Charité en 1830. La même année, elle eut la grâce de plusieurs apparitions de la Très Sainte Vierge Marie dans la chapelle de la rue du Bac, à Paris.
Au cours des apparitions, Notre-Dame lui confia la mission de faire frapper une médaille, qui devint plus tard connue sous le nom de "Médaille Miraculeuse", avec la promesse de grandes grâces pour ceux qui la porteraient avec confiance. Sœur Catherine a vécu une vie cachée et humble, servant les personnes âgées et les malades pendant 46 ans. Elle a gardé le secret des apparitions jusqu'à la fin de sa vie.
Elle est décédée le 31 décembre 1876. Son corps incorrompu repose dans la chapelle de la rue du Bac. Elle a été canonisée par le pape Pie XII en 1947.`,
          la: `<strong>Vita</strong>
Sancta Catharina Labouré nata est die 2 Maii 1806 in Gallia. Societatem Filiarum Caritatis anno 1830 intravit. Eodem anno, pluribus apparitionibus Beatae Virginis Mariae in sacello ad Rue du Bac, Lutetiae, gratia affecta est.
Inter apparitiones, Domina Nostra ei missionem concredidit numisma cudendi, quod postea "Numisma Miraculosum" notum factum est, cum promissione magnarum gratiarum pro iis qui illud cum fiducia gererent. Soror Catharina vitam occultam et humilem vixit, senibus et aegrotis per 46 annos serviens. Secretum apparitionum usque ad finem vitae suae servavit.
Obiit die 31 Decembris 1876. Corpus eius incorruptum in sacello ad Rue du Bac iacet. A Papa Pio XII anno 1947 canonizata est.`
        },
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
        en: 'Blessed Marcantonio Durando',
        es: 'Beato Marcantonio Durando',
        fr: 'Bienheureux Marcantonio Durando',
        la: 'Beatus Marcus Antonius Durando'
    },
    subtitle: {
        vi: 'Linh mục',
        en: 'Priest',
        es: 'Sacerdote',
        fr: 'Prêtre',
        la: 'Presbyter'
    },
    type: 'Lễ nhớ',
    sections: {
        biography: {
          vi: `<strong>Tiểu sử</strong>
Chân phước Mác-can-tô-ni-ô Đu-ran-đô sinh năm 1801 tại miền bắc nước Ý. Ngài gia nhập Tu Hội Truyền Giáo và được thụ phong linh mục năm 1824. Lòng nhiệt thành truyền giáo của ngài rất lớn, nhưng vì lý do sức khỏe, ngài không thể đi đến các miền đất xa xôi.
Thay vào đó, ngài đã trở thành một nhà truyền giáo vĩ đại ngay tại quê hương mình. Ngài tổ chức các cuộc đại phúc, giảng dạy và giải tội không mệt mỏi. Ngài đặc biệt quan tâm đến việc phục vụ các Nữ Tử Bác Ái và các hội viên của Hội Bác Ái Vinh Sơn.
Nhận thấy nhu cầu của những thiếu nữ nghèo và bị bỏ rơi, ngài đã thành lập Dòng các Nữ tu Nazareth vào năm 1865 để chăm sóc và giáo dục họ. Ngài qua đời vào ngày 10 tháng 12 năm 1880. Ngài được Đức Giáo Hoàng Gioan Phaolô II phong chân phước vào năm 2002.`,
          en: `<strong>Biography</strong>
Blessed Marcantonio Durando was born in 1801 in northern Italy. He joined the Congregation of the Mission and was ordained a priest in 1824. His missionary zeal was great, but for health reasons, he could not go to foreign missions.
Instead, he became a great missionary in his own homeland. He organized popular missions, preached, and heard confessions tirelessly. He had a special concern for serving the Daughters of Charity and the members of the Society of Saint Vincent de Paul.
Seeing the needs of poor and abandoned girls, he founded the Congregation of the Nazarene Sisters in 1865 to care for and educate them. He died on December 10, 1880. He was beatified by Pope John Paul II in 2002.`,
          es: `<strong>Biografía</strong>
El Beato Marcantonio Durando nació en 1801 en el norte de Italia. Se unió a la Congregación de la Misión y fue ordenado sacerdote en 1824. Su celo misionero era grande, pero por razones de salud, no pudo ir a misiones extranjeras.
En cambio, se convirtió en un gran misionero en su propia patria. Organizó misiones populares, predicó y confesó incansablemente. Tenía una preocupación especial por servir a las Hijas de la Caridad y a los miembros de la Sociedad de San Vicente de Paúl.
Viendo las necesidades de las niñas pobres y abandonadas, fundó la Congregación de las Hermanas Nazarenas en 1865 para cuidarlas y educarlas. Murió el 10 de diciembre de 1880. Fue beatificado por el Papa Juan Pablo II en 2002.`,
          fr: `<strong>Biographie</strong>
Le bienheureux Marcantonio Durando est né en 1801 dans le nord de l'Italie. Il entra dans la Congrégation de la Mission et fut ordonné prêtre en 1824. Son zèle missionnaire était grand, mais pour des raisons de santé, il ne put se rendre dans les missions étrangères.
Au lieu de cela, il devint un grand missionnaire dans sa propre patrie. Il organisa des missions populaires, prêcha et confessa sans relâche. Il se souciait particulièrement de servir les Filles de la Charité et les membres de la Société de Saint-Vincent-de-Paul.
Voyant les besoins des jeunes filles pauvres et abandonnées, il fonda la Congrégation des Sœurs Nazaréennes en 1865 pour s'occuper d'elles et les éduquer. Il mourut le 10 décembre 1880. Il a été béatifié par le pape Jean-Paul II en 2002.`,
          la: `<strong>Vita</strong>
Beatus Marcus Antonius Durando natus est anno 1801 in Italia septentrionali. Congregationem Missionis ingressus est et presbyter anno 1824 ordinatus est. Zelus eius missionarius magnus erat, sed ob rationes sanitatis, ad missiones exteras ire non potuit.
Proinde, magnus missionarius in patria sua factus est. Missiones populares ordinavit, praedicavit et confessiones indefesse audivit. Specialem curam habuit de Fíliabus Caritatis et sodalibus Societatis Sancti Vincentii a Paulo serviendo.
Videntes necessitates puellarum pauperum et derelictarum, Congregationem Sororum Nazarenarum anno 1865 condidit ad eas curandas et educandas. Obiit die 10 Decembris 1880. A Papa Ioanne Paulo II anno 2002 beatificatus est.`
        },
        massReadings: placeholder,
        officeOfReadings: placeholder,
        lauds: placeholder,
        middayPrayer: placeholder,
        vespers: placeholder,
        compline: placeholder,
    },
  }
];