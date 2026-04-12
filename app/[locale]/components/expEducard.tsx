import Image from 'next/image';

interface expEduData {
  id: string;
  level: string;
  school_name: string;
  major: string;
  year_started: string;
  year_ended: string | "Present";
  gpa: number | null; 
  location: string;
  img: string;
}

interface expEduDataProps {
    data: expEduData;
    index: number;
}

export default function ExpEduCard({ data, index }: expEduDataProps) {
    
    return(<>
        <div key={index} className="group flex flex-col sm:flex-row rounded-2xl border border-slate-800 bg-slate-900/80 p-6 shadow-xl hover:border-blue-500/50 hover:shadow-blue-900/20 transition-all duration-300">
                            
                            <div className="flex-shrink-0 flex items-center justify-center p-4 rounded-xl mb-4 sm:mb-0 sm:mr-6">
                                <Image 
                                    src={data.img} 
                                    alt={data.school_name} 
                                    width={120} 
                                    height={120} 
                                    className="object-contain drop-shadow-lg"
                                /> 
                            </div>
        
                            <div className="flex flex-col flex-grow justify-center text-slate-300">
                                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                                    <div className="space-y-1">
                                        <h2 className="text-xl md:text-2xl font-bold text-blue-400 ">
                                            {data.school_name}
                                        </h2>
                                        <p className="text-lg font-medium text-white">{data.level}</p>
                                        <p className="text-slate-400">{data.major}</p>
                                        
                                        {data.gpa && <p className="text-sm text-slate-400">GPA: <span className="text-blue-300 font-semibold">{data.gpa}</span></p>}
                                        <p className="text-sm text-slate-500 pt-1">{data.location}</p>
                                    </div>
                                    
                                    <div className="inline-flex items-center justify-center self-start text-sm font-semibold text-blue-200 bg-blue-900/40 border border-blue-800/50 px-4 py-1.5 rounded-full whitespace-nowrap">
                                        <p>{data.year_started} - {data.year_ended}</p>
                                    </div>
                                </div>
                            </div>
        
                        </div>
    </>)
}