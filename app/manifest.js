export default function manifest() {
  return {
    name: "JS Designs",
    short_name: "JS Designs",
    description:
      "Toronto design studio specializing in signage, branding, custom graphics, vehicle wraps, and AODA compliance.",
    start_url: "/",
    display: "standalone",
    background_color: "#171717",
    theme_color: "#171717",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
