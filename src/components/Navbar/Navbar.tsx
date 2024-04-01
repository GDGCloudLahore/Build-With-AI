import { useEffect, useState } from "react";
import GDGLogo from "../../assets/gdglogo.jpg"
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
        <nav className={`p-3 py-6 border-b-2 dark:border-white border-black lg:p-6 w-full shadow-md sticky   z-50 bg-bglight dark:bg-bgdark  ${visible ? 'top-0' : '-top-24'} transition-all  duration-500 ease-in-out`}>
            <div className="flex justify-between">
                <div className="flex  items-center gap-2">

                    {/* <a href="/" ><img src="/src/assets/gdglogo.jpg" className="h-10  rounded-xl" /></a> */}
                    <a href="/" ><img src={GDGLogo} className="h-10  rounded-xl" /></a>
                    <div className=""><a href="/"> Google I/O Extended </a></div>
                </div>
                <div>
                    <button className="px-4 p-2 rounded-xl dark:hover:border-white border-2 border-transparent hover:border-black hover:text-black dark:hover:text-white  hover:bg-gdggreen-600 dark:hover:bg-gdggreen-600 text-white dark:bg-gdggreen-500 bg-gdggreen-500">
                        <a href="https://forms.gle/yhJmmZiqU4F8bhqD9">Register Now !</a>
                    </button>
                </div>
            </div>
        </nav>
    )
}
export default Navbar