import React from 'react';

const SingleProfile = ({ profileData }) => {
  return (
    <div className="single-profile">
      <p>{profileData.name}</p>
      <p>{profileData.gender}</p>
      <p>{profileData.birthDate}</p>
      <p>{profileData.city}</p>
      <div className="single-profile__buttons">
        <input type="button" value="edit " className="edit" />
        <input type="button" value="delete " className="delete" />
      </div>
    </div>
  );
};

export default SingleProfile;
