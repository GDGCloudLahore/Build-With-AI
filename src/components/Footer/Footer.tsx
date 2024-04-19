import social_items from "./social_items"
import GDGLogo from "../../assets/gdglogo.jpg"
const Footer = () => {
    return (
        <footer id="footer" className="bottom-0 border-t border-gray-400/30 w-full p-12 lg:py-10 px-7 lg:px-16 bg-grey-900 flex flex-col lg:flex-row justify-center lg:justify-between lg:items-center w-max-full">
            <div className="flex flex-col lg:flex-row  lg:justify-between w-full items-first lg:items-center gap-12 lg:gap-2">
                <div className="flex items-center gap-4">
                    <img src="/src/assets/121637837.png" className="w-8 h-8 dark:mix-blend-normal rounded-full" />
                    GDG Cloud Lahore
                </div>
                <div className="flex gap-4 ">
                    {social_items.map((item, index) => {
                        return (
                            <div key={index}>
                                <a href={item.url} className="hover:text-gray-500 dark:hover:text-gray-500"><item.logo size={32} /></a>
                            </div>
                        )
                    })}
                </div>
            </div>
        </footer>
    )
}
export default Footer