// Beim Klick auf das Briefbild: Landing Page ausblenden, Nachrichtenseite einblenden und Animation starten
document.getElementById('letterImage').addEventListener('click', function() {
    document.getElementById('landingPage').classList.add('hidden');
    document.getElementById('messagePage').classList.remove('hidden');
    startHeartAnimation();
  });
  
  // Erzeugt animierte Herzen im Hintergrund der Nachrichtenseite
  function startHeartAnimation() {
    const heartContainer = document.getElementById('heartContainer');
    const heartCount = 30; // Anzahl der Herzen
    for (let i = 0; i < heartCount; i++) {
      const heart = document.createElement('div');
      heart.classList.add('heart');
      heart.innerHTML = '❤';
      // Zufällige Position, Größe, Animationsdauer und Verzögerung
      const size = Math.random() * 20 + 10; // 10px bis 30px
      heart.style.fontSize = size + 'px';
      heart.style.left = Math.random() * 100 + '%';
      const duration = Math.random() * 5 + 5; // 5s bis 10s
      heart.style.animationDuration = duration + 's';
      heart.style.animationDelay = Math.random() * 5 + 's';
      heartContainer.appendChild(heart);
    }
  }
  