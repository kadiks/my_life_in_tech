import React from 'react';
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

const getData = async () => {
  const stories = await getStories();
  const whitelist = await getWhitelists();
  const highlightedStories = await getHighlightedStories();
  let firstColStories = [];
  let secondColStories = [];
  let thirdColStories = [];

  // console.log('stories', stories);
  // console.log('highlightedStories', highlightedStories);

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

  // console.log('highlightedStories #1', highlightedStories);

  return {
    firstColStories,
    secondColStories,
    thirdColStories,
    whitelist,
    highlightedStories,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const {
    highlightedStories,
    firstColStories,
    secondColStories,
    thirdColStories,
    whitelist,
  } = await getData();

  // console.log('firstColStorues.length', firstColStories.length);
  // console.log('highlightedStories #2', highlightedStories);

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

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const {
//     highlightedStories,
//     firstColStories,
//     secondColStories,
//     thirdColStories,
//     whitelist,
//   } = getData();

//   // console.log('firstColStorues.length', firstColStories.length);

//   return {
//     props: {
//       highlightedStories,
//       firstColStories,
//       secondColStories,
//       thirdColStories,
//       whitelist,
//     },
//   };
// };

// export default function Home({}) {}

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      highlightedStories: props.highlightedStories,
      firstColStories: props.firstColStories,
      secondColStories: props.secondColStories,
      thirdColStories: props.thirdColStories,
      whitelist: props.whitelist,
    };
  }

  async componentDidMount() {
    const state = await getData();
    this.setState(state);
  }

  render() {
    const {
      highlightedStories,
      firstColStories,
      secondColStories,
      thirdColStories,
      whitelist,
    } = this.state;
    return (
      <>
        <Head>
          <title>
            My life in tech : partage d'expériences pour les minorités de la
            tech française
          </title>
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
}

export default Home;
