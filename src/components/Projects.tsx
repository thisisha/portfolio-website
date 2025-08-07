import React, { useEffect, useRef, useState } from 'react';
import './Projects.css';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  category: string;
}

const Projects: React.FC = () => {
  const projectsRef = useRef<HTMLElement>(null);
  const [activeFilter, setActiveFilter] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);

  const projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'React와 Node.js를 활용한 풀스택 이커머스 플랫폼. 사용자 인증, 상품 관리, 결제 시스템을 포함한 완전한 온라인 쇼핑몰입니다.',
      image: '🛒',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveUrl: '#',
      githubUrl: '#',
      category: 'Fullstack'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: '드래그 앤 드롭 기능을 갖춘 현대적인 태스크 관리 애플리케이션. 팀 협업과 프로젝트 관리를 위한 직관적인 인터페이스를 제공합니다.',
      image: '📋',
      technologies: ['React', 'TypeScript', 'Firebase', 'DnD Kit'],
      liveUrl: '#',
      githubUrl: '#',
      category: 'Frontend'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: '실시간 날씨 정보를 제공하는 대시보드. OpenWeatherMap API를 활용하여 전 세계 도시의 날씨 정보를 시각적으로 표현합니다.',
      image: '🌤️',
      technologies: ['JavaScript', 'CSS3', 'HTML5', 'API'],
      liveUrl: '#',
      githubUrl: '#',
      category: 'Frontend'
    },
    {
      id: 4,
      title: 'Blog API',
      description: 'RESTful API를 기반으로 한 블로그 시스템. 사용자 인증, 게시글 CRUD, 댓글 시스템을 포함한 완전한 백엔드 솔루션입니다.',
      image: '📝',
      technologies: ['Node.js', 'Express', 'PostgreSQL', 'JWT'],
      liveUrl: '#',
      githubUrl: '#',
      category: 'Backend'
    },
    {
      id: 5,
      title: 'Portfolio Website',
      description: '반응형 디자인을 적용한 개인 포트폴리오 웹사이트. 모던한 UI/UX와 부드러운 애니메이션을 통해 개성을 표현합니다.',
      image: '🎨',
      technologies: ['React', 'TypeScript', 'CSS3', 'Framer Motion'],
      liveUrl: '#',
      githubUrl: '#',
      category: 'Frontend'
    },
    {
      id: 6,
      title: 'Chat Application',
      description: '실시간 채팅 애플리케이션. Socket.io를 활용한 실시간 통신과 사용자 상태 관리를 구현했습니다.',
      image: '💬',
      technologies: ['React', 'Socket.io', 'Node.js', 'MongoDB'],
      liveUrl: '#',
      githubUrl: '#',
      category: 'Fullstack'
    }
  ];

  const categories = ['All', 'Frontend', 'Backend', 'Fullstack'];

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

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (activeFilter === 'All') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === activeFilter));
    }
  }, [activeFilter, projects]);

  return (
    <section id="projects" ref={projectsRef} className="projects fade-in">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">
          다양한 기술을 활용하여 만든 프로젝트들을 소개합니다
        </p>

        <div className="projects-filter">
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
              onClick={() => setActiveFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <span className="project-emoji">{project.image}</span>
                <div className="project-overlay">
                  <div className="project-links">
                    {project.liveUrl && (
                      <a href={project.liveUrl} className="project-link" target="_blank" rel="noopener noreferrer">
                        Live Demo
                      </a>
                    )}
                    {project.githubUrl && (
                      <a href={project.githubUrl} className="project-link" target="_blank" rel="noopener noreferrer">
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
