import { getContentWithWhitelist } from '../utils/text';

const Post = ({ post = {}, whitelist } = {}) => {
  const { content, handle } = post;
  return (
    <>
      <p
        className="post"
        dangerouslySetInnerHTML={getContentWithWhitelist({
          content,
          whitelist,
        })}
      />
      <p className="author">{handle}</p>
    </>
  );
};

const Content = ({ content = 'My life in tech' } = {}) => {
  console.log('Ookokok', content, typeof content, content.length);
  if (content.length === 0) {
    content = 'My life in tech';
  }
  return <h1>{content}</h1>;
};

export default ({
  isBackground = true,
  isStory = true,
  content = '',
  stories = [],
  whitelist,
}) => {
  const headerNum = getRandomInt(1, 4);
  let styles = {};
  if (isBackground === true) {
    styles = {
      backgroundImage: `url('/img/header/header${headerNum}.jpg')`,
    };
  }
  return (
    <header className={isStory === false ? 'add-xp' : ''} style={styles}>
      <div className="header-filter"></div>
      <div className="container">
        <div className="row">
          <div className="col-8 offset-2 content">
            {isStory && stories[0] ? (
              <Post post={stories[0]} whitelist={whitelist} />
            ) : (
              <Content content={content} />
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
