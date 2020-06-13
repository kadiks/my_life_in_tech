import React, { useState, useEffect, useRef } from 'react';
import { GetStaticProps } from 'next';

import Head from 'next/head';

import Navigation from '../src/components/navigation';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import Card from '../src/components/card';
import { Loader } from '../src/components/core';

import {
  getHighlightedStories,
  getStories,
  getWhitelists,
  getPaginatedStories,
} from '../src/utils/Api';

let paginationIndex = 1;

const getData = async () => {
  const stories = await getPaginatedStories();
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

// function Home({
//   highlightedStories,
//   firstColStories,
//   secondColStories,
//   thirdColStories,
//   whitelist,
// }) {
//   console.log('#Home');
//   const [shighlightedStories, setHighlightedStories] = useState(
//     highlightedStories
//   );
//   const [isLoading, setIsLoading] = useState(false);
//   const [sfirstColStories, setFirstColStories] = useState(firstColStories);
//   const [ssecondColStories, setSecondColStories] = useState(secondColStories);
//   const [sthirdColStories, setThirdColStories] = useState(thirdColStories);
//   const [swhitelist, setWhitelist] = useState(whitelist);

//   const updatePagination = async () => {
//     // console.log('#upatePagination', isLoading);
//     if (isLoading === true) {
//       return;
//     }
//     // console.log(
//     //   '#upatePagination STARTING pagination paginationIndex',
//     //   paginationIndex
//     // );
//     setIsLoading(true);
//     const firstColStories = [...sfirstColStories];
//     const secondColStories = [...ssecondColStories];
//     const thirdColStories = [...sthirdColStories];
//     console.log('firstColStories.length #1', firstColStories.length);
//     const stories = await getPaginatedStories({ index: paginationIndex });
//     stories.forEach((story, index) => {
//       if (index % 3 === 0) {
//         firstColStories.push(story);
//       }
//       if (index % 3 === 1) {
//         secondColStories.push(story);
//       }
//       if (index % 3 === 2) {
//         thirdColStories.push(story);
//       }
//     });
//     console.log(firstColStories.map((f) => f._id));
//     console.log('firstColStories.length #2', firstColStories.length);
//     setFirstColStories(firstColStories);
//     setSecondColStories(secondColStories);
//     setThirdColStories(thirdColStories);
//     console.log('YO!', paginationIndex);
//     paginationIndex++;
//     console.log('YO!', paginationIndex);
//     setIsLoading(false);
//   };

//   const refContainer = useRef(null);

//   useEffect(() => {
//     document.onscroll = () => {
//       // console.log(
//       //   'document.onscroll',
//       //   window.innerHeight,
//       //   refContainer.current.getBoundingClientRect(),
//       //   refContainer.current.offsetTop
//       // );
//       // console.log(
//       //   refContainer.current.getBoundingClientRect().top +
//       //     refContainer.current.getBoundingClientRect().height -
//       //     window.innerHeight -
//       //     300
//       // );
//       const { top, height } = refContainer.current.getBoundingClientRect();
//       const limit = top + height - window.innerHeight - 300;
//       if (limit < 0) {
//         // the desired place
//         // console.log('BOTTOM');
//         updatePagination();
//       }
//     };
//   });

//   return (
//     <>
//       <Head>
//         <title>
//           My life in tech : partage d'expériences pour les minorités de la tech
//           française
//         </title>
//         <link rel="icon" href="/favicon.ico" />
//       </Head>
//       <Navigation />
//       <Header stories={highlightedStories} whitelist={whitelist} />
//       <main>
//         <div className="container" ref={refContainer}>
//           <div className="row">
//             <div className="col-12 col-md-6 col-lg-4 first-col">
//               {firstColStories.map((story) => {
//                 console.log(
//                   '#render firstColStories.length',
//                   firstColStories.length
//                 );
//                 return (
//                   <Card key={story._id} {...story} whitelist={whitelist} />
//                 );
//               })}
//             </div>
//             <div className="col-12 col-md-6 col-lg-4 second-col">
//               {secondColStories.map((story) => {
//                 return (
//                   <Card key={story._id} {...story} whitelist={whitelist} />
//                 );
//               })}
//             </div>
//             <div className="col-12 col-md-6 col-lg-4 third-col">
//               {thirdColStories.map((story) => {
//                 return (
//                   <Card key={story._id} {...story} whitelist={whitelist} />
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//       </main>
//       <Footer />
//     </>
//   );
// }

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      hasHitBottom: false,
      highlightedStories: props.highlightedStories,
      firstColStories: props.firstColStories,
      secondColStories: props.secondColStories,
      thirdColStories: props.thirdColStories,
      whitelist: props.whitelist,
      paginationIndex: 1,
    };

    this.onScroll = this.onScroll.bind(this);
    this.updatePagination = this.updatePagination.bind(this);
  }

  async componentDidMount() {
    const state = await getData();
    this.setState(state);
    document.onscroll = this.onScroll;
  }

  onScroll() {
    const { top, height } = this.container.getBoundingClientRect();
    const limit = top + height - window.innerHeight - 300;
    if (limit < 0) {
      // the desired place
      // console.log('BOTTOM');
      this.updatePagination();
    }
  }

  async updatePagination() {
    const { isLoading, paginationIndex, hasHitBottom } = this.state;
    const firstColStories = [...this.state.firstColStories];
    const secondColStories = [...this.state.secondColStories];
    const thirdColStories = [...this.state.thirdColStories];
    // console.log('#upatePagination', isLoading);
    if (isLoading === true || hasHitBottom === true) {
      return;
    }
    // console.log(
    //   '#upatePagination STARTING pagination paginationIndex',
    //   paginationIndex
    // );
    this.setState({
      isLoading: true,
    });
    // console.log('firstColStories.length #1', firstColStories.length);
    const stories = await getPaginatedStories({ index: paginationIndex });
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
    // console.log(firstColStories.map((f) => f._id));
    if (firstColStories.length === this.state.firstColStories.length) {
      this.setState({
        isLoading: false,
        hasHitBottom: true,
      });
      return;
    }
    this.setState({
      isLoading: false,
      paginationIndex: paginationIndex + 1,
      firstColStories,
      secondColStories,
      thirdColStories,
    });
  }

  render() {
    const {
      highlightedStories,
      firstColStories,
      secondColStories,
      thirdColStories,
      whitelist,
      isLoading,
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
          <div className="container" ref={(c) => (this.container = c)}>
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
              {isLoading && (
                <div className="col-12">
                  <Loader />
                </div>
              )}
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }
}

export default Home;
