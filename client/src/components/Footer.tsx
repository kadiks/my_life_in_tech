import Config from '../Config';

import { UserData, UserFooter } from './user';

export default () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-6 offset-3">
            <div className="row">
              <div className="col-12">
                <p className="credits">
                  Made with &nbsp;<i className="fas fa-heart"></i>&nbsp; by
                </p>
              </div>
              {UserData.map((user, index) => {
                return (
                  <div className="col" key={index}>
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
