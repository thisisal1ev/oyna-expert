//photos
import zamer from './assets/img/zamer.svg'
import rassrochka from './assets/img/rassrochka.svg'
import montaj from './assets/img/montaj.svg'
import garantiya from './assets/img/garantiya.svg'
import raschyot from './assets/img/raschyot.svg'
import podbor from './assets/img/podbor-varianta.svg'
import smeta from './assets/img/okonchatelnaya-smeta.svg'
import zakaz from './assets/img/oformlenie-zakaza.svg'
import dostavka from './assets/img/dostavka.svg'
import sdacha from './assets/img/sdacha-obyekta.svg'
import moskitnie from './assets/img/moskitnie.jpg'
import zamki from './assets/img/ramki.jpg'
import otlivi from './assets/img/otlivi.jpg'
import shumo from './assets/img/shumoizolyatsa.jpg'
import stock1 from './assets/img/black-friday.jpg'
import stock2 from './assets/img/sezonnie-tovari.jpg'
import stock3 from './assets/img/year-sale.jpg'
import standart from './assets/img/standart.webp'
import komfort from './assets/img/komfort.webp'
import biznes from './assets/img/biznes.webp'
import delyuks from './assets/img/delyuks.webp'
import review1 from './assets/img/yakovlev.webp'
import review2 from './assets/img/somonova.webp'
import review3 from './assets/img/yagudin.webp'
import news1 from './assets/img/profisiaonal.jpg'
import news2 from './assets/img/yordam.png'
import news3 from './assets/img/shartnoma.jpg'
import news4 from './assets/img/maslahat.jpg'
import news5 from './assets/img/Jami.jpg'
import news6 from './assets/img/tashabbus.jpg'
import news7 from './assets/img/reklama.jpg'
import news8 from './assets/img/banner.jpg'
import blog1 from './assets/img/malumot.jpg'
import blog2 from './assets/img/maqolalar.jpg'
import blog3 from './assets/img/sobaka-blog.jpg'
import blog4 from './assets/img/matn.jpg'
import blog5 from './assets/img/plastik-oynalar.jpg'
import blog6 from './assets/img/moskitnie-setki.jpg'
import blog7 from './assets/img/stvorka.jpg'

// factory functions
const news = function (id, title, dateOfPublication, img, excerptFromThePost, sectionTitle, shortAboutTheNews, text, mainText, conText, excerptFromThePost2, uniqueName,) {
  return {
    id, title, img, excerptFromThePost, sectionTitle, shortAboutTheNews, text, mainText, conText, excerptFromThePost2, uniqueName,
    dateOfPublication: `02.04.2020`,
  };
};

const blog = function (id, title, dateOfPublication, shortAboutTheNews, img, conText, text,) {
  return {
    id, title, dateOfPublication, shortAboutTheNews, img, conText, text,
  };
};

export const services = [
  {
    id: 1,
    img: zamer,
    title: `Bepul o'lchash`,
    context: `Biz sizga qulay vaqtda o'lchash moslamasini taklif qilamiz`,
  },
  {
    id: 2,
    img: rassrochka,
    title: `Foizsiz bo'lib-bo'lib to'lash`,
    context: `Siz derazalarni 12 oylik bo'lib-bo'lib, dastlabki to'lovsiz o'rnatishingiz mumkin`,
  },
  {
    id: 3,
    img: montaj,
    title: `GOST bo'yicha o'rnatish`,
    context: `Barcha montaj ishlari GOSTning amaldagi talablariga muvofiq amalga oshiriladi`,
  },
  {
    id: 4,
    img: garantiya,
    title: `5 yillik kafolat`,
    context: `Mutaxassislar mavsumiy texnik xizmat ko'rsatish, aksessuarlarni sozlash va muhrlarni parvarish qilishni amalga oshiradilar`,
  },
];

export const stagesOfWork = [
  {
    id: 1,
    img: raschyot,
    title: `Dastlabki hisoblash`,
    context: `Bizning mutaxassislarimiz sizning ehtiyojlaringizga qarab derazalarni tanlashda sizga yordam beradi`,
  },
  {
    id: 2,
    img: podbor,
    title: `Variantni o'lchash va tanlash`,
    context: `O'lchovchi sizni oldinggizga keladi, o'lchovlarni amalga oshiradi, barcha savollaringizga javob beradi`,
  },
  {
    id: 3,
    img: smeta,
    title: `Loyiha va yakuniy hisob-kitob`,
    context: `O'rnatish va materiallarning barcha xarajatlarini hisob-kitob qilamiz`,
  },
  {
    id: 4,
    img: zakaz,
    title: `To'lov va oldindan to'lov 50%`,
    context: `Hisob-kitobdan so'ng mutaxassis shartnomani tuzadi va derazalarni ishlab chiqarishga yuboradi`,
  },
  {
    id: 5,
    img: dostavka,
    title: `Yetkazib berish`,
    context: `Belgilangan kunda sizga tayyor derazalar etkazib beriladi va o'rnatish boshlanadi`,
  },
  {
    id: 6,
    img: sdacha,
    title: `Ob'ektni o'rnatish va topshirish`,
    context: `Montajchilar eskilarini demontaj qiladilar va yangilarini o'rnatadilar. Barcha axlatlarni olib tashlashadi va kafolat hujjatlarini topshiradilar!`,
  },
];

export const komplekt = [
  {
    id: 1,
    img: moskitnie,
    title: `Chivinga qarshi to'rlar`,
    text: `Hasharotlar va terak paxmoqlari uchun ishonchli to'siq`,
  },
  {
    id: 2,
    img: zamki,
    title: `Bolalar qulfi`,
    text: `Ular chaqaloqning xavfsizligini himoya qiladi va derazani ochilishdan himoya qiladi`,
  },
  {
    id: 3,
    img: otlivi,
    title: `Suv toshishi`,
    text: `Strukturani va o'rnatish chokini yog'ingarchilikdan himoya qilish uchun tashqi tomondan o'rnatiladi`,
  },
  {
    id: 4,
    img: shumo,
    title: `Ovoz o'tkazmaydigan oyna`,
    text: `Ovoz o'tkazmaydigan xususiyatlarini oshirgan ikki oynali oyna`,
  },
];

