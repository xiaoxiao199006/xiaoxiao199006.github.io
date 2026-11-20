/* 娘家巴士 · 评价墙（双排自动滚动）
 * 独立模块：不依赖构建产物内部结构，挂载时替换原评价区。
 */
(function () {
  'use strict';

  var DATA = [
    { n: '湘妹子阿梅', r: '新娘', d: '2024年10月', rt: '湖南宁乡 → 江西吉安', p: 30, v: '38座大巴', t: '4天3晚', a: 'a01.jpg', l: 528,
      c: '本来打算我爸开一台、舅舅开一台，再租个小车凑。结果婚前一周舅妈摔了腿，家里乱成一锅粥。闺蜜推了娘家巴士，30多人一辆大巴全装下。我妈坐副驾后面那位置，全程跟师傅聊天，说第一次觉得自己像个上宾。婚礼当天我一点没操心。' },
    { n: '武汉周姐', r: '新娘妈妈', d: '2024年9月', rt: '湖北武汉 → 湖南长沙', p: 20, v: '23座考斯特', t: '3天2晚', a: 'a02.jpg', l: 456,
      c: '我姑娘嫁去长沙，我本来不想去，晕车，又怕给孩子添麻烦。她偷偷订了考斯特，坐着真舒服，一路睡着就到了。车上有喜糖有水有纸巾，比我自己想得还周到。婚礼头天晚上师傅还给我和她爸送贺卡，说是姑娘女婿的心意。哎哟，那眼泪哟……' },
    { n: '河南姑姑', r: '新娘姑姑', d: '2024年8月', rt: '河南郑州 → 北京', p: 45, v: '45座大巴', t: '5天4晚', a: 'a03.jpg', l: 612,
      c: '侄女结婚，一家40多口去北京。上一回我姐结婚，几家人分头坐高铁，有晚点有坐过站，到酒店人都不齐。这次一辆大巴从郑州家门口拉到北京酒店，老人小孩都有人照应。到地方车停酒店门口，婆家人看傻了，说你们娘家人真有排面。' },
    { n: '广东敏敏', r: '新娘', d: '2024年11月', rt: '广东广州 → 湖南衡阳', p: 38, v: '38座大巴', t: '4天3晚', a: 'a04.jpg', l: 389,
      c: '广东人讲究饮喜酒要有排场。先订了基础用车，后来想想一辈子就一次，升级了上宾计划。车身上贴了我们的婚纱照，车里挂红绸带和气球，婶婶阿姨上车都“哇”了一声。返程每人座位上有伴手礼，亲戚回去跟我妈说你女儿嫁得体面。' },
    { n: '合肥小李', r: '新郎', d: '2024年7月', rt: '安徽合肥 → 江苏苏州', p: 18, v: '19座考斯特', t: '3天2晚', a: 'a05.jpg', l: 267,
      c: '我老婆合肥的，我在苏州。最头疼她娘家人怎么过来，爸妈年纪大，坐飞机不方便，高铁又怕转车。订了考斯特，师傅头天就到合肥，第二天一早从她家小区门口接上所有人，直接开到苏州酒店楼下。老丈人握手说小伙子有心了。' },
    { n: '成都辣妹子', r: '新娘', d: '2025年3月', rt: '四川成都 → 重庆', p: 28, v: '28座小巴', t: '3天2晚', a: 'a06.jpg', l: 345,
      c: '我爸那边亲戚来了20多个，加上我妈这边的，28个人刚好一辆车。车开进小区的时候，邻居都出来看，车身上有喜字有气球，跟婚车似的。一路摆龙门阵，比旅游团还闹热。我舅舅最挑剔，说这个可以，比我哥结婚租那几个车强一百倍。' },
    { n: '青岛王姨', r: '新娘大姨', d: '2025年5月', rt: '山东青岛 → 山东济南', p: 53, v: '53座大巴', t: '2天1晚', a: 'a07.jpg', l: 478,
      c: '外甥女结婚，光叔伯舅舅就十来个，加上舅妈婶子孩子，53个人。本来担心一车坐不下，结果来了辆53座大巴，大红喜字贴在车身上，开进济南婆家小区，整个小区都出来看。我妹那天笑得跟开花似的，逢人就说这是闺女安排的。' },
    { n: '福建阿芳', r: '新娘', d: '2025年6月', rt: '福建泉州 → 浙江杭州', p: 15, v: '15座丰田海狮', t: '4天3晚', a: 'a08.jpg', l: 589,
      c: '奶奶82了，腿脚不便，本来不想来，说去了也是添麻烦。我偷偷订了上宾计划，让师傅上门接她。奶奶一路坐前排，师傅开得特别稳，每到服务区都下来扶她走走，车上还有靠枕毛毯和她爱喝的铁观音。婚礼后她说这一辈子就今天最风光。' },
    { n: '沈阳张叔', r: '新娘舅舅', d: '2025年11月', rt: '辽宁沈阳 → 吉林长春', p: 26, v: '28座小巴', t: '3天2晚', a: 'a09.jpg', l: 334,
      c: '外甥女嫁长春，我们20多口要去送亲。东北11月天寒地冻，我最担心路上出事。师傅提前一天到，给我们看了行车记录，15年驾龄零事故。路上每人一个暖手宝、一条红围巾，说新娘子家的人就得红红火火。到长春，我姐夫拉着师傅的手说真长脸。' },
    { n: '西安巧巧', r: '新娘', d: '2025年10月', rt: '陕西西安 → 山西太原', p: 12, v: '17座依维柯', t: '3天2晚', a: 'a10.jpg', l: 298,
      c: '我家亲戚不多，爸妈、爷爷奶奶、外公外婆、两个舅舅一家，12个人。订了17座，空间大，老人累了能躺会儿。还给做了本手写路书，沿途哪有好吃的、哪里歇脚、哪里有景点，写得清清楚楚。我爸妈说这哪是包车，是全家人旅行了一趟。' },
    { n: '南京陈阿姨', r: '新娘妈妈', d: '2025年4月', rt: '江苏南京 → 上海', p: 22, v: '23座考斯特', t: '2天1晚', a: 'a11.jpg', l: 256,
      c: '女儿嫁上海，我们这边去了22个人。她表姐结婚那次，家里人坐高铁，票买不到一起，有的找不到出站口，折腾半天。这次女婿订了考斯特，坐得舒舒服服。每人一瓶水一包纸巾，水上面还贴了喜字。细节见人心，我跟女儿说这小伙子心细。' },
    { n: '温州阿杰', r: '新郎', d: '2025年12月', rt: '浙江温州 → 福建福州', p: 33, v: '35座大巴', t: '3天2晚', a: 'a12.jpg', l: 412,
      c: '我老婆温州的，我福州的。她说我家里人多你别嫌麻烦，我说你的家人就是我的家人。订了35座大巴还加了上宾计划。婚礼当天娘家人下车，我爸妈在门口迎，我妈偷偷说儿子你真行，这亲事办得有面子。现在我老婆逢人就夸我。' },
    { n: '长沙笑笑', r: '新娘', d: '2026年5月', rt: '湖南长沙 → 湖北荆州', p: 21, v: '23座考斯特', t: '3天2晚', a: 'a01.jpg', l: 367,
      c: '婚前认真算过账：三台私家车，油费过路费，两个司机的人情，再加上红包，算下来不比包车便宜，还欠一屁股人情。一辆考斯特全解决，爸妈不用低三下四去借车。省的不是钱，是脸面，也是我这一个月的心思。' },
    { n: '岳阳周先生', r: '新郎', d: '2026年10月', rt: '湖南岳阳 → 广东佛山', p: 36, v: '38座大巴', t: '4天3晚', a: 'a05.jpg', l: 723,
      c: '老丈人一开始说别乱花钱，说他们坐火车就行。我还是订了车，从岳阳一路送到佛山。下车那天他跟亲戚讲“女婿安排的”，讲了一个月。丈母娘转头塞给我一个红包，我哪敢收。这一万多块，是我这几年花得最值的一笔。' },
    { n: '贵阳杨姐', r: '新娘妈妈', d: '2026年5月', rt: '贵州贵阳 → 云南昆明', p: 41, v: '45座大巴', t: '5天4晚', a: 'a02.jpg', l: 401,
      c: '贵州到云南那段盘山路，我自己开车都心虚。师傅全程没超一次速，拐弯前必减速，我妈晕车三十年，这次居然没吐。车上备了晕车贴、呕吐袋、薄荷糖，还有个小药箱。这些细节，是坐过才知道的。' },
    { n: '天津大鹏', r: '新郎', d: '2026年10月', rt: '天津 → 河北承德', p: 16, v: '19座考斯特', t: '2天1晚', a: 'a12.jpg', l: 288,
      c: '接亲最怕误点。师傅提前一天自己跑了一趟，把女方家小区门口能不能停、几点限行、哪条路早上堵，全摸清楚了。当天5点20到楼下，一分钟没差。婚礼流程一点没乱，司仪都说你们这车安排得比婚庆还专业。' },
    { n: '兰州马姐', r: '新娘', d: '2026年6月', rt: '甘肃兰州 → 青海西宁', p: 29, v: '35座大巴', t: '3天2晚', a: 'a06.jpg', l: 355,
      c: '去青海那段海拔高，我婆婆70多，一路我提心吊胆。车上有氧气瓶、常用药，师傅还知道哪个垭口要慢点开、哪里让孩子别乱跑。到了西宁老人一点事没有，还跟我说这车比家里的沙发稳。同行的两个孩子也没晕车。' },
    { n: '南昌小徐', r: '伴娘', d: '2026年5月', rt: '江西南昌 → 湖南株洲', p: 14, v: '15座丰田海狮', t: '3天2晚', a: 'a04.jpg', l: 219,
      c: '我是伴娘，跟着新娘跑前跑后。化妆箱、婚纱、三脚架、补光灯，还有我们七个姑娘的行李，塞了满满一车。师傅一句怨言没有，还帮我们搬上搬下。第二天凌晨四点送我们去酒店化妆，人比我们还精神。' },
    { n: '上海Vivian', r: '新娘', d: '2026年9月', rt: '上海 → 江苏南通', p: 21, v: '23座考斯特', t: '2天1晚', a: 'a08.jpg', l: 392,
      c: '最担心的是市区停车。师傅提前跟酒店打了招呼，车直接停到宴会厅门口，老人下车不用走几步。中途我们临时把晚宴提前了半小时，师傅二话没说，十分钟就把车调过来。这种应变，不是谁都有。' },
    { n: '郑州老赵', r: '新娘爸爸', d: '2026年10月', rt: '河南郑州 → 陕西西安', p: 47, v: '53座大巴', t: '4天3晚', a: 'a09.jpg', l: 336,
      c: '出嫁妆那天我才知道东西有多少：两床被子、四个箱子、还有一堆盆盆罐罐。53座大巴的行李舱全塞满了，师傅一件件帮我们码好，还拿绳子固定。到西安打开一点没乱。我这当爹的，看着心里踏实。' },
    { n: '昆明阿诗', r: '新娘', d: '2026年5月', rt: '云南昆明 → 大理', p: 18, v: '19座考斯特', t: '3天2晚', a: 'a10.jpg', l: 274,
      c: '我们家有些老规矩，出发时间要按老人算的时辰。师傅二话没说，凌晨三点就到村口等着。路上还特意在洱海边停了一会儿，让亲戚拍照。这些都是我们自己没想到的。婚礼结束，我妈说这师傅懂规矩。' },
    { n: '太原小郭', r: '新郎', d: '2026年7月', rt: '山西太原 → 内蒙古呼和浩特', p: 25, v: '28座小巴', t: '3天2晚', a: 'a05.jpg', l: 418,
      c: '出发那天下暴雨，高速封了一段。我当时心都凉了，以为赶不上。师傅一边打电话问路况，一边改走国道，硬是把时间抢回来了，还提前二十分钟到。全车人鼓掌，我这新郎官眼泪都快下来。' },
    { n: '深圳林太', r: '新娘妈妈', d: '2026年8月', rt: '广东深圳 → 福建厦门', p: 30, v: '35座大巴', t: '3天2晚', a: 'a11.jpg', l: 305,
      c: '我这人最烦临时加价。订的时候问清楚：过路费、停车费、司机餐费、夜间加班费，一项项写在单子上，最后结账一分没多。这点让我很服气。做生意的都知道，说清楚比便宜更难得。' },
    { n: '杭州阿俊', r: '新郎', d: '2026年4月', rt: '浙江杭州 → 安徽黄山', p: 18, v: '19座考斯特', t: '3天2晚', a: 'a12.jpg', l: 262,
      c: '接亲要凌晨4点出发，我本来担心司机起不来。结果人家头天晚上就住在我们小区附近的酒店，3点40已经在楼下等着了，车也提前预热好。这种把事当自己事的态度，比什么广告词都管用。' },
    { n: '石家庄刘姨', r: '新娘姑姑', d: '2026年10月', rt: '河北石家庄 → 北京', p: 52, v: '53座大巴', t: '3天2晚', a: 'a03.jpg', l: 449,
      c: '我们家人多，52口。以前办事都是分三批走，早的早到，晚的晚到，接人的接人，乱得很。这次一辆车，从石家庄装到北京，一个不少。车上老人坐前面，小孩坐中间，谁照顾谁都安排好了。' },
    { n: '重庆崽儿', r: '新郎', d: '2026年5月', rt: '重庆 → 四川达州', p: 22, v: '23座考斯特', t: '2天1晚', a: 'a09.jpg', l: 311,
      c: '重庆到川东那路，弯多坡陡，外地司机真不敢开。师傅本地跑了十几年，哪个弯要鸣笛、哪段在修路，门儿清。我丈母娘晕车，他特意放慢，还让她坐副驾。到地方老太太说这趟一点没受罪。' },
    { n: '海口阿美', r: '新娘', d: '2026年1月', rt: '海南海口 → 广东湛江', p: 20, v: '23座考斯特', t: '4天3晚', a: 'a04.jpg', l: 238,
      c: '跨海轮渡最怕等。师傅提前查了船班，把上船时间卡得刚好，我们到港口十分钟就上船了。回来那趟遇上大雾停航，他在车上陪我们等了三个小时，还买了热饮。这种时候最见人心。' },
    { n: '长沙念念', r: '新娘', d: '2026年10月', rt: '湖南长沙 → 江西萍乡', p: 26, v: '28座小巴', t: '2天1晚', a: 'a06.jpg', l: 376,
      c: '婚前一周，我公公那边突然多来4个人，车一下子不够坐。我急得不行，打电话过去，客服当天就帮我换了28座，价钱按原来谈的算，没加钱。这种时候不扯皮，比什么都强。' },
    { n: '苏州陈先生', r: '新郎', d: '2026年5月', rt: '江苏苏州 → 浙江湖州', p: 15, v: '15座丰田海狮', t: '2天1晚', a: 'a12.jpg', l: 247,
      c: '我们婚期改过一次，从5月改到6月。本来以为要扣钱或者加价，结果人家直接给我改档期，一分没多收，还重新确认了一遍路线。做生意讲的就是这个信字。后来我表弟结婚，我第一个就推了他们。' },
    { n: '北京何姐', r: '新娘妈妈', d: '2026年10月', rt: '北京 → 天津', p: 33, v: '35座大巴', t: '2天1晚', a: 'a02.jpg', l: 502,
      c: '我们升级了上宾计划。车上有贺卡、有伴手礼，每个座位上一瓶水一包纸巾，还挂着小红绳。我女儿上车看到就哭了，说妈你们太用心了。其实哪是我们用心，是人家替我们想到了。' }
  ];

  var CSS = ''
    + '.rw-section{width:100%;padding:60px 0 70px;background:linear-gradient(180deg,#fdf7f8 0%,#fdf2f4 42%,#fdf7f8 100%);}'
    + '.rw-inner{max-width:1280px;margin:0 auto;padding:0 16px;}'
    + '.rw-head{text-align:center;margin-bottom:30px;}'
    + '.rw-badge{display:inline-flex;align-items:center;gap:6px;background:rgba(218,27,59,.09);color:#da1b3b;font-size:13px;font-weight:600;padding:5px 14px;border-radius:999px;line-height:1.5;}'
    + '.rw-badge svg{width:14px;height:14px;flex:0 0 14px;}'
    + '.rw-title{font-size:30px;line-height:1.35;font-weight:800;color:#351d21;margin:14px 0 8px;letter-spacing:.5px;}'
    + '.rw-title em{font-style:normal;color:#da1b3b;}'
    + '.rw-sub{font-size:14px;color:#7e676b;}'
    + '.rw-stats{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;background:#fff;border:1px solid #ebe0e2;border-radius:18px;padding:20px 12px;margin-bottom:26px;}'
    + '.rw-stat{text-align:center;}'
    + '.rw-stat b{display:block;font-size:26px;font-weight:800;color:#da1b3b;letter-spacing:.5px;}'
    + '.rw-stat span{display:block;font-size:12px;color:#7e676b;margin-top:5px;}'
    + '.rw-marquee{position:relative;overflow:hidden;padding:2px 0;'
    + '-webkit-mask-image:linear-gradient(90deg,transparent 0,#000 3%,#000 97%,transparent 100%);'
    + 'mask-image:linear-gradient(90deg,transparent 0,#000 3%,#000 97%,transparent 100%);}'
    + '.rw-marquee+.rw-marquee{margin-top:16px;}'
    + '.rw-track{display:flex;width:max-content;animation:rw-left 110s linear infinite;}'
    + '.rw-marquee[data-dir="right"] .rw-track{animation-name:rw-right;animation-duration:125s;}'
    + '.rw-marquee:hover .rw-track,.rw-marquee:focus-within .rw-track{animation-play-state:paused;}'
    + '@keyframes rw-left{from{transform:translate3d(0,0,0)}to{transform:translate3d(-50%,0,0)}}'
    + '@keyframes rw-right{from{transform:translate3d(-50%,0,0)}to{transform:translate3d(0,0,0)}}'
    + '.rw-card{flex:0 0 372px;width:372px;margin-right:16px;box-sizing:border-box;height:322px;background:#fff;'
    + 'border:1px solid #ebe0e2;border-radius:16px;padding:16px;display:flex;flex-direction:column;'
    + 'box-shadow:0 2px 10px rgba(53,29,33,.045);transition:border-color .25s,box-shadow .25s;}'
    + '.rw-card:hover{border-color:rgba(218,27,59,.35);box-shadow:0 8px 24px rgba(218,27,59,.10);}'
    + '.rw-top{display:flex;align-items:flex-start;}'
    + '.rw-ava{width:44px;height:44px;flex:0 0 44px;border-radius:50%;overflow:hidden;border:2px solid rgba(218,27,59,.18);background:#f7f3f3;}'
    + '.rw-ava img{width:100%;height:100%;object-fit:cover;display:block;}'
    + '.rw-who{flex:1;min-width:0;padding-left:11px;}'
    + '.rw-name{display:flex;align-items:center;gap:6px;font-size:14px;font-weight:700;color:#351d21;}'
    + '.rw-role{flex:0 0 auto;font-size:10px;font-weight:500;color:#7e676b;border:1px solid #ebe0e2;border-radius:999px;padding:1px 7px;line-height:1.5;}'
    + '.rw-date{font-size:11px;color:#9b8b8e;margin-top:3px;}'
    + '.rw-meta{display:flex;flex-wrap:wrap;align-items:center;gap:4px 12px;margin:11px 0 9px;padding:7px 10px;'
    + 'background:#f8f4f5;border-radius:8px;font-size:11px;color:#7e676b;}'
    + '.rw-meta i{display:inline-flex;align-items:center;gap:4px;font-style:normal;}'
    + '.rw-meta svg{width:11px;height:11px;color:#da1b3b;flex:0 0 11px;}'
    + '.rw-text{flex:1;overflow:hidden;font-size:13px;line-height:1.72;color:#3f2a2e;text-align:justify;'
    + 'display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:7;'
    + '-webkit-mask-image:linear-gradient(180deg,#000 88%,rgba(0,0,0,.55) 100%);'
    + 'mask-image:linear-gradient(180deg,#000 88%,rgba(0,0,0,.55) 100%);}'
    + '.rw-foot{display:flex;align-items:center;justify-content:space-between;margin-top:10px;padding-top:9px;border-top:1px solid #f1e7e9;font-size:11px;color:#9b8b8e;}'
    + '.rw-foot .rw-like{display:inline-flex;align-items:center;gap:12px;}'
    + '.rw-foot svg{width:13px;height:13px;}'
    + '.rw-hint{text-align:center;font-size:12px;color:#9b8b8e;margin-top:22px;}'
    + '@media (max-width:900px){'
    + '.rw-title{font-size:22px;letter-spacing:.2px;padding:0 6px;}.rw-badge{font-size:12px;}'
    + '.rw-card{flex-basis:300px;width:300px;height:346px;padding:14px;}'
    + '.rw-stats{grid-template-columns:repeat(2,1fr);gap:14px 8px;padding:16px 10px;}'
    + '.rw-stat b{font-size:23px;}'
    + '.rw-track{animation-duration:80s;}.rw-marquee[data-dir="right"] .rw-track{animation-duration:92s;}'
    + '.rw-text{font-size:12px;line-height:1.7;-webkit-line-clamp:9;}'
    + '}'
    + '@media (prefers-reduced-motion:reduce){'
    + '.rw-track{animation:none!important;}'
    + '.rw-marquee{overflow-x:auto;padding-bottom:8px;}'
    + '}';

  function esc(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  var ICON = {
    pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>',
    users: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
    cal: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>',
    heart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z"/></svg>',
    msg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 8.5 8.5 0 0 1-3.9-.9L3 21l1.9-5A8.4 8.4 0 1 1 21 11.5Z"/></svg>'
  };

  function cardHTML(t) {
    return '<article class="rw-card">'
      + '<div class="rw-top">'
      + '<span class="rw-ava"><img src="assets/images/avatars/' + esc(t.a) + '" alt="' + esc(t.n) + '" loading="lazy" decoding="async" width="44" height="44"></span>'
      + '<span class="rw-who"><span class="rw-name">' + esc(t.n) + '<span class="rw-role">' + esc(t.r) + '</span></span>'
      + '<span class="rw-date">' + esc(t.d) + '</span></span>'
      + '</div>'
      + '<div class="rw-meta">'
      + '<i>' + ICON.pin + esc(t.rt) + '</i>'
      + '<i>' + ICON.users + t.p + '人</i>'
      + '<i>' + ICON.cal + esc(t.t) + '</i>'
      + '</div>'
      + '<p class="rw-text">' + esc(t.c) + '</p>'
      + '<div class="rw-foot"><span class="rw-like">'
      + '<i style="display:inline-flex;align-items:center;gap:3px">' + ICON.heart + t.l + '</i>'
      + '<i style="display:inline-flex;align-items:center;gap:3px">' + ICON.msg + Math.floor(t.l / 15) + '</i>'
      + '</span><span>' + esc(t.v) + '</span></div>'
      + '</article>';
  }

  function rowHTML(items, dir) {
    var one = items.map(cardHTML).join('');
    return '<div class="rw-marquee" data-dir="' + dir + '"><div class="rw-track">' + one + one + '</div></div>';
  }

  function build() {
    var half = Math.ceil(DATA.length / 2);
    var rowA = DATA.slice(0, half);
    var rowB = DATA.slice(half);

    var sec = document.createElement('section');
    sec.id = 'testimonials';
    sec.className = 'rw-section';
    sec.setAttribute('aria-label', '客户评价');
    sec.innerHTML = '<div class="rw-inner">'
      + '<div class="rw-head">'
      + '<span class="rw-badge">' + ICON.heart + '真实评价</span>'
      + '<h2 class="rw-title">来自全国各地娘家人的<em>真实声音</em></h2>'
      + '<p class="rw-sub">1000+ 对新人的选择，99% 好评率，看看大家怎么说</p>'
      + '</div>'
      + '<div class="rw-stats">'
      + '<div class="rw-stat"><b>1000+</b><span>服务新人</span></div>'
      + '<div class="rw-stat"><b>99%</b><span>好评率</span></div>'
      + '<div class="rw-stat"><b>30+</b><span>覆盖省份</span></div>'
      + '<div class="rw-stat"><b>4.9</b><span>平均评分</span></div>'
      + '</div>'
      + rowHTML(rowA, 'left')
      + rowHTML(rowB, 'right')
      + '<p class="rw-hint">共 ' + DATA.length + ' 条反馈 · 鼠标移到卡片上可暂停浏览</p>'
      + '</div>';
    return sec;
  }

  var mounted = false;
  function mount() {
    if (mounted || document.querySelector('.rw-section')) { mounted = true; return true; }
    var old = document.getElementById('testimonials');
    if (!old) return false;

    var style = document.createElement('style');
    style.id = 'rw-style';
    style.textContent = CSS;
    document.head.appendChild(style);

    var sec = build();
    old.id = 'testimonials-legacy';
    old.style.display = 'none';
    old.parentNode.insertBefore(sec, old);
    mounted = true;
    return true;
  }

  function boot() {
    if (mount()) return;
    var tries = 0;
    var timer = setInterval(function () {
      tries++;
      if (mount() || tries > 120) clearInterval(timer);
    }, 100);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
