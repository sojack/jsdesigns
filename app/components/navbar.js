"use client";
import Image from "next/image";
import logo from "../icon-hor.svg";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/signage", label: "Signage" },
  { href: "/customsolutions", label: "Custom Solutions" },
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
    <header className="header">
      <nav className="nav-container">
        {/* Logo / Brand */}
        <Link href="/" className="brand">
        <Image
            src={logo}
            alt="JS Designs"
            width={200}
            // height={563}
            // quality={60}
            // className={styles.mainImage2}
          />
        </Link>

        {/* Hamburger button (mobile) */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="hamburger"
          aria-label="Toggle navigation"
          aria-expanded={open}
          aria-controls="primary-menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d={open ? "M6 18L18 6M6 6l12 12" : "M3 6h18M3 12h18M3 18h18"}
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>

        {/* Desktop links */}
        <ul className="nav-links">
          {LINKS.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`nav-link ${active ? "nav-link--active" : ""}`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
          {/* <li>
            <Link href="/signup" className="btn-outline">
              Sign up
            </Link>
          </li> */}
        </ul>
      </nav>

      {/* Mobile menu */}
      <div
        id="primary-menu"
        className={`mobile-menu ${open ? "mobile-menu--open" : ""}`}
      >
        <ul>
          {LINKS.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`mobile-link ${active ? "mobile-link--active" : ""}`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
          {/* <li>
            <Link href="/signup" className="btn-outline full-width">
              Sign up
            </Link>
          </li> */}
        </ul>
      </div>
    </header>
  );
}