export const profiles = [
  {
    id: 1,
    title: `Rehau Thermo`,
    sectionTitle: `Afzalliklari:`,
    mainText: `VIDNAL-deraza va eshik, fasad tizimlari uchun alyuminiy Profil. "Vidnal" profilining qisqartirilgan kengligi tufayli dizaynlar engilroq va oqlangan ko'rinadi. Biz VIDNAL derazalari va eshiklarini tijorat, turar-joy binolari uchun tayyorlaymiz, jabhada, tom yopish oynalarini qilamiz. Biz etkazib berish va o'rnatishni ta'minlaymiz. Rasmiy kafolat-5 yildan!`,
    context: [
      `Past metall sig'imi-arzonroq narx, yuk ko'taruvchi elementga kamroq yuk`,
      `Iqtisodiyot-bu juda oddiy o'rnatish, tuzilmalarning o'rtacha narxi.`,
      `Chidamlilik. Korroziya va deformatsiya chiqarib tashlandi — vidnal eshik va deraza tizimlari o'nlab yillar davom etadi.`,
      `Murakkab tizimlarni oddiy o'rnatish-burchak ostida 0-90° oralig'ida.`,
    ],
  },
  {
    id: 2,
    title: `Rehau Grazio`,
    sectionTitle: `Afzalliklari:`,
    mainText: `Brend ostida alyuminiydan tayyorlangan" issiq "va" sovuq " Profil tizimlari ishlab chiqariladi. Biz aluvet derazalari va eshiklarini buyurtma asosida, individual o'lchamlarga muvofiq qilamiz. Biz tizimlarni bir yoki ikki kamerali ikki oynali oynalar, qulflash moslamalari, aksessuarlar bilan jihozlaymiz. Biz Andijon va Baliqchi tumanidagi ob'ektlarga xizmat ko'rsatamiz.`,
    context: [
      `Ishonchlilik. ALUMET tizimlari 40 yil yoki undan ko'proq xizmat qilish uchun mo'ljallangan. Sirt mexanik shikastlanish va deformatsiyaga juda chidamli.`,
      `Xavfsizlik.Yuqori o'g'rilikka chidamlilik, yuqori sifatli aksessuarlar, intensiv foydalanish uchun mo'ljallangan. Qopqoqlarning maksimal og'irligi 130 kg.`,
      `Minimal operatsion xarajatlar-aluvet alyuminiy profillaridan tayyorlangan dizaynlar deyarli buzilmaydi.`,
      `Ajoyib dizayn-chang texnologiyasi, anod oksidlanishi bilan bo'yash mumkin.`,
    ],
  },
  {
    id: 3,
    title: `Rehau Delight`,
    sectionTitle: `Afzalliklari:`,
    mainText: `Brend ostida alyuminiydan tayyorlangan" issiq "va" sovuq " Profil tizimlari ishlab chiqariladi. Biz aluvet derazalari va eshiklarini buyurtma asosida, individual o'lchamlarga muvofiq qilamiz. Biz tizimlarni bir yoki ikki kamerali ikki oynali oynalar, qulflash moslamalari, aksessuarlar bilan jihozlaymiz. Biz Andijon va Baliqchi tumanidagi ob'ektlarga xizmat ko'rsatamiz.`,
    context: [
      `Ishonchlilik. ALUMET tizimlari 40 yil yoki undan ko'proq xizmat qilish uchun mo'ljallangan. Sirt mexanik shikastlanish va deformatsiyaga juda chidamli.`,
      `Xavfsizlik.Yuqori o'g'rilikka chidamlilik, yuqori sifatli aksessuarlar, intensiv foydalanish uchun mo'ljallangan. Qopqoqlarning maksimal og'irligi 130 kg.`,
      `Minimal operatsion xarajatlar-aluvet alyuminiy profillaridan tayyorlangan dizaynlar deyarli buzilmaydi.`,
      `Ajoyib dizayn-chang texnologiyasi, anod oksidlanishi bilan bo'yash mumkin.`,
    ],
  },
];

export const stocks = [
  {
    id: 1,
    img: stock1,
    title: `Xarid bilan bepul sovg'a`,
    date: `26 noyabrdan 9 dekabrgacha`,
    context: `Mahsulotni sotib olayotganda yoki ma'lum miqdordagi buyurtma miqdoriga yetganda bepul sovg'a oling`,
  },
  {
    id: 2,
    img: stock2,
    title: `Mavsumiy mahsulotlarga chegirma`,
    date: `26 noyabrdan 9 dekabrgacha`,
    context: `Joriy mavsum bilan bog'liq mahsulotlarga chegirmalar, yozda yozgi mahsulotlarga chegirmalar taklif etamiz`,
  },
  {
    id: 3,
    img: stock3,
    title: `Ikkinchisini chegirma bilan oling`,
    date: `26 noyabrdan 9 dekabrgacha`,
    context: `Bitta aniq mahsulotni sotib olayotganda, ikkinchi mahsulotni chegirma bilan sotib olish imkoniyati`,
  },
];

export const priceList = [
  {
    id: 1,
    img: standart,
    title: `Standart`,
    context: `Sayohat uchun ajoyib variant. Oddiy va funktsional xona.`,
    charakteristic: [
      `Bir kishilik xonalar`,
      `Maydoni - 24 kv.m`,
    ],
    price: `2 300`,
  },
  {
    id: 2,
    img: komfort,
    title: `Komfort`,
    context: `Qulay va shinam xonalar dam olish va ish safari uchun ideal.`,
    charakteristic: [
      `Bir kishilik xonalar`,
      `Maydoni - 38 kv.m`,
    ],
    price: `2 700`,
  },
  {
    id: 3,
    img: biznes,
    title: `Biznes`,
    context: `Mehmonxona har mehmonga yuqori sifatli xizmat ko'rsatadi.`,
    charakteristic: [
      `Ikki kishilik xonalar`,
      `Maydoni - 46 kv.m`,
    ],
    price: `2 900`,
  },
  {
    id: 4,
    img: delyuks,
    title: `Delyuks`,
    context: `Ikki mehmon uchun yoqimli turar joy uchun javob beradi.`,
    charakteristic: [
      `Ikki kishilik xonalar`,
      `Maydoni - 46 kv.m`,
    ],
    price: `3 400`,
  },
];

