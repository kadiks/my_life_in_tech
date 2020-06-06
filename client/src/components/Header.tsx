const Post = ({ post }) => {
  const { content, handle } = post;
  return (
    <>
      <p className="post">{content}</p>
      <p className="author">{handle}</p>
    </>
  );
};

const Content = ({ content }) => {
  return <h1>{content}</h1>;
};

export default ({
  isBackground = true,
  isPost = true,
  content = '',
  post = {},
}) => {
  const headerNum = getRandomInt(1, 4);
  let styles = {};
  if (isBackground === true) {
    styles = {
      backgroundImage: `url('/img/header/header${headerNum}.jpg')`,
    };
  }
  return (
    <header className={isPost === false ? 'add-xp' : ''} style={styles}>
      <div className="header-filter"></div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            {isPost ? <Post post={post} /> : <Content content={content} />}
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
