import Link from "next/link";
import LayoutWrapper from "../../LayoutWrapper";
import PageTitle from "../../../components/PageTitle";
import EnquiryModal from "../../../components/EnquiryModal";
import { getLocation, locations } from "../../../lib/locations";

export function generateStaticParams() {
  return locations.map((location) => ({ slug: location.slug }));
}

export default async function LocationDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const location = getLocation(slug);

  return (
    <LayoutWrapper HeaderStyle="two">
      <PageTitle pageName={location.name} />
      <main className="location-detail-page">
        <div className="auto-container">
          <div className="location-detail-grid">
            <section className="location-detail-copy">
              <span className="shop-kicker">SPARZ TELECOM · {location.state}</span>
              <h1>Business communication support in {location.name}</h1>
              <p>{location.description}</p>
              <div className="location-actions"><Link href="/products" className="enquiry-trigger">Explore products <i className="fa fa-arrow-right" /></Link><EnquiryModal productName={`${location.name} location enquiry`} /></div>
            </section>
            <aside className="location-contact-panel">
              <h2>Contact SPARZ {location.name}</h2>
              <div className="location-contact-item"><i className="fa fa-map-marker" /><span>{location.address}</span></div>
              <div className="location-contact-item"><i className="fa fa-phone" /><Link href={`tel:${location.phone}`}>{location.phone}</Link></div>
              <div className="location-contact-item"><i className="fa fa-envelope" /><Link href={`mailto:${location.email}`}>{location.email}</Link></div>
            </aside>
          </div>
          <section className="location-services"><span className="shop-kicker">How we help</span><h2>Solutions for local teams</h2><div className="location-services-grid">{location.services.map((service) => <div className="location-service" key={service}><i className="fa fa-check-circle" /><span>{service}</span></div>)}</div></section>
        </div>
      </main>
    </LayoutWrapper>
  );
}