export const windows = [
  {
    id: 1,
    title: `Bir panjarali oyna`,
    mainText: `Xonaga yorug'lik etarli bo'lmasa, siz derazadan ko'rinishni oshirishni yoki "havo" ni qo'shishni xohlaysiz, polga panoramik oynalarni buyurtma qiling. Balkondagi frantsuz derazalari manzaradan zavqlanib, atrofdagi landshaftlarga qoyil qolishga imkon beradi. Ular bilan sizning uyingiz har qanday mavsumda ko'cha tovushlari, chang yoki shamol bezovta qilmasdan chiroyli, issiq va sokin bo'ladi.`,
    context: `"Oyna texnologiyalari" da siz etkazib berish va o'rnatish bilan ishlab chiqaruvchining narxlarida frantsuz oynalarini buyurtma qilishingiz mumkin. Bizda eng maqbul narxlar bor - biz plastik profillar, ikki oynali oynalar va armatura ishlab chiqaruvchilari bilan vositachilarsiz hamkorlik qilamiz va ulardan butlovchi qismlarni yirik ulgurji xarid qilamiz.`,
    sectionTitle: `Quyidagilarga uchun tog'ri keladi:`,
    charakteristic: [
      `kvartiralar;`,
      `balkonlar;`,
      `mehmonxonalar, restoranlar;`,
      `kottejlar;`,
      `ofislar, biznes markazlar;`,
    ]
  },
  {
    id: 2,
    title: `Ikki panjarali oyna`,
    mainText: `Xonaga yorug'lik etarli bo'lmasa, siz derazadan ko'rinishni oshirishni yoki "havo" ni qo'shishni xohlaysiz, polga panoramik oynalarni buyurtma qiling. Balkondagi frantsuz derazalari manzaradan zavqlanib, atrofdagi landshaftlarga qoyil qolishga imkon beradi. Ular bilan sizning uyingiz har qanday mavsumda ko'cha tovushlari, chang yoki shamol bezovta qilmasdan chiroyli, issiq va sokin bo'ladi.`,
    context: `"Oyna texnologiyalari" da siz etkazib berish va o'rnatish bilan ishlab chiqaruvchining narxlarida frantsuz oynalarini buyurtma qilishingiz mumkin. Bizda eng maqbul narxlar bor - biz plastik profillar, ikki oynali oynalar va armatura ishlab chiqaruvchilari bilan vositachilarsiz hamkorlik qilamiz va ulardan butlovchi qismlarni yirik ulgurji xarid qilamiz.`,
    sectionTitle: `Quyidagilarga uchun tog'ri keladi:`,
    charakteristic: [
      `kvartiralar;`,
      `balkonlar;`,
      `mehmonxonalar, restoranlar;`,
      `kottejlar;`,
      `ofislar, biznes markazlar;`,
    ],
  },
  {
    id: 3,
    title: `Uch panjarali oyna`,
    mainText: `Xonaga yorug'lik etarli bo'lmasa, siz derazadan ko'rinishni oshirishni yoki "havo" ni qo'shishni xohlaysiz, polga panoramik oynalarni buyurtma qiling. Balkondagi frantsuz derazalari manzaradan zavqlanib, atrofdagi landshaftlarga qoyil qolishga imkon beradi. Ular bilan sizning uyingiz har qanday mavsumda ko'cha tovushlari, chang yoki shamol bezovta qilmasdan chiroyli, issiq va sokin bo'ladi.`,
    context: `"Oyna texnologiyalari" da siz etkazib berish va o'rnatish bilan ishlab chiqaruvchining narxlarida frantsuz oynalarini buyurtma qilishingiz mumkin. Bizda eng maqbul narxlar bor - biz plastik profillar, ikki oynali oynalar va armatura ishlab chiqaruvchilari bilan vositachilarsiz hamkorlik qilamiz va ulardan butlovchi qismlarni yirik ulgurji xarid qilamiz.`,
    sectionTitle: `Quyidagilarga uchun tog'ri keladi:`,
    charakteristic: [
      `kvartiralar;`,
      `balkonlar;`,
      `mehmonxonalar, restoranlar;`,
      `kottejlar;`,
      `ofislar, biznes markazlar;`,
    ]
  },
  {
    id: 4,
    title: `Fortichkali oynalar`,
    mainText: `Oynali plastik derazalar shamollatish uchun qulaydir. Derazadan narsalarni olib tashlash yoki gul idishlarini ko'chirishning hojati yo'q. Ko'pchilik uchun bu dizayn ko'proq tanish va xavfsizroq, ayniqsa ochilish yaqinida kichik bolalar bo'lsa. Shamollatish eshiklari oshxonada amaliy bo'lib, ular pishirish paytida xonani ventilyatsiya qilishga va ichidagi haroratni pasaytirishga yordam beradi.`,
    context: ``,
    sectionTitle: `Oynani ochish rejimlari:`,
    charakteristic: [
      `belanchak;`,
      `katlama;`,
      `mikro ventilyatsiya;`,
    ]
  },
  {
    id: 5,
    title: `Figurali oynalar`,
    mainText: `Zamonaviy binolar, kottejlar va biznes markazlarida figurali deraza teshiklari tobora ko'proq amalga oshirilmoqda. Nostandart shakldagi plastik derazalar jabhani bezatadi va interyerda chiroyli ko'rinadi. Bizdan istalgan o'lchamdagi va konfiguratsiyadagi oynalarni buyurtma qilishingiz mumkin. Biz REHAU profillaridan shaklli derazalar ishlab chiqaramiz, ularni laminatsiya, ramkalar, dekorativ sxemalar va ixtiyoriy ikki oynali oynalar bilan to'ldiramiz.`,
    context: ``,
    sectionTitle: `Oynalarning shaklli:`,
    charakteristic: [
      `yumaloq, tuxumsimon;`,
      `kamarli, yarim kamarli;`,
      `uchburchak, trapedza shakilli;`,
      `murakkab konfiguratsiyaga ega katta o'lchamli.`,
    ]
  },
  {
    id: 6,
    title: `Premium klassdagi oynalar`,
    mainText: `Elita oynalash - maksimal qulaylik kafolati va uy xo'jaligining holatini aks ettiradi. Premium plastik derazalar standart hamkasblariga qaraganda ancha ta'sirli ko'rinadi, boshqacha tarzda ishlab chiqilgan va qimmatroq.`,
    context: ``,
    sectionTitle: `Afzalliklari:`,
    charakteristic: [
      `yuqori issiqlik izolyatsiyasi;`,
      `ko'cha shovqinini blokirovka qilish;`,
      `qoralamalardan himoya qilish;`,
      `o'g'rilikka chidamli armatura;`,
      `ichki va fasad dizayni uchun dizayn;`,
    ]
  },
];

