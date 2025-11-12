const Projects = () => {
  const projects = [
    {
      title: 'SKT A. 학습 데이터 구축',
      description: 'SKT 에이닷 LLM 모델의 Foundation Model 학습 데이터 구축하였습니다.',
      tech: ['LLM 학습데이터', '지식기반대화', '머신러닝'],
      imageClass: 'project-1',
      company: '셀렉트스타',
      image: `${import.meta.env.BASE_URL}skt-logo.png`
    },
    {
      title: '한화생명 AI 통합 플랫폼 구축',
      description: '보험설계사들을 위한 FP 상품상담서비스를 개발하고 RAG 파이프라인을 구축하였습니다.',
      tech: ['LLM', 'RAG', 'AKS'],
      imageClass: 'project-2',
      company: '올거나이즈 코리아'
    },
    {
      title: '현대제철 AI 활용 플랫폼 구축',
      description: '현대제철 내부 문서 데이터를 활용한 AI 활용 플랫폼을 구축하였습니다.',
      tech: ['MCP', 'Document Ingestion', 'LLM Agent'],
      imageClass: 'project-3',
      company: '올거나이즈 코리아'
    }
  ]

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className={`project-image ${project.image ? 'has-image' : ''}`}>
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="project-img"
                    onError={(e) => {
                      console.error('Image failed to load:', project.image);
                      e.target.style.display = 'none';
                      const fallback = e.target.parentElement.querySelector('.project-image-placeholder');
                      if (fallback) {
                        fallback.style.display = 'block';
                        e.target.parentElement.classList.remove('has-image');
                      }
                    }}
                    onLoad={() => {
                      console.log('Image loaded successfully:', project.image);
                    }}
                  />
                ) : (
                  <div className={`project-image-placeholder ${project.imageClass}`}></div>
                )}
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, i) => (
                    <span key={i}>{tech}</span>
                  ))}
                </div>
                <div className="project-company">
                  <span className="company-name">{project.company}</span>
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

