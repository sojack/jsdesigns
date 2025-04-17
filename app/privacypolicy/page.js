import styles from "./page.module.css";
import logo from "../images/jsdesigns-logo-onecolor-reverse.svg";
import Image from "next/image";
import Link from "next/link";


const PrivacyPolicy = () => {
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

        <div className={styles.page}>
            <h1>Privacy Policy</h1>
            <p>
                Your privacy is important to us. This privacy policy explains how we collect, use, and protect your information.
            </p>
            <h2>Information We Collect</h2>
            <p>
                We may collect personal information such as your name, email address, and any other details you provide when using our services.
            </p>
            <h2>How We Use Your Information</h2>
            <p>
                The information we collect is used to provide and improve our services, communicate with you, and ensure a better user experience.
            </p>
            <h2>Sharing Your Information</h2>
            <p>
                We do not share your personal information with third parties except as required by law or to provide our services.
            </p>
            <h2>Data Security</h2>
            <p>
                We take reasonable measures to protect your information from unauthorized access, loss, or misuse.
            </p>
            <h2>Changes to This Policy</h2>
            <p>
                We may update this privacy policy from time to time. Please review it periodically for any changes.
            </p>
            <h2>Contact Us</h2>
            <p>
                If you have any questions about this privacy policy, please contact us at info@jsdesigns.ca
            </p>
            <p><Link href="/">Back to Home</Link></p>
        </div>
        </div>
        </div>
    );
};

export default PrivacyPolicy;