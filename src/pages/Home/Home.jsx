import styles from "./Home.module.css";

import DivaSection from "./parts/DivaSection/DivaSection"
import NewPiecesList from "./parts/NewPiecesList/NewPiecesList";
import NossaHistoria from "./parts/NossaHistoria/NossaHistoria";

function Home() {
  return(
    <section className="container">
        <DivaSection/>
        <div className={styles.spacer}></div>
        <NewPiecesList/>
      <NossaHistoria/>
    </section>  
  )
}

export default Home;
