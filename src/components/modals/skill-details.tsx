import {  
    Button,
    Modal, 
    Slider 
} from "@mui/material";
import { 
    useEffect, 
    useState 
} from "react";
import { 
    ArrowRight, 
    CssIcon,
    GitHubNon, 
    HtmlIcon, 
    JavaScriptIcon, 
    LaravelIcon, 
    NpmIcon, 
    NuxtIcon, 
    PhpIcon, 
    ReactIcon, 
    TypeScriptIcon, 
    VueIcon,
    SqlIcon
} from "../../assets/icons";

interface IModalDetailProps {
    open: boolean;
    onClose: () => void;
    title?: string;
    isDarkMode?: boolean;
}

const SkillDetails = ({
  open,
  onClose,
  title = "More Details",
  isDarkMode
}: IModalDetailProps) => {
    const [showModal, setShowModal] = useState(false);
    const [animationClass, setAnimationClass] = useState("animate__bounceInDown");

    useEffect(() => {
        if (open) 
        {
            setShowModal(true);
            setAnimationClass("animate__bounceInDown");
        } 
        else 
        {
            setAnimationClass("animate__fadeOutUp");
            const timeout = setTimeout(() => {
                setShowModal(false);
            }, 1000); 
            return () => clearTimeout(timeout);
        }
    }, [open]);

    const personalSkills = [
        {
            id: 1, 
            skillName: "html",
            logo: HtmlIcon,
            class: "text-orange-500",
            perfomance: 90,
        },
        {
            id: 2, 
            skillName: "css",
            logo: CssIcon,
            class: "text-sky-500",
            perfomance: 90,
        },
        {
            id: 3, 
            skillName: "javeScript",
            logo: JavaScriptIcon,
            class: "text-yellow-500",
            perfomance: 75,
        },
        {
            id: 4, 
            skillName: "typeScript",
            logo: TypeScriptIcon,
            class: "text-blue-500",
            perfomance: 80,
        },
        {
            id: 5, 
            skillName: "Nuxt",
            logo: NuxtIcon,
            class: "text-green-500",
            perfomance: 80,
        },
        {
            id: 6, 
            skillName: "vue",
            logo: VueIcon,
            class: "text-green-600",
            perfomance: 80,
        },
        {
            id: 7, 
            skillName: "React",
            logo: ReactIcon,
            class: "text-sky-400",
            perfomance: 80,
        },
        {
            id: 8, 
            skillName: "npm",
            logo: NpmIcon,
            class: "text-red-500",
            perfomance: 70,
        },
        {
            id: 9, 
            skillName: "github",
            logo: GitHubNon,
            class: `hover:text-orange-500 text-orange-500`,
            perfomance: 80,
        },
        {
            id: 10, 
            skillName: "php",
            logo: PhpIcon,
            class: `hover:text-blue-800 text-blue-900`,
            perfomance: 50,
        },
        {
            id: 11, 
            skillName: "laravel",
            logo: LaravelIcon,
            class: `hover:text-red-500 text-red-500`,
            perfomance: 50,
        },
        {
            id: 12, 
            skillName: "sql",
            logo: PhpIcon,
            class: `hover:text-blue-800 text-blue-900`,
            perfomance: 50,
        },
        {
            id: 13, 
            skillName: "MySQL",
            logo: SqlIcon,
            class: `hover:text-blue-500 text-blue-700`,
            perfomance: 50,
        },
    ];

    if (!showModal) return null;

    return (
        <Modal
            open={open || showModal}
            onClose={onClose}
            aria-labelledby="modal-title"
            aria-describedby="modal-description">
            <div 
                className={`fixed inset-0 flex items-center justify-center ${animationClass} ${isDarkMode? 'bg-gray-950' : 'bg-gray-100'}`}
                style={{ animationDuration: '1s' }}>
                <div
                    className={`w-full h-full p-4 sm:p-6 overflow-auto transition-transform duration-300 transform ${
                        showModal ? "translate-x-0" : "translate-x-full"
                    }`}>
                    <div 
                        className=" w-0 sm:w-[70%]  md:w-[60%] lg:w-[50%] flex items-center gap-x-3 sm:gap-x-6 mb-4">
                        <Button 
                            aria-label="delete" 
                            variant="contained"
                            size="medium"
                            color="error"
                            onClick={onClose}
                            className="p-0.5 sm:p-3 md:p-4 min-w-0">
                            <ArrowRight  className="rotate-180 w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
                        </Button>
                        <span
                            className={`${isDarkMode? 'text-white' : 'text-black'} text-lg-clamp font-semibold uppercase text-nowrap`}>
                            {title}
                        </span>
                        <span className="border border-black hidden sm:block flex-1"/>
                    </div>
                    <div 
                        className={`${isDarkMode? 'bg-gray-950' : 'bg-gray-100'} border  px-4 py-6 sm:py-4 rounded-2xl shadow-md shadow-sky-500 border-sky-500 mx-4 my-5`}>
                        {
                            personalSkills.map((skill)=> (
                            <div 
                                key={skill.id}
                                className="space-y-1">
                                <div 
                                    className="flex justify-between items-center">
                                    <span
                                        className="flex items-end gap-x-1 sm:gap-x-2">
                                        <skill.logo className="w-6 h-6 sm:w-8 sm:h-8"/>
                                        <h4
                                            className={`font-medium text-sm-clamp uppercase ${skill.class}`}>
                                            {skill.skillName}
                                        </h4>
                                    </span>
                                    <h4
                                        className="text-base-clamp font-medium uppercase text-sky-500">
                                        %{skill.perfomance}
                                    </h4>
                                </div>
                                <div 
                                    className="px-3">
                                    <Slider 
                                        defaultValue={skill.perfomance} 
                                        step={10} 
                                        marks 
                                        min={10} 
                                        max={100} 
                                        disabled 
                                        size="medium"
                                        sx={{
                                            "& .MuiSlider-thumb": {
                                                backgroundColor: "#0284c7", 
                                            },
                                            "& .MuiSlider-rail": {
                                                backgroundColor: "#e2e8f0", 
                                            },
                                            "& .MuiSlider-track": {
                                                backgroundColor: "#0284c7", 
                                            },
                                        }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default SkillDetails;
