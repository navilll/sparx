"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import LayoutWrapper from "../LayoutWrapper";
import PageTitle from "../../components/PageTitle";
import EnquiryModal from "../../components/EnquiryModal";
import { products } from "../../lib/products";

export default function ProductsPage() {
  const [query, setQuery] = useState("");
  const filteredProducts = useMemo(() => products.filter((product) => `${product.name} ${product.category}`.toLowerCase().includes(query.toLowerCase())), [query]);

  return (
    <LayoutWrapper HeaderStyle="two">
      <PageTitle pageName="Shop" />
      <main className="shop-page">
        <div className="auto-container">
          <div className="shop-toolbar">
            <div><span className="shop-kicker">SPARZ TELECOM</span><h2>Find the right phone for your business</h2></div>
            <label className="product-search"><i className="fa fa-search" /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search products" aria-label="Search products" /></label>
          </div>
          <section className="product-results" aria-label="Product results"><div className="results-heading"><span>Showing <b>{filteredProducts.length}</b> of {products.length} products</span></div><div className="product-grid">{filteredProducts.map((product) => <article className="product-card" key={product.id}><Link className="product-card-link" href={`/product/${product.id}`}><div className="product-image">{product.badge && <span className="product-badge">{product.badge}</span>}<Image src={product.image} alt={product.name} width={540} height={400} /></div><div className="product-card-content"><span className="product-category">{product.category}</span><h3>{product.name}</h3><div className="product-rating"><span>{"★".repeat(Math.round(product.rating))}</span> <small>{product.rating}</small></div></div></Link><div className="product-card-action"><EnquiryModal productName={product.name} /></div></article>)}</div></section>
        </div>
      </main>
    </LayoutWrapper>
  );
}
