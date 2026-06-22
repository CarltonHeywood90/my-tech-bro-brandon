// app/layout.tsx
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-slate-100">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}