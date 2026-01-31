import styles from "./page.module.css";
import Image from "next/image";
import gold from "../images/reception-gold.jpg";
import shopify from "../images/shopify.jpg";
import rbc from "../images/rbc-logo.jpg";
import day from "../images/dayRoss-building.jpg";
import orion from "../images/Orion-Dental-Layout.jpg";



const Signage = () => {
    return (
        <div className={styles.page}>
            <div className={styles.container  }>
                <div className={styles.page}>
                    <h1>Signage</h1>
                    <h2>Indoor Signage</h2>
                    <p>Indoor signage plays a vital role in guiding customers and enhancing the overall experience within your establishment. Our team at JS Designs crafts visually appealing indoor signs, including wayfinding signs, promotional displays, and informational graphics. We focus on creating designs that align with your brand identity while ensuring clarity and functionality.</p>   
                    <Image
                        src={rbc}
                        alt="Close up of the reception RBC Logo sign"
                        className={styles.mainImage2}
                    />
                    <Image
                        src={shopify}
                        alt="Close up of Shopify Reception Logo"
                        className={styles.mainImage2}
                    />
                    <h2>Outdoor Signage</h2>
                    <p>Effective outdoor signage is crucial for attracting customers and enhancing brand visibility. At JS Designs, we specialize in creating eye-catching and durable signage solutions that make a lasting impression. From storefront signs to banners and vehicle wraps, our designs are tailored to meet your business needs and comply with local regulations.</p>
                    <h3>Design, Manufacturing, Instalation &amp; Maintenance</h3>
                    <Image
                        src={day}
                        alt="Day Ross building signage"
                        className={styles.mainImage2}
                    />
                    <Image
                        src={orion}
                        alt="Orion Dental Windows and exterior signage"
                        className={styles.mainImage2}
                    />
                </div>
            </div>
        </div>
    );
};

export default Signage;