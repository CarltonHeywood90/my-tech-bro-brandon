'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <Link href="/" className={styles.brand} aria-label="My Tech Bro home">
          <Image
            src="/images/IMG_9826.png"
            alt="My Tech Bro"
            width={320}
            height={128}
            priority
          />
        </Link>

        <button
          className={styles.menuButton}
          type="button"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? '✕' : '☰'}
        </button>

        <div className={styles.desktopLinks}>
          <Link href="/services" className={styles.navLink}>Services</Link>
          <Link href="/about" className={styles.navLink}>About Us</Link>
          <Link href="/blog" className={styles.navLink}>Blog</Link>
          <Link href="/consult" className={styles.scheduleLink}>Schedule</Link>
        </div>
      </div>

      {isOpen && (
        <div className={styles.mobileMenu} id="mobile-navigation">
          <Link href="/services" className={styles.navLink}>Services</Link>
          <Link href="/about" className={styles.navLink}>About Us</Link>
          <Link href="/blog" className={styles.navLink}>Blog</Link>
          <Link href="/consult" className={styles.scheduleLink}>Schedule</Link>
        </div>
      )}
    </nav>
  );
}
