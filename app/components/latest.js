import Image from "next/image";
import starbucks from ".././images/starbucks.jpg";
import CanadianTire from ".././images/CanadianTire-r1.jpg";

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
          />
            <Image
            src={CanadianTire}
            alt="Canadian Tire Sign"
            width={1000}
            height={563}
            quality={60}
          />
        </div>

    );
}
export default Latest;
