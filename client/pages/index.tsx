import { GetStaticProps } from 'next';

import Head from 'next/head';

import Navigation from '../src/components/navigation';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import Card from '../src/components/card';

import {
  getHighlightedStories,
  getStories,
  getWhitelists,
} from '../src/utils/Api';

export const getStaticProps: GetStaticProps = async (context) => {
  const stories = await getStories();
  const whitelist = await getWhitelists();
  const highlightedStories = await getHighlightedStories();
  let firstColStories = [];
  let secondColStories = [];
  let thirdColStories = [];

  stories.forEach((story, index) => {
    if (index % 3 === 0) {
      firstColStories.push(story);
    }
    if (index % 3 === 1) {
      secondColStories.push(story);
    }
    if (index % 3 === 2) {
      thirdColStories.push(story);
    }
  });

  // console.log('firstColStorues.length', firstColStories.length);

  return {
    props: {
      highlightedStories,
      firstColStories,
      secondColStories,
      thirdColStories,
      whitelist,
    },
  };
};

export default function Home({
  highlightedStories = [],
  firstColStories = [],
  secondColStories = [],
  thirdColStories = [],
  whitelist = [],
}) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <Header stories={highlightedStories} whitelist={whitelist} />
      <main>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-4 first-col">
              {firstColStories.map((story) => {
                return (
                  <Card key={story._id} {...story} whitelist={whitelist} />
                );
              })}
            </div>
            <div className="col-12 col-md-6 col-lg-4 second-col">
              {secondColStories.map((story) => {
                return (
                  <Card key={story._id} {...story} whitelist={whitelist} />
                );
              })}
            </div>
            <div className="col-12 col-md-6 col-lg-4 third-col">
              {thirdColStories.map((story) => {
                return (
                  <Card key={story._id} {...story} whitelist={whitelist} />
                );
              })}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
