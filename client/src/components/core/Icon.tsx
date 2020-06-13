export default function Icon({ name = 'thumbs-up' } = {}) {
  return <i className={`far fa-${name}`}></i>;
}
