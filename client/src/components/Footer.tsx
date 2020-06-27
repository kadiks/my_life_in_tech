import Config from '../Config';

import { UserData, UserFooter } from './user';

export default () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
            <div className="row">
              <div className="col-12">
                <p className="credits">
                  Made with &nbsp;<i className="fas fa-heart"></i>&nbsp; by
                </p>
              </div>
              {[
                ...UserData,
                {
                  username: '???',
                  projectTitle: 'Designer, pourquoi pas toi ? :-D',
                },
              ].map((user, index) => {
                return (
                  <div className="col-6 col-md-3" key={index}>
                    <UserFooter {...user} />
                  </div>
                );
              })}
            </div>
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
