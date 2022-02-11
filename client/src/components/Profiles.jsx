import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import SingleProfile from './SingleProfile';

import AddProfile from './AddProfile';
import ModalAddProfile from './ModalAddProfile';

const Profiles = () => {
  const { profiles } = useSelector((state) => state.userReducer);
  const [isModalOpen, setOpenModal] = useState(false);
  console.log(profiles);
  return (
    <div className="profiles">
      <h2 className="profiles-header">Profiles</h2>
      <div className="profiles-list">
        {profiles &&
          profiles.map((profile, i) => {
            return <SingleProfile profileData={profile} key={i} />;
          })}
        <AddProfile setOpenModal={setOpenModal} />
      </div>

      {isModalOpen && <ModalAddProfile setOpenModal={setOpenModal} />}
    </div>
  );
};

export default Profiles;
