(function () {
  // "Zuletzt aktualisiert"
  const el = document.getElementById('lastUpdated');
  if (el) {
    try {
      el.textContent = new Intl.DateTimeFormat('de-DE', {
        year: 'numeric', month: '2-digit', day: '2-digit',
        hour: '2-digit', minute: '2-digit'
      }).format(new Date());
    } catch {
      el.textContent = new Date().toLocaleString('de-DE');
    }
  }

  // Skills: Aus data-score die Anzeige (meter + "x/10") setzen
  document.querySelectorAll('.skills li').forEach((li) => {
    const raw = Number(li.getAttribute('data-score'));
    const score = Number.isFinite(raw) ? Math.min(10, Math.max(1, raw)) : 1;

    const meter = li.querySelector('meter');
    const label = li.querySelector('.score');

    if (meter) {
      meter.min = 1;
      meter.max = 10;
      meter.value = score;
      // aria-label präzisieren
      const name = li.querySelector('.skill-name')?.textContent?.trim() || 'Skill';
      meter.setAttribute('aria-label', `${name} ${score} von 10`);
    }
    if (label) {
      label.textContent = `${score}/10`;
    }
  });
})();
