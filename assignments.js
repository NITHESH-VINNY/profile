// Filter functionality for assignments
document.addEventListener('DOMContentLoaded', function() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const assignmentCards = document.querySelectorAll('.assignment-card');

  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      const filter = this.getAttribute('data-filter');

      // Update active button
      filterButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');

      // Filter cards
      assignmentCards.forEach(card => {
        const category = card.getAttribute('data-category');

        if (filter === 'all' || category === filter) {
          card.style.display = 'block';
          // Trigger animation
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 10);
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // Smooth scroll for navigation links
  const navLinks = document.querySelectorAll('.nav-links a');
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      // Remove active class from all links
      navLinks.forEach(l => l.classList.remove('active'));
      // Add active class to clicked link
      this.classList.add('active');
    });
  });

  // Add hover effect to cards
  assignmentCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transition = 'all 0.3s ease';
    });
  });

  // Search functionality (bonus feature)
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', function() {
      const searchTerm = this.value.toLowerCase();

      assignmentCards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        const description = card.querySelector('p').textContent.toLowerCase();

        if (title.includes(searchTerm) || description.includes(searchTerm)) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  }

  // Category statistics
  function updateStats() {
    const jsCount = document.querySelectorAll('[data-category="javascript"]').length;
    const htmlCount = document.querySelectorAll('[data-category="html"]').length;
    const docsCount = document.querySelectorAll('[data-category="documents"]').length;

    console.log(`📊 Assignment Stats:`);
    console.log(`   JavaScript: ${jsCount}`);
    console.log(`   HTML: ${htmlCount}`);
    console.log(`   Documents: ${docsCount}`);
    console.log(`   Total: ${jsCount + htmlCount + docsCount}`);
  }

  updateStats();
});

// Highlight code blocks if needed
function highlightCode() {
  const codeBlocks = document.querySelectorAll('code');
  codeBlocks.forEach(block => {
    block.style.backgroundColor = '#f4f4f4';
    block.style.padding = '2px 6px';
    block.style.borderRadius = '3px';
    block.style.fontFamily = 'Courier New, monospace';
  });
}

// Initialize
document.addEventListener('DOMContentLoaded', highlightCode);
