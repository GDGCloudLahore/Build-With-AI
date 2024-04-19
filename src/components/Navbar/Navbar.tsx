import { useEffect, useState } from "react";
import GDGlogo from "../../assets/121637837.png"

const Navbar = () => {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
        const isVisible = prevScrollPos > currentScrollPos;

        setPrevScrollPos(currentScrollPos);
        setVisible(isVisible);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos]);

    return (
        <nav className={`p-3 py-6 border-b-2 dark:border-white border-black lg:p-6 w-full shadow-md sticky z-50 bg-bglight dark:bg-bgdark  ${visible ? 'top-0' : '-top-24'} transition-all duration-500 ease-in-out`}>
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                    {/* Logo can be an image or SVG */}
                    <img src={GDGlogo} className="w-8 h-8 dark:mix-blend-normal rounded-full"  alt="Logo"/> GDG Cloud Lahore | 
                    <a href="/" className="text-lg font-bold">Build With AI 2024</a>
                </div>
                {/* Start Gemini Lab Button */}
                <a href="https://github.com/GDGCloudLahore/Build-With-AI-Labs" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300">
                    Start Gemini Lab
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
