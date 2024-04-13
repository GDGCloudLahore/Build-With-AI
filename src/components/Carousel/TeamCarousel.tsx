import { Carousel } from "@material-tailwind/react";
import team from "./team";
import { FaLinkedin } from "react-icons/fa";

const TeamCarousel = () => {
    return (
        <div id="content" className='mx-2 w-11/12 p-2 flex flex-col items-center justify-center'>
            <div className='w-full lg:w-4/5 flex flex-col items-center gap-4'>
                <div className='text-4xl font-bold'>Meet Our Team</div>
                <Carousel loop={true} placeholder={<div>Loading...</div>}>
                    {team.map((member, index) => {
                        return (
                            // <div className={`${member.color} rounded-3xl text-white border-2 border-transparent hover:border-black dark:hover:border-white h-full w-full flex flex-col items-center justify-center gap-5 p-12`}
                            //     key={index} >
                            //     <img
                            //         src={member.img}
                            //         alt={`image ${index + 1}`}
                            //         className="object-cover w-32 h-32 rounded-full border-4"
                            //     />
                            //     <div className="text-3xl font-bold">{member.name}</div>
                            //     <a href="" className="hover:text-gray-500 dark:hover:text-gray-500"><FaLinkedin size={32} /></a>
                            //     <div>{member.bio}</div>
                            // </div>
                            <div className={`${member.color} rounded-3xl text-white border-2 border-transparent hover:border-black dark:hover:border-white h-full w-full flex flex-col items-center justify-center gap-5 p-12`} key={index}>
                            <img
                              src={member.img}
                              alt={`image ${index + 1}`}
                              className="object-cover w-32 h-32 rounded-full border-4"
                            />
                            <div className="flex items-center gap-3"> {/* Using flex container for name and logo */}
                              <div className="text-3xl font-bold">{member.name}</div>
                              <a href={member.linkedin} target="_blank" className="hover:text-gray-500 dark:hover:text-gray-500"><FaLinkedin size={32} /></a>
                            </div>
                            <div>{member.bio}</div>
                          </div>                          
                        )
                    })}
                </Carousel>
            </div>
        </div>
    );
}

export default TeamCarousel;
