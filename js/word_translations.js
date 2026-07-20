// Per-word translations (en always present; others where matched to 우리말샘) and jamo decomposition

const WORD_TRANSLATIONS = {
  "가게": {
    "en": "store, shop",
    "ja": "みせ【店】。しょうてん【商店】",
    "fr": "boutique, magasin, échoppe, petit commerce",
    "es": "tienda",
    "zh": "店，店铺，商店",
    "vi": "cửa hàng, cửa hiệu,  cửa tiệm, quầy",
    "th": "ร้านค้า, ร้านขายของ, ร้านขายของชำ",
    "id": "toko",
    "ru": "магазин",
    "ar": "محلّ تجاري",
    "mn": "дэлгүүр",
    "jamo": "ㄱ^ㅏ|ㄱ^ㅓ+ㅣ"
  },
  "가방": {
    "en": "bag",
    "jamo": "ㄱ^ㅏ|ㅂ^ㅏ^ㅇ"
  },
  "가수": {
    "en": "singer",
    "jamo": "ㄱ^ㅏ|ㅅ^ㅜ"
  },
  "가요": {
    "en": "song",
    "ja": "かよう【歌謡】。うた【歌】",
    "fr": "chanson populaire",
    "es": "canción popular",
    "zh": "歌谣",
    "vi": "bài hát đại chúng, ca khúc được yêu thích",
    "th": "เพลง",
    "id": "lagu pop, musik pop, lagu populer",
    "ru": "песня",
    "ar": "غناء ، أغنية",
    "mn": "нийтийн дуу",
    "jamo": "ㄱ^ㅏ|ㅇ^ㅛ"
  },
  "가을": {
    "en": "autumn, fall",
    "jamo": "ㄱ^ㅏ|ㅇ^ㅡ^ㄹ"
  },
  "가족": {
    "en": "family",
    "jamo": "ㄱ^ㅏ|ㅈ^ㅗ^ㄱ"
  },
  "갈비": {
    "en": "Galvi, spareribs",
    "ja": "カルビ。ばらにく【ばら肉】",
    "fr": "côte, côtelette, travers",
    "es": "costilla",
    "zh": "排骨，肋排，排骨肉",
    "vi": "sườn, món sườn",
    "th": "กระดูกซี่โครง",
    "id": "tulang rusuk, tulang iga, iga, galbi",
    "ru": "грудинка, рёрбышки",
    "ar": "لحم ريش",
    "mn": "хавирга",
    "jamo": "ㄱ^ㅏ^ㄹ|ㅂ^ㅣ"
  },
  "감기": {
    "en": "cold",
    "jamo": "ㄱ^ㅏ^ㅁ|ㄱ^ㅣ"
  },
  "같다": {
    "en": "same",
    "ja": "おなじだ【同じだ】",
    "fr": "identique, pareil, égal, même",
    "es": "igual, mismo, idéntico",
    "zh": "相同，一样，一致",
    "vi": "giống",
    "th": "เหมือนกัน",
    "id": "sama, serupa",
    "ru": "одинаковый",
    "ar": "يتساوي، يعادل، يوازي",
    "mn": "адил",
    "jamo": "ㄱ^ㅏ^ㅌ|ㄷ^ㅏ"
  },
  "거기": {
    "en": "there",
    "jamo": "ㄱ^ㅓ|ㄱ^ㅣ"
  },
  "거실": {
    "en": "living room",
    "jamo": "ㄱ^ㅓ|ㅅ^ㅣ^ㄹ"
  },
  "건강": {
    "en": "health",
    "jamo": "ㄱ^ㅓ^ㄴ|ㄱ^ㅏ^ㅇ"
  },
  "건물": {
    "en": "building",
    "ja": "たてもの【建物】",
    "fr": "bâtiment, immeuble",
    "es": "edificio",
    "zh": "建筑，建筑物",
    "vi": "tòa nhà",
    "th": "ตึก, อาคาร",
    "id": "gedung, bangunan",
    "ru": "здание",
    "ar": "مبنى ، عمارة",
    "mn": "байшин, барилга",
    "jamo": "ㄱ^ㅓ^ㄴ|ㅁ^ㅜ^ㄹ"
  },
  "게임": {
    "en": "game",
    "jamo": "ㄱ^ㅓ+ㅣ|ㅇ^ㅣ^ㅁ"
  },
  "겨울": {
    "en": "winter",
    "jamo": "ㄱ^ㅕ|ㅇ^ㅜ^ㄹ"
  },
  "계절": {
    "en": "season",
    "ja": "きせつ【季節】",
    "fr": "saison",
    "es": "estación",
    "zh": "季节，季",
    "vi": "mùa",
    "th": "ฤดู, ฤดูกาล",
    "id": "musim",
    "ru": "сезон",
    "ar": "فصل",
    "mn": "улирал",
    "jamo": "ㄱ^ㅕ+ㅣ|ㅈ^ㅓ^ㄹ"
  },
  "계획": {
    "en": "plan",
    "jamo": "ㄱ^ㅕ+ㅣ|ㅎ^ㅗ+ㅣ^ㄱ"
  },
  "고양이": {
    "en": "cat",
    "jamo": "ㄱ^ㅗ|ㅇ^ㅑ^ㅇ|ㅇ^ㅣ"
  },
  "고향": {
    "en": "hometown",
    "jamo": "ㄱ^ㅗ|ㅎ^ㅑ^ㅇ"
  },
  "공부": {
    "en": "study",
    "jamo": "ㄱ^ㅗ^ㅇ|ㅂ^ㅜ"
  },
  "공책": {
    "en": "notebook, note",
    "ja": "ノート。ノートブック",
    "fr": "cahier",
    "es": "cuaderno",
    "zh": "笔记本",
    "vi": "quyển tập, quyển vở",
    "th": "สมุด, สมุดบันทึกข้อความ",
    "id": "buku tulis",
    "ru": "тетрадь",
    "ar": "دفتر",
    "mn": "дэвтэр",
    "jamo": "ㄱ^ㅗ^ㅇ|ㅊ^ㅏ+ㅣ^ㄱ"
  },
  "공항": {
    "en": "airport",
    "jamo": "ㄱ^ㅗ^ㅇ|ㅎ^ㅏ^ㅇ"
  },
  "과일": {
    "en": "fruit",
    "jamo": "ㄱ^ㅗ+ㅏ|ㅇ^ㅣ^ㄹ"
  },
  "교실": {
    "en": "classroom",
    "jamo": "ㄱ^ㅛ|ㅅ^ㅣ^ㄹ"
  },
  "교통": {
    "en": "traffic",
    "jamo": "ㄱ^ㅛ|ㅌ^ㅗ^ㅇ"
  },
  "구경": {
    "en": "sightseeing",
    "jamo": "ㄱ^ㅜ|ㄱ^ㅕ^ㅇ"
  },
  "구월": {
    "en": "September",
    "jamo": "ㄱ^ㅜ|ㅇ^ㅜ+ㅓ^ㄹ"
  },
  "국적": {
    "en": "nationality, country of citizenship",
    "jamo": "ㄱ^ㅜ^ㄱ|ㅈ^ㅓ^ㄱ"
  },
  "그것": {
    "en": "it",
    "jamo": "ㄱ^ㅡ|ㄱ^ㅓ^ㅅ"
  },
  "그릇": {
    "en": "bowl, container, tableware",
    "jamo": "ㄱ^ㅡ|ㄹ^ㅡ^ㅅ"
  },
  "그림": {
    "en": "drawing, picture",
    "jamo": "ㄱ^ㅡ|ㄹ^ㅣ^ㅁ"
  },
  "그쪽": {
    "en": "there, the person",
    "jamo": "ㄱ^ㅡ|ㅉ^ㅗ^ㄱ"
  },
  "극장": {
    "en": "theater, cinema",
    "jamo": "ㄱ^ㅡ^ㄱ|ㅈ^ㅏ^ㅇ"
  },
  "근처": {
    "en": "nearby, neighborhood",
    "jamo": "ㄱ^ㅡ^ㄴ|ㅊ^ㅓ"
  },
  "기분": {
    "en": "feeling",
    "jamo": "ㄱ^ㅣ|ㅂ^ㅜ^ㄴ"
  },
  "기차": {
    "en": "train",
    "jamo": "ㄱ^ㅣ|ㅊ^ㅏ"
  },
  "김밥": {
    "en": "Kimbab",
    "jamo": "ㄱ^ㅣ^ㅁ|ㅂ^ㅏ^ㅂ"
  },
  "김치": {
    "en": "Kimchi",
    "jamo": "ㄱ^ㅣ^ㅁ|ㅊ^ㅣ"
  },
  "끄다": {
    "en": "turn off, extinguish, stop",
    "jamo": "ㄲ^ㅡ|ㄷ^ㅏ"
  },
  "나라": {
    "en": "country",
    "jamo": "ㄴ^ㅏ|ㄹ^ㅏ"
  },
  "나무": {
    "en": "tree",
    "ja": "き【木・樹】。じゅもく【樹木】",
    "fr": "arbre, arbrisseau, arbuste",
    "es": "árbol",
    "zh": "树，树木",
    "vi": "cây",
    "th": "ต้นไม้",
    "id": "pohon",
    "ru": "дерево",
    "ar": "شجرة",
    "mn": "мод",
    "jamo": "ㄴ^ㅏ|ㅁ^ㅜ"
  },
  "나중": {
    "en": "later, after",
    "jamo": "ㄴ^ㅏ|ㅈ^ㅜ^ㅇ"
  },
  "날씨": {
    "en": "weather",
    "jamo": "ㄴ^ㅏ^ㄹ|ㅆ^ㅣ"
  },
  "날짜": {
    "en": "date",
    "jamo": "ㄴ^ㅏ^ㄹ|ㅉ^ㅏ"
  },
  "남산": {
    "en": "Namsan (mountain in Seoul)",
    "jamo": "ㄴ^ㅏ^ㅁ|ㅅ^ㅏ^ㄴ"
  },
  "남편": {
    "en": "husband",
    "jamo": "ㄴ^ㅏ^ㅁ|ㅍ^ㅕ^ㄴ"
  },
  "낮다": {
    "en": "low",
    "jamo": "ㄴ^ㅏ^ㅈ|ㄷ^ㅏ"
  },
  "내년": {
    "en": "next year",
    "jamo": "ㄴ^ㅏ+ㅣ|ㄴ^ㅕ^ㄴ"
  },
  "냉면": {
    "en": "cold noodle",
    "jamo": "ㄴ^ㅏ+ㅣ^ㅇ|ㅁ^ㅕ^ㄴ"
  },
  "너무": {
    "en": "too, very",
    "jamo": "ㄴ^ㅓ|ㅁ^ㅜ"
  },
  "뉴스": {
    "en": "news",
    "jamo": "ㄴ^ㅠ|ㅅ^ㅡ"
  },
  "다른": {
    "en": "other ~, another ~, different ~",
    "jamo": "ㄷ^ㅏ|ㄹ^ㅡ^ㄴ"
  },
  "다시": {
    "en": "again",
    "jamo": "ㄷ^ㅏ|ㅅ^ㅣ"
  },
  "담배": {
    "en": "tobacco",
    "jamo": "ㄷ^ㅏ^ㅁ|ㅂ^ㅏ+ㅣ"
  },
  "대답": {
    "en": "answer",
    "jamo": "ㄷ^ㅏ+ㅣ|ㄷ^ㅏ^ㅂ"
  },
  "대학": {
    "en": "university, college",
    "ja": "だいがく【大学】",
    "fr": "université",
    "es": "universidad",
    "zh": "大学",
    "vi": "đại học",
    "th": "มหาวิทยาลัย",
    "id": "universitas",
    "ru": "университет",
    "ar": "جامعة",
    "mn": "дээд сургууль, коллеж",
    "jamo": "ㄷ^ㅏ+ㅣ|ㅎ^ㅏ^ㄱ"
  },
  "대화": {
    "en": "conversation, dialogue",
    "jamo": "ㄷ^ㅏ+ㅣ|ㅎ^ㅗ+ㅏ"
  },
  "독일": {
    "en": "Germany",
    "jamo": "ㄷ^ㅗ^ㄱ|ㅇ^ㅣ^ㄹ"
  },
  "라면": {
    "en": "ramen",
    "jamo": "ㄹ^ㅏ|ㅁ^ㅕ^ㄴ"
  },
  "마리": {
    "en": "~ animal(s), ~ head(s)",
    "jamo": "ㅁ^ㅏ|ㄹ^ㅣ"
  },
  "마음": {
    "en": "mind, feeling",
    "jamo": "ㅁ^ㅏ|ㅇ^ㅡ^ㅁ"
  },
  "머리": {
    "en": "head, hair",
    "ja": "あたま【頭】。とうぶ【頭部】",
    "fr": "tête, crâne, chef",
    "es": "cabeza",
    "zh": "头",
    "vi": "đầu, thủ",
    "th": "หัว, ศีรษะ",
    "id": "kepala",
    "ru": "голова",
    "ar": "رأس",
    "mn": "толгой, гавал",
    "jamo": "ㅁ^ㅓ|ㄹ^ㅣ"
  },
  "메뉴": {
    "en": "menu",
    "ja": "メニュー。こんだてひょう【献立表】",
    "fr": "carte",
    "es": "menú, carta, lista",
    "zh": "菜单，菜谱",
    "vi": "thực đơn",
    "th": "รายการอาหาร, บัญชีอาหาร, เมนู",
    "id": "tabel menu, daftar menu",
    "ru": "меню",
    "ar": "قائمة الطعام",
    "mn": "хоолны цэс, меню",
    "jamo": "ㅁ^ㅓ+ㅣ|ㄴ^ㅠ"
  },
  "며칠": {
    "en": "a few days, what date",
    "jamo": "ㅁ^ㅕ|ㅊ^ㅣ^ㄹ"
  },
  "바로": {
    "en": "immediately, soon, just",
    "ja": "まっすぐに【真っ直ぐに】。いっちょくせんに【一直線に】",
    "fr": "(tout) droit, bien droit",
    "es": "recto, en línea recta",
    "zh": "笔直地",
    "vi": "thẳng",
    "th": "ตรง ๆ",
    "id": "lurus, rapi",
    "ru": "ровно",
    "ar": "على الوجه الصحيح",
    "mn": "шулуун, тэгш, чигээрээ",
    "jamo": "ㅂ^ㅏ|ㄹ^ㅗ"
  },
  "바지": {
    "en": "pants",
    "jamo": "ㅂ^ㅏ|ㅈ^ㅣ"
  },
  "번호": {
    "en": "number",
    "jamo": "ㅂ^ㅓ^ㄴ|ㅎ^ㅗ"
  },
  "볼펜": {
    "en": "ballpoint pen",
    "ja": "ボールペン",
    "fr": "stylo à bille",
    "es": "bolígrafo",
    "zh": "圆珠笔",
    "vi": "bút bi",
    "th": "ปากกาลูกลื่น, ปากกาหมึกแห้ง",
    "id": "bolpoin, bolpen",
    "ru": "шариковая авторучка",
    "ar": "قلم حبر كرويّ",
    "mn": "бал",
    "jamo": "ㅂ^ㅗ^ㄹ|ㅍ^ㅓ+ㅣ^ㄴ"
  },
  "부탁": {
    "en": "request, please",
    "jamo": "ㅂ^ㅜ|ㅌ^ㅏ^ㄱ"
  },
  "사용": {
    "en": "use, usage",
    "jamo": "ㅅ^ㅏ|ㅇ^ㅛ^ㅇ"
  },
  "샤워": {
    "en": "shower",
    "jamo": "ㅅ^ㅑ|ㅇ^ㅜ+ㅓ"
  },
  "쇼핑": {
    "en": "shopping",
    "jamo": "ㅅ^ㅛ|ㅍ^ㅣ^ㅇ"
  },
  "수첩": {
    "en": "note, notebook",
    "ja": "てちょう【手帳】",
    "fr": "carnet, calepin",
    "es": "agenda",
    "zh": "记事本，手册",
    "vi": "sổ tay",
    "th": "สมุดบันทึก, สมุดพก, สมุดโน้ต",
    "id": "buku catatan, notes",
    "ru": "блокнот",
    "ar": "دفتر جيب",
    "mn": "тэмдэглэлийн дэвтэр",
    "jamo": "ㅅ^ㅜ|ㅊ^ㅓ^ㅂ"
  },
  "스키": {
    "en": "ski, skiing",
    "jamo": "ㅅ^ㅡ|ㅋ^ㅣ"
  },
  "아침": {
    "en": "morning, breakfast",
    "jamo": "ㅇ^ㅏ|ㅊ^ㅣ^ㅁ"
  },
  "야구": {
    "en": "baseball",
    "jamo": "ㅇ^ㅑ|ㄱ^ㅜ"
  },
  "약국": {
    "en": "pharmacy",
    "jamo": "ㅇ^ㅑ^ㄱ|ㄱ^ㅜ^ㄱ"
  },
  "약속": {
    "en": "appointment, promise",
    "jamo": "ㅇ^ㅑ^ㄱ|ㅅ^ㅗ^ㄱ"
  },
  "요일": {
    "en": "day of the week",
    "jamo": "ㅇ^ㅛ|ㅇ^ㅣ^ㄹ"
  },
  "우유": {
    "en": "milk",
    "jamo": "ㅇ^ㅜ|ㅇ^ㅠ"
  },
  "유명": {
    "en": "being famous",
    "jamo": "ㅇ^ㅠ|ㅁ^ㅕ^ㅇ"
  },
  "유월": {
    "en": "June",
    "jamo": "ㅇ^ㅠ|ㅇ^ㅜ+ㅓ^ㄹ"
  },
  "이유": {
    "en": "reason",
    "jamo": "ㅇ^ㅣ|ㅇ^ㅠ"
  },
  "초콜릿": {
    "en": "chocolate",
    "ja": "チョコレート。チョコ",
    "fr": "chocolat",
    "es": "chocolate",
    "zh": "巧克力",
    "vi": "sô-cô-la",
    "th": "ช็อกโกแลต",
    "id": "minuman coklat, cacao",
    "ru": "шоколад",
    "ar": "شوكولا، شوكولاتة",
    "mn": "шоколад",
    "jamo": "ㅊ^ㅗ|ㅋ^ㅗ^ㄹ|ㄹ^ㅣ^ㅅ"
  },
  "칠판": {
    "en": "blackboard",
    "ja": "こくばん【黒板】",
    "fr": "tableau",
    "es": "pizarra",
    "zh": "黑板",
    "vi": "tấm bảng",
    "th": "กระดานดำ",
    "id": "papan tulis",
    "ru": "доска",
    "ar": "سبورة",
    "mn": "самбар",
    "jamo": "ㅊ^ㅣ^ㄹ|ㅍ^ㅏ^ㄴ"
  },
  "카드": {
    "en": "card",
    "jamo": "ㅋ^ㅏ|ㄷ^ㅡ"
  },
  "카메라": {
    "en": "camera",
    "jamo": "ㅋ^ㅏ|ㅁ^ㅓ+ㅣ|ㄹ^ㅏ"
  },
  "커피": {
    "en": "coffee",
    "ja": "コーヒー。コーヒーまめ【コーヒー豆】。コーヒーこな【コーヒー粉】",
    "fr": "café",
    "es": "café",
    "zh": "咖啡",
    "vi": "hạt cà phê, bột cà phê",
    "th": "กาแฟ, เมล็ดกาแฟ, ผงกาแฟ",
    "id": "kopi",
    "ru": "кофе",
    "ar": "حبّ شجرة البُنّ، حبّ تتّخذ منه القهوة",
    "mn": "кофе, кофены буурцаг",
    "jamo": "ㅋ^ㅓ|ㅍ^ㅣ"
  },
  "콜라": {
    "en": "Coke",
    "ja": "コーラ",
    "fr": "cola",
    "es": "cola",
    "zh": "可乐",
    "vi": "cola",
    "th": "โค้ก, โคล่า, เป๊บซี่",
    "id": "cola",
    "ru": "кола",
    "ar": "الكوك، كوكا كولا",
    "mn": "кола, кока-кола",
    "jamo": "ㅋ^ㅗ^ㄹ|ㄹ^ㅏ"
  },
  "탁구": {
    "en": "table tennis",
    "jamo": "ㅌ^ㅏ^ㄱ|ㄱ^ㅜ"
  },
  "퇴근": {
    "en": "leaving work",
    "jamo": "ㅌ^ㅗ+ㅣ|ㄱ^ㅡ^ㄴ"
  },
  "특히": {
    "en": "especially, in particular",
    "jamo": "ㅌ^ㅡ^ㄱ|ㅎ^ㅣ"
  },
  "파티": {
    "en": "party",
    "jamo": "ㅍ^ㅏ|ㅌ^ㅣ"
  },
  "필통": {
    "en": "pencil case",
    "jamo": "ㅍ^ㅣ^ㄹ|ㅌ^ㅗ^ㅇ"
  },
  "한복": {
    "en": "Hanbok, Korean traditional clothes",
    "jamo": "ㅎ^ㅏ^ㄴ|ㅂ^ㅗ^ㄱ"
  },
  "함께": {
    "en": "together",
    "jamo": "ㅎ^ㅏ^ㅁ|ㄲ^ㅓ+ㅣ"
  },
  "회사": {
    "en": "company",
    "jamo": "ㅎ^ㅗ+ㅣ|ㅅ^ㅏ"
  },
  "휴가": {
    "en": "vacation, holiday",
    "jamo": "ㅎ^ㅠ|ㄱ^ㅏ"
  },
  "가끔": {
    "en": "sometimes",
    "jamo": "ㄱ^ㅏ|ㄲ^ㅡ^ㅁ"
  },
  "가득": {
    "en": "full 48",
    "ja": "いっぱい【一杯】。いっぱいに【一杯に】。ぎっしり。ぎっしりと。なみなみ。なみなみと",
    "fr": "plein, entièrement, complètement",
    "es": "llenamente, atestadamente, abundantemente, copiosamente, repletamente",
    "zh": "多，充满，满满地",
    "vi": "đầy",
    "th": "เต็ม, เต็มที่, แน่น",
    "id": "penuh",
    "ru": "до отказа",
    "ar": "على نحو كامل",
    "mn": "дүүртэл, хальтал, бялхтал, дүүрэн, бялхам",
    "jamo": "ㄱ^ㅏ|ㄷ^ㅡ^ㄱ"
  },
  "가슴": {
    "en": "chest, breast",
    "ja": "むね【胸】。きょうぶ【胸部】",
    "fr": "poitrine, poitrail",
    "es": "pecho",
    "zh": "胸，胸部",
    "vi": "ngực",
    "th": "อก, หน้าอก",
    "id": "dada",
    "ru": "грудь",
    "ar": "صدر",
    "mn": "цээж",
    "jamo": "ㄱ^ㅏ|ㅅ^ㅡ^ㅁ"
  },
  "간식": {
    "en": "snack",
    "jamo": "ㄱ^ㅏ^ㄴ|ㅅ^ㅣ^ㄱ"
  },
  "갈색": {
    "en": "brown",
    "ja": "ちゃいろ【茶色】。ブラウン。かっしょく【褐色】",
    "fr": "brun, couleur brune",
    "es": "color marrón, color castaño",
    "zh": "褐色",
    "vi": "màu nâu",
    "th": "สีน้ำตาล",
    "id": "warna coklat, coklat",
    "ru": "коричневый цвет",
    "ar": "بني",
    "mn": "улаан хүрэн, хүрэн бор",
    "jamo": "ㄱ^ㅏ^ㄹ|ㅅ^ㅏ+ㅣ^ㄱ"
  },
  "갚다": {
    "en": "repay",
    "ja": "かえす【返す】。へんさいする【返済する】",
    "fr": "rendre, rembourser, régler (une dette), s'acquitter",
    "es": "reembolsar",
    "zh": "还，偿还",
    "vi": "trả",
    "th": "คืน, คืนให้, ใช้คืน, ชำระคืน",
    "id": "membayar (hutang, jasa)",
    "ru": "возвращать",
    "ar": "يردّ",
    "mn": "төлөх",
    "jamo": "ㄱ^ㅏ^ㅍ|ㄷ^ㅏ"
  },
  "거울": {
    "en": "mirror",
    "jamo": "ㄱ^ㅓ|ㅇ^ㅜ^ㄹ"
  },
  "거절": {
    "en": "rejection",
    "jamo": "ㄱ^ㅓ|ㅈ^ㅓ^ㄹ"
  },
  "걱정": {
    "en": "anxiety, concern",
    "ja": "しんぱい【心配】。けねん【懸念】。ゆうりょ【憂慮】",
    "fr": "inquiétude, souci, préoccupation",
    "es": "preocupación",
    "zh": "担心，忧虑，担忧",
    "vi": "nỗi lo",
    "th": "ความกังวล, ความห่วงใย, ความกลุ้มใจ, ความวิตกกังวล, ความร้อนใจ",
    "id": "kekhawatiran, kecemasan",
    "ru": "беспокойство",
    "ar": "قلق",
    "mn": "сэтгэлийн зовиур, санаа зовох, сэтгэл зовох",
    "jamo": "ㄱ^ㅓ^ㄱ|ㅈ^ㅓ^ㅇ"
  },
  "걸음": {
    "en": "step",
    "jamo": "ㄱ^ㅓ^ㄹ|ㅇ^ㅡ^ㅁ"
  },
  "결과": {
    "en": "result",
    "jamo": "ㄱ^ㅕ^ㄹ|ㄱ^ㅗ+ㅏ"
  },
  "결석": {
    "en": "absence",
    "jamo": "ㄱ^ㅕ^ㄹ|ㅅ^ㅓ^ㄱ"
  },
  "결심": {
    "en": "decision",
    "jamo": "ㄱ^ㅕ^ㄹ|ㅅ^ㅣ^ㅁ"
  },
  "결혼": {
    "en": "marriage",
    "jamo": "ㄱ^ㅕ^ㄹ|ㅎ^ㅗ^ㄴ"
  },
  "경찰": {
    "en": "police",
    "ja": "けいさつ【警察】",
    "fr": "police",
    "es": "policía",
    "zh": "警方，警察当局",
    "vi": "(cơ quan) cảnh sát",
    "th": "ตำรวจ",
    "id": "kepolisian, polisi",
    "ru": "полиция",
    "ar": "شرطة",
    "mn": "цагдаа, цагдаагийн байгууллага",
    "jamo": "ㄱ^ㅕ^ㅇ|ㅊ^ㅏ^ㄹ"
  },
  "경치": {
    "en": "view, landscape",
    "jamo": "ㄱ^ㅕ^ㅇ|ㅊ^ㅣ"
  },
  "경험": {
    "en": "experience",
    "ja": "けいけん【経験】。たいけん【体験】。けんぶん【見聞】。エクスペリエンス",
    "fr": "expérience",
    "es": "experiencia",
    "zh": "经验",
    "vi": "kinh nghiệm",
    "th": "ประสบการณ์",
    "id": "pengalaman",
    "ru": "опыт",
    "ar": "خبرة",
    "mn": "туршлага, хийж үзэх, туршин үзэх, биеэрээ хийж үзэх, биеэрээ мэдрэх",
    "jamo": "ㄱ^ㅕ^ㅇ|ㅎ^ㅓ^ㅁ"
  },
  "계단": {
    "en": "stairs",
    "ja": "かいだん【階段】",
    "fr": "escalier",
    "es": "escalera",
    "zh": "阶梯，楼梯",
    "vi": "cầu thang, thang",
    "th": "บันได, ขั้นบันได",
    "id": "tangga",
    "ru": "лестница",
    "ar": "درج",
    "mn": "шат",
    "jamo": "ㄱ^ㅕ+ㅣ|ㄷ^ㅏ^ㄴ"
  },
  "계란": {
    "en": "egg",
    "jamo": "ㄱ^ㅕ+ㅣ|ㄹ^ㅏ^ㄴ"
  },
  "고모": {
    "en": "paternal aunt",
    "jamo": "ㄱ^ㅗ|ㅁ^ㅗ"
  },
  "고민": {
    "en": "woe",
    "jamo": "ㄱ^ㅗ|ㅁ^ㅣ^ㄴ"
  },
  "공장": {
    "en": "factory",
    "jamo": "ㄱ^ㅗ^ㅇ|ㅈ^ㅏ^ㅇ"
  },
  "과자": {
    "en": "snack",
    "jamo": "ㄱ^ㅗ+ㅏ|ㅈ^ㅏ"
  },
  "광고": {
    "en": "advertisement",
    "jamo": "ㄱ^ㅗ+ㅏ^ㅇ|ㄱ^ㅗ"
  },
  "광주": {
    "en": "Gwangju (city)",
    "ja": "クァンジュ【光州】",
    "fr": "Gwangju",
    "es": "Gwangju , ciudad metropolitana ubicada en el centro de la Provincia de Jeolla del Sur",
    "zh": "光州",
    "vi": "Gwangju",
    "th": "ควังจู",
    "id": "Gwangju",
    "ru": "Кванджу",
    "ar": "مدينة كوانغ جو",
    "mn": "Гуанжү, Гуанжү хот",
    "jamo": "ㄱ^ㅗ+ㅏ^ㅇ|ㅈ^ㅜ"
  },
  "교수": {
    "en": "professor",
    "jamo": "ㄱ^ㅛ|ㅅ^ㅜ"
  },
  "교육": {
    "en": "education",
    "jamo": "ㄱ^ㅛ|ㅇ^ㅠ^ㄱ"
  },
  "교환": {
    "en": "exchange",
    "jamo": "ㄱ^ㅛ|ㅎ^ㅗ+ㅏ^ㄴ"
  },
  "교회": {
    "en": "church",
    "jamo": "ㄱ^ㅛ|ㅎ^ㅗ+ㅣ"
  },
  "구름": {
    "en": "cloud",
    "ja": "くも【雲】",
    "fr": "nuage, nuée",
    "es": "nube",
    "zh": "云，云彩",
    "vi": "đám mây",
    "th": "เมฆ, ก้อนเมฆ",
    "id": "awan",
    "ru": "облако",
    "ar": "سحاب",
    "mn": "үүл",
    "jamo": "ㄱ^ㅜ|ㄹ^ㅡ^ㅁ"
  },
  "국내": {
    "en": "domestic",
    "jamo": "ㄱ^ㅜ^ㄱ|ㄴ^ㅏ+ㅣ"
  },
  "국수": {
    "en": "noodle",
    "jamo": "ㄱ^ㅜ^ㄱ|ㅅ^ㅜ"
  },
  "규칙": {
    "en": "rule",
    "ja": "きそく【規則】",
    "fr": "règle, règlement",
    "es": "normativa, reglamento",
    "zh": "规则，规定，条例",
    "vi": "quy tắc",
    "th": "กฎ, เกณฑ์, กฎเกณฑ์, หลักเกณฑ์, ระเบียบ, ข้อบังคับ, กฎข้อบังคับ, กติกา",
    "id": "peraturan",
    "ru": "правило",
    "ar": "قاعدة",
    "mn": "дүрэм, журам, зарчим",
    "jamo": "ㄱ^ㅠ|ㅊ^ㅣ^ㄱ"
  },
  "그거": {
    "en": "it",
    "jamo": "ㄱ^ㅡ|ㄱ^ㅓ"
  },
  "그곳": {
    "en": "there",
    "jamo": "ㄱ^ㅡ|ㄱ^ㅗ^ㅅ"
  },
  "그날": {
    "en": "that day",
    "jamo": "ㄱ^ㅡ|ㄴ^ㅏ^ㄹ"
  },
  "그냥": {
    "en": "just, as it is",
    "jamo": "ㄱ^ㅡ|ㄴ^ㅑ^ㅇ"
  },
  "그분": {
    "en": "his, the person",
    "jamo": "ㄱ^ㅡ|ㅂ^ㅜ^ㄴ"
  },
  "글자": {
    "en": "letter, type",
    "jamo": "ㄱ^ㅡ^ㄹ|ㅈ^ㅏ"
  },
  "금방": {
    "en": "soon, a little while ago",
    "jamo": "ㄱ^ㅡ^ㅁ|ㅂ^ㅏ^ㅇ"
  },
  "금지": {
    "en": "ban",
    "jamo": "ㄱ^ㅡ^ㅁ|ㅈ^ㅣ"
  },
  "기름": {
    "en": "oil, gasoline",
    "ja": "あぶら【油・脂・膏】",
    "fr": "huile",
    "es": "aceite",
    "zh": "油",
    "vi": "dầu",
    "th": "น้ำมัน",
    "id": "minyak, lemak, gemuk",
    "ru": "масло",
    "ar": "زيت",
    "mn": "өөх тос",
    "jamo": "ㄱ^ㅣ|ㄹ^ㅡ^ㅁ"
  },
  "기억": {
    "en": "memory",
    "jamo": "ㄱ^ㅣ|ㅇ^ㅓ^ㄱ"
  },
  "기침": {
    "en": "cough",
    "jamo": "ㄱ^ㅣ|ㅊ^ㅣ^ㅁ"
  },
  "깊다": {
    "en": "deep",
    "jamo": "ㄱ^ㅣ^ㅍ|ㄷ^ㅏ"
  },
  "꽃병": {
    "en": "flower vase",
    "jamo": "ㄲ^ㅗ^ㅊ|ㅂ^ㅕ^ㅇ"
  },
  "꽃집": {
    "en": "florist",
    "jamo": "ㄲ^ㅗ^ㅊ|ㅈ^ㅣ^ㅂ"
  },
  "끊다": {
    "en": "cut off",
    "jamo": "ㄲ^ㅡ^ㄶ|ㄷ^ㅏ"
  },
  "끓다": {
    "en": "boil",
    "jamo": "ㄲ^ㅡ^ㅀ|ㄷ^ㅏ"
  },
  "나이": {
    "en": "age, old",
    "jamo": "ㄴ^ㅏ|ㅇ^ㅣ"
  },
  "나흘": {
    "en": "four days",
    "jamo": "ㄴ^ㅏ|ㅎ^ㅡ^ㄹ"
  },
  "낚시": {
    "en": "fishing",
    "ja": "つりばり【釣り針】",
    "fr": "hameçon",
    "es": "anzuelo",
    "zh": "钓钩，鱼钩",
    "vi": "lưỡi câu",
    "th": "เบ็ด",
    "id": "kail",
    "ru": "удочка",
    "ar": "صيد السمك",
    "mn": "загасны дэгээ",
    "jamo": "ㄴ^ㅏ^ㄲ|ㅅ^ㅣ"
  },
  "냄비": {
    "en": "pot",
    "jamo": "ㄴ^ㅏ+ㅣ^ㅁ|ㅂ^ㅣ"
  },
  "너희": {
    "en": "you (plural)",
    "jamo": "ㄴ^ㅓ|ㅎ^ㅡ+ㅣ"
  },
  "노인": {
    "en": "elderly",
    "ja": "おとしより【お年寄り】。ろうじん【老人】。シルバー。こうれいしゃ【高齢者】",
    "fr": "personne âgée, vieil homme, vieillard, vieille femme, vieux, vieillesse",
    "es": "anciano, persona de edad avanzada",
    "zh": "老人，老年人",
    "vi": "người cao tuổi, người già",
    "th": "ผู้สูงอายุ, ผู้อาวุโส",
    "id": "orang tua, manula",
    "ru": "пожилой человек",
    "ar": "مسن",
    "mn": "өндөр настан",
    "jamo": "ㄴ^ㅗ|ㅇ^ㅣ^ㄴ"
  },
  "녹차": {
    "en": "green tea",
    "jamo": "ㄴ^ㅗ^ㄱ|ㅊ^ㅏ"
  },
  "농담": {
    "en": "joke",
    "jamo": "ㄴ^ㅗ^ㅇ|ㄷ^ㅏ^ㅁ"
  },
  "눈물": {
    "en": "tear",
    "ja": "なみだ【涙】",
    "fr": "larme, pleurs",
    "es": "lágrima",
    "zh": "眼泪，泪水",
    "vi": "nước mắt",
    "th": "น้ำตา",
    "id": "air mata",
    "ru": "слёзы",
    "ar": "دموع",
    "mn": "нулимс",
    "jamo": "ㄴ^ㅜ^ㄴ|ㅁ^ㅜ^ㄹ"
  },
  "능력": {
    "en": "ability",
    "jamo": "ㄴ^ㅡ^ㅇ|ㄹ^ㅕ^ㄱ"
  },
  "다양": {
    "en": "diversity, variety",
    "jamo": "ㄷ^ㅏ|ㅇ^ㅑ^ㅇ"
  },
  "단추": {
    "en": "button",
    "jamo": "ㄷ^ㅏ^ㄴ|ㅊ^ㅜ"
  },
  "단풍": {
    "en": "autumn leaves, maple",
    "ja": "もみじ【紅葉】",
    "fr": "teinte d'automne, teinte automnale, feuilles jaunies et rougies, habit d'automne, feuillage d'automne, couleurs d'automne",
    "es": "hojas coloradas de otoño",
    "zh": "红叶，枫叶",
    "vi": "thu vàng, lá mùa thu",
    "th": "ใบไม้เปลี่ยนสี",
    "id": "(Tiada Penjelasan Arti)",
    "ru": "багрянец",
    "ar": "أوراق الأشجار الخريفية",
    "mn": "улаан буюу шаргал навч",
    "jamo": "ㄷ^ㅏ^ㄴ|ㅍ^ㅜ^ㅇ"
  },
  "달걀": {
    "en": "egg",
    "ja": "たまご・らん【卵】。けいらん【鶏卵】",
    "fr": "œuf",
    "es": "huevo",
    "zh": "鸡蛋",
    "vi": "trứng gà",
    "th": "ไข่ไก่",
    "id": "telur",
    "ru": "яйцо",
    "ar": "بيض",
    "mn": "өндөг",
    "jamo": "ㄷ^ㅏ^ㄹ|ㄱ^ㅑ^ㄹ"
  },
  "달력": {
    "en": "calendar",
    "ja": "カレンダー。こよみ【暦】。れきほん【暦本】",
    "fr": "calendrier",
    "es": "calendario, almanaque",
    "zh": "日历",
    "vi": "lịch",
    "th": "ปฏิทิน",
    "id": "kalender, penanggalan, almanak",
    "ru": "календарь",
    "ar": "التقويم",
    "mn": "хуанли, цаг тооны бичиг, календарь",
    "jamo": "ㄷ^ㅏ^ㄹ|ㄹ^ㅕ^ㄱ"
  },
  "대회": {
    "en": "competition, tournament",
    "ja": "たいかい【大会】",
    "fr": "grande réunion, conférence, congrès, convention, assemblée générale",
    "es": "reunión, encuentro, congreso",
    "zh": "大会",
    "vi": "đại hội",
    "th": "การประชุมใหญ่, การชุมนุมมวลชน, การประชุมสมัชชา",
    "id": "rapat umum, pertemuan umum, konferensi, konvensi",
    "ru": "съезд",
    "ar": "مؤتمر",
    "mn": "уулзалт, цуглаан, хурал",
    "jamo": "ㄷ^ㅏ+ㅣ|ㅎ^ㅗ+ㅣ"
  },
  "동물": {
    "en": "animal",
    "jamo": "ㄷ^ㅗ^ㅇ|ㅁ^ㅜ^ㄹ"
  },
  "두통": {
    "en": "headache",
    "jamo": "ㄷ^ㅜ|ㅌ^ㅗ^ㅇ"
  },
  "마을": {
    "en": "village, town",
    "jamo": "ㅁ^ㅏ|ㅇ^ㅡ^ㄹ"
  },
  "마트": {
    "en": "supermarket",
    "jamo": "ㅁ^ㅏ|ㅌ^ㅡ"
  },
  "만두": {
    "en": "dumpling",
    "ja": "ギョーザ【餃子】。パオズ【包子】",
    "fr": "ravioli",
    "es": "empanada coreana, bollo coreano",
    "zh": "饺子",
    "vi": "bánh bao, bánh màn thầu",
    "th": "เกี๊ยว, เกี๊ยวซ่า",
    "id": "mandu",
    "ru": "манду, корейские манты",
    "ar": "عجينة كرويّة مسلوقة",
    "mn": "банш, бууз",
    "jamo": "ㅁ^ㅏ^ㄴ|ㄷ^ㅜ"
  },
  "만약": {
    "en": "if",
    "jamo": "ㅁ^ㅏ^ㄴ|ㅇ^ㅑ^ㄱ"
  },
  "목욕": {
    "en": "bath, bathing",
    "jamo": "ㅁ^ㅗ^ㄱ|ㅇ^ㅛ^ㄱ"
  },
  "무릎": {
    "en": "knee",
    "jamo": "ㅁ^ㅜ|ㄹ^ㅡ^ㅍ"
  },
  "미터": {
    "en": "meter",
    "jamo": "ㅁ^ㅣ|ㅌ^ㅓ"
  },
  "바깥": {
    "en": "the outside",
    "ja": "そと【外】。そとがわ【外側】",
    "fr": "extérieur, dehors",
    "es": "fuera, afuera",
    "zh": "外，外面",
    "vi": "bên ngoài",
    "th": "ข้างนอก, ด้านนอก, ภายนอก",
    "id": "luar, bagian luar",
    "ru": "внешний",
    "ar": "الخارج",
    "mn": "гадна тал, гадаа",
    "jamo": "ㅂ^ㅏ|ㄲ^ㅏ^ㅌ"
  },
  "바닥": {
    "en": "floor",
    "ja": "へいめん【平面】。そこ【底】。ゆか【床】",
    "fr": "sol, terre, partie plate de quelque chose, fond, lit",
    "es": "piso, suelo",
    "zh": "地",
    "vi": "đáy",
    "th": "พื้น",
    "id": "lantai",
    "ru": "пол",
    "ar": "أرض",
    "mn": "ёроол, шал",
    "jamo": "ㅂ^ㅏ|ㄷ^ㅏ^ㄱ"
  },
  "방향": {
    "en": "direction",
    "jamo": "ㅂ^ㅏ^ㅇ|ㅎ^ㅑ^ㅇ"
  },
  "배탈": {
    "en": "stomachache",
    "ja": "しょくもたれ【食もたれ】。しょくあたり【食あたり】",
    "fr": "troubles digestifs, indigestion, diarrhée",
    "es": "dolor de estómago, cólico",
    "zh": "腹痛，腹泻",
    "vi": "rối loạn tiêu hóa",
    "th": "การปวดท้อง, อาการปวดท้อง, การท้องเสีย",
    "id": "diare, mencret, muntaber, gangguan pencernaan",
    "ru": "несварение",
    "ar": "اضطراب المعدة",
    "mn": "гүйлгэх",
    "jamo": "ㅂ^ㅏ+ㅣ|ㅌ^ㅏ^ㄹ"
  },
  "봉투": {
    "en": "envelope",
    "jamo": "ㅂ^ㅗ^ㅇ|ㅌ^ㅜ"
  },
  "불편": {
    "en": "inconvenience",
    "jamo": "ㅂ^ㅜ^ㄹ|ㅍ^ㅕ^ㄴ"
  },
  "비교": {
    "en": "comparison",
    "jamo": "ㅂ^ㅣ|ㄱ^ㅛ"
  },
  "사탕": {
    "en": "candy",
    "ja": "キャンディー",
    "fr": "bonbon",
    "es": "dulce, caramelo, golosina",
    "zh": "糖，糖果，糖块",
    "vi": "kẹo",
    "th": "ลูกกวาด, ลูกอม, อมยิ้ม",
    "id": "permen, gula-gula",
    "ru": "конфета",
    "ar": "حلوى",
    "mn": "чихэр, бурам",
    "jamo": "ㅅ^ㅏ|ㅌ^ㅏ^ㅇ"
  },
  "서류": {
    "en": "document",
    "jamo": "ㅅ^ㅓ|ㄹ^ㅠ"
  },
  "서양": {
    "en": "western, west",
    "jamo": "ㅅ^ㅓ|ㅇ^ㅑ^ㅇ"
  },
  "소파": {
    "en": "sofa",
    "jamo": "ㅅ^ㅗ|ㅍ^ㅏ"
  },
  "소포": {
    "en": "parcel",
    "ja": "こづつみ【小包】。こづつみゆうびんぶつ【小包郵便物】",
    "fr": "colis, paquet",
    "es": "paquete, bulto",
    "zh": "包裹",
    "vi": "bưu phẩm, bưu kiện",
    "th": "พัสดุภัณฑ์, พัสดุไปรษณีย์, ไปรษณียภัณฑ์",
    "id": "paket, kiriman",
    "ru": "посылка",
    "ar": "طرد",
    "mn": "илгээмж",
    "jamo": "ㅅ^ㅗ|ㅍ^ㅗ"
  },
  "송편": {
    "en": "songpyeon (rice cake)",
    "jamo": "ㅅ^ㅗ^ㅇ|ㅍ^ㅕ^ㄴ"
  },
  "슬픔": {
    "en": "sorrow, sadness",
    "jamo": "ㅅ^ㅡ^ㄹ|ㅍ^ㅡ^ㅁ"
  },
  "연휴": {
    "en": "consecutive holidays",
    "jamo": "ㅇ^ㅕ^ㄴ|ㅎ^ㅠ"
  },
  "자유": {
    "en": "freedom",
    "jamo": "ㅈ^ㅏ|ㅇ^ㅠ"
  },
  "접다": {
    "en": "fold",
    "jamo": "ㅈ^ㅓ^ㅂ|ㄷ^ㅏ"
  },
  "조카": {
    "en": "nephew",
    "ja": "ゆうし【猶子】。めい【姪】。おい【甥】",
    "fr": "neveu, nièce",
    "es": "sobrino",
    "zh": "侄子，侄儿，侄女",
    "vi": "cháu",
    "th": "หลาน",
    "id": "keponakan",
    "ru": "племянница",
    "ar": "ابن الأخ، ابن الأخت",
    "mn": "зээ охин",
    "jamo": "ㅈ^ㅗ|ㅋ^ㅏ"
  },
  "종류": {
    "en": "kind, type",
    "jamo": "ㅈ^ㅗ^ㅇ|ㄹ^ㅠ"
  },
  "줄다": {
    "en": "shrink, decrease",
    "jamo": "ㅈ^ㅜ^ㄹ|ㄷ^ㅏ"
  },
  "치킨": {
    "en": "chicken (fried)",
    "jamo": "ㅊ^ㅣ|ㅋ^ㅣ^ㄴ"
  },
  "카페": {
    "en": "cafe, coffee shops",
    "jamo": "ㅋ^ㅏ|ㅍ^ㅓ+ㅣ"
  },
  "켤레": {
    "en": "pair (counter for shoes)",
    "jamo": "ㅋ^ㅕ^ㄹ|ㄹ^ㅓ+ㅣ"
  },
  "콧물": {
    "en": "snot, nasal discharge",
    "jamo": "ㅋ^ㅗ^ㅅ|ㅁ^ㅜ^ㄹ"
  },
  "크기": {
    "en": "size",
    "jamo": "ㅋ^ㅡ|ㄱ^ㅣ"
  },
  "학원": {
    "en": "academy, school",
    "jamo": "ㅎ^ㅏ^ㄱ|ㅇ^ㅜ+ㅓ^ㄴ"
  },
  "한옥": {
    "en": "traditional Korean house",
    "ja": "ハノク【韓屋】",
    "fr": "hanok, maison traditionnelle coréenne",
    "es": "hanok",
    "zh": "韩屋",
    "vi": "Hanok",
    "th": "ฮันอก",
    "id": "hanok, rumah tradisional Korea",
    "ru": "ханок",
    "ar": "هانوك",
    "mn": "хануг",
    "jamo": "ㅎ^ㅏ^ㄴ|ㅇ^ㅗ^ㄱ"
  },
  "할인": {
    "en": "sale, discount",
    "jamo": "ㅎ^ㅏ^ㄹ|ㅇ^ㅣ^ㄴ"
  },
  "항공": {
    "en": "flight",
    "jamo": "ㅎ^ㅏ^ㅇ|ㄱ^ㅗ^ㅇ"
  },
  "해외": {
    "en": "overseas",
    "jamo": "ㅎ^ㅏ+ㅣ|ㅇ^ㅗ+ㅣ"
  },
  "현금": {
    "en": "cash",
    "ja": "げんきん【現金】。キャッシュ",
    "fr": "monnaie courante",
    "es": "dinero en efectivo, dinero al contado",
    "zh": "现金",
    "vi": "hiện kim",
    "th": "ธนบัตร",
    "id": "uang tunai",
    "ru": "наличные деньги",
    "ar": "نقد",
    "mn": "бэлэн мөнгө",
    "jamo": "ㅎ^ㅕ^ㄴ|ㄱ^ㅡ^ㅁ"
  },
  "혹시": {
    "en": "by any chance",
    "jamo": "ㅎ^ㅗ^ㄱ|ㅅ^ㅣ"
  },
  "홍차": {
    "en": "black tea",
    "ja": "こうちゃ【紅茶】",
    "fr": "thé noir",
    "es": "té negro, té rojo",
    "zh": "红茶",
    "vi": "hồng trà (trà như thể loại trà Lipton)",
    "th": "ชาแดง",
    "id": "teh, teh merah,",
    "ru": "байховый чай",
    "ar": "شاي أحمر",
    "mn": "хар цай, байхуу цай",
    "jamo": "ㅎ^ㅗ^ㅇ|ㅊ^ㅏ"
  },
  "화가": {
    "en": "artist, painter",
    "jamo": "ㅎ^ㅗ+ㅏ|ㄱ^ㅏ"
  },
  "회색": {
    "en": "grey",
    "ja": "はいいろ【灰色】",
    "fr": "gris",
    "es": "color gris",
    "zh": "灰色",
    "vi": "màu xám tro",
    "th": "สีเทา",
    "id": "warna abu-abu",
    "ru": "серый цвет",
    "ar": "لون رمادي",
    "mn": "саарал өнгө",
    "jamo": "ㅎ^ㅗ+ㅣ|ㅅ^ㅏ+ㅣ^ㄱ"
  },
  "회원": {
    "en": "member",
    "jamo": "ㅎ^ㅗ+ㅣ|ㅇ^ㅜ+ㅓ^ㄴ"
  },
  "휴일": {
    "en": "holiday",
    "jamo": "ㅎ^ㅠ|ㅇ^ㅣ^ㄹ"
  },
  "휴지": {
    "en": "toilet paper",
    "ja": "かみくず【紙くず】",
    "fr": "chiffon de papier",
    "es": "papel usado",
    "zh": "废纸",
    "vi": "giấy vụn, giấy rác",
    "th": "เศษกระดาษ",
    "id": "kertas sampah",
    "ru": "мусор",
    "ar": "أوراق مهملة",
    "mn": "хаягдал цаас",
    "jamo": "ㅎ^ㅠ|ㅈ^ㅣ"
  },
  "희망": {
    "en": "hope",
    "jamo": "ㅎ^ㅡ+ㅣ|ㅁ^ㅏ^ㅇ"
  },
  "흰색": {
    "en": "white color",
    "ja": "はくしょく【白色】",
    "fr": "couleur blanche, blanc",
    "es": "color blanco",
    "zh": "白色",
    "vi": "màu trắng",
    "th": "สีขาว",
    "id": "warna putih",
    "ru": "белый цвет",
    "ar": "لون أبيض",
    "mn": "цагаан өнгө",
    "jamo": "ㅎ^ㅡ+ㅣ^ㄴ|ㅅ^ㅏ+ㅣ^ㄱ"
  },
  "가난": {
    "en": "poverty",
    "jamo": "ㄱ^ㅏ|ㄴ^ㅏ^ㄴ"
  },
  "가능": {
    "en": "possibility, potentiality",
    "jamo": "ㄱ^ㅏ|ㄴ^ㅡ^ㅇ"
  },
  "가루": {
    "en": "powder",
    "jamo": "ㄱ^ㅏ|ㄹ^ㅜ"
  },
  "가스": {
    "en": "gas",
    "jamo": "ㄱ^ㅏ|ㅅ^ㅡ"
  },
  "가입": {
    "en": "entry",
    "jamo": "ㄱ^ㅏ|ㅇ^ㅣ^ㅂ"
  },
  "가죽": {
    "en": "leather",
    "jamo": "ㄱ^ㅏ|ㅈ^ㅜ^ㄱ"
  },
  "간판": {
    "en": "signboard",
    "jamo": "ㄱ^ㅏ^ㄴ|ㅍ^ㅏ^ㄴ"
  },
  "간호": {
    "en": "nursing",
    "jamo": "ㄱ^ㅏ^ㄴ|ㅎ^ㅗ"
  },
  "갈증": {
    "en": "thirst",
    "jamo": "ㄱ^ㅏ^ㄹ|ㅈ^ㅡ^ㅇ"
  },
  "강물": {
    "en": "river water",
    "jamo": "ㄱ^ㅏ^ㅇ|ㅁ^ㅜ^ㄹ"
  },
  "거품": {
    "en": "bubble",
    "ja": "あわ・あぶく【泡】。バブル",
    "fr": "bulle",
    "es": "burbuja",
    "zh": "泡沫",
    "vi": "bọt",
    "th": "ฟอง",
    "id": "busa",
    "ru": "пена",
    "ar": "فقاعة",
    "mn": "хөөс",
    "jamo": "ㄱ^ㅓ|ㅍ^ㅜ^ㅁ"
  },
  "걸레": {
    "en": "rag",
    "ja": "ぞうきん【雑巾】",
    "fr": "chiffon, torchon",
    "es": "trapo, paño",
    "zh": "抹布",
    "vi": "giẻ lau",
    "th": "ผ้าขี้ริ้ว, ผ้าเช็ดพื้น, ผ้าถูพื้น",
    "id": "lap, pel, kain lap, kain pel",
    "ru": "тряпка",
    "ar": "مِمْسَحَة",
    "mn": "шалны алчуур",
    "jamo": "ㄱ^ㅓ^ㄹ|ㄹ^ㅓ+ㅣ"
  },
  "검다": {
    "en": "black",
    "jamo": "ㄱ^ㅓ^ㅁ|ㄷ^ㅏ"
  },
  "검색": {
    "en": "search",
    "jamo": "ㄱ^ㅓ^ㅁ|ㅅ^ㅏ+ㅣ^ㄱ"
  },
  "검토": {
    "en": "review, examination",
    "jamo": "ㄱ^ㅓ^ㅁ|ㅌ^ㅗ"
  },
  "겉옷": {
    "en": "outer clothing, coat",
    "jamo": "ㄱ^ㅓ^ㅌ|ㅇ^ㅗ^ㅅ"
  },
  "겨우": {
    "en": "barely, finally",
    "jamo": "ㄱ^ㅕ|ㅇ^ㅜ"
  },
  "결제": {
    "en": "payment (settlement)",
    "jamo": "ㄱ^ㅕ^ㄹ|ㅈ^ㅓ+ㅣ"
  },
  "경우": {
    "en": "case, circumstance",
    "jamo": "ㄱ^ㅕ^ㅇ|ㅇ^ㅜ"
  },
  "경제": {
    "en": "economy",
    "jamo": "ㄱ^ㅕ^ㅇ|ㅈ^ㅓ+ㅣ"
  },
  "계약": {
    "en": "contract",
    "jamo": "ㄱ^ㅕ+ㅣ|ㅇ^ㅑ^ㄱ"
  },
  "고백": {
    "en": "confession",
    "jamo": "ㄱ^ㅗ|ㅂ^ㅏ+ㅣ^ㄱ"
  },
  "고추": {
    "en": "red pepper",
    "jamo": "ㄱ^ㅗ|ㅊ^ㅜ"
  },
  "곤란": {
    "en": "difficulty",
    "jamo": "ㄱ^ㅗ^ㄴ|ㄹ^ㅏ^ㄴ"
  },
  "골목": {
    "en": "alley",
    "ja": "ろじ【路地】。よこちょう【横町・横丁】",
    "fr": "ruelle, allée, passage",
    "es": "callejón",
    "zh": "巷子，胡同",
    "vi": "con hẻm, ngõ, hẻm, ngách",
    "th": "ตรอก, ซอก, ซอย",
    "id": "gang lorong",
    "ru": "переулок",
    "ar": "زقاق",
    "mn": "гудамж",
    "jamo": "ㄱ^ㅗ^ㄹ|ㅁ^ㅗ^ㄱ"
  },
  "골프": {
    "en": "golf",
    "ja": "ゴルフ",
    "fr": "golf",
    "es": "golf",
    "zh": "高尔夫，高尔夫球",
    "vi": "môn đánh gôn",
    "th": "กอล์ฟ, กีฬากอล์ฟ",
    "id": "golf",
    "ru": "гольф",
    "ar": "الجولف",
    "mn": "гольф",
    "jamo": "ㄱ^ㅗ^ㄹ|ㅍ^ㅡ"
  },
  "공간": {
    "en": "space",
    "jamo": "ㄱ^ㅗ^ㅇ|ㄱ^ㅏ^ㄴ"
  },
  "공공": {
    "en": "public",
    "jamo": "ㄱ^ㅗ^ㅇ|ㄱ^ㅗ^ㅇ"
  },
  "공동": {
    "en": "joint",
    "jamo": "ㄱ^ㅗ^ㅇ|ㄷ^ㅗ^ㅇ"
  },
  "공식": {
    "en": "official; formula",
    "jamo": "ㄱ^ㅗ^ㅇ|ㅅ^ㅣ^ㄱ"
  },
  "공연": {
    "en": "show, public performance",
    "ja": "こうえん【公演】。じょうえん【上演】。じつえん【実演】",
    "fr": "représentation, séance",
    "es": "espectáculo, función",
    "zh": "演出，表演",
    "vi": "sự công diễn, sự biểu diễn",
    "th": "การแสดง, การละเล่น",
    "id": "pertunjukan, tontonan, persembahan",
    "ru": "представление",
    "ar": "عرض مسرحي",
    "mn": "тоглолт",
    "jamo": "ㄱ^ㅗ^ㅇ|ㅇ^ㅕ^ㄴ"
  },
  "공주": {
    "en": "princess",
    "jamo": "ㄱ^ㅗ^ㅇ|ㅈ^ㅜ"
  },
  "공통": {
    "en": "common",
    "jamo": "ㄱ^ㅗ^ㅇ|ㅌ^ㅗ^ㅇ"
  },
  "과로": {
    "en": "overwork",
    "jamo": "ㄱ^ㅗ+ㅏ|ㄹ^ㅗ"
  },
  "과목": {
    "en": "(class) subject",
    "jamo": "ㄱ^ㅗ+ㅏ|ㅁ^ㅗ^ㄱ"
  },
  "과학": {
    "en": "science",
    "jamo": "ㄱ^ㅗ+ㅏ|ㅎ^ㅏ^ㄱ"
  },
  "관람": {
    "en": "viewing",
    "jamo": "ㄱ^ㅗ+ㅏ^ㄴ|ㄹ^ㅏ^ㅁ"
  },
  "관련": {
    "en": "relation",
    "jamo": "ㄱ^ㅗ+ㅏ^ㄴ|ㄹ^ㅕ^ㄴ"
  },
  "관찰": {
    "en": "observation",
    "jamo": "ㄱ^ㅗ+ㅏ^ㄴ|ㅊ^ㅏ^ㄹ"
  },
  "교포": {
    "en": "overseas resident",
    "ja": "きょうほう【僑胞】",
    "fr": "ressortissant(e) coréen(ne)",
    "es": "compatriota, connacional residente en el extranjero",
    "zh": "侨胞",
    "vi": "kiểu bào",
    "th": "ชาวโพ้นทะเล",
    "id": "penduduk Korea di luar negeri",
    "ru": "зарубежный соотечественник",
    "ar": "مواطن مقيم في الخارج",
    "mn": "гадаадад амьдарч буй Солонгос хүн, нэг үндэстэн, эх орон нэгтэн, нэг орны хүн",
    "jamo": "ㄱ^ㅛ|ㅍ^ㅗ"
  },
  "구멍": {
    "en": "hole",
    "jamo": "ㄱ^ㅜ|ㅁ^ㅓ^ㅇ"
  },
  "구역": {
    "en": "zone, area",
    "ja": "くいき【区域】",
    "fr": "zone, région, district, circonscription, secteur, quartier",
    "es": "distrito",
    "zh": "区域",
    "vi": "khu vực",
    "th": "บริเวณ, เขต, แถบ, แถว",
    "id": "wilayah",
    "ru": "зона",
    "ar": "منطقة",
    "mn": "бүс, бүс газар",
    "jamo": "ㄱ^ㅜ|ㅇ^ㅕ^ㄱ"
  },
  "구입": {
    "en": "purchase",
    "jamo": "ㄱ^ㅜ|ㅇ^ㅣ^ㅂ"
  },
  "국물": {
    "en": "soup bowl",
    "ja": "しる・つゆ【汁】。だし【出し】",
    "fr": "bouillon, jus",
    "es": "sopa, caldo",
    "zh": "汤水，汤汁",
    "vi": "nước canh",
    "th": "น้ำแกง, น้ำซุป",
    "id": "kuah",
    "ru": "бульон",
    "ar": "ماء الحساء",
    "mn": "шөл",
    "jamo": "ㄱ^ㅜ^ㄱ|ㅁ^ㅜ^ㄹ"
  },
  "국어": {
    "en": "Korean language",
    "jamo": "ㄱ^ㅜ^ㄱ|ㅇ^ㅓ"
  },
  "그녀": {
    "en": "girlfriend",
    "jamo": "ㄱ^ㅡ|ㄴ^ㅕ"
  },
  "그램": {
    "en": "gram",
    "jamo": "ㄱ^ㅡ|ㄹ^ㅏ+ㅣ^ㅁ"
  },
  "그룹": {
    "en": "group",
    "jamo": "ㄱ^ㅡ|ㄹ^ㅜ^ㅂ"
  },
  "근육": {
    "en": "muscle",
    "jamo": "ㄱ^ㅡ^ㄴ|ㅇ^ㅠ^ㄱ"
  },
  "기념": {
    "en": "commemoration",
    "jamo": "ㄱ^ㅣ|ㄴ^ㅕ^ㅁ"
  },
  "기초": {
    "en": "basic, fundamental",
    "jamo": "ㄱ^ㅣ|ㅊ^ㅗ"
  },
  "꽂다": {
    "en": "put",
    "jamo": "ㄲ^ㅗ^ㅈ|ㄷ^ㅏ"
  },
  "끌다": {
    "en": "to pull",
    "jamo": "ㄲ^ㅡ^ㄹ|ㄷ^ㅏ"
  },
  "끝내": {
    "en": "finally, eventually",
    "jamo": "ㄲ^ㅡ^ㅌ|ㄴ^ㅏ+ㅣ"
  },
  "낙엽": {
    "en": "fallen leaves",
    "jamo": "ㄴ^ㅏ^ㄱ|ㅇ^ㅕ^ㅂ"
  },
  "난방": {
    "en": "heater",
    "jamo": "ㄴ^ㅏ^ㄴ|ㅂ^ㅏ^ㅇ"
  },
  "낡다": {
    "en": "to be old",
    "jamo": "ㄴ^ㅏ^ㄺ|ㄷ^ㅏ"
  },
  "남미": {
    "en": "South America",
    "jamo": "ㄴ^ㅏ^ㅁ|ㅁ^ㅣ"
  },
  "남부": {
    "en": "southern",
    "jamo": "ㄴ^ㅏ^ㅁ|ㅂ^ㅜ"
  },
  "냉방": {
    "en": "air conditioning",
    "jamo": "ㄴ^ㅏ+ㅣ^ㅇ|ㅂ^ㅏ^ㅇ"
  },
  "넓이": {
    "en": "area, width",
    "ja": "ひろさ【広さ】",
    "fr": "largeur",
    "es": "ancho, anchura",
    "zh": "宽度，幅",
    "vi": "chiều rộng, bề rộng",
    "th": "ความกว้าง, ขนาดกว้าง",
    "id": "luas, wilayah, ruang, cakupan",
    "ru": "ширина",
    "ar": "عرض",
    "mn": "өргөн, өргөн хэмжээний",
    "jamo": "ㄴ^ㅓ^ㄼ|ㅇ^ㅣ"
  },
  "다방": {
    "en": "tea house, coffee shop (old-style)",
    "jamo": "ㄷ^ㅏ|ㅂ^ㅏ^ㅇ"
  },
  "다행": {
    "en": "fortune, luck",
    "jamo": "ㄷ^ㅏ|ㅎ^ㅏ+ㅣ^ㅇ"
  },
  "단체": {
    "en": "group",
    "ja": "だんたい【団体】",
    "fr": "groupe, communauté, association, organisation, collectivité",
    "es": "grupo, agrupación, organización",
    "zh": "团体，集体，团伙",
    "vi": "tổ chức",
    "th": "กลุ่ม, คณะ, ทีม",
    "id": "organisasi, badan",
    "ru": "организация",
    "ar": "جماعة",
    "mn": "байгууллага, нэгдэл",
    "jamo": "ㄷ^ㅏ^ㄴ|ㅊ^ㅓ+ㅣ"
  },
  "당황": {
    "en": "embarrassment 9",
    "jamo": "ㄷ^ㅏ^ㅇ|ㅎ^ㅗ+ㅏ^ㅇ"
  },
  "대변": {
    "en": "feces, stool",
    "jamo": "ㄷ^ㅏ+ㅣ|ㅂ^ㅕ^ㄴ"
  },
  "대표": {
    "en": "representative",
    "jamo": "ㄷ^ㅏ+ㅣ|ㅍ^ㅛ"
  },
  "동료": {
    "en": "colleague",
    "jamo": "ㄷ^ㅗ^ㅇ|ㄹ^ㅛ"
  },
  "동양": {
    "en": "eastern, orient",
    "jamo": "ㄷ^ㅗ^ㅇ|ㅇ^ㅑ^ㅇ"
  },
  "동창": {
    "en": "alumni",
    "ja": "どうそう【同窓】",
    "fr": "camarade d'école, compagnon d'études, condisciple",
    "es": "compañeros",
    "zh": "同学，校友，同窗",
    "vi": "cùng trường",
    "th": "เพื่อนร่วมสถาบัน, เพื่อนร่วมชั้นเรียน, เพื่อนเรียนห้องเดียวกัน",
    "id": "alumni",
    "ru": "товарищ по учёбе",
    "ar": "خريج من نفس المدرسة",
    "mn": "нэг сургуулийнхан",
    "jamo": "ㄷ^ㅗ^ㅇ|ㅊ^ㅏ^ㅇ"
  },
  "마침": {
    "en": "just happened to be",
    "jamo": "ㅁ^ㅏ|ㅊ^ㅣ^ㅁ"
  },
  "명함": {
    "en": "business card",
    "ja": "めいし【名刺】",
    "fr": "carte de visite",
    "es": "tarjeta personal",
    "zh": "名片",
    "vi": "danh thiếp",
    "th": "นามบัตร",
    "id": "kartu nama",
    "ru": "визитная карточка",
    "ar": "بطاقة تعريفية",
    "mn": "нэрийн хуудас",
    "jamo": "ㅁ^ㅕ^ㅇ|ㅎ^ㅏ^ㅁ"
  },
  "목표": {
    "en": "target, goal",
    "ja": "もくひょう【目標】",
    "fr": "objectif",
    "es": "objetivo, meta, fin",
    "zh": "目标",
    "vi": "mục tiêu",
    "th": "เป้าหมาย",
    "id": "sasaran, target",
    "ru": "цель",
    "ar": "مقصد",
    "mn": "зорилт",
    "jamo": "ㅁ^ㅗ^ㄱ|ㅍ^ㅛ"
  },
  "묘사": {
    "en": "description",
    "jamo": "ㅁ^ㅛ|ㅅ^ㅏ"
  },
  "문학": {
    "en": "literature",
    "jamo": "ㅁ^ㅜ^ㄴ|ㅎ^ㅏ^ㄱ"
  },
  "물약": {
    "en": "liquid medicine",
    "jamo": "ㅁ^ㅜ^ㄹ|ㅇ^ㅑ^ㄱ"
  },
  "발표": {
    "en": "announcement, presentation",
    "jamo": "ㅂ^ㅏ^ㄹ|ㅍ^ㅛ"
  },
  "버터": {
    "en": "butter",
    "jamo": "ㅂ^ㅓ|ㅌ^ㅓ"
  },
  "버튼": {
    "en": "button",
    "ja": "ボタン",
    "fr": "bouton, touche, déclencheur",
    "es": "botón",
    "zh": "按钮",
    "vi": "công tắc",
    "th": "ปุ่ม, สวิตช์",
    "id": "tombol",
    "ru": "кнопка",
    "ar": "زرّ كهربائي",
    "mn": "товч, товчлуур",
    "jamo": "ㅂ^ㅓ|ㅌ^ㅡ^ㄴ"
  },
  "벨트": {
    "en": "belt",
    "jamo": "ㅂ^ㅓ+ㅣ^ㄹ|ㅌ^ㅡ"
  },
  "복통": {
    "en": "stomach ache",
    "jamo": "ㅂ^ㅗ^ㄱ|ㅌ^ㅗ^ㅇ"
  },
  "샴푸": {
    "en": "shampoo",
    "jamo": "ㅅ^ㅑ^ㅁ|ㅍ^ㅜ"
  },
  "석유": {
    "en": "oil, petroleum",
    "ja": "せきゆ【石油】",
    "fr": "pétrole",
    "es": "petróleo",
    "zh": "石油",
    "vi": "dầu hỏa, dầu lửa",
    "th": "น้ำมัน",
    "id": "minyak bumi, petroleum",
    "ru": "нефть",
    "ar": "نفط، بترول",
    "mn": "газрын тос, нефть",
    "jamo": "ㅅ^ㅓ^ㄱ|ㅇ^ㅠ"
  },
  "선약": {
    "en": "prior appointment",
    "jamo": "ㅅ^ㅓ^ㄴ|ㅇ^ㅑ^ㄱ"
  },
  "슈퍼": {
    "en": "supermarket",
    "jamo": "ㅅ^ㅠ|ㅍ^ㅓ"
  },
  "실컷": {
    "en": "as much as one wants",
    "ja": "おもうぞんぶん【思う存分】。おもいきり【思い切り】",
    "fr": "énormément",
    "es": "mucho, en gran cantidad, abundantemente, en abundancia, hasta hartarse",
    "zh": "尽情，充分",
    "vi": "thỏa thích, thoải mái",
    "th": "อย่างเต็มที่, เต็มที่",
    "id": "semaunya, sesukanya",
    "ru": "вдоволь",
    "ar": "على نحو مرض",
    "mn": "ханатал, ханатлаа",
    "jamo": "ㅅ^ㅣ^ㄹ|ㅋ^ㅓ^ㅅ"
  },
  "야경": {
    "en": "night view",
    "jamo": "ㅇ^ㅑ|ㄱ^ㅕ^ㅇ"
  },
  "어휴": {
    "en": "sigh, ugh",
    "jamo": "ㅇ^ㅓ|ㅎ^ㅠ"
  },
  "여유": {
    "en": "spare, margin",
    "jamo": "ㅇ^ㅕ|ㅇ^ㅠ"
  },
  "유럽": {
    "en": "Europe",
    "jamo": "ㅇ^ㅠ|ㄹ^ㅓ^ㅂ"
  },
  "재킷": {
    "en": "jacket",
    "ja": "ジャケット",
    "fr": "veste, veston, jaquette",
    "es": "chaqueta, americana, saco",
    "zh": "外套",
    "vi": "áo khoác",
    "th": "เสื้อแจ๊คเก็ต, เสื้อนอก",
    "id": "jaket",
    "ru": "жакет",
    "ar": "سترة، جاكيت",
    "mn": "хүрэм, жакет",
    "jamo": "ㅈ^ㅏ+ㅣ|ㅋ^ㅣ^ㅅ"
  },
  "좌석": {
    "en": "seat",
    "jamo": "ㅈ^ㅗ+ㅏ|ㅅ^ㅓ^ㄱ"
  },
  "중순": {
    "en": "mid-month",
    "jamo": "ㅈ^ㅜ^ㅇ|ㅅ^ㅜ^ㄴ"
  },
  "중식": {
    "en": "Chinese cuisine",
    "jamo": "ㅈ^ㅜ^ㅇ|ㅅ^ㅣ^ㄱ"
  },
  "코스": {
    "en": "course, route",
    "jamo": "ㅋ^ㅗ|ㅅ^ㅡ"
  },
  "코피": {
    "en": "nosebleed",
    "jamo": "ㅋ^ㅗ|ㅍ^ㅣ"
  },
  "큰길": {
    "en": "main road",
    "ja": "おおどおり【大通り】",
    "fr": "avenue, boulevard, allée large, grand-rue",
    "es": "(No hay expresión equivalente)",
    "zh": "大道",
    "vi": "đường to, đường lớn",
    "th": "ถนนใหญ่, ถนนกว้าง",
    "id": "jalan besar",
    "ru": "большая дорога",
    "ar": "طريق كبير",
    "mn": "том зам, их зам",
    "jamo": "ㅋ^ㅡ^ㄴ|ㄱ^ㅣ^ㄹ"
  },
  "키스": {
    "en": "kiss",
    "jamo": "ㅋ^ㅣ|ㅅ^ㅡ"
  },
  "표정": {
    "en": "facial expression",
    "ja": "ひょうじょう【表情】",
    "fr": "expression, air, figure, mine",
    "es": "expresión facial",
    "zh": "表情，脸色",
    "vi": "sự biểu lộ, vẻ mặt",
    "th": "สีหน้า, ลักษณะสีหน้าที่แสดงออก",
    "id": "raut wajah, air muka",
    "ru": "выражение лица",
    "ar": "تعبير وجهيّ",
    "mn": "нүүрний хувирал",
    "jamo": "ㅍ^ㅛ|ㅈ^ㅓ^ㅇ"
  },
  "품질": {
    "en": "quality",
    "jamo": "ㅍ^ㅜ^ㅁ|ㅈ^ㅣ^ㄹ"
  },
  "학자": {
    "en": "scholar",
    "jamo": "ㅎ^ㅏ^ㄱ|ㅈ^ㅏ"
  },
  "한자": {
    "en": "Chinese character",
    "jamo": "ㅎ^ㅏ^ㄴ|ㅈ^ㅏ"
  },
  "합계": {
    "en": "total, sum",
    "jamo": "ㅎ^ㅏ^ㅂ|ㄱ^ㅕ+ㅣ"
  },
  "해결": {
    "en": "solution",
    "jamo": "ㅎ^ㅏ+ㅣ|ㄱ^ㅕ^ㄹ"
  },
  "허락": {
    "en": "permission",
    "jamo": "ㅎ^ㅓ|ㄹ^ㅏ^ㄱ"
  },
  "현관": {
    "en": "entrance",
    "jamo": "ㅎ^ㅕ^ㄴ|ㄱ^ㅗ+ㅏ^ㄴ"
  },
  "현대": {
    "en": "present-day",
    "jamo": "ㅎ^ㅕ^ㄴ|ㄷ^ㅏ+ㅣ"
  },
  "호두": {
    "en": "walnut",
    "ja": "くるみ【胡桃】",
    "fr": "noix",
    "es": "nuez",
    "zh": "核桃，胡桃",
    "vi": "quả óc chó",
    "th": "ผลวอลนัต, ลูกมันฮ่อ",
    "id": "kenari",
    "ru": "грецкий орех",
    "ar": "جوز",
    "mn": "хушга",
    "jamo": "ㅎ^ㅗ|ㄷ^ㅜ"
  },
  "화재": {
    "en": "fire",
    "jamo": "ㅎ^ㅗ+ㅏ|ㅈ^ㅏ+ㅣ"
  },
  "확인": {
    "en": "confirmation",
    "jamo": "ㅎ^ㅗ+ㅏ^ㄱ|ㅇ^ㅣ^ㄴ"
  },
  "환율": {
    "en": "exchange rate",
    "jamo": "ㅎ^ㅗ+ㅏ^ㄴ|ㅇ^ㅠ^ㄹ"
  },
  "활동": {
    "en": "activities",
    "ja": "かつどう【活動】",
    "fr": "activité",
    "es": "Actividad  , movimiento",
    "zh": "活动",
    "vi": "hoạt động",
    "th": "การเคลื่อนไหว, การกระทำ, การทำกิจกรรม",
    "id": "tindakan, aktivitas, kegiatan",
    "ru": "действие",
    "ar": "حركة",
    "mn": "хөдөлгөөн, үйл ажиллагаа",
    "jamo": "ㅎ^ㅗ+ㅏ^ㄹ|ㄷ^ㅗ^ㅇ"
  },
  "활짝": {
    "en": "in full bloom",
    "ja": "すっかり",
    "fr": "(Pas d'expression équivalente)",
    "es": "por completo, de par en par",
    "zh": "(无对应词汇)",
    "vi": "(mở) toang. toang hoác",
    "th": "อ้า, กว้าง, เต็มที่",
    "id": "lebar",
    "ru": "(нет эквивалента)",
    "ar": "بسِعة، باتّساع",
    "mn": "цэлийтэл, бүрэн, төгс",
    "jamo": "ㅎ^ㅗ+ㅏ^ㄹ|ㅉ^ㅏ^ㄱ"
  },
  "회비": {
    "en": "membership fee",
    "jamo": "ㅎ^ㅗ+ㅣ|ㅂ^ㅣ"
  },
  "회식": {
    "en": "group dinner, drinking party",
    "jamo": "ㅎ^ㅗ+ㅣ|ㅅ^ㅣ^ㄱ"
  },
  "횟수": {
    "en": "number of times",
    "jamo": "ㅎ^ㅗ+ㅣ^ㅅ|ㅅ^ㅜ"
  },
  "효과": {
    "en": "effect",
    "ja": "こうか【効果】",
    "fr": "effet",
    "es": "efecto, eficacia",
    "zh": "效果，功效，效力，成效，作用",
    "vi": "hiệu quả",
    "th": "ผลที่ได้รับ, ผลประโยชน์, ประสิทธิผล, ประสิทธิภาพ",
    "id": "khasiat, hasil",
    "ru": "эффект",
    "ar": "فعالية",
    "mn": "үр нөлөө, үр дагавар",
    "jamo": "ㅎ^ㅛ|ㄱ^ㅗ+ㅏ"
  },
  "후반": {
    "en": "later half",
    "jamo": "ㅎ^ㅜ|ㅂ^ㅏ^ㄴ"
  },
  "후식": {
    "en": "dessert",
    "jamo": "ㅎ^ㅜ|ㅅ^ㅣ^ㄱ"
  },
  "후추": {
    "en": "pepper",
    "jamo": "ㅎ^ㅜ|ㅊ^ㅜ"
  },
  "후회": {
    "en": "regret",
    "jamo": "ㅎ^ㅜ|ㅎ^ㅗ+ㅣ"
  },
  "휴대": {
    "en": "mobile",
    "jamo": "ㅎ^ㅠ|ㄷ^ㅏ+ㅣ"
  },
  "휴식": {
    "en": "rest",
    "jamo": "ㅎ^ㅠ|ㅅ^ㅣ^ㄱ"
  },
  "휴학": {
    "en": "leave of absence (from school)",
    "jamo": "ㅎ^ㅠ|ㅎ^ㅏ^ㄱ"
  },
  "희생": {
    "en": "sacrifice",
    "jamo": "ㅎ^ㅡ+ㅣ|ㅅ^ㅏ+ㅣ^ㅇ"
  },
  "가뭄": {
    "en": "drought",
    "jamo": "ㄱ^ㅏ|ㅁ^ㅜ^ㅁ"
  },
  "가치": {
    "en": "value",
    "jamo": "ㄱ^ㅏ|ㅊ^ㅣ"
  },
  "각국": {
    "en": "each country",
    "jamo": "ㄱ^ㅏ^ㄱ|ㄱ^ㅜ^ㄱ"
  },
  "각오": {
    "en": "determination, resolve",
    "jamo": "ㄱ^ㅏ^ㄱ|ㅇ^ㅗ"
  },
  "각종": {
    "en": "various",
    "jamo": "ㄱ^ㅏ^ㄱ|ㅈ^ㅗ^ㅇ"
  },
  "-간": {
    "en": "for (a period of), between (suffix)",
    "jamo": "ㄱ^ㅏ^ㄴ"
  },
  "간격": {
    "en": "interval",
    "jamo": "ㄱ^ㅏ^ㄴ|ㄱ^ㅕ^ㄱ"
  },
  "갈등": {
    "en": "conflict",
    "jamo": "ㄱ^ㅏ^ㄹ|ㄷ^ㅡ^ㅇ"
  },
  "감소": {
    "en": "reduction",
    "jamo": "ㄱ^ㅏ^ㅁ|ㅅ^ㅗ"
  },
  "감시": {
    "en": "surveillance, watch",
    "jamo": "ㄱ^ㅏ^ㅁ|ㅅ^ㅣ"
  },
  "감옥": {
    "en": "prison",
    "ja": "かんごく【監獄】",
    "fr": "prison",
    "es": "cárcel, prisión, penitenciaría",
    "zh": "监狱",
    "vi": "nhà tù, nhà giam, nhà lao",
    "th": "คุก, เรือนจำ, ตะราง",
    "id": "penjara",
    "ru": "тюрьма",
    "ar": "سجن",
    "mn": "шорон, гяндан",
    "jamo": "ㄱ^ㅏ^ㅁ|ㅇ^ㅗ^ㄱ"
  },
  "감히": {
    "en": "daringly, boldly",
    "jamo": "ㄱ^ㅏ^ㅁ|ㅎ^ㅣ"
  },
  "강요": {
    "en": "coercion, forcing",
    "jamo": "ㄱ^ㅏ^ㅇ|ㅇ^ㅛ"
  },
  "강제": {
    "en": "force, compulsion",
    "jamo": "ㄱ^ㅏ^ㅇ|ㅈ^ㅓ+ㅣ"
  },
  "개념": {
    "en": "concept",
    "ja": "がいねん【概念】。コンセプト",
    "fr": "notion, concept",
    "es": "concepto, noción",
    "zh": "概念，观念",
    "vi": "khái niệm",
    "th": "มโนทัศน์, มโนภาพ, ความคิดเห็น, กรอบความคิด",
    "id": "konsep, gagasan",
    "ru": "понятие",
    "ar": "فكرة عامّة ، مفهوم",
    "mn": "ойлголт, ухагдахуун",
    "jamo": "ㄱ^ㅏ+ㅣ|ㄴ^ㅕ^ㅁ"
  },
  "개별": {
    "en": "individual, separate",
    "jamo": "ㄱ^ㅏ+ㅣ|ㅂ^ㅕ^ㄹ"
  },
  "개최": {
    "en": "hosting (an event)",
    "jamo": "ㄱ^ㅏ+ㅣ|ㅊ^ㅗ+ㅣ"
  },
  "개혁": {
    "en": "reform",
    "jamo": "ㄱ^ㅏ+ㅣ|ㅎ^ㅕ^ㄱ"
  },
  "거래": {
    "en": "transaction",
    "jamo": "ㄱ^ㅓ|ㄹ^ㅏ+ㅣ"
  },
  "거미": {
    "en": "spider",
    "ja": "クモ",
    "fr": "araignée",
    "es": "araña",
    "zh": "蜘蛛",
    "vi": "con nhện",
    "th": "แมงมุม",
    "id": "laba-laba",
    "ru": "паук",
    "ar": "عنكبوت",
    "mn": "аалз",
    "jamo": "ㄱ^ㅓ|ㅁ^ㅣ"
  },
  "거지": {
    "en": "beggar",
    "jamo": "ㄱ^ㅓ|ㅈ^ㅣ"
  },
  "거짓": {
    "en": "lies",
    "jamo": "ㄱ^ㅓ|ㅈ^ㅣ^ㅅ"
  },
  "건너": {
    "en": "across",
    "ja": "むこう【向こう】",
    "fr": "autre côté",
    "es": "otro lado",
    "zh": "对面",
    "vi": "phía đối diện",
    "th": "ฝั่งตรงข้าม, ฝ่ายตรงข้าม, ด้านตรงข้าม, ตรงกันข้าม, ตรงข้าม",
    "id": "seberang",
    "ru": "через",
    "ar": "عبرَ ، قبالَ ، مقابلَ ، الجانب المواجه (أو المقابل أو المعاكس)",
    "mn": "эсрэг тал, цаад тал, өмнөөс харсан",
    "jamo": "ㄱ^ㅓ^ㄴ|ㄴ^ㅓ"
  },
  "건축": {
    "en": "architecture",
    "jamo": "ㄱ^ㅓ^ㄴ|ㅊ^ㅜ^ㄱ"
  },
  "격려": {
    "en": "encouragement",
    "jamo": "ㄱ^ㅕ^ㄱ|ㄹ^ㅕ"
  },
  "견해": {
    "en": "view, opinion",
    "jamo": "ㄱ^ㅕ^ㄴ|ㅎ^ㅏ+ㅣ"
  },
  "결코": {
    "en": "never",
    "jamo": "ㄱ^ㅕ^ㄹ|ㅋ^ㅗ"
  },
  "경쟁": {
    "en": "competition",
    "jamo": "ㄱ^ㅕ^ㅇ|ㅈ^ㅏ+ㅣ^ㅇ"
  },
  "경향": {
    "en": "tendency",
    "ja": "けいこう【傾向】",
    "fr": "tendance, inclination, penchant, disposition, prédisposition, pente, propension",
    "es": "tendencia, inclinación",
    "zh": "倾向",
    "vi": "khuynh hướng, xu hướng",
    "th": "แนว, แนวโน้ม, ทิศทาง, กระแส",
    "id": "kecenderungan",
    "ru": "тенденция",
    "ar": "نزعة",
    "mn": "хандлага, чиг хандлага, чиглэл",
    "jamo": "ㄱ^ㅕ^ㅇ|ㅎ^ㅑ^ㅇ"
  },
  "계층": {
    "en": "hierarchy",
    "jamo": "ㄱ^ㅕ+ㅣ|ㅊ^ㅡ^ㅇ"
  },
  "고급": {
    "en": "high grade",
    "jamo": "ㄱ^ㅗ|ㄱ^ㅡ^ㅂ"
  },
  "고등": {
    "en": "high-level",
    "ja": "こうとう【高等】",
    "fr": "haut niveau, niveau supérieur",
    "es": "clase superior, grado alto, calidad superior, alta calidad, categoría superior",
    "zh": "高等，高级",
    "vi": "bậc cao",
    "th": "ระดับสูง, ชั้นสูง, ขั้นสูง, ระดับแนวหน้า, ชั้นหนึ่ง",
    "id": "tingkat atas, menengah atas",
    "ru": "высший класс",
    "ar": "تقدُّم، تطوّر",
    "mn": "дээд зэрэглэл, өндөр зэрэглэл",
    "jamo": "ㄱ^ㅗ|ㄷ^ㅡ^ㅇ"
  },
  "고요": {
    "en": "quietness, stillness",
    "jamo": "ㄱ^ㅗ|ㅇ^ㅛ"
  },
  "고유": {
    "en": "unique, native",
    "jamo": "ㄱ^ㅗ|ㅇ^ㅠ"
  },
  "고정": {
    "en": "fixed, stationary",
    "jamo": "ㄱ^ㅗ|ㅈ^ㅓ^ㅇ"
  },
  "고집": {
    "en": "persistence",
    "jamo": "ㄱ^ㅗ|ㅈ^ㅣ^ㅂ"
  },
  "고층": {
    "en": "upper floors",
    "ja": "こうそう【高層】",
    "fr": "étage élevé, couche supérieure",
    "es": "piso superior",
    "zh": "高层",
    "vi": "tầng cao",
    "th": "ชั้นสูง, ชั้นบน, ตึกสูง, อาคารสูง",
    "id": "lantai atas",
    "ru": "верхний этаж",
    "ar": "طابق عال",
    "mn": "дээд давхар",
    "jamo": "ㄱ^ㅗ|ㅊ^ㅡ^ㅇ"
  },
  "고통": {
    "en": "pain",
    "jamo": "ㄱ^ㅗ|ㅌ^ㅗ^ㅇ"
  },
  "곧잘": {
    "en": "quite well",
    "jamo": "ㄱ^ㅗ^ㄷ|ㅈ^ㅏ^ㄹ"
  },
  "과속": {
    "en": "speed violation",
    "jamo": "ㄱ^ㅗ+ㅏ|ㅅ^ㅗ^ㄱ"
  },
  "괜히": {
    "en": "for no reason",
    "jamo": "ㄱ^ㅗ+ㅐ^ㄴ|ㅎ^ㅣ"
  },
  "교내": {
    "en": "within school",
    "jamo": "ㄱ^ㅛ|ㄴ^ㅏ+ㅣ"
  },
  "교류": {
    "en": "exchange, interaction",
    "jamo": "ㄱ^ㅛ|ㄹ^ㅠ"
  },
  "교복": {
    "en": "school uniform",
    "jamo": "ㄱ^ㅛ|ㅂ^ㅗ^ㄱ"
  },
  "교양": {
    "en": "refinement",
    "ja": "きょうよう【教養】",
    "fr": "culture, éducation, instruction",
    "es": "cultura, educación, refinamiento",
    "zh": "教养，涵养",
    "vi": "học thức, tri thức, học vấn, kiến thức đại cương, kiến thức chung",
    "th": "การขัดเกลา, การฝึกฝน, การอบรม, การศึกษา, การปลูกฝัง, การอบรมสั่งสอน, ความรู้พื้นฐาน, คุณสมบัติที่จำเป็นพื้นฐาน, ความเพียบพร้อมด้านความรู้พื้นฐาน",
    "id": "pengetahuan umum",
    "ru": "образованность",
    "ar": "ثقافة",
    "mn": "соёл, хүмүүжил, боловсрол",
    "jamo": "ㄱ^ㅛ|ㅇ^ㅑ^ㅇ"
  },
  "교체": {
    "en": "substitute, change",
    "jamo": "ㄱ^ㅛ|ㅊ^ㅓ+ㅣ"
  },
  "국회": {
    "en": "National Assembly",
    "jamo": "ㄱ^ㅜ^ㄱ|ㅎ^ㅗ+ㅣ"
  },
  "굳이": {
    "en": "insistently, needlessly",
    "jamo": "ㄱ^ㅜ^ㄷ|ㅇ^ㅣ"
  },
  "권력": {
    "en": "power, authority",
    "jamo": "ㄱ^ㅜ+ㅓ^ㄴ|ㄹ^ㅕ^ㄱ"
  },
  "권리": {
    "en": "right (entitlement)",
    "jamo": "ㄱ^ㅜ+ㅓ^ㄴ|ㄹ^ㅣ"
  },
  "권유": {
    "en": "recommendation, persuasion",
    "jamo": "ㄱ^ㅜ+ㅓ^ㄴ|ㅇ^ㅠ"
  },
  "규모": {
    "en": "scale, size",
    "jamo": "ㄱ^ㅠ|ㅁ^ㅗ"
  },
  "규정": {
    "en": "regulation",
    "ja": "きてい【規定】。きまり【決まり】",
    "fr": "stipulation, prescription, règle, ordonnance",
    "es": "norma, reglamento, regulación",
    "zh": "规定，规章",
    "vi": "quy định",
    "th": "กฎ, กฎเกณฑ์, ระเบียบ, ข้อบังคับ, ข้อบัญญัติ, กฎข้อบังคับ, กติกา",
    "id": "ketentuan, peraturan",
    "ru": "правило",
    "ar": "تحديد",
    "mn": "тогтоосон дүрэм журам",
    "jamo": "ㄱ^ㅠ|ㅈ^ㅓ^ㅇ"
  },
  "균형": {
    "en": "balance",
    "ja": "きんこう【均衡】。バランス",
    "fr": "équilibre, impartialité",
    "es": "equilibrio",
    "zh": "平衡，均衡",
    "vi": "sự cân bằng",
    "th": "ความเสมอกัน, ดุลยภาพ, ดุลภาค, ดุล, สมดุล, ความเท่าเทียมกัน, สมส่วน",
    "id": "keseimbangan",
    "ru": "равновесие",
    "ar": "توازن",
    "mn": "тэнцвэр, жигд байдал",
    "jamo": "ㄱ^ㅠ^ㄴ|ㅎ^ㅕ^ㅇ"
  },
  "그늘": {
    "en": "shade",
    "jamo": "ㄱ^ㅡ|ㄴ^ㅡ^ㄹ"
  },
  "근래": {
    "en": "recent times",
    "jamo": "ㄱ^ㅡ^ㄴ|ㄹ^ㅏ+ㅣ"
  },
  "금년": {
    "en": "this year",
    "jamo": "ㄱ^ㅡ^ㅁ|ㄴ^ㅕ^ㄴ"
  },
  "급히": {
    "en": "suddenly",
    "jamo": "ㄱ^ㅡ^ㅂ|ㅎ^ㅣ"
  },
  "기록": {
    "en": "record",
    "jamo": "ㄱ^ㅣ|ㄹ^ㅗ^ㄱ"
  },
  "기혼": {
    "en": "married",
    "jamo": "ㄱ^ㅣ|ㅎ^ㅗ^ㄴ"
  },
  "기획": {
    "en": "planning",
    "jamo": "ㄱ^ㅣ|ㅎ^ㅗ+ㅣ^ㄱ"
  },
  "기후": {
    "en": "climate",
    "jamo": "ㄱ^ㅣ|ㅎ^ㅜ"
  },
  "나름": {
    "en": "depends on",
    "jamo": "ㄴ^ㅏ|ㄹ^ㅡ^ㅁ"
  },
  "답변": {
    "en": "answer",
    "jamo": "ㄷ^ㅏ^ㅂ|ㅂ^ㅕ^ㄴ"
  },
  "대량": {
    "en": "mass, a large amount",
    "ja": "たいりょう【大量】",
    "fr": "grande quantité, grand volume",
    "es": "cantidad en masa, gran número, masivo",
    "zh": "大量，批量",
    "vi": "số lượng lớn, đại lượng",
    "th": "ปริมาณมหาศาล",
    "id": "jumlah besar",
    "ru": "масса",
    "ar": "كمية كبيرة",
    "mn": "их хэмжээ",
    "jamo": "ㄷ^ㅏ+ㅣ|ㄹ^ㅑ^ㅇ"
  },
  "덕택": {
    "en": "indebtedness",
    "ja": "おかげ【御陰・御蔭】",
    "fr": "faveur, grâce, bienfaisance, bienfait, aide, assistance",
    "es": "gracia, ayuda, apoyo",
    "zh": "多亏，(托……的)福",
    "vi": "nhờ vào",
    "th": "ด้วยความช่วยเหลือ, เป็นเพราะการอุปถัมภ์ของ..., เป็นเพราะบุญคุณของ...",
    "id": "dukungan, berkat",
    "ru": "одолжение",
    "ar": "فضل",
    "mn": "ач тус, ивээл, ач буян",
    "jamo": "ㄷ^ㅓ^ㄱ|ㅌ^ㅏ+ㅣ^ㄱ"
  },
  "동포": {
    "en": "compatriot",
    "ja": "どうほう【同胞】",
    "fr": "compatriote",
    "es": "compatriota, conciudadano, paisano, hermano",
    "zh": "同胞",
    "vi": "đồng bào",
    "th": "พี่น้องร่วมชาติ, พี่น้องร่วมแผ่นดิน",
    "id": "sebangsa",
    "ru": "соотечественник",
    "ar": "مواطن",
    "mn": "нэг үндэстэн, ахан дүүс, эх орон нэгтэн",
    "jamo": "ㄷ^ㅗ^ㅇ|ㅍ^ㅗ"
  },
  "뒤편": {
    "en": "the back side",
    "jamo": "ㄷ^ㅜ+ㅣ|ㅍ^ㅕ^ㄴ"
  },
  "땅콩": {
    "en": "peanuts",
    "ja": "らっかせい【落花生】。ピーナツ",
    "fr": "cacahouète, cacahuète, arachide",
    "es": "maní, cacahuete",
    "zh": "花生",
    "vi": "lạc, đậu phộng",
    "th": "ถั่วลิสง",
    "id": "kacang tanah",
    "ru": "земляной орех",
    "ar": "فول سودانيّ",
    "mn": "газрын самар",
    "jamo": "ㄸ^ㅏ^ㅇ|ㅋ^ㅗ^ㅇ"
  },
  "뜻밖": {
    "en": "unexpected",
    "jamo": "ㄸ^ㅡ^ㅅ|ㅂ^ㅏ^ㄲ"
  },
  "리터": {
    "en": "liter",
    "jamo": "ㄹ^ㅣ|ㅌ^ㅓ"
  },
  "말투": {
    "en": "the way one speaks",
    "jamo": "ㅁ^ㅏ^ㄹ|ㅌ^ㅜ"
  },
  "몸통": {
    "en": "torso, trunk",
    "jamo": "ㅁ^ㅗ^ㅁ|ㅌ^ㅗ^ㅇ"
  },
  "바싹": {
    "en": "closely, tightly",
    "jamo": "ㅂ^ㅏ|ㅆ^ㅏ^ㄱ"
  },
  "박다": {
    "en": "hammer",
    "ja": "うつ【打つ】。うちこむ【打ち込む】。しめる【締める】",
    "fr": "enfoncer, planter",
    "es": "meter, clavar, poner",
    "zh": "钉",
    "vi": "đóng",
    "th": "ตอก, ปัก",
    "id": "menancap, memaku",
    "ru": "забивать",
    "ar": "يدق",
    "mn": "хадах",
    "jamo": "ㅂ^ㅏ^ㄱ|ㄷ^ㅏ"
  },
  "박스": {
    "en": "box",
    "ja": "ボックス。はこ【箱】",
    "fr": "boîte, caisse, carton",
    "es": "caja",
    "zh": "盒子，箱子",
    "vi": "thùng",
    "th": "กล่อง, ลัง",
    "id": "kotak",
    "ru": "коробка",
    "ar": "صندوق",
    "mn": "хайрцаг",
    "jamo": "ㅂ^ㅏ^ㄱ|ㅅ^ㅡ"
  },
  "반값": {
    "en": "half price",
    "jamo": "ㅂ^ㅏ^ㄴ|ㄱ^ㅏ^ㅄ"
  },
  "반품": {
    "en": "refund",
    "jamo": "ㅂ^ㅏ^ㄴ|ㅍ^ㅜ^ㅁ"
  },
  "발톱": {
    "en": "toenail",
    "ja": "あしゆびのつめ【足指の爪】",
    "fr": "ongle (de pied), griffe, serre",
    "es": "uña del pie",
    "zh": "趾甲 ，脚趾甲",
    "vi": "móng chân",
    "th": "เล็บเท้า",
    "id": "kuku jari kaki, kuku kaki",
    "ru": "коготь",
    "ar": "ظفر إصبع القدم",
    "mn": "хөлийн хумс",
    "jamo": "ㅂ^ㅏ^ㄹ|ㅌ^ㅗ^ㅂ"
  },
  "부품": {
    "en": "parts, components",
    "jamo": "ㅂ^ㅜ|ㅍ^ㅜ^ㅁ"
  },
  "분량": {
    "en": "quantity",
    "ja": "ぶんりょう【分量】",
    "fr": "(Pas d'expression équivalente)",
    "es": "cantidad, cuantía, dosis",
    "zh": "分量",
    "vi": "phân lượng",
    "th": "ปริมาณ",
    "id": "batas, ketentuan, dosis (jumlah, angka)",
    "ru": "доза",
    "ar": "كمية",
    "mn": "тоо, хэмжээ",
    "jamo": "ㅂ^ㅜ^ㄴ|ㄹ^ㅑ^ㅇ"
  },
  "분야": {
    "en": "field, area",
    "jamo": "ㅂ^ㅜ^ㄴ|ㅇ^ㅑ"
  },
  "분포": {
    "en": "distribution",
    "jamo": "ㅂ^ㅜ^ㄴ|ㅍ^ㅗ"
  },
  "불쾌": {
    "en": "displeasure",
    "jamo": "ㅂ^ㅜ^ㄹ|ㅋ^ㅗ+ㅐ"
  },
  "비판": {
    "en": "criticism",
    "jamo": "ㅂ^ㅣ|ㅍ^ㅏ^ㄴ"
  },
  "생략": {
    "en": "omission, deletion",
    "jamo": "ㅅ^ㅏ+ㅣ^ㅇ|ㄹ^ㅑ^ㄱ"
  },
  "절망": {
    "en": "despair",
    "jamo": "ㅈ^ㅓ^ㄹ|ㅁ^ㅏ^ㅇ"
  },
  "정면": {
    "en": "front side",
    "jamo": "ㅈ^ㅓ^ㅇ|ㅁ^ㅕ^ㄴ"
  },
  "조명": {
    "en": "lighting, illumination",
    "jamo": "ㅈ^ㅗ|ㅁ^ㅕ^ㅇ"
  },
  "주먹": {
    "en": "fist",
    "jamo": "ㅈ^ㅜ|ㅁ^ㅓ^ㄱ"
  },
  "주목": {
    "en": "attention",
    "jamo": "ㅈ^ㅜ|ㅁ^ㅗ^ㄱ"
  },
  "크림": {
    "en": "cream",
    "ja": "クリーム。にゅうし【乳脂】。なまクリーム【生クリーム】。クレーム",
    "fr": "crème",
    "es": "crema",
    "zh": "奶油",
    "vi": "kem",
    "th": "ครีม",
    "id": "krim",
    "ru": "сливки",
    "ar": "كريمة",
    "mn": "цөцгий",
    "jamo": "ㅋ^ㅡ|ㄹ^ㅣ^ㅁ"
  },
  "큰딸": {
    "en": "eldest daughter",
    "jamo": "ㅋ^ㅡ^ㄴ|ㄸ^ㅏ^ㄹ"
  },
  "큰집": {
    "en": "big uncle's house",
    "ja": "ほんけ【本家】",
    "fr": "famille du frère aîné du père",
    "es": "casa del tío mayor",
    "zh": "长房，老大家",
    "vi": "nhà bác trưởng",
    "th": "บ้านใหญ่",
    "id": "rumah anak sulung",
    "ru": "(нет эквивалента)",
    "ar": "بيت كبير، بيت عمّ أكبر",
    "mn": "голомт гэр, их гэр",
    "jamo": "ㅋ^ㅡ^ㄴ|ㅈ^ㅣ^ㅂ"
  },
  "푸다": {
    "en": "to scoop, to ladle",
    "jamo": "ㅍ^ㅜ|ㄷ^ㅏ"
  },
  "품다": {
    "en": "to hold, to embrace (a feeling)",
    "jamo": "ㅍ^ㅜ^ㅁ|ㄷ^ㅏ"
  },
  "하도": {
    "en": "too, excessively",
    "jamo": "ㅎ^ㅏ|ㄷ^ㅗ"
  },
  "한둘": {
    "en": "one or two",
    "jamo": "ㅎ^ㅏ^ㄴ|ㄷ^ㅜ^ㄹ"
  },
  "항의": {
    "en": "protest, objection",
    "jamo": "ㅎ^ㅏ^ㅇ|ㅇ^ㅡ+ㅣ"
  },
  "해당": {
    "en": "corresponding, applicable",
    "jamo": "ㅎ^ㅏ+ㅣ|ㄷ^ㅏ^ㅇ"
  },
  "해안": {
    "en": "coast",
    "ja": "かいがん【海岸】。うみべ【海辺】",
    "fr": "côte",
    "es": "costa, litoral",
    "zh": "海岸，海边",
    "vi": "bờ biển",
    "th": "ริมหาด, ชายหาด, ริมทะเล",
    "id": "pesisir pantai, tepi laut",
    "ru": "морской берег",
    "ar": "شاطئ البحر",
    "mn": "далайн хөвөө, далайн эрэг",
    "jamo": "ㅎ^ㅏ+ㅣ|ㅇ^ㅏ^ㄴ"
  },
  "행위": {
    "en": "act, conduct",
    "jamo": "ㅎ^ㅏ+ㅣ^ㅇ|ㅇ^ㅜ+ㅣ"
  },
  "허용": {
    "en": "permission, allowance",
    "jamo": "ㅎ^ㅓ|ㅇ^ㅛ^ㅇ"
  },
  "허허": {
    "en": "ha ha (laughter)",
    "jamo": "ㅎ^ㅓ|ㅎ^ㅓ"
  },
  "현실": {
    "en": "reality",
    "jamo": "ㅎ^ㅕ^ㄴ|ㅅ^ㅣ^ㄹ"
  },
  "형성": {
    "en": "formation",
    "jamo": "ㅎ^ㅕ^ㅇ|ㅅ^ㅓ^ㅇ"
  },
  "확보": {
    "en": "securing, acquisition",
    "jamo": "ㅎ^ㅗ+ㅏ^ㄱ|ㅂ^ㅗ"
  },
  "확신": {
    "en": "conviction, confidence",
    "jamo": "ㅎ^ㅗ+ㅏ^ㄱ|ㅅ^ㅣ^ㄴ"
  },
  "환상": {
    "en": "illusion, fantasy",
    "jamo": "ㅎ^ㅗ+ㅏ^ㄴ|ㅅ^ㅏ^ㅇ"
  },
  "활용": {
    "en": "utilization",
    "jamo": "ㅎ^ㅗ+ㅏ^ㄹ|ㅇ^ㅛ^ㅇ"
  },
  "회복": {
    "en": "recovery",
    "jamo": "ㅎ^ㅗ+ㅣ|ㅂ^ㅗ^ㄱ"
  },
  "효도": {
    "en": "filial piety",
    "jamo": "ㅎ^ㅛ|ㄷ^ㅗ"
  },
  "후보": {
    "en": "candidate",
    "jamo": "ㅎ^ㅜ|ㅂ^ㅗ"
  },
  "훈련": {
    "en": "training",
    "jamo": "ㅎ^ㅜ^ㄴ|ㄹ^ㅕ^ㄴ"
  },
  "흐름": {
    "en": "flow, stream",
    "jamo": "ㅎ^ㅡ|ㄹ^ㅡ^ㅁ"
  },
  "흔히": {
    "en": "commonly, often",
    "jamo": "ㅎ^ㅡ^ㄴ|ㅎ^ㅣ"
  },
  "흡수": {
    "en": "absorption",
    "jamo": "ㅎ^ㅡ^ㅂ|ㅅ^ㅜ"
  },
  "흥미": {
    "en": "interest",
    "jamo": "ㅎ^ㅡ^ㅇ|ㅁ^ㅣ"
  },
  "흥분": {
    "en": "excitement",
    "jamo": "ㅎ^ㅡ^ㅇ|ㅂ^ㅜ^ㄴ"
  },
  "힘껏": {
    "en": "with all one's strength",
    "jamo": "ㅎ^ㅣ^ㅁ|ㄲ^ㅓ^ㅅ"
  },
  "가곡": {
    "en": "art song, lied",
    "jamo": "ㄱ^ㅏ|ㄱ^ㅗ^ㄱ"
  },
  "가닥": {
    "en": "strand",
    "jamo": "ㄱ^ㅏ|ㄷ^ㅏ^ㄱ"
  },
  "가면": {
    "en": "mask",
    "jamo": "ㄱ^ㅏ|ㅁ^ㅕ^ㄴ"
  },
  "가문": {
    "en": "family lineage",
    "jamo": "ㄱ^ㅏ|ㅁ^ㅜ^ㄴ"
  },
  "가중": {
    "en": "aggravation, addition",
    "jamo": "ㄱ^ㅏ|ㅈ^ㅜ^ㅇ"
  },
  "가축": {
    "en": "livestock",
    "jamo": "ㄱ^ㅏ|ㅊ^ㅜ^ㄱ"
  },
  "갈대": {
    "en": "reed",
    "jamo": "ㄱ^ㅏ^ㄹ|ㄷ^ㅏ+ㅣ"
  },
  "감격": {
    "en": "deep emotion",
    "jamo": "ㄱ^ㅏ^ㅁ|ㄱ^ㅕ^ㄱ"
  },
  "감성": {
    "en": "sensitivity, emotion",
    "jamo": "ㄱ^ㅏ^ㅁ|ㅅ^ㅓ^ㅇ"
  },
  "감염": {
    "en": "infection",
    "jamo": "ㄱ^ㅏ^ㅁ|ㅇ^ㅕ^ㅁ"
  },
  "감탄": {
    "en": "admiration",
    "jamo": "ㄱ^ㅏ^ㅁ|ㅌ^ㅏ^ㄴ"
  },
  "강풍": {
    "en": "strong wind",
    "jamo": "ㄱ^ㅏ^ㅇ|ㅍ^ㅜ^ㅇ"
  },
  "갖은": {
    "en": "all kinds of",
    "jamo": "ㄱ^ㅏ^ㅈ|ㅇ^ㅡ^ㄴ"
  },
  "개봉": {
    "en": "opening, release",
    "jamo": "ㄱ^ㅏ+ㅣ|ㅂ^ㅗ^ㅇ"
  },
  "개요": {
    "en": "outline, summary",
    "jamo": "ㄱ^ㅏ+ㅣ|ㅇ^ㅛ"
  },
  "개척": {
    "en": "pioneering",
    "jamo": "ㄱ^ㅏ+ㅣ|ㅊ^ㅓ^ㄱ"
  },
  "개통": {
    "en": "opening (of a road/line)",
    "jamo": "ㄱ^ㅏ+ㅣ|ㅌ^ㅗ^ㅇ"
  },
  "객실": {
    "en": "guest room",
    "jamo": "ㄱ^ㅏ+ㅣ^ㄱ|ㅅ^ㅣ^ㄹ"
  },
  "거만": {
    "en": "arrogance",
    "jamo": "ㄱ^ㅓ|ㅁ^ㅏ^ㄴ"
  },
  "결별": {
    "en": "parting, breakup",
    "jamo": "ㄱ^ㅕ^ㄹ|ㅂ^ㅕ^ㄹ"
  },
  "결실": {
    "en": "fruit",
    "ja": "けつじつ【結実】。みのり【実り】",
    "fr": "fructification, grenaison, nouaison, nouure",
    "es": "fruto",
    "zh": "结果，果实",
    "vi": "sự kết trái, sự có quả, sự chin, trái chín",
    "th": "การมีลูก, การมีผล, การออกผล, การสุก, การสุกงอม",
    "id": "buah",
    "ru": "плод",
    "ar": "إثمار",
    "mn": "үр жимс",
    "jamo": "ㄱ^ㅕ^ㄹ|ㅅ^ㅣ^ㄹ"
  },
  "경품": {
    "en": "prize, giveaway",
    "jamo": "ㄱ^ㅕ^ㅇ|ㅍ^ㅜ^ㅁ"
  },
  "고온": {
    "en": "high temperature",
    "ja": "こうおん【高温】",
    "fr": "(Pas d'expression équivalente)",
    "es": "alta temperatura, temperatura elevada",
    "zh": "高温",
    "vi": "nhiệt độ cao",
    "th": "อุณหภูมิสูง",
    "id": "temperatur tinggi",
    "ru": "высокая температура",
    "ar": "درجة الحرارة المرتفعة",
    "mn": "өндөр дулааны хэм",
    "jamo": "ㄱ^ㅗ|ㅇ^ㅗ^ㄴ"
  },
  "고원": {
    "en": "plateau",
    "ja": "こうげん【高原】",
    "fr": "plateau",
    "es": "altiplanicie, altiplano, meseta",
    "zh": "高原",
    "vi": "cao nguyên, vùng cao",
    "th": "ที่ราบสูง, ที่ดอน",
    "id": "dataran tinggi",
    "ru": "плоскогорье",
    "ar": "حقل مرتفع",
    "mn": "өндөрлөг",
    "jamo": "ㄱ^ㅗ|ㅇ^ㅜ+ㅓ^ㄴ"
  },
  "고졸": {
    "en": "high school graduate",
    "jamo": "ㄱ^ㅗ|ㅈ^ㅗ^ㄹ"
  },
  "고체": {
    "en": "solid",
    "ja": "こたい【固体】",
    "fr": "(corps) solide",
    "es": "lo sólido",
    "zh": "固体",
    "vi": "chất rắn, vật thể rắn",
    "th": "ของแข็ง",
    "id": "zat padat",
    "ru": "твёрдое тело",
    "ar": "مادة صلبة",
    "mn": "хатуу биет",
    "jamo": "ㄱ^ㅗ|ㅊ^ㅓ+ㅣ"
  },
  "곡물": {
    "en": "grain",
    "jamo": "ㄱ^ㅗ^ㄱ|ㅁ^ㅜ^ㄹ"
  },
  "곤충": {
    "en": "insect",
    "ja": "こんちゅう【昆虫】",
    "fr": "insecte",
    "es": "insecto",
    "zh": "昆虫",
    "vi": "côn trùng",
    "th": "แมลง",
    "id": "serangga",
    "ru": "насекомое",
    "ar": "حشرة",
    "mn": "хорхой шавьж",
    "jamo": "ㄱ^ㅗ^ㄴ|ㅊ^ㅜ^ㅇ"
  },
  "공룡": {
    "en": "dinosaur",
    "ja": "きょうりゅう【恐竜】",
    "fr": "dinosaure",
    "es": "dinosaurio",
    "zh": "恐龙",
    "vi": "khủng long",
    "th": "สัตว์จำพวกไดโนเสาร์, กิ้งก่ายักษ์",
    "id": "dinosaurus",
    "ru": "динозавр",
    "ar": "ديناصور",
    "mn": "үлэг гүрвэл",
    "jamo": "ㄱ^ㅗ^ㅇ|ㄹ^ㅛ^ㅇ"
  },
  "관청": {
    "en": "government office",
    "jamo": "ㄱ^ㅗ+ㅏ^ㄴ|ㅊ^ㅓ^ㅇ"
  },
  "교과": {
    "en": "curriculum",
    "ja": "きょうか【教科】",
    "fr": "matière, discipline",
    "es": "currículo",
    "zh": "教学科目，科目，课程",
    "vi": "giáo khoa, chương trình giảng dạy",
    "th": "วิชา, รายวิชา",
    "id": "kurikulum sekolah",
    "ru": "курс обучения",
    "ar": "مقرّر تعليمي",
    "mn": "сургалт, хичээл",
    "jamo": "ㄱ^ㅛ|ㄱ^ㅗ+ㅏ"
  },
  "교원": {
    "en": "teaching staff",
    "jamo": "ㄱ^ㅛ|ㅇ^ㅜ+ㅓ^ㄴ"
  },
  "교제": {
    "en": "association, dating",
    "jamo": "ㄱ^ㅛ|ㅈ^ㅓ+ㅣ"
  },
  "교직": {
    "en": "teaching profession",
    "jamo": "ㄱ^ㅛ|ㅈ^ㅣ^ㄱ"
  },
  "구청": {
    "en": "district office",
    "jamo": "ㄱ^ㅜ|ㅊ^ㅓ^ㅇ"
  },
  "국토": {
    "en": "national territory",
    "jamo": "ㄱ^ㅜ^ㄱ|ㅌ^ㅗ"
  },
  "금세": {
    "en": "quickly, soon",
    "jamo": "ㄱ^ㅡ^ㅁ|ㅅ^ㅓ+ㅣ"
  },
  "기내": {
    "en": "inside the aircraft",
    "jamo": "ㄱ^ㅣ|ㄴ^ㅏ+ㅣ"
  },
  "기린": {
    "en": "giraffe",
    "ja": "きりん【麒麟】",
    "fr": "girafe",
    "es": "jirafa",
    "zh": "长颈鹿",
    "vi": "hươu cao cổ",
    "th": "ยีราฟ",
    "id": "jerapah",
    "ru": "жираф",
    "ar": "زرافة",
    "mn": "анааш",
    "jamo": "ㄱ^ㅣ|ㄹ^ㅣ^ㄴ"
  },
  "깃털": {
    "en": "feather",
    "jamo": "ㄱ^ㅣ^ㅅ|ㅌ^ㅓ^ㄹ"
  },
  "끼니": {
    "en": "meal",
    "jamo": "ㄲ^ㅣ|ㄴ^ㅣ"
  },
  "나열": {
    "en": "enumeration, listing",
    "jamo": "ㄴ^ㅏ|ㅇ^ㅕ^ㄹ"
  },
  "낙심": {
    "en": "discouragement",
    "jamo": "ㄴ^ㅏ^ㄱ|ㅅ^ㅣ^ㅁ"
  },
  "낙원": {
    "en": "paradise",
    "jamo": "ㄴ^ㅏ^ㄱ|ㅇ^ㅜ+ㅓ^ㄴ"
  },
  "낚다": {
    "en": "to fish, to catch",
    "jamo": "ㄴ^ㅏ^ㄲ|ㄷ^ㅏ"
  },
  "남향": {
    "en": "south-facing",
    "jamo": "ㄴ^ㅏ^ㅁ|ㅎ^ㅑ^ㅇ"
  },
  "능률": {
    "en": "efficiency",
    "jamo": "ㄴ^ㅡ^ㅇ|ㄹ^ㅠ^ㄹ"
  },
  "도피": {
    "en": "escape, flight",
    "jamo": "ㄷ^ㅗ|ㅍ^ㅣ"
  },
  "들통": {
    "en": "exposure (of a secret)",
    "jamo": "ㄷ^ㅡ^ㄹ|ㅌ^ㅗ^ㅇ"
  },
  "들판": {
    "en": "field, plain",
    "jamo": "ㄷ^ㅡ^ㄹ|ㅍ^ㅏ^ㄴ"
  },
  "라켓": {
    "en": "racket",
    "jamo": "ㄹ^ㅏ|ㅋ^ㅓ+ㅣ^ㅅ"
  },
  "명품": {
    "en": "masterpiece, designer goods",
    "jamo": "ㅁ^ㅕ^ㅇ|ㅍ^ㅜ^ㅁ"
  },
  "물량": {
    "en": "quantity of goods",
    "jamo": "ㅁ^ㅜ^ㄹ|ㄹ^ㅑ^ㅇ"
  },
  "물품": {
    "en": "product, goods",
    "jamo": "ㅁ^ㅜ^ㄹ|ㅍ^ㅜ^ㅁ"
  },
  "법규": {
    "en": "regulations",
    "jamo": "ㅂ^ㅓ^ㅂ|ㄱ^ㅠ"
  },
  "보약": {
    "en": "supplement, acupuncture medicine",
    "jamo": "ㅂ^ㅗ|ㅇ^ㅑ^ㄱ"
  },
  "보육": {
    "en": "childcare",
    "jamo": "ㅂ^ㅗ|ㅇ^ㅠ^ㄱ"
  },
  "북향": {
    "en": "north-facing",
    "jamo": "ㅂ^ㅜ^ㄱ|ㅎ^ㅑ^ㅇ"
  },
  "불량": {
    "en": "defective product, misconduct",
    "jamo": "ㅂ^ㅜ^ㄹ|ㄹ^ㅑ^ㅇ"
  },
  "빈칸": {
    "en": "blank space",
    "jamo": "ㅂ^ㅣ^ㄴ|ㅋ^ㅏ^ㄴ"
  },
  "성냥": {
    "en": "match",
    "ja": "マッチ",
    "fr": "allumette",
    "es": "cerilla, fósforo",
    "zh": "火柴",
    "vi": "diêm",
    "th": "ไม้ขีดไฟ",
    "id": "korek api, mancis",
    "ru": "спички",
    "ar": "أعواد الثقاب ، كبريت",
    "mn": "шүдэнз",
    "jamo": "ㅅ^ㅓ^ㅇ|ㄴ^ㅑ^ㅇ"
  },
  "실크": {
    "en": "silk",
    "jamo": "ㅅ^ㅣ^ㄹ|ㅋ^ㅡ"
  },
  "양육": {
    "en": "raising, nurturing",
    "jamo": "ㅇ^ㅑ^ㅇ|ㅇ^ㅠ^ㄱ"
  },
  "여태": {
    "en": "until now",
    "jamo": "ㅇ^ㅕ|ㅌ^ㅏ+ㅣ"
  },
  "오류": {
    "en": "fallacy",
    "ja": "ごびゅう【誤謬】。あやまり【誤り】。まちがい【間違い】",
    "fr": "erreur, faute, défaut",
    "es": "error, equivocación",
    "zh": "谬误，错误",
    "vi": "sai lầm",
    "th": "ความคิดที่ไม่ถูกต้อง, วิธีคิดผิด ๆ, ข้อสรุปที่ผิด",
    "id": "kesalahan",
    "ru": "ошибочное мнение",
    "ar": "خطأ",
    "mn": "алдаа, мадаг",
    "jamo": "ㅇ^ㅗ|ㄹ^ㅠ"
  },
  "원유": {
    "en": "crude oil",
    "ja": "げんゆ【原油】",
    "fr": "pétrole brut",
    "es": "crudo",
    "zh": "原油",
    "vi": "dầu thô",
    "th": "น้ำมันดิบ",
    "id": "minyak mentah",
    "ru": "нефть",
    "ar": "نفط خام",
    "mn": "түүхий нефть, түүхий газрын тос",
    "jamo": "ㅇ^ㅜ+ㅓ^ㄴ|ㅇ^ㅠ"
  },
  "전등": {
    "en": "lamp, light",
    "jamo": "ㅈ^ㅓ^ㄴ|ㄷ^ㅡ^ㅇ"
  },
  "제대": {
    "en": "discharge (military)",
    "jamo": "ㅈ^ㅓ+ㅣ|ㄷ^ㅏ+ㅣ"
  },
  "찰칵": {
    "en": "click (sound)",
    "jamo": "ㅊ^ㅏ^ㄹ|ㅋ^ㅏ^ㄱ"
  },
  "체크": {
    "en": "check (verification)",
    "jamo": "ㅊ^ㅓ+ㅣ|ㅋ^ㅡ"
  },
  "콧등": {
    "en": "bridge of the nose",
    "jamo": "ㅋ^ㅗ^ㅅ|ㄷ^ㅡ^ㅇ"
  },
  "학업": {
    "en": "academic work, studies",
    "jamo": "ㅎ^ㅏ^ㄱ|ㅇ^ㅓ^ㅂ"
  },
  "학위": {
    "en": "academic degree",
    "jamo": "ㅎ^ㅏ^ㄱ|ㅇ^ㅜ+ㅣ"
  },
  "학점": {
    "en": "grade, credit",
    "jamo": "ㅎ^ㅏ^ㄱ|ㅈ^ㅓ^ㅁ"
  },
  "한발": {
    "en": "one step",
    "jamo": "ㅎ^ㅏ^ㄴ|ㅂ^ㅏ^ㄹ"
  },
  "한정": {
    "en": "limitation",
    "jamo": "ㅎ^ㅏ^ㄴ|ㅈ^ㅓ^ㅇ"
  },
  "함정": {
    "en": "trap",
    "ja": "おとしあな【落とし穴】。わな【罠】",
    "fr": "trappe, fosse, piège",
    "es": "trampa",
    "zh": "陷阱，陷坑",
    "vi": "hố bẫy",
    "th": "กับดัก, หลุมพราง",
    "id": "perangkap binatang",
    "ru": "ловушка",
    "ar": "حفرة في الأرض، شرك، فخّ",
    "mn": "занга",
    "jamo": "ㅎ^ㅏ^ㅁ|ㅈ^ㅓ^ㅇ"
  },
  "항목": {
    "en": "item",
    "jamo": "ㅎ^ㅏ^ㅇ|ㅁ^ㅗ^ㄱ"
  },
  "해명": {
    "en": "explanation, clarification",
    "jamo": "ㅎ^ㅏ+ㅣ|ㅁ^ㅕ^ㅇ"
  },
  "허비": {
    "en": "waste (of time/money)",
    "jamo": "ㅎ^ㅓ|ㅂ^ㅣ"
  },
  "험담": {
    "en": "gossip, slander",
    "jamo": "ㅎ^ㅓ^ㅁ|ㄷ^ㅏ^ㅁ"
  },
  "혁명": {
    "en": "revolution",
    "jamo": "ㅎ^ㅕ^ㄱ|ㅁ^ㅕ^ㅇ"
  },
  "현지": {
    "en": "local, on-site",
    "jamo": "ㅎ^ㅕ^ㄴ|ㅈ^ㅣ"
  },
  "협동": {
    "en": "cooperation",
    "jamo": "ㅎ^ㅕ^ㅂ|ㄷ^ㅗ^ㅇ"
  },
  "형부": {
    "en": "brother-in-law (elder sister's husband)",
    "jamo": "ㅎ^ㅕ^ㅇ|ㅂ^ㅜ"
  },
  "호칭": {
    "en": "name",
    "jamo": "ㅎ^ㅗ|ㅊ^ㅣ^ㅇ"
  },
  "혼란": {
    "en": "confusion",
    "jamo": "ㅎ^ㅗ^ㄴ|ㄹ^ㅏ^ㄴ"
  },
  "혼례": {
    "en": "wedding ceremony",
    "jamo": "ㅎ^ㅗ^ㄴ|ㄹ^ㅕ+ㅣ"
  },
  "혼잡": {
    "en": "confusion, mess, disorder",
    "jamo": "ㅎ^ㅗ^ㄴ|ㅈ^ㅏ^ㅂ"
  },
  "홀로": {
    "en": "alone",
    "jamo": "ㅎ^ㅗ^ㄹ|ㄹ^ㅗ"
  },
  "화법": {
    "en": "way of speaking",
    "jamo": "ㅎ^ㅗ+ㅏ|ㅂ^ㅓ^ㅂ"
  },
  "화산": {
    "en": "volcano",
    "jamo": "ㅎ^ㅗ+ㅏ|ㅅ^ㅏ^ㄴ"
  },
  "화상": {
    "en": "burn, scald",
    "jamo": "ㅎ^ㅗ+ㅏ|ㅅ^ㅏ^ㅇ"
  },
  "화학": {
    "en": "chemistry",
    "jamo": "ㅎ^ㅗ+ㅏ|ㅎ^ㅏ^ㄱ"
  },
  "확률": {
    "en": "probability",
    "jamo": "ㅎ^ㅗ+ㅏ^ㄱ|ㄹ^ㅠ^ㄹ"
  },
  "확정": {
    "en": "confirmation, finalization",
    "jamo": "ㅎ^ㅗ+ㅏ^ㄱ|ㅈ^ㅓ^ㅇ"
  },
  "환갑": {
    "en": "60th birthday",
    "jamo": "ㅎ^ㅗ+ㅏ^ㄴ|ㄱ^ㅏ^ㅂ"
  },
  "환기": {
    "en": "ventilation",
    "ja": "かんき【換気】",
    "fr": "ventilation, aération",
    "es": "ventilación",
    "zh": "换气，通风",
    "vi": "sự thông gió, sự thông khí",
    "th": "การถ่ายเทอากาศ, การระบายอากาศ",
    "id": "ventilasi, pertukaran udara",
    "ru": "проветривание",
    "ar": "تهوية",
    "mn": "агаарын солилцоо",
    "jamo": "ㅎ^ㅗ+ㅏ^ㄴ|ㄱ^ㅣ"
  },
  "활약": {
    "en": "active role, performance",
    "jamo": "ㅎ^ㅗ+ㅏ^ㄹ|ㅇ^ㅑ^ㄱ"
  },
  "황금": {
    "en": "gold",
    "jamo": "ㅎ^ㅗ+ㅏ^ㅇ|ㄱ^ㅡ^ㅁ"
  },
  "황사": {
    "en": "yellow dust, asian dust",
    "jamo": "ㅎ^ㅗ+ㅏ^ㅇ|ㅅ^ㅏ"
  },
  "황색": {
    "en": "yellow",
    "jamo": "ㅎ^ㅗ+ㅏ^ㅇ|ㅅ^ㅏ+ㅣ^ㄱ"
  },
  "회갑": {
    "en": "one's 60th birthday",
    "jamo": "ㅎ^ㅗ+ㅣ|ㄱ^ㅏ^ㅂ"
  },
  "회상": {
    "en": "reminiscence",
    "jamo": "ㅎ^ㅗ+ㅣ|ㅅ^ㅏ^ㅇ"
  },
  "회전": {
    "en": "rotation",
    "jamo": "ㅎ^ㅗ+ㅣ|ㅈ^ㅓ^ㄴ"
  },
  "횡단": {
    "en": "crossing",
    "jamo": "ㅎ^ㅗ+ㅣ^ㅇ|ㄷ^ㅏ^ㄴ"
  },
  "효녀": {
    "en": "devoted daughter",
    "jamo": "ㅎ^ㅛ|ㄴ^ㅕ"
  },
  "효율": {
    "en": "efficiency",
    "jamo": "ㅎ^ㅛ|ㅇ^ㅠ^ㄹ"
  },
  "후손": {
    "en": "descendants",
    "jamo": "ㅎ^ㅜ|ㅅ^ㅗ^ㄴ"
  },
  "후일": {
    "en": "a later day",
    "jamo": "ㅎ^ㅜ|ㅇ^ㅣ^ㄹ"
  },
  "후자": {
    "en": "the latter",
    "jamo": "ㅎ^ㅜ|ㅈ^ㅏ"
  },
  "훌쩍": {
    "en": "suddenly, in a leap",
    "jamo": "ㅎ^ㅜ^ㄹ|ㅉ^ㅓ^ㄱ"
  },
  "훗날": {
    "en": "a future day",
    "jamo": "ㅎ^ㅜ^ㅅ|ㄴ^ㅏ^ㄹ"
  },
  "훤히": {
    "en": "clearly, brightly",
    "jamo": "ㅎ^ㅜ+ㅓ^ㄴ|ㅎ^ㅣ"
  },
  "훼손": {
    "en": "damage, defacement",
    "jamo": "ㅎ^ㅜ+ㅔ|ㅅ^ㅗ^ㄴ"
  },
  "흑색": {
    "en": "black",
    "ja": "こくしょく【黒色】",
    "fr": "noir",
    "es": "color negro",
    "zh": "黑色",
    "vi": "màu đen",
    "th": "สีดำ",
    "id": "hitam, warna hitam",
    "ru": "чёрный цвет",
    "ar": "لون أسود",
    "mn": "хар өнгө",
    "jamo": "ㅎ^ㅡ^ㄱ|ㅅ^ㅏ+ㅣ^ㄱ"
  },
  "흠뻑": {
    "en": "fully",
    "ja": "たっぷり。うんと",
    "fr": "(Pas d'expression équivalente)",
    "es": "hasta el alma, hasta los huesos",
    "zh": "足足，充分",
    "vi": "hết mức, hoàn toàn",
    "th": "อย่างเต็มที่, อย่างมาก, สุด ๆ",
    "id": "(Tiada Penjelasan Arti)",
    "ru": "(нет эквивалента)",
    "ar": "كاملاً، كافيًا",
    "mn": "нэвт, нэвт шувт",
    "jamo": "ㅎ^ㅡ^ㅁ|ㅃ^ㅓ^ㄱ"
  },
  "흡연": {
    "en": "smoking",
    "jamo": "ㅎ^ㅡ^ㅂ|ㅇ^ㅕ^ㄴ"
  },
  "흥행": {
    "en": "box office success",
    "jamo": "ㅎ^ㅡ^ㅇ|ㅎ^ㅏ+ㅣ^ㅇ"
  },
  "힌트": {
    "en": "hint",
    "jamo": "ㅎ^ㅣ^ㄴ|ㅌ^ㅡ"
  },
  "가늠": {
    "en": "guess, estimate",
    "jamo": "ㄱ^ㅏ|ㄴ^ㅡ^ㅁ"
  },
  "가담": {
    "en": "participation, involvement",
    "jamo": "ㄱ^ㅏ|ㄷ^ㅏ^ㅁ"
  },
  "가동": {
    "en": "operation (of machinery)",
    "jamo": "ㄱ^ㅏ|ㄷ^ㅗ^ㅇ"
  },
  "가령": {
    "en": "for example, suppose",
    "jamo": "ㄱ^ㅏ|ㄹ^ㅕ^ㅇ"
  },
  "가상": {
    "en": "virtual",
    "jamo": "ㄱ^ㅏ|ㅅ^ㅏ^ㅇ"
  },
  "가속": {
    "en": "acceleration",
    "jamo": "ㄱ^ㅏ|ㅅ^ㅗ^ㄱ"
  },
  "가열": {
    "en": "heating",
    "jamo": "ㄱ^ㅏ|ㅇ^ㅕ^ㄹ"
  },
  "각본": {
    "en": "scenario",
    "ja": "きゃくほん【脚本】。すじがき【筋書き】。だいほん【台本】",
    "fr": "pièce (de théâtre), texte (d'une pièce de théâtre), scénario (de film), script, livret (d'un opéra)",
    "es": "guión, argumento",
    "zh": "剧本，脚本",
    "vi": "kịch bản",
    "th": "บทละคร, บทภาพยนตร์",
    "id": "skenario, naskah",
    "ru": "пьеса",
    "ar": "سيناريو",
    "mn": "эх зохиол",
    "jamo": "ㄱ^ㅏ^ㄱ|ㅂ^ㅗ^ㄴ"
  },
  "간밤": {
    "en": "last night",
    "jamo": "ㄱ^ㅏ^ㄴ|ㅂ^ㅏ^ㅁ"
  },
  "간부": {
    "en": "executive, senior official",
    "jamo": "ㄱ^ㅏ^ㄴ|ㅂ^ㅜ"
  },
  "갈망": {
    "en": "longing, craving",
    "jamo": "ㄱ^ㅏ^ㄹ|ㅁ^ㅏ^ㅇ"
  },
  "갈피": {
    "en": "clue, direction",
    "jamo": "ㄱ^ㅏ^ㄹ|ㅍ^ㅣ"
  },
  "감량": {
    "en": "weight loss, reduction",
    "jamo": "ㄱ^ㅏ^ㅁ|ㄹ^ㅑ^ㅇ"
  },
  "감면": {
    "en": "reduction, exemption",
    "jamo": "ㄱ^ㅏ^ㅁ|ㅁ^ㅕ^ㄴ"
  },
  "감명": {
    "en": "deep impression",
    "jamo": "ㄱ^ㅏ^ㅁ|ㅁ^ㅕ^ㅇ"
  },
  "감지": {
    "en": "detection, sensing",
    "jamo": "ㄱ^ㅏ^ㅁ|ㅈ^ㅣ"
  },
  "개량": {
    "en": "improvement (of a breed/method)",
    "jamo": "ㄱ^ㅏ+ㅣ|ㄹ^ㅑ^ㅇ"
  },
  "개막": {
    "en": "opening (of an event)",
    "jamo": "ㄱ^ㅏ+ㅣ|ㅁ^ㅏ^ㄱ"
  },
  "개편": {
    "en": "reorganization",
    "jamo": "ㄱ^ㅏ+ㅣ|ㅍ^ㅕ^ㄴ"
  },
  "겨냥": {
    "en": "aim, target",
    "jamo": "ㄱ^ㅕ|ㄴ^ㅑ^ㅇ"
  },
  "결점": {
    "en": "flaw, defect",
    "jamo": "ㄱ^ㅕ^ㄹ|ㅈ^ㅓ^ㅁ"
  },
  "결핍": {
    "en": "deficiency",
    "jamo": "ㄱ^ㅕ^ㄹ|ㅍ^ㅣ^ㅂ"
  },
  "계통": {
    "en": "system, lineage",
    "jamo": "ㄱ^ㅕ+ㅣ|ㅌ^ㅗ^ㅇ"
  },
  "고난": {
    "en": "hardship, suffering",
    "jamo": "ㄱ^ㅗ|ㄴ^ㅏ^ㄴ"
  },
  "고령": {
    "en": "old age",
    "ja": "こうれい【高齢】",
    "fr": "grand âge, âge avancé",
    "es": "edad avanzada, ancianidad, tercera edad",
    "zh": "高龄",
    "vi": "cao tuổi, tuổi cao",
    "th": "อายุสูง,  อายุสูงวัย, วัยสูงอายุ, อายุมาก",
    "id": "usia lanjut",
    "ru": "преклонный возраст",
    "ar": "سن كبير",
    "mn": "өндөр настай",
    "jamo": "ㄱ^ㅗ|ㄹ^ㅕ^ㅇ"
  },
  "고루": {
    "en": "evenly",
    "jamo": "ㄱ^ㅗ|ㄹ^ㅜ"
  },
  "고립": {
    "en": "isolation",
    "jamo": "ㄱ^ㅗ|ㄹ^ㅣ^ㅂ"
  },
  "고비": {
    "en": "crisis point, crossroads",
    "jamo": "ㄱ^ㅗ|ㅂ^ㅣ"
  },
  "고심": {
    "en": "deep worry, deliberation",
    "jamo": "ㄱ^ㅗ|ㅅ^ㅣ^ㅁ"
  },
  "고용": {
    "en": "employment",
    "jamo": "ㄱ^ㅗ|ㅇ^ㅛ^ㅇ"
  },
  "곤욕": {
    "en": "humiliation, hardship",
    "jamo": "ㄱ^ㅗ^ㄴ|ㅇ^ㅛ^ㄱ"
  },
  "공략": {
    "en": "strategy, capturing",
    "jamo": "ㄱ^ㅗ^ㅇ|ㄹ^ㅑ^ㄱ"
  },
  "공립": {
    "en": "public (institution)",
    "jamo": "ㄱ^ㅗ^ㅇ|ㄹ^ㅣ^ㅂ"
  },
  "공직": {
    "en": "public office",
    "jamo": "ㄱ^ㅗ^ㅇ|ㅈ^ㅣ^ㄱ"
  },
  "공터": {
    "en": "vacant lot",
    "jamo": "ㄱ^ㅗ^ㅇ|ㅌ^ㅓ"
  },
  "과녁": {
    "en": "target",
    "jamo": "ㄱ^ㅗ+ㅏ|ㄴ^ㅕ^ㄱ"
  },
  "과민": {
    "en": "oversensitivity",
    "jamo": "ㄱ^ㅗ+ㅏ|ㅁ^ㅣ^ㄴ"
  },
  "과시": {
    "en": "showing off",
    "jamo": "ㄱ^ㅗ+ㅏ|ㅅ^ㅣ"
  },
  "관념": {
    "en": "idea, concept",
    "jamo": "ㄱ^ㅗ+ㅏ^ㄴ|ㄴ^ㅕ^ㅁ"
  },
  "관료": {
    "en": "bureaucrat",
    "jamo": "ㄱ^ㅗ+ㅏ^ㄴ|ㄹ^ㅛ"
  },
  "관절": {
    "en": "joint (body)",
    "jamo": "ㄱ^ㅗ+ㅏ^ㄴ|ㅈ^ㅓ^ㄹ"
  },
  "광부": {
    "en": "miner",
    "jamo": "ㄱ^ㅗ+ㅏ^ㅇ|ㅂ^ㅜ"
  },
  "광업": {
    "en": "mining industry",
    "jamo": "ㄱ^ㅗ+ㅏ^ㅇ|ㅇ^ㅓ^ㅂ"
  },
  "교란": {
    "en": "disturbance",
    "jamo": "ㄱ^ㅛ|ㄹ^ㅏ^ㄴ"
  },
  "교섭": {
    "en": "negotiation",
    "jamo": "ㄱ^ㅛ|ㅅ^ㅓ^ㅂ"
  },
  "구걸": {
    "en": "begging",
    "jamo": "ㄱ^ㅜ|ㄱ^ㅓ^ㄹ"
  },
  "구기": {
    "en": "ball games",
    "jamo": "ㄱ^ㅜ|ㄱ^ㅣ"
  },
  "구슬": {
    "en": "bead, marble",
    "jamo": "ㄱ^ㅜ|ㅅ^ㅡ^ㄹ"
  },
  "구어": {
    "en": "spoken language",
    "jamo": "ㄱ^ㅜ|ㅇ^ㅓ"
  },
  "구원": {
    "en": "salvation, rescue",
    "jamo": "ㄱ^ㅜ|ㅇ^ㅜ+ㅓ^ㄴ"
  },
  "구토": {
    "en": "vomiting",
    "ja": "おうと【嘔吐】。としゅつ【吐出】",
    "fr": "vomissement, nausée",
    "es": "vómito",
    "zh": "呕吐",
    "vi": "sự ói mửa, sự nôn mửa",
    "th": "การอ้วก, การอาเจียน, การสำรอก",
    "id": "muntah",
    "ru": "рвота",
    "ar": "تقيّؤ ، قيء",
    "mn": "бөөлжис",
    "jamo": "ㄱ^ㅜ|ㅌ^ㅗ"
  },
  "국한": {
    "en": "limitation",
    "jamo": "ㄱ^ㅜ^ㄱ|ㅎ^ㅏ^ㄴ"
  },
  "군밤": {
    "en": "roasted chestnut",
    "jamo": "ㄱ^ㅜ^ㄴ|ㅂ^ㅏ^ㅁ"
  },
  "권태": {
    "en": "boredom, ennui",
    "jamo": "ㄱ^ㅜ+ㅓ^ㄴ|ㅌ^ㅏ+ㅣ"
  },
  "권투": {
    "en": "boxing",
    "jamo": "ㄱ^ㅜ+ㅓ^ㄴ|ㅌ^ㅜ"
  },
  "규범": {
    "en": "norm, standard",
    "jamo": "ㄱ^ㅠ|ㅂ^ㅓ^ㅁ"
  },
  "규율": {
    "en": "regulation",
    "ja": "きりつ【規律】",
    "fr": "discipline, règle, règlement",
    "es": "disciplina, reglamento",
    "zh": "纪律，法则",
    "vi": "quy luật",
    "th": "กฎ,  ระเบียบ, กฎระเบียบ, วินัย, ระเบียบวินัย",
    "id": "disiplin, tata krama",
    "ru": "дисциплина",
    "ar": "تعليمات",
    "mn": "дүрэм журам, сахилга бат",
    "jamo": "ㄱ^ㅠ|ㅇ^ㅠ^ㄹ"
  },
  "규제": {
    "en": "regulation",
    "jamo": "ㄱ^ㅠ|ㅈ^ㅓ+ㅣ"
  },
  "그간": {
    "en": "meantime",
    "ja": "そのあいだ・そのかん【その間】。あいま【合間】",
    "fr": "(n.) pendant ce temps-là, entre-temps",
    "es": "entre tanto",
    "zh": "这期间，这段时间以来",
    "vi": "trong khoảng đó, trong khi ấy, trong lúc ấy",
    "th": "ระหว่างนั้น, ในระหว่างนั้น, ในช่วงนั้น, ในขณะที่, ในระหว่าง, ในช่วงเวลา",
    "id": "selama itu, selama ini",
    "ru": "тем временем",
    "ar": "في ذلك الوقت",
    "mn": "тэр хооронд, тэр хугацаанд, энэ хооронд",
    "jamo": "ㄱ^ㅡ|ㄱ^ㅏ^ㄴ"
  },
  "극도": {
    "en": "extreme degree",
    "jamo": "ㄱ^ㅡ^ㄱ|ㄷ^ㅗ"
  },
  "극성": {
    "en": "fanaticism, extreme energy",
    "jamo": "ㄱ^ㅡ^ㄱ|ㅅ^ㅓ^ㅇ"
  },
  "급등": {
    "en": "sharp rise",
    "jamo": "ㄱ^ㅡ^ㅂ|ㄷ^ㅡ^ㅇ"
  },
  "급락": {
    "en": "sharp drop",
    "jamo": "ㄱ^ㅡ^ㅂ|ㄹ^ㅏ^ㄱ"
  },
  "급류": {
    "en": "rapid current",
    "jamo": "ㄱ^ㅡ^ㅂ|ㄹ^ㅠ"
  },
  "기교": {
    "en": "technique, artistry",
    "jamo": "ㄱ^ㅣ|ㄱ^ㅛ"
  },
  "기량": {
    "en": "skill, ability",
    "jamo": "ㄱ^ㅣ|ㄹ^ㅑ^ㅇ"
  },
  "기류": {
    "en": "air current, mood",
    "jamo": "ㄱ^ㅣ|ㄹ^ㅠ"
  },
  "기약": {
    "en": "promise, appointed time",
    "jamo": "ㄱ^ㅣ|ㅇ^ㅑ^ㄱ"
  },
  "기피": {
    "en": "avoidance",
    "jamo": "ㄱ^ㅣ|ㅍ^ㅣ"
  },
  "낙태": {
    "en": "abortion",
    "jamo": "ㄴ^ㅏ^ㄱ|ㅌ^ㅏ+ㅣ"
  },
  "난청": {
    "en": "hearing loss",
    "jamo": "ㄴ^ㅏ^ㄴ|ㅊ^ㅓ^ㅇ"
  },
  "난폭": {
    "en": "violence, recklessness",
    "jamo": "ㄴ^ㅏ^ㄴ|ㅍ^ㅗ^ㄱ"
  },
  "내륙": {
    "en": "inland",
    "jamo": "ㄴ^ㅏ+ㅣ|ㄹ^ㅠ^ㄱ"
  },
  "냉전": {
    "en": "the Cold War",
    "jamo": "ㄴ^ㅏ+ㅣ^ㅇ|ㅈ^ㅓ^ㄴ"
  },
  "냉정": {
    "en": "composure, coldness",
    "jamo": "ㄴ^ㅏ+ㅣ^ㅇ|ㅈ^ㅓ^ㅇ"
  },
  "노크": {
    "en": "knock (on a door)",
    "jamo": "ㄴ^ㅗ|ㅋ^ㅡ"
  },
  "녹초": {
    "en": "exhaustion",
    "jamo": "ㄴ^ㅗ^ㄱ|ㅊ^ㅗ"
  },
  "누출": {
    "en": "leakage",
    "jamo": "ㄴ^ㅜ|ㅊ^ㅜ^ㄹ"
  },
  "눈총": {
    "en": "a glare, dirty look",
    "jamo": "ㄴ^ㅜ^ㄴ|ㅊ^ㅗ^ㅇ"
  },
  "돌파": {
    "en": "breakthrough",
    "jamo": "ㄷ^ㅗ^ㄹ|ㅍ^ㅏ"
  },
  "동참": {
    "en": "participation together",
    "jamo": "ㄷ^ㅗ^ㅇ|ㅊ^ㅏ^ㅁ"
  },
  "불과": {
    "en": "only, merely",
    "jamo": "ㅂ^ㅜ^ㄹ|ㄱ^ㅗ+ㅏ"
  },
  "빈곤": {
    "en": "poverty",
    "jamo": "ㅂ^ㅣ^ㄴ|ㄱ^ㅗ^ㄴ"
  },
  "사격": {
    "en": "shooting",
    "jamo": "ㅅ^ㅏ|ㄱ^ㅕ^ㄱ"
  },
  "상여": {
    "en": "funeral bier",
    "jamo": "ㅅ^ㅏ^ㅇ|ㅇ^ㅕ"
  },
  "상용": {
    "en": "common use",
    "jamo": "ㅅ^ㅏ^ㅇ|ㅇ^ㅛ^ㅇ"
  },
  "상위": {
    "en": "high rank",
    "ja": "じょうい【上位】",
    "fr": "premières places, peloton de tête, (n.) de niveau élevé, supérieur, de rang supérieur",
    "es": "alto rango",
    "zh": "上游，高位，上等",
    "vi": "địa vị cao, tầng lớp trên",
    "th": "ระดับสูง, ตำแหน่งสูง, สถานะสูง",
    "id": "jabatan tinggi, status tinggi, pangkat tinggi",
    "ru": "(нет эквивалента)",
    "ar": "رتبة مرتفعة",
    "mn": "дээд тушаал, дээд алба, дээгүүр байр суурь",
    "jamo": "ㅅ^ㅏ^ㅇ|ㅇ^ㅜ+ㅣ"
  },
  "상응": {
    "en": "correspondence",
    "jamo": "ㅅ^ㅏ^ㅇ|ㅇ^ㅡ^ㅇ"
  },
  "상인": {
    "en": "merchant",
    "jamo": "ㅅ^ㅏ^ㅇ|ㅇ^ㅣ^ㄴ"
  },
  "상체": {
    "en": "upper body",
    "jamo": "ㅅ^ㅏ^ㅇ|ㅊ^ㅓ+ㅣ"
  },
  "수컷": {
    "en": "male (animal)",
    "jamo": "ㅅ^ㅜ|ㅋ^ㅓ^ㅅ"
  },
  "암컷": {
    "en": "female (animal)",
    "jamo": "ㅇ^ㅏ^ㅁ|ㅋ^ㅓ^ㅅ"
  },
  "암호": {
    "en": "code, cipher",
    "jamo": "ㅇ^ㅏ^ㅁ|ㅎ^ㅗ"
  },
  "압도": {
    "en": "overwhelming",
    "jamo": "ㅇ^ㅏ^ㅂ|ㄷ^ㅗ"
  },
  "압축": {
    "en": "compression",
    "jamo": "ㅇ^ㅏ^ㅂ|ㅊ^ㅜ^ㄱ"
  },
  "유골": {
    "en": "remains",
    "ja": "いこつ【遺骨】",
    "fr": "dépouille, restes",
    "es": "restos cremados",
    "zh": "遗骨，尸骨",
    "vi": "tro hỏa táng, hài cốt",
    "th": "เถ้า, อัฐิ, อัฐิและเถ้าถ่าน",
    "id": "abu jenazah, tulang sisa peningggalan",
    "ru": "прах",
    "ar": "عظم إنسان",
    "mn": "чандар, араг яс",
    "jamo": "ㅇ^ㅠ|ㄱ^ㅗ^ㄹ"
  },
  "유발": {
    "en": "triggering, inducing",
    "jamo": "ㅇ^ㅠ|ㅂ^ㅏ^ㄹ"
  },
  "의혹": {
    "en": "suspicion",
    "jamo": "ㅇ^ㅡ+ㅣ|ㅎ^ㅗ^ㄱ"
  },
  "의회": {
    "en": "parliament, assembly",
    "jamo": "ㅇ^ㅡ+ㅣ|ㅎ^ㅗ+ㅣ"
  },
  "일환": {
    "en": "a part of (a plan)",
    "jamo": "ㅇ^ㅣ^ㄹ|ㅎ^ㅗ+ㅏ^ㄴ"
  },
  "코치": {
    "en": "coach",
    "jamo": "ㅋ^ㅗ|ㅊ^ㅣ"
  },
  "콧날": {
    "en": "bridge of the nose",
    "jamo": "ㅋ^ㅗ^ㅅ|ㄴ^ㅏ^ㄹ"
  },
  "쾌감": {
    "en": "pleasure",
    "ja": "かいかん【快感】",
    "fr": "grand plaisir",
    "es": "placer",
    "zh": "快感",
    "vi": "khoái cảm",
    "th": "ความสุขสบายใจ, ความรู้สึกน่าสุขกายสุขใจ, ความรู้สึกดี",
    "id": "kesenangan",
    "ru": "удовольствие",
    "ar": "متعة، تلذُّذ",
    "mn": "баяр жаргал, сэтгэл хангалуун байдал",
    "jamo": "ㅋ^ㅗ+ㅐ|ㄱ^ㅏ^ㅁ"
  },
  "필자": {
    "en": "the author",
    "jamo": "ㅍ^ㅣ^ㄹ|ㅈ^ㅏ"
  },
  "핏줄": {
    "en": "blood vessel",
    "ja": "ちすじ【血筋】。けっかん【血管】",
    "fr": "vaisseau sanguin, veine",
    "es": "vena",
    "zh": "血管",
    "vi": "mạch máu",
    "th": "เส้นเลือด, เส้นโลหิต",
    "id": "pembuluh darah",
    "ru": "вены",
    "ar": "وريد",
    "mn": "судас",
    "jamo": "ㅍ^ㅣ^ㅅ|ㅈ^ㅜ^ㄹ"
  },
  "행방": {
    "en": "whereabouts",
    "jamo": "ㅎ^ㅏ+ㅣ^ㅇ|ㅂ^ㅏ^ㅇ"
  },
  "헌법": {
    "en": "constitution",
    "jamo": "ㅎ^ㅓ^ㄴ|ㅂ^ㅓ^ㅂ"
  },
  "협박": {
    "en": "threat",
    "jamo": "ㅎ^ㅕ^ㅂ|ㅂ^ㅏ^ㄱ"
  },
  "홈런": {
    "en": "home run",
    "jamo": "ㅎ^ㅗ^ㅁ|ㄹ^ㅓ^ㄴ"
  },
  "화두": {
    "en": "topic, subject",
    "jamo": "ㅎ^ㅗ+ㅏ|ㄷ^ㅜ"
  },
  "화물": {
    "en": "cargo",
    "jamo": "ㅎ^ㅗ+ㅏ|ㅁ^ㅜ^ㄹ"
  },
  "화살": {
    "en": "arrow",
    "jamo": "ㅎ^ㅗ+ㅏ|ㅅ^ㅏ^ㄹ"
  },
  "확립": {
    "en": "establishment",
    "jamo": "ㅎ^ㅗ+ㅏ^ㄱ|ㄹ^ㅣ^ㅂ"
  },
  "확충": {
    "en": "expansion",
    "jamo": "ㅎ^ㅗ+ㅏ^ㄱ|ㅊ^ㅜ^ㅇ"
  },
  "활력": {
    "en": "vitality",
    "jamo": "ㅎ^ㅗ+ㅏ^ㄹ|ㄹ^ㅕ^ㄱ"
  },
  "회견": {
    "en": "interview, press conference",
    "jamo": "ㅎ^ㅗ+ㅣ|ㄱ^ㅕ^ㄴ"
  },
  "회수": {
    "en": "recovery, retrieval",
    "jamo": "ㅎ^ㅗ+ㅣ|ㅅ^ㅜ"
  },
  "획득": {
    "en": "acquisition",
    "jamo": "ㅎ^ㅗ+ㅣ^ㄱ|ㄷ^ㅡ^ㄱ"
  },
  "효력": {
    "en": "efficacy",
    "ja": "こうりょく【効力】",
    "fr": "effet, efficacité",
    "es": "eficacia",
    "zh": "效力，效用，效果，功效",
    "vi": "công dụng, tác dụng",
    "th": "ประสิทธิผล",
    "id": "efek, khasiat",
    "ru": "эффективность",
    "ar": "فعالية",
    "mn": "үр дүн, нөлөө",
    "jamo": "ㅎ^ㅛ|ㄹ^ㅕ^ㄱ"
  },
  "후속": {
    "en": "follow-up",
    "jamo": "ㅎ^ㅜ|ㅅ^ㅗ^ㄱ"
  },
  "훑다": {
    "en": "thresh",
    "ja": "しごく【扱く】",
    "fr": "détacher, broyer",
    "es": "rastrear",
    "zh": "脱粒",
    "vi": "tuốt",
    "th": "รูด, ฟาด, ดึงออก",
    "id": "menanggalkan, mengupas, melepas",
    "ru": "отдирать",
    "ar": "يُمشّط",
    "mn": "цайруулах",
    "jamo": "ㅎ^ㅜ^ㄾ|ㄷ^ㅏ"
  },
  "휘다": {
    "en": "bend",
    "ja": "まがる【曲がる】",
    "fr": "se plier, plier, courber",
    "es": "doblarse, doblar",
    "zh": "折，闪，扭，弯",
    "vi": "cong, làm cong",
    "th": "งอ, โก่ง, คด, โค้ง",
    "id": "bengkok, membengkokkan, melengkung, melengkungkan",
    "ru": "гнуть(ся)",
    "ar": "يثني",
    "mn": "тахийх, тахийлгах",
    "jamo": "ㅎ^ㅜ+ㅣ|ㄷ^ㅏ"
  },
  "휴무": {
    "en": "being off",
    "ja": "きゅうぎょう【休業】",
    "fr": "chômage",
    "es": "descanso de trabajo",
    "zh": "休息，休业，暂停办公",
    "vi": "sự nghỉ làm",
    "th": "การหยุดงาน, การหยุดพักงาน, การหยุดทำงาน, การพักงาน, การลางาน",
    "id": "libur",
    "ru": "нерабочий день",
    "ar": "حالة الاغلاق",
    "mn": "амралт",
    "jamo": "ㅎ^ㅠ|ㅁ^ㅜ"
  },
  "휴전": {
    "en": "ceasefire",
    "jamo": "ㅎ^ㅠ|ㅈ^ㅓ^ㄴ"
  },
  "휴직": {
    "en": "leave of absence",
    "ja": "きゅうしょく【休職】",
    "fr": "cessation temporaire du travail",
    "es": "permiso laboral",
    "zh": "暂时停职",
    "vi": "việc nghỉ việc tạm thời",
    "th": "การพักงานชั่วคราว, การหยุดงานชั่วคราว, การลาพักงานชั่วคราว",
    "id": "cuti",
    "ru": "отпуск",
    "ar": "اعتزال العمل مؤقتًا",
    "mn": "албан ажлаас чөлөө авах",
    "jamo": "ㅎ^ㅠ|ㅈ^ㅣ^ㄱ"
  },
  "흑자": {
    "en": "surplus, profit",
    "jamo": "ㅎ^ㅡ^ㄱ|ㅈ^ㅏ"
  },
  "흡사": {
    "en": "just like",
    "jamo": "ㅎ^ㅡ^ㅂ|ㅅ^ㅏ"
  },
  "힐끗": {
    "en": "with a quick glance",
    "jamo": "ㅎ^ㅣ^ㄹ|ㄲ^ㅡ^ㅅ"
  }
};
