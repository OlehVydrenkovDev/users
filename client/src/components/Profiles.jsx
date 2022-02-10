import React, { useState } from 'react';

import AddProfile from './AddProfile';
import ModalAddProfile from './ModalAddProfile';

const Profiles = () => {
  const [isModalOpen, setOpenModal] = useState(false);
  console.log(isModalOpen);
  return (
    <div>
      <h2 className="profiles-header" onClick={() => console.log('click')}>
        Profiles
      </h2>

      <AddProfile setOpenModal={setOpenModal} />

      {isModalOpen && <ModalAddProfile />}
    </div>
  );
};

export default Profiles;
