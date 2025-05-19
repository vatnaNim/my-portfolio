import * as React from 'react';
import {
    Tooltip,
	IconButton,
	SwipeableDrawer,
	Box,
    Divider,
    ButtonGroup,
    Button,
    Modal
} from '@mui/material';
import { 
    Light, 
    Dark, 
    Bars,
    Home,
    About,
    Services,
    Projects,
    Contect,
    Gmail as GmailIcon 
} from '../../assets/icons'; 
import {
    Logo,
    LogoWhite
} from './../../assets/images';

import { Contact, Gmail } from '../modals';
import { NavLink, useLocation } from 'react-router-dom';

interface iNavigationBarProps {
	isDarkMode: boolean;
	toggleColorMode: () => void;
}

const NavigationBar = ({ isDarkMode, toggleColorMode }: iNavigationBarProps) => {

  	const [isOpenContact, setIsOpenContact] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    const openContact = () => setOpen(true);
    const closeContact = () => setOpen(false);
    const [isOpenGmailModal, setIsOpenGmailModal] = React.useState(false);
    const openGmailModal = () => setIsOpenGmailModal(true);
    const closeGmailModal = () => setIsOpenGmailModal(false);


  	const toggleContact = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
		event &&
		event.type === 'keydown' &&
		((event as React.KeyboardEvent).key === 'Tab' ||
			(event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    };
    setIsOpenContact(open);
};

const location = useLocation();
const navItems = [
    { 
		name: 'Home', 
		path: '',
        icon: <Home className='w-5 h-5 object-scale-down text-sky-500'/>
	},
    { 
		name: 'about', 
		path: 'about',
        icon: <About className='w-5 h-5 object-scale-down text-sky-500'/> 
	},
    { 
		name: 'experiences', 
		path: 'experiences',
        icon: <Services className='w-5 h-5 object-scale-down text-sky-500'/>
    },
    { 
        name: 'Projects', 
        path: 'projects',
        icon:  <Projects className='w-5 h-5 object-scale-down text-sky-500'/>
    }, 
    { 
        name: 'contect', 
        path: 'contect',
        icon:  <Projects className='w-5 h-5 object-scale-down text-sky-500'/>
    }, 
  ];

const drawerList = () => (
    <Box
        sx={{ 
            width: 250,
        }}
        role="presentation"
        onClick={toggleContact(false)}
        onKeyDown={toggleContact(false)}>
        <div 
            className="px-3 py-4  space-y-3 ">
          
            <ButtonGroup 
                variant="outlined" 
                aria-label="Basic button group"
                sx={{
                    width: '100%'
                }}>
                <Button
                    onClick={openGmailModal}
                    sx={{
                        borderColor: isDarkMode? '' : '#424242',
                        color: isDarkMode? '' : '#424242',
                        backgroundColor: isDarkMode? '' : '#e0e0e0',
                        width: '100%',
                        paddingY:0.5
                    }}>
                    <GmailIcon 
                        className={`w-5 h-6 object-scale-down ${isDarkMode? '': 'text-black '}` }
                    />
                </Button>
                <Button
                    onClick={openContact}
                    sx={{
                        borderColor: isDarkMode? '' : '#424242',
                        color: isDarkMode? '' : '#424242',
                        backgroundColor: isDarkMode? '' : '#e0e0e0',
                        width: '100%',
                        paddingY:0.5
                    }}>
                    <Contect 
                        className={`w-6 h-7 object-scale-down ${isDarkMode? '': 'text-black '}` }
                    />
                </Button>
                <Button
                    sx={{
                        borderColor: isDarkMode? '' : '#424242',
                        color: isDarkMode? '' : '#424242',
                        backgroundColor: isDarkMode? '' : '#e0e0e0',
                        width: '100%',
                        paddingY:0.5
                    }}
                    onClick={toggleColorMode}>
                    {isDarkMode ? (
                            <Light className={`w-6 h-6 object-scale-down ${isDarkMode? '' : 'text-black'}`} />
                        ) : (
                            <Dark className={`w-6 h-6 object-scale-down ${isDarkMode? '' : 'text-black'}`}/>
                        )
                    }
                </Button>
            </ButtonGroup>
            <Divider
                sx={{
                    borderColor: isDarkMode ? 'white' : '#82aaff', 
                    borderBottomWidth: '2px', 
                }}
            />
            <div>
                {navItems.map((item, index) => {
                const isActive = location.pathname === item.path;
                return (
                    <NavLink to={item.path} key={index}>
                        <span
                            className={`
                                flex items-center gap-x-4 px-4 py-2 rounded-xl mb-2 transition-all duration-200 cursor-pointer
                                ${isActive 
                                    ? 'bg-[#82aaff]/20 border border-sky-500 text-blue-500 shadow-sm' 
                                    : isDarkMode 
                                        ? 'hover:bg-[#2c2c2c] text-[#E0E0E0]' 
                                        : 'hover:bg-gray-200 text-black'
                                }
                            `}>
                            <span 
                                className={` ${isActive ? 'text-sky-500' : isDarkMode ? 'text-sky-500' : 'text-black'}`}>
                                {item.icon}
                            </span>
                            <span 
                                className="capitalize tracking-wide font-medium">
                                {item.name}
                            </span>
                        </span>
                    </NavLink>
                );
            })}
            </div>
        </div>
    </Box>
);

    return (
        <nav 
            className={`w-full h-[10vh] flex justify-between items-center px-3 sm:px-6 ${isDarkMode ? 'bg-inherit' : 'bg-inherit'}`}>
            <div>
                <img 
                    src={isDarkMode ? LogoWhite : Logo} 
                    alt="Logo" 
                    className='sm:w-26 sm:h-26 w-30 h-16 object-scale-down' 
                />
            </div>
            <ul 
                className={`md:flex gap-x-8 lg:gap-x-14 px-3 py-2.5 md:py-2 rounded-xl shadow-lg hidden ${isDarkMode ? 'bg-[#1E1E1E] text-[#E0E0E0] shadow-sm shadow-[#82aaff]' : 'bg-gray-300'}`}>
                {navItems.map((item, index) => {
                    const isActive = location.pathname === `/${item.path}`;
                    return (
                    <li 
                        key={index} 
                        className="relative font-semibold cursor-pointer group capitalize">
                        <NavLink
                            to={item.path}
                            className={`tracking-wider ${isActive ? 'text-sky-500' : ''} text-sm-clamp`}>
                            {item.name}
                            <span 
                                className={`absolute left-1/2 bottom-0 h-[2px] bg-current transform -translate-x-1/2 transition-all duration-200 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}>
                            </span>
                        </NavLink>
                    </li>
                    );
                })}
            </ul>
            <div  
                className={`md:flex hidden `}>
                <Tooltip
                    title="Contact"
                    enterDelay={1500}
                    slotProps={{
                        popper: {
                            modifiers: [
                                {
                                    name: 'offset',
                                    options: {
                                        offset: [0, -14],
                                    },
                                },
                            ],
                        },
                    }}>
                    <IconButton
                        aria-label="toggle dark mode"
                        size="large"
                        onClick={openContact}
                        className=" rounded-full">
                        <Contect className={`lg:w-8 md:h-8 w-7 h-7 ${isDarkMode? 'text-[#82aaff]' : 'text-black'}`}/>
                    </IconButton>
                </Tooltip>
                <Tooltip 
                    title={isDarkMode ? 'Light Mode' : 'Dark Mode'} 
                    enterDelay={1500}
                    slotProps={{
                        popper: {
                          modifiers: [
                            {
                              name: 'offset',
                              options: {
                                offset: [0, -14],
                              },
                            },
                          ],
                        },
                    }}>
                    <IconButton
                        aria-label="toggle dark mode"
                        size="large"
                        onClick={toggleColorMode}
                        className="rounded-full p-1 md:p-3">
                        {isDarkMode ? (
                            <Light className="text-yellow-400 lg:w-8 lg:h-8 w-7 h-7" />
                        ) : (
                            <Dark className="text-sky-500 lg:w-8 lg:h-8 w-7 h-7" />
                        )}
                    </IconButton>
                </Tooltip>  
            </div>
            <div 
                className='md:hidden'>
                <IconButton 
                    onClick={toggleContact(true)}>
                    <Bars 
                        className={isDarkMode? 'text-white text-2xl' : 'text-black text-2xl'}
                    />
                </IconButton>
                <SwipeableDrawer
                    anchor="right"
                    open={isOpenContact}
                    onClose={toggleContact(false)}
                    onOpen={toggleContact(true)}
                    PaperProps={{
                        sx: {
                            borderTopLeftRadius: 15,
                            borderBottomLeftRadius: 15,
                            borderTopRightRadius: 15,
                            borderBottomRightRadius: 15,
                            overflow: 'hidden',
                            margin: 0.5,
                            backgroundColor: isDarkMode? '#212121' : 'white'
                        },
                    }}>
                    {drawerList()}
                </SwipeableDrawer>
            </div>
            <Modal
                keepMounted
                open={open}
                onClose={closeContact}
                aria-labelledby="keep-mounted-modal-title"
                aria-describedby="keep-mounted-modal-description"
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                <Box
                    className="animate__animated animate__fadeInDown"
                    sx={{
                    animationDuration: '0.6s',
                    bgcolor: isDarkMode ? '#1E1E1E' : 'white',
                    color: isDarkMode ? '#E0E0E0' : 'black',
                    borderRadius: 3,
                    boxShadow: 24,
                    p: 2,
                    minWidth: 500,
                    maxWidth: '90%',
                    }}>
                    <Contact 
                        CloseContact={closeContact}
                        isDarkMode={isDarkMode} 
                    />
                </Box>
            </Modal>

            <Modal
                keepMounted
                open={isOpenGmailModal}
                onClose={closeGmailModal}
                aria-labelledby="gmail-modal-title"
                aria-describedby="gmail-modal-description">
                <Box
                    sx={{
                        position: 'absolute' as const,
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        bgcolor: isDarkMode ? '#1E1E1E' : 'white',
                        color: isDarkMode ? '#E0E0E0' : 'black',
                        borderRadius: 3,
                        boxShadow: 24,
                        p: 2,
                        minWidth: 500,
                        maxWidth: '90%',
                    }}>
                    <Gmail CloseGmail={closeGmailModal} />
                </Box>
            </Modal>
        </nav>
    );
};

export default NavigationBar;
