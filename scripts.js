// Mobile nav toggle
(function () {
  const nav = document.querySelector('.nav');
  const toggle = document.querySelector('.nav-toggle');
  if (!nav || !toggle) return;
  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });
  nav.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }));
})();

// Current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Lenis smooth scroll (respect reduced motion)
(function initLenis() {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced || typeof Lenis === 'undefined') return;
  const lenis = new Lenis({
    duration: 1.1,
    easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    smoothTouch: false,
  });
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
})();

// Scroll reveal using IntersectionObserver
(function revealOnScroll() {
  const elements = document.querySelectorAll('.reveal');
  if (!elements.length) return;
  const io = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  elements.forEach((el) => io.observe(el));
})();

// Slight tilt effect for cards
(function tiltEffect() {
  const tiltEls = document.querySelectorAll('[data-tilt]');
  if (!tiltEls.length) return;
  const maxTiltDeg = 6;
  const resetMs = 150;
  tiltEls.forEach((el) => {
    let rafId = 0;
    let rect = el.getBoundingClientRect();
    const updateRect = () => { rect = el.getBoundingClientRect(); };
    const onMove = (e) => {
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      const rx = (+py * maxTiltDeg).toFixed(2);
      const ry = (-px * maxTiltDeg).toFixed(2);
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        el.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg)`;
      });
    };
    const onLeave = () => {
      el.style.transition = `transform ${resetMs}ms ease`;
      el.style.transform = 'rotateX(0deg) rotateY(0deg)';
      setTimeout(() => { el.style.transition = ''; }, resetMs);
    };
    el.addEventListener('mouseenter', updateRect);
    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
    window.addEventListener('resize', updateRect);
  });
})();

// FAQ accordion functionality
(function initFAQ() {
  const faqQuestions = document.querySelectorAll('.faq-question');
  if (!faqQuestions.length) return;
  
  faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
      const isExpanded = question.getAttribute('aria-expanded') === 'true';
      const answer = question.nextElementSibling;
      
      // Close all other FAQ items
      faqQuestions.forEach(q => {
        if (q !== question) {
          q.setAttribute('aria-expanded', 'false');
          q.nextElementSibling.classList.remove('is-open');
        }
      });
      
      // Toggle current FAQ item
      question.setAttribute('aria-expanded', !isExpanded);
      answer.classList.toggle('is-open');
    });
  });
})();

// Carousel functionality
(function initCarousel() {
  const carousel = document.querySelector('.carousel');
  const track = document.querySelector('.carousel-track');
  const slides = document.querySelectorAll('.carousel-slide');
  const prevBtn = document.querySelector('.carousel-arrow--left');
  const nextBtn = document.querySelector('.carousel-arrow--right');
  
  if (!carousel || !track || !slides.length || !prevBtn || !nextBtn) return;
  
  let currentIndex = 0;
  let slideWidth = slides[0].offsetWidth + 22; // width + gap
  const totalSlides = slides.length;
  
  // Update carousel position
  function updateCarousel() {
    track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    updateArrowStates();
      updateActiveSlide(); // <--- dodano

  }
  
  // Update arrow states
  function updateArrowStates() {
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex >= totalSlides - getVisibleSlides();
    
    // Visual feedback for disabled state
    prevBtn.style.opacity = currentIndex === 0 ? '0.3' : '0.8';
    nextBtn.style.opacity = currentIndex >= totalSlides - getVisibleSlides() ? '0.3' : '0.8';
  }
  
  // Get number of visible slides based on screen size
  function getVisibleSlides() {
    if (window.innerWidth <= 720) return 1;
    if (window.innerWidth <= 1024) return 2;
    return 3;
  }
  
  // Next slide
  function nextSlide() {
    const visibleSlides = getVisibleSlides();
    if (currentIndex < totalSlides - visibleSlides) {
      currentIndex++;
      updateCarousel();
    }
  }
  
  // Previous slide
  function prevSlide() {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  }

  // Oznaci trenutnu karticu kao active
function updateActiveSlide() {
  const visibleSlides = getVisibleSlides();
  slides.forEach((slide, index) => {
    slide.classList.remove('active');
  });
  
  // Odredi središnju karticu
  const centerIndex = currentIndex + Math.floor(visibleSlides / 2);
  if (slides[centerIndex]) {
    slides[centerIndex].classList.add('active');
  }
}

  
  // Event listeners
  nextBtn.addEventListener('click', nextSlide);
  prevBtn.addEventListener('click', prevSlide);
  
  // Touch/swipe support
  let startX, moveX;
  let isDragging = false;
  
  track.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
    isDragging = true;
    track.style.transition = 'none';
  });
  
  track.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    moveX = e.touches[0].clientX;
    const diff = startX - moveX;
    track.style.transform = `translateX(-${currentIndex * slideWidth - diff}px)`;
  });
  
  track.addEventListener('touchend', () => {
    if (!isDragging) return;
    isDragging = false;
    track.style.transition = 'transform 0.5s ease';
    
    const diff = startX - moveX;
    if (Math.abs(diff) > 50) { // Minimum swipe distance
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    } else {
      updateCarousel(); // Return to current position
    }
  });
  
  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
      nextSlide();
    } else if (e.key === 'ArrowLeft') {
      prevSlide();
    }
  });

  // Scroll to Top functionality
(function initScrollToTop() {
  const scrollToTopBtn = document.querySelector('.scroll-to-top');
  if (!scrollToTopBtn) return;
  
  const scrollThreshold = 300; // Show button after scrolling 300px
  let lenisInstance = null;
  
  // Try to get Lenis instance if available
  function getLenisInstance() {
    if (typeof Lenis !== 'undefined' && window.lenis) {
      return window.lenis;
    }
    return null;
  }
  
  // Function to check scroll position and show/hide button
  function checkScrollPosition() {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    
    if (scrollY > scrollThreshold) {
      scrollToTopBtn.classList.add('visible');
    } else {
      scrollToTopBtn.classList.remove('visible');
    }
  }
  
  // Function to scroll to top
  function scrollToTop() {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    lenisInstance = getLenisInstance();
    
    if (prefersReduced || !lenisInstance) {
      // Fallback for reduced motion or no Lenis
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Use Lenis for smooth scrolling
      lenisInstance.scrollTo(0, { duration: 1.1 });
    }
  }
  
  // Event listeners
  scrollToTopBtn.addEventListener('click', scrollToTop);
  
  // Check scroll position on load and scroll
  window.addEventListener('load', checkScrollPosition);
  window.addEventListener('scroll', checkScrollPosition);
  
  // Also check when Lenis finishes scrolling (if available)
  if (typeof Lenis !== 'undefined') {
    // Wait a bit for Lenis to initialize
    setTimeout(() => {
      lenisInstance = getLenisInstance();
      if (lenisInstance) {
        lenisInstance.on('scroll', checkScrollPosition);
      }
    }, 100);
  }
})();

  
  // Handle window resize
  window.addEventListener('resize', () => {
    slideWidth = slides[0].offsetWidth + 22;
    updateCarousel();
  });
  
  // Initialize
  updateArrowStates();
})();

