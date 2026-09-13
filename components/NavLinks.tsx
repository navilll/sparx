"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavLinksProps {
    extraClassName?: string;
}

const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/products", label: "Products" },
    { href: "/solutions", label: "Solutions" },
    { href: "/contact", label: "Contact" },
];

const NavLinks: React.FC<NavLinksProps> = ({ extraClassName = "" }) => {
    const pathname = usePathname();

    return (
        <>
            <ul className={`navigation ${extraClassName}`}>
                {navItems.map((item) => {
                    const isActive =
                        item.href === "/"
                            ? pathname === "/"
                            : pathname.startsWith(item.href);

                    return (
                        <li key={item.href} className={isActive ? "current" : ""}>
                            <Link href={item.href}>{item.label}</Link>
                        </li>
                    );
                })}
            </ul>
        </>
    );
};

export default NavLinks;