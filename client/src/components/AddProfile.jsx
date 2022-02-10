import React from 'react';

const AddProfile = ({ setOpenModal }) => {
  return (
    <div className="add-container" onClick={() => setOpenModal(true)}>
      <div className="add-icon"></div>
      <p>Create new profile</p>
    </div>
  );
};

export default AddProfile;
