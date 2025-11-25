import styles from "./page.module.css";
import Image from "next/image";
// import rhac from ".././images/rhac-entrance.jpg";

const Signage = () => {
    return (
            <div className={styles.container}>
                <h1>Brand Story & Visual Graphics</h1>
                <h2>Transform Your Space. Elevate Your Brand.</h2>
                <p>At JS Designs, we specialize in turning ideas into bold visual statements. With over 20 years of experience in graphic design and print production, we bring creative precision and craftsmanship to every project — from indoor environments to outdoor displays.</p>
                    {/* <Image
                        src={rhac}
                        alt="Entrance Graphics"
                        className="mainImage"
                    /> */}
                <h1>Wall, Window & Floor Graphics</h1>
                <h2>Design that sticks — beautifully.</h2>
                <p><strong>Wall Graphics:</strong> Custom murals, feature walls, and branding that bring your workspace to life.</p>
                <p><strong>Window Graphics:</strong> From full coverage to frosted or perforated vinyl, perfect for privacy, branding, or seasonal promotions. </p>
                <p><strong>Floor Graphics:</strong> Durable, slip-resistant vinyl for wayfinding, safety, or creative décor.</p>
                {/* <h1>Dimensional & Outdoor Signage</h1>
                <h2>Make your brand stand out — literally.</h2>
                <p><strong>Dimensional Logos:</strong> Custom 3D lettering and logos for lobbies and reception areas.</p>
                <strong>Exterior Signage:</strong> Weather-resistant signs for storefronts, plazas, and business fronts.
                <strong>Channel Letters & Lighted Signs:</strong> Professional, eye-catching solutions that elevate your visibility day and night. */}
                <h1>Custom Printed Graphics</h1>
                <h2>Precision printing, endless possibilities.</h2>
                <p><strong>Custom Decals:</strong> Any size, any purpose — ideal for product labeling, equipment branding, or promotional giveaways.</p>
                <p><strong>Industrial & Outdoor Decals:</strong> Built to withstand the elements — perfect for outdoor machinery or heavy-duty use.</p>
                <p><strong>Vehicle Graphics:</strong> Full or partial wraps, fleet branding, or simple door logos to promote your business on the move.</p>
            </div>
    );
};

export default Signage;