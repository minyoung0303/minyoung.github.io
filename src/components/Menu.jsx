import { useEffect, useState } from 'react';
import './css/Menu.css';

const Menu = ({ sections, activeSection, onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = (id) => {
    setOpen(false);
    onNavigate(id);
  };

  return (
    <header className={`menu ${scrolled ? 'menu--scrolled' : ''}`}>
      <div className="menu-inner">
        <button
          className="menu-logo"
          onClick={() => handleClick('home')}
          aria-label="Back to top"
        >
          <span className="menu-logo-mark">ML</span>
          <span className="menu-logo-text">MinYoung Lee</span>
        </button>

        <nav className={`menu-nav ${open ? 'open' : ''}`}>
          <ul className="menu-list">
            {sections.map((item) => (
              <li key={item.id}>
                <button
                  className={`menu-item ${
                    item.id === activeSection ? 'active' : ''
                  }`}
                  onClick={() => handleClick(item.id)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <button
          className="menu-cta"
          onClick={() => handleClick('contact')}
        >
          Get in touch
        </button>

        <button
          className={`menu-burger ${open ? 'open' : ''}`}
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
};

export default Menu;
