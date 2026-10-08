import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './home.module.css';

export default function HomePage() {
  return (
    <main className={styles.container}>
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>
          My <span className={styles.accent}>Tech Bro</span>
        </h1>
        <p className={styles.heroText}>
          Bridging the physical and digital gap. Expert infrastructure cabling meets
          next-generation agentic AI integration for the modern enterprise.
        </p>
        <Image
          className={styles.heroImage}
          src="/images/IMG_9826.png"
          alt="My Tech Bro logo"
          width={1024}
          height={1024}
          priority
        />
        <Link href="/consult" className={styles.primaryButton}>
          Schedule a Consult
        </Link>
      </section>

      <section className={styles.services}>
        <h2 className={styles.sectionTitle}>Hard IT Solutions</h2>
        
        <Image
          className={styles.heroImage}
          src="/images/IMG_4989.png"
          alt="My Tech Bro logo"
          width={1024}
          height={1024}
          priority
        />
        
        <div className={styles.serviceGrid}>
          <article className={styles.serviceCard}>
            <h3>Structured Cabling</h3>
            <p>Professional-grade networking infrastructure. From CAT6A to fiber, we build the backbone your business demands.</p>
          </article>
          <article className={styles.serviceCard}>
            <h3>Agentic AI Systems</h3>
            <p>Deployment of autonomous AI agents designed to handle complex workflows and operational automation.</p>
          </article>
          <article className={styles.serviceCard}>
            <h3>On-Site Tech Support</h3>
            <p>Hands-on hardware troubleshooting and systems maintenance to ensure your operation never skips a beat.</p>
          </article>
        </div>
      </section>

      <section className={styles.location}>
        <h2 className={styles.sectionTitle}>Visit Us</h2>

        <Image
          className={styles.heroImage}
          src="/images/IMG_0727.png"
          alt="My Tech Bro logo"
          width={1024}
          height={1024}
          priority
        />

        <p>
          Proudly serving the silicon slopes from our base in <strong>Provo, Utah</strong>.
        </p>
      </section>
    </main>
  );
}
