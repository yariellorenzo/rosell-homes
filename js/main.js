/* ─────────────────────────────────────────────────
   ROSELL HOMES — Main JavaScript
   ───────────────────────────────────────────────── */

'use strict';

// ─── DATA ───────────────────────────────────────────

const LISTINGS = [
  {
    id: 1,
    status: 'sale',
    price: '$3,495,000',
    priceRaw: 3495000,
    address: '147 Commonwealth Ave, Unit 4A',
    neighborhood: 'Back Bay',
    beds: 4,
    baths: 3.5,
    sqft: '3,200',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80&auto=format',
    description: 'A masterfully renovated parlor-floor condominium in the heart of Back Bay. This stunning 4-bedroom residence features soaring 11-foot ceilings, original crown moldings, a chef\'s kitchen with Calacatta marble countertops, and direct garden access. Walking distance to Newbury Street and the Public Garden.',
    features: ['Private Terrace', 'Parking Included', 'In-Unit Laundry', 'Central A/C', 'Fireplace'],
  },
  {
    id: 2,
    status: 'sale',
    price: '$1,895,000',
    priceRaw: 1895000,
    address: '22 Pinckney Street',
    neighborhood: 'Beacon Hill',
    beds: 3,
    baths: 2,
    sqft: '1,850',
    image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=80&auto=format',
    description: 'A quintessential Beacon Hill townhouse on one of the most coveted gas-lit streets in Boston. This 3-bedroom Federal-style home retains its historic character while offering a thoroughly modern interior. The private courtyard garden is perfect for alfresco dining in every season.',
    features: ['Private Garden', 'Original Hardwoods', 'Wine Cellar', 'Custom Millwork'],
  },
  {
    id: 3,
    status: 'sold',
    price: '$5,200,000',
    priceRaw: 5200000,
    address: '1 Dalton Street, Unit 3802',
    neighborhood: 'Back Bay / Fenway',
    beds: 3,
    baths: 3,
    sqft: '2,750',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80&auto=format',
    description: 'A sky-high residence at the iconic Four Seasons Private Residences. Floor-to-ceiling windows frame panoramic views from the Charles River to the Blue Hills. World-class amenities include a private pool, spa, and 24-hour concierge.',
    features: ['Full-Service Building', 'Panoramic Views', 'Hotel Services', 'Private Pool', '24hr Doorman'],
  },
  {
    id: 4,
    status: 'sale',
    price: '$2,150,000',
    priceRaw: 2150000,
    address: '85 W Newton Street',
    neighborhood: 'South End',
    beds: 4,
    baths: 2.5,
    sqft: '2,400',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80&auto=format',
    description: 'An architecturally significant Victorian bowfront townhouse fully reimagined by a renowned Boston architect. The open-plan living spaces blend period detail with contemporary sensibility. Steps from SoWa, Formaggio Kitchen, and the best of the South End dining scene.',
    features: ['Chef\'s Kitchen', 'Roof Deck', 'Private Parking', 'Media Room'],
  },
  {
    id: 5,
    status: 'lease',
    price: '$14,500/mo',
    priceRaw: 14500,
    address: '100 Lovejoy Wharf, Unit 5C',
    neighborhood: 'Charlestown',
    beds: 2,
    baths: 2,
    sqft: '1,600',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80&auto=format',
    description: 'A stunning corner unit in one of Boston\'s most sought-after waterfront developments. This 2-bedroom residence offers unobstructed views of Boston Harbor and the North End. The building features concierge service, a fitness center, and direct waterfront access.',
    features: ['Harbor Views', 'Concierge', 'Waterfront Access', 'Valet Parking'],
  },
  {
    id: 6,
    status: 'sold',
    price: '$7,800,000',
    priceRaw: 7800000,
    address: '776 Boylston Street, PH',
    neighborhood: 'Back Bay',
    beds: 5,
    baths: 4.5,
    sqft: '4,800',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80&auto=format',
    description: 'An extraordinarily rare full-floor penthouse occupying the entire top floor of a landmark Back Bay building. Seven bedrooms, six baths, and a wraparound terrace with 360-degree views of Boston. Extensively renovated with every luxury finish imaginable.',
    features: ['Full-Floor Plan', 'Wraparound Terrace', '360° Views', 'Smart Home', 'Wine Room'],
  },
];

