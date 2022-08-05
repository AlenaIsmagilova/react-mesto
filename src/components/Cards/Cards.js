import { useState } from "react";
import styles from "../Cards/Cards.module.css";

const Cards = ({ cards }) => {
  const [isLiked, setIsLiked] = useState(false);
  const activeLikeClassname = isLiked ? `${styles.cardButtonLikeActive}` : null;

  const handleLikes = () => {
    setIsLiked(!isLiked);
  };

  return (
    <section className={styles.cards}>
      <ul className={styles.cardsList}>
        {cards.map((card) => (
          <li className={styles.cardItem} key={card._id}>
            <img className={styles.cardImage} src={card.link} alt={card.name} />
            <button className={styles.cardButtonDelete}></button>
            <div className={styles.cardDesc}>
              <h2 className={styles.cardTitle}>{card.name}</h2>
              <div className={styles.cardButtonWrapper}>
                <button
                  className={`${styles.cardButtonLike} ${activeLikeClassname}`}
                  onClick={handleLikes}
                ></button>
                <p className={styles.countCardLikes}>{card.likes.length}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Cards;
