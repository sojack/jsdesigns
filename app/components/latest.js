import Image from "next/image";
import starbucks from ".././images/starbucks.jpg";
import CanadianTire from ".././images/CanadianTire-r1.jpg";
import styles from './latest.module.css';

const Latest = () => {
    return (
        <div>
            <h2>Latest Projects</h2>
            <Image
            src={starbucks}
            alt="Starbucks Sign"
            width={1000}
            height={563}
            quality={60}
            className={styles.mainImage}

          />
            <Image
            src={CanadianTire}
            alt="Canadian Tire Sign"
            width={1000}
            height={563}
            quality={60}
            className={styles.mainImage}

          />
        </div>

    );
}
export default Latest;
