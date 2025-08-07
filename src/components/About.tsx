import React, { useEffect, useRef } from 'react';
import './About.css';

const About: React.FC = () => {
  const aboutRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={aboutRef} className="about fade-in">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">
          저는 사용자 중심의 웹 개발을 추구하는 개발자입니다
        </p>
        
        <div className="about-content">
          <div className="about-text">
            <div className="about-card">
              <h3>개발 철학</h3>
              <p>
                사용자 경험을 최우선으로 생각하며, 깔끔하고 효율적인 코드를 작성하는 것을 
                중요하게 생각합니다. 새로운 기술을 배우는 것을 즐기며, 
                지속적으로 성장하는 개발자가 되기 위해 노력하고 있습니다.
              </p>
            </div>
            
            <div className="about-card">
              <h3>경력 & 교육</h3>
              <p>
                웹 개발 분야에서 다양한 프로젝트를 진행해왔으며, 
                프론트엔드와 백엔드 개발 경험을 보유하고 있습니다. 
                최신 웹 기술 트렌드를 파악하고 적용하는 것을 좋아합니다.
              </p>
            </div>
            
            <div className="about-card">
              <h3>관심 분야</h3>
              <p>
                React, TypeScript, Node.js 등 현대적인 웹 기술에 깊은 관심을 가지고 있으며,
                사용자 인터페이스 디자인과 웹 성능 최적화에도 관심이 많습니다.
                오픈소스 프로젝트에 기여하는 것도 즐겨합니다.
              </p>
            </div>
          </div>
          
          <div className="about-stats">
            <div className="stat-item">
              <div className="stat-number">3+</div>
              <div className="stat-label">년 개발 경험</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">20+</div>
              <div className="stat-label">완료 프로젝트</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">5+</div>
              <div className="stat-label">기술 스택</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100%</div>
              <div className="stat-label">고객 만족도</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
