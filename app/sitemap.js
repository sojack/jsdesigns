export default function sitemap() {
  const baseUrl = "https://jsdesigns.ca";

  return [
    { url: baseUrl, changeFrequency: "monthly", priority: 1 },
    { url: `${baseUrl}/signage`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/customsolutions`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/aoda`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/privacypolicy`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/termsofuse`, changeFrequency: "yearly", priority: 0.3 },
  ];
}
