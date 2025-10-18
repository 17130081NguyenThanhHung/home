import type { Feast } from './types.ts';

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
        en: `<strong>MASS</strong>
<strong>Entrance Antiphon (Jer 17:7-8)</strong>
Blessed is the one who trusts in the Lord, whose hope is the Lord. He is like a tree planted beside the waters that stretches out its roots to the stream.
<strong>Collect</strong>
O God, who crowned with the gift of true faith your holy one Elizabeth Ann Seton, grant us, we pray, that, by her example and intercession, we may grow in love for you and devote ourselves with zeal to the service of those in need. Through our Lord Jesus Christ, your Son.
<strong>Reading (1 Jn 3:14-18)</strong>
<em>A reading from the first Letter of Saint John.</em>
Beloved, we know that we have passed from death to life, because we love our brothers. Whoever does not love remains in death. Everyone who hates his brother is a murderer, and you know that no murderer has eternal life remaining in him. The way we came to know love was that he laid down his life for us; so we ought to lay down our lives for our brothers. If someone who has worldly means sees a brother in need and refuses him compassion, how can the love of God remain in him? Children, let us not love in word or speech but in deed and truth.
<strong>Responsorial Psalm (Ps 16)</strong>
<strong>R. You are my inheritance, O Lord!</strong>
Keep me, O God, for in you I take refuge. I say to the LORD, “My Lord are you. Apart from you I have no good.” <strong>R.</strong>
I bless the LORD who counsels me; even in the night my heart exhorts me. I set the LORD ever before me; with him at my right hand I shall not be disturbed. <strong>R.</strong>
You will show me the path to life, abounding joy in your presence, the delights at your right hand forever. <strong>R.</strong>
<strong>Gospel Acclamation (Jn 15:16)</strong>
Alleluia, alleluia. I chose you from the world, to go and bear fruit that will remain, says the Lord. Alleluia, alleluia.
<strong>Gospel (Jn 15:9-17)</strong>
<strong>A reading from the holy Gospel according to John.</strong>
Jesus said to his disciples: “As the Father loves me, so I also love you. Remain in my love. If you keep my commandments, you will remain in my love, just as I have kept my Father’s commandments and remain in his love. I have told you this so that my joy may be in you and your joy might be complete. This is my commandment: love one another as I love you. No one has greater love than this, to lay down one’s life for one’s friends. You are my friends if you do what I command you. I no longer call you slaves, because a slave does not know what his master is doing. I have called you friends, because I have told you everything I have heard from my Father. It was not you who chose me, but I who chose you and appointed you to go and bear fruit that will remain, so that whatever you ask the Father in my name he may give you. This I command you: love one another.”
<strong>Prayer over the Offerings</strong>
Lord God, may the sacrifice we offer you on this memorial of Saint Elizabeth Ann Seton be a sign of our loving service to you and our neighbor. We ask this through Christ our Lord.
<strong>Communion Antiphon (Jn 8:12)</strong>
The Lord says: I am the light of the world. Whoever follows me will not walk in darkness, but will have the light of life.
<strong>Prayer after Communion</strong>
Lord, may this Eucharist, which we have shared in memory of Saint Elizabeth Ann Seton, fill us with the spirit of your love. May we learn to love you and to serve you in our brothers and sisters. We ask this through Christ our Lord.`,
        es: `<strong>MISA</strong>
<strong>Antífona de entrada (Jer 17, 7-8)</strong>
Bendito el hombre que confía en el Señor y pone en el Señor su confianza. Será como un árbol plantado junto al agua, que junto a la corriente echa sus raíces.
<strong>Oración colecta</strong>
Oh, Dios, que coronaste con el don de la verdadera fe a santa Isabel Ana Seton, concédenos, te rogamos, que, por su ejemplo e intercesión, crezcamos en amor por ti y nos dediquemos con celo al servicio de los necesitados. Por nuestro Señor Jesucristo, tu Hijo.
<strong>Lectura (1 Jn 3, 14-18)</strong>
<em>Lectura de la primera carta del apóstol san Juan.</em>
Queridos hermanos, nosotros sabemos que hemos pasado de la muerte a la vida, porque amamos a los hermanos. El que no ama permanece en la muerte. Todo el que odia a su hermano es un homicida. Y sabéis que ningún homicida tiene vida eterna permanente en él. En esto hemos conocido el amor: en que él dio su vida por nosotros. Así también nosotros debemos dar la vida por los hermanos. Si alguno que posee bienes del mundo ve a su hermano que está necesitado y le cierra sus entrañas, ¿cómo puede permanecer en él el amor de Dios? Hijitos, no amemos de palabra ni de boca, sino de obra y de verdad.
<strong>Salmo responsorial (Sal 16)</strong>
<strong>R. ¡Tú eres mi heredad, Señor!</strong>
Protégeme, Dios mío, que me refugio en ti. Yo digo al Señor: «Tú eres mi bien». <strong>R.</strong>
Bendeciré al Señor, que me aconseja, hasta de noche me instruye internamente. Tengo siempre presente al Señor, con él a mi derecha no vacilaré. <strong>R.</strong>
Me enseñarás el sendero de la vida, me saciarás de gozo en tu presencia, de alegría perpetua a tu derecha. <strong>R.</strong>
<strong>Aclamación del Evangelio (Jn 15, 16)</strong>
Aleluya, aleluya. Yo os he elegido del mundo —dice el Señor—, para que vayáis y deis fruto, y vuestro fruto permanezca. Aleluya, aleluya.
<strong>Evangelio (Jn 15, 9-17)</strong>
<strong>Lectura del santo Evangelio según san Juan.</strong>
En aquel tiempo, dijo Jesús a sus discípulos: «Como el Padre me ha amado, así os he amado yo; permaneced en mi amor. Si guardáis mis mandamientos, permaneceréis en mi amor; lo mismo que yo he guardado los mandamientos de mi Padre y permanezco en su amor. Os he hablado de esto para que mi alegría esté en vosotros, y vuestra alegría llegue a plenitud. Este es mi mandamiento: que os améis unos a otros como yo os he amado. Nadie tiene amor más grande que el que da la vida por sus amigos. Vosotros sois mis amigos, si hacéis lo que yo os mando. Ya no os llamo siervos, porque el siervo no sabe lo que hace su señor: a vosotros os llamo amigos, porque todo lo que he oído a mi Padre os lo he dado a conocer. No sois vosotros los que me habéis elegido, soy yo quien os he elegido y os he destinado para que vayáis y deis fruto, y vuestro fruto permanezca. De modo que lo que pidáis al Padre en mi nombre os lo dé. Esto os mando: que os améis unos a otros».
<strong>Oración sobre las ofrendas</strong>
Señor, que el sacrificio que te ofrecemos en esta memoria de santa Isabel Ana Seton sea un signo de nuestro amoroso servicio a ti y a nuestro prójimo. Te lo pedimos por Cristo nuestro Señor.
<strong>Antífona de comunión (Jn 8, 12)</strong>
Dice el Señor: Yo soy la luz del mundo; el que me sigue no caminará en tinieblas, sino que tendrá la luz de la vida.
<strong>Oración después de la comunión</strong>
Señor, que esta Eucaristía, que hemos compartido en memoria de santa Isabel Ana Seton, nos llene del espíritu de tu amor. Que aprendamos a amarte y a servirte en nuestros hermanos. Te lo pedimos por Cristo nuestro Señor.`,
        fr: `<strong>MESSE</strong>
<strong>Antienne d'ouverture (Jr 17, 7-8)</strong>
Béni soit l'homme qui met sa foi dans le Seigneur, dont le Seigneur est la confiance. Il est comme un arbre planté près des eaux, qui étend ses racines vers le courant.
<strong>Prière d'ouverture</strong>
Dieu qui as comblé sainte Élisabeth-Ann Seton du don de la vraie foi, accorde-nous, nous t'en prions, par son exemple et son intercession, de grandir dans ton amour et de nous dévouer avec zèle au service des nécessiteux. Par Jésus Christ, ton Fils, notre Seigneur.
<strong>Lecture (1 Jn 3, 14-18)</strong>
<em>Lecture de la première lettre de saint Jean.</em>
Bien-aimés, nous savons que nous sommes passés de la mort à la vie, parce que nous aimons nos frères. Celui qui n'aime pas demeure dans la mort. Quiconque a de la haine pour son frère est un meurtrier, et vous savez que pas un meurtrier n'a la vie éternelle demeurant en lui. Voici comment nous avons connu l'amour : il a donné sa vie pour nous. Nous aussi, nous devons donner notre vie pour nos frères. Si quelqu'un, qui a les biens de ce monde, voit son frère dans le besoin et lui ferme ses entrailles, comment l'amour de Dieu demeurerait-il en lui ? Petits enfants, n'aimons pas en paroles ni par des discours, mais par des actes et en vérité.
<strong>Psaume responsorial (Ps 16)</strong>
<strong>R. Tu es, Seigneur, le partage de mon héritage !</strong>
Garde-moi, mon Dieu : j'ai fait de toi mon refuge. J'ai dit au Seigneur : « Tu es mon Dieu ! Je n'ai pas d'autre bonheur que toi. » <strong>R.</strong>
Je bénis le Seigneur qui me conseille : même la nuit mon cœur m'avertit. Je garde le Seigneur devant moi sans relâche ; il est à ma droite, je suis inébranlable. <strong>R.</strong>
Tu m'apprendras le chemin de la vie : devant ta face, débordement de joie ! À ta droite, éternité de délices ! <strong>R.</strong>
<strong>Acclamation de l'Évangile (Jn 15, 16)</strong>
Alléluia, alléluia. C'est moi qui vous ai choisis du milieu du monde, afin que vous alliez, que vous portiez du fruit, et que votre fruit demeure, dit le Seigneur. Alléluia, alléluia.
<strong>Évangile (Jn 15, 9-17)</strong>
<strong>Lecture du saint Évangile selon saint Jean.</strong>
En ce temps-là, Jésus disait à ses disciples : « Comme le Père m'a aimé, moi aussi je vous ai aimés. Demeurez dans mon amour. Si vous gardez mes commandements, vous demeurerez dans mon amour, comme moi, j'ai gardé les commandements de mon Père, et je demeure dans son amour. Je vous ai dit cela pour que ma joie soit en vous, et que votre joie soit parfaite. Mon commandement, le voici : Aimez-vous les uns les autres comme je vous ai aimés. Il n’y a pas de plus grand amour que de donner sa vie pour ceux qu’on aime. Vous êtes mes amis si vous faites ce que je vous commande. Je ne vous appelle plus serviteurs, car le serviteur ne sait pas ce que fait son maître ; je vous appelle mes amis, parce que tout ce que j'ai entendu de mon Père, je vous l'ai fait connaître. Ce n'est pas vous qui m'avez choisi, c'est moi qui vous ai choisis et établis, afin que vous alliez, que vous portiez du fruit, et que votre fruit demeure. Alors, tout ce que vous demanderez au Père en mon nom, il vous le donnera. Ce que je vous commande, c'est de vous aimer les uns les autres. »
<strong>Prière sur les offrandes</strong>
Seigneur notre Dieu, que le sacrifice que nous t'offrons en cette mémoire de sainte Élisabeth-Ann Seton soit un signe de notre service aimant envers toi et notre prochain. Nous te le demandons par le Christ notre Seigneur.
<strong>Antienne de la communion (Jn 8, 12)</strong>
Le Seigneur dit : Je suis la lumière du monde. Celui qui me suit ne marchera pas dans les ténèbres, mais il aura la lumière de la vie.
<strong>Prière après la communion</strong>
Seigneur, que cette Eucharistie, que nous avons partagée en mémoire de sainte Élisabeth-Ann Seton, nous remplisse de l'esprit de ton amour. Puissions-nous apprendre à t'aimer et à te servir en nos frères et sœurs. Nous te le demandons par le Christ notre Seigneur.`,
        la: `<strong>MISSA</strong>
<strong>Antiphona ad introitum (Ier 17, 7-8)</strong>
Benedictus vir qui confidit in Domino, et erit Dominus fiducia eius. Et erit quasi lignum quod transplantatur super aquas, quod ad humorem mittit radices suas.
<strong>Collecta</strong>
Deus, qui sanctam Elisabeth Annam Seton verae fidei dono coronavisti, concede, quaesumus, ut, eius exemplo et intercessione, in tui amore crescamus et egentium servitio ardenter nos impendamus. Per Dominum nostrum Iesum Christum Filium tuum.
<strong>Lectio (1 Io 3, 14-18)</strong>
<em>Lectio Epistulae primae beati Ioannis Apostoli.</em>
Carissimi, nos scimus quoniam transivimus de morte in vitam, quoniam diligimus fratres. Qui non diligit, manet in morte. Omnis qui odit fratrem suum, homicida est. Et scitis quoniam omnis homicida non habet vitam aeternam in se manentem. In hoc cognovimus caritatem, quoniam ille animam suam pro nobis posuit; et nos debemus pro fratribus animas ponere. Qui habuerit substantiam huius mundi, et viderit fratrem suum necessitatem habere, et clauserit viscera sua ab eo, quomodo caritas Dei manet in eo? Filioli, non diligamus verbo nec lingua, sed opere et veritate.
<strong>Psalmus responsorius (Ps 16)</strong>
<strong>R. Tu es, Domine, pars hereditatis meae.</strong>
Conserva me, Deus, quoniam speravi in te. Dixi Domino: «Dominus meus es tu, bonum mihi non est sine te». <strong>R.</strong>
Benedicam Dominum, qui tribuit mihi intellectum; insuper et usque ad noctem increpuerunt me renes mei. Providebam Dominum in conspectu meo semper; quoniam a dextris est mihi, non commovebor. <strong>R.</strong>
Notas mihi facies vias vitae, adimpletionem laetitiae cum vultu tuo, delectationes in dextera tua usque in finem. <strong>R.</strong>
<strong>Acclamatio ad Evangelium (Io 15, 16)</strong>
Alleluia, alleluia. Ego vos elegi de mundo, ut eatis et fructum afferatis, et fructus vester maneat, dicit Dominus. Alleluia, alleluia.
<strong>Evangelium (Io 15, 9-17)</strong>
<strong>Lectio sancti Evangelii secundum Ioannem.</strong>
In illo tempore, dixit Iesus discipulis suis: «Sicut dilexit me Pater, et ego dilexi vos. Manete in dilectione mea. Si praecepta mea servaveritis, manebitis in dilectione mea, sicut et ego Patris mei praecepta servavi, et maneo in eius dilectione. Haec locutus sum vobis, ut gaudium meum in vobis sit, et gaudium vestrum impleatur. Hoc est praeceptum meum, ut diligatis invicem, sicut dilexi vos. Maiorem hac dilectionem nemo habet, ut animam suam ponat quis pro amicis suis. Vos amici mei estis, si feceritis quae ego praecipio vobis. Iam non dico vos servos, quia servus nescit quid faciat dominus eius; vos autem dixi amicos, quia omnia quaecumque audivi a Patre meo, nota feci vobis. Non vos me elegistis, sed ego elegi vos, et posui vos ut eatis, et fructum afferatis, et fructus vester maneat; ut quodcumque petieritis Patrem in nomine meo, det vobis. Haec mando vobis, ut diligatis invicem».
<strong>Oratio super oblata</strong>
Domine Deus, sacrificium quod tibi offerimus in hac memoria sanctae Elisabeth Annae Seton, sit signum nostri amoris et servitii erga te et proximum. Per Christum Dominum nostrum.
<strong>Antiphona ad communionem (Io 8, 12)</strong>
Dicit Dominus: Ego sum lux mundi. Qui sequitur me, non ambulabit in tenebris, sed habebit lumen vitae.
<strong>Post communionem</strong>
Domine, haec Eucharistia, quam in memoriam sanctae Elisabeth Annae Seton sumpsimus, nos spiritu tui amoris impleat. Discamus te diligere et tibi in fratribus nostris servire. Per Christum Dominum nostrum.`
      },
      officeOfReadings: placeholder,
      lauds: placeholder,
      middayPrayer: placeholder,
      vespers: placeholder,
      compline: placeholder,
    }
  },
  {
    id: 'bl-rosalie-rendu',
    date: '02-07',
    title: {
      vi: 'Chân phước Rô-sa-li Ren-đu',
      en: 'Bl. Rosalie Rendu',
      es: 'Beata Rosalía Rendu',
      fr: 'Bienheureuse Rosalie Rendu',
      la: 'Beata Rosalia Rendu'
    },
    subtitle: {
      vi: 'Nữ Tử Bác Ái',
      en: 'Daughter of Charity',
      es: 'Hija de la Caridad',
      fr: 'Fille de la Charité',
      la: 'Filia Caritatis'
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
    }
  },
  {
    id: 'st-francis-regis-clet',
    date: '02-18',
    title: {
      vi: 'Thánh Phan-xi-cô Rê-gi-xê Cờ-lê',
      en: 'St. Francis Regis Clet',
      es: 'San Francisco Régis Clet',
      fr: 'Saint François-Régis Clet',
      la: 'Sanctus Franciscus Regis Clet'
    },
    subtitle: {
      vi: 'Linh mục, Tử đạo',
      en: 'Priest, Martyr',
      es: 'Sacerdote, Mártir',
      fr: 'Prêtre, Martyr',
      la: 'Sacerdos, Martyr'
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
    }
  },
  {
    id: 'bl-pierre-rene-rogue',
    date: '03-03',
    title: {
      vi: 'Chân phước Pi-e Rơ-nê Rô-gơ',
      en: 'Bl. Pierre-René Rogue',
      es: 'Beato Pedro Renato Rogue',
      fr: 'Bienheureux Pierre-René Rogue',
      la: 'Beatus Petrus Renatus Rogue'
    },
    subtitle: {
      vi: 'Linh mục, Tử đạo',
      en: 'Priest, Martyr',
      es: 'Sacerdote, Mártir',
      fr: 'Prêtre, Martyr',
      la: 'Sacerdos, Martyr'
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
    }
  },
  {
    id: 'bl-lindalva-justo-de-oliveira',
    date: '04-09',
    title: {
        vi: 'Chân phước Lindalva Justo de Oliveira',
        en: 'Bl. Lindalva Justo de Oliveira',
        es: 'Beata Lindalva Justo de Oliveira',
        fr: 'Bienheureuse Lindalva Justo de Oliveira',
        la: 'Beata Lindalva Justo de Oliveira'
    },
    subtitle: {
        vi: 'Nữ Tử Bác Ái, Tử đạo',
        en: 'Daughter of Charity, Martyr',
        es: 'Hija de la Caridad, Mártir',
        fr: 'Fille de la Charité, Martyre',
        la: 'Filia Caritatis, Martyr'
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
    }
  },
  {
    id: 'bl-marguerite-rutan',
    date: '04-09',
    title: {
        vi: 'Chân phước Mác-ga-ri-ta Ru-tan',
        en: 'Bl. Marguerite Rutan',
        es: 'Beata Margarita Rutan',
        fr: 'Bienheureuse Marguerite Rutan',
        la: 'Beata Margarita Rutan'
    },
    subtitle: {
        vi: 'Nữ Tử Bác Ái, Tử đạo',
        en: 'Daughter of Charity, Martyr',
        es: 'Hija de la Caridad, Mártir',
        fr: 'Fille de la Charité, Martyre',
        la: 'Filia Caritatis, Martyr'
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
    }
  },
  {
    id: 'founding-cm',
    date: '04-17',
    title: {
      vi: 'Kỷ niệm Thành lập Tu hội Truyền giáo',
      en: 'Commemoration of the Founding of the Congregation of the Mission',
      es: 'Conmemoración de la Fundación de la Congregación de la Misión',
      fr: 'Commémoration de la Fondation de la Congrégation de la Mission',
      la: 'Commemoratio Fundationis Congregationis Missionis'
    },
    subtitle: {
      vi: 'Ngày 17 tháng 4 năm 1625',
      en: 'April 17, 1625',
      es: '17 de abril de 1625',
      fr: '17 avril 1625',
      la: '17 Aprilis 1625'
    },
    type: 'Kỷ niệm',
    sections: {
      biography: {
        vi: '<strong>Lịch sử</strong><br>Thánh Vinh Sơn Phaolô, do lòng trắc ẩn trước sự nghèo đói về mặt thiêng liêng của người dân nông thôn, đã thành lập Tu hội Truyền giáo vào ngày 17 tháng 4 năm 1625, thông qua một hợp đồng với gia đình de Gondi. Cộng đoàn mới gồm các linh mục và tu sĩ đã tự hiến dâng để rao giảng các cuộc đại phúc cho người nghèo ở nông thôn và đào tạo một hàng giáo sĩ đức hạnh. Điều này đã đánh dấu sự khởi đầu của một gia đình thiêng liêng trên toàn thế giới, cam kết loan báo Tin Mừng và phục vụ những người bị bỏ rơi nhất.',
        en: '<strong>History</strong><br>St. Vincent de Paul, moved by the spiritual poverty of the rural people, established the Congregation of the Mission on April 17, 1625, through a contract with the de Gondi family. The new community of priests and brothers dedicated themselves to preaching missions to the poor in the countryside and forming a virtuous clergy. This marked the beginning of a worldwide spiritual family committed to evangelizing and serving the most abandoned.',
        es: '<strong>Historia</strong><br>San Vicente de Paúl, movido por la pobreza espiritual de la gente del campo, estableció la Congregación de la Misión el 17 de abril de 1625, mediante un contrato con la familia de Gondi. La nueva comunidad de sacerdotes y hermanos se dedicó a predicar misiones a los pobres del campo y a formar un clero virtuoso. Esto marcó el comienzo de una familia espiritual mundial comprometida con la evangelización y el servicio a los más abandonados.',
        fr: '<strong>Histoire</strong><br>Saint Vincent de Paul, ému par la pauvreté spirituelle des populations rurales, a fondé la Congrégation de la Mission le 17 avril 1625, par un contrat avec la famille de Gondi. La nouvelle communauté de prêtres et de frères s\'est consacrée à la prédication de missions pour les pauvres dans les campagnes et à la formation d\'un clergé vertueux. Cela a marqué le début d\'une famille spirituelle mondiale engagée dans l\'évangélisation et le service des plus abandonnés.',
        la: '<strong>Historia</strong><br>Sanctus Vincentius a Paulo, paupertate spirituali populi rustici motus, Congregationem Missionis die 17 Aprilis 1625 condidit, per contractum cum familia de Gondi. Nova communitas sacerdotum et fratrum se dedicaverunt ad missiones praedicandas pauperibus in agris et ad clerum virtuosum formandum. Hoc initium notavit familiae spiritualis per orbem terrarum commissae evangelizandi et serviendi maxime derelictis.'
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
    id: 'transfer-relics-st-vincent',
    date: '04-27',
    title: {
        vi: 'Lễ Cung nghinh Xương Thánh Vinh Sơn',
        en: 'Transfer of the Relics of St. Vincent',
        es: 'Traslación de las Reliquias de San Vicente',
        fr: 'Translation des Reliques de Saint Vincent',
        la: 'Translatio Reliquiarum S. Vincentii'
    },
    subtitle: {
        vi: 'Kỷ niệm việc di chuyển thánh tích của Thánh Vinh Sơn Phaolô',
        en: 'Commemoration of the moving of the relics of St. Vincent de Paul',
        es: 'Conmemoración del traslado de las reliquias de San Vicente de Paúl',
        fr: 'Commémoration du transfert des reliques de Saint Vincent de Paul',
        la: 'Commemoratio translationis reliquiarum S. Vincentii a Paulo'
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
    }
  },
  {
    id: 'st-louise-de-marillac',
    date: '05-09',
    title: {
      vi: 'Thánh Lu-y-sa đờ Ma-ri-lắc',
      en: 'St. Louise de Marillac',
      es: 'Santa Luisa de Marillac',
      fr: 'Sainte Louise de Marillac',
      la: 'Sancta Ludovica de Marillac'
    },
    subtitle: {
      vi: 'Đồng sáng lập Tu hội Nữ Tử Bác Ái',
      en: 'Co-foundress of the Daughters of Charity',
      es: 'Cofundadora de las Hijas de la Caridad',
      fr: 'Co-fondatrice des Filles de la Charité',
      la: 'Cofundatrix Filiarum Caritatis'
    },
    type: 'Đại lễ',
    sections: {
      biography: {
        vi: `<strong>Tiểu sử</strong>
Thánh Lu-y-sa đờ Ma-ri-lắc sinh ngày 12 tháng 8 năm 1591, có thể là tại Paris, trong một gia đình quý tộc. Ngài không biết mẹ mình là ai. Lớn lên, ngài khao khát dâng mình cho Chúa trong đời sống tu trì nhưng sức khỏe mỏng manh đã ngăn cản ngài. Thay vào đó, ngài kết hôn với Antoine Le Gras, thư ký của hoàng hậu, vào năm 1613. Hai người có một con trai tên là Michel.
Sau khi chồng qua đời vào năm 1625, Lu-y-sa trải qua một giai đoạn khó khăn về tinh thần. Chính trong thời gian này, ngài đã gặp Thánh Vinh Sơn Phaolô, người đã trở thành linh hướng của ngài. Dưới sự hướng dẫn của Thánh Vinh Sơn, Lu-y-sa đã tìm thấy ơn gọi đích thực của mình trong việc phục vụ người nghèo.
Năm 1633, cùng với Thánh Vinh Sơn, Lu-y-sa đã quy tụ những thiếu nữ nông thôn đầu tiên để thành lập Tu hội Nữ Tử Bác Ái, một cộng đoàn các nữ tu không có tu viện, sống giữa người nghèo để phục vụ họ. Lu-y-sa đã đào tạo các chị em, tổ chức công việc của họ và đi khắp nước Pháp để thành lập các cộng đoàn phục vụ người nghèo khổ, bệnh tật, trẻ mồ côi và những người bị bỏ rơi.
Với lòng tin tưởng tuyệt đối vào Chúa Quan Phòng, một trí thông minh sắc sảo và một trái tim đầy yêu thương, Lu-y-sa đã trở thành một nhà tổ chức bác ái vĩ đại. Ngài qua đời tại Paris vào ngày 15 tháng 3 năm 1660, vài tháng trước Thánh Vinh Sơn. Ngài được Đức Giáo Hoàng Piô XI phong thánh năm 1934 và được Đức Giáo Hoàng Gioan XXIII tôn làm bổn mạng của các nhân viên xã hội Công giáo năm 1960.`,
        en: `<strong>Biography</strong>
St. Louise de Marillac was born on August 12, 1591, probably in Paris, into a noble family. She never knew her mother. As a young woman, she desired to consecrate herself to God in religious life, but her fragile health prevented her. Instead, she married Antoine Le Gras, secretary to the queen, in 1613. They had one son, Michel.
After her husband's death in 1625, Louise went through a period of spiritual distress. It was during this time that she met St. Vincent de Paul, who became her spiritual director. Under his guidance, Louise found her true calling in serving the poor.
In 1633, with St. Vincent, Louise gathered the first country girls to form the Company of the Daughters of Charity, a community of unenclosed sisters who lived among the poor to serve them. Louise trained the sisters, organized their work, and traveled throughout France establishing communities to serve the destitute, the sick, orphans, and the abandoned.
With immense trust in Providence, a keen intellect, and a heart full of love, Louise became a great organizer of charity. She died in Paris on March 15, 1660, a few months before St. Vincent. She was canonized by Pope Pius XI in 1934 and declared Patroness of Christian Social Workers by Pope John XXIII in 1960.`,
        es: `<strong>Biografía</strong>
Santa Luisa de Marillac nació el 12 de agosto de 1591, probablemente en París, en el seno de una familia noble. Nunca conoció a su madre. De joven, deseaba consagrarse a Dios en la vida religiosa, pero su frágil salud se lo impidió. En su lugar, se casó con Antonio Le Gras, secretario de la reina, en 1613. Tuvieron un hijo, Miguel.
Tras la muerte de su esposo en 1625, Luisa atravesó un período de angustia espiritual. Fue durante este tiempo que conoció a San Vicente de Paúl, quien se convirtió en su director espiritual. Bajo su guía, Luisa encontró su verdadera vocación en el servicio a los pobres.
En 1633, junto con San Vicente, Luisa reunió a las primeras jóvenes del campo para formar la Compañía de las Hijas de la Caridad, una comunidad de hermanas sin clausura que vivían entre los pobres para servirles. Luisa formó a las hermanas, organizó su trabajo y viajó por toda Francia estableciendo comunidades para servir a los desamparados, los enfermos, los huérfanos y los abandonados.
Con una inmensa confianza en la Providencia, un intelecto agudo y un corazón lleno de amor, Luisa se convirtió en una gran organizadora de la caridad. Murió en París el 15 de marzo de 1660, pocos meses antes que San Vicente. Fue canonizada por el Papa Pío XI en 1934 y declarada Patrona de los Asistentes Sociales Cristianos por el Papa Juan XXIII en 1960.`,
        fr: `<strong>Biographie</strong>
Sainte Louise de Marillac est née le 12 août 1591, probablement à Paris, dans une famille noble. Elle n'a jamais connu sa mère. Jeune femme, elle désirait se consacrer à Dieu dans la vie religieuse, mais sa santé fragile l'en empêcha. À la place, elle épousa Antoine Le Gras, secrétaire de la reine, en 1613. Ils eurent un fils, Michel.
Après la mort de son mari en 1625, Louise traversa une période de détresse spirituelle. C'est à cette époque qu'elle rencontra saint Vincent de Paul, qui devint son directeur spirituel. Sous sa direction, Louise trouva sa véritable vocation dans le service des pauvres.
En 1633, avec saint Vincent, Louise rassembla les premières filles de la campagne pour former la Compagnie des Filles de la Charité, une communauté de sœurs non cloîtrées qui vivaient au milieu des pauvres pour les servir. Louise forma les sœurs, organisa leur travail et parcourut la France pour établir des communautés au service des démunis, des malades, des orphelins et des abandonnés.
Avec une immense confiance en la Providence, une intelligence vive et un cœur plein d'amour, Louise devint une grande organisatrice de la charité. Elle mourut à Paris le 15 mars 1660, quelques mois avant saint Vincent. Elle fut canonisée par le pape Pie XI en 1934 et déclarée patronne des travailleurs sociaux chrétiens par le pape Jean XXIII en 1960.`,
        la: `<strong>Vita</strong>
Sancta Ludovica de Marillac nata est die 12 Augusti 1591, verisimiliter Lutetiae Parisiorum, in familia nobili. Matrem suam numquam novit. Iuvenis, Deo se in vita religiosa consecrare cupiebat, sed infirma valetudo eam impedivit. Potius, Antonio Le Gras, reginae secretario, anno 1613 nupsit. Unum filium, Michaelem, habuerunt.
Post mortem mariti anno 1625, Ludovica tempus angustiae spiritualis transiit. Hoc tempore Sanctum Vincentium a Paulo convenit, qui eius director spiritualis factus est. Sub eius ductu, Ludovica veram suam vocationem in servitio pauperum invenit.
Anno 1633, cum Sancto Vincentio, Ludovica primas puellas rusticas congregavit ad Societatem Filiarum Caritatis formandam, communitatem sororum non clausuratarum quae inter pauperes vivebant ut eis servirent. Ludovica sorores instituit, opera earum ordinavit et per totam Galliam iter fecit ad communitates instituendas ad egenos, infirmos, orphanos et derelictos adiuvandos.
Cum immensa fiducia in Providentiam, acuto ingenio et corde pleno amore, Ludovica magna caritatis ordinatrix facta est. Lutetiae Parisiorum obiit die 15 Martii 1660, paucis mensibus ante Sanctum Vincentium. A Pio Papa XI anno 1934 canonizata est et a Ioanne Papa XXIII anno 1960 Patronam Operariorum Socialium Christianorum declarata est.`
      },
      massReadings: {
        vi: `<strong>THÁNH LỄ</strong>
<strong>Ca nhập lễ (Cn 31, 20. 26)</strong>
Bà rộng tay giúp người nghèo khó, và đưa tay cứu kẻ khốn cùng. Miệng bà nói lên lời khôn ngoan, và lưỡi bà dạy điều nhân hậu.
<strong>Lời nguyện nhập lễ</strong>
Lạy Thiên Chúa là Cha nhân ái, Chúa đã ban cho thánh nữ Lu-y-sa trở nên người mẹ của những người nghèo khổ. Xin cho chúng con, khi noi gương bắt chước đức ái của ngài, cũng biết phục vụ Đức Kitô nơi những anh chị em thiếu thốn, để mai sau được cùng ngài hưởng phúc Nước Trời. Chúng con cầu xin.
<strong>Bài đọc (Cn 31, 10-13, 19-20, 30-31)</strong>
<em>Bài trích sách Châm Ngôn.</em>
Một người vợ tài đức, ai mà tìm thấy? Nàng quý giá hơn châu ngọc rất nhiều. Chồng nàng hết dạ tin tưởng nàng, chàng sẽ chẳng thiếu chi lợi lộc. Suốt đời, nàng đem lại hạnh phúc chứ không gây tai họa cho chồng. Nàng tìm len và vải gai, rồi vui vẻ ra tay làm việc. Tay nàng cầm con quay và biết dùng xa sợi. Nàng rộng tay giúp người nghèo khó, và đưa tay cứu kẻ khốn cùng. Duyên dáng là giả trá, sắc đẹp là phù vân. Người phụ nữ kính sợ Đức Chúa mới đáng cho người đời ca tụng. Hãy để cho nàng hưởng những thành quả tay nàng đã làm ra. Ước gì nơi cổng thành nàng được mọi người ca ngợi.
<strong>Đáp ca (Tv 33)</strong>
<strong>Đ. Kẻ nghèo hèn kêu xin, và Chúa đã nhậm lời.</strong>
Tôi sẽ không ngừng chúc tụng Chúa, câu hát mừng Người chẳng ngớt trên môi. Linh hồn tôi hãnh diện vì Chúa, xin các bạn nghèo nghe tôi nói mà vui lên. <strong>Đ.</strong>
Hãy cùng tôi ca ngợi Chúa, ta đồng thanh tán tạ danh Người. Tôi đã tìm kiếm Chúa, và Người đáp lại, giải thoát cho khỏi mọi nỗi kinh hoàng. <strong>Đ.</strong>
Ai nhìn lên Chúa sẽ vui tươi hớn hở, không bao giờ bẽ mặt hổ ngươi. Kẻ nghèo hèn này kêu xin, và Chúa đã nhậm lời, cứu cho khỏi mọi cơn nguy khốn. <strong>Đ.</strong>
<strong>Tung hô Tin Mừng (Mt 11, 28)</strong>
Ha-lê-lu-i-a. Ha-lê-lu-i-a. Chúa nói: “Tất cả những ai đang vất vả mang gánh nặng nề, hãy đến cùng tôi, tôi sẽ cho nghỉ ngơi bồi dưỡng”. Ha-lê-lu-i-a.
<strong>Tin Mừng (Mt 11, 25-30)</strong>
<strong>Tin Mừng Đức Giêsu Kitô theo thánh Mát-thêu.</strong>
Khi ấy, Đức Giêsu cất tiếng nói: “Lạy Cha là Chúa Tể trời đất, con xin ngợi khen Cha, vì Cha đã giấu không cho bậc khôn ngoan thông thái biết những điều này, nhưng lại mặc khải cho những người bé mọn. Vâng, lạy Cha, vì đó là điều đẹp ý Cha. Cha tôi đã giao phó mọi sự cho tôi. Và không ai biết rõ người Con, trừ Chúa Cha; cũng như không ai biết rõ Chúa Cha, trừ người Con và kẻ mà người Con muốn mặc khải cho. Tất cả những ai đang vất vả mang gánh nặng nề, hãy đến cùng tôi, tôi sẽ cho nghỉ ngơi bồi dưỡng. Anh em hãy mang lấy ách của tôi, và hãy học với tôi, vì tôi có lòng hiền hậu và khiêm nhường. Tâm hồn anh em sẽ được nghỉ ngơi bồi dưỡng. Vì ách của tôi thì êm ái, và gánh của tôi thì nhẹ nhàng”.
<strong>Lời nguyện tiến lễ</strong>
Lạy Chúa, xin thương nhận của lễ chúng con dâng, và cho chúng con được thấm nhuần tinh thần bác ái mà Chúa đã khơi dậy nơi thánh nữ Lu-y-sa, để chúng con biết phụng sự Chúa và phục vụ anh chị em. Chúng con cầu xin.
<strong>Ca hiệp lễ (Mt 25, 40)</strong>
Chúa nói: “Ta bảo thật các ngươi: mỗi lần các ngươi làm như thế cho một trong những anh em bé nhỏ nhất của Ta đây, là các ngươi đã làm cho chính Ta vậy”.
<strong>Lời nguyện hiệp lễ</strong>
Lạy Chúa, chúng con vừa lãnh nhận Mình và Máu Thánh Con Chúa. Xin cho chúng con biết noi gương thánh nữ Lu-y-sa, luôn nhạy bén trước mọi nỗi khổ đau của con người, để có thể trở nên chứng nhân cho tình yêu của Chúa giữa trần gian. Chúng con cầu xin.`,
        en: `<strong>MASS</strong>
<strong>Entrance Antiphon (Prov 31:20, 26)</strong>
She opens her hand to the poor and reaches out her hands to the needy. She opens her mouth with wisdom, and the teaching of kindness is on her tongue.
<strong>Collect</strong>
O God, Father of mercies, who made Saint Louise a mother to the poor, grant, we pray, that, imitating her charity, we may serve Christ in our needy brothers and sisters and so merit to be part of your Kingdom. Through our Lord Jesus Christ, your Son.
<strong>Reading (Prov 31:10-13, 19-20, 30-31)</strong>
<em>A reading from the Book of Proverbs.</em>
Who can find a virtuous woman? For her price is far above rubies. The heart of her husband doth safely trust in her, so that he shall have no need of spoil. She will do him good and not evil all the days of her life. She seeketh wool, and flax, and worketh willingly with her hands. She layeth her hands to the spindle, and her hands hold the distaff. She stretcheth out her hand to the poor; yea, she reacheth forth her hands to the needy. Charm is deceitful, and beauty is vain, but a woman who fears the LORD is to be praised. Give her of the fruit of her hands, and let her own works praise her in the gates.
<strong>Responsorial Psalm (Ps 34)</strong>
<strong>R. The Lord hears the cry of the poor.</strong>
I will bless the LORD at all times; his praise shall be ever in my mouth. Let my soul glory in the LORD; the lowly will hear me and be glad. <strong>R.</strong>
Glorify the LORD with me, let us together extol his name. I sought the LORD, and he answered me and delivered me from all my fears. <strong>R.</strong>
Look to him that you may be radiant with joy, and your faces may not blush with shame. When the poor one called out, the LORD heard, and from all his distress he saved him. <strong>R.</strong>
<strong>Gospel Acclamation (Mt 11:28)</strong>
Alleluia, alleluia. Come to me, all you who labor and are burdened, and I will give you rest, says the Lord. Alleluia, alleluia.
<strong>Gospel (Mt 11:25-30)</strong>
<strong>A reading from the holy Gospel according to Matthew.</strong>
At that time Jesus exclaimed: “I give praise to you, Father, Lord of heaven and earth, for although you have hidden these things from the wise and the learned you have revealed them to little ones. Yes, Father, such has been your gracious will. All things have been handed over to me by my Father. No one knows the Son except the Father, and no one knows the Father except the Son and anyone to whom the Son wishes to reveal him. Come to me, all you who labor and are burdened, and I will give you rest. Take my yoke upon you and learn from me, for I am meek and humble of heart; and you will find rest for yourselves. For my yoke is easy, and my burden light.”
<strong>Prayer over the Offerings</strong>
Graciously accept, O Lord, the gifts we bring, and grant that, filled with the same spirit of charity with which you endowed Saint Louise, we may serve you and our neighbor. Through Christ our Lord.
<strong>Communion Antiphon (Mt 25:40)</strong>
The Lord says: Amen, I say to you, whatever you did for one of these least brothers of mine, you did for me.
<strong>Prayer after Communion</strong>
Renewed by the Body and Blood of your Son, we pray, O Lord, that, following the example of Saint Louise, we may be attentive to the needs of all and so become witnesses to your love in the world. Through Christ our Lord.`,
        es: `<strong>MISA</strong>
<strong>Antífona de entrada (Prov 31, 20. 26)</strong>
Alarga su palma al desvalido y tiende sus manos al pobre. Abre su boca a la sabiduría, y su lengua enseña la piedad.
<strong>Oración colecta</strong>
Oh, Dios, Padre de las misericordias, que hiciste de santa Luisa una madre para los pobres, concédenos, te rogamos, que, imitando su caridad, sirvamos a Cristo en nuestros hermanos necesitados y así merezcamos ser parte de tu Reino. Por nuestro Señor Jesucristo, tu Hijo.
<strong>Lectura (Prov 31, 10-13, 19-20, 30-31)</strong>
<em>Lectura del libro de los Proverbios.</em>
Una mujer fuerte, ¿quién la hallará? Vale mucho más que las perlas. Su marido se fía de ella, y no le faltan riquezas. Le trae el bien y no el mal, todos los días de su vida. Busca la lana y el lino, y los trabaja con la destreza de sus manos. Aplica sus manos a la rueca, y sus dedos manejan el huso. Tiende su mano al pobre, y alarga sus brazos al necesitado. Engañosa es la gracia, vana la hermosura; la mujer que teme al Señor, ésa será alabada. Dadle el fruto de sus manos, y que en las puertas la alaben sus obras.
<strong>Salmo responsorial (Sal 34)</strong>
<strong>R. El Señor escucha el clamor de los pobres.</strong>
Bendigo al Señor en todo momento, su alabanza está siempre en mi boca. Mi alma se gloría en el Señor: que los humildes lo escuchen y se alegren. <strong>R.</strong>
Engrandeced conmigo al Señor, ensalcemos juntos su nombre. Consulté al Señor, y me respondió, me libró de todas mis ansias. <strong>R.</strong>
Contempladlo, y quedaréis radiantes, vuestro rostro no se avergonzará. Si el afligido invoca al Señor, él lo escucha y lo salva de sus angustias. <strong>R.</strong>
<strong>Aclamación del Evangelio (Mt 11, 28)</strong>
Aleluya, aleluya. Venid a mí todos los que estáis cansados y agobiados, y yo os aliviaré, dice el Señor. Aleluya, aleluya.
<strong>Evangelio (Mt 11, 25-30)</strong>
<strong>Lectura del santo Evangelio según san Mateo.</strong>
En aquel tiempo, exclamó Jesús: «Te doy gracias, Padre, Señor de cielo y tierra, porque has escondido estas cosas a los sabios y entendidos y se las has revelado a la gente sencilla. Sí, Padre, así te ha parecido mejor. Todo me lo ha entregado mi Padre, y nadie conoce al Hijo más que el Padre, y nadie conoce al Padre sino el Hijo y aquel a quien el Hijo se lo quiera revelar. Venid a mí todos los que estáis cansados y agobiados, y yo os aliviaré. Cargad con mi yugo y aprended de mí, que soy manso y humble de corazón, y encontraréis descanso para vuestras almas. Porque mi yugo es llevadero y mi carga ligera».
<strong>Oración sobre las ofrendas</strong>
Acepta con bondad, Señor, los dones que te presentamos, y concédenos que, llenos del mismo espíritu de caridad con que dotaste a santa Luisa, te sirvamos a ti y a nuestro prójimo. Por Cristo, nuestro Señor.
<strong>Antífona de comunión (Mt 25, 40)</strong>
Dice el Señor: En verdad os digo que cuanto hicisteis a uno de estos mis hermanos más pequeños, a mí me lo hicisteis.
<strong>Oración después de la comunión</strong>
Renovados por el Cuerpo y la Sangre de tu Hijo, te pedimos, Señor, que, siguiendo el ejemplo de santa Luisa, estemos atentos a las necesidades de todos y así nos convirtamos en testigos de tu amor en el mundo. Por Cristo, nuestro Señor.`,
        fr: `<strong>MESSE</strong>
<strong>Antienne d'ouverture (Pr 31, 20. 26)</strong>
Elle ouvre sa main au malheureux et tend les bras au pauvre. Elle ouvre la bouche avec sagesse, et une leçon de bonté est sur sa langue.
<strong>Prière d'ouverture</strong>
Dieu, Père des miséricordes, qui as fait de sainte Louise une mère pour les pauvres, accorde-nous, nous t'en prions, qu'à l'imitation de sa charité, nous servions le Christ dans nos frères et sœurs dans le besoin et méritions ainsi de faire partie de ton Royaume. Par Jésus Christ, ton Fils.
<strong>Lecture (Pr 31, 10-13, 19-20, 30-31)</strong>
<em>Lecture du livre des Proverbes.</em>
Une femme vaillante, qui la trouvera ? Elle est infiniment plus précieuse que les perles. Le cœur de son mari a confiance en elle, et les profits ne lui feront pas défaut. Elle lui fait du bien, et non du mal, tous les jours de sa vie. Elle se procure de la laine et du lin, et travaille d'une main joyeuse. Elle met la main à la quenouille, et ses doigts tiennent le fuseau. Elle tend la main au malheureux, et ouvre ses bras à l'indigent. La grâce est trompeuse, et la beauté est vaine ; la femme qui craint le Seigneur est celle qui sera louée. Donnez-lui du fruit de ses mains, et qu'aux portes ses œuvres la louent.
<strong>Psaume responsorial (Ps 34)</strong>
<strong>R. Le Seigneur entend le cri des pauvres.</strong>
Je bénirai le Seigneur en tout temps, sa louange sans cesse à mes lèvres. Je me glorifierai dans le Seigneur : que les pauvres m'entendent et soient en fête ! <strong>R.</strong>
Magnifiez avec moi le Seigneur, exaltons tous ensemble son nom. J'ai cherché le Seigneur, il m'a répondu, de toutes mes terreurs il m'a délivré. <strong>R.</strong>
Qui regarde vers lui resplendira, sans ombre ni trouble au visage. Un pauvre crie, le Seigneur entend, il le sauve de toutes ses angoisses. <strong>R.</strong>
<strong>Acclamation de l'Évangile (Mt 11, 28)</strong>
Alléluia, alléluia. Venez à moi, vous tous qui peinez sous le poids du fardeau, et moi, je vous procurerai le repos, dit le Seigneur. Alléluia, alléluia.
<strong>Évangile (Mt 11, 25-30)</strong>
<strong>Lecture du saint Évangile selon saint Matthieu.</strong>
En ce temps-là, Jésus prit la parole et dit : « Père, Seigneur du ciel et de la terre, je proclame ta louange : ce que tu as caché aux sages et aux savants, tu l'as révélé aux tout-petits. Oui, Père, tu l'as voulu ainsi dans ta bienveillance. Tout m'a été remis par mon Père ; personne ne connaît le Fils, sinon le Père, et personne ne connaît le Père, sinon le Fils, et celui à qui le Fils veut le révéler. Venez à moi, vous tous qui peinez sous le poids du fardeau, et moi, je vous procurerai le repos. Prenez sur vous mon joug, devenez mes disciples, car je suis doux et humble de cœur, et vous trouverez le repos pour votre âme. Oui, mon joug est facile à porter, et mon fardeau, léger. »
<strong>Prière sur les offrandes</strong>
Accepte avec bonté, Seigneur, les dons que nous t'apportons, et accorde-nous, remplis du même esprit de charité dont tu as doté sainte Louise, de te servir, toi et notre prochain. Par le Christ, notre Seigneur.
<strong>Antienne de la communion (Mt 25, 40)</strong>
Le Seigneur dit : Amen, je vous le dis, chaque fois que vous l'avez fait à l'un de ces plus petits de mes frères, c'est à moi que vous l'avez fait.
<strong>Prière après la communion</strong>
Renouvelés par le Corps et le Sang de ton Fils, nous te prions, Seigneur, qu'à l'exemple de sainte Louise, nous soyons attentifs aux besoins de tous et devenions ainsi témoins de ton amour dans le monde. Par le Christ, notre Seigneur.`,
        la: `<strong>MISSA</strong>
<strong>Antiphona ad introitum (Prov 31, 20. 26)</strong>
Manum suam aperuit inopi et palmas suas extendit ad pauperem. Os suum aperuit sapientiae, et lex clementiae in lingua eius.
<strong>Collecta</strong>
Deus, Pater misericordiarum, qui sanctam Ludovicam pauperum matrem effecisti, concede, quaesumus, ut, eius caritatem imitantes, Christo in fratribus nostris egentibus serviamus et sic Regni tui participes esse mereamur. Per Dominum nostrum Iesum Christum Filium tuum.
<strong>Lectio (Prov 31, 10-13, 19-20, 30-31)</strong>
<em>Lectio libri Proverbiorum.</em>
Mulierem fortem quis inveniet? Procul et de ultimis finibus pretium eius. Confidit in ea cor viri sui, et spoliis non indigebit. Reddet ei bonum, et non malum, omnibus diebus vitae suae. Quaesivit lanam et linum, et operata est consilio manuum suarum. Posuit manum suam ad fortia, et digiti eius apprehenderunt fusum. Manum suam aperuit inopi, et palmas suas extendit ad pauperem. Fallax gratia, et vana est pulchritudo; mulier timens Dominum, ipsa laudabitur. Date ei de fructu manuum suarum, et laudent eam in portis opera eius.
<strong>Psalmus responsorius (Ps 34)</strong>
<strong>R. Clamant pauperes, et Dominus exaudit.</strong>
Benedicam Dominum in omni tempore; semper laus eius in ore meo. In Domino laudabitur anima mea; audiant mansueti, et laetentur. <strong>R.</strong>
Magnificate Dominum mecum, et exaltemus nomen eius in idipsum. Exquisivi Dominum, et exaudivit me; et ex omnibus tribulationibus meis eripuit me. <strong>R.</strong>
Accedite ad eum, et illuminamini, et facies vestrae non confundentur. Iste pauper clamavit, et Dominus exaudivit eum; et ex omnibus tribulationibus eius salvavit eum. <strong>R.</strong>
<strong>Acclamatio ad Evangelium (Mt 11, 28)</strong>
Alleluia, alleluia. Venite ad me, omnes qui laboratis et onerati estis, et ego reficiam vos, dicit Dominus. Alleluia, alleluia.
<strong>Evangelium (Mt 11, 25-30)</strong>
<strong>Lectio sancti Evangelii secundum Matthaeum.</strong>
In illo tempore respondens Iesus dixit: «Confiteor tibi, Pater, Domine caeli et terrae, quia abscondisti haec a sapientibus et prudentibus, et revelasti ea parvulis. Ita, Pater, quoniam sic fuit placitum ante te. Omnia mihi tradita sunt a Patre meo. Et nemo novit Filium, nisi Pater; neque Patrem quis novit, nisi Filius, et cui voluerit Filius revelare. Venite ad me, omnes, qui laboratis et onerati estis, et ego reficiam vos. Tollite iugum meum super vos, et discite a me, quia mitis sum et humilis corde, et invenietis requiem animabus vestris. Iugum enim meum suave est, et onus meum leve est».
<strong>Oratio super oblata</strong>
Oblata nostra, quaesumus, Domine, benigne suscipe, et concede ut, eodem caritatis spiritu repleti, quo sanctam Ludovicam imbuisti, tibi et proximo serviamus. Per Christum Dominum nostrum.
<strong>Antiphona ad communionem (Mt 25, 40)</strong>
Dicit Dominus: Amen dico vobis: Quamdiu fecistis uni ex his fratribus meis minimis, mihi fecistis.
<strong>Post communionem</strong>
Corpore et Sanguine Filii tui refecti, quaesumus, Domine, ut, exemplo sanctae Ludovicae, omnium necessitatibus attenti, testes amoris tui in mundo efficiamur. Per Christum Dominum nostrum.`
      },
      officeOfReadings: placeholder,
      lauds: placeholder,
      middayPrayer: placeholder,
      vespers: placeholder,
      compline: placeholder,
    }
  },
];
