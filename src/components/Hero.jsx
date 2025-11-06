import LiquidEther from './LiquidEther'

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, zIndex: 0 }}>
        <LiquidEther
          colors={['#667eea', '#764ba2', '#f093fb']}
          mouseForce={20}
          cursorSize={100}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
      </div>
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="greeting">안녕하세요,</span>
          <span className="name">김민수</span>
          <span className="title-text">Project Manager</span>
        </h1>
        <p className="hero-subtitle">
          <span
            className="hover-name"
            data-name="상황 탓은 누구나 하지만, 결정과 행동은 덜 흔한 일이라 저는 그 쪽을 해보려고요. 믿음보단 시도를 택합니다."
          >
            유리잔이 반쯤 차 있든, 반쯤 비어 있든 그건 중요하지 않다.<br />
            유리잔은 언제든 다시 채울 수 있다.
          </span>
          <br /><br />
          <span className="book-source">- <em>합리적 낙관주의자</em>, 수 바르마 -</span>
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">프로젝트 보기</a>
          <a href="#contact" className="btn btn-secondary">연락하기</a>
        </div>
      </div>
      <div className="hero-image">
        <div className="hero-image-placeholder">
          <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
            <circle cx="200" cy="200" r="150" fill="url(#gradient1)" opacity="0.3" />
            <circle cx="200" cy="200" r="100" fill="url(#gradient2)" opacity="0.5" />
            <defs>
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#667eea', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#764ba2', stopOpacity: 1 }} />
              </linearGradient>
              <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#f193fb', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#f5576c', stopOpacity: 1 }} />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </section>
  )
}

export default Hero

