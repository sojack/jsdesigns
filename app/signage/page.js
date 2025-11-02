import styles from "./page.module.css";
import logo from "../images/jsdesigns-logo-onecolor-reverse.svg";
import Image from "next/image";
import Link from "next/link";
import paisley from "../images/paisley.jpg";
import stanmore from "../images/stanmore.jpg";
import reception from "../images/reception-gold.jpg";
import shopify from "../images/shopify.jpg";



const Signage = () => {
    return (
        <div className={styles.page}>
            <div className={styles.container  }>
                <Link href="/">
                    <Image
                        src={logo}
                        alt="JS Designs Logo"
                        width={200}
                        height={100}
                        className={styles.logo}
                    />
                </Link>

                <div className={styles.page}>
                    <h1>Signage</h1>
                    <h2>Outdoor Signage</h2>
                    <p>Effective outdoor signage is crucial for attracting customers and enhancing brand visibility. At JS Designs, we specialize in creating eye-catching and durable signage solutions that make a lasting impression. From storefront signs to banners and vehicle wraps, our designs are tailored to meet your business needs and comply with local regulations.</p>
                    <h3>Design, Manufacturing, Instalation &amp; Maintenance</h3>
                    <Image
                        src={paisley}
                        alt="Paisley Signs"
                        className={styles.mainImage2}

                    />
                    <Image
                        src={stanmore}
                        alt="Stanmore Signs"
                        className={styles.mainImage2}

                    />
                    <h2>Indoor Signage</h2>
                    <p>Indoor signage plays a vital role in guiding customers and enhancing the overall experience within your establishment. Our team at JS Designs crafts visually appealing indoor signs, including wayfinding signs, promotional displays, and informational graphics. We focus on creating designs that align with your brand identity while ensuring clarity and functionality.</p>   
                    <Image
                        src={reception}
                        alt="Reception Logo"
                        className={styles.mainImage2}
                    />
                    <Image
                        src={shopify}
                        alt="Reception Logo"
                        className={styles.mainImage2}
                    />


                </div>
            </div>
        </div>
    );
};

export default Signage;