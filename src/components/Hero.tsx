import React, { useEffect, useRef } from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);

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

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" ref={heroRef} className="hero fade-in">
      <div className="hero-background">
        <div className="hero-particles"></div>
      </div>
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              안녕하세요, 저는
              <span className="highlight"> 개발자</span>입니다
            </h1>
            <p className="hero-subtitle">
              창의적인 웹 솔루션을 만들어내는 프론트엔드 개발자입니다.
              사용자 경험을 최우선으로 생각하며, 최신 기술을 활용하여 
              혁신적인 웹 애플리케이션을 개발합니다.
            </p>
            <div className="hero-buttons">
              <button 
                className="btn"
                onClick={() => scrollToSection('projects')}
              >
                프로젝트 보기
              </button>
              <button 
                className="btn btn-outline"
                onClick={() => scrollToSection('contact')}
              >
                연락하기
              </button>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-image">
              <div className="code-animation">
                <div className="code-line">
                  <span className="code-keyword">const</span>{" "}
                  <span className="code-variable">developer</span> = {"{"}
                </div>
                <div className="code-line">
                  <span className="code-property">name:</span>{" "}
                  <span className="code-string">"Your Name"</span>,
                </div>
                <div className="code-line">
                  <span className="code-property">skills:</span>{" "}
                  <span className="code-string">["React", "TypeScript"]</span>,
                </div>
                <div className="code-line">
                  <span className="code-property">passion:</span>{" "}
                  <span className="code-string">"Creating amazing web experiences"</span>
                </div>
                <div className="code-line">{"}"};</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="scroll-arrow"></div>
      </div>
    </section>
  );
};

export default Hero;
