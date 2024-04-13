import wrapImgDesk from "/src/assets/wrap-hero-homepage.svg";
import wrapImgMob from "/src/assets/wrap-hero-homepage-mobile.svg";

const Wrap = () => {
  return (
    <div className=" w-[95%]  max-w-full border-2 bg-bgdark text-white border-white dark:border-white rounded-lg m-auto dark:text-white flex max-tablet:max-w-[500px] max-tablet:flex-col min-h-[407px]">
      <div className="flex flex-col px-6 pb-6 pt-8 tablet:w-1/2 p-10">
        <p className="tablet:text-[62px] text-[30px] tablet:leading-[64px] tablet:tracking-[-2.5px] mb-[1rem] font-normal w-[85%]">
          That's a wrap on Build With AI 2024
        </p>
        <div className="flex flex-col justify-between flex-1 gap-4">
          <p className="tablet:text-[20px] tablet:leading-[28px] font-normal">
            Catch up on announcements, deep-dives, and anything you may have
            missed.
          </p>
          <a
            href="https://gdg.community.dev/events/details/google-gdg-cloud-lahore-presents-build-with-ai-lahore/"
            target="_blank"
            className="w-fit"
          >
            <button className="bg-blue-500 text-[20px] leading-[24px] hover:bg-blue-700  dark:text-white p-3 px-4 border-2 border-transparent hover:text-black hover:border-black dark:hover:border-white  rounded-xl">
              Watch the recaps
            </button>
          </a>
        </div>
      </div>
      <div className="max-tablet:pl-5">
        <img
          src={wrapImgDesk}
          alt="wrap image"
          className="object-cover h-full w-full max-tablet:hidden"
        />
        <img
          src={wrapImgMob}
          alt="wrap image"
          className="object-cover h-full w-full tablet:hidden"
        />
      </div>
    </div>
  );
};

export default Wrap;
