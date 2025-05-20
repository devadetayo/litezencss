document.addEventListener('DOMContentLoaded', () => {
  const handle    = document.getElementById('theme-handle');
  const wrapper   = handle.parentElement;                    // the <div class="w-full md-w-70p ...">
  const darkPanel = wrapper.querySelector('[data-theme="dark"]');

  let isDragging = false;

  const stopDrag = () => {
    if (!isDragging) return;
    isDragging = false;
    handle.style.transition    = '';
    darkPanel.style.transition = '';
  };

  handle.addEventListener('mousedown', e => {
    e.preventDefault();
    isDragging = true;
    handle.style.transition    = 'none';
    darkPanel.style.transition = 'none';
  });

  document.addEventListener('mouseup',   stopDrag);
  document.addEventListener('mouseleave',stopDrag);

  document.addEventListener('mousemove', e => {
    if (!isDragging) return;
    const rect = wrapper.getBoundingClientRect();
    let x = e.clientX - rect.left;
    x = Math.max(0, Math.min(rect.width, x));
    const pct = (x / rect.width) * 100;
    handle.style.left                = `${pct}%`;
    darkPanel.style.clipPath         = `inset(0 0 0 ${pct}%)`;
  });
});
