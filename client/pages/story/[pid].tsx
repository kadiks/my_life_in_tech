import React from 'react';
import Head from 'next/head';
import { getStory, getStoryComments, postComment } from '../../src/utils/Api';

import Config from '../../src/Config';
import Navigation from '../../src/components/navigation';
import Footer from '../../src/components/Footer';
import { css } from 'emotion';

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

// TODO : factoriser dans utils
const ErrorAlert = ({ text = '' }) => {
  console.log('ErrorAlert text', text);
  return (
    <div className="row">
      <div className="col-12">
        <div className="alert-error">{text.toString()}</div>
      </div>
    </div>
  );
};

class Story extends React.Component {
  constructor(props: void) {
    super(props);

    this.state = {
      error: 'une erreur est survenu',
      comment: {
          storyId: this.props.story._id,
          date: null,
        },
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setError = this.setError.bind(this);
  }

  static async getInitialProps({ query, }) {
    const story = await getStory({ id: query.pid });
    const storyComments = await getStoryComments({id: query.pid})

    return {
      story,
      storyComments,
    };
  }

  async componentDidMount() {}

  setError(error){
    this.setState({error});
  }

  handleChange(event) {
    let newComment = {
      ...this.state.comment, 
      comment: event.target.value
    };
    this.setState({comment: newComment});
  }

  async handleSubmit(event) {
    event.preventDefault();

    const {storyId, comment, date} = this.state.comment;
    console.log('A comment was submitted: ' + comment);
    const json = await postComment({
      storyId,
      comment,
      date,
    });
    
    if (json.hasOwnProperty('_id') === true) {
      Router.push(`/story/${storyId}`);
    } else {
      if (json.hasOwnProperty('error') === true) {
        this.setError(json.error);
      } else {
        this.setError('Une erreur est survenue. Veuillez essayer plus tard');
      }
    }
  }

  render() {
    const { story, storyComments } = this.props;
    const { error } = this.state;
    const comments = storyComments.map((item) => (
      <div key={item._id}>
        <p className={commentStyle} >
          {item.comment}
        </p>
      </div>
    ));

    return (
      <div>
        <Head>
          <meta
            property="og:url"
            content={`${Config.API_URL}/story/${story._id}`}
          />
        </Head>
      
        <Navigation />
        <div className={containerStyle}>
          <form className={`${formStyle} col-12 col-md-6 col-lg-6 `}>
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
            <div className={css`position: relative; margin-bottom: 1em; `}>
              <textarea onChange={this.handleChange} className={commentStyle} />
              <span onClick={this.handleSubmit}
                className={`${submitStyle} far fa-paper-plane`}
              />
            </div>
            {error && <ErrorAlert text={error} />}
          </form>
        </div>
        <Footer />
      </div>
    );
  }
}

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

export default Story;
