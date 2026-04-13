interface ServiceCardProps {
  title: string;
  description: string;
  price?: string;
  features?: string[];
}

export default function ServiceCard({
  title,
  description,
  price,
  features,
}: ServiceCardProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-6 sm:p-8 shadow-2xl hover:border-blue-400/50 transition-all duration-300 hover:shadow-blue-500/20">
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-slate-300 leading-relaxed mb-4">{description}</p>

      {features && (
        <div className="mb-4 space-y-2">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-2">
              <span className="text-slate-300 text-sm">• {feature}</span>
            </div>
          ))}
        </div>
      )}
    
      {price && (
        <div className="mt-6 pt-6 border-t border-white/10">
          <p className="text-blue-300 font-semibold">{price}</p>
        </div>
      )}
      
    </div>
  );
}
