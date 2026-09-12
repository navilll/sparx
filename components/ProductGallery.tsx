"use client";

import Image from "next/image";
import { useState } from "react";

const galleryImages = [
  "/assets/images/resource/pro-details.png",
  "/assets/images/resource/pro-details.png",
  "/assets/images/resource/pro-details.png",
];

export default function ProductGallery({ name }: { name: string }) {
  const [activeImage, setActiveImage] = useState(galleryImages[0]);

  return (
    <div className="detail-gallery">
      <div className="detail-main-image">
        <Image src={activeImage} alt={name} width={1000} height={760} priority />
      </div>
      <div className="detail-thumbs" aria-label="Product images">
        {galleryImages.map((image, index) => (
          <button
            type="button"
            className={activeImage === image ? "active" : ""}
            key={image}
            onClick={() => setActiveImage(image)}
            aria-label={`Show product image ${index + 1}`}
          >
            <Image src={image} alt="" width={120} height={90} />
          </button>
        ))}
      </div>
    </div>
  );
}
