// app/layout.tsx
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import styles from './layout.module.css';
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className={styles.siteContent}>{children}</div>
        <Footer />
      </body>
    </html>
  );
}