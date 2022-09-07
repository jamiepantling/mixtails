import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";
import style from "./HomePage.module.css";
import { useMediaQuery } from 'react-responsive'

export default function HomePage(props) {
  const isMobile = useMediaQuery({ maxWidth: 800 })
  const isMedium = useMediaQuery({ minWidth: 800, maxWidth: 1100 })
  const isBigScreen = useMediaQuery({ minWidth: 1100 })

    return (
    <main>
      <Header setUserInState={props.setUserInState} />
      
      {isMobile && <div className={style.cardContainer}>
        <Link to="/moods" className={`${style.cardMobile} ${style.one} ${style.card}`}>
          <span>WATCHA FEELIN'?</span>
        </Link>
        <Link to="/flavours" className={`${style.cardMobile} ${style.card} ${style.two}`}>
        <span>WHAT'S YOUR FLAVOUR?</span>
        </Link>
      </div>}

      {isMedium && <div className={style.cardContainer}>
        <Link to="/moods" className={`${style.card} ${style.cardMedium} ${style.one}`}>
          <span>WATCHA FEELIN'?</span>
        </Link>
        <Link to="/flavours" className={`${style.card} ${style.cardMedium} ${style.two}`}>
        <span>WHAT'S YOUR FLAVOUR?</span>
        </Link>
      </div>}
      {isBigScreen && <div className={style.cardContainer}>
        <Link to="/moods" className={`${style.card} ${style.cardBig} ${style.one}`}>
          <span>WATCHA FEELIN'?</span>
        </Link>
        <Link to="/flavours" className={`${style.card} ${style.cardBig} ${style.two}`}>
        <span>WHAT'S YOUR FLAVOUR?</span>
        </Link>
      </div>}
    </main>
  );
}
