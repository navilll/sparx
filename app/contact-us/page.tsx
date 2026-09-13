import React from "react";
import { SITE_NAME } from "../Head";
import LayoutWrapper from "../LayoutWrapper";
import PageTitle from "../../components/PageTitle";
import ContactInner from "../../section/contact/ContactInner";

export const metadata = {
  title: `Contact SPARZ TELECOM | ${SITE_NAME}`,
  description: "Contact SPARZ TELECOM for analog phones and business communication solutions.",
};

export default function ContactUsPage() {
  return <LayoutWrapper HeaderStyle="two"><PageTitle pageName="Contact Us" /><ContactInner /></LayoutWrapper>;
}
