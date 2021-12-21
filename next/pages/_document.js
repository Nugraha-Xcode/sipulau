import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta property='og:type' content='website' />
          <meta property='og:image:type' content='image/jpg'></meta>
          <meta property='og:title' content='Sipulau' />
          <meta property='og:site_name' content='Sipulau Website' />
          <meta
            property='og:url'
            itemProp='image'
            content='https://sipulau.big.go.id/'
          />
          <meta name='description' content='Sistem Informasi SIPULAU' />
          <meta property='og:image' content='/images/bg-hero-section1.jpg' />

          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link
            rel='preconnect'
            href='https://fonts.gstatic.com'
            crossOrigin='true'
          />
          <link
            href='https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap'
            rel='stylesheet'
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap'
            rel='stylesheet'
          />
          <link rel='icon' href='/images/logo-big.svg' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
