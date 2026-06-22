export default function ConsultPage() {
    return (
      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-16">
          
          {/* Left Side: Pitch */}
          <div>
            <h1 className="text-5xl font-extrabold mb-6">Let's <span className="text-cyan-400">Build</span></h1>
            <p className="text-xl text-slate-400 mb-8">
              Whether you need a physical infrastructure overhaul or an AI agent deployment, 
              the first step is a conversation. Tell us about your current stack, and 
              we'll tell you how to harden it.
            </p>
            <ul className="space-y-4 text-slate-300">
              <li>✓ Comprehensive Network Audits</li>
              <li>✓ Custom Agentic AI Strategy</li>
              <li>✓ Hardware & Cabling Consultation</li>
              <li>✓ Security & Performance Optimization</li>
            </ul>
          </div>
  
          {/* Right Side: The Form */}
          <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-slate-300">Name</label>
                <input type="text" className="w-full bg-slate-950 border border-slate-700 rounded-lg p-3 text-slate-100 focus:ring-2 focus:ring-cyan-500 outline-none" placeholder="Carlton Heywood" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-slate-300">Company</label>
                <input type="text" className="w-full bg-slate-950 border border-slate-700 rounded-lg p-3 text-slate-100 focus:ring-2 focus:ring-cyan-500 outline-none" placeholder="Acme Corp" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-slate-300">Service Needed</label>
                <select className="w-full bg-slate-950 border border-slate-700 rounded-lg p-3 text-slate-100 focus:ring-2 focus:ring-cyan-500 outline-none">
                  <option>Structured Cabling</option>
                  <option>Agentic AI Integration</option>
                  <option>Network Security Audit</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-slate-300">Project Brief</label>
                <textarea rows={4} className="w-full bg-slate-950 border border-slate-700 rounded-lg p-3 text-slate-100 focus:ring-2 focus:ring-cyan-500 outline-none" placeholder="Describe your current bottleneck..."></textarea>
              </div>
              <button type="button" className="w-full bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-3 rounded-lg transition-colors">
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }