interface iBtnSectionProps {
    text?: string;
    children?: React.ReactNode;
    isDarkMode?: boolean;
    textSize?: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
  
const BtnSection = ({ text, children, textSize, isDarkMode = false, onClick }: iBtnSectionProps) => {
    const effectBg = isDarkMode ? "bg-red-500" : "bg-white/20 ";
  
    return (
        <button
            onClick={onClick}
            className={`relative px-2.5 sm:px-3 py-1 sm:py-1.5 cursor-pointer text-center font-barlow inline-flex justify-center items-center uppercase rounded-lg border-solid transition-transform duration-300 ease-in-out group outline-offset-4 overflow-hidden`}>
            <span 
                className={`relative z-20 flex items-center gap-2 ${textSize}`}>
                {text ?? children}
            </span>
            <span className={`${effectBg} absolute left-[-75%] top-0 h-full w-[50%] rotate-12 z-10 blur-lg group-hover:left-[125%] transition-all duration-1000 ease-in-out`} />
            <span className={`w-1/2 drop-shadow-3xl transition-all duration-300 block border-sky-500 absolute h-[20%] rounded-tl-lg border-l-2 border-t-2 top-0 left-0`} />
            <span className={`w-1/2 drop-shadow-3xl transition-all duration-300 block border-sky-500 absolute group-hover:h-[90%] h-[60%] rounded-tr-lg border-r-2 border-t-2 top-0 right-0`} />
            <span className={`w-1/2 drop-shadow-3xl transition-all duration-300 block border-sky-500 absolute h-[60%] group-hover:h-[90%] rounded-bl-lg border-l-2 border-b-2 left-0 bottom-0`} />
            <span className={`w-1/2 drop-shadow-3xl transition-all duration-300 block border-sky-500 absolute h-[20%] rounded-br-lg border-r-2 border-b-2 right-0 bottom-0`} />
        </button>
    );
};
  
export default BtnSection;
  