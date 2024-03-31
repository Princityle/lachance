/* ----------------------------------- */
/* ------ Custom ------ */
/* ----------------------------------- */
// 判斷是否為移動端
function isMobile() {
  try {
    document.createEvent('TouchEvent');
    return true;
  } catch (e) {
    return false;
  }
}

//-- Btn Tag
// 抓取檔名
const pathname = location.pathname;
const a = document.querySelectorAll('a');
a.forEach(function(item) {
  const aHref = item.getAttribute('href');
  if (pathname.includes(aHref)) {
    item.classList.add('is-active');
  }
});

// Navbar
let isOpened = false;
const $body = document.body;
const $navbar = document.querySelector('.l-navbar');
const $burger = document.querySelector('.o-burger');

function toggleNavbar() {
  if (!isOpened) {
    $body.style.overflow = 'hidden';
    $navbar.classList.add('is-opened');
    $burger.classList.add('is-opened');
    isOpened = true;
  } else {
    $body.style.overflow = '';
    $navbar.classList.remove('is-opened');
    $burger.classList.remove('is-opened');
    isOpened = false;
  }
}

/* ----------------------------------- */
/* ------ Plugin ------ */
/* ----------------------------------- */
const lenis = new Lenis();
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

const $lazyImgs = document.querySelectorAll('img.js-lazy');
$lazyImgs.forEach(function(item) {
  // https://png-pixel.com/
  item.setAttribute(
    'src',
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII='
  );
});
// https://github.com/verlok/vanilla-lazyload
const lazyLoad = new LazyLoad({
  elements_selector: '.js-lazy',
  // 設定距離可視區(視窗)底部多遠觸發
  threshold: 500,
  callback_loaded: function() {
    AOS.refresh();
  }
});
