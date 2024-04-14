import { useEffect, useState } from "react";
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
                    <div className=""><a href="/"> Build With AI 2024</a></div>
                </div>
                </div>
        </nav>
    )
}
export default Navbar