const TESTIMONIALS = [
  {
    quote: "Rose's market knowledge is truly unparalleled. She found us an off-market property in Back Bay before it ever hit the MLS — exactly what we needed, at exactly the right price. I cannot imagine working with anyone else.",
    name: "Jonathan & Claire Whitfield",
    role: "Buyers — Back Bay, Boston",
    stars: 5,
  },
  {
    quote: "We had our South End townhouse listed for four months with another agent with no results. Rose took over, re-priced it, staged it beautifully, and had a full-price offer in 11 days. Her instincts are extraordinary.",
    name: "Dr. Margaret Osei",
    role: "Seller — South End, Boston",
    stars: 5,
  },
  {
    quote: "As a relocating executive, I had 72 hours to find a home. Rose orchestrated private showings, connected me with her trusted mortgage advisor, and secured a stunning Beacon Hill property in an extremely competitive offer situation. Truly remarkable.",
    name: "Thomas L. Hargrove",
    role: "Executive Relocation — Beacon Hill",
    stars: 5,
  },
  {
    quote: "Rose managed the sale of my late mother's home with an extraordinary combination of professionalism and empathy. She navigated a complex estate situation flawlessly and achieved a sale price 12% above our initial expectations.",
    name: "Sarah & Michael Brennan",
    role: "Estate Sale — Brookline, MA",
    stars: 5,
  },
];

const CHART_DATA = {
  'Back Bay':    [62, 71, 58, 80, 75, 90, 95, 88, 102, 98, 110, 115],
  'Beacon Hill': [40, 45, 38, 52, 55, 60, 58, 65, 70, 72, 75, 80],
  'South End':   [55, 60, 52, 68, 72, 78, 82, 80, 88, 90, 95, 100],
  'Seaport':     [80, 85, 78, 95, 98, 105, 112, 108, 118, 115, 125, 130],
};

const CHART_LABELS = ['Q1\'25', '', '', 'Q2\'25', '', '', 'Q3\'25', '', '', 'Q4\'25', '', 'Q1\'26'];

// ─── NAV ────────────────────────────────────────────

const nav = document.getElementById('nav');
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const menuClose = document.getElementById('menuClose');
const mobileLinks = document.querySelectorAll('.mobile-link');

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
});

hamburger.addEventListener('click', () => mobileMenu.classList.add('open'));
menuClose.addEventListener('click', () => mobileMenu.classList.remove('open'));
mobileLinks.forEach(link => {
  link.addEventListener('click', () => mobileMenu.classList.remove('open'));
});

// ─── SCROLL REVEAL ──────────────────────────────────

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const delay = el.dataset.delay || 0;
      setTimeout(() => el.classList.add('revealed'), delay * 100);
      revealObserver.unobserve(el);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach((el, i) => {
  // Stagger children in the same parent
  const siblings = el.parentElement.querySelectorAll('.reveal, .reveal-left, .reveal-right');
  let idx = Array.from(siblings).indexOf(el);
  el.dataset.delay = idx;
  revealObserver.observe(el);
});

// ─── COUNTER ANIMATION ──────────────────────────────

function animateCounter(el) {
  const target = parseFloat(el.dataset.target);
  const isDecimal = el.dataset.decimal === '1';
  const duration = 1800;
  const start = performance.now();

  function tick(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
    const value = isDecimal ? (eased * target).toFixed(1) : Math.round(eased * target);
    el.textContent = value;
    if (progress < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('[data-target]').forEach(el => animateCounter(el));
      statsObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

const heroStats = document.querySelector('.hero__stats');
if (heroStats) statsObserver.observe(heroStats);

// ─── LISTINGS ───────────────────────────────────────

const listingsGrid = document.getElementById('listingsGrid');
let activeFilter = 'all';
let savedListings = new Set();

function renderListings(filter) {
  const filtered = filter === 'all' ? LISTINGS : LISTINGS.filter(l => l.status === filter);
  listingsGrid.innerHTML = '';

  filtered.forEach((listing, i) => {
    const card = document.createElement('div');
    card.className = 'listing-card';
    card.dataset.id = listing.id;
    card.dataset.status = listing.status;

    const badgeClass = { sale: 'badge--sale', sold: 'badge--sold', lease: 'badge--lease' }[listing.status];
    const badgeText = { sale: 'For Sale', sold: 'Sold', lease: 'For Lease' }[listing.status];

    card.innerHTML = `
      <div class="listing-card__image">
        <img src="${listing.image}" alt="${listing.address}" loading="lazy" />
        <span class="listing-card__badge ${badgeClass}">${badgeText}</span>
        <button class="listing-card__save ${savedListings.has(listing.id) ? 'saved' : ''}" data-id="${listing.id}" aria-label="Save listing">
          ${savedListings.has(listing.id) ? '♥' : '♡'}
        </button>
      </div>
      <div class="listing-card__body">
        <div class="listing-card__price">${listing.price}</div>
        <div class="listing-card__address">${listing.address} · ${listing.neighborhood}</div>
        <div class="listing-card__divider"></div>
        <div class="listing-card__specs">
          <span class="listing-card__spec">
            <span class="listing-card__spec-icon">⌂</span>${listing.beds} Beds
          </span>
          <span class="listing-card__spec">
            <span class="listing-card__spec-icon">◎</span>${listing.baths} Baths
          </span>
          <span class="listing-card__spec">
            <span class="listing-card__spec-icon">◫</span>${listing.sqft} sqft
          </span>
        </div>
      </div>
    `;

    listingsGrid.appendChild(card);

    // Staggered entrance
    setTimeout(() => card.classList.add('visible'), 60 * i + 100);

    // Open modal on card click
    card.addEventListener('click', (e) => {
      if (!e.target.closest('.listing-card__save')) {
        openModal(listing);
      }
    });

    // Save toggle
    card.querySelector('.listing-card__save').addEventListener('click', (e) => {
      e.stopPropagation();
      const btn = e.currentTarget;
      const id = parseInt(btn.dataset.id);
      if (savedListings.has(id)) {
        savedListings.delete(id);
        btn.classList.remove('saved');
        btn.textContent = '♡';
      } else {
        savedListings.add(id);
        btn.classList.add('saved');
        btn.textContent = '♥';
      }
    });
  });
}

// Filter buttons
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderListings(btn.dataset.filter);
  });
});

