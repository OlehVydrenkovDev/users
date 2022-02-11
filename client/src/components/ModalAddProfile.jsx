import React from 'react';
import { useSelector } from 'react-redux';

import { addProfile } from '../http/userApi';

const ModalAddProfile = ({ setOpenModal }) => {
  //const dispatch = useDispatch();
  const { id, profiles } = useSelector((state) => state.userReducer);

  const onSubmitNewProfile = async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const gender = e.target[1].value ? 'male' : 'female';
    const birthDate = e.target[3].value;
    const city = e.target[4].value;
    setOpenModal(false);
    profiles.push({ name, gender, birthDate, city });
    const newData = await addProfile(id, [...profiles]);
    console.log(newData);
  };

  return (
    <div className="modal">
      <div className="modal__content">
        <form
          className="content__modal-profile"
          onSubmit={(e) => onSubmitNewProfile(e)}
        >
          <label className="modal-profile__label">name:</label>
          <input type="text" className="modal-profile__input" />

          <div className="gender">
            <p className="modal-profile__label">gender:</p>

            <div className="checkboxes">
              <label className="modal-profile__label">
                <input type="radio" value="1" name="gender" />
                male
              </label>

              <label className="modal-profile__label">
                <input type="radio" value="1" name="gender" />
                female
              </label>
            </div>
          </div>

          <label className="modal-profile__label">birthdate:</label>
          <input type="date" className="modal-profile__input" />

          <label className="modal-profile__label">city:</label>
          <input type="text" className="modal-profile__input" />

          <div className="modal-profile__buttons">
            <input
              type="submit"
              className="buttons__add-profile submit"
              value=" "
            />
            <input
              type="button"
              className="close buttons__close-profile "
              onClick={() => setOpenModal(false)}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalAddProfile;
