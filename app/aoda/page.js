import styles from "./page.module.css";

const AODACompliance = () => {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h1>AODA Compliance Services</h1>

        <h2 className={styles.headline}>
          Is Your Business Ready for the December 2026 AODA Deadline?
        </h2>

        <p className={styles.warning}>
          Don&apos;t let a non-compliant website become a <strong>$100,000-a-day liability</strong>.
        </p>

        <p>
          In Ontario, digital accessibility is no longer just a &quot;nice to have&quot;&mdash;it is a <strong>legal requirement</strong>. Under the Accessibility for Ontarians with Disabilities Act (AODA), your website must meet WCAG 2.0 Level AA standards.
        </p>

        <p>
          Whether you are a non-profit, a public sector organization, or a private business with 20+ employees, the clock is ticking toward the next mandatory reporting deadline: <strong>December 31, 2026</strong>.
        </p>

        <section className={styles.section}>
          <h2>The Risk of the &quot;Status Quo&quot;</h2>

          <p>
            Most websites built before 2022 fail modern accessibility audits. This isn&apos;t just about code; it&apos;s about people. If an athlete, a parent, or a customer cannot navigate your site due to poor contrast, lack of screen-reader support, or broken navigation, your organization is at risk for:
          </p>

          <ul className={styles.riskList}>
            <li>
              <strong>Government Fines:</strong> Administrative penalties for non-compliance.
            </li>
            <li>
              <strong>Human Rights Complaints:</strong> Potential legal action under the Ontario Human Rights Code.
            </li>
            <li>
              <strong>Brand Damage:</strong> Excluding 15-20% of the population who live with a disability.
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>How JS Designs Protects You</h2>

          <p>
            We specialize in bridging the gap between high-end design and technical compliance. We offer a comprehensive <strong>Compliance-as-a-Product</strong> suite designed to get you &quot;Report Ready.&quot;
          </p>

          <div className={styles.services}>
            <div className={styles.serviceCard}>
              <h3>1. The Deep-Dive Audit</h3>
              <p>
                We go beyond automated tools. We perform a manual and technical &quot;stress test&quot; of your current site to identify every barrier&mdash;from hidden code errors to unreadable color palettes.
              </p>
            </div>

            <div className={styles.serviceCard}>
              <h3>2. Remediation &amp; Rebuilding</h3>
              <p>
                We don&apos;t just point out problems; we fix them. Whether it&apos;s optimizing your site&apos;s &quot;engine&quot; for 3-second load times or restructuring your navigation for screen readers, we ensure your site is fast, accessible, and beautiful.
              </p>
            </div>

            <div className={styles.serviceCard}>
              <h3>3. Filing Concierge Service</h3>
              <p>
                The government reporting portal can be intimidating. We provide the documentation and verified audit trails you need to file your 2026 Accessibility Compliance Report with total confidence.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.ctaSection}>
          <h2>Stop Guessing. Start Complying.</h2>

          <p className={styles.ctaText}>
            <strong>Get Your Free 60-Second Accessibility Snapshot.</strong> Enter your URL below, and I will personally send you a high-level audit showing your current Performance and Accessibility scores.
          </p>

          <form className={styles.ctaForm} action="mailto:info@jsdesigns.ca" method="get">
            <input
              type="url"
              name="subject"
              placeholder="Enter your website URL"
              className={styles.urlInput}
              required
            />
            <button type="submit" className={styles.ctaButton}>
              Get My Free Audit
            </button>
          </form>
        </section>

        <section className={styles.section}>
          <h2>Why Choose JS Designs?</h2>

          <p>
            With over 20 years of experience in the Ontario design landscape, we understand the local regulations and the technical hurdles. We don&apos;t just build websites; we build <strong>inclusive digital experiences</strong> that protect your organization and serve your community.
          </p>
        </section>
      </div>
    </div>
  );
};

export default AODACompliance;