export const balconies = [
  {
    id: 1,
    title: `Sovuq oynalsh`,
    mainText: `Alyuminiy oynaning og'irligi kam va arzon. U har qanday bazaga, ham yangi binolarda, ham eski Xrushchev davridagi binolarda o'rnatilishi mumkin. Sürgülü eshiklar osongina ochiladi va joyni tejaydi. Ular balkonni namlik, chang, axloqsizlik va qoralamalardan himoya qiladi.`,
    context: `Biz PROVEDAL toymasin tizimlarini har qanday o'lchamdagi va konfiguratsiyadagi balkonlar va lojikalarga o'rnatamiz. Biz asl profillardan sovuq oynalar ishlab chiqaramiz va ularni yuqori sifatli armatura bilan to'ldiramiz.`,
    sectionTitle: `Afzalliklar:`,
    charakteristic: [
      `Yog'ingarchilik, chang, shamoldan himoya qilishi`,
      `Qulay ochilishi`,
      `Joyni tejashi`,
    ],
  },
  {
    id: 2,
    title: `Issiq oynalash`,
    mainText: `Issiq oynalar bilan balkon yilning istalgan vaqtida qulay haroratni saqlab turadi. Ko'p kamerali plastik profillar ko'chadan sovuq va shovqinni izolyatsiya qiladi. Maksimal issiqlik izolatsiyasi uchun ular ikki kamerali yoki energiyani tejovchi ikki oynali oynalar bilan to'ldiriladi. Biz original nemis REHAU profillaridan derazalar ishlab chiqaramiz. Biz har qanday shakl va o'lchamdagi balkonlarni sirlashtiramiz va qiyaliklarni tugatamiz. Biz aylanma va toymasin eshiklarni o'rnatamiz.`,
    context: ``,
    sectionTitle: `Afzalliklar:`,
    charakteristic: [
      `Maksimal issiqlik va ovoz otkazmasligi`,
      `Yog'ingarchilik, chang, qoralamalardan himoya qilish`,
      `Standart yoki jingalak konfiguratsiyalar`,
      `Bir yoki ikkala tomondan laminatsiya`,
    ],
  },
  {
    id: 3,
    title: `Panoramik oynalash`,
    mainText: `Balkoningizni panoramali derazalar bilan sirlash orqali uyingiz yoki kvartirangizning maydonini iloji boricha engil va kengroq qiling. Ular bilan xona zamonaviy va yaxshi yoritilgan ko'rinadi, ko'rinishga hech qanday to'siq yo'q. Erdan shiftgacha bo'lgan derazalar shahar tashqarisidagi kottejlar va metropoldagi lojikalar uchun qiziqarli echimdir. Ular har qanday jabhani bezashlari mumkin.`,
    context: `Biz alyuminiy yoki plastmassa profilli balkonlarni sirlashtiramiz. Biz tizimlarni yuqori sifatli armatura bilan to'ldiramiz, pardozlash ishlarini bajaramiz va har qanday shakl va o'lchamdagi balkonlar bilan ishlaymiz.`,
    sectionTitle: `Biz foydalanadigon profillarimiz:`,
    charakteristic: [
      `REHAU Thermo`,
      `REHAU Grazio`,
      `REHAU Delight`,
    ],
  },
  {
    id: 4,
    title: `Balkon bloki`,
    mainText: `Balkon oynasi va eshigining germetik tuzilishi, uni yashash xonasidan ajratib turadigan, balkon bloki deb ataladi. U shisha plomba bilan metall-plastmassa ramkaga asoslangan. Shisha eshikli yoki shaffof bo'lmagan plombali variantlar mavjud, dizaynda quyoshdan boshqariladigan, zarbaga chidamli yoki o'zini o'zi tozalaydigan oynaga ega ixtiyoriy ikki oynali oyna o'rnatilishi mumkin. Ushbu yechim odatda arzonroq. Bizning kompaniyamizdan siz REHAU profilidan tayyorlangan kalitlarga buyurtma berishingiz mumkin.`,
    context: ``,
    sectionTitle: `Kombinatsiyalar turlari:`,
    charakteristic: [
      `eshik va deraza panjaralari;`,
      `eshik+2 deraza;`,
      `shisha qismli eshik;`,
      `ikkita eshik + bitta deraza panjarasi.`,
    ],
  },
  {
    id: 5,
    title: `Balkonni ta'mirlash`,
    mainText: `Sizning eski balkoningiz yangilanishi kerakmi yoki siz sirlanmagan lodjiyali yangi kvartiraga ko'chib o'tdingizmi? Balkonni ta'mirlashni kompaniyamizdan buyurtma qiling. Biz lodjiyalarni ta'mirlaymiz, ularni sirlash va izolyatsiya qilamiz, ichki va tashqi bezaklarni amalga oshiramiz. Oynalar issiq REHAU plastik profillaridan yoki PROVEDAL va ALUTECH alyuminiy tizimlaridan tayyorlanadi.`,
    context: ``,
    sectionTitle: ``,
    charakteristic: [],
  },
  {
    id: 6,
    title: `Balkonlarni izolyatsiyalash`,
    mainText: `Xonani yashash uchun qulay qilish uchun zamin, ship, devorlarni izolyatsiya qilish, isitish moslamalarini o'rnatish kerak. Ko'pincha ular bizdan isitish batareyasini o'rnatishni buyuradilar. Shuningdek, biz to'rli paspaslar yordamida pardozlash qoplamasi ostidagi issiq pollarni yotqizamiz. Biz yaqin atrofdagi narsalarni isitadigan infraqizil elementlarni o'rnatamiz.`,
    context: `Balkon devorlari siz tanlagan material bilan qoplangan: polistirol ko'pik, penofol, "Penopleks". Xarajat izolyatsiya turi, qatlam qalinligi va qoplamaning holatiga ta'sir qiladi.`,
    sectionTitle: ``,
    charakteristic: [],
  },
];

