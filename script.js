// Mobile Navigation Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Navbar scroll effect
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Smooth scroll for navigation links (excluding gooey nav links)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    // Gooey nav links are handled separately
    if (anchor.closest('.gooey-nav')) {
        return;
    }
    
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Contact form handling
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };
    
    // Here you would normally send the data to a server
    // For now, we'll just show an alert
    console.log('Form submitted:', formData);
    
    // Show success message
    alert('메시지가 성공적으로 전송되었습니다! 감사합니다.');
    
    // Reset form
    contactForm.reset();
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Observe about section
const aboutSection = document.querySelector('.about-content');
if (aboutSection) {
    aboutSection.style.opacity = '0';
    aboutSection.style.transform = 'translateY(30px)';
    aboutSection.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(aboutSection);
}

// Observe contact form
const contactFormSection = document.querySelector('.contact-form');
if (contactFormSection) {
    contactFormSection.style.opacity = '0';
    contactFormSection.style.transform = 'translateY(30px)';
    contactFormSection.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(contactFormSection);
}

// Note: Navigation active state is now handled by initGooeyNav()

// Gooey Nav Effect - React Bits Implementation
let activeIndex = 0;
let isScrolling = false; // 스크롤 플래그를 전역으로 이동
const animationTime = 600;
const particleCount = 15;
const particleDistances = [90, 10];
const particleR = 100;
const timeVariance = 300;
const colors = [1, 2, 3, 1, 2, 3, 1, 4];

const noise = (n = 1) => n / 2 - Math.random() * n;

const getXY = (distance, pointIndex, totalPoints) => {
    const angle = ((360 + noise(8)) / totalPoints) * pointIndex * (Math.PI / 180);
    return [distance * Math.cos(angle), distance * Math.sin(angle)];
};

const createParticle = (i, t, d, r) => {
    let rotate = noise(r / 10);
    return {
        start: getXY(d[0], particleCount - i, particleCount),
        end: getXY(d[1] + noise(7), particleCount - i, particleCount),
        time: t,
        scale: 1 + noise(0.2),
        color: colors[Math.floor(Math.random() * colors.length)],
        rotate: rotate > 0 ? (rotate + r / 20) * 10 : (rotate - r / 20) * 10
    };
};

const makeParticles = (element) => {
    const d = particleDistances;
    const r = particleR;
    const bubbleTime = animationTime * 2 + timeVariance;
    element.style.setProperty('--time', `${bubbleTime}ms`);

    for (let i = 0; i < particleCount; i++) {
        const t = animationTime * 2 + noise(timeVariance * 2);
        const p = createParticle(i, t, d, r);
        element.classList.remove('active');

        setTimeout(() => {
            const particle = document.createElement('span');
            const point = document.createElement('span');
            particle.classList.add('particle');
            particle.style.setProperty('--start-x', `${p.start[0]}px`);
            particle.style.setProperty('--start-y', `${p.start[1]}px`);
            particle.style.setProperty('--end-x', `${p.end[0]}px`);
            particle.style.setProperty('--end-y', `${p.end[1]}px`);
            particle.style.setProperty('--time', `${p.time}ms`);
            particle.style.setProperty('--scale', `${p.scale}`);
            particle.style.setProperty('--color', `var(--color-${p.color}, white)`);
            particle.style.setProperty('--rotate', `${p.rotate}deg`);

            point.classList.add('point');
            particle.appendChild(point);
            element.appendChild(particle);

            requestAnimationFrame(() => {
                element.classList.add('active');
            });

            setTimeout(() => {
                try {
                    element.removeChild(particle);
                } catch {
                    // Do nothing
                }
            }, t);
        }, 30);
    }
};

const updateEffectPosition = (element, containerRef, filterRef, textRef) => {
    if (!containerRef || !filterRef || !textRef) return;

    const containerRect = containerRef.getBoundingClientRect();
    const pos = element.getBoundingClientRect();

    const styles = {
        left: `${pos.x - containerRect.x}px`,
        top: `${pos.y - containerRect.y}px`,
        width: `${pos.width}px`,
        height: `${pos.height}px`
    };

    Object.assign(filterRef.style, styles);
    Object.assign(textRef.style, styles);
    textRef.innerText = element.innerText;
};

