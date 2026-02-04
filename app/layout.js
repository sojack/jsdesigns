import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import Navbar from "./components/navbar";
import Footer from "./components/footer";


export const metadata = {
  title: {
    default: "JS Designs",
    template: "%s | JS Designs",
  },
  description: "Elevate Your Brand. Transform Your Vision.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {process.env.NEXT_PUBLIC_GA_ID && (
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
      )}
      <body>
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
