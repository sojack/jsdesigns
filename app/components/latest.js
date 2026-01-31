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
            alt="Bus with custom Tim Hortons advertising wrap"
            width={1000}
            height={563}
            quality={60}
            className={styles.mainImage2}

          />
            <Image
            src={starbucks}
            alt="Starbucks logo made of whate and green foam pvc"
            width={1000}
            height={563}
            quality={60}
            className={styles.mainImage2}
          />

            <Image
            src={CanadianTire}
            alt="the Canadian Tire logo made of acrylic and colour vinyl"
            width={1000}
            height={563}
            quality={60}
            className={styles.mainImage2}

          />
            <Image
            src={CanadianTireTruck}
            alt="a truck with a large Canadian Tire logo decal on the side"
            width={1000}
            height={563}
            quality={60}
            className={styles.mainImage2}
          />
          <Image
            src={ttcLogo}
            alt="Toronto Transit Commission logo made of acrylic and vinyl"
            width={1000}
            height={563}
            quality={60}
            className={styles.mainImage2}

          />

        </div>

    );
}
export default Latest;
