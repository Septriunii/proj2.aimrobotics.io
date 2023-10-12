import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";
import "react-lazy-load-image-component/src/effects/blur.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <LazyLoadImage
        src={bill}
        alt="billing"
        className="w-[100%] h-[100%] relative z-[5]"
        effect="blur"
      />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Embrace the Future with Cutting-Edge Prosthetic Solutions.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Our advanced prosthetic solutions redefine possibilities and transform
        lives. From robotic arms to hands, feet, and eyes, our products offer
        groundbreaking options. With a commitment to innovation, our prosthetics
        seamlessly integrate cutting-edge technology with the human body,
        enhancing mobility, dexterity, and sensory capabilities.
      </p>
    </div>
  </section>
);

export default Billing;
