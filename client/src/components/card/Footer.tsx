import { Icon } from '../core';
import { Reactions } from '../story';

export default function Footer({ _id }) {
  return (
    <div className="card-footer">
      <Reactions storyId={_id} />
    </div>
  );
}
