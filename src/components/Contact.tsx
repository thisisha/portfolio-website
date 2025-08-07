import React, { useEffect, useRef, useState } from 'react';
import './Contact.css';

const Contact: React.FC = () => {
  const contactRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

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

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 여기에 폼 제출 로직을 추가할 수 있습니다
    console.log('Form submitted:', formData);
    alert('메시지가 성공적으로 전송되었습니다!');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" ref={contactRef} className="contact fade-in">
      <div className="container">
        <h2 className="section-title">Contact Me</h2>
        <p className="section-subtitle">
          프로젝트나 협업에 대해 이야기하고 싶으시다면 언제든 연락주세요
        </p>

        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-card">
              <div className="contact-icon">📧</div>
              <h3>Email</h3>
              <p>your.email@example.com</p>
              <a href="mailto:your.email@example.com" className="contact-link">
                메일 보내기
              </a>
            </div>

            <div className="contact-card">
              <div className="contact-icon">📱</div>
              <h3>Phone</h3>
              <p>+82 10-1234-5678</p>
              <a href="tel:+821012345678" className="contact-link">
                전화하기
              </a>
            </div>

            <div className="contact-card">
              <div className="contact-icon">📍</div>
              <h3>Location</h3>
              <p>서울, 대한민국</p>
              <span className="contact-link">원격 근무 가능</span>
            </div>

            <div className="contact-card">
              <div className="contact-icon">💼</div>
              <h3>Social</h3>
              <p>LinkedIn, GitHub</p>
              <div className="social-links">
                <a href="https://linkedin.com/in/yourprofile" className="social-link" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
                <a href="https://github.com/yourusername" className="social-link" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">이름</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="이름을 입력하세요"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">이메일</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="이메일을 입력하세요"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">제목</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  placeholder="제목을 입력하세요"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">메시지</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  placeholder="메시지를 입력하세요"
                ></textarea>
              </div>

              <button type="submit" className="btn submit-btn">
                메시지 보내기
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
