import Image from "next/image";
import starbucks from ".././images/starbucks.jpg";
import CanadianTire from ".././images/CanadianTire-r1.jpg";
import CanadianTireTruck from ".././images/CanadianTire-Truck.jpg";
import ttcBus from ".././images/ttc-bus.jpg";
import ttcLogo from ".././images/TTC-logo-2.jpg";
import styles from './latest.module.css';

const Latest = () => {
    return (
        <div>
            <h2 className={styles.header}>Latest Projects</h2>
            <Image
            src={ttcBus}
            alt="Bus Graphics"
            width={1000}
            height={563}
            quality={60}
            className={styles.mainImage}
          />
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
            <Image
            src={CanadianTireTruck}
            alt="Canadian Tire Truck"
            width={1000}
            height={563}
            quality={60}
            className={styles.mainImage}

          />
          <Image
            src={ttcLogo}
            alt="Bus Graphics"
            width={1000}
            height={563}
            quality={60}
            className={styles.mainImage}
          />

        </div>

    );
}
export default Latest;
