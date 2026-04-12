
interface ExperienceData {
  id: string;
  company_name: string;
  role: string;
  description: string[]; 
  year_started: string;
  year_ended: string | "Present";
  location: string;
}

interface ExperienceCardProps {
    data: ExperienceData;
    index: number;
}

export default function ExperienceCard({ data, index }: ExperienceCardProps) {
    
    return(<>
        <div key={index} className="group flex flex-col sm:flex-row rounded-2xl border border-slate-800 bg-slate-900/80 p-6 shadow-xl hover:border-blue-500/50 hover:shadow-blue-900/20 transition-all duration-300">
                            
        
                            <div className="flex flex-col flex-grow justify-center text-slate-300">
                                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                                    <div className="space-y-1 w-full">
                                        <h2 className="text-xl md:text-2xl font-bold text-blue-400">
                                            {data.company_name}
                                        </h2>
                                        <p className="text-lg font-medium text-white">{data.role}</p>
                                        
                                        <ul className="mt-3 space-y-2">
                                            {data.description.map((item, idx) => (
                                                <li key={idx} className="text-sm text-slate-400 flex items-start">
                                                    <span className="mr-2 text-blue-500 text-xs mt-1">●</span>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                        
                                        <p className="text-sm text-slate-500 pt-2">{data.location}</p>
                                    </div>
                                    
                                    <div className="inline-flex items-center justify-center self-start text-sm font-semibold text-blue-200 bg-blue-900/40 border border-blue-800/50 px-4 py-1.5 rounded-full whitespace-nowrap">
                                        <p>{data.year_started} - {data.year_ended}</p>
                                    </div>
                                </div>
                            </div>
        
                        </div>
    </>)
}