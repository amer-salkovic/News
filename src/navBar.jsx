import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>Blog za Vesti</div>
      <ul style={styles.navLinks}>
        <li><Link to="/" style={styles.link}>Početna</Link></li>
        <li><Link to="/all-news" style={styles.link}>Blogs</Link></li>
        <li><Link to="/about" style={styles.link}>About</Link></li>
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#343a40',
    color: '#FFFFFF',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width: '98%',
    position: 'fixed',
    top: 0,
    right:0,   
    zIndex: 1000,
  },
  logo: {
    fontSize: '24px',
    fontWeight: 'bold',
  },
  navLinks: {
    listStyle: 'none',
    display: 'flex',
    gap: '20px',
    margin: 0,
  },
  link: {
    textDecoration: 'none',
    color: '#FFFFFF',
    fontSize: '18px',
    transition: 'color 0.3s',
  },
  linkHover: {
    color: '#ffc107',
  },
};

export default Navbar;
