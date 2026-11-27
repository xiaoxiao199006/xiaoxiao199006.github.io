/* ============================================================
   经纬易行 · 全球行程定制（中文出境站）
   Demo 产品数据集 —— 价格与清单均为演示占位样例，
   最终产品、资源与报价以咨询确认为准。
   品类 keys:
     transfer 接送机 / car 包车 / hotel 酒店
     attraction 景点·项目 / corp 企业参访 / univ 院校参访 / other 加项服务
   时段 keys: morning 上午 / afternoon 下午 / evening 傍晚 /
              allday 全天 / flexible 灵活 / night 夜间
   人群 keys: all 全年龄 / family 亲子 / young 青年 / senior 长者 /
              couple 情侣 / business 商务
   ============================================================ */
window.PRODUCTS = [

  /* ==================== 亚洲 ==================== */

  /* ---- 日本 · 东京 ---- */
  {
    id: "JP-01", name: "浅草寺 · 晴空塔 · 明治神宫市区一日游",
    city: "东京", region: "日本 · 东京", country: "日本", continent: "亚洲", cat: "attraction",
    tags: { stars: 5, age: "all", dur: "全天", slot: "allday" },
    price: { fixed: 680, unit: "每人", range: "¥520–1,280 / 人" },
    desc: "中文导游带队遍历东京经典地标：浅草寺雷门祈福、晴空塔观景台、明治神宫森林步道，含市区往返用车与门票安排。",
    included: ["中文导游", "景点首道门票", "市区往返用车", "瓶装饮用水"],
    excluded: ["午餐", "晴空塔特别楼层门票", "个人消费"],
    note: "观景台票需按预约时段确认；步行较多，建议穿舒适鞋。",
    related: ["JP-02", "JP-06", "FR-01"], standalone: false
  },
  {
    id: "JP-02", name: "东京迪士尼乐园 / 周边亲子半日休闲",
    city: "东京", region: "日本 · 东京", country: "日本", continent: "亚洲", cat: "attraction",
    tags: { stars: 4, age: "family", dur: "全天", slot: "allday" },
    price: { fixed: 520, unit: "每人", range: "¥380–980 / 人" },
    desc: "亲子家庭可选迪士尼乐园或海洋公园一日安排，协助门票预约与园区交通接驳，行程节奏按家庭情况调整。",
    included: ["门票预约协助", "园区往返用车", "中文行程建议"],
    excluded: ["园内餐饮", "快速通行卡", "个人消费"],
    note: "热门项目排队时间较长，建议入园前确认儿童身高限制。",
    related: ["JP-01", "AU-01", "US-01"], standalone: false
  },
  {
    id: "JP-03", name: "成田 / 羽田机场私人接送",
    city: "东京", region: "日本 · 东京", country: "日本", continent: "亚洲", cat: "transfer",
    tags: { stars: 4, age: "all", dur: "每程", slot: "flexible" },
    price: { fixed: 450, unit: "每车", range: "¥360–680 / 车" },
    desc: "机场举牌私人接送，覆盖成田（NRT）与羽田（HND），可跟踪航班延误，按车型与行李量安排车辆。",
    included: ["到达大厅举牌接机", "私人车辆", "航班延误跟踪", "等候时长"],
    excluded: ["高速通行费", "儿童安全座椅（按需另计）", "行李超重附加"],
    note: "请在咨询时提供航班号、人数与行李件数。",
    related: ["JP-04", "AE-03", "US-04"], standalone: false
  },
  {
    id: "JP-04", name: "东京市区包车 8 小时",
    city: "东京", region: "日本 · 东京", country: "日本", continent: "亚洲", cat: "car",
    tags: { stars: 4, age: "business", dur: "8 小时", slot: "allday" },
    price: { fixed: 1200, unit: "每车", range: "¥980–1,800 / 车" },
    desc: "按小时或全天包车，轿车、商务车可选，适配观光、商务拜访与小团体出行，司机中文沟通协助。",
    included: ["包车 8 小时", "司机服务费", "市内里程", "瓶装饮用水"],
    excluded: ["超时费", "停车费", "高速费", "司机餐补"],
    note: "超里程与超时按当地标准另计，询价时说明行程路线。",
    related: ["JP-03", "IS-04", "AR-02"], standalone: false
  },
  {
    id: "JP-05", name: "东京站周边精选酒店（按晚挂）",
    city: "东京", region: "日本 · 东京", country: "日本", continent: "亚洲", cat: "hotel",
    tags: { stars: 4, age: "couple", dur: "每晚", slot: "flexible" },
    price: { fixed: 980, unit: "每晚", range: "¥780–1,800 / 晚" },
    desc: "东京站、银座或新宿一带四星及精品酒店，按晚挂入行程，房型含双床 / 大床可选，协助早班机退房安排。",
    included: ["酒店预订", "双早或不含早可选", "行程内按晚记账"],
    excluded: ["客房内消费", "加床费", "城市住宿税"],
    note: "旺季房价浮动较大，最终以确认函为准。",
    related: ["TR-04", "NZ-01", "JP-01"], standalone: false
  },
  {
    id: "JP-06", name: "东京大学 / 早稻田大学校园参访",
    city: "东京", region: "日本 · 东京", country: "日本", continent: "亚洲", cat: "univ",
    tags: { stars: 4, age: "business", dur: "半日", slot: "flexible" },
    price: { fixed: 480, unit: "每访", range: "¥380–780 / 访" },
    desc: "知名大学校园外观与开放区域参观，结合校史简介与周边街区介绍；如需院系交流须按校方访客政策另行预约。",
    included: ["校园开放区域参观", "中文讲解", "市区交通衔接"],
    excluded: ["院系官方接待", "校内讲解牌 / 礼品店消费", "午餐"],
    note: "校园开放政策随校方安排变化，热门学期需提前预约。",
    related: ["US-03", "US-06", "JP-01"], standalone: false
  },

  /* ---- 日本 · 北海道 ---- */
  {
    id: "JP-07", name: "札幌 · 小樽 · 富良野自然一日游",
    city: "北海道", region: "日本 · 北海道", country: "日本", continent: "亚洲", cat: "attraction",
    tags: { stars: 5, age: "family", dur: "全天", slot: "allday" },
    price: { fixed: 780, unit: "每人", range: "¥600–1,380 / 人" },
    desc: "中文向导带队走小樽运河与玻璃工坊，夏季富良野花田、冬季雪景街景随季节调整，含往返用车。",
    included: ["中文向导", "全程用车", "沿途景点门票（列明项）", "行程调整建议"],
    excluded: ["季节性花田入园费", "午餐", "温泉入浴费"],
    note: "北海道线路跨度大，车程较长；季节景观以出行当日为准。",
    related: ["JP-08", "JP-01", "NZ-01"], standalone: false
  },
  {
    id: "JP-08", name: "北海道冬季雪场 / 温泉体验",
    city: "北海道", region: "日本 · 北海道", country: "日本", continent: "亚洲", cat: "attraction",
    tags: { stars: 4, age: "senior", dur: "全天", slot: "allday" },
    price: { fixed: 620, unit: "每人", range: "¥480–1,180 / 人" },
    desc: "雪场体验或温泉乡半日 / 全天安排，可选装备租赁与温泉入浴，节奏舒缓，适合长者家庭同行。",
    included: ["交通衔接", "中文向导", "雪场 / 温泉基础安排"],
    excluded: ["雪具租赁", "温泉餐食", "教练费用"],
    note: "雪季为 12 月至次年 3 月；长辈出行请注意防寒。",
    related: ["JP-07", "IS-02", "MA-02"], standalone: false
  },

  /* ---- 阿联酋 · 迪拜 ---- */
  {
    id: "AE-01", name: "迪拜市区 · 博物馆 · 海滩一日游",
    city: "迪拜", region: "阿联酋 · 迪拜", country: "阿联酋", continent: "亚洲", cat: "attraction",
    tags: { stars: 5, age: "all", dur: "全天", slot: "allday" },
    price: { fixed: 720, unit: "每人", range: "¥560–1,380 / 人" },
    desc: "阿布扎比大清真寺或迪拜博物馆、滨海码头与朱美拉海滩串联游览，中文讲解城市发展史与当地习俗。",
    included: ["中文导游", "景点门票", "空调用车", "瓶装饮用水"],
    excluded: ["午餐", "自费购物", "博物馆特别展"],
    note: "清真寺需着长袖长裤、女士备头巾；行程尊重当地宗教习惯。",
    related: ["AE-02", "AE-05", "EG-01"], standalone: false
  },
  {
    id: "AE-02", name: "沙漠冲沙营地之夜（含晚餐）",
    city: "迪拜", region: "阿联酋 · 迪拜", country: "阿联酋", continent: "亚洲", cat: "attraction",
    tags: { stars: 5, age: "family", dur: "夜间", slot: "night" },
    price: { fixed: 580, unit: "每人", range: "¥420–980 / 人" },
    desc: "下午接车进入沙漠冲沙，营地含烧烤晚餐、阿拉伯水烟与肚皮舞表演，傍晚至夜间返回市区。",
    included: ["酒店往返接送", "冲沙体验", "营地晚餐", "营地表演观赏"],
    excluded: ["水烟", "酒精饮品", "自费骑骆驼 / 汉娜手绘"],
    note: "孕妇与颈椎不适者不宜冲沙段；儿童年龄以营地规定为准。",
    related: ["AE-01", "MA-02", "TR-03"], standalone: false
  },
  {
    id: "AE-03", name: "迪拜机场私人接送",
    city: "迪拜", region: "阿联酋 · 迪拜", country: "阿联酋", continent: "亚洲", cat: "transfer",
    tags: { stars: 4, age: "business", dur: "每程", slot: "flexible" },
    price: { fixed: 380, unit: "每车", range: "¥300–560 / 车" },
    desc: "迪拜国际机场（DXB）举牌接送，商务车与轿车可选，支持多件行李与长时间航班延误等候。",
    included: ["举牌接机", "私人车辆", "航班跟踪", "基础等候时长"],
    excluded: ["深夜附加费", "额外等候费", "行李超件附加"],
    note: "请提供航班号与到达航站楼。",
    related: ["AE-04", "JP-03", "PA-02"], standalone: false
  },
  {
    id: "AE-04", name: "迪拜市区包车半日",
    city: "迪拜", region: "阿联酋 · 迪拜", country: "阿联酋", continent: "亚洲", cat: "car",
    tags: { stars: 4, age: "couple", dur: "半日", slot: "afternoon" },
    price: { fixed: 860, unit: "每车", range: "¥680–1,380 / 车" },
    desc: "下午半日包车，按您的路线停靠商场、海滩与地标，司机协助沟通，适合情侣与小团体自由安排。",
    included: ["包车半日", "司机服务", "市内里程"],
    excluded: ["超时费", "停车费", "门票与消费"],
    note: "半日按 4 小时计；跨酋长国行程另行报价。",
    related: ["AE-03", "AE-01", "JP-04"], standalone: false
  },
  {
    id: "AE-05", name: "哈利法塔 / 迪拜购物中心观景门票",
    city: "迪拜", region: "阿联酋 · 迪拜", country: "阿联酋", continent: "亚洲", cat: "attraction",
    tags: { stars: 4, age: "all", dur: "灵活", slot: "flexible" },
    price: { fixed: 260, unit: "每人", range: "¥220–460 / 人" },
    desc: "哈利法塔观景台时段门票代为预订，可搭配迪拜购物中心音乐喷泉时段；门票类产品不占用行程时段，单独咨询出票。",
    included: ["观景台门票预订协助", "时段建议"],
    excluded: ["升层门票", "餐饮", "往返交通"],
    note: "热门日落时段票源紧张，需提前确认。",
    related: ["AE-01", "AE-02", "FR-01"], standalone: true
  },

  /* ---- 土耳其 · 伊斯坦布尔 ---- */
  {
    id: "TR-01", name: "老城圣索菲亚 · 蓝色清真寺 · 大巴扎步行游",
    city: "伊斯坦布尔", region: "土耳其 · 伊斯坦布尔", country: "土耳其", continent: "亚洲", cat: "attraction",
    tags: { stars: 5, age: "senior", dur: "全天", slot: "allday" },
    price: { fixed: 640, unit: "每人", range: "¥480–1,180 / 人" },
    desc: "老城历史半岛步行导览：圣索菲亚大教堂、蓝色清真寺、地下水宫与大巴扎，中文讲解拜占庭与奥斯曼历史脉络。",
    included: ["中文导游", "列明景点门票", "老城步行讲解", "市内交通衔接"],
    excluded: ["午餐", "大巴扎购物", "咖啡馆消费"],
    note: "清真寺参观需脱鞋，女士备头巾；老城石板路步行较多。",
    related: ["TR-02", "TR-03", "IT-01"], standalone: false
  },
  {
    id: "TR-02", name: "博斯普鲁斯海峡游船（下午）",
    city: "伊斯坦布尔", region: "土耳其 · 伊斯坦布尔", country: "土耳其", continent: "亚洲", cat: "attraction",
    tags: { stars: 4, age: "couple", dur: "下午", slot: "afternoon" },
    price: { fixed: 380, unit: "每人", range: "¥280–620 / 人" },
    desc: "下午海峡游船穿行欧亚两岸，眺望水岸别墅与城墙，靠岸后衔接香料市场或咖啡馆自由活动。",
    included: ["船票", "中文集合讲解", "集合点往返协助"],
    excluded: ["船上餐饮", "小费", "上岸购物"],
    note: "海风较大，建议备外套；游船班次随季节调整。",
    related: ["TR-01", "NZ-01", "AQ-01"], standalone: false
  },

  /* ---- 土耳其 · 卡帕多奇亚 ---- */
  {
    id: "TR-03", name: "热气球日出 + 格雷梅地下城一日",
    city: "卡帕多奇亚", region: "土耳其 · 卡帕多奇亚", country: "土耳其", continent: "亚洲", cat: "attraction",
    tags: { stars: 5, age: "young", dur: "上午", slot: "morning" },
    price: { fixed: 1380, unit: "每人", range: "¥1,080–2,180 / 人" },
    desc: "清晨热气球升空看精灵烟囱地貌，落地后续游格雷梅露天博物馆与地下城，含日出接送与早餐轻食。",
    included: ["热气球飞行（按天气出票）", "日出接送", "地下城门票", "简早餐"],
    excluded: ["午餐", "格雷梅其他付费点", "飞行保险"],
    note: "热气球受风力与天气影响，可能当日取消，会按政策改期或退款。",
    related: ["TR-04", "TR-01", "IS-01"], standalone: false
  },
  {
    id: "TR-04", name: "卡帕多奇亚洞穴酒店（按晚挂）",
    city: "卡帕多奇亚", region: "土耳其 · 卡帕多奇亚", country: "土耳其", continent: "亚洲", cat: "hotel",
    tags: { stars: 5, age: "couple", dur: "每晚", slot: "flexible" },
    price: { fixed: 1180, unit: "每晚", range: "¥880–2,200 / 晚" },
    desc: "格雷梅悬崖洞穴酒店特色房型，含露台观热气球视角，按晚挂入行程，协助早班热气球叫醒安排。",
    included: ["洞穴房型预订", "早餐", "行程内按晚记账"],
    excluded: ["客房内消费", "水疗项目", "加床费"],
    note: "洞穴房型隔音与层高各有差异，可按偏好备注。",
    related: ["TR-03", "JP-05", "MA-01"], standalone: false
  },

  /* ---- 约旦 · 佩特拉 ---- */
  {
    id: "JO-01", name: "佩特拉古城全天徒步导览",
    city: "佩特拉", region: "约旦 · 佩特拉", country: "约旦", continent: "亚洲", cat: "attraction",
    tags: { stars: 5, age: "senior", dur: "全天", slot: "allday" },
    price: { fixed: 880, unit: "每人", range: "¥680–1,480 / 人" },
    desc: "纳巴泰古城全天徒步：蛇道、峡谷栈道、卡兹尼神殿与修道院观景点，中文向导讲解古城历史与路线节奏。",
    included: ["中文向导", "佩特拉门票", "往返交通", "饮用水"],
    excluded: ["午餐", "骑骆驼 / 马车", "拍照道具消费"],
    note: "全程步行距离长、海拔起伏，长者请评估体力并备防晒。",
    related: ["JO-02", "TR-01", "EG-01"], standalone: false
  },
  {
    id: "JO-02", name: "安曼市区接送与转场用车",
    city: "安曼", region: "约旦 · 佩特拉", country: "约旦", continent: "亚洲", cat: "transfer",
    tags: { stars: 4, age: "all", dur: "每程", slot: "flexible" },
    price: { fixed: 420, unit: "每车", range: "¥320–620 / 车" },
    desc: "安曼机场或市区酒店点对点接送，安曼至佩特拉长途转场亦可按段安排，车辆按人数与行李配置。",
    included: ["点对点接送", "司机服务", "基础等候"],
    excluded: ["长途分段附加", "停车费", "行李超件"],
    note: "跨城转场车程较长，建议在询价时说明出发与到达城市。",
    related: ["JO-01", "PA-01", "MX-01"], standalone: false
  },

  /* ---- 格鲁吉亚 · 第比利斯 ---- */
  {
    id: "GE-01", name: "第比利斯老城 · 堡垒 · 葡萄酒坊半日游",
    city: "第比利斯", region: "格鲁吉亚 · 第比利斯", country: "格鲁吉亚", continent: "亚洲", cat: "attraction",
    tags: { stars: 4, age: "couple", dur: "下午", slot: "afternoon" },
    price: { fixed: 460, unit: "每人", range: "¥360–720 / 人" },
    desc: "老城蜿蜒街巷、和平桥与山顶堡垒步行游览，午后安排传统葡萄酒坊品鉴，中文讲解高加索葡萄酒文化。",
    included: ["中文向导", "老城步行讲解", "酒坊品鉴位"],
    excluded: ["餐食", "自费品酒加购", "上下山缆车"],
    note: "未成年同行时酒坊环节改为果汁 / 茶点体验。",
    related: ["GE-02", "TR-02", "FR-02"], standalone: false
  },
  {
    id: "GE-02", name: "第比利斯近郊雪山包车一日",
    city: "第比利斯", region: "格鲁吉亚 · 第比利斯", country: "格鲁吉亚", continent: "亚洲", cat: "car",
    tags: { stars: 4, age: "family", dur: "全天", slot: "allday" },
    price: { fixed: 1180, unit: "每车", range: "¥880–1,680 / 车" },
    desc: "近郊雪山古镇与山口观景包车一日，家庭小团灵活停靠，司机协助路况与休憩安排。",
    included: ["全天包车", "司机服务", "市内里程"],
    excluded: ["山路通行费", "门票", "午餐与加餐"],
    note: "冬季部分山口受天气影响封路，出行前确认路况。",
    related: ["GE-01", "IS-01", "JP-07"], standalone: false
  },

  /* ==================== 欧洲 ==================== */

  /* ---- 冰岛 · 雷克雅未克 ---- */
  {
    id: "IS-01", name: "南岸瀑布 · 黑沙滩 · 冰川徒步一日游",
    city: "雷克雅未克", region: "冰岛 · 雷克雅未克", country: "冰岛", continent: "欧洲", cat: "attraction",
    tags: { stars: 5, age: "all", dur: "全天", slot: "allday" },
    price: { fixed: 980, unit: "每人", range: "¥780–1,680 / 人" },
    desc: "南岸经典自然线路：塞里雅兰瀑布、斯科加瀑布、维克黑沙滩与冰川徒步体验，中文向导讲解冰岛地貌与安全须知。",
    included: ["中文向导", "全程用车", "冰川徒步基础装备", "列明门票"],
    excluded: ["午餐", "保险", "防水外套（可自备或租赁）"],
    note: "风大温差大，需按向导指令穿脱装备；冰川段有体力要求。",
    related: ["IS-02", "GE-02", "TR-03"], standalone: false
  },
  {
    id: "IS-02", name: "极光观测之夜（冬季）",
    city: "雷克雅未克", region: "冰岛 · 雷克雅未克", country: "冰岛", continent: "欧洲", cat: "attraction",
    tags: { stars: 5, age: "young", dur: "夜间", slot: "night" },
    price: { fixed: 520, unit: "每人", range: "¥400–860 / 人" },
    desc: "冬季夜晚追光团离开市区光污染区，按极光指数调整观测点，向导协助拍摄与防寒安排。",
    included: ["夜间用车", "向导带队", "观测点等候"],
    excluded: ["极光出现不保证", "热饮加餐", "摄影器材"],
    note: "极光受天气与太阳活动影响，未观测到时按团政策安排再次或退款。",
    related: ["IS-01", "JP-08", "AE-02"], standalone: false
  },
  {
    id: "IS-03", name: "凯夫拉维克机场接送",
    city: "雷克雅未克", region: "冰岛 · 雷克雅未克", country: "冰岛", continent: "欧洲", cat: "transfer",
    tags: { stars: 4, age: "all", dur: "每程", slot: "flexible" },
    price: { fixed: 360, unit: "每车", range: "¥280–520 / 车" },
    desc: "凯夫拉维克机场（KEF）至雷克雅未克市区点对点接送，按航班时间安排，行李空间充足。",
    included: ["举牌接机", "私人车辆", "航班跟踪"],
    excluded: ["深夜附加费", "额外等候", "大件行李附加"],
    note: "机场距市区约 45 分钟车程，请预留充足时间。",
    related: ["IS-04", "IS-01", "NZ-02"], standalone: false
  },
  {
    id: "IS-04", name: "雷克雅未克市区包车 6 小时",
    city: "雷克雅未克", region: "冰岛 · 雷克雅未克", country: "冰岛", continent: "欧洲", cat: "car",
    tags: { stars: 4, age: "business", dur: "6 小时", slot: "allday" },
    price: { fixed: 980, unit: "每车", range: "¥780–1,480 / 车" },
    desc: "市区及周边半日 / 全天包车，适配商务拜访与自由观光，路线可在出发前与向导沟通调整。",
    included: ["包车 6 小时", "司机服务", "市内里程"],
    excluded: ["超时费", "停车费", "门票与消费"],
    note: "冰岛油价与人工成本较高，跨区线路另行报价。",
    related: ["IS-03", "JP-04", "AR-02"], standalone: false
  },

  /* ---- 法国 · 巴黎 ---- */
  {
    id: "FR-01", name: "卢浮宫 · 塞纳河 · 香街经典一日游",
    city: "巴黎", region: "法国 · 巴黎", country: "法国", continent: "欧洲", cat: "attraction",
    tags: { stars: 5, age: "couple", dur: "全天", slot: "allday" },
    price: { fixed: 820, unit: "每人", range: "¥620–1,480 / 人" },
    desc: "卢浮宫重点藏品导览、塞纳河步行与香榭丽舍大街漫步，中文讲解艺术史与城市街区，含门票预约协助。",
    included: ["中文导游", "卢浮宫门票", "集合往返协助"],
    excluded: ["塞纳河游船票", "午餐", "购物消费"],
    note: "博物馆安检与排队时间较长；请随身带好证件。",
    related: ["FR-02", "IT-01", "JP-01"], standalone: false
  },
  {
    id: "FR-02", name: "歌剧院 · 蒙马特高地半日漫步",
    city: "巴黎", region: "法国 · 巴黎", country: "法国", continent: "欧洲", cat: "attraction",
    tags: { stars: 4, age: "all", dur: "下午", slot: "afternoon" },
    price: { fixed: 420, unit: "每人", range: "¥320–680 / 人" },
    desc: "午后漫步加尼耶歌剧院外观与蒙马特高地、画家广场，沿坡地俯瞰巴黎屋顶，节奏轻松适合自由行衔接。",
    included: ["中文向导", "街区步行讲解"],
    excluded: ["歌剧院内部门票", "咖啡馆消费", "午餐"],
    note: "高地台阶较多，建议穿防滑鞋。",
    related: ["FR-01", "GE-01", "IT-02"], standalone: false
  },
  {
    id: "FR-03", name: "戴高乐机场私人接送",
    city: "巴黎", region: "法国 · 巴黎", country: "法国", continent: "欧洲", cat: "transfer",
    tags: { stars: 4, age: "business", dur: "每程", slot: "flexible" },
    price: { fixed: 480, unit: "每车", range: "¥380–680 / 车" },
    desc: "戴高乐（CDG）或奥利（ORY）机场至市区酒店接送，举牌等候，商务车型可选。",
    included: ["举牌接机", "私人车辆", "航班延误跟踪"],
    excluded: ["深夜附加费", "停车费", "行李超件"],
    note: "请提供航班号、航站楼与到达时间。",
    related: ["FR-01", "JP-03", "AE-03"], standalone: false
  },

  /* ---- 意大利 · 罗马 ---- */
  {
    id: "IT-01", name: "斗兽场 · 古罗马广场 · 许愿泉一日导览",
    city: "罗马", region: "意大利 · 罗马", country: "意大利", continent: "欧洲", cat: "attraction",
    tags: { stars: 5, age: "all", dur: "全天", slot: "allday" },
    price: { fixed: 680, unit: "每人", range: "¥520–1,280 / 人" },
    desc: "古罗马核心遗址串联导览：斗兽场、古罗马广场与帕拉蒂尼山，午后步行至许愿泉与特雷维街区，中文讲解历史脉络。",
    included: ["中文导游", "斗兽场等门票", "步行讲解"],
    excluded: ["午餐", "缆车 / 电瓶车", "个人消费"],
    note: "遗址区露天日晒强，夏季注意补水与防晒。",
    related: ["IT-02", "TR-01", "FR-01"], standalone: false
  },
  {
    id: "IT-02", name: "梵蒂冈博物馆 · 圣彼得大教堂半日",
    city: "罗马", region: "意大利 · 罗马", country: "意大利", continent: "欧洲", cat: "attraction",
    tags: { stars: 4, age: "senior", dur: "上午", slot: "morning" },
    price: { fixed: 520, unit: "每人", range: "¥380–820 / 人" },
    desc: "上午预约进入梵蒂冈博物馆与西斯廷礼拜堂，随后步行圣彼得大教堂广场与内部参观，节奏舒缓。",
    included: ["博物馆门票预约", "中文讲解", "集合协助"],
    excluded: ["大教堂登顶电梯", "午餐", "纪念品消费"],
    note: "教堂着装要求遮盖膝盖与肩膀；礼拜时段参观受限。",
    related: ["IT-01", "FR-02", "TR-01"], standalone: false
  },

  /* ==================== 北美 ==================== */

  /* ---- 美国 · 西雅图 ---- */
  {
    id: "US-01", name: "派克市场 · 太空针塔 · 雷尼尔山方向一日游",
    city: "西雅图", region: "美国 · 西雅图", country: "美国", continent: "北美", cat: "attraction",
    tags: { stars: 5, age: "family", dur: "全天", slot: "allday" },
    price: { fixed: 760, unit: "每人", range: "¥580–1,380 / 人" },
    desc: "市区派克市场、海滨与太空针塔观景，视天气安排雷尼尔山方向自然景观停靠，中文向导讲解城市与周边。",
    included: ["中文向导", "市区用车", "列明景点门票"],
    excluded: ["雷尼尔山入园费（按季节）", "午餐", "索道自费段"],
    note: "山地区域天气多变，出发前确认山路开放情况。",
    related: ["US-02", "US-03", "AU-01"], standalone: false
  },
  {
    id: "US-02", name: "西雅图科技企业参访（按审批）",
    city: "西雅图", region: "美国 · 西雅图", country: "美国", continent: "北美", cat: "corp",
    tags: { stars: 4, age: "business", dur: "半日", slot: "flexible" },
    price: { fixed: 980, unit: "每访", range: "¥680–1,800 / 访" },
    desc: "科技园区、创新集群或企业展厅外观与开放区域参访，含商务对接沟通协助；正式进入须按对方接待审批安排。",
    included: ["参访行程规划", "交通衔接", "商务沟通协助"],
    excluded: ["企业官方接待函", "翻译同传（如需另计）", "商务餐叙"],
    note: "企业参访受对方安保与档期限制，需提前提交访客信息。",
    related: ["US-03", "JP-06", "GE-01"], standalone: false
  },
  {
    id: "US-03", name: "华盛顿大学校园参访",
    city: "西雅图", region: "美国 · 西雅图", country: "美国", continent: "北美", cat: "univ",
    tags: { stars: 4, age: "family", dur: "半日", slot: "flexible" },
    price: { fixed: 420, unit: "每访", range: "¥320–680 / 访" },
    desc: "华盛顿大学开放校园参观，涵盖著名图书馆、樱花大道与教学楼外观，适合亲子留学了解与家长同行。",
    included: ["校园开放区域参观", "中文讲解", "市区交通衔接"],
    excluded: ["院系官方接待", "校内活动门票", "餐饮"],
    note: "樱花季与考试季校园人流较大，开放区域以校方公告为准。",
    related: ["US-06", "US-02", "JP-06"], standalone: false
  },
  {
    id: "US-04", name: "西雅图塔科马机场接送",
    city: "西雅图", region: "美国 · 西雅图", country: "美国", continent: "北美", cat: "transfer",
    tags: { stars: 4, age: "business", dur: "每程", slot: "flexible" },
    price: { fixed: 420, unit: "每车", range: "¥320–620 / 车" },
    desc: "西雅图塔科马国际机场（SEA）至市区酒店接送，举牌等候，支持多人多行李配置车型。",
    included: ["举牌接机", "私人车辆", "航班跟踪"],
    excluded: ["深夜附加费", "额外等候费", "行李超件"],
    note: "美国境内接机请预留清关与取行李时间。",
    related: ["US-01", "US-05", "JP-03"], standalone: false
  },

  /* ---- 美国 · 纽约 ---- */
  {
    id: "US-05", name: "曼哈顿地标 · 自由女神 · 中央公园一日游",
    city: "纽约", region: "美国 · 纽约", country: "美国", continent: "北美", cat: "attraction",
    tags: { stars: 5, age: "all", dur: "全天", slot: "allday" },
    price: { fixed: 820, unit: "每人", range: "¥620–1,480 / 人" },
    desc: "曼哈顿下城地标、自由女神渡轮与中央公园串联一日，中文讲解城市历史与街区，含基础交通衔接。",
    included: ["中文导游", "自由女神渡轮票", "市区交通协助"],
    excluded: ["登岛皇冠 / 底座门票", "午餐", "博物馆自费"],
    note: "渡轮班次受天气影响；曼哈顿步行距离较长。",
    related: ["US-06", "US-01", "FR-01"], standalone: false
  },
  {
    id: "US-06", name: "纽约大学 / 哥伦比亚大学校区参观",
    city: "纽约", region: "美国 · 纽约", country: "美国", continent: "北美", cat: "univ",
    tags: { stars: 4, age: "young", dur: "半日", slot: "flexible" },
    price: { fixed: 460, unit: "每访", range: "¥360–720 / 访" },
    desc: "纽约大学或哥伦比亚大学开放校区参观，含校园历史、专业分布与周边生活介绍，适合学生与家长了解。",
    included: ["校园开放区域参观", "中文讲解", "交通衔接"],
    excluded: ["招生官方面谈", "院系参观", "餐饮"],
    note: "校园部分区域受安保管理，开放范围以现场为准。",
    related: ["US-03", "JP-06", "US-05"], standalone: false
  },

  /* ---- 墨西哥 ---- */
  {
    id: "MX-01", name: "墨西哥城历史中心 · 人类学博物馆半日",
    city: "墨西哥城", region: "墨西哥 · 墨西哥城", country: "墨西哥", continent: "北美", cat: "attraction",
    tags: { stars: 4, age: "young", dur: "下午", slot: "afternoon" },
    price: { fixed: 480, unit: "每人", range: "¥360–760 / 人" },
    desc: "宪法广场、大都会大教堂与国家人类学博物馆半日导览，中文讲解阿兹特克与殖民历史，含老城街区步行。",
    included: ["中文向导", "博物馆门票", "市内交通衔接"],
    excluded: ["午餐", "老城小吃自费", "纪念品"],
    note: "高原城市注意适应海拔；老城晚间部分区域建议随团行动。",
    related: ["MX-02", "PA-01", "JO-02"], standalone: false
  },
  {
    id: "MX-02", name: "坎昆海滩与玛雅遗址奇琴伊察一日游",
    city: "坎昆", region: "墨西哥 · 墨西哥城", country: "墨西哥", continent: "北美", cat: "attraction",
    tags: { stars: 5, age: "couple", dur: "全天", slot: "allday" },
    price: { fixed: 680, unit: "每人", range: "¥520–1,180 / 人" },
    desc: "尤卡坦半岛玛雅遗址奇琴伊察一日往返，含圣井与库库尔坎金字塔讲解，回程可衔接海滩度假区域。",
    included: ["往返用车", "中文向导", "遗址门票"],
    excluded: ["午餐", "天然溶洞游泳", "导游小费"],
    note: "遗址露天炎热，注意防晒补水；车程较长。",
    related: ["MX-01", "BR-01", "PA-01"], standalone: false
  },

  /* ---- 巴拿马 ---- */
  {
    id: "PA-01", name: "巴拿马运河船闸 · 老城城区半日游",
    city: "巴拿马城", region: "巴拿马 · 巴拿马城", country: "巴拿马", continent: "北美", cat: "attraction",
    tags: { stars: 4, age: "business", dur: "下午", slot: "afternoon" },
    price: { fixed: 460, unit: "每人", range: "¥360–720 / 人" },
    desc: "参观运河船闸观景台看巨轮过闸，午后走访老城彩色街区与海滨大道，中文讲解运河史与城市定位。",
    included: ["中文向导", "船闸观景台门票", "市内用车"],
    excluded: ["午餐", "老城购物", "咖啡消费"],
    note: "船闸观景受过闸班次影响，可按当日船期调整顺序。",
    related: ["PA-02", "MX-01", "JO-02"], standalone: false
  },
  {
    id: "PA-02", name: "巴拿马城机场接送",
    city: "巴拿马城", region: "巴拿马 · 巴拿马城", country: "巴拿马", continent: "北美", cat: "transfer",
    tags: { stars: 4, age: "all", dur: "每程", slot: "flexible" },
    price: { fixed: 320, unit: "每车", range: "¥260–480 / 车" },
    desc: "托库门国际机场（PTY）至市区酒店点对点接送，按航班到达时间等候，车型适配团队人数。",
    included: ["举牌接机", "私人车辆", "航班跟踪"],
    excluded: ["额外等候费", "行李超件", "深夜附加"],
    note: "巴拿马为中转枢纽，转机衔接请预留通关时间。",
    related: ["PA-01", "AE-03", "JO-02"], standalone: false
  },

  /* ==================== 南美 ==================== */

  /* ---- 秘鲁 ---- */
  {
    id: "PE-01", name: "马丘比丘经典一日（含山景火车）",
    city: "库斯科", region: "秘鲁 · 库斯科", country: "秘鲁", continent: "南美", cat: "attraction",
    tags: { stars: 5, age: "senior", dur: "全天", slot: "allday" },
    price: { fixed: 1680, unit: "每人", range: "¥1,280–2,680 / 人" },
    desc: "库斯科出发乘山景火车进入圣谷，抵达马丘比丘遗址徒步讲解，中文向导安排登山口与行程节奏。",
    included: ["往返火车席位", "遗址门票", "中文向导", "接驳车"],
    excluded: ["山区步道附加票", "午餐", "旅行保险"],
    note: "高海拔地区请先在库斯科适应；火车票源紧张，需提前预订。",
    related: ["PE-02", "AR-01", "TR-03"], standalone: false
  },
  {
    id: "PE-02", name: "库斯科老城 · 彩虹山半日徒步",
    city: "库斯科", region: "秘鲁 · 库斯科", country: "秘鲁", continent: "南美", cat: "attraction",
    tags: { stars: 4, age: "young", dur: "上午", slot: "morning" },
    price: { fixed: 580, unit: "每人", range: "¥420–980 / 人" },
    desc: "上午彩虹山高海拔徒步或库斯科老城武器广场、太阳神庙二选一安排，向导讲解高原印加文化与适应建议。",
    included: ["用车往返", "中文向导", "列明门票"],
    excluded: ["登山杖租赁", "午餐", "氧气瓶"],
    note: "彩虹山海拔约 5200 米，徒步强度较高；请勿剧烈活动。",
    related: ["PE-01", "GE-02", "IS-01"], standalone: false
  },

  /* ---- 阿根廷 ---- */
  {
    id: "AR-01", name: "博卡区 · 圣特尔莫 · 探戈之夜",
    city: "布宜诺斯艾利斯", region: "阿根廷 · 布宜诺斯艾利斯", country: "阿根廷", continent: "南美", cat: "attraction",
    tags: { stars: 5, age: "couple", dur: "傍晚", slot: "evening" },
    price: { fixed: 620, unit: "每人", range: "¥460–1,180 / 人" },
    desc: "下午走访博卡区彩色街区与圣特尔莫古董市集，晚间安排探戈表演餐厅晚餐体验，感受阿根廷夜生活。",
    included: ["市区用车", "探戈表演位", "表演套餐晚餐"],
    excluded: ["酒水", "小费", "市集购物"],
    note: "博卡区部分街区晚间不建议独行，全程随向导行动。",
    related: ["AR-02", "BR-01", "AE-02"], standalone: false
  },
  {
    id: "AR-02", name: "布宜诺斯艾利斯市区包车半日",
    city: "布宜诺斯艾利斯", region: "阿根廷 · 布宜诺斯艾利斯", country: "阿根廷", continent: "南美", cat: "car",
    tags: { stars: 4, age: "business", dur: "半日", slot: "afternoon" },
    price: { fixed: 780, unit: "每车", range: "¥600–1,180 / 车" },
    desc: "下午半日包车按路线停靠港口区、住宅区与地标，适配商务拜访与自由观光，司机协助沟通。",
    included: ["包车半日", "司机服务", "市内里程"],
    excluded: ["超时费", "停车费", "门票消费"],
    note: "城市跨区距离较大，半日路线请提前与向导确认。",
    related: ["AR-01", "IS-04", "JP-04"], standalone: false
  },

  /* ---- 巴西 ---- */
  {
    id: "BR-01", name: "基督像 · 糖面包山 · 科帕卡巴纳海滩一日游",
    city: "里约热内卢", region: "巴西 · 里约热内卢", country: "巴西", continent: "南美", cat: "attraction",
    tags: { stars: 5, age: "family", dur: "全天", slot: "allday" },
    price: { fixed: 720, unit: "每人", range: "¥560–1,280 / 人" },
    desc: "科尔科瓦多山基督像、糖面包山缆车与科帕卡巴纳海滩一日串联，中文向导安排上下山时段与海滨休憩。",
    included: ["中文向导", "列明门票 / 缆车", "往返用车"],
    excluded: ["午餐", "海滩自费项目", "小费"],
    note: "山体天气多变，基督像视野以当日云量为准。",
    related: ["BR-02", "AR-01", "MX-02"], standalone: false
  },
  {
    id: "BR-02", name: "里约市区机场接送",
    city: "里约热内卢", region: "巴西 · 里约热内卢", country: "巴西", continent: "南美", cat: "transfer",
    tags: { stars: 4, age: "all", dur: "每程", slot: "flexible" },
    price: { fixed: 360, unit: "每车", range: "¥280–540 / 车" },
    desc: "加利昂（GIG）或桑托斯杜蒙（SDU）机场至市区酒店接送，按航班时间安排，车型按行李配置。",
    included: ["举牌接机", "私人车辆", "航班跟踪"],
    excluded: ["深夜附加费", "额外等候", "行李超件"],
    note: "里约市区道路高峰拥堵，跨区接送预留时间。",
    related: ["BR-01", "AR-02", "IS-03"], standalone: false
  },

  /* ---- 巴西 · 马瑙斯（亚马逊雨林） ---- */
  {
    id: "BR-03", name: "马瑙斯机场（MAO）私人接送",
    city: "马瑙斯", region: "巴西 · 马瑙斯", country: "巴西", continent: "南美", cat: "transfer",
    tags: { stars: 4, age: "all", dur: "每程", slot: "flexible" },
    img: "assets/images/manaus/br03.jpg",
    price: { fixed: 500, unit: "每车", range: "" },
    desc: "爱德华多·戈麦斯国际机场（MAO）至马瑙斯市区酒店点对点举牌接送，轿车（3 人）、8 座 Van、VIP 商务车可选，跟踪航班延误。",
    included: ["到达大厅举牌接机", "私人车辆", "航班跟踪", "基础等候时长"],
    excluded: ["深夜附加费", "行李超件附加", "超时等候费"],
    note: "请提供航班号、人数与行李件数；往返接送可享约 10% 优惠。",
    itinerary: [
      { phase: "航班跟踪", text: "提前查询航班动态，按实际落地时间安排接机，延误顺延等候。" },
      { phase: "到达大厅举牌", text: "司机在 MAO 到达大厅举牌等候，核对人数与行李件数。" },
      { phase: "点对点送抵", text: "私人车辆直达市区酒店，协助搬运行李。" },
      { phase: "后续用车", text: "往返接送、半日或全天包车可在询价时一并安排。" },
    ],
    related: ["BR-04", "BR-15", "NZ-02"], standalone: false
  },
  {
    id: "BR-04", name: "马瑙斯市区历史导览（亚马逊剧院 · 市集 · 博物馆）半日",
    city: "马瑙斯", region: "巴西 · 马瑙斯", country: "巴西", continent: "南美", cat: "attraction",
    tags: { stars: 4, age: "senior", dur: "半日", slot: "morning" },
    img: "assets/images/manaus/br04.jpg",
    price: { fixed: 880, unit: "每人", range: "" },
    desc: "亚马逊剧院、圣塞巴斯蒂昂广场、MUMA 博物馆、Adolpho Lisboa 手工市集与省长官邸外观串联，本地向导讲解橡胶繁荣时代的城市历史。",
    included: ["本地向导", "市区用车", "列明景点外观 / 入内项"],
    excluded: ["午餐", "博物馆付费特展", "小费"],
    note: "剧院周一闭馆、博物馆周末闭馆，行程顺序按开放日调整。",
    itinerary: [
      { phase: "酒店接车", text: "上午市区用车出发，前往亚马逊剧院片区。" },
      { phase: "剧院与广场", text: "参观亚马逊剧院外观/入内，圣塞巴斯蒂昂广场讲解橡胶繁荣时代城市历史。" },
      { phase: "博物馆与市集", text: "MUMA 博物馆、Adolpho Lisboa 手工市集、省长官邸外观串联。" },
      { phase: "送回市区", text: "行程结束返回市区酒店或指定地点。" },
    ],
    related: ["BR-03", "BR-05", "AR-01"], standalone: false
  },
  {
    id: "BR-05", name: "两河交汇 · 原住民村 · 粉海豚一日游船",
    city: "马瑙斯", region: "巴西 · 马瑙斯", country: "巴西", continent: "南美", cat: "attraction",
    tags: { stars: 5, age: "family", dur: "全天", slot: "allday" },
    img: "assets/images/manaus/br05.jpg",
    price: { fixed: 1400, unit: "每人", range: "" },
    desc: "内格罗河与索利蒙伊斯河交汇奇观、Janauari 生态公园王莲与巨人树、粉海豚平台与原住民村落探访，含区域自助午餐。",
    included: ["全天游船", "往返用车", "本地向导", "自助午餐", "饮用水"],
    excluded: ["酒水", "小费", "纪念品消费"],
    note: "洪水季（1–6 月）与旱季（7–12 月）停靠点不同，景观以出行当日为准。",
    itinerary: [
      { phase: "酒店接车", text: "上午集合，前往内格罗河码头登船。" },
      { phase: "两河交汇", text: "观赏黑水与白水交汇分界线，Janauari 生态公园王莲与巨人树。" },
      { phase: "海豚与原住民村", text: "停靠粉海豚平台互动，探访原住民村落了解当地生活。" },
      { phase: "自助午餐", text: "区域餐厅自助午餐（含）。" },
      { phase: "返回马瑙斯", text: "下午收船，用车送回市区酒店。" },
    ],
    related: ["BR-06", "BR-07", "MX-02"], standalone: false
  },
  {
    id: "BR-06", name: "内格罗河 Safari 半日（丛林徒步 · 垂钓 · 船游）",
    city: "马瑙斯", region: "巴西 · 马瑙斯", country: "巴西", continent: "南美", cat: "attraction",
    tags: { stars: 4, age: "young", dur: "下午", slot: "afternoon" },
    img: "assets/images/manaus/br06.jpg",
    price: { fixed: 880, unit: "每人", range: "" },
    desc: "内格罗河雨林边缘徒步、钓食人鱼体验与独木舟 / 游船穿行洪泛森林，观察猴群、鸟类与岸边野生动物。",
    included: ["船游", "本地向导", "钓具体验", "徒步装备协助"],
    excluded: ["午餐", "旅行保险", "丛林涉水装备"],
    note: "蚊虫较多，建议自备长袖长裤与防蚊液。",
    itinerary: [
      { phase: "码头登船", text: "下午集合前往内格罗河码头。" },
      { phase: "船游洪泛森林", text: "游船穿行黑水雨林边缘，观察猴群、鸟类与岸边野生动物。" },
      { phase: "徒步与垂钓", text: "雨林边缘短途徒步，钓食人鱼体验。" },
      { phase: "返程", text: "傍晚返回码头，用车送回市区。" },
    ],
    related: ["BR-05", "BR-09", "PE-02"], standalone: false
  },
  {
    id: "BR-07", name: "阿纳维利亚纳斯群岛一日游（国家公园 · 黑河水浴）",
    city: "马瑙斯", region: "巴西 · 马瑙斯", country: "巴西", continent: "南美", cat: "attraction",
    tags: { stars: 5, age: "all", dur: "全天", slot: "allday" },
    img: "assets/images/manaus/br07.jpg",
    price: { fixed: 1580, unit: "每人", range: "" },
    desc: "内格罗河阿纳维利亚纳斯群岛国家公园航行，途经洪泛森林 / 沙洲、河畔社区与手工艺作坊，停靠黑河水浴与海豚互动。",
    included: ["全天游船", "往返用车", "本地向导", "午餐"],
    excluded: ["酒水", "公园门票附加", "小费"],
    note: "旱季为沙洲海滩、洪水季为洪泛森林，两种景观体验不同。",
    itinerary: [
      { phase: "出发登船", text: "上午用车送至码头，进入阿纳维利亚纳斯群岛国家公园水域。" },
      { phase: "群岛航行", text: "途经洪泛森林/沙洲、河畔社区与手工艺作坊停靠参观。" },
      { phase: "水浴与海豚", text: "停靠开阔河段黑河水浴，与海豚近距离互动。" },
      { phase: "午餐返程", text: "区域午餐后乘船返回，傍晚送回市区。" },
    ],
    related: ["BR-05", "BR-13", "NZ-01"], standalone: false
  },
  {
    id: "BR-08", name: "总统菲格雷多瀑布一日游（洞穴 · 水晶湖 · 步道）",
    city: "马瑙斯", region: "巴西 · 马瑙斯", country: "巴西", continent: "南美", cat: "attraction",
    tags: { stars: 4, age: "family", dur: "全天", slot: "allday" },
    img: "assets/images/manaus/br08.jpg",
    price: { fixed: 920, unit: "每人", range: "" },
    desc: "前往内陆瀑布群地区，Maroaga 洞穴与 Judéia 石窟、水晶湖、红河与 Iracema 瀑布短途步道，含往返用车与区域午餐。",
    included: ["往返用车", "本地向导", "列明瀑布 / 洞穴项", "午餐"],
    excluded: ["酒水", "涉水装备", "旅行保险"],
    note: "车程约 1.5–2 小时，步道湿滑，建议穿防滑鞋。",
    itinerary: [
      { phase: "车程出发", text: "上午用车前往 Presidente Figueiredo 瀑布群（车程约 1.5–2 小时）。" },
      { phase: "洞穴与石窟", text: "探访 Maroaga 洞穴、Judéia 石窟步道。" },
      { phase: "水晶湖与瀑布", text: "水晶湖、红河与 Iracema 瀑布短途步道，可临水休憩。" },
      { phase: "午餐返程", text: "区域午餐后返回马瑙斯市区。" },
    ],
    related: ["BR-09", "IS-01", "PE-02"], standalone: false
  },
  {
    id: "BR-09", name: "丛林冒险一日（树攀 · 射箭 · 滑索 · 独木舟 · 粉海豚游泳）",
    city: "马瑙斯", region: "巴西 · 马瑙斯", country: "巴西", continent: "南美", cat: "attraction",
    tags: { stars: 5, age: "young", dur: "全天", slot: "allday" },
    img: "assets/images/manaus/br09.jpg",
    price: { fixed: 1800, unit: "每人", range: "" },
    desc: "深度雨林一日：粉海豚同泳、雨林徒步、树攀 / 射箭 / 滑索与独木舟穿行，本地向导讲解药用植物与丛林生存知识。",
    included: ["往返用车", "本地向导", "列明体验项目", "简餐 / 饮用水"],
    excluded: ["午餐加餐", "旅行保险", "防水袋租赁"],
    note: "项目强度较高，不建议孕妇与心血管不适者参加树攀 / 滑索段。",
    itinerary: [
      { phase: "接车出发", text: "上午集合进入雨林保护区。" },
      { phase: "雨林徒步", text: "向导带领徒步，讲解药用植物与丛林生存知识。" },
      { phase: "体验项目", text: "树攀/射箭/滑索、独木舟穿行洪泛森林。" },
      { phase: "海豚同泳", text: "停靠河段与粉海豚同泳。" },
      { phase: "简餐后返程", text: "简餐/饮用水后返回市区。" },
    ],
    related: ["BR-06", "BR-11", "IS-01"], standalone: false
  },
  {
    id: "BR-10", name: "内格罗河夜间寻鳄之旅",
    city: "马瑙斯", region: "巴西 · 马瑙斯", country: "巴西", continent: "南美", cat: "attraction",
    tags: { stars: 4, age: "couple", dur: "夜间", slot: "night" },
    img: "assets/images/manaus/br10.jpg",
    price: { fixed: 2040, unit: "每人", range: "" },
    desc: "傍晚至夜间内河船游，手电搜寻岸边凯门鳄，观察夜间雨林虫鸣与星空，向导讲解河流生态。",
    included: ["夜间游船", "本地向导", "往返用车", "饮用水"],
    excluded: ["晚餐", "酒水", "小费"],
    note: "夜间河面气温下降，建议备薄外套；观鳄为自然观察，不保证所见数量。",
    itinerary: [
      { phase: "傍晚接车", text: "傍晚集合前往内格罗河码头。" },
      { phase: "夜间游船", text: "乘船进入内河，手电搜寻岸边凯门鳄。" },
      { phase: "生态讲解", text: "向导讲解夜间雨林虫鸣、星空与河流生态。" },
      { phase: "返程", text: "夜间返回码头，用车送回市区酒店。" },
    ],
    related: ["BR-05", "AE-02", "IS-02"], standalone: false
  },
  {
    id: "BR-11", name: "亚马逊丛林 2 日 1 夜木屋体验",
    city: "马瑙斯", region: "巴西 · 马瑙斯", country: "巴西", continent: "南美", cat: "attraction",
    tags: { stars: 4, age: "family", dur: "2 天", slot: "allday" },
    img: "assets/images/manaus/br11.jpg",
    price: { fixed: 3460, unit: "每人", range: "" },
    desc: "马瑙斯出发渡过内格罗河 / 索利蒙伊斯河进入雨林木屋，含丛林徒步、夜宿营地 / 木屋、三餐与向导，体验雨林夜色与黎明。",
    included: ["往返车船", "1 晚木屋 / 营地住宿", "列明餐食", "本地向导", "列明体验项目"],
    excluded: ["酒水", "旅行保险", "单人房差"],
    note: "木屋条件简朴，蚊虫与湿度较高；儿童年龄与餐食需在询价时说明。",
    itinerary: [
      { phase: "第 1 天上午", text: "马瑙斯集合，渡过内格罗河/索利蒙伊斯河进入雨林。" },
      { phase: "第 1 天下午", text: "抵达木屋办理入住，熟悉营地环境与安全须知，下午丛林徒步观察动植物。" },
      { phase: "第 1 天夜晚", text: "雨林晚餐，夜间观察丛林声响与星空。" },
      { phase: "第 2 天清晨", text: "早起看雨林黎明与河上晨雾。" },
      { phase: "第 2 天上午", text: "早餐后车船返回马瑙斯，行程结束。" },
    ],
    related: ["BR-12", "BR-13", "AU-01"], standalone: false
  },
  {
    id: "BR-12", name: "亚马逊丛林 3 日 2 夜深度木屋",
    city: "马瑙斯", region: "巴西 · 马瑙斯", country: "巴西", continent: "南美", cat: "attraction",
    tags: { stars: 5, age: "young", dur: "3 天", slot: "allday" },
    img: "assets/images/manaus/br12.jpg",
    price: { fixed: 3460, unit: "每人", range: "" },
    desc: "3 天 2 夜雨林深度行程：多次河道穿行、夜宿木屋 / 吊床营地、垂钓、丛林徒步与原住民社区交流，餐食与向导全程安排。",
    included: ["往返车船", "2 晚住宿", "列明餐食", "本地向导", "列明体验项目"],
    excluded: ["酒水", "旅行保险", "个人装备"],
    note: "行程含吊床营地夜宿选项，体力要求高于常规观光团。",
    itinerary: [
      { phase: "第 1 天", text: "上午集合渡河进入雨林，入住木屋/吊床营地，傍晚河道穿行观察野生动物。" },
      { phase: "第 2 天", text: "丛林徒步、垂钓体验，走访原住民社区交流，夜间营地活动。" },
      { phase: "第 3 天", text: "清晨河上晨雾活动，早餐后车船返回马瑙斯。" },
    ],
    related: ["BR-11", "BR-13", "MA-02"], standalone: false
  },
  {
    id: "BR-13", name: "内格罗河 4–5 日包船 / 长线探险（含马瑙斯 → 贝伦航线）",
    city: "马瑙斯", region: "巴西 · 马瑙斯", country: "巴西", continent: "南美", cat: "attraction",
    tags: { stars: 5, age: "couple", dur: "4–5 天", slot: "allday" },
    img: "assets/images/manaus/br13.jpg",
    price: { fixed: 14172, unit: "每人", range: "" },
    desc: "内格罗河长线包船或 4–5 日雨林探险，可衔接马瑙斯至贝伦亚马逊河 5 日河轮；航线、舱型与包船人数按行程单独报价。",
    included: ["船 / 营地安排", "本地向导", "列明餐食", "行程规划"],
    excluded: ["国际段机票", "旅行 / 医疗撤离保险", "酒水与小费", "舱型差价"],
    note: "长线受水位与天气影响停靠点，包船可按团队需求定制航线。",
    itinerary: [
      { phase: "航线确认", text: "按团队需求定制航线、舱型与包船人数，单独核算报价。" },
      { phase: "登船出发", text: "马瑙斯登船/入营，沿内格罗河或亚马逊河长线航行。" },
      { phase: "沿岸停靠", text: "雨林徒步、村落探访、野生动物观察，餐食与向导全程安排。" },
      { phase: "长线衔接", text: "可衔接马瑙斯→贝伦 5 日河轮航线。" },
      { phase: "抵达返程", text: "按航线终点送抵，后续用车另行安排。" },
    ],
    related: ["BR-12", "AQ-02", "PE-01"], standalone: false
  },
  {
    id: "BR-14", name: "亚马逊丛林木屋（按晚挂）",
    city: "马瑙斯", region: "巴西 · 马瑙斯", country: "巴西", continent: "南美", cat: "hotel",
    tags: { stars: 4, age: "family", dur: "每晚", slot: "flexible" },
    img: "assets/images/manaus/br14.jpg",
    price: { fixed: 0, unit: "每晚", range: "按木屋套餐与晚数单独报价" },
    desc: "雨林河畔木屋 / 营地房型按晚挂入行程，含床位 / 营地寝具；木屋单间、双人木屋、吊床营地等房型按营地档期确认。",
    included: ["住宿安排", "行程内按晚记账"],
    excluded: ["餐食", "木屋内消费", "单人房差"],
    note: "雨林房源旺季紧张，需随行程一并锁定营地与晚数。",
    itinerary: [
      { phase: "房型确认", text: "按营地档期确认单间/双人木屋/吊床营床位。" },
      { phase: "按晚挂入", text: "随行程将木屋按晚挂入，营地基建与寝具包含。" },
      { phase: "餐食安排", text: "餐食按套餐或单点另行安排。" },
    ],
    related: ["BR-11", "BR-12", "TR-04"], standalone: false
  },
  {
    id: "BR-15", name: "马瑙斯市区 / 近郊包车半日",
    city: "马瑙斯", region: "巴西 · 马瑙斯", country: "巴西", continent: "南美", cat: "car",
    tags: { stars: 4, age: "business", dur: "半日", slot: "afternoon" },
    img: "assets/images/manaus/br15.jpg",
    price: { fixed: 1180, unit: "每车", range: "" },
    desc: "市区历史区或近郊河道半日包车，轿车 / 8 座 Van 可选，司机协助沟通，适配自由观光与小团体出行。",
    included: ["包车半日", "司机服务", "市内里程"],
    excluded: ["超时费", "停车费", "门票与消费"],
    note: "半日按 4 小时计；跨城或长线行程另行报价。",
    itinerary: [
      { phase: "需求确认", text: "确认市区历史区或近郊河道方向、车型（轿车/8 座 Van）与半日 4 小时时段。" },
      { phase: "司机候客", text: "司机按约定地点候客，协助沟通与行程衔接。" },
      { phase: "自由观光", text: "包车范围内按商定路线观光，停车随行程安排。" },
      { phase: "行程结束", text: "送抵指定地点，超时与停车费按规则另计。" },
    ],
    related: ["BR-03", "AR-02", "IS-04"], standalone: false
  },

  /* ---- 南美 · 院校参访 ---- */
  {
    id: "AR-03", name: "布宜诺斯艾利斯大学校园参访",
    city: "布宜诺斯艾利斯", region: "阿根廷 · 布宜诺斯艾利斯", country: "阿根廷", continent: "南美", cat: "univ",
    tags: { stars: 4, age: "family", dur: "半日", slot: "flexible" },
    img: "assets/images/sa/ar03.jpg",
    price: { fixed: 420, unit: "每访", range: "¥320–680 / 访" },
    desc: "布宜诺斯艾利斯大学是阿根廷历史最悠久、学术声誉最高的公立学府，校园散布于城市经典街区，古典柱廊教学楼与林荫步道相连。行程安排校园开放区域参观、校史与学科分布中文讲解，适合亲子留学了解、家长同行与人文青年探访；如需院系交流须按校方访客政策另行预约。",
    included: ["校园开放区域参观", "中文讲解", "市区交通衔接"],
    excluded: ["院系官方接待", "校内讲解牌 / 礼品店消费", "午餐"],
    note: "校园开放政策随校方安排变化，热门学期需提前预约。",
    itinerary: [
      { phase: "需求确认", text: "确认参访院校、出行日期与同行人群（亲子/留学/交流）。" },
      { phase: "交通衔接", text: "市区用车抵达校园开放区域，中文向导陪同。" },
      { phase: "开放区域参观", text: "参观主楼、图书馆外观与校园步道，讲解校史、学科与周边生活。" },
      { phase: "行程结束", text: "送抵指定地点；如需院系交流另行预约。" },
    ],
    related: ["AR-02", "AR-04", "JP-06"], standalone: false
  },
  {
    id: "BR-16", name: "圣保罗大学校园参访",
    city: "圣保罗", region: "巴西 · 圣保罗", country: "巴西", continent: "南美", cat: "univ",
    tags: { stars: 4, age: "young", dur: "半日", slot: "flexible" },
    img: "assets/images/sa/br16.jpg",
    price: { fixed: 420, unit: "每访", range: "¥320–680 / 访" },
    desc: "圣保罗大学是巴西规模最大、综合排名领先的公立名校，大学城绿树成荫，图书馆与博物馆毗邻成片。开放区域参观结合巴西科研环境与留学专业介绍，适合留学考察、学术交流与青年学生提前感受拉美顶尖校园氛围；院系接待须按校方政策预约。",
    included: ["校园开放区域参观", "中文讲解", "交通衔接"],
    excluded: ["院系官方接待", "校内活动门票", "餐饮"],
    note: "大学城范围较大，开放区域以校方公告为准，热门学期提前预约。",
    itinerary: [
      { phase: "需求确认", text: "确认参访院校、出行日期与同行人群（留学/学术/青年）。" },
      { phase: "交通衔接", text: "用车抵达校园开放区域，中文向导陪同。" },
      { phase: "开放区域参观", text: "参观主楼与林荫校区，讲解学科分布、科研环境与留学信息。" },
      { phase: "行程结束", text: "送抵指定地点；院系交流须另行预约。" },
    ],
    related: ["BR-19", "US-03", "JP-06"], standalone: false
  },
  {
    id: "BR-17", name: "里约热内卢联邦大学校园参访",
    city: "里约热内卢", region: "巴西 · 里约热内卢", country: "巴西", continent: "南美", cat: "univ",
    tags: { stars: 4, age: "family", dur: "半日", slot: "flexible" },
    img: "assets/images/sa/br17.jpg",
    price: { fixed: 420, unit: "每访", range: "¥320–680 / 访" },
    desc: "里约热内卢联邦大学是巴西顶尖公立大学，红瓦白墙的百年老校区临海而建，兼具历史建筑与滨海校园气质。开放区域参观、学科与周边街区讲解，适合亲子家庭与留学考察；校内活动与院系参观以现场开放政策为准。",
    included: ["校园开放区域参观", "中文讲解", "交通衔接"],
    excluded: ["院系官方接待", "校内活动", "餐饮"],
    note: "部分教学区受安保管理，开放范围以现场为准。",
    itinerary: [
      { phase: "需求确认", text: "确认参访院校、出行日期与同行人群（亲子/留学）。" },
      { phase: "交通衔接", text: "用车抵达老校区开放区域，中文向导陪同。" },
      { phase: "开放区域参观", text: "参观百年主楼外观与校园步道，讲解学科与周边街区。" },
      { phase: "行程结束", text: "送抵指定地点；院系参观须另行预约。" },
    ],
    related: ["BR-01", "BR-18", "US-03"], standalone: false
  },
  {
    id: "CL-01", name: "智利天主教大学校园参访",
    city: "圣地亚哥", region: "智利 · 圣地亚哥", country: "智利", continent: "南美", cat: "univ",
    tags: { stars: 4, age: "business", dur: "半日", slot: "flexible" },
    img: "assets/images/sa/cl01.jpg",
    price: { fixed: 420, unit: "每访", range: "¥320–680 / 访" },
    desc: "智利天主教大学是拉美排名第一的私立名校，圣地亚哥主校区历史主楼庄重典雅，现代教学区与城市商圈相邻。开放区域参观结合名校学术氛围与留学环境介绍，适合留学考察、商务青年与文化探访；院系交流须按校方安排预约。",
    included: ["校园开放区域参观", "中文讲解", "交通衔接"],
    excluded: ["院系官方接待", "校内活动", "餐饮"],
    note: "考试季与开学季部分区域受限，开放政策以校方公告为准。",
    itinerary: [
      { phase: "需求确认", text: "确认参访院校、出行日期与同行人群（留学/商务/文化）。" },
      { phase: "交通衔接", text: "用车抵达主校区开放区域，中文向导陪同。" },
      { phase: "开放区域参观", text: "参观历史主楼与校园步道，讲解学术氛围、学科与留学环境。" },
      { phase: "行程结束", text: "送抵指定地点；院系交流须另行预约。" },
    ],
    related: ["CL-02", "US-06", "JP-06"], standalone: false
  },
  {
    id: "CO-01", name: "洛斯安第斯大学校园参访",
    city: "波哥大", region: "哥伦比亚 · 波哥大", country: "哥伦比亚", continent: "南美", cat: "univ",
    tags: { stars: 4, age: "young", dur: "半日", slot: "flexible" },
    img: "assets/images/sa/co01.jpg",
    price: { fixed: 420, unit: "每访", range: "¥320–680 / 访" },
    desc: "洛斯安第斯大学是哥伦比亚顶尖私立大学，校园依山而建，现代建筑、空中花园与山城步道错落相连。开放区域参观、商科法学氛围与校园生活讲解，适合留学考察与商务交流；正式进入教学区以校方公告为准。",
    included: ["校园开放区域参观", "中文讲解", "交通衔接"],
    excluded: ["院系官方接待", "校内活动", "餐饮"],
    note: "波哥大海拔较高，入校步行请缓步适应；教学区开放以现场为准。",
    itinerary: [
      { phase: "需求确认", text: "确认参访院校、出行日期与同行人群（留学/商务）。" },
      { phase: "交通衔接", text: "用车抵达山城校园开放区域，中文向导陪同。" },
      { phase: "开放区域参观", text: "参观现代教学楼与花园步道，讲解商科法学氛围与校园生活。" },
      { phase: "行程结束", text: "送抵指定地点；院系交流须另行预约。" },
    ],
    related: ["CL-01", "US-03", "JP-06"], standalone: false
  },
  {
    id: "PE-03", name: "秘鲁天主教大学校园参访",
    city: "利马", region: "秘鲁 · 利马", country: "秘鲁", continent: "南美", cat: "univ",
    tags: { stars: 4, age: "family", dur: "半日", slot: "flexible" },
    img: "assets/images/sa/pe03.jpg",
    price: { fixed: 420, unit: "每访", range: "¥320–680 / 访" },
    desc: "秘鲁天主教大学是利马历史最久、学术排名领先的私立名校，现代玻璃主楼与安第斯城市景观相映。开放区域参观结合秘鲁学科分布与留学环境讲解，适合亲子家庭与留学考察；校内活动与院系接待须另行预约。",
    included: ["校园开放区域参观", "中文讲解", "交通衔接"],
    excluded: ["院系官方接待", "校内活动", "餐饮"],
    note: "校园开放政策随校方安排变化，建议提前预约确认。",
    itinerary: [
      { phase: "需求确认", text: "确认参访院校、出行日期与同行人群（亲子/留学）。" },
      { phase: "交通衔接", text: "用车抵达利马校区开放区域，中文向导陪同。" },
      { phase: "开放区域参观", text: "参观主楼外观与校园广场，讲解学科分布、留学环境与城市风貌。" },
      { phase: "行程结束", text: "送抵指定地点；院系接待须另行预约。" },
    ],
    related: ["PE-01", "PE-04", "US-03"], standalone: false
  },

  /* ---- 南美 · 企业参访 ---- */
  {
    id: "BR-18", name: "巴西石油 Petrobras 总部参访（按审批）",
    city: "里约热内卢", region: "巴西 · 里约热内卢", country: "巴西", continent: "南美", cat: "corp",
    tags: { stars: 4, age: "business", dur: "半日", slot: "flexible" },
    img: "assets/images/sa/br18.jpg",
    price: { fixed: 980, unit: "每访", range: "¥680–1,800 / 访" },
    desc: "巴西石油是巴西最大能源企业，深海油气开采技术全球领先，总部大楼位于里约市中心。行程安排总部园区与外观开放区域参观、能源行业讲解与商务对接沟通协助，适合商务考察与行业交流；正式进入办公区或官方接待须按对方安保与档期审批。",
    included: ["参访行程规划", "交通衔接", "商务沟通协助"],
    excluded: ["企业官方接待函", "翻译同传（如需另计）", "商务餐叙"],
    note: "企业参访受对方安保与档期限制，需提前提交访客信息。",
    itinerary: [
      { phase: "需求确认", text: "确认参访企业方向、来访身份与商务对接诉求，提前提交访客信息。" },
      { phase: "交通衔接", text: "用车抵达总部外观开放区域，向导陪同。" },
      { phase: "开放区域参访", text: "参观总部外观或展厅开放区域，讲解能源业务与行业生态，协助商务沟通。" },
      { phase: "行程结束", text: "送抵指定地点；正式接待与办公区进入以对方审批为准。" },
    ],
    related: ["BR-17", "BR-20", "US-02"], standalone: false
  },
  {
    id: "BR-19", name: "巴西航空工业 Embraer 总部参访（按审批）",
    city: "圣保罗", region: "巴西 · 圣保罗", country: "巴西", continent: "南美", cat: "corp",
    tags: { stars: 4, age: "business", dur: "半日", slot: "flexible" },
    img: "assets/images/sa/br19.jpg",
    price: { fixed: 980, unit: "每访", range: "¥680–1,800 / 访" },
    desc: "巴西航空工业是全球第三大民用飞机制造商、支线航空龙头，总部及厂区位于圣保罗州。行程安排总部园区与厂区外观参观、航空制造主题讲解与商务对接协助，适合商务考察与工业交流；车间及正式接待须按企业审批安排，访客信息需提前提交。",
    included: ["参访行程规划", "交通衔接", "商务沟通协助"],
    excluded: ["企业官方接待函", "翻译同传（如需另计）", "商务餐叙"],
    note: "厂区与车间受安保管理，正式进入须提前审批；本行程默认开放区域外观参观。",
    itinerary: [
      { phase: "需求确认", text: "确认参访企业方向、来访身份与对接诉求，提前提交访客信息。" },
      { phase: "交通衔接", text: "用车抵达总部/厂区外观开放区域，向导陪同。" },
      { phase: "开放区域参访", text: "参观总部或厂区外观，讲解航空制造业务与产业链，协助商务沟通。" },
      { phase: "行程结束", text: "送抵指定地点；车间与正式接待以企业审批为准。" },
    ],
    related: ["BR-16", "US-02", "JP-06"], standalone: false
  },
  {
    id: "BR-20", name: "淡水河谷 Vale 总部参访（按审批）",
    city: "里约热内卢", region: "巴西 · 里约热内卢", country: "巴西", continent: "南美", cat: "corp",
    tags: { stars: 4, age: "business", dur: "半日", slot: "flexible" },
    img: "assets/images/sa/br20.jpg",
    price: { fixed: 980, unit: "每访", range: "¥680–1,800 / 访" },
    desc: "淡水河谷是全球第二大矿业集团、全球主要铁矿石生产商之一，总部位于里约热内卢。行程安排总部开放区域外观参观、矿业与物流业务讲解及商务对接协助，适合商务考察与行业交流；正式进入须按对方安保与接待政策审批。",
    included: ["参访行程规划", "交通衔接", "商务沟通协助"],
    excluded: ["企业官方接待函", "翻译同传（如需另计）", "商务餐叙"],
    note: "企业参访受安保与档期限制，矿山实地行程须单独申请审批。",
    itinerary: [
      { phase: "需求确认", text: "确认参访企业方向、来访身份与对接诉求，提前提交访客信息。" },
      { phase: "交通衔接", text: "用车抵达总部开放区域，向导陪同。" },
      { phase: "开放区域参访", text: "参观总部外观，讲解矿业、物流与资源业务，协助商务沟通。" },
      { phase: "行程结束", text: "送抵指定地点；正式接待与矿区进入以审批为准。" },
    ],
    related: ["BR-18", "US-02", "AR-04"], standalone: false
  },
  {
    id: "AR-04", name: "美客多 MercadoLibre 总部参访（按审批）",
    city: "布宜诺斯艾利斯", region: "阿根廷 · 布宜诺斯艾利斯", country: "阿根廷", continent: "南美", cat: "corp",
    tags: { stars: 4, age: "business", dur: "半日", slot: "flexible" },
    img: "assets/images/sa/ar04.jpg",
    price: { fixed: 980, unit: "每访", range: "¥680–1,800 / 访" },
    desc: "美客多（MercadoLibre）是拉美最大电商与金融科技公司，已登陆纳斯达克，总部位于布宜诺斯艾利斯。行程安排总部园区外观与开放区域参观、拉美电商科技生态讲解及商务对接协助，适合商务考察与科技交流；正式进入办公区须按企业接待审批。",
    included: ["参访行程规划", "交通衔接", "商务沟通协助"],
    excluded: ["企业官方接待函", "翻译同传（如需另计）", "商务餐叙"],
    note: "办公区受安保管理，正式接待须提前提交访客信息并获审批。",
    itinerary: [
      { phase: "需求确认", text: "确认参访企业方向、来访身份与对接诉求，提前提交访客信息。" },
      { phase: "交通衔接", text: "用车抵达总部外观开放区域，向导陪同。" },
      { phase: "开放区域参访", text: "参观总部外观，讲解拉美电商与金融科技生态，协助商务沟通。" },
      { phase: "行程结束", text: "送抵指定地点；办公区进入与正式接待以审批为准。" },
    ],
    related: ["AR-02", "BR-20", "US-02"], standalone: false
  },
  {
    id: "CL-02", name: "智利国家铜业 Codelco 总部参访（按审批）",
    city: "圣地亚哥", region: "智利 · 圣地亚哥", country: "智利", continent: "南美", cat: "corp",
    tags: { stars: 4, age: "business", dur: "半日", slot: "flexible" },
    img: "assets/images/sa/cl02.jpg",
    price: { fixed: 980, unit: "每访", range: "¥680–1,800 / 访" },
    desc: "智利国家铜业是全球最大铜生产企业，总部位于圣地亚哥。行程安排总部开放区域外观参观、铜矿业与资源经济讲解及商务对接协助，适合商务考察与行业交流；正式进入办公区与矿山相关参访须按国企安保与档期审批。",
    included: ["参访行程规划", "交通衔接", "商务沟通协助"],
    excluded: ["企业官方接待函", "翻译同传（如需另计）", "商务餐叙"],
    note: "国企参访受安保与档期限制，矿区行程须单独申请审批。",
    itinerary: [
      { phase: "需求确认", text: "确认参访企业方向、来访身份与对接诉求，提前提交访客信息。" },
      { phase: "交通衔接", text: "用车抵达总部外观开放区域，向导陪同。" },
      { phase: "开放区域参访", text: "参观总部外观，讲解铜矿业与资源经济，协助商务沟通。" },
      { phase: "行程结束", text: "送抵指定地点；办公区与矿区进入以审批为准。" },
    ],
    related: ["CL-01", "US-02", "BR-18"], standalone: false
  },
  {
    id: "PE-04", name: "Credicorp 金融集团总部参访（按审批）",
    city: "利马", region: "秘鲁 · 利马", country: "秘鲁", continent: "南美", cat: "corp",
    tags: { stars: 4, age: "business", dur: "半日", slot: "flexible" },
    img: "assets/images/sa/pe04.jpg",
    price: { fixed: 980, unit: "每访", range: "¥680–1,800 / 访" },
    desc: "Credicorp 是秘鲁领先金融集团，旗下银行、保险与养老金平台覆盖秘鲁各客群，总部位于利马。行程安排总部开放区域外观参观、拉美金融业务讲解及商务对接协助，适合商务考察与金融交流；正式进入须按企业接待政策审批。",
    included: ["参访行程规划", "交通衔接", "商务沟通协助"],
    excluded: ["企业官方接待函", "翻译同传（如需另计）", "商务餐叙"],
    note: "金融机构办公区受安保管理，正式接待须提前提交访客信息并获审批。",
    itinerary: [
      { phase: "需求确认", text: "确认参访企业方向、来访身份与对接诉求，提前提交访客信息。" },
      { phase: "交通衔接", text: "用车抵达总部开放区域，向导陪同。" },
      { phase: "开放区域参访", text: "参观总部外观，讲解银行、保险与金融业务，协助商务沟通。" },
      { phase: "行程结束", text: "送抵指定地点；办公区进入与正式接待以审批为准。" },
    ],
    related: ["PE-03", "US-02", "AR-04"], standalone: false
  },

  /* ==================== 大洋洲 ==================== */

  /* ---- 澳大利亚 · 悉尼 ---- */
  {
    id: "AU-01", name: "悉尼歌剧院 · 海港大桥 · 邦迪海滩一日游",
    city: "悉尼", region: "澳大利亚 · 悉尼", country: "澳大利亚", continent: "大洋洲", cat: "attraction",
    tags: { stars: 5, age: "family", dur: "全天", slot: "allday" },
    price: { fixed: 760, unit: "每人", range: "¥580–1,380 / 人" },
    desc: "环形码头、歌剧院外观与内部导览、海港大桥步行及邦迪海滩海岸栈道，中文讲解城市与海岸生活。",
    included: ["中文向导", "歌剧院导览票", "市区交通"],
    excluded: ["午餐", "大桥攀登项目", "海滩消费"],
    note: "海岸栈道步行较长，注意防晒与饮水。",
    related: ["AU-02", "US-01", "NZ-01"], standalone: false
  },
  {
    id: "AU-02", name: "悉尼大学参访",
    city: "悉尼", region: "澳大利亚 · 悉尼", country: "澳大利亚", continent: "大洋洲", cat: "univ",
    tags: { stars: 4, age: "family", dur: "半日", slot: "flexible" },
    price: { fixed: 420, unit: "每访", range: "¥320–680 / 访" },
    desc: "悉尼大学开放校园参观，含哥特式主楼、图书馆外观与周边街区介绍，适合亲子与留学了解。",
    included: ["校园开放区域参观", "中文讲解", "交通衔接"],
    excluded: ["院系官方接待", "校内活动", "餐饮"],
    note: "校园开放政策随校方安排，考试期间部分区域受限。",
    related: ["AU-01", "US-03", "JP-06"], standalone: false
  },

  /* ---- 新西兰 · 皇后镇 ---- */
  {
    id: "NZ-01", name: "瓦纳卡湖 · 米尔福德峡湾一日游",
    city: "皇后镇", region: "新西兰 · 皇后镇", country: "新西兰", continent: "大洋洲", cat: "attraction",
    tags: { stars: 5, age: "couple", dur: "全天", slot: "allday" },
    price: { fixed: 980, unit: "每人", range: "¥760–1,680 / 人" },
    desc: "峡湾国家公园一日：环湖公路停靠、镜湖与峡湾游船，中文向导安排观景与休息节奏，适配情侣与小团。",
    included: ["往返用车", "峡湾船票", "中文向导"],
    excluded: ["午餐", "步道附加票", "保险"],
    note: "峡湾地区多雨，游船照常运行；请备防水外套。",
    related: ["NZ-02", "AU-01", "JP-07"], standalone: false
  },
  {
    id: "NZ-02", name: "皇后镇机场接送",
    city: "皇后镇", region: "新西兰 · 皇后镇", country: "新西兰", continent: "大洋洲", cat: "transfer",
    tags: { stars: 4, age: "all", dur: "每程", slot: "flexible" },
    price: { fixed: 300, unit: "每车", range: "¥240–440 / 车" },
    desc: "皇后镇机场（ZQN）至镇区或湖边酒店接送，举牌等候，行李空间充足。",
    included: ["举牌接机", "私人车辆", "航班跟踪"],
    excluded: ["额外等候费", "行李超件", "雪季附加"],
    note: "冬季雪季行李与装备较多，请提前告知滑雪板数量。",
    related: ["NZ-01", "IS-03", "BR-02"], standalone: false
  },

  /* ==================== 非洲 ==================== */

  /* ---- 摩洛哥 ---- */
  {
    id: "MA-01", name: "老城麦地那 · 马约尔花园 · 夜市半日游",
    city: "马拉喀什", region: "摩洛哥 · 马拉喀什", country: "摩洛哥", continent: "非洲", cat: "attraction",
    tags: { stars: 5, age: "all", dur: "下午", slot: "afternoon" },
    price: { fixed: 480, unit: "每人", range: "¥360–760 / 人" },
    desc: "午后穿行老城麦地那巷弄、皮革染坊与马约尔花园，傍晚抵达德吉玛广场夜市，中文向导讲解当地习俗与砍价技巧。",
    included: ["中文向导", "列明门票", "老城交通衔接"],
    excluded: ["晚餐", "市集购物", "薄荷茶消费"],
    note: "麦地那巷道复杂，请勿脱离向导；广场晚间人流密集。",
    related: ["MA-02", "MA-03", "TR-01"], standalone: false
  },
  {
    id: "MA-02", name: "撒哈拉沙漠骆驼营地之夜（含晚餐住宿）",
    city: "马拉喀什", region: "摩洛哥 · 马拉喀什", country: "摩洛哥", continent: "非洲", cat: "attraction",
    tags: { stars: 5, age: "couple", dur: "夜间", slot: "night" },
    price: { fixed: 880, unit: "每人", range: "¥680–1,480 / 人" },
    desc: "自驾 / 用车进入沙漠边缘，骑骆驼抵达沙丘营地，柏柏尔晚餐与星空帐篷住宿，次日清晨看沙海日出。",
    included: ["骆驼骑行", "营地晚餐", "帐篷住宿", "早餐"],
    excluded: ["沙漠长途用车分段", "酒精饮品", "个人睡袋"],
    note: "沙漠昼夜温差大，帐篷条件简朴；长者请评估住宿舒适度。",
    related: ["MA-01", "AE-02", "JP-08"], standalone: false
  },
  {
    id: "MA-03", name: "马拉喀什机场接送",
    city: "马拉喀什", region: "摩洛哥 · 马拉喀什", country: "摩洛哥", continent: "非洲", cat: "transfer",
    tags: { stars: 4, age: "all", dur: "每程", slot: "flexible" },
    price: { fixed: 260, unit: "每车", range: "¥200–380 / 车" },
    desc: "马拉喀什梅纳拉机场（RAK）至老城或酒店点对点接送，举牌等候，支持夜间到达。",
    included: ["举牌接机", "私人车辆", "基础等候"],
    excluded: ["深夜附加费", "行李超件", "跨城转场"],
    note: "老城部分街巷车辆不可直达，步行段由向导衔接。",
    related: ["MA-01", "PA-02", "IS-03"], standalone: false
  },

  /* ---- 埃及 ---- */
  {
    id: "EG-01", name: "吉萨金字塔 · 狮身人面像 · 埃及博物馆一日游",
    city: "开罗", region: "埃及 · 开罗", country: "埃及", continent: "非洲", cat: "attraction",
    tags: { stars: 5, age: "senior", dur: "全天", slot: "allday" },
    price: { fixed: 620, unit: "每人", range: "¥480–1,180 / 人" },
    desc: "吉萨金字塔群、狮身人面像与埃及博物馆一日导览，中文讲解古埃及文明脉络，含市区用车与门票安排。",
    included: ["中文导游", "列明门票", "全程用车", "饮用水"],
    excluded: ["金字塔内部墓室票", "午餐", "骑骆驼 / 马车"],
    note: "露天遗址日晒强；博物馆藏品分区开放以当日公告为准。",
    related: ["JO-01", "AE-01", "TR-01"], standalone: false
  },

  /* ==================== 南极 ==================== */

  {
    id: "AQ-01", name: "乌斯怀亚市区 · 比格尔海峡游船",
    city: "乌斯怀亚", region: "南极 · 乌斯怀亚门户", country: "阿根廷", continent: "南极", cat: "attraction",
    tags: { stars: 4, age: "all", dur: "全天", slot: "allday" },
    price: { fixed: 520, unit: "每人", range: "¥400–860 / 人" },
    desc: "南极门户乌斯怀亚市区游览与比格尔海峡游船，看灯塔、海鸟与海豹岛，作为登船前的适应与衔接安排。",
    included: ["市区用车", "海峡船票", "中文向导"],
    excluded: ["午餐", "登船前保险", "纪念品"],
    note: "南极航线登船前需完成安全说明会，本产品为门户衔接安排。",
    related: ["AQ-02", "AR-01", "NZ-01"], standalone: false
  },
  {
    id: "AQ-02", name: "南极半岛探险邮轮（5–10 晚，按航次）",
    city: "南极半岛", region: "南极 · 乌斯怀亚门户", country: "南极", continent: "南极", cat: "attraction",
    tags: { stars: 5, age: "senior", dur: "5–10 晚", slot: "allday" },
    price: { fixed: 18800, unit: "每人", range: "¥16,800–48,000 / 人（按航次与舱型）" },
    desc: "乌斯怀亚登船的南极半岛探险邮轮，含船上探险讲座、冲锋舟巡游与登陆安排，舱型与航次按季节报价。",
    included: ["邮轮船票（列明舱型）", "船上餐饮与公共设施", "探险活动安排", "港口税费"],
    excluded: ["往返国际机票", "旅行 / 医疗撤离保险", "船上小费", "酒精饮品"],
    note: "南极航次受海冰与天气影响调整靠岸点；报名需提供健康信息并签署探险告知。",
    related: ["AQ-01", "PE-01", "NZ-01"], standalone: false
  },

  /* ==================== 全球加项 ==================== */

  {
    id: "OT-01", name: "目的地中文地陪 / 向导（按天）",
    city: "全球通用", region: "全球加项", country: "全球", continent: "全球加项", cat: "other",
    tags: { stars: 4, age: "business", dur: "每日", slot: "flexible" },
    price: { fixed: 600, unit: "每天", range: "¥480–1,200 / 天（按城市与语种）" },
    desc: "目的地中文地陪或向导按天陪同，景点讲解、沟通协助与行程节奏把控，可与用车、酒店打包安排。",
    included: ["当日向导服务", "行程内沟通协助"],
    excluded: ["向导交通与餐补", "门票", "超时服务费"],
    note: "热门城市与旺季向导档期紧张，建议随行程一并确认。",
    related: ["OT-02", "OT-06", "JP-01"], standalone: false
  },
  {
    id: "OT-02", name: "专业翻译（商务 / 陪同，按天）",
    city: "全球通用", region: "全球加项", country: "全球", continent: "全球加项", cat: "other",
    tags: { stars: 4, age: "business", dur: "每日", slot: "flexible" },
    price: { fixed: 900, unit: "每天", range: "¥680–1,800 / 天（按语种与场合）" },
    desc: "商务拜访、展会与陪同口译翻译，按语种与场合安排；同传、笔译与正式合同翻译另行报价。",
    included: ["当日陪同翻译", "沟通记录协助"],
    excluded: ["同传设备", "笔译文件", "差旅费用"],
    note: "小语种与专业领域翻译需提前排期。",
    related: ["OT-01", "US-02", "OT-03"], standalone: false
  },
  {
    id: "OT-03", name: "目的地签证协助",
    city: "全球通用", region: "全球加项", country: "全球", continent: "全球加项", cat: "other",
    tags: { stars: 4, age: "all", dur: "灵活", slot: "flexible" },
    price: { fixed: 200, unit: "每人", range: "¥150–600 / 人（按国别与类型）" },
    desc: "目的地签证材料清单核对、填表协助与流程跟进；使领馆规费与快递费按实际发生另计。",
    included: ["材料清单梳理", "填表协助", "流程进度跟进"],
    excluded: ["使领馆规费", "公证认证费", "快递与保险"],
    note: "签证结果由使领馆决定，本项为协助办理，不承诺出签。",
    related: ["OT-02", "OT-06", "EG-01"], standalone: false
  },
  {
    id: "OT-04", name: "机场贵宾厅预约",
    city: "全球通用", region: "全球加项", country: "全球", continent: "全球加项", cat: "other",
    tags: { stars: 4, age: "all", dur: "灵活", slot: "flexible" },
    price: { fixed: 320, unit: "每人", range: "¥260–680 / 人次（按机场与厅房）" },
    desc: "出发或中转机场贵宾厅预约，含休息位、简餐与饮品，按机场与航班时段安排。",
    included: ["贵宾厅入场", "基础餐饮"],
    excluded: ["酒精饮品", "淋浴间 / 会议室", "超时费"],
    note: "部分厅房按登机牌时段准入，请提供航班信息。",
    related: ["OT-05", "OT-01", "JP-03"], standalone: false
  },
  {
    id: "OT-05", name: "航班提前选座协助",
    city: "全球通用", region: "全球加项", country: "全球", continent: "全球加项", cat: "other",
    tags: { stars: 4, age: "all", dur: "灵活", slot: "flexible" },
    price: { fixed: 0, unit: "每人", range: "免费协助；航司收的选座费按实另计" },
    desc: "航班出票后协助提前选座，邻座安排与特殊需求（婴儿篮、轮椅）一并备注；航司收取的选座费用按实际另计。",
    included: ["选座需求备注", "座位安排跟进"],
    excluded: ["航司选座费", "升舱费用"],
    note: "座位最终以航司值机系统为准，热门航班不保证相邻。",
    related: ["OT-04", "OT-03", "OT-06"], standalone: false
  },
  {
    id: "OT-06", name: "全程行程规划定制",
    city: "全球通用", region: "全球加项", country: "全球", continent: "全球加项", cat: "other",
    tags: { stars: 5, age: "all", dur: "灵活", slot: "flexible" },
    price: { fixed: 0, unit: "每项", range: "规划咨询免费；确认后的产品单独报价" },
    desc: "按出行日期、人数、偏好与预算，规划目的地串联、节奏与资源清单；规划阶段不收费，确认预订后按产品单独报价。",
    included: ["行程框架建议", "资源清单梳理", "报价对比说明"],
    excluded: ["确认后的地接与门票费用", "机票与保险"],
    note: "可在搭建器中先组草稿，再发给管家获取定制报价。",
    related: ["OT-01", "OT-03", "AQ-02"], standalone: false
  },
  {
    id: "OT-07", name: "特色餐厅 / 地标餐饮预订",
    city: "全球通用", region: "全球加项", country: "全球", continent: "全球加项", cat: "other",
    tags: { stars: 4, age: "couple", dur: "傍晚", slot: "evening" },
    price: { fixed: 200, unit: "每桌", range: "¥150–800 / 桌（按餐厅档次）" },
    desc: "目的地特色餐厅、地标景观位或当地美食预约协助，可标注忌口与用餐时段；餐费按菜单实际另计。",
    included: ["餐位预订", "忌口备注", "到店指引"],
    excluded: ["餐费", "酒水", "服务费"],
    note: "热门餐厅与观景位需提前订位，周末与节假日档期紧张。",
    related: ["OT-01", "AR-01", "AE-02"], standalone: false
  }
];

