import { Carousel } from "@material-tailwind/react";
import items from "./items";

const OurCarousel = () => {
    return (
        <div id="content" className='mx-2 w-11/12 p-2 flex flex-col items-center justify-center'>
            <div className='w-full lg:w-4/5 flex flex-col items-center gap-4'>
                <div className='text-4xl font-bold'>Meet Our Speakers</div>
                <Carousel loop={true} placeholder={<div>Loading...</div>}>
                    {items.map((item, index) => {
                        return (
                            <div className={`${item.color} rounded-3xl text-white border-2 border-transparent hover:border-black dark:hover:border-white h-full w-full flex flex-col items-center justify-center gap-5 p-12`}
                                key={index} >
                                <img
                                    src={item.img}
                                    alt={`image ${index + 1}`}
                                    className="object-cover w-32 h-32 rounded-full border-4"
                                />
                                <div className="text-3xl font-bold">{item.name}</div>
                                <div>{item.bio}</div>
                            </div>
                        )
                    })}
                </Carousel>
            </div>
        </div>
    );
}

export default OurCarousel;
