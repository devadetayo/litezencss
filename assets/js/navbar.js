document.addEventListener('DOMContentLoaded', function() {
  const btn  = document.querySelector('button[data-toggle][data-target="#mobile-menu"]');
  const menu = document.querySelector('#mobile-menu');

  // SVG icons
  const hamSVG = `
    <svg class="ham-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="18" height="18" fill="currentColor">
      <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/>
    </svg>`;
  const closeSVG = `
    <svg class="ham-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width="18" height="18" fill="currentColor">
      <path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3l-22.6-22.6c-12.5-12.5-32.8-12.5-45.3 0L160 202.7 77.3 120c-12.5-12.5-32.8-12.5-45.3 0L9.4 142.6c-12.5 12.5-12.5 32.8 0 45.3L92.1 256 9.4 338.7c-12.5 12.5-12.5 32.8 0 45.3l22.6 22.6c12.5 12.5 32.8 12.5 45.3 0L160 309.3l82.7 82.7c12.5 12.5 32.8 12.5 45.3 0l22.6-22.6c12.5-12.5 12.5-32.8 0-45.3L227.9 256l82.7-82.7z"/>
    </svg>`;

  // initialize with hamburger
  btn.innerHTML = hamSVG;

  btn.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('open');
    btn.classList.toggle('open', isOpen);
    btn.innerHTML = isOpen ? closeSVG : hamSVG;
  });
});