function initGooeyNav() {
    const containerRef = document.getElementById('gooeyNavContainer');
    const navRef = document.getElementById('navMenu');
    const filterRef = document.getElementById('gooeyFilter');
    const textRef = document.getElementById('gooeyText');
    const navItems = navRef.querySelectorAll('.nav-item');

    if (!containerRef || !navRef || !filterRef || !textRef) return;

    const handleClick = (e, index) => {
        e.preventDefault();
        e.stopPropagation();
        
        const liEl = navItems[index];
        if (!liEl) return;
        
        const link = liEl.querySelector('a');
        const href = link ? link.getAttribute('href') : null;
        
        // 스크롤 실행 (항상 실행) - 가장 먼저 실행
        if (href && href.startsWith('#')) {
            const targetId = href.substring(1);
            const target = document.getElementById(targetId) || document.querySelector(href);
            
            if (target) {
                // 스크롤 플래그 설정
                isScrolling = true;
                
                // 스크롤 위치 계산
                const rect = target.getBoundingClientRect();
                const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                const offsetTop = rect.top + scrollTop - 80;
                
                // 즉시 스크롤 실행
                window.scrollTo({
                    top: Math.max(0, offsetTop),
                    behavior: 'smooth'
                });
                
                // 스크롤 완료 후 플래그 해제
                setTimeout(() => {
                    isScrolling = false;
                }, 1000);
            }
        }
        
        // 이미 활성화된 경우 효과만 업데이트하지 않고 리턴
        if (activeIndex === index) {
            return;
        }

        // Update active state
        navItems.forEach((item, i) => {
            item.classList.toggle('active', i === index);
        });
        activeIndex = index;

        // Update effect position before animations
        updateEffectPosition(liEl, containerRef, filterRef, textRef);

        // Clear existing particles
        const particles = filterRef.querySelectorAll('.particle');
        particles.forEach(p => {
            try {
                filterRef.removeChild(p);
            } catch {}
        });

        // Reset and animate text
        if (textRef) {
            textRef.classList.remove('active');
            void textRef.offsetWidth; // Force reflow
            textRef.classList.add('active');
        }

        // Reset and animate filter
        if (filterRef) {
            filterRef.classList.remove('active');
            void filterRef.offsetWidth; // Force reflow
            filterRef.classList.add('active');
            makeParticles(filterRef);
        }
    };

    // Add click handlers
    navItems.forEach((item, index) => {
        const link = item.querySelector('a');
        if (!link) return;
        
        // 클릭 이벤트 리스너 추가
        link.addEventListener('click', (e) => {
            handleClick(e, index);
        }, { passive: false });
        
        // 키보드 이벤트 리스너 추가
        link.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleClick(e, index);
            }
        });
    });

    // Initialize active state
    const activeLi = navItems[activeIndex];
    if (activeLi) {
        activeLi.classList.add('active');
        // Use setTimeout to ensure DOM is ready
        setTimeout(() => {
            updateEffectPosition(activeLi, containerRef, filterRef, textRef);
            filterRef.classList.add('active');
            textRef.classList.add('active');
        }, 100);
    }

    // Handle resize
    const resizeObserver = new ResizeObserver(() => {
        const currentActiveLi = navItems[activeIndex];
        if (currentActiveLi) {
            updateEffectPosition(currentActiveLi, containerRef, filterRef, textRef);
        }
    });

    resizeObserver.observe(containerRef);

    // Update active index based on scroll (throttled)
    let scrollTimeout = null;
    
    const updateActiveOnScroll = () => {
        if (isScrolling) return; // 스크롤 중에는 업데이트하지 않음
        
        const sections = document.querySelectorAll('section[id]');
        const scrollY = window.pageYOffset;

        sections.forEach((section, index) => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                const navIndex = Array.from(navItems).findIndex(item => {
                    const href = item.querySelector('a').getAttribute('href');
                    return href === `#${sectionId}`;
                });

                if (navIndex !== -1 && navIndex !== activeIndex) {
                    // 클릭 이벤트를 발생시키지 않고 직접 상태만 업데이트
                    navItems.forEach((item, i) => {
                        item.classList.toggle('active', i === navIndex);
                    });
                    activeIndex = navIndex;
                    
                    const activeLi = navItems[activeIndex];
                    if (activeLi) {
                        updateEffectPosition(activeLi, containerRef, filterRef, textRef);
                        filterRef.classList.add('active');
                        textRef.classList.add('active');
                    }
                }
            }
        });
    };

    window.addEventListener('scroll', () => {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(updateActiveOnScroll, 100);
    });
}

// Initialize gooey nav on DOM load
document.addEventListener('DOMContentLoaded', () => {
    initGooeyNav();
});

