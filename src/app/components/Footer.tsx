export default function Footer() {
    return (
      <footer className="bg-slate-950 border-t border-slate-800 py-12 px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-slate-500">
          <div>
            <h4 className="text-slate-100 font-bold mb-4">My Tech Bro</h4>
            <p className="text-sm">Bridging physical infrastructure with agentic AI systems.</p>
          </div>
          <div>
            <h4 className="text-slate-100 font-bold mb-4">Connect</h4>
            <ul className="text-sm space-y-2">
              <li>Provo, Utah</li>
              <li>hello@mytechbro.com</li>
            </ul>
          </div>
          <div>
            <h4 className="text-slate-100 font-bold mb-4">Legal</h4>
            <ul className="text-sm space-y-2">
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-12 text-slate-700 text-xs">
          © {new Date().getFullYear()} My Tech Bro. All rights reserved.
        </div>
      </footer>
    );
  }