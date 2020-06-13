import React from 'react';
import { getStory, getStories } from '../../src/utils/Api';

import Navigation from '../../src/components/navigation';
import Header from '../../src/components/Header';
import Footer from '../../src/components/Footer';
import { css } from 'emotion';

const FormStyle = css`
  background-color:grey;
`;

class Story extends React.Component {
  constructor(props: void) {
    super(props);

    this.state = {
      reactions: ['com1','com2'],
    };
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
    const {reactions} = this.state;
    console.log(event);
    this.setState({reactions: reactions.push(event.target.value)});
    
  }

  render() {
    const {reactions} = this.state;
    const { story } = this.props;
    const reactionsList = reactions.map((item, index) => <p key={index}>{item}</p>);
    console.log(reactions);
    return (
      <>
        <Navigation/>
        <div>
          <p>Id: {story._id}</p>
          <p>Content: {story.content}</p>
          <p>Date: {story.date}</p>
          <div>
            {reactionsList}
          </div>
          <div className={FormStyle}>
          <form onSubmit={this.handleSubmit}>
            <input type="text" />
            <button type="submit" >Submit</button>
          </form>
          </div>
        </div>
        <Footer/>
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
