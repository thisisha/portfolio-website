import React, { useEffect, useRef } from 'react';
import './Skills.css';

interface Skill {
  name: string;
  level: number;
  category: string;
  icon: string;
}

const Skills: React.FC = () => {
  const skillsRef = useRef<HTMLElement>(null);

  const skills: Skill[] = [
    { name: 'React', level: 90, category: 'Frontend', icon: '⚛️' },
    { name: 'TypeScript', level: 85, category: 'Frontend', icon: '📘' },
    { name: 'JavaScript', level: 90, category: 'Frontend', icon: '🟨' },
    { name: 'HTML/CSS', level: 95, category: 'Frontend', icon: '🎨' },
    { name: 'Node.js', level: 80, category: 'Backend', icon: '🟢' },
    { name: 'Python', level: 75, category: 'Backend', icon: '🐍' },
    { name: 'SQL', level: 70, category: 'Database', icon: '🗄️' },
    { name: 'Git', level: 85, category: 'Tools', icon: '📚' },
  ];

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

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const categories = ['Frontend', 'Backend', 'Database', 'Tools'];

  return (
    <section id="skills" ref={skillsRef} className="skills fade-in">
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>
        <p className="section-subtitle">
          다양한 기술 스택을 활용하여 혁신적인 솔루션을 만들어냅니다
        </p>

        <div className="skills-content">
          {categories.map((category) => (
            <div key={category} className="skill-category">
              <h3 className="category-title">{category}</h3>
              <div className="skills-grid">
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill) => (
                    <div key={skill.name} className="skill-item">
                      <div className="skill-header">
                        <span className="skill-icon">{skill.icon}</span>
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-level">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <div 
                          className="skill-progress" 
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>

        <div className="skills-summary">
          <div className="summary-card">
            <h4>주요 강점</h4>
            <ul>
              <li>반응형 웹 디자인</li>
              <li>성능 최적화</li>
              <li>사용자 경험 설계</li>
              <li>코드 품질 관리</li>
            </ul>
          </div>
          <div className="summary-card">
            <h4>개발 도구</h4>
            <ul>
              <li>VS Code, WebStorm</li>
              <li>Chrome DevTools</li>
              <li>Postman, Insomnia</li>
              <li>Docker, AWS</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
