import Head from "next/head";

export function PreloadResources() {
  return (
    <Head>
      {/* Preload critical fonts */}
      <link
        rel="preload"
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
        as="style"
        // @ts-ignore
        onLoad={(e) => {
          const link = e.currentTarget as HTMLLinkElement;
          link.onload = null;
          link.rel = "stylesheet";
        }}
      />

      {/* Preload critical images */}
      <link
        rel="preload"
        href="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
        as="image"
        type="image/jpeg"
      />

      {/* DNS prefetch for external domains */}
      <link rel="dns-prefetch" href="//images.pexels.com" />
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />

      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://images.pexels.com" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />

      {/* Preload critical CSS */}
      <link
        rel="preload"
        href="/globals.css"
        as="style"
        // @ts-ignore
        onLoad={(e) => {
          const link = e.currentTarget as HTMLLinkElement;
          link.onload = null;
          link.rel = "stylesheet";
        }}
      />
    </Head>
  );
}
