import React from 'react';
import { getStory, getStories } from '../../src/utils/Api';

import Navigation from '../../src/components/navigation';
import Header from '../../src/components/Header';
import Footer from '../../src/components/Footer';
import { css } from 'emotion';

const FormStyle = css`
  background-color: rgba(99, 93, 93, 0.7);
  border-radius: 2px;
  padding: 5px;
`;

const reactionsBox = css`
  position: absolute;
  top: -2rem;
  right: 0;
`;

const postStyle = css`
  position: relative;
  border-bottom: 1px solid black;

  &hover: {
    ${reactionsBox} {
      display: block;
    }
  }
`;

const CommentStyle = css`
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 6px;
  border-bottom: 1px solid black;
  padding: 6px;
`;

const submitStyle = css`
  position: absolute;
`;

class Story extends React.Component {
  constructor(props: void) {
    super(props);

    this.state = {
      comments: ['com1', 'com2'],
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  static async getInitialProps({ req, pathname, query, asPath }) {
    // console.log('pathname', pathname);
    // console.log('query', query);
    // console.log('asPath', asPath);
    const story = await getStory({ id: query.pid });

    return {
      story,
    };
  }

  async componentDidMount() {}

  handleSubmit(event) {
    event.preventDefault();
    console.log(event);
  }

  render() {
    const { story } = this.props;
    const comments = ['com1', 'com2'].map((item, index) => (
      <div>
        <p className={CommentStyle} key={index}>
          {item}
        </p>
      </div>
    ));

    return (
      <>
        <Navigation />

        <form
          className={`${FormStyle} col-12 col-md-6 col-lg-6 `}
          onSubmit={this.handleSubmit}
        >
          <div className={postStyle}>
            <p>Date: {story.date}</p>
            <p>{story.content}</p>
            <div className={reactionsBox}>
              <span className="fas fa-surprise" />
              <span className="fas fa-surprise" />
              <span className="fas fa-surprise" />
            </div>
          </div>

          <div>{comments}</div>
          <div>
            <input className={CommentStyle} type="text" />

            <span
              className={` ${submitStyle} far fa-paper-plane`}
              onClick={this.handleSubmit}
            />
          </div>
        </form>

        <Footer />
      </>
    );
  }
}

export default Story;

// const Post = ({ story }) => {
//   const router = useRouter();
//   const { pid } = router.query;

//   console.log('story', story);

//   return (
//     <p>
//       Post: {pid} {story._id || 'Nothing'}
//     </p>
//   );
// };

// export async function getStaticPaths() {
//   console.log('getStaticPaths');
//   const stories = await getStories();
//   // const posts = await res.json();

//   // Get the paths we want to pre-render based on posts
//   const paths = stories.map((story) => {
//     console.log('#getStaticPaths story', story);
//     return {
//       params: { pid: story._id },
//     };
//   });
//   console.log('paths', paths);

//   // We'll pre-render only these paths at build time.
//   // { fallback: false } means other routes should 404.
//   return { paths, fallback: true };
//   // ...
// }

// export async function getStaticProps(context) {
//   console.log('getStaticProps');
//   console.log('context', context);
//   // Call an external API endpoint to get posts.
//   // You can use any data fetching library
//   const story = await getStory({ id: context.params.pid });
//   // const posts = await res.json();

//   // By returning { props: posts }, the Blog component
//   // will receive `posts` as a prop at build time
//   return {
//     props: {
//       story,
//     },
//   };
// }

// export default Post;
