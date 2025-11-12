const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              프로젝트 매니저로서 다양한 이해관계자들과의 협업 속에서 요구사항을 조율하고, 빠르고 정확하게 실행해온 경험이 있습니다.
              단순히 문제를 "해결"하는 것보다, 문제의 본질을 정의하고, 핵심 원인을 찾아내어 전략적으로 접근하는 것에 집중합니다.
            </p>
            <p>
              다양한 팀과 함께 일하면서, 기술팀·비즈니스팀·고객 사이의 언어를 번역하고 연결하는 조율자 역할의 중요성을 절실히 느껴왔습니다.
              문제를 명확히 정의하고, 각자가 가진 전문성이 효과적으로 작동하도록 협업의 장을 설계하는 것이야말로 PM의 핵심 역량이라고 믿습니다.
            </p>
            <p>
              이 과정에서 더 나아가 다양한 프로젝트 경험 기반의 통찰력, 제품 중심의 사고방식을 바탕으로 빠르고 정확한 실행을 넘어서 방향성까지 제시할 수 있는 Problem Solver으로 성장하고자 합니다.
            </p>
            <div className="skills">
              <h3>주요 기술</h3>
              <div className="skill-tags">
                <span className="skill-tag">Python</span>
                <span className="skill-tag">SQL</span>
                <span className="skill-tag">API</span>
                <span className="skill-tag">AWS</span>
                <span className="skill-tag">K8S</span>
                <span className="skill-tag">Docker</span>
                <span className="skill-tag">VSCode</span>
                <span className="skill-tag">Notion</span>
                <span className="skill-tag">Slack</span>
                <span className="skill-tag">Excel</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

