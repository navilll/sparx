"use client";

import { FormEvent, useState } from "react";
import { createPortal } from "react-dom";

export default function EnquiryModal({ productName }: { productName?: string }) {
  const [open, setOpen] = useState(false);

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setOpen(false);
  };

  return (
    <>
      <button type="button" className="enquiry-trigger" onClick={() => setOpen(true)}>
        Enquire now <i className="fa fa-arrow-right" />
      </button>
      {open && typeof document !== "undefined" && createPortal(
        <div className="enquiry-overlay" role="dialog" aria-modal="true" aria-label="Product enquiry" onMouseDown={(event) => { if (event.target === event.currentTarget) setOpen(false); }}>
          <div className="enquiry-modal">
            <button type="button" className="enquiry-close" onClick={() => setOpen(false)} aria-label="Close enquiry form">×</button>
            <span className="shop-kicker">SPARZ TELECOM</span>
            <h2>Send an enquiry</h2>
            <p>Tell us what you need and our team will get back to you.</p>
            <form onSubmit={submit}>
              <input type="hidden" name="product" value={productName ?? "Product enquiry"} />
              <div className="enquiry-form-grid">
                <label>Full name<input required name="name" placeholder="Your name" /></label>
                <label>Email address<input required type="email" name="email" placeholder="you@example.com" /></label>
                <label>Phone number<input required name="phone" placeholder="Your phone number" /></label>
                <label>Company<input name="company" placeholder="Company name" /></label>
              </div>
              <label>Message<textarea required name="message" rows={4} placeholder={`Tell us about your requirement for ${productName ?? "this product"}`} /></label>
              <button type="submit" className="enquiry-submit">Send enquiry</button>
            </form>
          </div>
        </div>,
        document.body,
      )}
    </>
  );
}
