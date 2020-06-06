import Head from 'next/head';

import Navigation from '../src/components/navigation';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import Card from '../src/components/card';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <Header />
      <main>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-4 first-col">
              <Card />
              <Card />
            </div>
            <div className="col-12 col-md-6 col-lg-4 second-col">
              <Card />
              <Card />
            </div>
            <div className="col-12 col-md-6 col-lg-4 third-col">
              <Card />
              <Card />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
