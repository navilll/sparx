import LayoutWrapper from "../LayoutWrapper";
import PageTitle from "../../components/PageTitle";

export const metadata = { title: "Privacy Policy | SPARZ TELECOM" };

export default function PrivacyPolicyPage() {
  return <LayoutWrapper HeaderStyle="two"><PageTitle pageName="Privacy Policy" /><main className="legal-page"><div className="auto-container"><span className="shop-kicker">SPARZ TELECOM</span><h1 style={{ fontSize:"90px"}}>Privacy Policy</h1><p>SPARZ TELECOM respects your privacy and uses information shared through this website only to respond to enquiries, provide product guidance, and support business communication requirements.</p><h2>Information we collect</h2><p>When you contact us, we may receive your name, email address, phone number, company details, and the requirements you choose to share.</p><h2>How we use information</h2><p>We use enquiry information to respond to your request, prepare relevant product recommendations, coordinate communication, and improve our service. We do not sell your personal information.</p><h2>Contact</h2><p>For privacy questions, contact <a href="mailto:rishika@sparz.co.in">rishika@sparz.co.in</a> or call <a href="tel:+917996167000">+91-7996167000</a>.</p></div></main></LayoutWrapper>;
}
