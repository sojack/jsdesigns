export const metadata = {
  title: "Signage, Branding & AODA Compliance in Toronto",
  description:
    "Toronto design studio specializing in signage, branding, custom graphics, vehicle wraps, and AODA compliance services. Over 20 years of experience elevating brands.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "JS Designs | Signage, Branding & AODA Compliance in Toronto",
    description:
      "Toronto design studio specializing in signage, branding, custom graphics, vehicle wraps, and AODA compliance services.",
    url: "/",
  },
};

import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
import shopifyImage from "./images/shopify.jpg";
import tims1 from "./images/tims-01.jpg";
import tims2 from "./images/tims-06.jpg";
import aurora from "./images/aurora.jpg";

import Latest from "./components/latest";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.container  }>
        <h1 className="visually-hidden">JS Designs</h1>
        <h2 className={styles.center}>Elevate Your Brand.</h2>
        <Image
          src={shopifyImage}
          alt="the Shopify logo produced with Acrylic and colour vinyl"
          width={1000}
          height={563}
          quality={60}
          className={styles.mainImage}
        />
        <p>Our studio crafts compelling visual experiences that resonate with your audience and drive results. We are your partner in creating impactful design solutions, from print to digital.</p>
        <Image
          src={tims1}
          alt="Tim Hortons Signage made of acrylic and vinyl"
          width={1000}
          height={563}
          quality={60}
          className={styles.mainImage2}

        />
        <p>In today&apos;s competitive market, standing out is not just an advantage—it&apos;s essential. At JS Designs, we understand the power of <strong>strategic design</strong>. We combine <strong>artistic innovation</strong> with meticulous <strong>execution</strong> to deliver exceptional visual solutions that elevate your brand and achieve your business objectives.</p>
        <div className={styles.row}>
          <div>
            <Image
              src={tims2}
              alt="a smaller Tim Hortons Icon Sign made of acrylic and vinyl"
              width={492}
              height={492}
              quality={100}
              className={styles.mainImage2}
            />
          </div>
          <div>
            <p>Our comprehensive services cover every aspect of your design needs, including:</p>
            <ul>
              <li><strong>Print Materials:</strong> Brochures, business cards, posters, and more.</li>
              <li><strong>Online Menus:</strong> Engaging digital menus for restaurants and cafes.</li>
              <li><strong>Digital Screen Art:</strong> Dynamic visuals for digital displays and presentations.</li>
              <li><strong>3D Rendering:</strong> Realistic visualizations for architectural and product designs.</li>
              <li><strong>Brand Identity:</strong> Logo design, style guides, and brand strategy.</li>
            </ul>
          </div>
        </div>

        <div className={styles.aodaSection}>
          <h2>Take the Stress Out of AODA Reporting</h2>
          <p>Don&apos;t guess when it comes to government compliance. From deep-tech audits to filing your 2026 Accessibility Report, we handle the technical heavy lifting so you can focus on running your business.</p>
          <Link href="/aoda" className={styles.aodaLink}>Read More: Get Report-Ready Today</Link>
        </div>

        <p className={styles.quote}>&quot;We work closely with you to understand your unique vision and translate it into captivating visuals that leave a lasting impression. Let us bring your ideas to life.&quot;</p>

        <Image
            src={aurora}
            alt="Town of Aurora logo made of acrylic and vinyl"
            width={1000}
            height={563}
            quality={60}
            className={styles.mainImage}
          />
          <Latest />

      </div> {/* // end of container */}

      
    </div>
    
  );
}
