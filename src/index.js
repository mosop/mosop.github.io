import { MobileDetext } from 'mobile-detect';
import './main.styl';

document.addEventListener("DOMContentLoaded", function(event) {
  const md = new MobileDetect(window.navigator.userAgent);
  if (md.mobile() && md.os() === 'iOS' && md.userAgent() === 'Safari') {
    document.body.classList.add('ios');
  }
});
