import React from 'react';

const UserRow = ({ username, image, link, content }) => {
  const renderImage = (img) => {
    if (img) {
      return img;
    }
    return 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png';
  };

  const renderContent = (content) => {
    if (content) {
      return content;
    }
    return `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui
    enim sunt aperiam, id tempore fuga error deserunt eligendi sint
    illum ducimus quia iste earum corporis ullam asperiores magni
    unde provident.`;
  };

  return (
    <div className="row user__row">
      <div className="col-12 col-md-4 col-lg-3 user__row-left">
        <a href={link} target="_blank">
          <img
            src={renderImage(image)}
            alt={username}
            className="user__row-img"
          />
        </a>
      </div>

      <div className="col-12 col-md-8 col-lg-9 user__row-right">
        <h4 className="user__row-title">{username}</h4>
        <p className="user__row-content">{renderContent(content)}</p>
        {link && (
          <div className="user__row-link-section">
            <a className="user__row-link" href={link} target="_blank">
              Visiter sa page
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserRow;
