import React from 'react';
import Head from 'next/head';
import { getStory, getStories } from '../../src/utils/Api';

import Config from '../../src/Config';
import Navigation from '../../src/components/navigation';
import Footer from '../../src/components/Footer';
import { css } from 'emotion';

const containerStyle = css`
  justify-content: center;
  display: flex;
  align-items: center;
  min-height: 100%;
`;

const formStyle = css`
  background-color: rgba(99, 93, 93, 0.7);
  border-radius: 5px;
  padding: 10px;
`;

const reactionsBox = css`
  position: absolute;
  top: -2rem;
  left: 0;
`;

const storyStyle = css`
  position: relative;
  border-bottom: 1px solid black;

  &hover: {
    ${reactionsBox} {
      display: block;
    }
  }
`;

const commentStyle = css`
  background-color: rgba(114, 214, 236, 0.7);
  border-radius: 6px;
  border-bottom: 1px solid black;
  padding: 6px;
  width: 100%;
  min-width: 100%;
  max-width: 100%;
`;

const submitStyle = css`
  position: absolute;
  bottom: 10px;
  right: 9px;
`;

export const toDate = (unix_timestamp) =>{
  // Create a new JavaScript Date object based on the timestamp
  // multiplied by 1000 so that the argument is in milliseconds, not seconds.
  const date = new Date(unix_timestamp * 1000);
  // Hours part from the timestamp
  const hours = date.getHours();
  // Minutes part from the timestamp
  const minutes = "0" + date.getMinutes();
  // Seconds part from the timestamp
  const seconds = "0" + date.getSeconds();

  // Will display time in 10:30:23 format
  const formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

  return formattedTime;
}

class Story extends React.Component {
  constructor(props: void) {
    super(props);

    this.state = {
      comments: ['com1', 'com2'],
      comment: '',
    };

    this.handleChange = this.handleChange.bind(this);
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

  handleChange(event) {
    this.setState({comment: event.target.comment});
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('A comment was submitted: ' + this.state.comment);
  }

  render() {
    const { story } = this.props;
    const comments = ['com1', 'com2', 'com3'].map((item, index) => (
      <div>
        <p className={commentStyle} key={index}>
          {item}
        </p>
      </div>
    ));

    return (
      <>
        <Head>
          <meta
            property="og:url"
            content={`${Config.API_URL}/story/${story._id}`}
          />
        </Head>
        <Navigation />
        <div className={containerStyle}>
          <form
            className={`${formStyle} col-12 col-md-6 col-lg-6 `}
            
          >
            <div className={storyStyle}>
              <p className={css`text-align: right;`}>{toDate(story.date)}</p>
              <p className={css`text-overflow: ellipsis; overflow: hidden;`}>{story.content}</p>
              <div className={reactionsBox}>
                <span className="fas fa-surprise" />
                <span className="fas fa-surprise" />
                <span className="fas fa-surprise" />
              </div>
            </div>

            <div>{comments}</div>
            <div className={css`position: relative;`}>
              <textarea onChange={this.handleChange} className={commentStyle} />
              <span onClick={this.handleSubmit}
                className={`${submitStyle} far fa-paper-plane`}
                
              />
            </div>
          </form>
        </div>
        <Footer />
      </>
    );
  }
}

export default Story;
