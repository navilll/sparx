"use client";

import { useState } from "react";

type ProductDetailTabsProps = {
  description: string;
  specs: string[];
};

export default function ProductDetailTabs({ description, specs }: ProductDetailTabsProps) {
  const [activeTab, setActiveTab] = useState<"description" | "specifications" | "reviews">("description");

  return (
    <section className="detail-tabs" aria-label="Product information">
      <div className="detail-tab-nav" role="tablist" aria-label="Product information tabs">
        <button type="button" className={activeTab === "description" ? "active" : ""} onClick={() => setActiveTab("description")} role="tab" aria-selected={activeTab === "description"}>Description</button>
        <button type="button" className={activeTab === "specifications" ? "active" : ""} onClick={() => setActiveTab("specifications")} role="tab" aria-selected={activeTab === "specifications"}>Specifications</button>
        <button type="button" className={activeTab === "reviews" ? "active" : ""} onClick={() => setActiveTab("reviews")} role="tab" aria-selected={activeTab === "reviews"}>Reviews</button>
      </div>
      <div className="detail-tab-content">
        {activeTab === "description" && <div role="tabpanel"><h2>Product Description</h2><p>{description} Designed for clear, reliable communication in offices, hotels, hospitals, schools, and businesses that need technology that simply works.</p></div>}
        {activeTab === "specifications" && <div role="tabpanel"><h2>Product Specifications</h2><ul>{specs.map((spec) => <li key={spec}><i className="fa fa-check" />{spec}</li>)}</ul></div>}
        {activeTab === "reviews" && <div role="tabpanel"><h2>Customer Reviews</h2><p className="detail-review-score"><strong>★★★★★</strong> Rated {"4.8"} out of 5 by our customers.</p><p>Customers value this product for its clear audio, dependable build, and straightforward everyday operation.</p></div>}
      </div>
    </section>
  );
}
