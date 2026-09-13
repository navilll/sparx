"use client";

import Image from "next/image";
import { useState } from "react";

export default function ProductGallery({ name, images }: { name: string; images: string[] }) {
  const [activeImage, setActiveImage] = useState(images[0]);

  return (
    <div className="detail-gallery">
      <div className="detail-main-image">
        <Image src={activeImage} alt={name} width={1000} height={760} priority />
      </div>
      <div className="detail-thumbs" aria-label="Product images">
        {images.map((image, index) => (
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
