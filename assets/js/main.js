/* ============================================================
   经纬易行 · 全局交互脚本
   1. 移动端导航开合
   2. 当前页导航高亮
   3. 中英切换（data-lang 元素 + 语言开关）
   4. 询盘表单：演示版拦截，引导邮件/电话（不假装提交成功）
   ============================================================ */
(function () {
  'use strict';

  /* ---------- 1. 移动导航 ---------- */
  var toggle = document.getElementById('nav-toggle');
  var nav = document.getElementById('nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', nav.classList.contains('open') ? 'true' : 'false');
    });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') nav.classList.remove('open');
    });
  }

  /* ---------- 2. 当前页高亮 ---------- */
  var page = document.body.getAttribute('data-page');
  if (page) {
    var links = nav ? nav.querySelectorAll('a[data-nav]') : [];
    for (var i = 0; i < links.length; i++) {
      if (links[i].getAttribute('data-nav') === page) links[i].classList.add('on');
    }
  }

  /* ---------- 3. 中英切换（仅页面存在 i18n 区块时启用） ---------- */
  var btnZh = document.getElementById('btn-zh');
  var btnEn = document.getElementById('btn-en');
  if (btnZh && btnEn) {
    function applyLang(l) {
      document.documentElement.lang = (l === 'zh') ? 'zh-CN' : 'en';
      var nodes = document.querySelectorAll('.i18n [data-lang]');
      for (var i = 0; i < nodes.length; i++) {
        nodes[i].hidden = (nodes[i].getAttribute('data-lang') !== l);
      }
      btnZh.classList.toggle('on', l === 'zh');
      btnEn.classList.toggle('on', l === 'en');
    }
    btnZh.addEventListener('click', function () { applyLang('zh'); });
    btnEn.addEventListener('click', function () { applyLang('en'); });
    applyLang('zh');
  }

  /* ---------- 4. 询盘表单（演示版） ---------- */
  var forms = document.querySelectorAll('form[data-demo]');
  for (var f = 0; f < forms.length; f++) {
    forms[f].addEventListener('submit', function (e) {
      e.preventDefault();
      var msg = this.querySelector('.msg');
      if (msg) {
        msg.classList.add('show');
        msg.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    });
  }
})();
