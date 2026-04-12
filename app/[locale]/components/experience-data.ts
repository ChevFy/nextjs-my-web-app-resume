export interface ExperienceDictionary {
    education: string;
    experience: string;
    present: string;
    educations: {
        level: string;
        school_name: string;
        major: string;
        location: string;
    }[];
    experiences: {
        description: string[];
        year_started: string;
        year_ended: string;
        location: string;
    }[];
}

export function createExperienceChoices(dataText: ExperienceDictionary) {
    return [
        { id: "edu", label: dataText.education },
        { id: "exp", label: dataText.experience },
    ];
}

export function createEducationItems(dataText: ExperienceDictionary) {
    return [
        {
            id: "university",
            level: dataText.educations[0].level,
            school_name: dataText.educations[0].school_name,
            major: dataText.educations[0].major,
            year_started: "2024",
            year_ended: dataText.present,
            gpa: null,
            location: dataText.educations[0].location,
            img: "/images/kmitl.png",
        },
        {
            id: "42_bangkok",
            level: dataText.educations[1].level,
            school_name: dataText.educations[1].school_name,
            major: dataText.educations[1].major,
            year_started: "2025",
            year_ended: dataText.present,
            gpa: null,
            location: dataText.educations[1].location,
            img: "/images/42.jpg",
        },
        {
            id: "high_school",
            level: dataText.educations[2].level,
            school_name: dataText.educations[2].school_name,
            major: dataText.educations[2].major,
            year_started: "2020",
            year_ended: "2023",
            gpa: 3.96,
            location: dataText.educations[2].location,
            img: "/images/pai.png",
        },
    ];
}

export function createExperienceItems(dataText: ExperienceDictionary) {
    return [
        {
            id: "seed_webs_backend",
            company_name: "Seed Webs",
            role: "Backend Developer",
            description: dataText.experiences[0].description,
            year_started: dataText.experiences[0].year_started,
            year_ended: dataText.experiences[0].year_ended,
            location: dataText.experiences[0].location,
        },
        {
            id: "vonix_cto",
            company_name: "VONIX",
            role: "Technical Lead & CTO",
            description: dataText.experiences[1].description,
            year_started: dataText.experiences[1].year_started,
            year_ended: dataText.experiences[1].year_ended,
            location: dataText.experiences[1].location,
        },
        {
            id: "seed_webs_tester",
            company_name: "Seed Webs",
            role: "Web Tester & Data entry",
            description: dataText.experiences[2].description,
            year_started: dataText.experiences[2].year_started,
            year_ended: dataText.experiences[2].year_ended,
            location: dataText.experiences[2].location,
        },
    ];
}
