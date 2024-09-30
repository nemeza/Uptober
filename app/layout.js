import '../styles/globals.css';

const RootLayout = ({ children }) => (
  <html lang="en">
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <meta name="author" content="Uptober Dev Kris" />
      <meta property="og:site_name" content="Kris Khan" />
      <meta property="og:title" content="Uptober" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="/bcstamp.png" />
      <meta property="og:image:width" content="125" />
      <meta property="og:image:height" content="125" />
      <meta property="og:description" 
    content=' "Uptober token for fun" ' />
      <meta property="og:url" content="https://uptober-eight.vercel.app/" />
      <meta property="og:determiner" content="the" />
      <meta property="og:locale" content="ms_MY" />
      <meta property="og:locale:alternate" content="en_US" />
      <meta property="og:locale:alternate" content="zh_SG" />
      <meta property="og:locale:alternate" content="en_GB" />
      <meta property="og:locale:alternate" content="fr_FR" />
      <meta property="og:locale:alternate" content="es_ES" />
      <link rel="preconnect" href="https://stijndv.com" />
      <link rel="stylesheet" href="https://stijndv.com/fonts/Eudoxus-Sans.css" />
    </head>
    <body>{children}</body>
  </html>
);

export default RootLayout;
