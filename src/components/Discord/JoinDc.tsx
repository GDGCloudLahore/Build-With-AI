import GDGLogoDeskImg from "/src/assets/connect-developers-desktop-light.svg";
import GDGLogoMobImg from "/src/assets/connect-developers-light.svg";
const JoinDc = () => {
  return (
    <div className="w-[90%] border-2 border-black dark:border-white bg-white text-gray-800 rounded-lg max-tablet:m-auto m-12  max-tablet:mt-12 flex max-tablet:max-w-[500px] max-tablet:flex-col min-h-[407px] ">
      <div className="flex flex-col px-6 pb-6 pt-8 tablet:w-1/2 p-10">
        <p className="tablet:text-[62px] text-[30px] tablet:leading-[64px] tablet:tracking-[-2.5px] mb-[1rem] font-normal w-[85%]">
          Connect with developers
        </p>
        <div className="flex flex-col justify-between flex-1 gap-4">
          <p className="tablet:text-[20px] tablet:leading-[28px] font-normal">
            Join our dicord community server for networking, meetups,
            collaboration, and more.
          </p>
          <a
            href="https://discord.com/invite/BtNrYKAaq4"
            target="_blank"
            className="w-fit"
          >
            <button className=" text-[20px] leading-[24px] border-black border-2 hover:bg-black hover:text-white transition-all  py-2 px-4 rounded">
              Join here
            </button>
          </a>
        </div>
      </div>
      <div className="tablet:w-1/2">
        <img
          src={GDGLogoDeskImg}
          alt="wrap image"
          className="object-cover h-full w-full max-tablet:hidden"
        />
        <img
          src={GDGLogoMobImg}
          alt="wrap image"
          className="object-cover h-full w-full tablet:hidden"
        />
      </div>
    </div>
  );
};

export default JoinDc;
