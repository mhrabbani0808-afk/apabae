// Mobile tap-to-expand functionality
const cards = document.querySelectorAll('.container li');

cards.forEach(card => {
  card.addEventListener('click', function(e) {
    // Check if screen is mobile (max-width: 768px)
    if (window.innerWidth <= 768) {
      e.preventDefault();
      
      // If already expanded, collapse it
      if (this.classList.contains('expanded')) {
        this.classList.remove('expanded');
      } else {
        // Collapse all other cards first
        cards.forEach(c => c.classList.remove('expanded'));
        // Expand the clicked card
        this.classList.add('expanded');
        
        // Scroll card into view smoothly
        setTimeout(() => {
          this.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'nearest', 
            inline: 'center' 
          });
        }, 100);
      }
    }
  });
});

// Remove expanded class when resizing to desktop
window.addEventListener('resize', function() {
  if (window.innerWidth > 768) {
    cards.forEach(card => card.classList.remove('expanded'));
  }
});
