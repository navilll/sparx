import LayoutWrapper from "../LayoutWrapper";
import PageTitle from "../../components/PageTitle";

export const metadata = { title: "Terms & Conditions | SPARZ TELECOM" };

export default function TermsAndConditionsPage() {
  return <LayoutWrapper HeaderStyle="two"><PageTitle pageName="Terms & Conditions" /><main className="legal-page"><div className="auto-container"><span className="shop-kicker">SPARZ TELECOM</span><h1>Terms &amp; Conditions</h1><p>By using this website, you agree to use the information and enquiry services responsibly and for legitimate business or personal communication requirements.</p><h2>Product information</h2><p>Product descriptions, specifications, image availability, and datasheets are provided for guidance. Please confirm model suitability, availability, and requirements with our team before placing a business enquiry.</p><h2>Enquiries</h2><p>Submitting an enquiry does not create a purchase contract. Our team will confirm product details, quantities, delivery expectations, and any applicable commercial terms separately.</p><h2>Website use</h2><p>Content on this website may not be copied, misused, or used to impersonate SPARZ TELECOM. We may update product information and website content when required.</p><h2>Contact</h2><p>For questions about these terms, contact <a href="mailto:rishika@sparz.co.in">rishika@sparz.co.in</a>.</p></div></main></LayoutWrapper>;
}
