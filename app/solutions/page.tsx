import Link from "next/link";
import LayoutWrapper from "../LayoutWrapper";
import PageTitle from "../../components/PageTitle";
import { solutions } from "../../lib/solutions";

export const metadata = {
  title: "Solutions | SPARZ TELECOM",
  description: "Business communication solutions from SPARZ TELECOM for offices, hotels, hospitals, and schools.",
};

export default function SolutionsPage() {
  return (
    <LayoutWrapper HeaderStyle="two">
      <PageTitle pageName="Solutions" />
      <main className="solutions-page">
        <div className="auto-container">
          <section className="solutions-hero">
            <span className="shop-kicker">COMMUNICATION FOR EVERY WORKPLACE</span>
            <h2>Practical phone solutions for the way your team works</h2>
            <p>From a busy reception desk to a hotel room or hospital station, SPARZ helps organizations choose reliable analog phones that are easy to use and built for everyday communication.</p>
            <Link href="/products" className="enquiry-trigger">Explore products <i className="fa fa-arrow-right" /></Link>
          </section>
          <section className="solutions-grid" aria-label="SPARZ solutions">
            {solutions.map((solution, index) => (
              <article className="solution-card" key={solution.title}>
                <span className="solution-number">0{index + 1}</span>
                <span className="shop-kicker">{solution.eyebrow}</span>
                <h3>{solution.title}</h3>
                <p>{solution.description}</p>
                <ul>{solution.features.map((feature) => <li key={feature}><i className="fa fa-check" />{feature}</li>)}</ul>
                <Link href="/contact" className="solution-link">Discuss your requirement <i className="fa fa-arrow-right" /></Link>
              </article>
            ))}
          </section>
          <section className="solutions-detail-list">
            {solutions.map((solution) => (
              <article className="solution-detail" key={`${solution.title}-detail`}>
                <div className="solution-detail-heading"><span className="shop-kicker">{solution.eyebrow}</span><h2>{solution.title}</h2><p>{solution.overview}</p></div>
                <div className="solution-detail-columns">
                  <div><h3>Ideal for</h3><ul>{solution.idealFor.map((item) => <li key={item}><i className="fa fa-check" />{item}</li>)}</ul></div>
                  <div><h3>Recommended product approach</h3><ul>{solution.recommended.map((item) => <li key={item}><i className="fa fa-phone" />{item}</li>)}</ul></div>
                  <div><h3>Business benefits</h3><ul>{solution.benefits.map((item) => <li key={item}><i className="fa fa-star" />{item}</li>)}</ul></div>
                  <div><h3>How we help</h3><ol>{solution.steps.map((item) => <li key={item}>{item}</li>)}</ol></div>
                </div>
                <div className="solution-faqs"><h3>Common questions</h3>{solution.faqs.map((faq) => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}</div>
              </article>
            ))}
          </section>
        </div>
      </main>
    </LayoutWrapper>
  );
}
