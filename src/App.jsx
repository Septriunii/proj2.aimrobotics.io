import styles from "./style";
import {
  Billing,
  Business,
  CardDeal,
  CTA,
  Footer,
  Navbar,
  Stats,
  Testimonials,
  Hero,
} from "./components";
import { Suspense } from "react";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter} z-50`}>
      <div className={`${styles.boxWidth} z-50`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary z-50 ${styles.flexStart}`}>
      <div className={`${styles.boxWidth} z-10`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Suspense fallback={null}>
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <CTA />
          <Footer />
        </Suspense>
      </div>
    </div>
  </div>
);

export default App;
