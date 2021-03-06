import Document, { Html, Head, Main, NextScript } from 'next/document';

import Config from '../src/Config';
const gaUid = Config.GA_TRACKING_ID;

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const isProduction = Config.GA_TRACKING_ID !== '';
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps, isProduction };
  }

  setGoogleTags() {
    return {
      __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaUid}');
          `,
    };
  }

  render() {
    const { isProduction } = this.props;
    return (
      <Html lang="fr">
        <Head>
          <meta charSet="utf8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link
            href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400&family=Oswald:wght@200;300;500&display=swap"
            rel="stylesheet"
          />
          <link rel="icon" href="/favicon.ico" />
          <link rel="stylesheet" href="/css/bootstrap-grid.min.css" />
          <link rel="stylesheet" href="/css/all.min.css" />
          <link rel="stylesheet" href="/css/loader.css" />
          <link rel="stylesheet" href="/css/style.css" />
          <link rel="stylesheet" href="/css/add-xp.css" />

          <meta property="og:title" content="My Life in Tech" />
          <meta
            property="og:description"
            content="Témoignages de minorités dans la tech"
          />
          <meta
            property="og:image"
            content={`${Config.API_URL}/img/social_card.png`}
          />
          <meta property="og:url" content={Config.API_URL} />
          <meta name="twitter:card" content="summary_large_image" />

          <meta
            property="og:site_name"
            content="My Life in Tech - Social Hackeur"
          />
          <meta
            name="twitter:image:alt"
            content="My Life in Tech - Social Hackeur"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          {isProduction && (
            <>
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${gaUid}`}
              />
              <script dangerouslySetInnerHTML={this.setGoogleTags()} />
            </>
          )}
        </body>
      </Html>
    );
  }
}

export default MyDocument;