export const servicesPage = [
  {
    id: 1,
    title: `Oyna o'rnatish`,
    maintext: `O'rnatish sifati derazalarning mahkamligini, xizmat muddatini, shamol shamollariga bardosh berish qobiliyatini va muzlashdan chidamliligini aniqlaydi. Siz bizning kompaniyamizdan GOST bo'yicha Moskvada REHAU PVX oynalarini o'rnatishga buyurtma berishingiz mumkin.`,
    context: `Biz har qanday o'lchamdagi va konfiguratsiyadagi teshiklarni sirlaymiz. O'rnatish guruhi mutaxassislari sertifikatlangan va qurilish standartlari va o'rnatish texnologiyalariga, shu jumladan GOST 30971-2012, GOST R 52749-2007 da ko'rsatilganlarga qat'iy rioya qilishadi.`,
    sectiontitle: `Xizmatga quyidagilar kiradi:`,
    charakteristic: [
      `eski oynalarni demontaj qilish;`,
      `oynalarni ishlab chiqarish va o'rnatish, sozlash;`,
      `qiyaliklarni tugatish, deraza tokchalarini o'rnatish;`,
      `qurilish chiqindilarini olib tashlash.`,
    ],
  },
  {
    id: 2,
    title: `Kvartiralarni oynalash`,
    maintext: `Shisha qoplamasi REHAU profilidan plastik derazalarni ishlab chiqarish va o'rnatishni va yon bag'irlarni tugatishni o'z ichiga oladi. Ishlarning to'liq spektri ariza topshirilgandan keyin bir necha kun ichida yakunlanadi. Har qanday turdagi uylarga deraza va balkon bloklarini o'rnatamiz.`,
    context: ``,
    sectiontitle: `Plastik derazalarning afzalliklari:`,
    charakteristic: [
      `parvarish qilish qulayligi;`,
      `ishonchli armatura;`,
      `standart va nostandart konfiguratsiyalar;`,
      `bir yoki ikkala tomondan laminatsiya;`,
      `uzoq xizmat muddati.`,
    ],
  },
  {
    id: 3,
    title: `Kottejlarni oynalash`,
    maintext: `Bizning kompaniyamiz har xil turdagi plastmassa va alyuminiy profillardan foydalangan holda kottejlarni kalit bilan sirlashni amalga oshiradi. Biz har qanday shakl va o'lchamdagi konstruktsiyalarni ishlab chiqaramiz va o'rnatamiz. Barcha ishlar ariza topshirilgandan keyin bir necha kun ichida yakunlanadi.`,
    context: `Biz REHAU konsernining rasmiy hamkorimiz, biz original profillar va butlovchi qismlarni sotib olamiz, deraza va eshiklarni o'z ishlab chiqarishimizda ishlab chiqaramiz. Biz tayyor tuzilmalar va tugallangan ishlar uchun kafolat beramiz.`,
    sectiontitle: `Dizayn variantlari:`,
    charakteristic: [
      `panoramik tuzilmalar;`,
      `yog'ochni laminatsiyalash;`,
      `turli shakl va o'lchamlar.`,
    ],
  },
  {
    id: 4,
    title: `Oyna ta'mirlash`,
    maintext: `Biz keng miqyosda profil tizimlarini ishlab chiqaramiz va xodimlarimizda yuqori malakali mutaxassislar ishlaydi. Ular PVX, alyuminiy, yog'ochdan tayyorlangan mahsulotlarni ta'mirlashadi va deraza teshiklarini tugatishadi. Mutaxassislar REHAU, Veka, KBE, Kaleva, Provedal, Salamander, Wintech profillarining funksionalligini tiklaydi. Derazalarni ta'mirlash bo'yicha mutaxassisni Moskva va mintaqadagi saytlarga chaqiring, qanotlarni sozlash, deraza blokining qismlarini o'zgartirish, oynani havo o'tkazmasligi va kondensatsiyani yo'q qilish.`,
    context: ``,
    sectiontitle: ``,
    charakteristic: [],
  },
  {
    id: 5,
    title: `Yashirin ilgaklar`,
    maintext: `Odatda deraza ilgaklari katta hajmli ko'rinadi va ba'zan xonaning dizaynini "yuklaydi". Iste'molchi talabiga javoban ishlab chiqaruvchilar derazalar uchun yashirin menteşalarni ishlab chiqarishni boshladilar. Ular interyerni yanada lakonik, zamonaviy qiladi va har qanday dizayn bilan yaxshi uyg'unlashadi. Yashirin armatura ochilishda ko'rinmaydi, garchi ular barcha kerakli funktsiyalarni bajaradilar. U bilan qanot 100 gradusgacha burchakka ochiladi va og'irligi cheklangan. Har qanday profildan plastik derazalar uchun yashirin menteşalardan foydalanishingiz mumkin.`,
    context: ``,
    sectiontitle: `Afzalliklari:`,
    charakteristic: [
      `zamonaviy dizayn;`,
      `o'g'irlikdan himoya qilish;`,
      `germetik, issiqlik izolatsiyasi;`,
      `har qanday plastik derazalar uchun javob beradi.`,
    ],
  },
];

export const reviews = [
  {
    id: 1,
    reviewerImg: review1,
    reviewer: `Kirill Yakovlev`,
    reviewContext: `Mijozlarga do'stona munosabat va sodiqlikni ta'kidlamoqchiman va bu har doim o'zaro aloqa jarayonini yoqimli va samarali qilishga yordam beradi. Bizning ehtiyojlarimiz va umidlarimiz bilan chin dildan qiziqayotganingiz juda yaxshi. Hamkorlik men uchun yoqimli tajriba bo'ldi.`,
  },
  {
    id: 2,
    reviewerImg: review2,
    reviewer: `Aleksandra Somova`,
    reviewContext: `Men bu erga birinchi marta kelishim emas va ishonch bilan ayta olamanki, siz juda yaxshi ish qilasiz! Men yuqori professionallik, mas'uliyat va mijozga nisbatan sezgir munosabatni qadrlayman. Ajoyib ish uchun rahmat!`,
  },
  {
    id: 3,
    reviewerImg: review3,
    reviewer: `Aleksandr Yagudin`,
    reviewContext: `Menga iliq va professional yondashuv uchun juda minnatdorman. Mas'uliyatingiz, ochiqligingiz va yordam berishga tayyorligingiz uchun tashakkur. Men sizni har doim do'stlarim va tanishlarimga tavsiya qilaman`,
  },
];

