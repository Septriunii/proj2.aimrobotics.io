import { lazy } from "react";

// const SummaryPage = lazy(() => import("./components/SummaryPage"));

const Navbar = lazy(() => import("./Navbar"));
const Billing = lazy(() => import("./Billing"));
const CardDeal = lazy(() => import("./CardDeal"));
const Business = lazy(() => import("./Business"));
const CTA = lazy(() => import("./CTA"));
const Stats = lazy(() => import("./Stats"));
const Footer = lazy(() => import("./Footer"));
const Testimonials = lazy(() => import("./Testimonials"));

import Hero from "./Hero";

export {
  Navbar,
  Billing,
  CardDeal,
  Business,
  CTA,
  Stats,
  Footer,
  Testimonials,
  Hero,
};
