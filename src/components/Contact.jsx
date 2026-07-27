import './css/Contact.css';

const socials = [
  {
    key: 'github',
    label: 'GitHub',
    handle: '@minyoung0303',
    href: 'https://github.com/minyoung0303',
    icon: 'fa-brands fa-github',
  },
  {
    key: 'linkedin',
    label: 'LinkedIn',
    handle: 'MinYoung Lee',
    href: 'https://www.linkedin.com/in/minyoung-lee-57838b290/',
    icon: 'fa-brands fa-linkedin-in',
  },
  {
    key: 'blog',
    label: 'Blog',
    handle: 'lovedtm_905',
    href: 'https://blog.naver.com/lovedtm_905',
    icon: 'fa-solid fa-pen-nib',
  },
];

function Contact({ onNavigate }) {
  return (
    <section id="contact" className="section contact">
      <div className="contact-bg" aria-hidden="true">
        <span className="contact-glow" />
      </div>

      <div className="section-inner contact-inner">
        <span className="section-kicker contact-kicker">Contact</span>
        <h2 className="contact-title">
          좋은 팀과 좋은 서비스를<br />
          <span>함께 만들고 싶습니다.</span>
        </h2>
        <p className="contact-lead">
          새로운 기회와 협업 제안을 언제든 환영합니다. 편하게 연락 주세요.
        </p>

        <a className="contact-email" href="mailto:choyeon03@gmail.com">
          <i className="fa-solid fa-envelope" aria-hidden="true"></i>
          choyeon03@gmail.com
        </a>

        <div className="contact-socials">
          {socials.map((s) => (
            <a
              key={s.key}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-social"
            >
              <span className="contact-social-icon">
                <i className={s.icon} aria-hidden="true"></i>
              </span>
              <span className="contact-social-text">
                <span className="contact-social-label">{s.label}</span>
                <span className="contact-social-handle">{s.handle}</span>
              </span>
            </a>
          ))}
        </div>

        <footer className="contact-footer">
          <span>© 2026 MinYoung Lee. All rights reserved.</span>
          <button className="contact-top" onClick={() => onNavigate('home')}>
            맨 위로 ↑
          </button>
        </footer>
      </div>
    </section>
  );
}

export default Contact;
