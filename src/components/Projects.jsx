const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: '모던한 디자인의 전자상거래 플랫폼입니다. 사용자 친화적인 인터페이스와 안전한 결제 시스템을 구현했습니다.',
      tech: ['React', 'Node.js', 'MongoDB'],
      imageClass: 'project-1'
    },
    {
      title: 'Task Management App',
      description: '팀 협업을 위한 태스크 관리 애플리케이션입니다. 실시간 업데이트와 직관적인 UI를 제공합니다.',
      tech: ['Vue.js', 'Firebase', 'CSS3'],
      imageClass: 'project-2'
    },
    {
      title: 'Weather Dashboard',
      description: '실시간 날씨 정보를 제공하는 대시보드입니다. 아름다운 데이터 시각화와 반응형 디자인을 적용했습니다.',
      tech: ['JavaScript', 'API Integration', 'Chart.js'],
      imageClass: 'project-3'
    }
  ]

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <div className={`project-image-placeholder ${project.imageClass}`}></div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, i) => (
                    <span key={i}>{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href="#" className="project-link">Live Demo</a>
                  <a href="#" className="project-link">GitHub</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

