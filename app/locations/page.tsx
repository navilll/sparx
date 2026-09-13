import Link from "next/link";
import LayoutWrapper from "../LayoutWrapper";
import PageTitle from "../../components/PageTitle";
import { locations } from "../../lib/locations";

export const metadata = {
  title: "Locations | SPARZ TELECOM",
  description: "Explore SPARZ TELECOM business communication support locations across India.",
};

export default function LocationsPage() {
  return (
    <LayoutWrapper HeaderStyle="two">
      <PageTitle pageName="Locations" />
      <main className="locations-page">
        <div className="auto-container">
          <div className="locations-intro">
            <span className="shop-kicker">SPARZ TELECOM INDIA</span>
            <h2>Communication support where your business works</h2>
            <p>Choose your location to learn about the products and support available for your organization.</p>
          </div>
          <div className="locations-grid">
            {locations.map((location) => (
              <article className="location-card" key={location.slug}>
                <span className="location-pin"><i className="fa fa-map-marker" /></span>
                <span className="location-state">{location.state}</span>
                <h3>{location.name}</h3>
                <p>{location.shortDescription}</p>
                <Link href={`/locations/${location.slug}`} className="location-link">View location <i className="fa fa-arrow-right" /></Link>
              </article>
            ))}
          </div>
        </div>
      </main>
    </LayoutWrapper>
  );
}
