"use client"

import { useState } from "react"
import ExpEduCard from "./expEducard";
import ExperienceCard from "./expexpCard";
import {
    createEducationItems,
    createExperienceChoices,
    createExperienceItems,
    type ExperienceDictionary,
} from "./experience-data";

export default function Experience({ dataText }: { dataText: ExperienceDictionary })
{
    
    const expChoice = createExperienceChoices(dataText)
    const educations = createEducationItems(dataText)
    const experiences = createExperienceItems(dataText)
    
    const [currentChoice, setCurrentChoice] = useState(expChoice[0].id)

    return(<>
    <div className="flex flex-col justify-center w-3/4">
        <div className="flex flex-row gap-2 justify-center text-xl font-bold  ">
            {expChoice.map( (choice) => (
                <button type="button" className={`relative py-1 w-1/2 cursor-pointer rounded-xl transition-shadow duration-300 ${ currentChoice === choice.id ? "text-gray-200 bg-blue-800" : "text-gray-400 hover:shadow-lg"}`} key={choice.id} onClick={() => {
                    setCurrentChoice(choice.id)
                }}>
                   <span className="relative z-10">{choice.label}</span>
                </button>
            ))}
        </div>
       <div className="w-full flex flex-col mt-8 gap-6">
            {currentChoice === "edu" && educations.map((edu, index) => (
                <ExpEduCard key={edu.id} data={edu} index={index} />
            ))}
            {currentChoice === "exp" && experiences.map((exp, index) => (
                <ExperienceCard key={exp.id} data={exp} index={index} />
            ))}
        </div>
    </div>
    </>)

}