import { useState } from 'react';
import './css/Contact.css';

function Contact() {
  const [activePreview, setActivePreview] = useState(null);

  const previews = {
    blog: '/images/preview-blog.png',
    github: '/images/preview-github.png',
    linkedin: '/images/preview-linkedin.png',
  }

  return (
    <section id="contact" className="contact">
      <h2>Contact</h2>
      <div className="contact-content">
        <div className="contact-icons">
          <a 
          href="https://blog.naver.com/lovedtm_905"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-circle blog"
          onMouseEnter={() => setActivePreview('blog')}
          onMouseLeave={() => setActivePreview(null)}
          >
            <span className="blog-initial">B</span>
          </a>

          <a
          href="https://github.com/minyoung0303"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-circle github"
          onMouseEnter={() => setActivePreview('github')}
          onMouseLeave={() => setActivePreview(null)}
          >
            <i className="fa-brands fa-github"></i>
          </a>

          <a
          href="https://www.linkedin.com/in/minyoung-lee-57838b290/"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-circle linkedin"
          onMouseEnter={() => setActivePreview('linkedin')}
          onMouseLeave={() => setActivePreview(null)}
          >
            <i className="fa-brands fa-linkedin-in"></i>
          </a>

          <a
          href="mailto:choyeon03@gmail.com"
          className="icon-circle email"
          >
            <i className="fa-solid fa-envelope"></i>
          </a>
        </div>
        <div className="spacer"></div>
      <div className="contact-preview">
        {activePreview ? (
          <img
          src={previews[activePreview]}
          alt={`${activePreview} preview`}
          className="fade-in"
          />
        ) : (
          <p className="fade-out"> 아이콘에 마우스를 올리시면 예시 화면이 보여집니다. </p>
        )}
      </div>
      </div>

    </section>
  )
}

export default Contact;
