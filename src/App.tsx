import { Route, Routes, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Home, About, Projects, Experiences, Contect } from "./pages";
import NavigationBar from "./components/layouts/navigation-bar";
import { Particles } from "./components/animations";
import { ErrorBoundary } from "./error-boundary";
import { Loading } from "./components/ui";
import { HelmetProvider } from 'react-helmet-async';

function App() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [loading, setLoading] = useState(true);
    const location = useLocation();

    const toggleColorMode = (): void => {
        setIsDarkMode(!isDarkMode);
    };

    useEffect(() => {
        const handleLoad = () => {
            setTimeout(() => {
                setLoading(false);
            }, 500);
        };

        if (document.readyState === "complete") {
            handleLoad();
        } else {
            window.addEventListener("load", handleLoad);
            return () => window.removeEventListener("load", handleLoad);
        }
    }, []);
    useEffect(() => {
        const path = location.pathname;
        const titleMap: Record<string, string> = {
            "/": "Home | VATNA",
            "/about": "About | VATNA",
            "/experiences": "Experiences | VATNA",
            "/projects": "Projects | VATNA",
            "/contect": "Contact | VATNA",
        };

        document.title = titleMap[path] || "VATNA";
    }, [location.pathname]);

    if (loading) {
        return (
            <div className="flex items-center justify-center flex-col h-screen gap-y-4">
                <Loading />
                <h2 className="text-lg-clamp text-center text-sky-800 uppercase font-bold tracking-wider">
                    Loading...
                </h2>
            </div>
        );
    }

    return (
         <HelmetProvider>
            <ErrorBoundary>
            <div className={`${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'} relative min-h-screen w-full`}>
                <div className="absolute inset-0 z-0 w-full h-full">
                    <Particles
                        particleColors={['#ffffff']}
                        particleCount={200}
                        particleSpread={10}
                        speed={0.1}
                        particleBaseSize={100}
                        moveParticlesOnHover={true}
                        alphaParticles={false}
                        disableRotation={false}
                        className="w-full h-full"
                    />
                </div>

                <div className="relative z-10 w-full min-h-screen flex flex-col">
                    <div className={`w-full z-20 sticky top-0 ${isDarkMode ? 'backdrop-blur-md bg-black/30' : 'backdrop-blur-md bg-white/30'}`}>
                        <NavigationBar
                            isDarkMode={isDarkMode}
                            toggleColorMode={toggleColorMode}
                        />
                    </div>
                    <Routes>
                        <Route path="/" element={<Home isDarkMode={isDarkMode} />} />
                        <Route path="/about" element={<About isDarkMode={isDarkMode} />} />
                        <Route path="/experiences" element={<Experiences isDarkMode={isDarkMode} />} />
                        <Route path="/projects" element={<Projects isDarkMode={isDarkMode} />} />
                        <Route path="/contect" element={<Contect isDarkMode={isDarkMode} />} />
                    </Routes>
                </div>
            </div>
        </ErrorBoundary>
         </HelmetProvider>
        
    );
}

export default App;
