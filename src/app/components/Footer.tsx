import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.columns}>
        <div>
          <h2 className={styles.heading}>My Tech Bro</h2>
          <p>Bridging physical infrastructure with agentic AI systems.</p>
        </div>
        <div>
          <h2 className={styles.heading}>Connect</h2>
          <ul>
            <li>Provo, Utah</li>
            <li>hello@mytechbro.com</li>
          </ul>
        </div>
        <div>
          <h2 className={styles.heading}>Legal</h2>
          <ul>
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </div>
      <p className={styles.copyright}>
        © {new Date().getFullYear()} My Tech Bro. All rights reserved.
      </p>
    </footer>
  );
}