/* ============================================================
   全球主要旅游城市占位目录（仅用于目录筛选展示）
   结构：[大洲, 国家, 城市]；以下条目尚未对应真实产品，
   补充产品时在上方 PRODUCTS 中按既有字段新增即可。
   ============================================================ */
window.DESTINATIONS = [

  /* ---- 亚洲 ---- */
  ["亚洲", "日本", "京都"], ["亚洲", "日本", "大阪"], ["亚洲", "日本", "冲绳"], ["亚洲", "日本", "福冈"],
  ["亚洲", "韩国", "首尔"], ["亚洲", "韩国", "济州岛"],
  ["亚洲", "泰国", "曼谷"], ["亚洲", "泰国", "清迈"], ["亚洲", "泰国", "普吉岛"], ["亚洲", "泰国", "苏梅岛"],
  ["亚洲", "马来西亚", "吉隆坡"], ["亚洲", "马来西亚", "柔佛"], ["亚洲", "马来西亚", "兰卡威"],
  ["亚洲", "新加坡", "新加坡"],
  ["亚洲", "印度尼西亚", "巴厘岛"], ["亚洲", "印度尼西亚", "雅加达"],
  ["亚洲", "越南", "河内"], ["亚洲", "越南", "胡志明市"], ["亚洲", "越南", "岘港"], ["亚洲", "越南", "下龙湾"],
  ["亚洲", "柬埔寨", "暹粒"],
  ["亚洲", "老挝", "琅勃拉邦"],
  ["亚洲", "菲律宾", "马尼拉"], ["亚洲", "菲律宾", "长滩岛"],
  ["亚洲", "印度", "德里"], ["亚洲", "印度", "孟买"], ["亚洲", "印度", "斋普尔"], ["亚洲", "印度", "果阿"],
  ["亚洲", "马尔代夫", "马累"],
  ["亚洲", "斯里兰卡", "科伦坡"], ["亚洲", "斯里兰卡", "努沃勒埃利耶"],
  ["亚洲", "阿联酋", "阿布扎比"], ["亚洲", "阿联酋", "沙迦"],
  ["亚洲", "卡塔尔", "多哈"],
  ["亚洲", "阿曼", "马斯喀特"],
  ["亚洲", "以色列", "特拉维夫"], ["亚洲", "以色列", "耶路撒冷"],
  ["亚洲", "格鲁吉亚", "巴统"],
  ["亚洲", "土耳其", "安塔利亚"], ["亚洲", "土耳其", "棉花堡"],
  ["亚洲", "尼泊尔", "加德满都"], ["亚洲", "尼泊尔", "博卡拉"],
  ["亚洲", "中国香港", "香港"], ["亚洲", "中国澳门", "澳门"], ["亚洲", "中国台湾", "台北"],

  /* ---- 欧洲 ---- */
  ["欧洲", "法国", "尼斯"], ["欧洲", "法国", "里昂"], ["欧洲", "法国", "普罗旺斯"],
  ["欧洲", "意大利", "威尼斯"], ["欧洲", "意大利", "佛罗伦萨"], ["欧洲", "意大利", "米兰"], ["欧洲", "意大利", "阿马尔菲"],
  ["欧洲", "西班牙", "巴塞罗那"], ["欧洲", "西班牙", "马德里"], ["欧洲", "西班牙", "塞维利亚"], ["欧洲", "西班牙", "马拉加"],
  ["欧洲", "葡萄牙", "里斯本"], ["欧洲", "葡萄牙", "波尔图"], ["欧洲", "葡萄牙", "阿尔加维"],
  ["欧洲", "英国", "伦敦"], ["欧洲", "英国", "爱丁堡"], ["欧洲", "英国", "曼彻斯特"],
  ["欧洲", "爱尔兰", "都柏林"],
  ["欧洲", "德国", "柏林"], ["欧洲", "德国", "慕尼黑"], ["欧洲", "德国", "法兰克福"],
  ["欧洲", "奥地利", "维也纳"], ["欧洲", "奥地利", "萨尔茨堡"],
  ["欧洲", "瑞士", "苏黎世"], ["欧洲", "瑞士", "日内瓦"], ["欧洲", "瑞士", "卢塞恩"], ["欧洲", "瑞士", "因特拉肯"],
  ["欧洲", "荷兰", "阿姆斯特丹"],
  ["欧洲", "比利时", "布鲁塞尔"], ["欧洲", "比利时", "布鲁日"],
  ["欧洲", "丹麦", "哥本哈根"],
  ["欧洲", "瑞典", "斯德哥尔摩"], ["欧洲", "瑞典", "基律纳"],
  ["欧洲", "挪威", "奥斯陆"], ["欧洲", "挪威", "卑尔根"], ["欧洲", "挪威", "特罗姆瑟"], ["欧洲", "挪威", "罗弗敦"],
  ["欧洲", "芬兰", "赫尔辛基"], ["欧洲", "芬兰", "罗瓦涅米"],
  ["欧洲", "俄罗斯", "莫斯科"], ["欧洲", "俄罗斯", "圣彼得堡"],
  ["欧洲", "波兰", "华沙"], ["欧洲", "波兰", "克拉科夫"],
  ["欧洲", "捷克", "布拉格"], ["欧洲", "捷克", "克鲁姆洛夫"],
  ["欧洲", "匈牙利", "布达佩斯"],
  ["欧洲", "希腊", "雅典"], ["欧洲", "希腊", "圣托里尼"], ["欧洲", "希腊", "米科诺斯"],
  ["欧洲", "克罗地亚", "杜布罗夫尼克"], ["欧洲", "克罗地亚", "斯普利特"],
  ["欧洲", "黑山", "科托尔"],
  ["欧洲", "马耳他", "瓦莱塔"],
  ["欧洲", "摩纳哥", "摩纳哥"],

  /* ---- 北美 ---- */
  ["北美", "美国", "洛杉矶"], ["北美", "美国", "旧金山"], ["北美", "美国", "拉斯维加斯"],
  ["北美", "美国", "檀香山"], ["北美", "美国", "奥兰多"], ["北美", "美国", "迈阿密"],
  ["北美", "美国", "波士顿"], ["北美", "美国", "芝加哥"], ["北美", "美国", "华盛顿"],
  ["北美", "美国", "安克雷奇"], ["北美", "美国", "黄石"],
  ["北美", "加拿大", "多伦多"], ["北美", "加拿大", "温哥华"], ["北美", "加拿大", "蒙特利尔"],
  ["北美", "加拿大", "卡尔加里"], ["北美", "加拿大", "班夫"], ["北美", "加拿大", "魁北克城"],
  ["北美", "墨西哥", "梅里达"], ["北美", "墨西哥", "瓜纳华托"],
  ["北美", "哥斯达黎加", "圣何塞"],
  ["北美", "古巴", "哈瓦那"],
  ["北美", "牙买加", "蒙特哥贝"],
  ["北美", "巴哈马", "拿骚"],
  ["北美", "多米尼加", "蓬塔卡纳"],

  /* ---- 南美 ---- */
  ["南美", "巴西", "圣保罗"], ["南美", "巴西", "伊瓜苏"], ["南美", "巴西", "萨尔瓦多"],
  ["南美", "阿根廷", "门多萨"], ["南美", "阿根廷", "埃尔卡拉法特"], ["南美", "阿根廷", "巴里洛切"],
  ["南美", "秘鲁", "利马"], ["南美", "秘鲁", "普诺"], ["南美", "秘鲁", "阿雷基帕"],
  ["南美", "智利", "圣地亚哥"], ["南美", "智利", "瓦尔帕莱索"], ["南美", "智利", "蓬塔阿雷纳斯"], ["南美", "智利", "复活节岛"],
  ["南美", "厄瓜多尔", "基多"], ["南美", "厄瓜多尔", "加拉帕戈斯"],
  ["南美", "哥伦比亚", "波哥大"], ["南美", "哥伦比亚", "麦德林"], ["南美", "哥伦比亚", "卡塔赫纳"],
  ["南美", "玻利维亚", "拉巴斯"], ["南美", "玻利维亚", "乌尤尼"],
  ["南美", "乌拉圭", "蒙得维的亚"], ["南美", "乌拉圭", "埃斯特角"],

  /* ---- 大洋洲 ---- */
  ["大洋洲", "澳大利亚", "墨尔本"], ["大洋洲", "澳大利亚", "布里斯班"], ["大洋洲", "澳大利亚", "黄金海岸"],
  ["大洋洲", "澳大利亚", "凯恩斯"], ["大洋洲", "澳大利亚", "珀斯"], ["大洋洲", "澳大利亚", "塔斯马尼亚"],
  ["大洋洲", "新西兰", "奥克兰"], ["大洋洲", "新西兰", "基督城"], ["大洋洲", "新西兰", "罗托鲁瓦"],
  ["大洋洲", "斐济", "楠迪"],
  ["大洋洲", "法属波利尼西亚", "大溪地"],

  /* ---- 非洲 ---- */
  ["非洲", "摩洛哥", "卡萨布兰卡"], ["非洲", "摩洛哥", "菲斯"], ["非洲", "摩洛哥", "舍夫沙万"],
  ["非洲", "埃及", "卢克索"], ["非洲", "埃及", "阿斯旺"], ["非洲", "埃及", "沙姆沙伊赫"],
  ["非洲", "南非", "开普敦"], ["非洲", "南非", "约翰内斯堡"], ["非洲", "南非", "克鲁格"],
  ["非洲", "肯尼亚", "内罗毕"], ["非洲", "肯尼亚", "马赛马拉"],
  ["非洲", "坦桑尼亚", "阿鲁沙"], ["非洲", "坦桑尼亚", "桑给巴尔"],
  ["非洲", "纳米比亚", "温得和克"], ["非洲", "纳米比亚", "斯瓦科普蒙德"],
  ["非洲", "赞比亚", "利文斯顿"],
  ["非洲", "津巴布韦", "维多利亚瀑布城"],
  ["非洲", "毛里求斯", "路易港"],
  ["非洲", "塞舌尔", "维多利亚"],
  ["非洲", "马达加斯加", "塔那那利佛"],
  ["非洲", "突尼斯", "突尼斯市"]
];
