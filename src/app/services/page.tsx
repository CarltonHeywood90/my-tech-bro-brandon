import ServiceCard from '@/app/components/ServiceCard';
import styles from './services.module.css';

const services = [
  {
    title: 'Structured Cabling',
    description: 'End-to-end network infrastructure deployment. We handle everything from high-density server room cabling to office-wide CAT6A and fiber runs, ensuring peak performance and organization.',
  },
  {
    title: 'Agentic AI Integration',
    description: "We don't just sell software; we deploy autonomous agents. Tailored AI systems that automate your specific operational bottlenecks and scale with your business.",
  },
  {
    title: 'On-Site Hardware Support',
    description: "Hands-on technical intervention. Whether it's rack maintenance, hardware troubleshooting, or system hardening, our team provides the physical support required to keep your stack running.",
  },
];

export default function ServicesPage() {
  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <h1>Our <span className={styles.accent}>Services</span></h1>
        <p>
          At My Tech Bro, we bridge the gap between physical infrastructure and the intelligence of agentic AI.
          Professional solutions built for modern enterprises.
        </p>
      </header>

      <div className={styles.grid}>
        {services.map((service) => (
          <ServiceCard key={service.title} title={service.title} description={service.description} />
        ))}
      </div>
    </main>
  );
}
