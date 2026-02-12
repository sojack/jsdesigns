import Link from "next/link";
import styles from "./breadcrumb.module.css";

export default function Breadcrumb({ items }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.href ? `https://jsdesigns.ca${item.href}` : undefined,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav aria-label="Breadcrumb" className={styles.breadcrumb}>
        <ol className={styles.list}>
          {items.map((item, index) => (
            <li key={item.name} className={styles.item}>
              {index < items.length - 1 ? (
                <Link href={item.href}>{item.name}</Link>
              ) : (
                <span aria-current="page">{item.name}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
