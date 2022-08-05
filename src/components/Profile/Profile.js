import { useState } from "react";
import styles from "../Profile/Profile.module.css";
import Modal from "../Modal/Modal.js";

const Profile = ({ image, name, profession }) => {
  const [avatarModalActive, setAvatarModalActive] = useState(false);
  const [editUserInfoModalActive, setEditUserInfoModalActive] = useState(false);
  const [addNewCardModalActive, setAddNewCardModalActive] = useState(false);

  const handleOpenAvatarModal = () => {
    setAvatarModalActive(true);
  };

  const handleEditUserInfoModal = () => {
    setEditUserInfoModalActive(true);
  };

  const handleAddNewCardModal = () => {
    setAddNewCardModalActive(true);
  };

  return (
    <section className={styles.profile}>
      <div className={styles.profileDesc}>
        <img
          className={styles.profileAvatar}
          src={image}
          alt="фото жак-ив-кусто"
        />
        <div
          className={styles.profileAvatarEdit}
          onClick={handleOpenAvatarModal}
        ></div>
        {avatarModalActive ? (
          <Modal
            open={avatarModalActive}
            title="Обновить аватар"
            handleClose={() => setAvatarModalActive(false)}
          >
            <form
              className={styles.form}
              name="editAvatarForm"
              id="editAvatarForm"
            >
              <label className={styles.formField}>
                <input
                  className={styles.formInput}
                  id="inputLinkEditAvatar"
                  type="url"
                  name="link"
                  required
                  placeholder="Введите адрес"
                />
                <span className={styles.formInputError}></span>
              </label>
              <button className={styles.formButton} type="submit" disabled>
                Сохранить
              </button>
            </form>
          </Modal>
        ) : null}
        <div className={styles.profileInfo}>
          <div className={styles.profileWrapper}>
            <h1 className={styles.profileName}>{name}</h1>
            <button
              className={styles.profileButton}
              type="button"
              onClick={handleEditUserInfoModal}
            ></button>
          </div>
          <p className={styles.profileSubtitle}>{profession}</p>
        </div>
        {editUserInfoModalActive ? (
          <Modal
            open={editUserInfoModalActive}
            title="Редактировать профиль"
            handleClose={() => setEditUserInfoModalActive(false)}
          >
            <form className={styles.form} name="editForm" id="editForm">
              <label className={styles.formField}>
                <input
                  className={styles.formInput}
                  id="inputFirstname"
                  type="text"
                  name="firstname"
                  minLength="2"
                  maxLength="40"
                  required
                  placeholder="Введите имя"
                />
                <span className={styles.formInputError}></span>
              </label>
              <label className={styles.formField}>
                <input
                  className={styles.formInput}
                  id="inputProf"
                  type="text"
                  name="profession"
                  minLength="2"
                  maxLength="200"
                  required
                  placeholder="Введите профессию"
                />
                <span className={styles.formInputError}></span>
              </label>
              <button className={styles.formButton} type="submit">
                Сохранить
              </button>
            </form>
          </Modal>
        ) : null}
      </div>
      <button
        className={styles.profileButtonAdded}
        type="button"
        onClick={handleAddNewCardModal}
      ></button>
      {addNewCardModalActive ? (
        <Modal
          open={addNewCardModalActive}
          title="Новое место"
          handleClose={() => setAddNewCardModalActive(false)}
        >
          <form className={styles.form} name="addForm" id="addForm">
            <label className={styles.formField}>
              <input
                className={styles.formInput}
                id="inputPlace"
                type="text"
                name="place"
                minLength="2"
                maxLength="30"
                required
                placeholder="Введите название"
              />
              <span className={styles.formInputError}></span>
            </label>
            <label className={styles.formField}>
              <input
                className={styles.formInput}
                id="inputLink"
                type="url"
                name="link"
                required
                placeholder="Введите адрес"
              />
              <span className={styles.formInputError}></span>
            </label>
            <button className={styles.formButton} type="submit" disabled>
              Создать
            </button>
          </form>
        </Modal>
      ) : null}
    </section>
  );
};

export default Profile;
