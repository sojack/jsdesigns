"use client";
import Image from "next/image";
import logo from "../icon-hor.svg";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./navbar.module.css";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/signage", label: "Signage" },
  { href: "/customsolutions", label: "Custom Solutions" },
  { href: "/aoda", label: "AODA Compliance" },
//   { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close menu on route change
  useEffect(() => setOpen(false), [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header className={styles.header}>
      <nav className={styles.navContainer}>
        {/* Logo / Brand */}
        <Link href="/" className={styles.brand}>
        <Image
            src={logo}
            alt="JS Designs"
            width={200}
          />
        </Link>

        {/* Hamburger button (mobile) */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className={styles.hamburger}
          aria-label="Toggle navigation"
          aria-expanded={open}
          aria-controls="primary-menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d={open ? "M6 18L18 6M6 6l12 12" : "M3 6h18M3 12h18M3 18h18"}
              stroke="#85cd06"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        </button>

        {/* Desktop links */}
        <ul className={styles.navLinks}>
          {LINKS.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`${styles.navLink} ${active ? styles.navLinkActive : ""}`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Mobile menu */}
      <div
        id="primary-menu"
        className={`${styles.mobileMenu} ${open ? styles.mobileMenuOpen : ""}`}
      >
        <ul>
          {LINKS.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`${styles.mobileLink} ${active ? styles.mobileLinkActive : ""}`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
}
