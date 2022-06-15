import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";
import style from "./HomePage.module.css";
import { useMediaQuery } from 'react-responsive'

export default function HomePage(props) {
  const isMobile = useMediaQuery({ maxWidth: 800 })

    return (
    <main>
      <Header setUserInState={props.setUserInState} />
      
      {isMobile && <div className={style.cardContainer}>
        <Link to="/moods" className={`${style.cardMobile} ${style.one}`}>
          <span>WATCHA FEELIN'?</span>
        </Link>
        <Link to="/flavours" className={`${style.cardMobile} ${style.two}`}>
        <span>SAVOUR THE FLAVOUR</span>
        </Link>
      </div>}
      {!isMobile && <div className={style.cardContainer}>
        <Link to="/moods" className={`${style.card} ${style.one}`}>
          <span>WATCHA FEELIN'?</span>
        </Link>
        <Link to="/flavours" className={`${style.card} ${style.two}`}>
        <span>SAVOUR THE FLAVOUR</span>
        </Link>
      </div>}
    </main>
  );
}
