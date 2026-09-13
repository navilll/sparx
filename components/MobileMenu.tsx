"use client";

import Link from "next/link";
import { useState } from "react";

interface MobileMenuProps {
  extraClassName?: string;
}

interface DropdownState {
  status: boolean;
  key: number | null;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ extraClassName }) => {
  const [isActive, setIsActive] = useState<DropdownState>({
    status: false,
    key: null,
  });

  const [isSubActive, setSubIsActive] = useState<DropdownState>({
    status: false,
    key: null,
  });

  const handleClick = (key: number) => {
    if (isActive.key === key) {
      setIsActive({ status: false, key: null });
    } else {
      setIsActive({ status: true, key });
    }
  };

  const handleSubClick = (key: number) => {
    if (isSubActive.key === key) {
      setSubIsActive({ status: false, key: null });
    } else {
      setSubIsActive({ status: true, key });
    }
  };

  return (
    <>
      <ul className={`navigation ${extraClassName || ""}`}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about-us">About</Link>
        </li>
        <li>
          <Link href="/products">Products</Link>
        </li>
        <li>
          <Link href="/solutions">Solutions</Link>
        </li>
        <li>
          <Link href="/contact-us">Contact</Link>
        </li>
      </ul>
    </>
  );
};

export default MobileMenu;