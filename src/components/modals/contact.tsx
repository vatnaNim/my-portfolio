import { 
    IconButton, 
    Tooltip 
} from "@mui/material";
import { 
    Back, 
    Contect as ContectIcon, 
    Copy,
    DoneAll
} from '../../assets/icons';
import { TelegramQR } from "../../assets/images";
import { useState } from "react";

interface iContactProps {
    CloseContact: () => void;
    isDarkMode: boolean;
};
  
const Contect = ({ CloseContact, isDarkMode }: iContactProps) => {
    const [isCopied, setCopied] = useState(false);
    const [isFadingOut, setFadingOut] = useState(false);
    const phoneNumber = '095 872 770';

    const clickCopy = () => {
        navigator.clipboard.writeText(phoneNumber);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
    }

    const handleAnimationEnd = () => {
        if (isFadingOut) {
            setCopied(false);    
            setFadingOut(false); 
        }
    };
    return (
        <div 
            className="flex flex-col relative">
            <div 
                className={`w-full border-b border-gray-200 py-2 flex items-start justify-between  rounded-t-xl animate__zoomIn`}
                style={{ animationDuration: '0.5s' }}>
                
                <ContectIcon className="w-9 h-9 text-green-600 "/>
                <IconButton
                    size="small"
                    sx={{ color: '#d50000' }}
                    onClick={CloseContact}>
                    <Back className="w-6 h-6 object-scale-down" />
                </IconButton>
            </div>
            <div 
                className=" py-2 flex  gap-x-6">
                <div 
                    className="space-y-0.5">
                    <h2 
                        className={`text-xl font-semibold pb-10 ${isDarkMode? 'text-white' : ' text-gray-800'}`}>
                        Telegram & Phone Number
                    </h2>
                    <div 
                        className="space-x-1">
                        <span 
                            className="text-md font-semibold text-green-700">
                            Username: 
                        </span>
                        <span
                            className="font-md  font-medium">
                            @Vatna
                        </span>
                    </div>

                    <div className="flex items-center gap-x-3 ">
                        <span 
                            className="text-md text-green-700 font-semibold">
                            Phone Number: 
                        </span>
                        <span
                            className="flex items-center gap-x-3  border-b border-green-700">
                            <p className="text-lg">
                                {phoneNumber}
                            </p>
                            <Tooltip 
                                arrow
                                placement="top"
                                title={isCopied ? 'Copied!' : 'Copy'}
                                slotProps={{
                                    popper: {
                                    modifiers: [
                                            {
                                            name: 'offset',
                                            options: {
                                                offset: [0, -10],
                                            },
                                            },
                                        ],
                                    },
                                }}>
                                    <span className="cursor-pointer">{isCopied? <DoneAll onClick={clickCopy} className="w-6 h-6 object-scale-down text-green-600 cursor-pointer"/> : <Copy onClick={clickCopy} className="w-6 h-5 object-scale-down text-gray-500 cursor-pointer" />}</span>
                            </Tooltip>
                        </span>
                    </div>
                </div>
                <div 
                    className="space-y-1">
                    <span
                        className="text-md font-semibold capitalize text-green-700">
                        telegram QR:
                    </span>
                   <div 
                        className="w-40 h-44 overflow-hidden rounded-3xl shadow-md">
                        <img 
                            src={TelegramQR} 
                            alt="telegram QR" 
                            className="object-fill w-full h-full"
                        />
                   </div>
                </div>
            </div>
            {(isCopied || isFadingOut) && (
            <div 
                onAnimationEnd={handleAnimationEnd}
                className={`
                    absolute top-0 left-52 px-2 py-0.5 text-sm shadow-md rounded font-medium
                    ${isDarkMode ? 'text-white bg-green-700' : 'text-green-800 bg-green-100'}
                    animate__animated
                    ${isFadingOut ? 'animate__fadeOutUp' : 'animate__fadeInDown'}
                `}
                style={{ animationDuration: '0.5s' }}>
                Copied!
            </div>
            )}
        </div>
    );
};

export default Contect;
