/* ============================================================
   经纬易行 · 全球行程定制（中文出境站）
   共享逻辑 —— 静态 MVP（方案 A）
   - 收藏与行程保存在浏览器 localStorage
   - 无后端、不在线支付；询价经联系渠道收口
   ============================================================ */
(function () {
  'use strict';

  /* ---------- 静态元数据 ---------- */
  var CAT = {
    transfer: { label: '接送机', icon: 'M12 2a7 7 0 0 1 7 7c0 2.4-1.2 4.2-2.5 5.7-.8.9-1.5 1.6-1.5 2.8h-6c0-1.2-.7-1.9-1.5-2.8C6.2 13.2 5 11.4 5 9a7 7 0 0 1 7-7zM7.5 16h9l1.5 4H6l1.5-4z' },
    car:      { label: '包车', icon: 'M4 16l1.5-5A2 2 0 0 1 7.4 9h9.2a2 2 0 0 1 1.9 2l1.5 5v4h-2v-2H6v2H4v-4zM7.5 13h9M6.5 18a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4zm11 0a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4z' },
    hotel:    { label: '酒店', icon: 'M3 21V7l9-4 9 4v14h-6v-6H9v6H3zm3-10h2v2H6zm6 0h2v2h-2z' },
    attraction:{ label: '景点/项目', icon: 'M12 2s6 6 6 11a6 6 0 0 1-12 0c0-5 6-11 6-11zM9 13h6M10 17h4' },
    corp:     { label: '企业参访', icon: 'M3 21h18M5 21V5h8v16M13 9h6v12M8 9h2M8 13h2M8 17h2M16 13h.01M16 17h.01' },
    univ:     { label: '院校参访', icon: 'M2 9l10-5 10 5-10 5L2 9zm4 3.5V17c0 1.5 2.7 3 6 3s6-1.5 6-3v-4.5' },
    other:    { label: '加项服务', icon: 'M12 3v3m0 12v3M3 12h3m12 0h3M5.6 5.6l2.1 2.1m8.6 8.6 2.1 2.1m0-12.8-2.1 2.1M7.7 18.3l-2.1 2.1M12 12m0 0 0 0' }
  };

  var AGE = {
    all: '全年龄', family: '亲子', young: '青年',
    senior: '长者', couple: '情侣', business: '商务'
  };

  var SLOT = {
    morning: '上午', afternoon: '下午', evening: '傍晚',
    allday: '全天', flexible: '灵活', night: '夜间'
  };

  var CONTACT = {
    wechat: '微信 / 电话：+86 199 1883 8887',
    whatsapp: 'WhatsApp：+86 151 1645 6929',
    email: 'wil@jingweiyixing.com'
  };

  var FAV_KEY = 'jwcn_favs';
  var PLAN_KEY = 'jwcn_plan';

  /* ---------- 存储 ---------- */
  function readJSON(key, fallback) {
    try { var raw = localStorage.getItem(key); return raw ? JSON.parse(raw) : fallback; }
    catch (e) { return fallback; }
  }
  function writeJSON(key, val) {
    try { localStorage.setItem(key, JSON.stringify(val)); } catch (e) {}
  }

  function getFavs() { return readJSON(FAV_KEY, []); }
  function isFav(id) { return getFavs().indexOf(id) > -1; }
  function toggleFav(id) {
    var f = getFavs();
    var i = f.indexOf(id);
    if (i > -1) f.splice(i, 1); else f.push(id);
    writeJSON(FAV_KEY, f);
    return isFav(id);
  }

  function defaultPlan() {
    return { title: '我的环球行程', start: '', end: '', days: [], hotels: [] };
  }
  function getPlan() {
    var p = readJSON(PLAN_KEY, null);
    if (!p || typeof p !== 'object') return defaultPlan();
    p.days = p.days || []; p.hotels = p.hotels || [];
    return p;
  }
  function savePlan(p) { writeJSON(PLAN_KEY, p); }

  function byId(id) {
    var list = window.PRODUCTS || [];
    for (var i = 0; i < list.length; i++) if (list[i].id === id) return list[i];
    return null;
  }

  /* ---------- 格式化 ---------- */
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  function priceHTML(p) {
    if (!p.price) return '';
    if (p.price.fixed === 0) {
      return '<div class="price"><span class="price-main">免费规划</span><span class="price-range">' + esc(p.price.range) + '</span></div>';
    }
    return '<div class="price"><span class="price-main">¥' + Number(p.price.fixed).toLocaleString() + ' 起</span><span class="price-unit">/ ' + esc(p.price.unit) + '</span><span class="price-range">常规区间：' + esc(p.price.range) + '</span></div>';
  }

  function starsHTML(n) {
    var out = '<span class="stars" aria-label="' + n + ' 星（满分 5 星）">';
    for (var i = 1; i <= 5; i++) out += i <= n ? '★' : '☆';
    return out + '</span>';
  }

  function metaHTML(p) {
    var t = p.tags || {};
    var bits = [];
    bits.push('<span class="meta-bit">' + esc(AGE[t.age] || t.age || '') + '</span>');
    bits.push('<span class="meta-bit">' + esc(t.dur || '') + '</span>');
    if (t.slot && SLOT[t.slot] && SLOT[t.slot] !== t.dur) bits.push('<span class="meta-bit">' + esc(SLOT[t.slot]) + '</span>');
    return '<div class="meta">' + bits.join('') + '</div>';
  }

  function catIcon(cat) {
    var m = CAT[cat] || CAT.other;
    return '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="' + m.icon + '"/></svg>';
  }

  /* ---------- 产品卡片 ---------- */
  function cardHTML(p, opts) {
    opts = opts || {};
    var fav = isFav(p.id);
    var badge = p.standalone ? '<span class="tag tag--plain">单独购票/咨询</span>' : '';
    var mediaInner = p.img
      ? '<img src="' + esc(p.img) + '" alt="' + esc(p.name) + '" loading="lazy">'
      : '<span class="media-icon">' + catIcon(p.cat) + '</span>';
    return '<article class="card prod" data-id="' + esc(p.id) + '">' +
      '<a class="media ph--' + p.cat + (p.img ? ' has-img' : '') + '" href="product.html?id=' + esc(p.id) + '">' +
        mediaInner +
        '<span class="media-city">' + esc(p.city) + '</span>' +
        '<span class="media-cat">' + esc((CAT[p.cat] || CAT.other).label) + '</span>' +
      '</a>' +
      '<div class="body">' +
        '<div class="row-top">' + starsHTML(p.tags.stars) + badge + '</div>' +
        '<h3><a href="product.html?id=' + esc(p.id) + '">' + esc(p.name) + '</a></h3>' +
        metaHTML(p) +
        '<p class="desc">' + esc(p.desc.length > 92 ? p.desc.slice(0, 92) + '…' : p.desc) + '</p>' +
        priceHTML(p) +
        '<div class="card-actions">' +
          '<button class="btn-fav' + (fav ? ' on' : '') + '" data-fav="' + esc(p.id) + '" aria-label="收藏产品">' +
            (fav ? '♥ 已收藏' : '♡ 收藏') + '</button>' +
          (p.standalone
            ? '<a class="btn-line-sm" href="inquiry.html?id=' + esc(p.id) + '">单独咨询</a>'
            : p.cat === 'hotel'
              ? '<a class="btn-line-sm" href="planner.html?add=' + esc(p.id) + '">加入酒店</a>'
              : '<a class="btn-line-sm" href="planner.html?add=' + esc(p.id) + '">加入行程</a>') +
        '</div>' +
      '</div>' +
    '</article>';
  }

  function renderCards(container, list, emptyText) {
    if (!container) return;
    if (!list.length) {
      container.innerHTML = '<p class="empty">' + esc(emptyText || '暂无符合筛选条件的产品。') + '</p>';
      return;
    }
    container.innerHTML = list.map(cardHTML).join('');
  }

  /* ---------- 行程冲突规则 ---------- */
  function conflictOnDay(day, p) {
    if (!day || !p) return null;
    if (p.cat === 'hotel') return '酒店按晚安排，不占用白天时段';
    if (p.standalone) return '门票类产品不占用行程时段，请单独咨询';
    var slot = (p.tags && p.tags.slot) || 'flexible';
    for (var i = 0; i < day.items.length; i++) {
      var ex = byId(day.items[i].id);
      if (!ex) continue;
      var exSlot = (ex.tags && ex.tags.slot) || 'flexible';
      if (exSlot === 'allday') return '当天已有一项全天安排：' + ex.name;
      if (slot === 'allday') return '本产品占用整个白天';
      if (exSlot === slot && slot !== 'flexible') return '当天已有一项' + SLOT[slot] + '的安排';
    }
    return null;
  }

  function planSummary(p) {
    var lines = [];
    lines.push('行程：' + (p.title || '我的环球行程'));
    if (p.start) lines.push('日期：' + p.start + (p.end ? ' → ' + p.end : ''));
    var booked = 0;
    (p.days || []).forEach(function (d, di) {
      if (!d.items.length) return;
      lines.push('');
      lines.push(d.date ? d.date : '第 ' + (di + 1) + ' 天');
      d.items.forEach(function (it) {
        var prod = byId(it.id);
        if (prod) { lines.push('  · [' + (SLOT[prod.tags.slot] || prod.tags.slot) + '] ' + prod.name + ' — ' + prod.city); booked++; }
      });
    });
    if ((p.hotels || []).length) {
      lines.push('');
      lines.push('酒店：');
      p.hotels.forEach(function (h) {
        var prod = byId(h.id);
        if (prod) lines.push('  · ' + prod.name + ' — ' + (h.night ? '晚入住 ' + h.night : '晚入住日期待定'));
      });
    }
    if (!booked && !(p.hotels || []).length) lines.push('（暂未添加产品。）');
    lines.push('');
    lines.push('联系：' + CONTACT.wechat + ' | ' + CONTACT.whatsapp + ' | ' + CONTACT.email);
    return lines.join('\n');
  }

  /* ---------- 全局页面绑定 ---------- */
  function initNav() {
    var toggle = document.getElementById('nav-toggle');
    var nav = document.getElementById('nav');
    if (toggle && nav) {
      toggle.addEventListener('click', function () {
        nav.classList.toggle('open');
        toggle.setAttribute('aria-expanded', nav.classList.contains('open') ? 'true' : 'false');
      });
    }
    var page = document.body.getAttribute('data-page');
    if (page && nav) {
      var links = nav.querySelectorAll('a[data-nav]');
      links.forEach(function (a) { if (a.getAttribute('data-nav') === page) a.classList.add('on'); });
    }
    updateFavBadge();
  }

  function updateFavBadge() {
    var badge = document.getElementById('fav-count');
    if (badge) badge.textContent = getFavs().length;
  }

  function bindDelegated(container) {
    if (!container) return;
    container.addEventListener('click', function (e) {
      var favBtn = e.target.closest('[data-fav]');
      if (favBtn) {
        e.preventDefault();
        var id = favBtn.getAttribute('data-fav');
        var on = toggleFav(id);
        favBtn.classList.toggle('on', on);
        favBtn.innerHTML = on ? '♥ 已收藏' : '♡ 收藏';
        updateFavBadge();
        return;
      }
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    initNav();
    bindDelegated(document);
  });

  /* ---------- 对外暴露 ---------- */
  window.JW = {
    CAT: CAT, AGE: AGE, SLOT: SLOT, CONTACT: CONTACT,
    byId: byId, esc: esc, getFavs: getFavs, isFav: isFav, toggleFav: toggleFav,
    getPlan: getPlan, savePlan: savePlan, defaultPlan: defaultPlan,
    conflictOnDay: conflictOnDay, planSummary: planSummary,
    cardHTML: cardHTML, renderCards: renderCards, priceHTML: priceHTML,
    starsHTML: starsHTML, metaHTML: metaHTML, catIcon: catIcon, updateFavBadge: updateFavBadge
  };
})();
