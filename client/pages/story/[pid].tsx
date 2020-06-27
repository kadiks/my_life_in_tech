import React from 'react';
import Head from 'next/head';
import Router from 'next/router';
import { getStory, getStoryComments, postComment } from '../../src/utils/Api';

import Config from '../../src/Config';
import Navigation from '../../src/components/navigation';
import Reactions from '../../src/components/story/Reactions';
import Footer from '../../src/components/Footer';
import { css } from 'emotion';

export const toDate = (timestamp)=>(new Date(timestamp).toLocaleDateString());

// TODO : factoriser dans utils
const ErrorAlert = ({ text = '' }) => {
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
      error: '',
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
              <p className={css`text-align: justify; text-overflow: ellipsis; overflow: hidden;`}>{story.content}</p>
              {story.handle && <p className={css`text-align: right; font-style: italic;`}>{story.handle}</p>}
              <div className="card-footer">
                <Reactions storyId={story._id} />
              </div>
            </div>

            <div>{comments}</div>
            <div className={css`position: relative; margin-bottom: 1em; `}>
              <textarea placeholder="Commenter cette story..." onChange={this.handleChange} className={commentStyle} />
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
  background-image: url("/img/header/header1.jpg");
  background-size : cover;
`;

const formStyle = css`
  color: black;
  background-color: rgba(255, 255, 255, 0.92);
  border-radius: 0.1em;
  padding: 1em;
  font-weight: 400;
`;

const storyStyle = css`
  position: relative;
  border-bottom: 0.01em solid black;
  margin-bottom: 0.6em;

  .card-footer ul{
    padding-bottom: 1em;
  }

  :hover{

    .card-footer ul li{
      opacity: 0.7;
    }

    .card-footer li:hover{
      opacity: 1;
    }

    .card-footer ul.selected li{
      opacity: 0.1;
    }

    .card-footer ul.selected li.selected{
      opacity: 1;
    }

  }
`;

const commentStyle = css`
  color: black;
  font-weight: 400;
  background-color: rgba(255, 255, 255, 0.45);
  border-radius: 0.3em;
  padding: 0.4em;
  width: 100%;
  min-width: 100%;
  max-width: 100%;
`;

const submitStyle = css`
  position: absolute;
  bottom: 0.8em;
  right: 0.7em;
`;

export default Story;
