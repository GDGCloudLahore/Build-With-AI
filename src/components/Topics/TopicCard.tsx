// import { useState } from "react";
const TopicCard = ({ topic }: any) => {
  // const [isHovered, setIsHoverd] = useState(false);
  return (
    <a href={topic.url} target="_blank">
      {/* <p className="text-[2em] font-bold">{topic.title}</p>
      <p>{topic.disc}</p> */}
      <button type="button" className="flex items-center space-x-4 p-4 rounded-md bg-blue-500 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white" style={{ width: '300px', height: '70px' }}>
        <p className="text-2xl font-bold">{topic.title}</p>
        <p>{topic.disc}</p>
      </button>
    </a>
  );
};

export default TopicCard;


{/* <div
      onMouseEnter={() => {
        setIsHoverd(true);
      }}
      onMouseLeave={() => {
        setIsHoverd(false);
      }}
      className="text-white cursor-pointer w-[300px]"
    >
      <img
        src={isHovered ? topic.imgHvr : topic.img}
        alt={topic.title}
        className="object-cover w-full"
      />
      <p className="text-[2em] font-bold">{topic.title}</p>
      <p>{topic.disc}</p>
    </div> */}