import { getContentWithWhitelist } from '../../utils/text';

export default ({ content, whitelist }) => {
  const updatedContent = getContentWithWhitelist({
    content,
    whitelist,
  });
  return (
    <div className="card-body">
      {/* <p>{updatedContent}</p> */}
      <p dangerouslySetInnerHTML={updatedContent} />
    </div>
  );
};
