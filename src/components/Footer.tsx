import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Portfolio</h3>
            <p>
              창의적인 웹 솔루션을 만들어내는 개발자입니다.
              사용자 경험을 최우선으로 생각하며, 최신 기술을 활용하여 
              혁신적인 웹 애플리케이션을 개발합니다.
            </p>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">홈</a></li>
              <li><a href="#about">소개</a></li>
              <li><a href="#skills">기술</a></li>
              <li><a href="#projects">프로젝트</a></li>
              <li><a href="#contact">연락처</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contact Info</h4>
            <ul>
              <li>📧 your.email@example.com</li>
              <li>📱 +82 10-1234-5678</li>
              <li>📍 서울, 대한민국</li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Follow Me</h4>
            <div className="social-links">
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="social-link">
                GitHub
              </a>
              <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="social-link">
                LinkedIn
              </a>
              <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="social-link">
                Twitter
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-line"></div>
          <p>&copy; {currentYear} Portfolio. All rights reserved.</p>
          <p>Made with ❤️ by Your Name</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
