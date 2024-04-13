import { useState } from "react";
const TopicCard = ({ topic }: any) => {
  const [isHovered, setIsHoverd] = useState(false);
  return (
    <a href={topic.url} target="_blank">
      <div
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
    </div>
    </a>
  );
};

export default TopicCard;
