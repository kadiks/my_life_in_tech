import Config from '../Config';

export default () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-6 offset-3">
            <p className="credits">
              Made with &nbsp;<i className="fas fa-heart"></i>&nbsp; by
              <span className="author">
                <a href="#">Gregory Houldsworth</a>
                <span className="job">(Développeur backend)</span>
              </span>
              &amp;
              <span className="author">
                <a href="#">Jénaïc Cambré</a>
                <span className="job">
                  (Développeur frontend &amp; chef de projet)
                </span>
              </span>
              <span className="author">
                <a href="#">???</a>
                <span className="job">
                  (designer) - pourquoi pas toi ?&nbsp;{' '}
                  <i className="far fa-smile"></i>
                </span>
              </span>
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-right">
            <small>Version {Config.VERSION}</small>
          </div>
        </div>
      </div>
    </footer>
  );
};
