document.addEventListener('DOMContentLoaded', () => {
    // Vanta background
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
  
    // Copy‑to‑clipboard button
    const copyBtn = document.getElementById('copy-btn');
    const originalText = copyBtn.textContent;
    copyBtn.addEventListener('click', () => {
      navigator.clipboard.writeText('minecraft.sapherians.com').then(() => {
        copyBtn.textContent = 'Copied!';
        copyBtn.disabled = true;
        setTimeout(() => {
          copyBtn.textContent = originalText;
          copyBtn.disabled = false;
        }, 2000);
      }).catch(() => {
        alert('Failed to copy. Please copy manually.');
      });
    });
  });