renderListings('all');

// ─── MODAL ──────────────────────────────────────────

const modalOverlay = document.getElementById('modalOverlay');
const modalClose = document.getElementById('modalClose');
const modalContent = document.getElementById('modalContent');

function openModal(listing) {
  modalContent.innerHTML = `
    <div class="modal__image">
      <img src="${listing.image}" alt="${listing.address}" />
    </div>
    <div class="modal__body">
      <div class="modal__price">${listing.price}</div>
      <div class="modal__address">${listing.address} — ${listing.neighborhood}, Boston MA</div>
      <div class="modal__specs">
        <div class="modal__spec">
          <span class="modal__spec-value">${listing.beds}</span>
          <span class="modal__spec-label">Bedrooms</span>
        </div>
        <div class="modal__spec">
          <span class="modal__spec-value">${listing.baths}</span>
          <span class="modal__spec-label">Bathrooms</span>
        </div>
        <div class="modal__spec">
          <span class="modal__spec-value">${listing.sqft}</span>
          <span class="modal__spec-label">Sq. Ft.</span>
        </div>
        <div class="modal__spec">
          <span class="modal__spec-value">${listing.neighborhood}</span>
          <span class="modal__spec-label">Neighborhood</span>
        </div>
      </div>
      <p class="modal__desc">${listing.description}</p>
      <div style="display:flex;gap:.5rem;flex-wrap:wrap;margin-bottom:1.5rem;">
        ${listing.features.map(f => `<span style="padding:.3rem .8rem;border:1px solid rgba(201,168,76,.3);border-radius:100px;font-size:.7rem;color:var(--gold);letter-spacing:.05em;">${f}</span>`).join('')}
      </div>
      <div class="modal__cta">
        <a href="#contact" class="btn btn--gold" onclick="closeModal()">Request Showing</a>
        <a href="#contact" class="btn btn--outline" onclick="closeModal()">Get Pricing Info</a>
      </div>
    </div>
  `;
  modalOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modalOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', (e) => {
  if (e.target === modalOverlay) closeModal();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

// ─── CHART ──────────────────────────────────────────

let activeNeighborhood = 'Back Bay';
let chartAnimated = false;

function buildChart(neighborhood) {
  const data = CHART_DATA[neighborhood];
  const max = Math.max(...Object.values(CHART_DATA).flat());

  const barsEl = document.getElementById('chartBars');
  const labelsEl = document.getElementById('chartLabels');

  if (!barsEl || !labelsEl) return;

  barsEl.innerHTML = '';
  labelsEl.innerHTML = '';

  data.forEach((val, i) => {
    const pct = (val / max) * 100;
    const wrap = document.createElement('div');
    wrap.className = 'chart-bar-wrap';

    const bar = document.createElement('div');
    bar.className = 'chart-bar' + (i === data.length - 1 ? ' active-bar' : '');
    bar.dataset.val = `$${val}M`;
    bar.style.height = chartAnimated ? `${pct}%` : '0%';

    wrap.appendChild(bar);
    barsEl.appendChild(wrap);

    const label = document.createElement('span');
    label.className = 'chart-label';
    label.textContent = CHART_LABELS[i];
    labelsEl.appendChild(label);
  });

  if (chartAnimated) {
    // Already animated, set immediately
  } else {
    requestAnimationFrame(() => {
      document.querySelectorAll('.chart-bar').forEach((bar, i) => {
        const pct = (data[i] / max) * 100;
        setTimeout(() => { bar.style.height = `${pct}%`; }, i * 60);
      });
    });
  }
}

// Neighborhood filter tabs
document.querySelectorAll('.nbhd-tag').forEach(tag => {
  tag.addEventListener('click', () => {
    document.querySelectorAll('.nbhd-tag').forEach(t => t.classList.remove('active'));
    tag.classList.add('active');
    activeNeighborhood = tag.textContent;
    chartAnimated = true;
    buildChart(activeNeighborhood);
  });
});

const chartObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !chartAnimated) {
      chartAnimated = false;
      buildChart(activeNeighborhood);
      chartAnimated = true;
      chartObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

const chartCard = document.querySelector('.chart-card');
if (chartCard) {
  buildChart(activeNeighborhood); // build with zero heights initially
  chartObserver.observe(chartCard);
}

// ─── TESTIMONIALS ───────────────────────────────────

const track = document.getElementById('testimonialsTrack');
const dotsContainer = document.getElementById('testiDots');
const prevBtn = document.getElementById('testiPrev');
const nextBtn = document.getElementById('testiNext');
let currentSlide = 0;

TESTIMONIALS.forEach((t, i) => {
  const card = document.createElement('div');
  card.className = 'testi-card';
  card.innerHTML = `
    <p class="testi-card__quote">${t.quote}</p>
    <div class="testi-card__author">
      <span class="testi-card__name">${t.name}</span>
      <span class="testi-card__role">${t.role}</span>
      <span class="testi-card__stars">${'★'.repeat(t.stars)}</span>
    </div>
  `;
  track.appendChild(card);

  const dot = document.createElement('div');
  dot.className = 'testi-dot' + (i === 0 ? ' active' : '');
  dot.addEventListener('click', () => goToSlide(i));
  dotsContainer.appendChild(dot);
});

function goToSlide(index) {
  const cards = track.querySelectorAll('.testi-card');
  currentSlide = (index + cards.length) % cards.length;
  track.style.transform = `translateX(${-currentSlide * 100}%)`;
  document.querySelectorAll('.testi-dot').forEach((d, i) => {
    d.classList.toggle('active', i === currentSlide);
  });
}

prevBtn.addEventListener('click', () => goToSlide(currentSlide - 1));
nextBtn.addEventListener('click', () => goToSlide(currentSlide + 1));

// Auto-advance testimonials
let testiInterval = setInterval(() => goToSlide(currentSlide + 1), 6000);
track.addEventListener('mouseenter', () => clearInterval(testiInterval));
track.addEventListener('mouseleave', () => {
  testiInterval = setInterval(() => goToSlide(currentSlide + 1), 6000);
});

// Touch/swipe support for testimonials
let touchStartX = 0;
track.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
track.addEventListener('touchend', e => {
  const diff = touchStartX - e.changedTouches[0].clientX;
  if (Math.abs(diff) > 50) goToSlide(diff > 0 ? currentSlide + 1 : currentSlide - 1);
});

// ─── CONTACT FORM ───────────────────────────────────

const form = document.getElementById('contactForm');
const submitBtn = document.getElementById('submitBtn');
const submitText = document.getElementById('submitText');
const submitLoading = document.getElementById('submitLoading');
const formSuccess = document.getElementById('formSuccess');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Basic validation
  const required = form.querySelectorAll('[required]');
  let valid = true;
  required.forEach(field => {
    field.style.borderColor = '';
    if (!field.value.trim()) {
      field.style.borderColor = 'rgba(255,100,100,0.6)';
      valid = false;
    }
  });
  if (!valid) return;

  // Simulate sending
  submitBtn.disabled = true;
  submitText.style.display = 'none';
  submitLoading.style.display = '';

  setTimeout(() => {
    submitBtn.disabled = false;
    submitText.style.display = '';
    submitLoading.style.display = 'none';
    formSuccess.classList.add('visible');
    form.reset();
    setTimeout(() => formSuccess.classList.remove('visible'), 5000);
  }, 1500);
});

// ─── SMOOTH SCROLL OFFSET ───────────────────────────

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: offset, behavior: 'smooth' });
    }
  });
});

// ─── PARALLAX HERO ──────────────────────────────────

const heroBgImage = document.querySelector('.hero__bg-image');
if (heroBgImage) {
  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    if (scrolled < window.innerHeight) {
      heroBgImage.style.transform = `scale(1.05) translateY(${scrolled * 0.3}px)`;
    }
  }, { passive: true });
}

// ─── INIT ────────────────────────────────────────────

// Trigger initial nav state
nav.classList.toggle('scrolled', window.scrollY > 40);
