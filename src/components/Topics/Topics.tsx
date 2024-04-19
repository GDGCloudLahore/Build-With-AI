import TopicCard from "./TopicCard";
import { topics } from "./topicsObjct";
const Topics = () => {
  return (
    <>
      <p id="digital-badge" className="ml-6 mb-6 text-[2em] font-bold max-tablet:mt-12">Get Your Build With AI Digital Badge</p>
      <div className="mb-12 max-tablet:m-auto max-tablet:my-12 flex flex-wrap gap-12 justify-center">
        {topics.map((topic, i) => (
          <TopicCard key={i} topic={topic} />
        ))}
      </div>
    </>
  );
};

export default Topics;
