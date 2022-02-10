import React from 'react';

const ModalAddProfile = () => {
  return (
    <div className="modal">
      <div className="modal__content">
        <form className="content__modal-profile">
          <label className="modal-profile__label">name:</label>
          <input type="text" />

          <div className="gender">
            <p className="modal-profile__label">gender:</p>

            <input type="checkbox" id="male" />
            <label htmlFor="male" className="modal-profile__label">
              male
            </label>
            <input type="checkbox" id="female" />
            <label htmlFor="female" className="modal-profile__label">
              female
            </label>
          </div>
          <label className="modal-profile__label">birthdate:</label>
          <input type="date" />

          <label className="modal-profile__label">city:</label>
          <input type="text" />
          <input type="submit" />
          <input type="button" value="close" />
        </form>
      </div>
    </div>
  );
};

export default ModalAddProfile;
