import Navbar from "../components/navbar";
import ProjectCard from "../components/projectCard";
import { getDictionary } from "../layout";




export default async function project({ params }: { params: { locale: string } })
{
    const { locale } = await params ;
    const dataText  = await getDictionary(locale as "th" | "en") 
    const projects = dataText.projects ?? [];

    
    return (<>
         <Navbar locale={locale} />

        <section className="flex flex-col  bg-blue-950/50 w-full h-400">
            <div className="flex  items-center flex-col text-white text-3xl font-bold mt-30"> 
                <h1>{dataText.myproject}</h1>
                <div className="h-1 w-80 bg-blue-600 mx-auto mt-5 rounded-full"></div>
            </div>
            <div className="flex flex-col w-full h-300 ">
                {projects.length > 0 ? (
                    projects.map((project, index) => (
                        <ProjectCard key={`${project.name}-${index}`} project={project} index={index} />
                    ))
                ) : (
                    <p className="text-center text-slate-300 mt-10">No project data</p>
                )}
            </div>
        </section>
    </>)
}