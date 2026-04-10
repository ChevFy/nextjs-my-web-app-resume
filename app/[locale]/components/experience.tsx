"use client"

import { useState } from "react"

interface dataTextEXP {
    education: string;
    experience: string;
}

export default function Experience({ dataText } : { dataText : dataTextEXP }  )
{
    
    const expChoice  = [
        { id : "edu" , label : dataText.education },
        { id : "exp" , label : dataText.experience } 
    ]
    
    
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
        <div>
            
            
        </div>
    </div>
    </>)

}