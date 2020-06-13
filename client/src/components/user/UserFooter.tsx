export default function UserFooter({ username, image, link, projectTitle }) {
  return (
    <span className="author">
      <a href={link} target="_blank">
        {username}
      </a>
      <span className="job">({projectTitle})</span>
    </span>
  );
}

// &amp;
//       <span className="author">
//         <a href="#">Jénaïc Cambré</a>
//         <span className="job">
//           (Développeur frontend &amp; chef de projet)
//         </span>
//       </span>
//       <span className="author">
//       <a href="#">???</a>
//       <span className="job">
//         (designer) - pourquoi pas toi ?&nbsp;{' '}
//         <i className="far fa-smile"></i>
//       </span>
//     </span>