export const newsData = [
  news(1, `Mijozlarga professional xizmat ko'rsatish`, ``, news1, `Yangilik yaratishda sarlavha va mazmunga qo'shimcha ravishda bir qator parametrlarni o'rnatishingiz mumkin. Bu yerda siz yangiliklar e'lonini to'ldirish misolini ko'rishingiz mumkin. "Batafsil o'qing" havolasi orqali siz yangiliklarning to'liq matni va uni to'ldirish namunasini o'qishingiz mumkin.`, `Yangiliklar uchun misol:`, `Ushbu bo'limda kompaniyangiz faoliyatiga u yoki bu tarzda bog'liq bo'lgan yangiliklar, ma'lumotlar, ma'lumotnomalar va boshqa maqolalarni joylashtirishingizni tavsiya qilamiz.`, `Yangiliklar tasmada qanday ko'rsatilishini sozlashingiz mumkin: e'lon (to'liq matnga havola bilan) yoki butun yangiliklar. Bundan tashqari, saralash sozlamalari, sahifadagi yangiliklar soni va yangiliklarga biriktirilgan tasvirlar formati mavjud.`, `Kompaniyamiz veb-saytiga xush kelibsiz. Endi, butun shahar bo'ylab filiallar tarmog'iga qo'shimcha ravishda, bizda kichik Internet vakolatxonasi ham mavjud bo'lib, u erda siz har doim taqdim etilayotgan mahsulotlar ro'yxati, shuningdek, joriy aktsiyalar va chegirmalar bilan tanishishingiz, tanlash va buyurtma berishingiz mumkin. har qanday ma'lumotnoma va aloqa ma'lumotlari va har doim kompaniyamizning so'nggi yangiliklaridan xabardor bo'ling.`, `Ushbu bo'limda siz har doim taqdim etilgan mahsulotlar, so'nggi kelganlar, mahsulot yangilanishlari va boshqa ko'p narsalar haqida eng so'nggi va foydali ma'lumotlarni topishingiz mumkin.`, ``, `Ishlab chiqarish`,),
  news(2, `Texnik yordam kuniga 24 soat`, ``, news2, `Yangilik yaratishda sarlavha va mazmunga qo'shimcha ravishda bir qator parametrlarni o'rnatishingiz mumkin. Bu yerda siz yangiliklar e'lonini to'ldirish misolini ko'rishingiz mumkin. "Batafsil o'qing" havolasi orqali siz yangiliklarning to'liq matni va uni to'ldirish namunasini o'qishingiz mumkin.`, `Yangiliklar uchun misol:`, `Ushbu bo'limda kompaniyangiz faoliyatiga u yoki bu tarzda bog'liq bo'lgan yangiliklar, ma'lumotlar, ma'lumotnomalar va boshqa maqolalarni joylashtirishingizni tavsiya qilamiz.`, `Yangiliklar tasmada qanday ko'rsatilishini sozlashingiz mumkin: e'lon (to'liq matnga havola bilan) yoki butun yangiliklar. Bundan tashqari, saralash sozlamalari, sahifadagi yangiliklar soni va yangiliklarga biriktirilgan tasvirlar formati mavjud.`, `Kompaniyamiz veb-saytiga xush kelibsiz. Endi, butun shahar bo'ylab filiallar tarmog'iga qo'shimcha ravishda, bizda kichik Internet vakolatxonasi ham mavjud bo'lib, u erda siz har doim taqdim etilayotgan mahsulotlar ro'yxati, shuningdek, joriy aktsiyalar va chegirmalar bilan tanishishingiz, tanlash va buyurtma berishingiz mumkin. har qanday ma'lumotnoma va aloqa ma'lumotlari va har doim kompaniyamizning so'nggi yangiliklaridan xabardor bo'ling.`, ``, ``, `Kompaniya yangiliklari`,),
  news(3, `Shartnomalar tuzishda yordam berish`, ``, news3, `Yangilik yaratishda sarlavha va mazmunga qo'shimcha ravishda bir qator parametrlarni o'rnatishingiz mumkin. Bu yerda siz yangiliklar e'lonini to'ldirish misolini ko'rishingiz mumkin. "Batafsil o'qing" havolasi orqali siz yangiliklarning to'liq matni va uni to'ldirish namunasini o'qishingiz mumkin.`, `Yangiliklar uchun misol:`, `Ushbu bo'limda kompaniyangiz faoliyatiga u yoki bu tarzda bog'liq bo'lgan yangiliklar, ma'lumotlar, ma'lumotnomalar va boshqa maqolalarni joylashtirishingizni tavsiya qilamiz.`, `Yangiliklar tasmada qanday ko'rsatilishini sozlashingiz mumkin: e'lon (to'liq matnga havola bilan) yoki butun yangiliklar. Bundan tashqari, saralash sozlamalari, sahifadagi yangiliklar soni va yangiliklarga biriktirilgan tasvirlar formati mavjud.`, `Kompaniyamiz veb-saytiga xush kelibsiz. Endi, butun shahar bo'ylab filiallar tarmog'iga qo'shimcha ravishda, bizda kichik Internet vakolatxonasi ham mavjud bo'lib, u erda siz har doim taqdim etilayotgan mahsulotlar ro'yxati, shuningdek, joriy aktsiyalar va chegirmalar bilan tanishishingiz, tanlash va buyurtma berishingiz mumkin. har qanday ma'lumotnoma va aloqa ma'lumotlari va har doim kompaniyamizning so'nggi yangiliklaridan xabardor bo'ling.`, ``, ``, `Kompaniya yangiliklari`,),
  news(4, `Sotib olish bo'yicha maslahatlar`, ``, news4, `Yangilik yaratishda sarlavha va mazmunga qo'shimcha ravishda bir qator parametrlarni o'rnatishingiz mumkin. Bu yerda siz yangiliklar e'lonini to'ldirish misolini ko'rishingiz mumkin. "Batafsil o'qing" havolasi orqali siz yangiliklarning to'liq matni va uni to'ldirish namunasini o'qishingiz mumkin.`, `Yangiliklar uchun misol:`, `Ushbu bo'limda kompaniyangiz faoliyatiga u yoki bu tarzda bog'liq bo'lgan yangiliklar, ma'lumotlar, ma'lumotnomalar va boshqa maqolalarni joylashtirishingizni tavsiya qilamiz.`, `Yangiliklar tasmada qanday ko'rsatilishini sozlashingiz mumkin: e'lon (to'liq matnga havola bilan) yoki butun yangiliklar. Bundan tashqari, saralash sozlamalari, sahifadagi yangiliklar soni va yangiliklarga biriktirilgan tasvirlar formati mavjud.`, `Kompaniyamiz veb-saytiga xush kelibsiz. Endi, butun shahar bo'ylab filiallar tarmog'iga qo'shimcha ravishda, bizda kichik Internet vakolatxonasi ham mavjud bo'lib, u erda siz har doim taqdim etilayotgan mahsulotlar ro'yxati, shuningdek, joriy aktsiyalar va chegirmalar bilan tanishishingiz, tanlash va buyurtma berishingiz mumkin. har qanday ma'lumotnoma va aloqa ma'lumotlari va har doim kompaniyamizning so'nggi yangiliklaridan xabardor bo'ling.`, ``, ``, `Mehmonlar uchun`,),
  news(5, `JAMI uslubi va brending`, ``, news5, `Yangilik yaratishda sarlavha va mazmunga qo'shimcha ravishda bir qator parametrlarni o'rnatishingiz mumkin. Bu yerda siz yangiliklar e'lonini to'ldirish misolini ko'rishingiz mumkin. "Batafsil o'qing" havolasi orqali siz yangiliklarning to'liq matni va uni to'ldirish namunasini o'qishingiz mumkin.`, ``, `Kompaniyaning asosiy faoliyati - ishlab chiqarish va sotish ... (kompaniyangiz faoliyat sohasini ko'rsating). "..." (Kompaniya nomini kiriting) kompaniyasining mahsulotlari... sohasida keng qo'llaniladi (Faoliyat sohasini ko'rsating). Biz eng talabchan iste'molchining ehtiyojlarini qondirishga qodirmiz, chunki taklif etilayotgan barcha mahsulotlar Evropa sifati va keng turdagi mahsulotlar hech kimni befarq qoldirmaydi.`, `Ishonchlilik va sifatga e'tibor qaratgan holda, bizning narxlarimiz yoqimli darajada pastligicha qolmoqda. Barcha mahsulotlar sertifikatlangan va xavfsizlik talablariga javob beradi / sifat standartlariga / GOSTlarga javob beradi.`, `Kompaniyaning asosiy faoliyati - bu... sohasida xizmatlar ko'rsatish (kompaniyangiz faoliyat sohasini ko'rsating). Barcha ishlar ko'p yillik tajribaga ega bo'lgan professionallar jamoasi tomonidan amalga oshiriladi ... (kompaniyangiz tomonidan taqdim etiladigan maxsus xizmatlarni ko'rsating).`, ``, ``, `Mehmonlar uchun`,),
  news(6, `Tashabbus auditi`, ``, news6, `Ushbu blokda mahsulot/xizmatlaringiz tavsifi, taklif etilayotgan mahsulotlarning xarakteristikalari haqida gapiradigan va biznesingizning vazifalariga mos keladigan har qanday qulay katalog tuzilmasini yaratishni o'z ichiga olgan to'liq katalogni joylashtirishni tavsiya qilamiz.`, ``, `Kompaniyaning asosiy faoliyati - ishlab chiqarish va sotish ... (kompaniyangiz faoliyat sohasini ko'rsating). "..." (Kompaniya nomini kiriting) kompaniyasining mahsulotlari... sohasida keng qo'llaniladi (Faoliyat sohasini ko'rsating). Biz eng talabchan iste'molchining ehtiyojlarini qondirishga qodirmiz, chunki taklif etilayotgan barcha mahsulotlar Evropa sifati va keng turdagi mahsulotlar hech kimni befarq qoldirmaydi.`, `Ishonchlilik va sifatga e'tibor qaratgan holda, bizning narxlarimiz yoqimli darajada pastligicha qolmoqda. Barcha mahsulotlar sertifikatlangan va xavfsizlik talablariga javob beradi / sifat standartlariga / GOSTlarga javob beradi.`, `Kompaniyaning asosiy faoliyati - bu... sohasida xizmatlar ko'rsatish (kompaniyangiz faoliyat sohasini ko'rsating). Barcha ishlar ko'p yillik tajribaga ega bo'lgan professionallar jamoasi tomonidan amalga oshiriladi ... (kompaniyangiz tomonidan taqdim etiladigan maxsus xizmatlarni ko'rsating).`, ``, `Eslatma. Shuni esda tutingki, saytdagi matn ma'lumotlari individual bo'lishi kerak, boshqa Internet-resurslardan ko'chirilmasligi kerak, bu Yandex tavsiyalarida ta'kidlangan: "Biz boshqa manbalardan ma'lumotlarni nusxa ko'chiruvchi va original kontent yaratmaydigan yoki yuqori darajadagi saytlarni indekslamaslikka yoki reyting qilmaslikka harakat qilamiz. xizmat."`, `Ishlab chiqarish`,),
  news(7, `Reklamani ko'rsatish`, ``, news7, `Ushbu blokda mahsulot/xizmatlaringiz tavsifi, taklif etilayotgan mahsulotlarning xarakteristikalari haqida gapiradigan va biznesingizning vazifalariga mos keladigan har qanday qulay katalog tuzilmasini yaratishni o'z ichiga olgan to'liq katalogni joylashtirishni tavsiya qilamiz.`, ``, `Kompaniyaning asosiy faoliyati - ishlab chiqarish va sotish ... (kompaniyangiz faoliyat sohasini ko'rsating). "..." (Kompaniya nomini kiriting) kompaniyasining mahsulotlari... sohasida keng qo'llaniladi (Faoliyat sohasini ko'rsating). Biz eng talabchan iste'molchining ehtiyojlarini qondirishga qodirmiz, chunki taklif etilayotgan barcha mahsulotlar Evropa sifati va keng turdagi mahsulotlar hech kimni befarq qoldirmaydi.`, `Ishonchlilik va sifatga e'tibor qaratgan holda, bizning narxlarimiz yoqimli darajada pastligicha qolmoqda. Barcha mahsulotlar sertifikatlangan va xavfsizlik talablariga javob beradi / sifat standartlariga / GOSTlarga javob beradi.`, `Kompaniyaning asosiy faoliyati - bu... sohasida xizmatlar ko'rsatish (kompaniyangiz faoliyat sohasini ko'rsating). Barcha ishlar ko'p yillik tajribaga ega bo'lgan professionallar jamoasi tomonidan amalga oshiriladi ... (kompaniyangiz tomonidan taqdim etiladigan maxsus xizmatlarni ko'rsating).`, ``, `Eslatma. Shuni esda tutingki, saytdagi matn ma'lumotlari individual bo'lishi kerak, boshqa Internet-resurslardan ko'chirilmasligi kerak, bu Yandex tavsiyalarida ta'kidlangan: "Biz boshqa manbalardan ma'lumotlarni nusxa ko'chiruvchi va original kontent yaratmaydigan yoki yuqori darajadagi saytlarni indekslamaslikka yoki reyting qilmaslikka harakat qilamiz. xizmat."`, `Ishlab chiqarish`,),
  news(8, `Banner ishlab chiqarish`, ``, news8, `Ushbu blokda mahsulot/xizmatlaringiz tavsifi, taklif etilayotgan mahsulotlarning xarakteristikalari haqida gapiradigan va biznesingizning vazifalariga mos keladigan har qanday qulay katalog tuzilmasini yaratishni o'z ichiga olgan to'liq katalogni joylashtirishni tavsiya qilamiz.`, ``, `Kompaniyaning asosiy faoliyati - ishlab chiqarish va sotish ... (kompaniyangiz faoliyat sohasini ko'rsating). "..." (Kompaniya nomini kiriting) kompaniyasining mahsulotlari... sohasida keng qo'llaniladi (Faoliyat sohasini ko'rsating). Biz eng talabchan iste'molchining ehtiyojlarini qondirishga qodirmiz, chunki taklif etilayotgan barcha mahsulotlar Evropa sifati va keng turdagi mahsulotlar hech kimni befarq qoldirmaydi.`, `Ishonchlilik va sifatga e'tibor qaratgan holda, bizning narxlarimiz yoqimli darajada pastligicha qolmoqda. Barcha mahsulotlar sertifikatlangan va xavfsizlik talablariga javob beradi / sifat standartlariga / GOSTlarga javob beradi.`, `Kompaniyaning asosiy faoliyati - bu... sohasida xizmatlar ko'rsatish (kompaniyangiz faoliyat sohasini ko'rsating). Barcha ishlar ko'p yillik tajribaga ega bo'lgan professionallar jamoasi tomonidan amalga oshiriladi ... (kompaniyangiz tomonidan taqdim etiladigan maxsus xizmatlarni ko'rsating).`, ``, `Eslatma. Shuni esda tutingki, saytdagi matn ma'lumotlari individual bo'lishi kerak, boshqa Internet-resurslardan ko'chirilmasligi kerak, bu Yandex tavsiyalarida ta'kidlangan: "Biz boshqa manbalardan ma'lumotlarni nusxa ko'chiruvchi va original kontent yaratmaydigan yoki yuqori darajadagi saytlarni indekslamaslikka yoki reyting qilmaslikka harakat qilamiz. xizmat."`, `Kompaniya yangiliklari`,),
];

