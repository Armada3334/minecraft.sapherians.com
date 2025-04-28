// mesh.js
document.addEventListener('DOMContentLoaded', () => {
  /* Vanta background */
  VANTA.NET({
    el: '#vanta-bg',
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    color: 0xffffff,
    backgroundColor: 0x000000,
    points: 12.0,
    maxDistance: 20.0,
    spacing: 15.0,
  });

  /* Copy-to-clipboard button */
  const copyBtn = document.getElementById('copy-btn');
  if (!copyBtn) return;

  const original = copyBtn.textContent;
  const serverIP = 'minecraft.sapherians.com';

  function flash(text, ok = true) {
    copyBtn.textContent = text;
    copyBtn.disabled = true;
    copyBtn.style.opacity = ok ? '1' : '0.7';
    setTimeout(() => {
      copyBtn.textContent = original;
      copyBtn.disabled = false;
      copyBtn.style.opacity = '1';
    }, 2000);
  }

  copyBtn.addEventListener('click', () => {
    if (navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(serverIP).then(
        () => flash('Copied!'),
        ()   => fallback()
      );
    } else {
      fallback();
    }
  });

  function fallback() {
    const ta = document.createElement('textarea');
    ta.value = serverIP;
    ta.setAttribute('readonly', '');
    ta.style.position = 'absolute';
    ta.style.left = '-9999px';
    document.body.appendChild(ta);
    ta.select();
    try {
      const ok = document.execCommand('copy');
      flash(ok ? 'Copied!' : 'Copy failed', ok);
    } catch {
      flash('Copy failed', false);
    }
    document.body.removeChild(ta);
  }
});
