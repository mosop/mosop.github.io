// require('animate.css');
require.context('.', false, /\.styl$/);
// require('script!wow');
require('script!mobile-detect');

document.addEventListener("DOMContentLoaded", function(event) {
  const md = new MobileDetect(window.navigator.userAgent);
  if (md.mobile() && md.os() === 'iOS' && md.userAgent() === 'Safari') {
    document.body.classList.add('ios');
  }
});
