import "./globals.css";


export const metadata = {
  title: "JS Designs",
  description: "Elevate Your Brand. Transform Your Vision.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
