import styles from "./page.module.css";
import Image from "next/image";
import logo from "./images/jsdesigns-logo-onecolor-reverse.svg";
import shopifyImage from "./images/shopify.jpg";
import tims1 from "./images/tims-01.jpg";
import tims2 from "./images/tims-06.jpg";
import aurora from "./images/aurora.jpg";
import mars from "./images/mars-poster.jpg";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.container  }>
      <Image
        src={logo}
        alt="JS Designs Logo"
        width={200}
        height={100}
        className={styles.logo}
      />
      <h1 className={styles.hidden}>JS Designs</h1>
      <h2 className={styles.h2}>Elevate Your Brand. Transform Your Vision.</h2>
      <Image
        src={shopifyImage}
        alt="Shopify"
        width={200}
        height={100}
        className={styles.mainImage}
      />
      <p>Our studio crafts compelling visual experiences that resonate with your audience and drive results. We are your partner in creating impactful design solutions, from print to digital.</p>
      <Image
        src={tims1}
        alt="Tim Hortons Signage"
        width={200}
        height={100}
        className={styles.mainImage}
      />
      <p>In today&apos;s competitive market, standing out is not just an advantage—it&apos;s essential. At JS Designs, we understand the power of <strong>strategic design</strong>. We combine <strong>artistic innovation</strong> with meticulous <strong>execution</strong> to deliver exceptional visual solutions that elevate your brand and achieve your business objectives.</p>
      <div className={styles.row}>
        <div>
          <Image
            src={tims2}
            alt="Tim Hortons Icon Sign"
            width={200}
            height={100}
            className={styles.mainImage2}
          />
        </div>
        <div>
          <p>Our comprehensive services cover every aspect of your design needs, including:</p>
          <ul>
            <li><strong>Print Materials:</strong> Brochures, business cards, posters, and more.</li>
            <li><strong>Online Menus:</strong> Engaging digital menus for restaurants and cafes.</li>
            <li><strong>Digital Screen </strong>Art: Dynamic visuals for digital displays and presentations.</li>
            <li><strong>3D Rendering:</strong> Realistic visualizations for architectural and product designs.</li>
            <li><strong>Brand Identity:</strong> Logo design, style guides, and brand strategy.</li>
          </ul>
        </div>

      </div>
      <p className={styles.quote}>&quot;We work closely with you to understand your unique vision and translate it into captivating visuals that leave a lasting impression. Let us bring your ideas to life.&quot;</p>

      <Image
            src={aurora}
            alt="Aurora Sign"
            width={200}
            height={100}
            className={styles.mainImage}
          />

      </div>
      <div className={styles.footer}>
        <div className={styles.row}>
          <div>
            <h3>Mission Statement</h3>
            <p>&quot;To craft visually compelling solutions that empower businesses to thrive, blending innovation with precision to exceed expectations every time.&quot;</p>
          </div>
          <div>
            <p><a href="privacypolicy">Privacy Policy</a></p>
          </div>
          {/* <Image
            src={mars}
            alt="Aurora Sign"
            width={200}
            height={100}
            className={styles.mainImage2}
          /> */}
          <div>
            <h3>Contact Us</h3>
            <p>49 Roy Harper Avenue<br />
            Aurora, ON L4G0V4<br />
            Phone: (647) 896-0834<br />
            email: jack@jsdesigns.ca</p>
          </div>
          
        </div>
        <p className={styles.center}>&copy; 2025 JS Designs. All rights reserved.<br />
        Website by JS Designs</p> 
      </div>
      
    </div>
    
  );
}
