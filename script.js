/**
 * Jolie Van den Heuvel - Portfolio Interactions Script
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Toggle Logic (Wireframe 08)
  const mobileToggle = document.getElementById('mobileToggle');
  const mobileOverlay = document.getElementById('mobileOverlay');
  const mobileCloseBtn = document.getElementById('mobileCloseBtn');

  if (mobileToggle && mobileOverlay) {
    mobileToggle.addEventListener('click', () => {
      mobileOverlay.classList.add('open');
      document.body.style.overflow = 'hidden';
    });

    const closeMobileMenu = () => {
      mobileOverlay.classList.remove('open');
      document.body.style.overflow = '';
    };

    if (mobileCloseBtn) {
      mobileCloseBtn.addEventListener('click', closeMobileMenu);
    }

    const mobileLinks = mobileOverlay.querySelectorAll('.mobile-nav-link');
    mobileLinks.forEach(link => link.addEventListener('click', closeMobileMenu));
  }

  // 2. Active Nav Link Highlighter based on current page filename
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const allNavLinks = document.querySelectorAll('.nav-link, .mobile-nav-link, .sitemap-link');

  allNavLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
// ================================
// CURRENTLY CREATING TEXT
// ================================

const creatingTexts = [
  "CURRENTLY CREATING...",
  "CURRENTLY EXPERIMENTING...",
  "CURRENTLY DESIGNING...",
  "CURRENTLY MAKING IDEAS..."
];

const creatingLabel = document.querySelector(".footer-small-label");

let currentText = 0;

if (creatingLabel) {
  setInterval(() => {
    // Fade out
    creatingLabel.style.opacity = "0";

    setTimeout(() => {
      // Change text
      currentText = (currentText + 1) % creatingTexts.length;
      creatingLabel.textContent = creatingTexts[currentText];

      // Fade in
      creatingLabel.style.opacity = "1";
    }, 400);

  }, 3000);
}
  // 3. Work Filter Buttons Logic (Work Page)
  const filterBtns = document.querySelectorAll('.filter-btn');
  const workItems = document.querySelectorAll('.work-card');

  if (filterBtns.length > 0 && workItems.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');

        workItems.forEach(item => {
          const category = item.getAttribute('data-category');
          if (filter === 'all' || category === filter) {
            item.style.display = 'flex';
            setTimeout(() => {
              item.style.opacity = '1';
              item.style.transform = 'scale(1)';
            }, 50);
          } else {
            item.style.opacity = '0';
            item.style.transform = 'scale(0.95)';
            setTimeout(() => {
              item.style.display = 'none';
            }, 300);
          }
        });
      });
    });
  }

// ================================
// KYLIE / PROJECT MODAL
// ================================
const projectModal = document.getElementById('projectModal');
const projectModalClose = document.getElementById('projectModalClose');

window.openProjectModal = function (title, subtitle, imageSrc, desc) {
  if (!projectModal) {
    console.error('Project-modal niet gevonden.');
    return;
  }

  // Behoud de volledige, bestaande Kylie-case-study.
  // Andere projecten gebruiken de algemene projectheader.
  if (title !== 'Kylie Cosmetics') {
    const modalTitle = document.getElementById('modalTitle');
    const modalSubtitle = document.getElementById('modalSubtitle');
    const modalDesc = document.getElementById('modalDesc');
    const heroImage = projectModal.querySelector('.case-study-hero img');

    if (modalTitle) modalTitle.textContent = title;
    if (modalSubtitle) modalSubtitle.textContent = subtitle;
    if (modalDesc) modalDesc.textContent = desc;
    if (heroImage && imageSrc) heroImage.src = imageSrc;
  }

  // Voorkom dat een ander projectvenster open blijft staan.
  document.getElementById('energyDrinkModal')?.classList.remove('active');
  document.getElementById('gameBoxModal')?.classList.remove('active');

  projectModal.classList.add('active');
  projectModal.scrollTop = 0;
  document.body.style.overflow = 'hidden';
};

function closeProjectModal() {
  if (!projectModal) return;

  projectModal.classList.remove('active');
  document.body.style.overflow = '';
}

if (projectModal && projectModalClose) {
  projectModalClose.addEventListener('click', closeProjectModal);

  projectModal.addEventListener('click', function (event) {
    if (event.target === projectModal) {
      closeProjectModal();
    }
  });
}


// ================================
// ENERGY DRINK MODAL
// ================================
const energyDrinkModal = document.getElementById('energyDrinkModal');
const energyDrinkModalClose = document.getElementById('energyDrinkModalClose');

window.openEnergyDrinkModal = function () {
  if (!energyDrinkModal) return;

  projectModal?.classList.remove('active');
  gameBoxModal?.classList.remove('active');

  energyDrinkModal.classList.add('active');
  energyDrinkModal.scrollTop = 0;
  document.body.style.overflow = 'hidden';
};

function closeEnergyDrinkModal() {
  if (!energyDrinkModal) return;

  energyDrinkModal.classList.remove('active');
  document.body.style.overflow = '';
}

if (energyDrinkModal && energyDrinkModalClose) {
  energyDrinkModalClose.addEventListener('click', closeEnergyDrinkModal);

  energyDrinkModal.addEventListener('click', function (event) {
    if (event.target === energyDrinkModal) {
      closeEnergyDrinkModal();
    }
  });
}


// ================================
// GAME BOX MODAL
// ================================
const gameBoxModal = document.getElementById('gameBoxModal');
const gameBoxModalClose = document.getElementById('gameBoxModalClose');

window.openGameBoxModal = function () {
  if (!gameBoxModal) {
    console.error('Game Box-modal niet gevonden in work.html.');
    return;
  }

  projectModal?.classList.remove('active');
  energyDrinkModal?.classList.remove('active');

  gameBoxModal.classList.add('active');
  gameBoxModal.scrollTop = 0;
  document.body.style.overflow = 'hidden';
};

window.closeGameBoxModal = function () {
  if (!gameBoxModal) return;

  gameBoxModal.classList.remove('active');
  document.body.style.overflow = '';
};

if (gameBoxModal && gameBoxModalClose) {
  gameBoxModalClose.addEventListener('click', window.closeGameBoxModal);

  gameBoxModal.addEventListener('click', function (event) {
    if (event.target === gameBoxModal) {
      window.closeGameBoxModal();
    }
  });
}
// ================================
  // SCENT MEMORY LETTER MODAL
  // ================================
  const scentMemoryModal = document.getElementById('scentMemoryModal');
  const scentMemoryModalClose = document.getElementById('scentMemoryModalClose');

  window.openScentMemoryModal = function () {
    if (!scentMemoryModal) return;

    projectModal?.classList.remove('active');
    energyDrinkModal?.classList.remove('active');
    gameBoxModal?.classList.remove('active');
    luminaModal?.classList.remove('active');

    scentMemoryModal.classList.add('active');
    scentMemoryModal.scrollTop = 0;
    document.body.style.overflow = 'hidden';
  };

  function closeScentMemoryModal() {
    if (!scentMemoryModal) return;

    scentMemoryModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (scentMemoryModal && scentMemoryModalClose) {
    scentMemoryModalClose.addEventListener('click', closeScentMemoryModal);

    scentMemoryModal.addEventListener('click', function (event) {
      if (event.target === scentMemoryModal) {
        closeScentMemoryModal();
      }
    });
  }
  // 5. Contact Form Submission Simulation
  const contactForm = document.getElementById('contactForm');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const submitBtn = contactForm.querySelector('button[type="submit"]');

      if (submitBtn) {
        const originalText = submitBtn.innerHTML;

        submitBtn.innerHTML = 'Versturen... ✓';
        submitBtn.disabled = true;

        setTimeout(() => {
          alert('Bedankt voor je bericht! Jolie neemt zo snel mogelijk contact met je op.');
          contactForm.reset();
          submitBtn.innerHTML = originalText;
          submitBtn.disabled = false;
        }, 800);
      }
    });
  }
});
// ================================
  // LUMINA PARTY PARFUM MIX MODAL
  // ================================
  const luminaModal = document.getElementById('luminaModal');
  const luminaModalClose = document.getElementById('luminaModalClose');

  window.openLuminaModal = function () {
    if (!luminaModal) return;

    projectModal?.classList.remove('active');
    energyDrinkModal?.classList.remove('active');
    gameBoxModal?.classList.remove('active');

    luminaModal.classList.add('active');
    luminaModal.scrollTop = 0;
    document.body.style.overflow = 'hidden';
  };

  function closeLuminaModal() {
    if (!luminaModal) return;

    luminaModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (luminaModal && luminaModalClose) {
    luminaModalClose.addEventListener('click', closeLuminaModal);

    luminaModal.addEventListener('click', function (event) {
      if (event.target === luminaModal) {
        closeLuminaModal();
      }
    });
  }
