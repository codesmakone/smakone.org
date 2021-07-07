module.exports = {
  siteMetadata: {
    title: "Smakone - SMUKI - SMAK 1 PENABUR Jakarta",
    description: "Website resmi OSIS SMAK 1 PENABUR Jakarta. Tentang Kami | OSIS | Kehidupan Smukierz | Kegiatan | Alumni",
    url: "https://smakone.org",
    favicon: "src/images/icon.png",
    keywords: "SMAK 1 PENABUR Jakarta, SMAK One, SMAK 1, SMAK 1 PENABUR, SMUKI, Smakone, PENABUR",
    siteLanguage: "id",
    siteLocale: "id",
    author: "Sean Michael Suntoso, Gennesaret Tjusila, Ferdi, Ananda, Mikhael James"
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Smakone",
        short_name: "Smakone",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#ffffff",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        icon: "src/images/icon.png", // This path is relative to the root of the site.
        // An optional attribute which provides support for CORS check.
        // If you do not provide a crossOrigin option, it will skip CORS for manifest.
        // Any invalid keyword or empty string defaults to `anonymous`
        crossOrigin: `use-credentials`,
      },
    },
  'gatsby-plugin-postcss',
  `gatsby-plugin-image`,
  `gatsby-plugin-sharp`,
  `gatsby-transformer-sharp`
]
};