export const blogData = [
  blog(1, `Ma'lumotlar to'plash`, `07.08.2022`, `Qanday bo'lmasin, siz ushbu mavzu bo'yicha qanchalik mutaxassis bo'lishingizdan qat'i nazar, boshqa mualliflarning materiallari bilan tanishib chiqish tavsiya etiladi.`, blog1, `Qanday bo'lmasin, siz ushbu mavzu bo'yicha qanchalik mutaxassis bo'lishingizdan qat'i nazar, boshqa mualliflarning materiallari bilan tanishib chiqish tavsiya etiladi. Hech qachon bitta manbada to'xtamang. Bir nechta mualliflar va ko'plab manbalardan olingan ma'lumotlarni o'rganish tavsiya etiladi. Iloji bo'lsa, haqiqatga asoslangan bo'ling. Bunga bir kundan ortiq vaqt ketishi mumkin. Ammo keyinroq nashr qilish uchun o'zingizni sharmanda qilishdan ko'ra, yaxshilab tayyorgarlik ko'rganingiz ma'qul.`,),
  blog(2, `Blog uchun maqolani optimallashtirish`, `03.01.2022`, `Nima uchun bu element ikkinchi o'rinda turadi? Chunki ma'lumot to'plangandan so'ng, siz maqolani optimallashtirishga tayyorgarlik ko'rishingiz kerak.`, blog2, `Qanday bo'lmasin, siz ushbu mavzu bo'yicha qanchalik mutaxassis bo'lishingizdan qat'i nazar, boshqa mualliflarning materiallari bilan tanishib chiqish tavsiya etiladi. Hech qachon bitta manbada to'xtamang. Bir nechta mualliflar va ko'plab manbalardan olingan ma'lumotlarni o'rganish tavsiya etiladi. Iloji bo'lsa, haqiqatga asoslangan bo'ling. Bunga bir kundan ortiq vaqt ketishi mumkin. Ammo keyinroq nashr qilish uchun o'zingizni sharmanda qilishdan ko'ra, yaxshilab tayyorgarlik ko'rganingiz ma'qul.`,),
  blog(3, `Raqobatchilar tahlili`, `24.02.2022`, `Bu sizning raqobatchilaringiz tomonidan ma'lumotlar qanchalik to'liq taqdim etilganligini tushunish uchun kerak`, blog3, `Bu sizning raqobatchilaringiz tomonidan ma'lumotlar qanchalik to'liq taqdim etilganligini tushunish uchun kerak. Va bu mavzu bo'yicha yangi narsa qo'sha olasizmi? Shuningdek, ular qanday kalitlardan foydalanganligini, maqolaning hajmi va maqolaning tuzilishini tushunish yaxshi bo'lar edi. Ushbu savollarni o'rganib chiqib, siz ushbu mavzu bo'yicha yanada sifatli va to'liqroq maqola yozishingiz mumkin bo'ladi.`,),
  blog(4, `Matn tarkibining tajribasi yoki foydaliligi`, `23.02.2022`, `Juda muhim qoida. Ma'lumot foydali bo'lsagina saytingizga tashrif buyuruvchilarning katta oqimi bo'ladi.`, blog4, `Juda muhim qoida. Ma'lumot foydali bo'lsagina saytingizga tashrif buyuruvchilarning katta oqimi bo'ladi. Shuni yodda tutishimiz kerakki, Internetda odamlar faqat ma'lumot izlaydilar. Bu, masalan, poezdlar jadvallari yoki eng so'nggi dunyo yangiliklari yoki juda qiziqarli plagin haqida ma'lumot bo'lishi mumkin ... Bu muhim emas!`, `Har holda, bu ma'lumot! Va bu sizning tashrif buyuruvchingiz uchun foydali bo'lishi kerak, ya'ni maqola muallifi o'z tajribasini ko'rsatishi kerak. Faqat bu holatda odamlar sizning saytingizga kelishadi va eng muhimi, ular bir necha marta qaytib kelishadi. Aynan shu blogda ular eng foydali ma'lumotlarni olishlarini tushunish.`,),
  blog(5, `Kvartira uchun plastik derazalarni qanday tanlash mumkin`, `02.10.2022`, `Bozorda takliflar soni juda katta. Shuning uchun, uyingiz uchun derazalarni tanlashda siz plastik derazalar haqida asosiy bilimlar bilan qurollangan holda yondashishingiz kerak.`, blog5, `Bu sizning raqobatchilaringiz tomonidan ma'lumotlar qanchalik to'liq taqdim etilganligini tushunish uchun kerak. Va bu mavzu bo'yicha yangi narsa qo'sha olasizmi? Shuningdek, ular qanday kalitlardan foydalanganligini, maqolaning hajmi va maqolaning tuzilishini tushunish yaxshi bo'lar edi. Ushbu savollarni o'rganib chiqib, siz ushbu mavzu bo'yicha yanada sifatli va to'liqroq maqola yozishingiz mumkin bo'ladi.`,),
  blog(6, `Chivinlarga qarshi to'rlarning turlari`, `05.10.2021`, `Chivinlarga qarshi to'r - derazalar uchun majburiy mavsumiy aksessuar. Ular ramka turi, o'rnatish xususiyatlari, ochilish usuli va tuval turi bilan farqlanadi.`, blog6, `Bu sizning raqobatchilaringiz tomonidan ma'lumotlar qanchalik to'liq taqdim etilganligini tushunish uchun kerak. Va bu mavzu bo'yicha yangi narsa qo'sha olasizmi? Shuningdek, ular qanday kalitlardan foydalanganligini, maqolaning hajmi va maqolaning tuzilishini tushunish yaxshi bo'lar edi. Ushbu savollarni o'rganib chiqib, siz ushbu mavzu bo'yicha yanada sifatli va to'liqroq maqola yozishingiz mumkin bo'ladi.`,),
  blog(7, `Plastik oynani qanday olib tashlash mumkin?`, `02.01.2021`, `Ba'zan plastik oynani o'rnatish yoki ta'mirlash paytida qanotni olib tashlash kerak bo'ladi. Buning uchun ko'rsatmalarni diqqat bilan o'qing.`, blog7, `Bu sizning raqobatchilaringiz tomonidan ma'lumotlar qanchalik to'liq taqdim etilganligini tushunish uchun kerak. Va bu mavzu bo'yicha yangi narsa qo'sha olasizmi? Shuningdek, ular qanday kalitlardan foydalanganligini, maqolaning hajmi va maqolaning tuzilishini tushunish yaxshi bo'lar edi. Ushbu savollarni o'rganib chiqib, siz ushbu mavzu bo'yicha yanada sifatli va to'liqroq maqola yozishingiz mumkin bo'ladi.`,),
];