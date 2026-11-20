/* 娘家巴士 · 品牌形象升级模块
 * 独立叠加模块：不改动构建产物 bundle，运行时挂载/替换。
 * 职责：1) 清除平台水印标识；2) 兜底解除动画遗留透明；
 *       3) 封面三图高端轮播；4) 车型图按车型名替换为高清新图。
 */
(function () {
  'use strict';

  var BASE = './assets/images/';

  /* ---------- 车型图映射：alt(车型名) -> 新图 ---------- */
  var VEH_MAP = {
    '别克GL8': 'veh/v01.jpg',
    '奔驰商务': 'veh/v02.jpg',
    '福特全顺': 'veh/v03.jpg',
    '丰田海狮': 'veh/v04.jpg',
    '依维柯': 'veh/v05.jpg',
    '丰田考斯特': 'veh/v06.jpg',
    '宇通考斯特': 'veh/v07.jpg',
    '江铃考斯特': 'veh/v08.jpg',
    '28座小巴': 'veh/v09.jpg',
    '宇通35座': 'veh/v10.jpg',
    '金龙38座': 'veh/v11.jpg',
    '金龙45座': 'veh/v12.jpg',
    '宇通48座': 'veh/v13.jpg',
    '海格53座': 'veh/v14.jpg'
  };

  /* ---------- 封面轮播 ---------- */
  var SLIDES = [
    {
      src: 'hero/h1.jpg',
      title: '一站式，不操心',
      sub: '车辆布置 · 随车物品 · 管家对接，从接亲到返程全程安排妥当'
    },
    {
      src: 'hero/h2.jpg',
      title: '体面，也把账算明白',
      sub: '周到接待远道而来的娘家人，有排面，也不花冤枉钱'
    },
    {
      src: 'hero/h3.jpg',
      title: '婚礼顺畅的润滑剂',
      sub: '车队有序衔接，转车、搬行李都有人照看，一路安稳舒心'
    }
  ];

  var CSS = ''
    /* 封面轮播 */
    + '.br-hero{position:relative;width:100%;aspect-ratio:4/3;overflow:hidden;border-radius:24px;box-shadow:0 24px 60px rgba(53,29,33,.18);}'
    + '.br-track{position:absolute;inset:0;display:flex;height:100%;transition:transform .8s cubic-bezier(.16,1,.3,1);will-change:transform;}'
    + '.br-slide{flex:0 0 100%;height:100%;position:relative;}'
    + '.br-slide img{width:100%;height:100%;object-fit:cover;display:block;}'
    + '.br-scrim{position:absolute;inset:0;background:linear-gradient(180deg,rgba(53,29,33,0) 40%,rgba(53,29,33,.28) 100%);}'
    + '.br-label{position:absolute;left:20px;right:20px;bottom:56px;z-index:3;background:rgba(255,255,255,.94);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);border-radius:16px;padding:14px 18px;box-shadow:0 10px 30px rgba(53,29,33,.18);border-left:3px solid #da1b3b;}'
    + '.br-lt{font-size:19px;font-weight:800;color:#351d21;letter-spacing:.3px;line-height:1.3;}'
    + '.br-ls{margin-top:5px;font-size:13px;color:#7e676b;line-height:1.5;}'
    + '.br-dots{position:absolute;bottom:16px;left:50%;transform:translateX(-50%);display:flex;gap:8px;z-index:4;}'
    + '.br-dot{width:9px;height:9px;border-radius:50%;border:none;background:rgba(255,255,255,.55);cursor:pointer;padding:0;transition:background .3s,transform .3s;}'
    + '.br-dot.br-on{background:#da1b3b;transform:scale(1.15);}'
    + '.br-arrow{position:absolute;top:50%;transform:translateY(-50%);z-index:4;width:42px;height:42px;border-radius:50%;background:rgba(255,255,255,.92);border:none;box-shadow:0 3px 12px rgba(0,0,0,.18);cursor:pointer;font-size:22px;line-height:1;color:#da1b3b;display:flex;align-items:center;justify-content:center;}'
    + '.br-arrow.br-prev{left:12px;}'
    + '.br-arrow.br-next{right:12px;}'
    + '.br-arrow:hover{background:#fff;}'
    /* 封面左侧文案微调 */
    + '.br-hero-sec h1{letter-spacing:.5px;}'
    /* 车型卡片图片统一质感 */
    + '#calculator button img{transition:transform .5s ease;}'
    + '#calculator button:hover img{transform:scale(1.04);}'
    ;

  var reduceMotion = false;
  try { reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches; } catch (e) {}

  /* ---------- 1) 水印清除 ---------- */
  function removeWatermark() {
    var sels = ['MIAODA-WATERMARK', '[data-custom-element="doubao-watermark"]', 'div[doubao-watermark]'];
    sels.forEach(function (s) {
      try { document.querySelectorAll(s).forEach(function (el) { el.remove(); }); } catch (e) {}
    });
  }

  /* ---------- 2) 动画遗留透明兜底 ---------- */
  function forceShow() {
    try {
      var secs = document.querySelectorAll('section');
      for (var i = 0; i < secs.length; i++) {
        var els = secs[i].querySelectorAll('*');
        for (var j = 0; j < els.length; j++) {
          var st = els[j].getAttribute('style') || '';
          if (st.indexOf('visibility: hidden') > -1) els[j].style.visibility = 'visible';
          if (st.indexOf('opacity: 0') > -1 || st.indexOf('opacity:0') > -1) {
            els[j].style.opacity = '1';
            if (st.indexOf('translateY') > -1 || st.indexOf('scale(') > -1) els[j].style.transform = 'none';
          }
        }
      }
    } catch (e) {}
  }

  /* ---------- 3) 车型图替换 ---------- */
  function swapVehicles() {
    var imgs = document.querySelectorAll('img');
    for (var i = 0; i < imgs.length; i++) {
      var im = imgs[i];
      var alt = (im.alt || '').trim();
      var v = VEH_MAP[alt];
      if (v) {
        var p = BASE + v;
        if (im.getAttribute('data-br-veh') !== v) {
          im.src = p;
          im.setAttribute('data-br-veh', v);
        }
      }
    }
  }

  /* ---------- 4) 封面轮播 ---------- */
  var heroDone = false;

  function el(tag, cls, html) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html != null) e.innerHTML = html;
    return e;
  }

  function buildHero() {
    var secs = document.querySelectorAll('section');
    var hero = null;
    for (var i = 0; i < secs.length; i++) {
      if (secs[i].querySelector('img[src*="img01"]') || secs[i].querySelector('img[alt*="娘家巴士"]')) { hero = secs[i]; break; }
    }
    if (!hero && secs.length) hero = secs[0];
    if (!hero) return false;

    var img = hero.querySelector('img[src*="img01"]') || hero.querySelector('img[alt*="娘家巴士"]');
    if (!img) return false;

    var imgBox = img.parentElement;
    var right = imgBox.parentElement;
    if (!imgBox || !right) return false;
    var grid = right.parentElement;
    var left = grid && grid.children.length > 1 ? grid.children[0] : null;

    hero.classList.add('br-hero-sec');

    /* 左侧内容下移，并强制清除动画遗留的透明/位移 */
    if (left) {
      left.style.paddingTop = '48px';
      left.style.opacity = '1';
      left.style.transform = 'none';
      left.style.transition = 'none';
      left.style.visibility = 'visible';
      Array.prototype.slice.call(left.children).forEach(function (c) {
        c.style.opacity = '1';
        c.style.transform = 'none';
      });
    }
    right.style.opacity = '1';
    right.style.transform = 'none';
    right.style.transition = 'none';
    right.style.visibility = 'visible';

    /* 隐藏原悬浮徽章与旧浮卡（保留节点，仅隐藏，避免误伤 React） */
    Array.prototype.slice.call(right.children).forEach(function (ch) {
      if (ch !== imgBox) ch.style.display = 'none';
    });

    /* 组装轮播 */
    var wrap = el('div', 'br-hero');
    var track = el('div', 'br-track');

    SLIDES.forEach(function (s) {
      var cell = el('div', 'br-slide');
      var im = new Image();
      im.src = BASE + s.src;
      im.alt = s.title;
      im.loading = 'eager';
      var scrim = el('div', 'br-scrim');
      var label = el('div', 'br-label');
      label.appendChild(el('div', 'br-lt', s.title));
      label.appendChild(el('div', 'br-ls', s.sub));
      cell.appendChild(im);
      cell.appendChild(scrim);
      cell.appendChild(label);
      track.appendChild(cell);
    });
    wrap.appendChild(track);

    /* 指示点 */
    var dots = el('div', 'br-dots');
    var dotBtns = [];
    SLIDES.forEach(function (_, idx) {
      var d = el('button', 'br-dot' + (idx === 0 ? ' br-on' : ''));
      d.type = 'button';
      d.setAttribute('aria-label', '第' + (idx + 1) + '张');
      dots.appendChild(d);
      dotBtns.push(d);
    });
    wrap.appendChild(dots);

    /* 箭头 */
    var prev = el('button', 'br-arrow br-prev', '‹');
    var next = el('button', 'br-arrow br-next', '›');
    prev.type = 'button'; next.type = 'button';
    wrap.appendChild(prev);
    wrap.appendChild(next);

    imgBox.innerHTML = '';
    imgBox.appendChild(wrap);

    /* 轮播逻辑 */
    var pos = 0, timer = null, n = SLIDES.length;
    function update() {
      track.style.transform = 'translateX(' + (-pos * 100) + '%)';
      dotBtns.forEach(function (d, idx) { d.classList.toggle('br-on', idx === pos); });
    }
    function go(k) { pos = (k + n) % n; update(); }
    function auto() {
      if (reduceMotion) return;
      clearInterval(timer);
      timer = setInterval(function () { go(pos + 1); }, 5500);
    }
    prev.addEventListener('click', function () { go(pos - 1); auto(); });
    next.addEventListener('click', function () { go(pos + 1); auto(); });
    dotBtns.forEach(function (d, idx) {
      d.addEventListener('click', function () { go(idx); auto(); });
    });
    wrap.addEventListener('mouseenter', function () { clearInterval(timer); });
    wrap.addEventListener('mouseleave', auto);

    var sx = 0;
    wrap.addEventListener('touchstart', function (e) { sx = e.touches[0].clientX; clearInterval(timer); }, { passive: true });
    wrap.addEventListener('touchend', function (e) {
      var dx = e.changedTouches[0].clientX - sx;
      if (Math.abs(dx) > 30) go(dx < 0 ? pos + 1 : pos - 1);
      auto();
    }, { passive: true });

    update();
    auto();
    heroDone = true;
    return true;
  }

  /* ---------- 启动 ---------- */
  function injectStyle() {
    if (document.getElementById('br-style')) return;
    var style = document.createElement('style');
    style.id = 'br-style';
    style.textContent = CSS;
    document.head.appendChild(style);
  }

  function boot() {
    injectStyle();
    removeWatermark();
    forceShow();
    swapVehicles();

    var tries = 0;
    var timer = setInterval(function () {
      tries++;
      removeWatermark();
      forceShow();
      swapVehicles();
      if (heroDone || tries > 120) {
        if (heroDone) clearInterval(timer);
      }
      if (tries > 120) clearInterval(timer);
    }, 120);

    var htries = 0;
    var heroTimer = setInterval(function () {
      htries++;
      if (buildHero() || htries > 120) clearInterval(heroTimer);
    }, 120);

    /* DOM 变化观察：车型切换/重渲染后重新替换图片 */
    if (window.MutationObserver) {
      var obs = new MutationObserver(function () {
        removeWatermark();
        swapVehicles();
      });
      setTimeout(function () {
        if (document.body) obs.observe(document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ['src', 'style'] });
      }, 500);
    }
    setInterval(forceShow, 800);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
