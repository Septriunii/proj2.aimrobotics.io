import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";
import "react-lazy-load-image-component/src/effects/blur.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Dedicated specialists transforming lives with expertise.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Our exceptional team of experts drives our success in delivering
        cutting-edge prosthetic solutions. Comprised of highly skilled
        professionals, including doctors, engineers, technicians, and
        specialized experts, our diverse team is united by a shared passion for
        improving the lives of individuals with limb differences or
        disabilities.
      </p>
    </div>

    <div className={layout.sectionImg}>
      <LazyLoadImage
        effect="blur"
        src={card}
        alt="billing"
        className="w-[100%] h-[100%]"
      />
    </div>
  </section>
);

export default CardDeal;
