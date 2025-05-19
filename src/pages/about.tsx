import { 
    Rupp,
    Beltei,
    NoImage,
    Profile,
} from "../assets/images";
import { 
    CssIcon, 
    HtmlIcon, 
    JavaScriptIcon,
    NpmIcon,
    NuxtIcon,
    ReactIcon,
    TypeScriptIcon,
    VueIcon,
    GitHubIcon,
    GitHubNon,
    TailwindIcon,
    BootstrapIcon
} from "../assets/icons";
import { BtnDetails } from "../components/ui";
import { useState } from "react";
import { SkillDetails } from "../components/modals";
import { Helmet } from "react-helmet-async";

interface iAboutProps {
    isDarkMode: boolean;
}

const About = ({ isDarkMode }: iAboutProps) => {
    const [isOpenDetail, setIsOpenDetail] = useState(false);
    const toggleDetail = (): void => {
        setIsOpenDetail(prev => !prev);
    }


    const educationDb = [
        {
            id: 1, 
            SchoolName: "Royal University of Phnom Penh",
            Degree: "Bachelor of Information Technology",
            Year: "Graduated 2022 – 2025",
            Logo: Rupp,
        },
         {
            id: 2, 
            SchoolName: "Toul Tumpong High School, Phnom Penh",
            Degree: "Bac ll",
            Year: "Graduated 2019 – 2020",
            Logo: '',
        },
         {
            id: 3, 
            SchoolName: "Beltei International School, Phnom Penh",
            Degree: "General English (ESL 12)",
            Year: "Graduated 2017 – 2020",
            Logo: Beltei,
        },

    ]

    const personalSkills = [
        {
            id: 1, 
            skillName: "html",
            logo: HtmlIcon,
            class: "hover:text-orange-500",
            perfomance: 90,
        },
        {
            id: 2, 
            skillName: "css",
            logo: CssIcon,
            class: "hover:text-sky-500",
            perfomance: 90,
        },
        {
            id: 3, 
            skillName: "javeScript",
            logo: JavaScriptIcon,
            class: "hover:text-yellow-500",
            perfomance: 75,
        },
        {
            id: 4, 
            skillName: "typeScript",
            logo: TypeScriptIcon,
            class: "hover:text-blue-500",
            perfomance: 80,
        },
        {
            id: 5, 
            skillName: "Tailwind",
            logo: TailwindIcon,
            class: "hover:text-blue-300",
            perfomance: 80,
        },
        {
            id: 6, 
            skillName: "bootstrap",
            logo: BootstrapIcon,
            class: "hover:text-purple-400",
            perfomance: 80,
        },
        {
            id: 7, 
            skillName: "Nuxt",
            logo: NuxtIcon,
            class: "hover:text-green-500",
            perfomance: 80,
        },
        {
            id: 8, 
            skillName: "vue",
            logo: VueIcon,
            class: "hover:text-green-600",
            perfomance: 80,
        },
        {
            id: 9, 
            skillName: "React",
            logo: ReactIcon,
            class: "hover:text-sky-400",
            perfomance: 80,
        },
        {
            id: 10, 
            skillName: "npm",
            logo: NpmIcon,
            class: "hover:text-red-500",
            perfomance: 70,
        },
        {
            id: 11, 
            skillName: "github",
            logo: isDarkMode? GitHubNon : GitHubIcon,
            class: `hover:text-orange-500 ${isDarkMode? 'text-white' : ''}`,
            perfomance: 80,
        },
    ]

    return (
        <>
            <Helmet>
				<title>VATNA - Front-end Developer</title>
				<meta name="description" content="Personal portfolio of VATNA" />
				<meta property="og:title" content="VATNA - Front-end Developer" />
				<meta property="og:description" content="Personal portfolio of VATNA" />
				<meta property="og:image" content={Profile} />
				<meta property="og:type" content="website" />
				<meta property="og:url" content="http://localhost:5173/about" />
      		</Helmet>

            <div 
                className="min-h-screen w-full px-6 md:px-8">
                <div 
                    className="flex flex-col px-4 py-4 gap-y-4  text-black">
                    <div 
                        className="w-full md:w-[50%] flex items-center gap-x-4 sm:gap-x-6 mb-4 animate__fadeIn"
                        style={{ animationDuration: '1s' }}>
                        <span
                            className={`${isDarkMode? 'text-white' : 'text-black'} text-lg-clamp sm:fs-5 font-semibold uppercase`}>
                            Education
                        </span>
                        <span className={`${isDarkMode? 'border-white' : 'border-black' } border flex-1`}/>
                    </div>
                    <div 
                        className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-3 gap-y-3 " >
                        {
                            educationDb.map((education) => (
                                <div 
                                    style={{ animationDuration: '1.5s' }}
                                    className={`${isDarkMode? 'bg-gray-950' : 'bg-gray-100'} animate__lightSpeedInRight  flex flex-1 flex-col sm:flex-row items-center gap-4 md:gap-6 p-4 rounded-2xl border border-white shadow-md transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] cursor-pointer shadow-sky-500`}
                                    key={education.id}>
                                    <div 
                                        className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden flex-shrink-0">
                                        <img
                                            src={education.Logo || NoImage}
                                            alt={education.SchoolName}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="fs-6 font-semibold text-sky-700">
                                            {education.SchoolName}
                                        </h3>
                                        <p className="text-sm text-gray-600 mt-2">
                                            {education.Degree}
                                        </p>
                                        <p className="text-sm text-gray-400 italic">
                                            {education.Year}
                                        </p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div 
                        className="w-full flex items-center justify-between sm:justify-normal gap-x-4 mb-0 sm:mb-2 animate__fadeIn"
                        style={{ animationDuration: '1s' }}>
                        <span 
                            className={`${isDarkMode? 'text-white' : 'text-black'} text-lg-clamp sm:fs-5 font-semibold uppercase whitespace-nowrap`}>
                            My skills
                        </span>
                        <span 
                            className={`${isDarkMode? 'border-white' : 'border-black'} flex-1 border-t-2 sm:block hidden w-[40%]`} />
                            <BtnDetails 
                                isDarkMode={isDarkMode}
                                name="more details"  
                                onClick={toggleDetail} 
                            />
                    </div>
                    <div 
                        className={`border px-4 py-6 rounded-2xl flex flex-wrap justify-center items-stretch gap-4 sm:gap-6 md:gap-8 shadow-md shadow-sky-500 animate__bounceInUp ${
                            isDarkMode ? 'bg-gray-950' : 'bg-gray-100'
                        }`}
                        style={{ animationDuration: '1s' }}>
                        {
                        personalSkills.map((skill) => (
                            <div 
                                key={skill.id}
                                className={`${skill.class} w-[45%] sm:w-[30%] md:w-[22%] lg:w-[18%] xl:w-[15%] flex flex-col items-center gap-y-2 transition-transform duration-300 hover:scale-110 cursor-pointer`}>
                                <skill.logo 
                                    className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 transition-colors duration-300"
                                />
                                <p 
                                    className={`${isDarkMode ? 'text-white' : 'text-gray-800'} text-center text-xs sm:text-sm md:text-base font-semibold uppercase`}>
                                    {skill.skillName}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <SkillDetails
                        isDarkMode={isDarkMode}
                        open={isOpenDetail}
                        onClose={toggleDetail}
                        title="More Details"
                    />
                    </div>
            </div>
        </>
    )
}

export default About;