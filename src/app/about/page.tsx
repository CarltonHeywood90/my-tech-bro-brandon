export default function AboutPage() {
    return (
      <div className="max-w-7xl mx-auto px-6 py-24 space-y-32">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-extrabold mb-6">The <span className="text-cyan-400">Team</span></h1>
          <p className="text-xl text-slate-400">The brains and hands behind My Tech Bro.</p>
        </header>
  
        {/* Bio 1: Text Left, Photo Right */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-slate-100">Carlton Heywood</h2>
            <p className="text-slate-400 leading-relaxed mb-4">
              With a background in IT Management and a passion for deep-stack engineering, 
              Carlton focuses on the architecture of agentic AI systems and the digital 
              infrastructure that supports them. He specializes in bridging the gap between 
              high-level software logic and the physical reality of server-side operations.
            </p>
          </div>
          <div className="aspect-square bg-slate-800 rounded-2xl flex items-center justify-center border border-slate-700">
            <span className="text-slate-600">Carlton's Photo</span>
          </div>
        </section>
  
        {/* Bio 2: Photo Left, Text Right */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div className="aspect-square bg-slate-800 rounded-2xl flex items-center justify-center border border-slate-700 order-2 md:order-1">
            <span className="text-slate-600">Brandon's Photo</span>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-bold mb-6 text-slate-100">Brandon</h2>
            <p className="text-slate-400 leading-relaxed mb-4">
              Brandon is the backbone of our physical operations. From precision cabling 
              to hardware hardening, he ensures that the foundation of every project 
              is built to survive in the real world. His expertise in site assessment 
              and hands-on troubleshooting keeps our clients' systems running with zero downtime.
            </p>
          </div>
        </section>
      </div>
    );
  }