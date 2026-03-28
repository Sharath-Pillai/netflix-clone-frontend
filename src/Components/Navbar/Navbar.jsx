import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__left">
        <Link to="/">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
            alt="Netflix logo"
          />
        </Link>
        <ul className="nav__links">
          <li><Link to="/" style={{color: 'white', textDecoration: 'none'}}>Home</Link></li>
          <li><Link to="/tvshows" style={{color: 'white', textDecoration: 'none'}}>TV Shows</Link></li>
          <li><Link to="/movies" style={{color: 'white', textDecoration: 'none'}}>Movies</Link></li>
          <li><Link to="/mylist" style={{color: 'white', textDecoration: 'none'}}>My List</Link></li>
        </ul>
      </div>
      <img
        className="avatar"
        src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
        alt="User avatar"
      />
    </nav>
  );
};

export default Navbar;