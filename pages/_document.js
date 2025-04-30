import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" dir="ltr">
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="keywords" content="Keywords" />
        <link rel="shortcut icon" type="image/png" href="/images/icon.png" />
        <link rel="apple-touch-icon" href="/poster.png"></link>
        <meta name="theme-color" content="#317EFB" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Prompt:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <script src="https://kit.fontawesome.com/6e37d3b44a.js" crossOrigin="anonymous"></script>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-SWWT8QB292`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-SWWT8QB292', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
