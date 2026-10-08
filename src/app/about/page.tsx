import Image from 'next/image';
import styles from './about.module.css';

export default function AboutPage() {
  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <h1>The <span className={styles.accent}>Team</span></h1>

        <p>We are tech enthusiasts and business professionals whose goal is to help your business enter the modern AI era. With reliable network infrastructure and your own agentic AI system, you will be prepared for the next wave of business challenges.

Keeping up with digital trends is often the difference between staying competitive and falling behind. But you can’t always know what tech is essential to your competitive edge. We aim to bridge the gap between your business expertise and the changing digital landscape.</p>

        <p>The brains and hands behind My Tech Bro.</p>
      </header>

      <section className={styles.bio}>
        <div>
          <h2>Carlton Heywood</h2>
          <p>
            With a background in IT Management and a passion for deep-stack engineering,
            Carlton focuses on the architecture of agentic AI systems and the digital
            infrastructure that supports them. He specializes in bridging the gap between
            high-level software logic and the physical reality of server-side operations.
          </p>
        </div>
        <div className={styles.photoPlaceholder}>
          <Image
            className={styles.portrait}
            src="/images/IMG_5225.JPG"
            alt="Carlton Heywood"
            width={150}
            height={150}
          />
        </div>
      </section>

      <section className={styles.bio}>
        <div className={styles.photoPlaceholder}>
          <Image
            className={styles.portrait}
            src="/images/IMG_5478.jpg"
            alt="Brandon Curtin"
            width={150}
            height={150}
          />
        </div>
        <div className={styles.secondBio}>
          <h2>Brandon</h2>
          <p>
            Brandon is the backbone of our physical operations. From precision cabling
            to hardware hardening, he ensures that the foundation of every project
            is built to survive in the real world. His expertise in site assessment
            and hands-on troubleshooting keeps our clients&apos; systems running with zero downtime.
          </p>
        </div>
      </section>
    </main>
  );
}
