import React from 'react';
import styles from './Home.module.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Hero from './Components/Hero/Hero';

export default function HomePage() {
  return (
    <div className={styles.container}>
      <Header />
      <Hero />  
      <Footer />
    </div>
  );
}
