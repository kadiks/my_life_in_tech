import Link from 'next/link';
import { getContentWithWhitelist } from '../../utils/text';

export default ({ _id, content, whitelist }) => {
  const updatedContent = getContentWithWhitelist({
    content,
    whitelist,
  });
  return (
    <div className="card-body">
      {/* <p>{updatedContent}</p> */}
      <Link href={`/story/${_id}`}>
        <p dangerouslySetInnerHTML={updatedContent} />
      </Link>
    </div>
  );
};
