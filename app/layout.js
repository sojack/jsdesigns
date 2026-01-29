import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";


export const metadata = {
  title: "JS Designs",
  description: "Elevate Your Brand. Transform Your Vision.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
