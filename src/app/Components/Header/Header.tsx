import React from 'react';
import styles from './Header.module.css'
import Link from 'next/link';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>Welcome</h1>
      <ul>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/about'>About</Link>
        </li>
        <li>
          <Link href='/skills'>Skills</Link>
        </li>
        <li>
          <Link href='/contact'>Contact</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
