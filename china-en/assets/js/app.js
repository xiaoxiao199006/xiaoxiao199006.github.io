/* ============================================================
   Jingwei Yixing · China Travel Custom (English)
   Shared app logic — static MVP (Plan A)
   - Favorites & itinerary stored in browser localStorage
   - No backend, no online payment; inquiries close via contact
   ============================================================ */
(function () {
  'use strict';

  /* ---------- static meta ---------- */
  var CAT = {
    transfer: { label: 'Airport Transfer', icon: 'M12 2a7 7 0 0 1 7 7c0 2.4-1.2 4.2-2.5 5.7-.8.9-1.5 1.6-1.5 2.8h-6c0-1.2-.7-1.9-1.5-2.8C6.2 13.2 5 11.4 5 9a7 7 0 0 1 7-7zM7.5 16h9l1.5 4H6l1.5-4z' },
    car:      { label: 'Private Charter', icon: 'M4 16l1.5-5A2 2 0 0 1 7.4 9h9.2a2 2 0 0 1 1.9 2l1.5 5v4h-2v-2H6v2H4v-4zM7.5 13h9M6.5 18a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4zm11 0a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4z' },
    hotel:    { label: 'Hotel', icon: 'M3 21V7l9-4 9 4v14h-6v-6H9v6H3zm3-10h2v2H6zm6 0h2v2h-2z' },
    attraction:{ label: 'Tour & Activity', icon: 'M12 2s6 6 6 11a6 6 0 0 1-12 0c0-5 6-11 6-11zM9 13h6M10 17h4' },
    corp:     { label: 'Company Visit', icon: 'M3 21h18M5 21V5h8v16M13 9h6v12M8 9h2M8 13h2M8 17h2M16 13h.01M16 17h.01' },
    univ:     { label: 'University Visit', icon: 'M2 9l10-5 10 5-10 5L2 9zm4 3.5V17c0 1.5 2.7 3 6 3s6-1.5 6-3v-4.5' },
    other:    { label: 'Add-on Service', icon: 'M12 3v3m0 12v3M3 12h3m12 0h3M5.6 5.6l2.1 2.1m8.6 8.6 2.1 2.1m0-12.8-2.1 2.1M7.7 18.3l-2.1 2.1M12 12m0 0 0 0' }
  };

  var AGE = {
    all: 'All ages', family: 'Family-friendly', young: 'Young travelers',
    senior: 'Senior-friendly', couple: 'Couples', business: 'Business'
  };

  var SLOT = {
    morning: 'Morning', afternoon: 'Afternoon', evening: 'Evening',
    allday: 'Full day', flexible: 'Flexible', night: 'Overnight'
  };

  var CONTACT = {
    wechat: 'WeChat / Phone: +86 199 1883 8887',
    whatsapp: 'WhatsApp: +86 151 1645 6929',
    email: 'wil@jingweiyixing.com'
  };

  var FAV_KEY = 'jwce_favs';
  var PLAN_KEY = 'jwce_plan';

  /* ---------- storage helpers ---------- */
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
    return { title: 'My China Trip', start: '', end: '', days: [], hotels: [] };
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

  /* ---------- formatting ---------- */
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  function priceHTML(p) {
    if (!p.price) return '';
    if (p.price.fixed === 0) {
      return '<div class="price"><span class="price-main">Complimentary</span><span class="price-range">' + esc(p.price.range) + '</span></div>';
    }
    return '<div class="price"><span class="price-main">From ¥' + Number(p.price.fixed).toLocaleString() + '</span><span class="price-unit">/ ' + esc(p.price.unit) + '</span><span class="price-range">Typical range: ' + esc(p.price.range) + '</span></div>';
  }

  function starsHTML(n) {
    var out = '<span class="stars" aria-label="' + n + ' out of 5">';
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

  /* ---------- product card ---------- */
  function cardHTML(p, opts) {
    opts = opts || {};
    var fav = isFav(p.id);
    var badge = p.standalone ? '<span class="tag tag--plain">Ticket only</span>' : '';
    return '<article class="card prod" data-id="' + esc(p.id) + '">' +
      '<a class="media ph--' + p.cat + '" href="product.html?id=' + esc(p.id) + '">' +
        '<span class="media-icon">' + catIcon(p.cat) + '</span>' +
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
          '<button class="btn-fav' + (fav ? ' on' : '') + '" data-fav="' + esc(p.id) + '" aria-label="Save to favorites">' +
            (fav ? '♥ Saved' : '♡ Save') + '</button>' +
          (p.standalone
            ? '<a class="btn-line-sm" href="inquiry.html?id=' + esc(p.id) + '">Request ticket</a>'
            : p.cat === 'hotel'
              ? '<a class="btn-line-sm" href="planner.html?add=' + esc(p.id) + '">Add hotel</a>'
              : '<a class="btn-line-sm" href="planner.html?add=' + esc(p.id) + '">Add to plan</a>') +
        '</div>' +
      '</div>' +
    '</article>';
  }

  function renderCards(container, list, emptyText) {
    if (!container) return;
    if (!list.length) {
      container.innerHTML = '<p class="empty">' + esc(emptyText || 'No products match this filter yet.') + '</p>';
      return;
    }
    container.innerHTML = list.map(cardHTML).join('');
  }

  /* ---------- planner conflict logic ---------- */
  function conflictOnDay(day, p) {
    if (!day || !p) return null;
    if (p.cat === 'hotel') return 'hotels are assigned by night, not to a day slot';
    if (p.standalone) return 'standalone tickets do not take a day slot — add them to your inquiry instead';
    var slot = (p.tags && p.tags.slot) || 'flexible';
    for (var i = 0; i < day.items.length; i++) {
      var ex = byId(day.items[i].id);
      if (!ex) continue;
      var exSlot = (ex.tags && ex.tags.slot) || 'flexible';
      if (exSlot === 'allday') return 'this day already has a full-day ' + ex.name;
      if (slot === 'allday') return 'this product occupies the whole day';
      if (exSlot === slot && slot !== 'flexible') return 'this day already has a ' + SLOT[slot] + ' item';
    }
    return null;
  }

  function planSummary(p) {
    var lines = [];
    lines.push('Trip: ' + (p.title || 'My China Trip'));
    if (p.start) lines.push('Dates: ' + p.start + (p.end ? ' → ' + p.end : ''));
    var booked = 0;
    (p.days || []).forEach(function (d, di) {
      if (!d.items.length) return;
      lines.push('');
      lines.push(d.date ? d.date : 'Day ' + (di + 1));
      d.items.forEach(function (it) {
        var prod = byId(it.id);
        if (prod) { lines.push('  · [' + (SLOT[prod.tags.slot] || prod.tags.slot) + '] ' + prod.name + ' — ' + prod.city); booked++; }
      });
    });
    if ((p.hotels || []).length) {
      lines.push('');
      lines.push('Hotels:');
      p.hotels.forEach(function (h) {
        var prod = byId(h.id);
        if (prod) lines.push('  · ' + prod.name + ' — night of ' + (h.night || 'TBD'));
      });
    }
    if (!booked && !(p.hotels || []).length) lines.push('(No products added yet.)');
    lines.push('');
    lines.push('Contact: ' + CONTACT.wechat + ' | ' + CONTACT.whatsapp + ' | ' + CONTACT.email);
    return lines.join('\n');
  }

  /* ---------- global page wiring ---------- */
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

  /* Delegated fav toggle for any rendered card */
  function bindDelegated(container) {
    if (!container) return;
    container.addEventListener('click', function (e) {
      var favBtn = e.target.closest('[data-fav]');
      if (favBtn) {
        e.preventDefault();
        var id = favBtn.getAttribute('data-fav');
        var on = toggleFav(id);
        favBtn.classList.toggle('on', on);
        favBtn.innerHTML = on ? '♥ Saved' : '♡ Save';
        updateFavBadge();
        return;
      }
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    initNav();
    bindDelegated(document);
  });

  /* ---------- expose ---------- */
  window.JW = {
    CAT: CAT, AGE: AGE, SLOT: SLOT, CONTACT: CONTACT,
    byId: byId, esc: esc, getFavs: getFavs, isFav: isFav, toggleFav: toggleFav,
    getPlan: getPlan, savePlan: savePlan, defaultPlan: defaultPlan,
    conflictOnDay: conflictOnDay, planSummary: planSummary,
    cardHTML: cardHTML, renderCards: renderCards, priceHTML: priceHTML,
    starsHTML: starsHTML, metaHTML: metaHTML, catIcon: catIcon, updateFavBadge: updateFavBadge
  };
})();
