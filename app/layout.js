import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import Navbar from "./components/navbar";
import Footer from "./components/footer";


export const metadata = {
  metadataBase: new URL("https://jsdesigns.ca"),
  title: {
    default: "JS Designs",
    template: "%s | JS Designs",
  },
  description:
    "Toronto design studio specializing in signage, branding, custom graphics, vehicle wraps, and AODA compliance. Over 20 years of experience elevating brands.",
  openGraph: {
    type: "website",
    locale: "en_CA",
    siteName: "JS Designs",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export const viewport = {
  themeColor: "#171717",
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      name: "JS Designs",
      url: "https://jsdesigns.ca",
      telephone: "+16478960834",
      email: "jack@jsdesigns.ca",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Toronto",
        addressRegion: "ON",
        addressCountry: "CA",
      },
      description:
        "Toronto design studio specializing in signage, branding, custom graphics, vehicle wraps, and AODA compliance services.",
      areaServed: {
        "@type": "Place",
        name: "Toronto, Ontario",
      },
    },
    {
      "@type": "Organization",
      name: "JS Designs",
      url: "https://jsdesigns.ca",
      logo: "https://jsdesigns.ca/icon.svg",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+16478960834",
        email: "jack@jsdesigns.ca",
        contactType: "customer service",
        areaServed: "CA",
        availableLanguage: "English",
      },
    },
    {
      "@type": "WebSite",
      name: "JS Designs",
      url: "https://jsdesigns.ca",
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link
          rel="preconnect"
          href="https://www.googletagmanager.com"
          crossOrigin="anonymous"
        />
      </head>
      {process.env.NEXT_PUBLIC_GA_ID && (
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
      )}
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
