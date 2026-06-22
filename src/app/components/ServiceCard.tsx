interface ServiceCardProps {
    title: string;
    description: string;
  }
  
  export default function ServiceCard({ title, description }: ServiceCardProps) {
    return (
      <div className="p-8 border border-slate-800 rounded-2xl bg-slate-900/50 hover:border-cyan-500/50 transition-colors group">
        <h3 className="text-2xl font-bold mb-4 text-slate-100 group-hover:text-cyan-400 transition-colors">
          {title}
        </h3>
        <p className="text-slate-400 leading-relaxed">
          {description}
        </p>
      </div>
    );
  }