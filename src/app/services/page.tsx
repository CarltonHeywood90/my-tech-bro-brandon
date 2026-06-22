import ServiceCard from '@/app/components/ServiceCard';

const services = [
  {
    title: "Structured Cabling",
    description: "End-to-end network infrastructure deployment. We handle everything from high-density server room cabling to office-wide CAT6A and fiber runs, ensuring peak performance and organization."
  },
  {
    title: "Agentic AI Integration",
    description: "We don't just sell software; we deploy autonomous agents. Tailored AI systems that automate your specific operational bottlenecks and scale with your business."
  },
  {
    title: "On-Site Hardware Support",
    description: "Hands-on technical intervention. Whether it's rack maintenance, hardware troubleshooting, or system hardening, our team provides the physical support required to keep your stack running."
  },
  {
    title: "Network Security & Hardening",
    description: "Physical and digital security go hand-in-hand. We audit your infrastructure and deploy robust firewall and VPN solutions to keep your private data exactly that—private."
  },
  {
    title: "Systems Architecture",
    description: "Scalable design for your growing enterprise. We plan and implement the hardware and software layers that form the foundation of your digital transformation."
  },
  {
    title: "Performance Audits",
    description: "Struggling with latency or downtime? We perform deep-dive audits of your physical cabling and digital workflows to identify and eliminate bottlenecks."
  }
];

export default function ServicesPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      <header className="mb-20">
        <h1 className="text-5xl font-extrabold mb-6">Our <span className="text-cyan-400">Services</span></h1>
        <p className="text-xl text-slate-400 max-w-2xl">
          At My Tech Bro, we bridge the gap between physical infrastructure and the intelligence of agentic AI. 
          Professional solutions built for modern enterprises.
        </p>
      </header>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard key={index} title={service.title} description={service.description} />
        ))}
      </div>
    </div>
  );
}