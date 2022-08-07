import styles from "../Cards/Cards.module.css";
import { getCards, like, unlike } from "../Api/Api.js";

const Cards = ({ cards, user, setCards }) => {
  const handleLikes = (card, currentCardLikedByUser) => {
    if (currentCardLikedByUser) {
      unlike(card._id).then(() => {
        getCards().then((data) => {
          setCards(data);
        });
      });
    } else {
      like(card._id).then(() => {
        getCards().then((data) => {
          setCards(data);
        });
      });
    }
  };

  return (
    <section className={styles.cards}>
      <ul className={styles.cardsList}>
        {cards.map((card) => {
          const currentCardLikedByUser = card.likes
            .map((userWhoLike) => {
              return userWhoLike._id;
            })
            .includes(user._id);
          const activeLikeClassname = currentCardLikedByUser
            ? `${styles.cardButtonLikeActive}`
            : null;
          return (
            <li className={styles.cardItem} key={card._id}>
              <img
                className={styles.cardImage}
                src={card.link}
                alt={card.name}
              />
              <button className={styles.cardButtonDelete}></button>
              <div className={styles.cardDesc}>
                <h2 className={styles.cardTitle}>{card.name}</h2>
                <div className={styles.cardButtonWrapper}>
                  <button
                    className={`${styles.cardButtonLike} ${activeLikeClassname}`}
                    onClick={() => handleLikes(card, currentCardLikedByUser)}
                  ></button>
                  <p className={styles.countCardLikes}>{card.likes.length}</p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Cards;
