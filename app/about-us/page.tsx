import React from "react";
import { SITE_NAME } from "../Head";
import LayoutWrapper from "../LayoutWrapper";
import PageTitle from "../../components/PageTitle";
import Faqs from "../../section/home1/Faqs";
import Pricing from "../../section/home1/Pricing";
import Project2 from "../../section/home1/Project2";
import HzAccordion from "../../section/home1/HzAccordion";

export const metadata = {
  title: `About SPARZ TELECOM | ${SITE_NAME}`,
  description: "Learn about SPARZ TELECOM and our reliable analog telephone and business communication solutions.",
};

export default function AboutUsPage() {
  return <LayoutWrapper HeaderStyle="two"><PageTitle pageName="About Us" /><Pricing /><Project2 /><HzAccordion /><Faqs /></LayoutWrapper>;
}
