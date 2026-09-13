import Link from "next/link";
import LayoutWrapper from "../../LayoutWrapper";
import EnquiryModal from "../../../components/EnquiryModal";
import ProductGallery from "../../../components/ProductGallery";
import ProductDetailTabs from "../../../components/ProductDetailTabs";
import { getProduct, products } from "../../../lib/products";

export function generateStaticParams() {
  return products.map((product) => ({ id: product.id }));
}

export default async function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = getProduct(id);

  return (
    <LayoutWrapper HeaderStyle="two">
      <main className="product-detail-page" style={{ marginTop: "120px" }}>
        <div className="auto-container">
          <div className="detail-top">
            <ProductGallery name={product.name} images={product.images ?? [product.image]} />
            <div className="detail-summary">
              <span className="product-category">{product.category}</span>
              <h1>{product.name}</h1>
              <div className="detail-rating"><span>★★★★★</span> <b>{product.rating}</b> <Link href="#reviews">Customer reviews</Link></div>
              <p>{product.description}</p>
              <div className="detail-meta"><span><i className="fa fa-check-circle" /> Available for enquiry</span><span><i className="fa fa-truck" /> Delivery across India</span></div>
              <div className="detail-specs-summary"><h2>Specifications</h2><ul>{product.specs.map((spec) => <li key={spec}><i className="fa fa-check" />{spec}</li>)}</ul></div>
              <div className="product-actions">
                <EnquiryModal productName={product.name} />
                {product.datasheet && <a className="detail-datasheet" href={product.datasheet} target="_blank" rel="noreferrer">Download data sheet <i className="fa-regular fa-file-pdf" /></a>}
              </div>
              <div className="secure-note"><i className="fa fa-shield" /> Our team will help with product selection, quantity, and delivery.</div>
            </div>
          </div>
          <ProductDetailTabs description={product.description} specs={product.specs} />
          <section className="detail-enquiry-section"><div><span className="shop-kicker">Need help choosing?</span><h2>Ask SPARZ about this product</h2></div><EnquiryModal productName={product.name} /></section>
        </div>
      </main>
    </LayoutWrapper>
  );
}
