import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";
import bg from "../assets/bg.png";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY} lg:-mt-20 z-50    `}
    >
      <img
        src={bg}
        alt=""
        className="absolute w-full top-0 opacity-20 transform scale-y-[-1] right-0 -z-10"
      />
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            The Next <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Generation</span> of{" "}
          </h1>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full flex md:flex-row flex-col">
          <span>Cyber</span>
          <span>Prosthetics</span>
        </h1>
        <div className="flex">
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            We are at the forefront of making the future a reality. By
            harnessing the latest breakthroughs in robotics, artificial
            intelligence, and bioengineering, we are pushing the boundaries of
            what cybernetic prosthetics can achieve.
          </p>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>
      </div>

      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <img
          src={robot}
          alt="billing"
          className="w-[100%] h-[100%] relative z-[5]"
        />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
