import Link from "next/link";
import styles from "./related-services.module.css";

const services = [
  { href: "/signage", name: "Signage", description: "Indoor & outdoor signage solutions" },
  { href: "/customsolutions", name: "Custom Solutions", description: "Graphics, decals & vehicle wraps" },
  { href: "/aoda", name: "AODA Compliance", description: "Accessibility audits & compliance" },
];

export default function RelatedServices({ current }) {
  const others = services.filter((s) => s.href !== current);

  return (
    <nav aria-label="Related services" className={styles.related}>
      <h2 className={styles.heading}>Explore Our Other Services</h2>
      <div className={styles.links}>
        {others.map((service) => (
          <Link key={service.href} href={service.href} className={styles.card}>
            <strong>{service.name}</strong>
            <span>{service.description}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
