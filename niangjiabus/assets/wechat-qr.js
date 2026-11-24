/* 娘家巴士 · 联系区块微信二维码
 * 独立叠加模块：在「直接联系我们」卡片微信行下方插入二维码，不改动构建产物 bundle。
 */
(function () {
  'use strict';

  var BASE = './assets/images/';
  var QR = BASE + 'qr/wechat-qr.jpg';

  var CSS = ''
    + '.qr-box{margin-top:20px;padding:18px 16px;border-radius:16px;background:#fcf4e3;display:flex;flex-direction:column;align-items:center;gap:10px;}'
    + '.qr-img{width:168px;height:168px;background:#fff;border:1px solid #ebe0e2;border-radius:14px;padding:10px;box-sizing:border-box;}'
    + '.qr-img img{width:100%;height:100%;object-fit:contain;display:block;}'
    + '.qr-cap{font-size:13px;font-weight:700;color:#351d21;text-align:center;letter-spacing:.3px;}'
    + '.qr-cap small{display:block;font-size:12px;font-weight:400;color:#7e676b;margin-top:3px;}';

  function injectStyle() {
    if (document.getElementById('qr-style')) return;
    var s = document.createElement('style');
    s.id = 'qr-style';
    s.textContent = CSS;
    document.head.appendChild(s);
  }

  function mount() {
    var sec = document.getElementById('contact');
    if (!sec) return false;
    if (sec.querySelector('.qr-box')) return true;

    /* 找到「微信咨询」所在行，取其卡片容器 */
    var all = sec.querySelectorAll('div, a');
    var row = null;
    for (var i = 0; i < all.length; i++) {
      var t = all[i].textContent || '';
      if (t.indexOf('微信咨询') > -1 && t.length < 60) { row = all[i]; break; }
    }
    if (!row) return false;
    var container = row.parentElement;
    if (!container) return false;

    var box = document.createElement('div');
    box.className = 'qr-box';

    var imgWrap = document.createElement('div');
    imgWrap.className = 'qr-img';
    var img = document.createElement('img');
    img.src = QR;
    img.alt = '微信咨询二维码';
    img.loading = 'lazy';
    imgWrap.appendChild(img);

    var cap = document.createElement('div');
    cap.className = 'qr-cap';
    cap.appendChild(document.createTextNode('微信扫码添加顾问'));
    var sub = document.createElement('small');
    sub.textContent = '微信号：kz06188';
    cap.appendChild(sub);

    box.appendChild(imgWrap);
    box.appendChild(cap);
    container.appendChild(box);
    return true;
  }

  function boot() {
    injectStyle();
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
