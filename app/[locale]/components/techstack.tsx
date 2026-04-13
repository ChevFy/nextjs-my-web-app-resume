"use client"
import TechstackCard from "./techstackCard"

export default function TechStack()
{
    const proLangs = [
    { id: "c", name: "C", img: "https://skillicons.dev/icons?i=c" },
    { id: "python", name: "Python", img: "https://skillicons.dev/icons?i=python" },
    { id: "js", name: "JavaScript", img: "https://skillicons.dev/icons?i=js" },
    { id: "ts", name: "TypeScript", img: "https://skillicons.dev/icons?i=ts" },
    { id: "csharp", name: "C#", img: "https://skillicons.dev/icons?i=cs" },
    { id: "arduino", name: "Arduino", img: "https://skillicons.dev/icons?i=arduino" },
    { id: "html", name: "HTML", img: "https://skillicons.dev/icons?i=html" },
    { id: "css", name: "CSS", img: "https://skillicons.dev/icons?i=css" },
    { id: "bash", name: "Bash", img: "https://skillicons.dev/icons?i=bash" }
    ];


    const frameworks = [
    { id: "fastapi", name: "FastAPI", img: "https://skillicons.dev/icons?i=fastapi" },
    { id: "dotnet", name: ".Net", img: "https://skillicons.dev/icons?i=dotnet" },
    { id: "node", name: "NodeJs", img: "https://skillicons.dev/icons?i=nodejs" },
    { id: "express", name: "express", img: "https://skillicons.dev/icons?i=express" },
    { id: "tailwind", name: "tailwind", img: "https://skillicons.dev/icons?i=tailwind" },
    { id: "bootstrap", name: "bootStrap5", img: "https://skillicons.dev/icons?i=bootstrap" },
    { id: "nextjs", name: "NextJS", img: "https://skillicons.dev/icons?i=nextjs" },
    { id: "react", name: "React", img: "https://skillicons.dev/icons?i=react" },
    { id: "numpy", name: "numpy", img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/numpy/numpy-original.svg" },
    { id: "pandas", name: "NextJS", img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/pandas/pandas-original-wordmark.svg" },
    { id: "scikit-learn", name: "scikit-learn", img: "https://url-shortener.me/KMEX" },
    { id: "mcp", name: "mcp", img: "https://go-skill-icons.vercel.app/api/icons?i=mcp" }

    ];
    
    const others = [
    { id: "docker", name: "Docker", img: "https://skillicons.dev/icons?i=docker" },
    { id: "figma", name: "Figma", img: "https://skillicons.dev/icons?i=figma" },
    { id: "postgresql", name: "PostgreSQL", img: "https://skillicons.dev/icons?i=postgresql" },
    { id: "git", name: "Git", img: "https://skillicons.dev/icons?i=git" },
    { id: "github", name: "GitHub", img: "https://skillicons.dev/icons?i=github" },
    { id: "jupyter-notebook", name: "Jupyter Notebook", img: "https://go-skill-icons.vercel.app/api/icons?i=jupyter" },
    { id: "vscode", name: "VS Code", img: "https://skillicons.dev/icons?i=vscode" },
    { id: "linux", name: "Linux", img: "https://skillicons.dev/icons?i=linux" },
    { id: "macos", name: "macOS", img: "https://go-skill-icons.vercel.app/api/icons?i=macos" },
    { id: "cursor", name: "Cursor", img: "https://go-skill-icons.vercel.app/api/icons?i=cursor" },
    ];

    return (<>
        <div className="flex flex-col h-100 w-3/4 p-4">
            <div className="flex flex-col w-full text-2xl font-bold justify-center text-white">
                <div className="flex justify-center">
                    <h3>My TechStack</h3>
                </div>
                <div className="h-1 w-20 bg-blue-600 mx-auto mt-2 rounded-full"></div>
            </div>

            {/* Programing Language */}
            <TechstackCard title="Programing language" items={proLangs} />

            {/* Framework or Library*/}
            <TechstackCard title="Framework or Library" items={frameworks} />

            {/* Others */}
            <TechstackCard title="Others" items={others} />
        </div>
    </>)
}
