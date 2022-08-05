import Header from "./components/Header/Header";
import styles from "./App.module.css";
import Profile from "./components/Profile/Profile.js";
import { getUser, getCards } from "./components/Api/Api.js";
import { useEffect, useState } from "react";
import Cards from "./components/Cards/Cards.js";
import Footer from "./components/Footer/Footer.js";

function App() {
  const [userInfo, setUserInfo] = useState([]);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    getUser().then((data) => setUserInfo(data));

    getCards().then((data) => setCards(data));
  }, []);

  return (
    <body className={styles.page}>
      <Header />
      <section className={styles.content}>
        <Profile
          image={userInfo.avatar}
          name={userInfo.name}
          profession={userInfo.about}
        ></Profile>
        <Cards cards={cards}></Cards>
      </section>
      <Footer />
    </body>
  );
}

export default App;
