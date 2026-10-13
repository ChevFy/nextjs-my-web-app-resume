import Navbar from "../components/navbar";
import ProjectTabs from "../components/projectTabs";
import { getDictionary } from "../layout";




export default async function project({ params }: { params: Promise<{ locale: string }> })
{
    const { locale } = await params ;
    const dataText  = await getDictionary(locale as "th" | "en")
    const projects = dataText.projects ?? [];
    const schoolProjects = dataText.school42Projects ?? [];


    return (<>
         <Navbar locale={locale} />

        <section className="flex flex-col  bg-blue-950/50 w-full min-h-screen pb-20">
            <div className="flex  items-center flex-col text-white text-3xl font-bold mt-30">
                <h1>{dataText.myproject}</h1>
                <div className="h-1 w-80 bg-blue-600 mx-auto mt-5 rounded-full"></div>
            </div>
            <ProjectTabs
                projects={projects}
                schoolProjects={schoolProjects}
                sideLabel={dataText.projectTabSide}
                schoolLabel={dataText.projectTab42}
                githubLabel={dataText.projectViewGithub}
            />
        </section>
    </>)
}
